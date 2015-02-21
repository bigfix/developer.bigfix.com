This tool generates the pages of the reference.

The tool should be run like:

    $ node create-pages ../site ../seed/categories.yml ../seed/language.json ../seed/docs.json

Where:
* `../site` is the location of the site directory
* `categories.yml` are type categories
* `language.json` is the output of `parse-language-reports`
* `docs.json` is the output of `scrape-docs`
