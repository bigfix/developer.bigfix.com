---
title: move
---

This command moves the source file to the named destination file. This command
can be used to rename a file. The `move` command
fails if the destination already exists, if the source file doesn’t exist, or if
the move fails for any other reason.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    move <source> <destination>

## Examples

This command moves and renames the `mod.dll` file. Note that quotes are
necessary for file names and folder names with spaces in them.

```actionscript
move "c:\program files\bigsoftware\module.dll" "c:\temp\mod.dll"
```

This script first deletes the file, then moves it back in place from another
location.

```actionscript
delete "c:\updates\q312456.exe"
move "__Download\q312456.exe" "c:\updates\q312456.exe"
```

This command moves the file `/test/my-file`.txt into the file `/temp/ハロ` in UTF-8 encoding.

binary name move {"/test/my-file.txt" as binary_string as hexadecimal} {("/temp/" as binary_string as hexadecimal) & "e3838fe383ade383bc"}

## Notes

It’s good practice to enclose file paths in quotes to preserve spaces. Without
quotes, the file system will not be able to access files with spaces in the path
or file name.
