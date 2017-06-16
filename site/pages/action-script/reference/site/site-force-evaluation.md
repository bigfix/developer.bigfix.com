---
title: site force evaluation
---

This command causes the client to re-evaluate all content in the site.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubunt

## Syntax

    site force evaluation

## Examples

Force all content in the site to be re-evaluated.

```actionscript
site force evaluation
```

## Notes

This command can place more load on the client machine, and should probably not
be used.
