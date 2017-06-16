---
title: action uses wow64 redirection
---

By default and for ensuring the backward compatibility with 32-bit systems, the BigFix Agent operates in a 32-bit context for running actions. 
This means that the paths to your files are automatically translated by Windows into the 32-bit equivalent paths. This is the so-called  <i>wow64 redirection</i>.


You can prevent the wow64 redirection when running actions by using the <i>action uses wow64 redirection</i> command with the false option.
The to prevent wow64 redirection and . 
If you want the agent to run actions that avoid the wow64 redirection, then you can run the command action uses wow64 redirection false, which will avoid the redirection.

The <i>action uses wow64 redirection</i> command affects the behavior of the following action commands:

dos, delete, copy, move, open, run, wait (and their variants such as waithidden)

Version | Platforms
--- | ---
8.0.584.0 | Windows

## Syntax

    action uses wow64 redirection <true|false>

	
## Examples

To run the 64-bit version of notepad.exe in the system path, you can run the following command:

```actionscript
action uses wow64 redirection {not x64 of operating system}
run notepad.exe
```

## Notes

This command is Windows-only. It will cause an action script to terminate on a Unix agent.
