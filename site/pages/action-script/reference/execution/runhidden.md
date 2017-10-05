---
title: runhidden
---

This command uses [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) to launch a command in a hidden window. It hides the window by setting the [STARTUPINFO](https://msdn.microsoft.com/en-us/library/windows/desktop/ms686331%28v=vs.85%29.aspx) `dwFlags` to `STARTF_USESHOWWINDOW` and setting `wShowWindow` to `SW_HIDE`. The process that is created may modify that flag to subsequently show the window again.

After launching, the following action command line is immediately executed. To wait for the launch to complete before continuing the action, use the [waithidden](./waithidden.html) command.

<p><b>Warning: </b>Do not launch long run programs directly from the <i>__Download</i> folder using any of these commands: [run](./run.html), [rundetached](./rundetached.html), <b>runhidden</b>, [override](./override.html) with completion=none, or [override](./override.html) with timeout, disposition=abandon. Instead, add an action to copy the programs to a location different from the <i>__Download folder</i> and launch the programs from there.</p>

Version | Platforms
--- | ---
8.0.584.0 | Windows

## Syntax

    runhidden <command-line>

## Examples

These examples show how you might run a script in a hidden window and pass it some arguments. Quotes around the command line are recommended, and necessary if there are spaces in the file names.

```actionscript
runhidden "{pathname of regapp "wordpad.exe"}"
runhidden "c:\winnt\ftp.exe" ftp.mycorp.net
runhidden wscript /e:vbs x.vbs arg1 arg2
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.

If the launched process requires user input, it will wait for it with its window hidden, unless the command explicitly shows its window.

On a Windows computer, this command has the same effect as calling the [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) function with `<command-line>`. This is also the same as using `<command-line>` in the Windows Run dialog.

See the Windows documentation on [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) for a discussion of the method used to locate the executable from a `<command-line>`.
