This tool parses a bunch of "relevance language report" files. These are files
produced internally by the platform build that lists all inspectors available on
that platform.

The folder structure is expected to look like:

    8.0.584.0/
      Language.Console_WebReports.txt
      Language.i386_rhe3.txt
      Language.sparc_sol9.txt
      Language.windows.txt
      ...
    8.0.627.0/
      Language.Console_WebReports.txt
      Language.i386_suse80.txt
      Language.ppc_aix51.txt
      Language.x86_64_rhe5.txt
      Language.x86_64_sles9.txt
      ...

If all of the language reports are parsed successfully, a JSON object
representing the combined types and properties in all of the files is output.
