---
title: folder create
---

This command creates a directory. It will fail if the folder cannot be created.

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
