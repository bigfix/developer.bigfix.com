---
title: download open
---

This command downloads a file from a URL and then runs
[ShellExecute](https://msdn.microsoft.com/en-us/library/windows/desktop/bb762153%28v=vs.85%29.aspx)
on the resulting file.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    download open <url>

## Examples

Download and save `bfxxxx.exe` to the default site `__Download` folder and
execute the program once the download completes.

```actionscript
download open http://download.bigfix.com/update/bfxxxx.exe
```

## Notes

Relevance substitution is **not** performed on the download action command
lines. This is because these actions are scanned by other components that
deliver the downloads, and these other components run on different machines
which do not share those client's evaluation context. This restriction, however,
allows BigFix to prefetch downloads through a relay hierarchy to the clients.
