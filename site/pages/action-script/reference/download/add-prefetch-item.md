---
title: add prefetch item
---

This command adds a download item to the prefetch queue. This command must
reside between a [begin prefetch block](./begin-prefetch-block.html) and an [end
prefetch block ](./end-prefetch-block) command. This command can specify
multiple downloads separated by semicolons.

## Syntax

    add prefetch item [name=<name>] [sha1=<sha1>] [sha256=<sha256>] size=<size> url=<url> [; ...] 

Where:

* `name` is an optional name limited to alphanumeric, dashes, underscores, and non-leading period characters. If no name is specified, the name will be derived from the final component of the URL (the part following the last slash).
* `sha1` is an optional [SHA-1](https://en.wikipedia.org/wiki/SHA-1) of the file.
* `sha256` is an optional [SHA-256](https://en.wikipedia.org/wiki/SHA-2) of the file.
* `size` is the size of the file in bytes.
* `url` is the URL of the file.

At least one of `sha1` or `sha256` must be present. To specify a download
without specifying a hash, use the [add nohash prefetch item](./add-nohash-prefetch-item.html) command.

The arguments may be in any order, and unrecognized arguments will be ignored.

## Examples

This example demonstrates a conditional download in a prefetch block. By
checking the OS first, only the proper file will be prefetched, potentially
saving time and bandwidth.

```actionscript
begin prefetch block
if {name of operating system = "Windows 2000"}
add prefetch item {"name=up.exe sha1=12 size=45 url=http://ms.com/hot2k.exe"}
else
add prefetch item {"name=up.exe sha1=12 size=45 url=http://ms.com/hot.exe"}
endif
end prefetch block
wait {download path "up.exe"} 
```

## Notes

Relevance substitution is allowed with the arguments of this command. However
when substitution is used, the BigFix Server can't cache the download item at
action creation time.

Instead of listing the download items in the command line, you can put them in a
file (one item per line) and then use a relevance substitution like the
following:

```actionscript
begin prefetch block
add prefetch item {concatenation ";" of lines of file my-downloads.txt}
end prefetch block
```
