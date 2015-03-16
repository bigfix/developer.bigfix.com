The source for [relevance.io](https://www.relevance.io).

# Contributing

The easiest way to contribute is to fork this repository and edit the markdown
files in the `site` folder.

### Previewing your changes

To preview the site, install both [Vagrant](https://www.vagrantup.com/) and
[VirtualBox](https://www.virtualbox.org/).

Start the virtual machine by running:

    $ vagrant up

Then to preview the changes, ssh to the virtual machine and build the site with:

    $ vagrant ssh
    $ make staging && sudo make deploy

The site will then be available at [localhost:4000](http://localhost:4000).
