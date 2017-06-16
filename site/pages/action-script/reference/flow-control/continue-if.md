---
title: continue if
---

This command stops running an action script if a relevance expression evaluates
to `False`.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    continue if <condition>

## Examples

Download the file `dun40.exe` if the operating system is Windows 2000.

```actionscript
continue if {name of operating system = "Win2k"}
download now http://www.example.com/downloads/win98/dun40.exe
```
