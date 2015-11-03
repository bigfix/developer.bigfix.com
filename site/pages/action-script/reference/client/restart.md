---
title: restart
---

This command will restart the computer. If the optional `delay-seconds`
parameter is provided, the shutdown will happen automatically after the
specified delay.

If a user is logged in, a dialog will be displayed that shows the delay counting
down. In this case, the interface will have a *Restart Now* button instead of a
*Cancel* button.

If the `delay-seconds` parameter is not specified, the user is prompted to press
a button to restart the computer.

## Syntax

    restart [delay-seconds]

Where `delay-seconds` is an optional parameter to provide a delay before
restarting.

## Examples

Restart the computer in three minutes.

```actionscript
restart 180
```

## Notes

The delayed restart is a forced restart. It will not prompt the user to save
changes to documents. The machine will restart without further prompting.
