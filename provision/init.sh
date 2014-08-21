#!/bin/sh

set -e

apt-get -y git

mkdir -p /var/www/repo
mkdir -p /var/www/site

cd /var/www/repo
git init --bare
git remote add origin https://github.com/briangreenery/relevance.io.git
git pull origin master
git --work-dir /var/www/site checkout

cd /var/www/site
provision/provision.sh
