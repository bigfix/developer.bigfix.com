---
title: action launch preference normal-priority
---

When this command is executed, subsequent action commands that launch programs will do so with normal-priority. This statement is only needed to return the priority to normal after an [action launch preference low-priority](./action-launch-preference-low-priority.html)  command.

Version | Platforms
--- | ---
8.0.584.0 | Windows

## Syntax

    action launch preference normal-priority

## Examples

This example lowers the launch priority before running `background_app`, then returns the priority to normal for subsequent launch statements.

```actionscript
action launch preference low-priority
run "{pathname of regapp "background_app.exe"}"
action launch preference normal-priority
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.
