[![Build Status](https://travis-ci.org/bigfix/developer.bigfix.com.svg?branch=master)](https://travis-ci.org/bigfix/developer.bigfix.com)

The source for [developer.bigfix.com](https://developer.bigfix.com).

# Contributing

The easiest way to contribute is to edit the markdown files in the [site/pages](./site/pages)
folder.

### Previewing your changes

To preview the site, install both [Vagrant](https://www.vagrantup.com/) and
[VirtualBox](https://www.virtualbox.org/).

Start the virtual machine and build the site by running this command inside the
`developer.bigfix.com` directory:

    $ vagrant up

When that command finishes, the site will be available at
[localhost:4000](http://localhost:4000).

If you change something and want to preview the change, navigate to the build
page at [localhost:4000/build](http://localhost:4000/build), and click the
"Build" button.

Alternatively, you can ssh to the machine with:

    $ vagrant ssh

Then build the site with:

    $ make

# Organization

### Pages

The documentation lives in [site/pages](./site/pages). Each directory inside the [site/pages](./site/pages) directory corresponds to a section of the site. For example, all action script documentation is in [site/pages/action-script](./site/pages/action-script).

Each `.md` or `.html` file within [site/pages](./site/pages) will be rendered and output in the corresponding location in the site. For example, the [documentation for wait](https://developer.bigfix.com/action-script/reference/execution/wait.html) is at [site/pages/action-script/reference/execution/wait.md](./site/pages/action-script/reference/execution/wait.md).

The only exception to that rule is the [relevance reference](https://developer.bigfix.com/relevance/reference/). The pages in the reference are built from [site/pages/relevance/_reference/docs](./site/pages/relevance/_reference/docs) in a completely different way. This is because the documentation of each relevance inspector can appear in multiple places. For example, the `bit <integer>` inspector appears [on the bit set page](https://developer.bigfix.com/relevance/reference/bit-set.html#bit-integer-bit-set), [on the integer page](https://developer.bigfix.com/relevance/reference/integer.html#bit-integer-bit-set), and also [in the search results for "bit set"](https://developer.bigfix.com/relevance/search/?query=bit%20set).

To edit the documentation for a relevance inspector, edit the file in the [docs](./site/pages/relevance/_reference/docs) directory that contains the inspector's documentation. You easily find the right place to edit by using the `source` link shown on the site next to every inspector.

### Side Navigation

The navigation that's displayed in the side bar is defined by the `nav` property in a `defaults.yml` file. For example, the navigation for action script is at [site/pages/action-script/defaults.yml](./site/pages/action-script/defaults.yml). It should be possible to generate the side bar automatically as part of the build. This is just something that hasn't been done yet.

The `renderSideNav` function inside [site/build/lib/renderer.js](./site/build/lib/renderer.js) determines the right way to display the page navigation for every page.

### Top Navigation

The navigation that's shown at the top of the site is part of the page template at [site/templates/page.html](./site/templates/page.html). The build knows what section every page lives in by the `section` variable in the `defaults.yml` file.

### Build

The build is defined in the [Makefile](./Makefile). The `Makefile` figures out what needs to be done to build the site, and typically this means that it will invoke [site/build](./site/build) render the pages of the site.

The [site/build](./site/build) script knows how to render every page in the site. This typically means that it reads the [front-matter](http://jekyllrb.com/docs/frontmatter/) of a file, combines that with one or more `defaults.yml` files, and renders a [nunjucks](https://mozilla.github.io/nunjucks/) template defined in [site/templates](./site/templates).

### Deploy

Currently the site can only be deployed by Brian Green. The actual deploy process uses a [git post-receive hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

### Updating Relevance Inspectors

If the set of relevance inspectors changes, then some work needs to be done to
update the site to include the new information. First, follow the instructions
in [tools/parse-language-reports](./tools/parse-language-reports) to import the
new relevance information.

Next, try to run a build. If the documentation for any inspectors is missing,
you'll see something like:

    No documentation found for type: bes webui app
    No documentation found for property: <bes webui app> = <bes webui app> : boolean
    No documentation found for property: globally allowed flag of <bes webui app> : boolean
    No documentation found for property: name of <bes webui app> : string
    No documentation found for property: set of <bes webui app> : bes webui app set
    No documentation found for property: unique value of <bes webui app> : bes webui app with multiplicity
    /home/vagrant/staging/build/relevance-reference/index.js:62
        throw new Error('Documentation is incomplete');
        ^
    
    Error: Documentation is incomplete

To fix this, you need to run the the build script with an argument for it to
create stubs for the missing documentation. To do this, go to the
[site/build](./site/build) directory and run:

    $ npm install
    $ node . --create-missing ..

This will create stubs for any missing inspectors. Then, try another build. If
this build fails, you'll probably see an error like:

    Error: Type bes webui app is missing from the relevance reference

This means that you need to update the
[site/pages/relevance/_reference/index.html](./site/pages/relevance/_reference/index.html)
file to list the missing inspector type.
