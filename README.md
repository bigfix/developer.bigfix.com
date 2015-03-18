[![Build Status](https://travis-ci.org/briangreenery/relevance.io.svg?branch=master)](https://travis-ci.org/briangreenery/relevance.io)

The source for [relevance.io](https://www.relevance.io).

# Contributing

The easiest way to contribute is to edit the markdown files in the `site`
folder.

### Previewing your changes

To preview the site, install both [Vagrant](https://www.vagrantup.com/) and
[VirtualBox](https://www.virtualbox.org/).

Start the virtual machine and build the site by running:

    $ vagrant up

The site will then be available at [localhost:4000](http://localhost:4000).

If you change something and want to preview the change, ssh to the machine with:

    $ vagrant ssh

Then build the site with:

    $ make
