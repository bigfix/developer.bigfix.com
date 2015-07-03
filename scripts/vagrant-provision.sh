#!/bin/bash

set -e
set -x

# Turn on selinux to be more like production
sed -i 's/SELINUX=permissive/SELINUX=enforcing/' /etc/selinux/config
setenforce 1
setsebool -P httpd_can_network_connect 1

# Add host entry for sandbox.bigfix.com
echo 127.0.0.1 sandbox.bigfix.com >> /etc/hosts

# Add node yum repo
curl -sL https://rpm.nodesource.com/setup | bash -

# Add epel for nginx 
yum install -y epel-release

# Install all the things
yum install -y nginx nodejs rsync

# Setup Makefile that points to the Makefile in the source directory
echo 'SOURCE=/vagrant' >> /home/vagrant/Makefile
echo 'include /vagrant/Makefile' >> /home/vagrant/Makefile

# Start nginx now and forever
systemctl enable nginx.service
systemctl start nginx.service

# Setup nginx
rm /etc/nginx/nginx.conf
make nginx-dev

# Build the site
sudo -H -u vagrant make staging remote-staging
make deploy remote-deploy
