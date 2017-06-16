---
title: download
---

This command downloads a file from a URL. After downloading, the file is saved
in a folder named `__Download` relative to the local folder of the site that
issued the download command. The name of the file is derived from the part of
the URL after the last slash.

If the download fails, the action script terminates.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    download <url>

## Examples

Download `bfxxxx.exe` from the BigFix site, and save the downloaded file in the
default site `__Download` folder.

```actionscript
download http://download.bigfix.com/update/bfxxxx.exe
```

## Notes

Relevance substitution is **not** performed on the download action command
lines. This is because these actions are scanned by other components that
deliver the downloads, and these other components run on different machines
which do not share those client's evaluation context. This restriction, however,
allows BigFix to prefetch downloads through a relay hierarchy to the clients.
