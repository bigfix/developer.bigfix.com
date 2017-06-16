---
title: action launch preference low-priority
---

When this command is run, subsequent action commands that launch programs will do so with lower priority than normal. This will help to mitigate the impact of large patches or service pack upgrades.

Low-priority preference only affects the launch priority of applications launched from the current action. This preference is maintained until the action completes or the client executes the [action launch preference normal-priority](./action-launch-preference-normal-priority.html) command.

Version | Platforms
--- | ---
8.0.584.0 | Windows

## Syntax

    action launch preference low-priority

## Examples

This example lowers the launch priority before running `background_app` so that it will not dominate the system when it executes. It then sets the priority level back to normal.

```actionscript
action launch preference low-priority
run "{pathname of regapp "background_app.exe"}"
action launch preference normal-priority
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.
