---
title: continue if
---

This command stops running an action script if a relevance expression evaluates
to `False`.

## Syntax

    continue if <condition>

## Examples

Download the file `dun40.exe` if the operating system is Windows 2000.

```actionscript
continue if {name of operating system = "Win2k"}
download now http://www.example.com/downloads/win98/dun40.exe
```
