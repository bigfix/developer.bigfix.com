The source for [relevance.io](https://www.relevance.io).

# Contributing

The site can be previewed using Vagrant. To do this run:

    $ vagrant up
    $ vagrant ssh

Then inside the virtual machine run:

    $ ./jekyll-serve

The site will then be available at localhost:4000. Changes made to any files
should be automatically noticed, so you can just change stuff and refresh the
page. However, it looks like changes to `_config.yml` are not automaticallly
refreshed.
