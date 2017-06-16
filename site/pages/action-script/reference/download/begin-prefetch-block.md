---
title: begin prefetch block
---

This command starts a set of commands to download files.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    begin prefetch block

## Examples

Download the file `myfile.txt`.

```actionscript
begin prefetch block
add prefetch item name=myfile.txt sha1=09d24c690168f084287af838008cbceca8215425 size=234 url=http://example.com/myfile.txt
end prefetch block
```

## Notes

Only one prefetch command block can be used in an action and it must be closed
with an [end prefetch block](./end-prefetch-block.html) command.

Only comments or blank lines are allowed to precede this command. When
processing actions with prefetch blocks, [download](./download.html), [download
as](./download-as.html) and [prefetch](./prefetch.html) are not allowed anywhere
in the action script. The [download now](./download-now.html) as command is
allowed, but it must be used after the prefetch block.

These commands are allowed within the prefetch block:

* [if, elseif, else, endif](../flow-control/if-elseif-else-endif.html)
* [parameter](../flow-control/parameter.html)
* [action parameter query](../flow-control/action-parameter-query.html)

These commands are *only* allowed within the prefetch block. They are not
allowed outside of it:

* [add prefetch item](./add-prefetch-item.html)
* [add nohash prefetch item](./add-nohash-prefetch-item.html)
* [collect prefetch items](./collect-prefetch-items.html)
* [execute prefetch plug-in](./execute-prefetch-plug-in.html)
