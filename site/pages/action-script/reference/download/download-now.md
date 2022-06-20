---
title: download now
---

**This command is deprecated.**
Use [download](./download.html) or [download as](./download-as.html) instead.

This command downloads a file from a URL. It is similar to the
[download](./download.html) command. However, unlike that command, the client
will download directly from the specified URL at that point in the action
script without using the relay hierarchy.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    download now <url>

## Examples

Downloads `bfxxxx.exe` from the BigFix site as soon as the command is executed.

```actionscript
download now http://download.bigfix.com/update/bfxxxx.exe
```

## Notes

Relevance substitution is **not** performed on the download action command
lines. This is because these actions are scanned by other components that
deliver the downloads, and these other components run on different machines
which do not share those client's evaluation context. This restriction, however,
allows BigFix to prefetch downloads through a relay hierarchy to the clients.
