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

Under the current folder create folder "ハロ" in UTF-8 encoding.

```actionscript
binary name folder create e3838fe383ad
```

Under /tmp/ folder create folder "ハロー" in UTF-8 encoding.

```actionscript
binary name folder create {("/temp/" as binary_string as hexadecimal) & "e3838fe383ade383bc"}
```

## Notes

It’s good practice to enclose file paths in quotes to preserve spaces. Without
quotes, the file system will not be able to access files with spaces in the path
or file name.
