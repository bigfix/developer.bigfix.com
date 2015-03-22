.PHONY: nginx-dev nginx-prod staging deploy all

SOURCE ?= .
STAGING ?= staging

# The targets to deploy a dev build

all: staging remote-staging
	sudo make deploy remote-deploy

################################################################################
# assets
################################################################################

$(STAGING)/site/static/fonts: $(SOURCE)/site/assets/font-awesome-4.3.0/fonts
	mkdir -p $(STAGING)/site/static
	rsync --archive --delete \
		$(SOURCE)/site/assets/font-awesome-4.3.0/fonts \
		$(STAGING)/site/static

CSS_FILES := \
	$(SOURCE)/site/assets/Skeleton-2.0.4/css/normalize.css \
	$(SOURCE)/site/assets/Skeleton-2.0.4/css/skeleton.css \
	$(SOURCE)/site/assets/font-awesome-4.3.0/css/font-awesome.css \
	$(SOURCE)/site/assets/site.css

$(STAGING)/site/static/site.css: $(CSS_FILES)
	mkdir -p $(STAGING)/site/static
	cat $^ > $@

$(STAGING)/site/static/site.js: $(SOURCE)/site/assets/site.js
	mkdir -p $(STAGING)/site/static
	cat $^ > $@

STAGING_TARGETS += $(STAGING)/site/static/site.css
STAGING_TARGETS += $(STAGING)/site/static/site.js
STAGING_TARGETS += $(STAGING)/site/static/fonts

################################################################################
# pages
################################################################################

$(STAGING)/build/package.json: $(wildcard $(SOURCE)/site/build/*)
	mkdir -p $(STAGING)
	rsync --archive --delete --exclude=node_modules \
		$(SOURCE)/site/build/ \
		$(STAGING)/build
	cd $(STAGING)/build && npm install
	touch $@

PAGES_DEPS := \
	$(STAGING)/build/package.json \
	$(SOURCE)/site/index.html \
	$(wildcard $(SOURCE)/site/data/*) \
	$(wildcard $(SOURCE)/site/guide/*) \
	$(wildcard $(SOURCE)/site/reference/*) \
	$(wildcard $(SOURCE)/site/search/*) \
	$(wildcard $(SOURCE)/site/templates/*)

$(STAGING)/site/index.html $(STAGING)/docs.json $(STAGING)/docs.api.json: $(PAGES_DEPS)
	node $(STAGING)/build $(SOURCE)/site $(STAGING)

STAGING_TARGETS += $(STAGING)/site/index.html

WWW_DEPS := \
	$(STAGING)/site/static/site.css \
	$(STAGING)/site/static/site.js \
	$(STAGING)/site/static/fonts \
	$(STAGING)/site/index.html

/var/www/site/index.html: $(WWW_DEPS)
	mkdir -p /var/www/site
	rsync --archive --delete $(STAGING)/site/ /var/www/site
	touch $@

DEPLOY_TARGETS += /var/www/site/index.html

################################################################################
# /api/search
################################################################################

$(STAGING)/api/search/language.json: $(SOURCE)/site/data/language.json
	mkdir -p $(STAGING)/api/search/
	cp -f $< $@

$(STAGING)/api/search/docs.api.json: $(STAGING)/docs.api.json
	mkdir -p $(STAGING)/api/search/
	cp -f $< $@

$(STAGING)/api/search/package.json: $(wildcard $(SOURCE)/site/api/search/*)
	mkdir -p $(STAGING)/api/search/
	rsync --archive --delete \
		--exclude=node_modules \
		--exclude=language.json \
		--exclude=docs.json \
		--exclude=docs.api.json \
		$(SOURCE)/site/api/search/ \
		$(STAGING)/api/search/
	cd $(STAGING)/api/search/ && npm install
	touch $@

STAGING_TARGETS += $(STAGING)/api/search/language.json
STAGING_TARGETS += $(STAGING)/api/search/docs.api.json
STAGING_TARGETS += $(STAGING)/api/search/package.json

SEARCH_DEPS := \
	$(SOURCE)/conf/upstart/search.conf \
	$(STAGING)/api/search/package.json \
	$(STAGING)/api/search/language.json \
	$(STAGING)/api/search/docs.api.json

/etc/init/search.conf: $(SEARCH_DEPS)
	stop search || true
	mkdir -p /var/www/api
	rsync --archive --delete $(STAGING)/api/search/ /var/www/api/search
	cp -f $(SOURCE)/conf/upstart/search.conf /etc/init/search.conf
	start search

DEPLOY_TARGETS += /etc/init/search.conf

################################################################################
# /api/evaluate
################################################################################

$(STAGING)/api/evaluate/package.json: $(wildcard $(SOURCE)/site/api/evaluate/*)
	mkdir -p $(STAGING)/api/evaluate/
	rsync --archive --delete \
		--exclude=node_modules \
		$(SOURCE)/site/api/evaluate/ \
		$(STAGING)/api/evaluate/
	cd $(STAGING)/api/evaluate/ && npm install
	touch $@

REMOTE_STAGING_TARGETS += $(STAGING)/api/evaluate/package.json

EVALUATE_DEPS := \
	$(SOURCE)/conf/upstart/evaluate.conf \
	$(STAGING)/api/evaluate/package.json

/etc/init/evaluate.conf: $(EVALUATE_DEPS)
	stop evaluate || true
	mkdir -p /var/www/api
	rsync --archive --delete $(STAGING)/api/evaluate/ /var/www/api/evaluate
	cp -f $(SOURCE)/conf/upstart/evaluate.conf /etc/init/evaluate.conf
	start evaluate

REMOTE_DEPLOY_TARGETS += /etc/init/evaluate.conf

################################################################################
# nginx
################################################################################

nginx-dev: /etc/nginx/sites-enabled/dev.conf
nginx-prod: /etc/nginx/sites-enabled/prod.conf

NGINX_DEPS := \
	/var/www/site \
	/etc/nginx/sites-available/dev.conf \
	/etc/nginx/sites-available/prod.conf \
	/etc/nginx/shared.conf

/etc/nginx/sites-enabled/dev.conf: $(NGINX_DEPS)
	rm -rf /etc/nginx/sites-enabled/*
	cp /etc/nginx/sites-available/dev.conf $@
	nginx -s reload

/etc/nginx/sites-enabled/prod.conf: $(NGINX_DEPS)
	rm -rf /etc/nginx/sites-enabled/*
	cp /etc/nginx/sites-available/prod.conf $@
	nginx -s reload

/var/www/site:
	mkdir -p /var/www/site
	echo It works > /var/www/site/index.html

/etc/nginx/sites-available/dev.conf: $(SOURCE)/conf/nginx/dev.conf
	cp -f $< $@

/etc/nginx/sites-available/prod.conf: $(SOURCE)/conf/nginx/prod.conf
	cp -f $< $@

/etc/nginx/shared.conf: $(SOURCE)/conf/nginx/shared.conf
	cp -f $< $@

################################################################################
# top level targets
################################################################################

# The targets to deploy the web server and web pages

staging: $(STAGING_TARGETS)
deploy: $(DEPLOY_TARGETS)

# The targets to deploy the remote evaluate server

remote-staging: $(REMOTE_STAGING_TARGETS)
remote-deploy: $(REMOTE_DEPLOY_TARGETS)
