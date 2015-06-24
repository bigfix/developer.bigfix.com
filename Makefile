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
	$(wildcard $(SOURCE)/site/guide/**/*) \
	$(wildcard $(SOURCE)/site/reference/**/*) \
	$(wildcard $(SOURCE)/site/search/*) \
	$(wildcard $(SOURCE)/site/templates/*)

$(STAGING)/site/index.html $(STAGING)/docs.json: $(PAGES_DEPS)
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
# /api/relevance/search
################################################################################

$(STAGING)/api/relevance/search/language.json: $(SOURCE)/site/data/language.json
	mkdir -p $(STAGING)/api/relevance/search/
	cp -f $< $@

$(STAGING)/api/relevance/search/docs.json: $(STAGING)/docs.json
	mkdir -p $(STAGING)/api/relevance/search/
	cp -f $< $@

$(STAGING)/api/relevance/search/package.json: $(wildcard $(SOURCE)/site/api/search/*)
	mkdir -p $(STAGING)/api/relevance/search/
	rsync --archive --delete \
		--exclude=node_modules \
		--exclude=language.json \
		--exclude=docs.json \
		$(SOURCE)/site/api/search/ \
		$(STAGING)/api/relevance/search/
	cd $(STAGING)/api/relevance/search/ && npm install
	touch $@

STAGING_TARGETS += $(STAGING)/api/relevance/search/language.json
STAGING_TARGETS += $(STAGING)/api/relevance/search/docs.json
STAGING_TARGETS += $(STAGING)/api/relevance/search/package.json

SEARCH_DEPS := \
	$(SOURCE)/conf/systemd/relevance-search.service \
	$(STAGING)/api/relevance/search/package.json \
	$(STAGING)/api/relevance/search/language.json \
	$(STAGING)/api/relevance/search/docs.json

/usr/lib/systemd/system/relevance-search.service: $(SEARCH_DEPS)
	systemctl stop relevance-search || true
	systemctl disable relevance-search || true
	mkdir -p /var/www/api/relevance
	rsync --archive --delete \
		$(STAGING)/api/relevance/search/ \
		/var/www/api/relevance/search
	cp -f $(SOURCE)/conf/systemd/relevance-search.service \
		/usr/lib/systemd/system/relevance-search.service
	systemctl daemon-reload
	systemctl enable relevance-search
	systemctl start relevance-search

DEPLOY_TARGETS += /usr/lib/systemd/system/relevance-search.service

################################################################################
# /api/relevance/evaluate
################################################################################

$(STAGING)/api/relevance/evaluate/package.json: $(wildcard $(SOURCE)/site/api/evaluate/*)
	mkdir -p $(STAGING)/api/relevance/evaluate/
	rsync --archive --delete \
		--exclude=node_modules \
		$(SOURCE)/site/api/evaluate/ \
		$(STAGING)/api/relevance/evaluate/
	cd $(STAGING)/api/relevance/evaluate/ && npm install
	touch $@

REMOTE_STAGING_TARGETS += $(STAGING)/api/relevance/evaluate/package.json

EVALUATE_DEPS := \
	$(SOURCE)/conf/systemd/relevance-evaluate.service \
	$(STAGING)/api/relevance/evaluate/package.json

/usr/lib/systemd/system/relevance-evaluate.service: $(EVALUATE_DEPS)
	systemctl stop relevance-evaluate || true
	systemctl disable relevance-evaluate || true
	mkdir -p /var/www/api
	rsync --archive --delete \
		$(STAGING)/api/relevance/evaluate/ \
		/var/www/api/relevance/evaluate
	cp -f $(SOURCE)/conf/systemd/relevance-evaluate.service \
		/usr/lib/systemd/system/relevance-evaluate.service
	systemctl daemon-reload
	systemctl enable relevance-evaluate
	systemctl start relevance-evaluate

REMOTE_DEPLOY_TARGETS += /usr/lib/systemd/system/relevance-evaluate.service

################################################################################
# nginx
################################################################################

nginx-dev: /etc/nginx/conf.d/dev.conf
nginx-prod: /etc/nginx/conf.d/prod.conf

NGINX_DEPS := \
	/etc/nginx/shared.conf \
	/etc/nginx/nginx.conf

/etc/nginx/conf.d/dev.conf: $(NGINX_DEPS)
	rm -rf /etc/nginx/conf.d/*
	cp $(SOURCE)/conf/nginx/dev.conf $@
	systemctl reload nginx

/etc/nginx/conf.d/prod.conf: $(NGINX_DEPS)
	rm -rf /etc/nginx/conf.d/*
	cp $(SOURCE)/conf/nginx/prod.conf $@
	systemctl reload nginx

/etc/nginx/shared.conf: $(SOURCE)/conf/nginx/shared.conf
	cp -f $< $@

/etc/nginx/nginx.conf: $(SOURCE)/conf/nginx/nginx.conf
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
