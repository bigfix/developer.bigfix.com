---
title: prefetch
---

This command allows a file to be downloaded before the action begins. You do not
need a matching [continue if](../flow-control/continue-if.html) statement for
the file to be downloaded and checked in advance. This command is preferred over
the [download](./download.html) command.

To easily create prefetch commands, the
[make-prefetch](https://github.com/bigfix/make-prefetch) utility can be used.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    prefetch <name> sha1:<sha1> size:<size> <url> [sha256:<sha256>] [sha512:<sha512>]

Where:

* `name` is the file name for the download.
* `sha1` is the [SHA-1](https://en.wikipedia.org/wiki/SHA-1) of the file.
* `sha256` is an optional [SHA-256](https://en.wikipedia.org/wiki/SHA-2) of the file.
* `sha512` is an optional [SHA-512](https://en.wikipedia.org/wiki/SHA-2) of the file. This option is available starting with BigFix version 11.0.7.
* `size` is the size of the file in bytes.
* `url` is the url of the file.

The `name` must be a simple filename, without special characters or path
delimiters. If the name violates any of the following rules, the download
command will fail:

* Name must be 32 characters or less.
* Name must only be composed of ASCII characters a-z, A-Z, 0-9, -, _, and
  non-leading periods.

## Examples

Prefetch a picture of Hodor.

```actionscript
prefetch hodor.jpg sha1:ce842e0af799f2ba476511c8fbfdc3bf89612dd0 size:57656 http://i.imgur.com/YAUeUOG.jpg sha256:74f69205a016a3896290eae03627e15e8dfeba812a631b5e0afca140722a322b
```

This example demonstrates the prefetch command using SHA-512.

```actionscript
prefetch hodor.jpg sha1:ce842e0af799f2ba476511c8fbfdc3bf89612dd0 size:57656 https://i.imgur.com/YAUeUOG.jpeg sha512:35aaf8fac5c0a1501e2df2b4a52aa3b5453853c6402b422f6057cae2826838f5c71c39ed53fca0ea64b715047863520e0902f935cd0ebaca126263458b65bec7
```

Prefetch and run a different patch depending on whether the operating system is
Windows XP.

```actionscript
if {name of operating system = "WinXP"}
prefetch patch.exe sha1:92c643875dda80022b3ce3f1ad580f62704b754f size:813160 http://www.download.windowsupdate.com/msdownload
/update/v3-19990518/cabpool/q307869_f323efa52f460ea1e5f4201b011c071ea5b95110.exe
else
prefetch patch.exe sha1:c964d4fd345b6e5fd73c2235ec75079b34e9b3d2 size:845416 http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/q310507_2f3c5854999b7c58272a661d30743abca15caf5c.exe
endif
wait __Download\patch.exe
```
