---
title: regdelete64
---

This command uses the same syntax as the [regdelete](./regdelete.html) command,
but places a call to [Wow64DisableWow64FsRedirection](https://msdn.microsoft.com
/en-us/library/windows/desktop/aa365743%28v=vs.85%29.aspx) before launching the
64-bit version of `regedit` to edit the registry, allowing you to use the 64-bit
registry available on 64-bit machines.

This command deletes a registry key value of the given name. If the value
doesn’t already exist, this command will fail and all subsequent commands will
not be executed.

## Syntax

    regdelete64 <key> <value-name>

Where `key` is the name of the key and `value-name` is the name of the value in
the registry key you wish to delete.

## Examples

Deletes the `NeverShowExt` value from the `ShellScrap` registry key. 

```actionscript
regdelete64 "[HKEY_CLASSES_ROOT\ShellScrap]" "NeverShowExt"
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a
Unix agent.

If the specified key doesn't already exist, it will be created by this command.
