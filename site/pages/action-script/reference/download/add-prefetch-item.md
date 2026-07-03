---
title: add prefetch item
---

This command adds a download item to the prefetch queue. This command must
reside between a [begin prefetch block](./begin-prefetch-block.html) and an
[end prefetch block ](./end-prefetch-block.html) command. This command can
specify multiple downloads separated by semicolons.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    add prefetch item [name=<name>] [sha1=<sha1>] [sha256=<sha256>] [sha512:<sha512>] size=<size> url=<url> [; ...] 

Where:

* `name` is an optional file name for the download. If no name is specified, it will be automatically determined from the URL.
* `sha1` is an optional [SHA-1](https://en.wikipedia.org/wiki/SHA-1) of the file.
* `sha256` is an optional [SHA-256](https://en.wikipedia.org/wiki/SHA-2) of the file.
* `sha512` is an optional [SHA-512](https://en.wikipedia.org/wiki/SHA-2) of the file. This option is available starting with BigFix version 11.0.7.
* `size` is the size of the file in bytes.
* `url` is the URL of the file.

At least one of hash (sha1, sha256, sha512) must be specified. To download a file without
specifying a hash, use the [add nohash prefetch item](./add-nohash-prefetch-
item.html) command.

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

This example demonstrates the add prefetch item command using SHA-512.

```actionscript
begin prefetch block
add prefetch item {"name=hodor.jpg sha512=35aaf8fac5c0a1501e2df2b4a52aa3b5453853c6402b422f6057cae2826838f5c71c39ed53fca0ea64b715047863520e0902f935cd0ebaca126263458b65bec7 size=57656 url=https://i.imgur.com/YAUeUOG.jpeg "}
end prefetch block
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
