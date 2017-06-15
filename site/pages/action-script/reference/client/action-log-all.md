---
title: action log all
---

This command tells the client to log all commands along with their parameters.
This is the default behavior. This can be used to undo a previous [action log
command](./action-log-command.html).

Version | Platforms
--- | ---
8.2.474.0 | All

## Syntax

    action log all

## Examples

Don't log the parameters of the first [setting](./setting.html) command, then
restore the default logging behavior.

```actionscript
action log command
setting "secret"="hodor" on "{now}" for client
action log all
setting "normal"="winterfell" on "{now}" for client
```
