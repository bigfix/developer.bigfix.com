---
title: relay select
---

This command issues a request to the client to perform a relay selection at the
next opportunity. It always succeeds immediately, regardless of the success or
failure of the pending relay selection.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    relay select

## Examples

Request a relay selection.

```actionscript
relay select
```
