---
title: copy
---

This command copies the source file to the named destination file. The `copy` command fails
if the destination already exists or if the copy fails for any other reason such
as when the destination file is busy.

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

## Notes

It’s good practice to enclose file paths in quotes to preserve spaces. Without
quotes, the file system will not be able to access files with spaces in the path
or file name.
