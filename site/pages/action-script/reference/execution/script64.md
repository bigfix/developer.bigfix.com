---
title: script64
---

This command uses the same syntax as the [script](./script.html) command, but
places a call to [Wow64DisableWow64FsRedirection](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365743%28v=vs.85%29.aspx) before executing the script.
This allows you to issue a native 64-bit script command, bypassing Windows
32-bit environment built on top of 64-bit processors.

This command executes an external script with the given name. This can be used to run a script created for a scripting language like [JavaScript](https://en.wikipedia.org/wiki/JavaScript) or [Visual Basic](https://en.wikipedia.org/wiki/Visual_Basic).

The action containing the `script` keyword will terminate if the appropriate scripting engine is not installed or if the script cannot be executed. The next line of the action is not executed until the specified script terminates.

## Syntax

    script64 <script-name>

## Examples

Run the [Visual Basic](https://en.wikipedia.org/wiki/Visual_Basic) script `attrib.vbs` in native 64-bit mode.

```actionscript
script64 attrib.vbs
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.

On a Windows computer, this command has the same effect as calling
[Wow64DisableWow64FsRedirection](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365743%28v=vs.85%29.aspx), then issuing a `wscript "scriptName"` statement from Windows using [wscript.exe](https://support.microsoft.com/en-us/kb/232211), and then waiting for completion.
