.PHONY: nginx-dev nginx-prod

# Web server configuration

nginx-dev: /etc/nginx/sites-enabled/dev.conf
nginx-prod: /etc/nginx/sites-enabled/prod.conf

NGINX_CONF := \
	/var/www/site \
	/etc/nginx/sites-available/dev.conf \
	/etc/nginx/sites-available/prod.conf \
	/etc/nginx/shared.conf

/etc/nginx/sites-enabled/dev.conf: $(NGINX_CONF)
	rm -rf /etc/nginx/sites-enabled/*
	cp /etc/nginx/sites-available/dev.conf /etc/nginx/sites-enabled/dev.conf
	nginx -s reload

/etc/nginx/sites-enabled/prod.conf: $(NGINX_CONF)
	rm -rf /etc/nginx/sites-enabled/*
	cp /etc/nginx/sites-available/prod.conf /etc/nginx/sites-enabled/prod.conf
	nginx -s reload

/var/www/site:
	mkdir -p /var/www/site
	echo It works > /var/www/site/index.html

/etc/nginx/sites-available/dev.conf: conf/nginx/dev.conf
	cp -f $< $@

/etc/nginx/sites-available/prod.conf: conf/nginx/prod.conf
	cp -f $< $@

/etc/nginx/shared.conf: conf/nginx/shared.conf
	cp -f $< $@
