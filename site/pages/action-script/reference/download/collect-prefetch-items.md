---
title: collect prefetch items
---

After files have been added to the prefetch queue by commands such as
[add nohash prefetch item](./add-nohash-prefetch-item.html) and
[add prefetch item](./add-prefetch-item.html), this command tells the client to
download those files and to not continue running the action until the files have
been downloaded.

This command is typically used to retrieve a download plug-in or a set of files
that can be processed by a plug-in. In this case, a file is first added to the
prefetch list, collected, and then processed by a subsequent
[execute prefetch plug-in](./execute-prefetch-plug-in.html) command, which might
create a file containing additional downloads.

Each `collect prefetch items` command is treated as a synchronization point,
causing the prefetch processing of the action to wait for the files to download
before proceeding. Once the files are available, the action is reprocessed from
the beginning. This allows the action to compensate for any files that may have
changed due to altered conditions on the machine. The next command in the action
will be processed only after the `collect prefetch items` command is executed
and all files in the prefetch list have been downloaded.

The [end prefetch block](./end-prefetch-block.html) command does an automatic
collection, ensuring that subsequent action commands will have the necessary
files available.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    collect prefetch items

## Examples

Download the prefetch plugin `myPlugIn.exe` and run it to add more dynamic
downloads to be prefetched.

```actionscript
begin prefetch block
parameter "ini"="{file "server_bf.ini" of site (value of setting "MyCustomSite") of client}"
add prefetch item name=myPlugIn.exe sha1=78ed0f73e7e34e0d0882dd453be0c5ac0f0913eb size=1240 url=http://mysite/plugin.exe
// collect the plug-in before continuing:
collect prefetch items
execute prefetch plug-in "{download path "myPlugIn.exe"}" /downloads "{parameter "ini"}" "{download path "urllist"}"
add prefetch item {concatenation " ; " of lines of download file "urllist"}
end prefetch block
```
