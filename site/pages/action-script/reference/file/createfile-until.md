---
title: createfile until
---

This command creates a text file named `__createfile` in the site directory. It
allows you to fill a file with a series of statements up to a terminating
string. This is similar to the [appendfile](./appendfile.html) command and it
works like a [here document](https://en.wikipedia.org/wiki/Here_document).

This command is typically used to create a config file or a script.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    createfile until delimiter
    line 1
    line 2
    ...
    delimiter

## Examples

This example copies some system information to the file `C:\info.txt`:

```actionscript
createfile until end
Operating system = {name of operating system}
Processor count = {number of processors}
end
delete C:\info.txt
copy __createfile C:\info.txt
```
