---
title: action lock until
---

This command locks the client starting on the effective date, and unlocks the
client when the expiration date occurs.
Both the effective date and the expiration date must be `time` objects.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    action lock until <expire-date> <effective-date>

## Examples

Lock the client immediately, unlocking in three days. In this example, we set our intended expiration 
date by summing a [time](/relevance/reference/time.html) object representing the current time with a 
[time-interval](/relevance/reference/time-interval.html) object representing a three days period.

```actionscript
action lock until "{now + 3*day}" "{now}"
```

Lock the client for 10 minutes using the current [apparent registration server
time](/relevance/reference/time.html#apparent-registration-server-time-time),
which is based on the last time the client registered with the server.

```actionscript
action lock until "{apparent registration server time + 10*minute}" "{apparent registration server time}"
```
