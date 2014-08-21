#!/bin/sh

set -e

BASEDIR=$(dirname $0)

ufw allow ssh
ufw allow http
ufw allow https
ufw --force enable

curl -sL https://deb.nodesource.com/setup | bash -
apt-get -y install nodejs nginx

cp -f $BASEDIR/nginx.conf /etc/nginx
cp -f $BASEDIR/api.conf /etc/init

chown -R www-data:www-data /var/www/site
