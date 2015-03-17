.PHONY: nginx-dev nginx-prod staging deploy all

SOURCE ?= .
STAGING ?= staging

all: staging
	sudo make deploy

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
	$(wildcard $(SOURCE)/site/data/*) \
	$(wildcard $(SOURCE)/site/reference/*) \
	$(wildcard $(SOURCE)/site/search/*) \
	$(wildcard $(SOURCE)/site/templates/*)

$(STAGING)/site/index.html $(STAGING)/docs.json: $(PAGES_DEPS)
	node $(STAGING)/build $(SOURCE)/site $(STAGING)
	touch $@

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

$(STAGING)/api/search/docs.json: $(STAGING)/docs.json
	mkdir -p $(STAGING)/api/search/
	cp -f $< $@

$(STAGING)/api/search/package.json: $(wildcard $(SOURCE)/site/api/search/*)
	mkdir -p $(STAGING)/api/search/
	rsync --archive --delete \
		--exclude=node_modules \
		--exclude=language.json \
		--exclude=docs.json \
		$(SOURCE)/site/api/search/ \
		$(STAGING)/api/search/
	cd $(STAGING)/api/search/ && npm install
	touch $@

STAGING_TARGETS += $(STAGING)/api/search/language.json
STAGING_TARGETS += $(STAGING)/api/search/docs.json
STAGING_TARGETS += $(STAGING)/api/search/package.json

SEARCH_DEPS := \
	$(SOURCE)/conf/upstart/search.conf \
	$(STAGING)/api/search/package.json \
	$(STAGING)/api/search/language.json \
	$(STAGING)/api/search/docs.json

/etc/init/search.conf: $(SEARCH_DEPS)
	stop search || true
	mkdir -p /var/www/api
	rsync --archive --delete $(STAGING)/api/search/ /var/www/api/search
	cp -f $(SOURCE)/conf/upstart/search.conf /etc/init/search.conf
	start search

DEPLOY_TARGETS += /etc/init/search.conf

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

staging: $(STAGING_TARGETS)
deploy: staging $(DEPLOY_TARGETS)
