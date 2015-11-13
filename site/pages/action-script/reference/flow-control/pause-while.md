---
title: pause while
---

This command pauses action script evalulation while a relevance expression is
`True`. It will continue and execute the next command as soon as the expression
evaluates to `False` or the expression fails to evaluate.

Use relevance substitution to define the condition.

## Syntax

    pause while <condition>

The `condition` should be a relevance expression.

## Examples

Pause action script evaluation while `updater.exe` is running.

```actionscript
pause while {exists running application "updater.exe"}
```

Pause action script evaluation while the file `C:\result.txt` does not exist.

```actionscript
pause while {not exists file "C:\result.txt"}
```
