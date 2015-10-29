---
title: dos
---

Runs a Windows command. If the command fails, the action script that contains it is terminated.

## Syntax

    dos <command-line>

## Examples

Delete an empty directory from a temporary folder in the windows directory:

```actionscript
dos rmdir /Q /S "{pathname of windows folder & "\temp"}"
```

Run `scandisk.exe` on the `E:` drive:

```actionscript
dos scandisk.exe e:
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.

On a Windows system, this has the same effect as issuing a [system](https://msdn.microsoft.com/en-us/library/277bwbdz.aspx) statement from the Windows API. It is also the same as typing the command line to a command prompt.

The `dos` command uses the `PATH` environment variable to locate the command on the user's hard drive. As with any other `dos` command, for other locations you must specify a complete pathname.

Be sure to use quotes if you have spaces in the filenames.
