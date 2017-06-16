---
title: set clock
---

This command causes the client to re-register with the server, and to sets its
clock to the time received from the server during the interaction. This is
useful when the client computer's clock is out of sync.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    set clock

## Examples

Sychronize the client computer's clock with the BigFix server.

```actionscript
set clock
```

## Notes

This command is not available when the client is operating under an evaluation
license.
