---
title: rundetached
---

This command is used to prevent pop-up DOS windows when waiting for a program to complete. It's the same as the [run](./run.html) command, but the process created doesn't access the parent's console, inhibiting the distracting DOS window.

This command modifies the [run](./run.html) command by setting the [DETACHED_PROCESS](https://msdn.microsoft.com/en-us/library/windows/desktop/ms684863%28v=vs.85%29.aspx) flag when calling [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) on Windows machines. By default, a created process inherits its parent's console. When detached, this behavior is inhibited. This gives the new process some more control over how it may interact with the user.

This command should not be used for running interactive programs. If this is done, the interactive program will not be able to show its user interface and may appear to be hung. This command is provided strictly for running programs that do not display a user interface.

## Syntax

    rundetached <command-line>

## Examples

These examples show how you might run a program and pass it some arguments. Quotes around the command line are recommended, and necessary if there are spaces in file names.

```actionscript
rundetached "{pathname of regapp "background_app.exe"}"
rundetached "c:\winnt\ftp.exe" ftp.filesite.net
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.

On a Windows computer, this command has the same effect as calling the [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) function with `<command-line>`. This is also the same as using `<command-line>` in the Windows Run dialog.

See the Windows documentation on [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) for a discussion of the method used to locate the executable from a `<command-line>`.
