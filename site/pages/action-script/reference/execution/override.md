---
title: override
---

The override command provides the ability to customize certain commands and add multiple variations to existing commands.

This powerful compound command allows you to create your own custom combination command similar to the existing commands [waitdetached](./waitdetached.html) or [runhidden](./runhidden.html).

To add constraints to an existing command, you add predefined keyword/value pairs within the body of the command.

## Syntax

    override <cmd>
    <name1>=<value2>
    <name2>=<value2>
    <cmd> <command-line>

## Keywords

The keywords may be specified in any order, but there must be only one per line. White-space is not needed around the equal sign `=` and is ignored.

Keywords are case-insensitive, and the values can be enclosed in {curly brackets} for Relevance substitution.

If duplicate keywords are listed, the last value will be used. The entire command fails if any of the keywords or values are invalid. Platform-specific keywords that are not meaningful on a given platform will be silently ignored.

## Examples

This example provides the same functionality as `waithidden notepad.exe`:

```actionscript
override wait
hidden=true
wait notepad.exe
```

This example shows how you might run a patch as a hidden process by the current user, waiting for completion of the job before continuing the action script:

```actionscript
override wait
completion=job
hidden=true
runas=currentuser
wait __Download\patch.exe arg1 arg2 arg3
```
