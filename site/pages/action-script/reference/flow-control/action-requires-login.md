---
title: action requires login
---

This command informs the client that the current action will not be completed
until the computer is restarted and an administrator logs in. Once this commnand
runs, the [pending login](/relevance/reference/boolean.html#pending-login-
boolean) inspector will return true.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    action requires login

## Notes

This command is ignored by Unix clients.
