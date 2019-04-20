---
title: regkeydelete
---


Deletes a registry key and all of its contents.

Version |	Platforms
--- | ---
9.5.12.xxx | Windows

## Syntax

```regkeydelete <key>```

where `key` is the name of the registry key you wish to delete.

## Examples

Deletes the `MyKey` registry key that is at [HKEY_LOCAL_MACHINE\SOFTWARE\*WOW6432Node*].

```actionscript
regkeydelete "[HKEY_LOCAL_MACHINE\SOFTWARE\MyKey]" 
```

## Notes

- This command is Windows-only. It will cause an action script to terminate on a Unix agent.
- Both your BigFix client and console should be at version 9.5.13 or later for the commmand to work.
- You cannot delete root keys (for example, HKEY_LOCAL_MACHINE).
