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

## Syntax

    add nohash prefetch item [name=<name>] [size=<size>] url=<url>

Where:

* `name` is an optional file name for the download. If no name is specified, it will be automatically determined from the URL.
* `size` is an optional file size.
* `url` is the URL of the file.

The arguments may be in any order, but unrecognized arguments will generate a
syntax error.

## Examples

Download and run a file as `insecure.exe` without verifying its hash.

```actionscript
begin prefetch block
add nohash prefetch item name=insecure.exe url=http://example.com/some-file
end prefetch block
wait {download path "insecure.exe"}
```
