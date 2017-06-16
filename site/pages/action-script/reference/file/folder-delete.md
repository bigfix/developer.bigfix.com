---
title: folder delete
---

This command deletes a directory. It will recursively delete all contained files
and folders. The command fails if the directory cannot be deleted. However, if
the directory does not exist, the command succeeds.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    folder delete <path>

## Examples

Delete the directory `C:\test`.

```actionscript
folder delete "C:\test"
```

## Notes

It’s good practice to enclose file paths in quotes to preserve spaces. Without
quotes, the file system will not be able to access files with spaces in the path
or file name.
