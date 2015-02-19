This tool generates the pages of the reference.

The tool should be run like:

    $ node create-pages ../site language.json docs.json

Where:
* `../site` is the location of the site directory
* `language.json` is the output of `parse-language-reports`
* `docs.json` is the output of `scrape-docs`
