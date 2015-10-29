---
title: script
---

This command executes an external script with the given name. This can be used to run a script created for a scripting language like [JavaScript](https://en.wikipedia.org/wiki/JavaScript) or [Visual Basic](https://en.wikipedia.org/wiki/Visual_Basic).

The action containing the `script` keyword will terminate if the appropriate scripting engine is not installed or if the script cannot be executed. The next line of the action is not executed until the specified script terminates.

## Syntax

    script <script-name>

## Examples

Run the [Visual Basic](https://en.wikipedia.org/wiki/Visual_Basic) script `attrib.vbs`.

```actionscript
script attrib.vbs
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.

On a Windows computer, this command has the same effect as issuing a `wscript "scriptName"` statement from Windows using [wscript.exe](https://support.microsoft.com/en-us/kb/232211), and then waiting for completion. This is also the same as using scriptName from the Windows Run dialog.

If you need to pass parameters to your script, use the [run](./run.html) command instead.
