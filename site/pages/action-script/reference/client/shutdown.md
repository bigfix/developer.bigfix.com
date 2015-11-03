---
title: shutdown
---

This command is similar to the [restart](./restart.html) command, but it simply
shuts the computer down and does not reboot.

If the optional `delay-seconds` parameter is provided, the shutdown will happen
automatically after the specified delay.

If a user is logged in, a UI will be displayed that shows the delay counting
down. In this case, the UI will have a *Shutdown Now* button instead of a
*Cancel* button. If the delay parameter is not specified, the user is prompted
to press a button to shut down the computer

## Syntax

    shutdown [delay-seconds]

Where `delay-seconds` is an optional parameter to provide a delay before
shutting down.

## Examples

This command will shut down the computer in three minutes.

```actionscript
shutdown 180
```

## Notes

The delayed shutdown is a forced shutdown. It will not prompt the user to save
changes to documents, etc. The machine will shut down without further prompting.
