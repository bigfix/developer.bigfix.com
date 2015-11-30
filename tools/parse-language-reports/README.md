# Parse Language Reports

This tool parses a bunch of "relevance language report" files. These are files
produced internally by the platform build, and they list all inspectors
available on each platform.

The output of this tool is the `relevance-language.json` file. This file is used
to know exactly what inspectors exist, what platforms they work on, and in which
version they were introduced or deprecated.

### Importing new language reports

To import new relevance language reports, first update the
[relevance-language-reports](https://github.com/bigfix/relevance-language-reports)
repository with the new reports. Then, run `get-relevance-reports` to extract
the information in that repository.

    $ ./get-relevance-reports

This should create the folder `LanguageReportFiles` with one directory per
version. Next, the npm dependencies need to be installed with:

    $ npm install

After that, this tool can be run with:

    $ node . LanguageReportFiles

Once the tool finishes running, it should output the new
`relevance-language.json` file.

Once you have updated this file, you probably need to go to the `site/build`
directory and run:

    $ npm install
    $ node . -- create-missing ..

This will add stub entries to the documentation for any new inspectors.

### Changing the platform names

The platform names are determined by the `platforms.yml` file. To add a new
platform or to change the name of an existing platform, edit that file and
re-run this tool.
