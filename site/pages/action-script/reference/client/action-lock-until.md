---
title: action lock until
---

This command locks the client starting on the effective date, and unlocks the
client when the expiration date occurs.

The command is available on all platforms starting from the first versions of IBM BigFix.

## Syntax

    action lock until <expire-date> <effective-date>

## Examples

Lock the client immediately, unlocking in three days.

```actionscript
action lock until "{now + 3*days}" "{now}"
```

Lock the client for 10 minutes using the current [apparent registration server
time](/relevance/reference/time.html#apparent-registration-server-time-time),
which is based on the last time the client registered with the server.

```actionscript
action lock until "{apparent registration server time + 10 * minutes}" "{apparent registration server time}"
```
