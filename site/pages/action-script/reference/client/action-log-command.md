---
title: action log command
---

This command tells the client to only log the commands of the action. The
parameters of the commands in the action will not be logged.

Ordinarily all aspects of an action are logged, including commands and
parameters. The parameters may contain information about establishing private
keys or decrypting passwords. This command can be used to avoid logging such
sensitive information.

## Syntax

    action log command

## Examples

Don't log the parameters of the [setting](./setting.html) command.

```actionscript
action log command
setting "name"="Bob" on "{now}" for client
```
