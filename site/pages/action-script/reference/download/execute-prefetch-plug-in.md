---
title: execute prefetch plug-in
---

This command runs an external binary in a prefetch block. This is most commonly
used to produce another file containing a set of URLs to be downloaded. This can
be used to authenticate or execute downloads. It can also be used to execute
custom logic that can create inspectable values for subsequent [add prefetch
item](./add-prefetch-item.html) commands.

It is not intended for a lengthy executable and the client will only wait 60
seconds for its completion. 

## Syntax

    execute prefetch plug-in <executable-path> [args]

Where:

* `executable-path` is the full pathname for the plug-in to execute.
* `args` are arguments passed to the executable

## Examples

This example downloads a plug-in that processes the `ini_file` to produce a
download manifest.

```actionscript
begin prefetch block
parameter "ini_file"="{file "server_bf.ini" of site (value of setting "MyCustomSite") of client}"
add prefetch item name=plugin.exe sha1=321381802e1689728e63f25496f8feda98cb3c6e size=1573 url=http://mysite/myplugin.exe
collect prefetch items

// execute the plug-in to produce a manifest from the ini_file:
execute prefetch plug-in "{download path "plugin.exe"}" /downloads "{parameter "ini_file"}" "{download path "manifest"}"
add prefetch item {concatentation " ; " of lines of download file "manifest"}
end prefetch block
```

## Notes

The exit code of the executable is important as it informs the client of failure
or success, where `0` indicates success and all other exit codes are treated as
failures and result in a failed action. For debugging purposes, the exit code is
recorded in the client log.

This command is designed for executables that are fast to execute and return
promptly. The BigFix client will only wait 60 seconds for the plugin to
complete. After 60 seconds, the client will log a message and disable the
command. When it is disabled, any actions that use this command will not execute
until after the client has been restarted.

In general it is expected that the command will complete much faster -- if it
takes longer than 2 seconds to execute, the client will log an appropriate
message.

Relevance substitution can be used to specify the pathname.
