---
title: appendfile
---

This command creates a text file named `__appendfile` in the site directory.
Each time you invoke the command, it appends the specified text to the end of
the file. This command may be useful for creating diagnostic files or
scripts.

On a typical Windows install this file will be created in:

    C:\Program Files (x86)\BigFix Enterprise\BES Client\__BESData\<site>

The `__appendfile` is automatically deleted before the action script starts
running.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    appendfile <text>

## Examples

This example records information about the OS and moves that information to
`C:\info.txt`.

```actionscript
appendfile This file will contain details about your computer
appendfile Operating System={name of operating system}
appendfile Windows is installed on the {location of windows folder} drive
move __appendfile C:\info.txt
```

This example records the name and the free space available for all the drives on
the client computer.

```actionscript
appendfile {("Disk " & name of it & ", free space=" & free space of it as string) of drives}
```

## Notes

Use the `appendfile` command as part of an action that builds a script which is
subsequently passed to a script interpreter. For example, you can use the
following syntax to create an `.ini` file:

```actionscript
appendfile [HKR]
appendfile HostBasedModemData\Parameters\Driver,ModemOn,1,00,00
delete {location of system folder}\smcfg.ini
copy __appendfile {location of system folder}\smcfg.ini
run smcfg
```

This same technique can be used to build `.bat` files, `.cmd` files, [Visual Basic](https://en.wikipedia.org/wiki/Visual_Basic) scripts, [bash shell](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) scripts, etc.
