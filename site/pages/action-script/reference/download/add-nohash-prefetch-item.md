---
title: add nohash prefetch item
---

This command downloads a file without verifying the file's hash. This is
insecure and not recommended, but it might be necessary in some cases.

It must be between a [begin prefetch block](./begin-prefetch-block.html) and an
[end prefetch block](./end-prefetch-block.html) command.

Unlike [add prefetch item](./add-prefetch-item.html), it can only specify one
download and relevance substitution is not allowed within the arguments of this
command.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    add nohash prefetch item [name=<name>] [size=<size>] url=<url>

Where:

* `name` is an optional file name for the download. If no name is specified, it will be automatically determined from the URL.
* `size` is an optional file size.
* `url` is the URL of the file.

The arguments may be in any order, but unrecognized arguments will generate a
syntax error.

**Note**: The downloaded file can be cached only once per action.

## Examples

Download and run a file as `insecure.exe` without verifying its hash.

```actionscript
begin prefetch block
add nohash prefetch item name=insecure.exe url=http://example.com/some-file
end prefetch block
wait {download path "insecure.exe"}
```
