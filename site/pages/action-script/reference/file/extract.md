---
title: extract
---

This command extracts files from the specified archive in the download folder
`__Download` and leaves the results in the same folder.

An archive file is similar to a compressed
[tar](https://en.wikipedia.org/wiki/Tar_%28computing%29) file. BigFix uses a
tool called [BFArchive](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Tivoli%20Endpoint%20Manager/page/BFArchive%20Tool) to construct the archive.

This can be useful for copying an entire directory to a computer, which is often
required by installers that contain multiple files along with a setup
executable.

## Syntax

    extract <archive-file>

## Examples

Extract files of InstallMyApp in the `__Download` folder, places the results
back in the `__Download` folder and deletes the original InstallMyApp file.

```actionscript
extract InstallMyApp
```
