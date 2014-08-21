#!/bin/sh

set -e

apt-get install -y git

mkdir -p /var/www/repo
mkdir -p /var/www/site

cd /var/www/repo
git init --bare
git remote add origin https://github.com/briangreenery/relevance.io.git
git fetch origin master
git --work-tree /var/www/site checkout master -f

cd /var/www/site
provision/provision.sh
