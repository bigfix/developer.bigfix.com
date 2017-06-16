---
title: action unlock
---

This command unlocks the client. The effective date field is used to ensure that
locking and unlocking actions take place in the order in which they were
created.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    action unlock <date>

## Examples

Unlocks the client immediately.

```actionscript
action unlock "{now}"
```
