---
title: regdelete
---

Deletes a registry key value of the given name, regardless of whether it
currently exists or not.

## Syntax

    regdelete <key> <name>

Where `key` is the name of the key and `name` is the name of the value in the
registry key you wish to delete.

## Examples

Deletes the `NeverShowExt` value from the `ShellScrap` registry key.

```actionscript
regdelete "[HKEY_CLASSES_ROOT\ShellScrap]" "NeverShowExt" 
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a
Unix agent.

In order to delete a non-empty registry key and all its sub-keys, you need to
create a file, say `del.reg`, that looks like this:

    REGEDIT4
    [-HKEY_CURRENT_USER\keep\removethisandbelow]
    

There should be three lines in this file: the last line must be a blank. Note
the dash `-` in front of the registry path. Now you can execute an action like
this:

```actionscript
regedit /s del.reg
```

When this action is executed, the key named `removethisandbelow`, along with all
its sub-keys, is deleted. You can use the [appendfile](../file/appendfile.html)
or [createfile until](../file/createfile-until.html) commands to build this
`.reg` file.
