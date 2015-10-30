---
title: utility
---

This command can be used to place commonly used programs into a special
cache.

The client maintains two disk caches: one for utility programs and another
for action payloads. Files arriving in the action payload cache will not push
files out of the utilities cache and vice versa.

The client uses the [sha1](https://en.wikipedia.org/wiki/SHA-1) value of an
action download to locate any matching utility that already exists on the
client.

An action-specific folder is created to contain downloads as they are pre-
fetched. Existing files that match the sha1 values don't need to be downloaded
again. Any other files will be prefetched from the parent relay. When all the
downloads are available on the client, the files will be moved from the action-
specific folder to the `__Download` folder of the action site and the action
will be started.

When the action completes, any files left in the `__Download` folder that were
pre-fetched with sha1 will be candidates for utility caching. These files will
have their sha1 values re-computed and any files with matching sha1 values can
be moved into the utility cache.

A least-recently used scheme is used to keep the cache within its size limits.
For short intervals only, the cache limit may be exceeded by single files.

## Syntax

    utility <pathname>

## Examples

This places the `RunQuiet.exe` program into the utility cache to avoid
downloading it multiple times.

```actionscript
utility __Download/RunQuiet.exe
```

Prefetch a file, save the file to the utility cache as `patch.exe`, and run the
command `patch.exe`.

```actionscript
prefetch patch.exe sha1:92c643875dda80022b3ce3f1ad580f62704b754f__size:813160
http://www.download.windowsupdate.com/msdownload/update/v3-
__19990518/cabpool/q307869_f323efa52f460ea1e5f4201b011c071ea5b95110.exe
utility __Download\patch.exe
wait __Download\patch.exe
```
