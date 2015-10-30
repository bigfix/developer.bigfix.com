---
title: regset
---

Sets a registry key to the given name and value. If the key doesn’t already
exist, this command creates the key with this starting value.

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
regset "[HKEY_CURRENT_USER\Software\Microsoft\Office\9.0\Word\Security]" "Level"=dword:00000002
```

Set the `testString` value of the specified registry key to `bob`.

```actionscript
regset "[HKEY_CURRENT_USER\Software\BigFix Inc.]" "testString"="bob"
```

Clear the data of the specified registry value. 

```actionscript
regset "[HKEY_CLASSES_ROOT\ShellScrap]" "AlwaysShowExt"=""
```
