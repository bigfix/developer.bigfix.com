---
title: delete
---

This command deletes a file. Any script with the `delete` command will terminate
if the file exists but cannot be deleted. This can happen due to write
protection or an attempt to delete from a CD-ROM, for instance. If the file does
not exist at all, however, the action script will continue to execute.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    delete <filename>

## Examples

Delete the `module.dll` file.

```actionscript
delete "c:\program files\bigsoftware\module.dll"
```

Delete the `win.com` file.

```actionscript
delete "{name of drive of windows folder}\win.com"
```

Delete file `/temp/ハロー` in UTF-8 encoding.

```actionscript
binary name delete {("/temp/" as binary_string as hexadecimal) & "e3838fe383ade383bc"}
```

## Notes

It’s good practice to enclose file paths in quotes to preserve spaces. Without
quotes, the file system will not be able to access files with spaces in the path
or file name.
