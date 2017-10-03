---
title: copy
---

This command copies the source file to the named destination file. The `copy` command fails
if the destination already exists or if the copy fails for any other reason such
as when the destination file is busy.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    copy <source> <destination>

## Examples

This command copies the `win.com` file to the `bigsoftware` folder.

```actionscript
copy "{name of drive of windows folder}\win.com" "{name of drive of windows
folder}\bigsoftware\win.com"
```

This pair of commmands deletes the target file if it exists before
it performs the copy action.

```actionscript
delete "c:\windows\system\windir.dll"
copy " __Download\windir.dll" "c:\windows\system\windir.dll" 
```
This command copies the file `/test/my-file.txt` to a file named `/temp/ハロー` in UTF-8 encoding under the site context.

```actionscript
binary name copy {"/test/my-file.txt" as binary_string as hexadecimal} {("/temp/" as binary_string as hexadecimal) & "e3838fe383ade383bc"}
```

This command copies the file `/test/my-file.txt` into `/var/opt/BESClient/__BESData/CustomSite_Fabio/ハロー` in UTF-8 encoding.

```actionscript
binary name copy {"/test/my-file.txt" as binary_string as hexadecimal} e3838fe383ade383bc
```

## Notes

It’s good practice to enclose file paths in quotes to preserve spaces. Without
quotes, the file system will not be able to access files with spaces in the path
or file name.
