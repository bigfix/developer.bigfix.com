set -e
set -x

# Update all the things
apt-get update

# Get node
curl -sL https://deb.nodesource.com/setup | bash -
apt-get -y install nodejs

# Get jekyll
apt-get install -y ruby1.9.1-dev build-essential
gem install jekyll --no-ri --no-rdoc
gem install japr --no-ri --no-rdoc

# Install the jekyll-serve script
cp /vagrant/provision/jekyll-serve.js /home/vagrant/jekyll-serve
chmod +x /home/vagrant/jekyll-serve
