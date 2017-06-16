---
title: folder create
---

This command creates a directory. It will fail if the folder cannot be created.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    folder create <path>

## Examples

Create the `C:\test` folder.

```actionscript
folder create "C:\test"
```

## Notes

It’s good practice to enclose file paths in quotes to preserve spaces. Without
quotes, the file system will not be able to access files with spaces in the path
or file name.
