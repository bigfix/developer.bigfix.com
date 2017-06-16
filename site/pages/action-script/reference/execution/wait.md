---
title: wait
---

This command behaves the same as the [run](./run.html) command, except that it waits for the completion of the process or program before continuing.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    wait <command-line>

## Examples

Runs the `scandskw.exe` program and waits for the program to complete before continuing with the action script. The use of quotes is recommended practice, and necessary if there are spaces in the file name.

```actionscript
wait "scandskw.exe"
```

## Notes

On a Windows computer, this command has the same effect as calling the [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) function with `<command-line>`. This is also the same as using `<command-line>` in the Windows Run dialog.

See the Windows documentation on [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) for a discussion of the method used to locate the executable from a `<command-line>`.
