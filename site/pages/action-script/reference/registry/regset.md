---
title: regset
---

Sets a registry key to the given name and value. If the key doesn’t already
exist, this command creates the key with this starting value.

Version | Platforms
--- | ---
8.0.584.0 | Windows

## Syntax

    regset <key> <name>=<value>

Where `key` is the registry key of interest and `name` is the key value to set
to `value`.

These values are entered just as they are in a `REGEDIT4` registry file,
in keeping with the rules for `regedit.exe`, the Windows program that edits the
registry. String values are delimited by quotes, and the standard 4-byte integer
`DWORD` is identified using dword: followed by the numeric value entered in
hexadecimal with leading zeroes as shown below.

## Examples

Set the `Level` value of the specified registry key to the `DWORD` 2:

```actionscript
regset "[HKCU\Software\Microsoft\Office\9.0\Word\Security]" "Level"=dword:00000002
```

Set the `testString` value of the specified registry key to `bob`.

```actionscript
regset "[HKEY_CURRENT_USER\Software\BigFix Inc.]" "testString"="bob"
```

Clear the data of the specified registry value. 

```actionscript
regset "[HKEY_CLASSES_ROOT\ShellScrap]" "AlwaysShowExt"=""
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a
Unix agent.

Notice in these examples that square brackets `[]` are used to enclose the name
of the registry key. Again, this is in keeping with the rules for `REGEDIT4`
registry files.

When you use the `regset` command, keep in mind that the BigFix client
dynamically builds the `.reg` file that you would have had to create manually to
update the registry and then it executes that resulting `.reg` file for you. One
of the rules of the `.reg` file is that any back slashes `\` in the value field
need to appear as double slashes `\\`.

For example, if you were trying to assign the value `SourcePath2` of the
registry key `HKEY_LOCAL_MACHINE\Example`
to `C:\I386`, the command that you would define would look like this:

```actionscript
regset "[HKEY_LOCAL_MACHINE\Example]" "SourcePath2"="C:\\I386"
```

Alternatively, you could use the [escape](/relevance/reference/string.html#escape-of-string-string) relevance inspector:

```actionscript
regset "[HKEY_LOCAL_MACHINE\Example]" "SourcePath2"={escape of "c:\I386"}
```

In situations where you need to issue many `regset` commands, you might consider
using the [appendfile](../file/appendfile.html) or [createfile until](../file
/createfile-until.html) commands to build a properly formatted regedit file, and
then run `regedit` silently:

```actionscript
createfile until end-reg-edit-commands
REGEDIT4
[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion]
"SourcePath1"="c:\\I386"
"SourcePath2"="{escapes of pathname of windows folder}"
end-reg-edit-commands
move __createfile setup.reg
wait regedit /s setup.reg
```

If the specified key doesn't already exist, it will be created by this command. 
