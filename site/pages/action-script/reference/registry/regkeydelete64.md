---
title: regkeydelete64
---


This command uses the same syntax as the [regkeydelete](./regkeydelete.html) command, but places a call to [Wow64DisableWow64FsRedirection](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365743%28v=vs.85%29.aspx) 
before launching the 64-bit version of regedit to edit the registry, allowing you to use the 64-bit registry available on 64-bit machines.

This command deletes a registry key and all of its contents. 
If the value doesn’t already exist, this command fails and all subsequent commands are not run.

Version | Platforms
--- | ---
9.5.13.130 | Windows

## Syntax

```actionscript
regkeydelete64 <key>
```

Where `key` is the name of the key you wish to delete.

## Examples

Deletes the `MyKey` registry key. 

```actionscript
regkeydelete64 "[HKEY_LOCAL_MACHINE\SOFTWARE\MyKey]"
```

## Notes

- This command is Windows-only. It will cause an action script to terminate on a
Unix agent.
- Both your BigFix client and console should be at version 9.5.13 or later for the command to work.
- If the specified key doesn't already exist, it will be created by this command.
- You cannot delete root keys (for example, HKEY_LOCAL_MACHINE).
