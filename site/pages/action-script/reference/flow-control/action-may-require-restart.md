---
title: action may require restart
---

This command looks at the system for signs that a restart is needed. If it seems
that a restart is needed, the action completion status will be set to *Pending
Restart* until a restart occurs.

If the optional `name` argument is given and a restart is needed, then the
client will mark `name` as needing a restart. The [pending
restart](/relevance/reference/string.html#pending-restart-string-boolean)
inspector can then be used to see which actions require a restart.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    action may require restart [name]

## Examples

This command is commonly used with patches from Windows Update that might
require a restart. For example:

```actionscript
prefetch WindowsXP-KB2914368-x86-ENU.exe sha1:1d9a306f9e5dd564c8ffdcdb8717c4ae2588db3d size:530672 http://download.microsoft.com/download/B/0/D/B0D762B1-1CF4-4377-8149-0FB18167A023/WindowsXP-KB2914368-x86-ENU.exe sha256:6a8e3034478704c7701e2e2279811e278eec45cc218f50c8ab0701a6b732afc4

waithidden __Download\WindowsXP-KB2914368-x86-ENU.exe /quiet /norestart

action may require restart "1d9a306f9e5dd564c8ffdcdb8717c4ae2588db3d"
```
If this action requires a restart, then this relevance will return `True`:

```relevance
pending restart "1d9a306f9e5dd564c8ffdcdb8717c4ae2588db3d"
```
