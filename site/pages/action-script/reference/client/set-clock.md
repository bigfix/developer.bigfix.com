---
title: set clock
---

This command causes the client to re-register with the server, and to sets its
clock to the time received from the server during the interaction. This is
useful when the client computer's clock is out of sync.

The command is available on all platforms starting from the first versions of IBM BigFix.

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
