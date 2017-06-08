---
title: waithidden
---

This command uses [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) to launch a command in a hidden window. It hides the window by setting the [STARTUPINFO](https://msdn.microsoft.com/en-us/library/windows/desktop/ms686331%28v=vs.85%29.aspx) `dwFlags` to `STARTF_USESHOWWINDOW` and setting `wShowWindow` to `SW_HIDE`. The process that is created may modify that flag to subsequently show the window again.

This command waits for the completion of the process before continuing with subsequent action commands.

## Syntax

    waithidden <command-line>

## Examples

These examples show how you might run a script in a hidden window and pass it some arguments. Quotes around the command line are recommended, and necessary if there are spaces in the file names.

```actionscript
waithidden "{pathname of regapp "notepad.exe"}"
waithidden "c:\winnt\ftp.exe" ftp.myurl.net
waithidden wscript /e:vbs x.vbs arg1 arg2
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.

If the launched process requires user input, it will wait for it with its window hidden, unless the command explicitly shows its window.

On a Windows computer, this command has the same effect as calling the [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) function with `<command-line>`. This is also the same as using `<command-line>` in the Windows Run dialog.

See the Windows documentation on [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) for a discussion of the method used to locate the executable from a `<command-line>`.

The `waithidden` command has override keywords.See the [override](./override.html) documentation for details.
