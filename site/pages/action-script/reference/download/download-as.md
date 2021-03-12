---
title: download as
---

This command downloads a file from a URL and allows you to rename it. After
downloading, the file is saved in a folder named `__Download` relative to the
local folder of the site that issued the `download as` command.

For instance, consider the command:

```actionscript
download as myprog.exe http://www.website.com/update/prog555.exe
```

The example downloads the `readme.txt` file from the Microsoft site and saves it
in the local `__Download` folder as `intro.txt`. If the download fails, the
action script terminates.

This command, when accompanied by a
[continue if](../flow-control/continue-if.html) with a sha1 value, allows the
file to be pre-fetched.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    download as <name> <url>

Where `name` is a simple filename, without special characters or path
delimiters. If the name violates any of the following rules, the download
command will fail:

* Name must be 32 characters or less.
* Name must only be composed of ASCII characters a-z, A-Z, 0-9, -, _, and
  non-leading periods.

## Examples

Download the `prog555.exe` file from the specified folder on the web site,
saves the downloaded file to the action site `__Download` folder and renames
it to `myprog.exe`.

```actionscript
download as myprog.exe http://www.website.com/update/prog555.exe
```

Downloads the specified file, renames it `patch1` and continues only if the size
and sha1 are correct.

```actionscript
download as patch1 http://www.download.windowsupdate.com/some-update.exe
continue if {(size of it = 813160 and sha1 of it ="92c643875dda80022b3ce3f1ad580f62704b754f") of file "patch1" of folder "__Download"}
```

## Notes

Relevance substitution is **not** performed on the download action command
lines. This is because these actions are scanned by other components that
deliver the downloads, and these other components run on different machines
which do not share those client's evaluation context. This restriction, however,
allows BigFix to prefetch downloads through a relay hierarchy to the clients.
