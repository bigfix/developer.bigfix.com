---
title: end prefetch block
---

This command marks the end of a prefetch block. This command must be present
whenever the [begin prefetch block](./begin-prefetch-block.html) command is
specified. This command automatically performs a
[collect prefetch items](./collect-prefetch-items.html) command, meaning that
all the files added to the prefetch list will be available when the block is
ended.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    end preftech block

## Notes

See [begin prefetch block](./begin-prefetch-block.html) for more information
about prefetch blocks.
