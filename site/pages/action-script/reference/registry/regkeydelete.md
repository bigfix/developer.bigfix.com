
Deletes a registry key and all of its contents.

Version |	Platforms
--- | ---
x.x.xxx.x | Windows

## Syntax

regkeydelete `key`

where `key` is the name of the registry key you wish to delete.

## Examples

Deletes the `MyKey` registry key.

```actionscript
regdelete "[HKEY_LOCAL_MACHINE\SOFTWARE\MyKey]" 
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.
