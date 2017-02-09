---
title: override
---

The override command provides the ability to customize certain commands and add multiple variations to existing commands.

This powerful compound command allows you to create your own custom combination command similar to the existing commands [waitdetached](./waitdetached.html) or [runhidden](./runhidden.html).

To add constraints to an existing command, you add predefined keyword/value pairs within the body of the command.

## Syntax

    override <cmd>
    <name1>=<value2>
    <name2>=<value2>
    <cmd> <command-line>

## Keywords

The keywords may be specified in any order, but there must be only one per line. White-space is not needed around the equal sign `=` and is ignored.

Keywords are case-insensitive, and the values can be enclosed in {curly brackets} for Relevance substitution.

If duplicate keywords are listed, the last value will be used. The entire command fails if any of the keywords or values are invalid. Platform-specific keywords that are not meaningful on a given platform will be silently ignored.

<dl>

  <dt>**Completion**</dt>
  <dd>Default value: `none` for run, `process` for wait.
    <ul>
      <li>`Completion=none` acts the same as the current run command variants.</li>
      <li>`Completion=process` acts the same as the current wait command variants.</li>
      <li>`Completion=job` on Windows makes use of [Windows Job Objects](https://msdn.microsoft.com/en-us/library/windows/desktop/ms684161%28v=vs.85%29.aspx) which imposes some limitations on the target process and some potential failure points for the command. See [below](#limitations-on-completion-job) for details.</li>
    </ul>
  </dd>

  <dt>**Priority (Windows Only)**</dt>
  <dd>Default value: `normal`
    <ul>
      <li>`Priority=normal` acts the same as the [action launch preference normal-priority](./action-launch-preference-normal-priority.html) command.</li>
      <li>`Priority=low` acts the same as the [action launch preference low-priority](./action-launch-preference-low-priority.html) command.</li>
    </ul>
  </dd>

  <dt>**Hidden (Windows Only)**</dt>
  <dd>Default value: `false`
    <ul>
      <li>`Hidden=true` applies the `SW_HIDE` attribute to the process as is done with the [runhidden](./runhidden.html) and [waithidden](./waithidden.html) commands.</li>
      <li>`Hidden=false` removes the `SW_HIDE` attribute from the process.</li>
    </ul>
  </dd>

  <dt>**Detached (Windows Only)**</dt>
  <dd>Default value: `false`
    <ul>
      <li>`Detached=true` creates the process using the detach method as is done in the [rundetached](./rundetached.html) and [waitdetached](./waitdetached.html) commands.</li>
      <li>`Detached=false` creates the process using the normal method.</li>
    </ul>
  </dd>

  <dt>**RunAs**</dt>
  <dd>Default value: `agent`
    <ul>
      <li>`RunAs=agent` applies the same process ownership characteristics as the current [wait](./wait.html) and [run](./run.html) commands.</li>
      <li>`RunAs=currentuser` mimics `RunAsCurrentUser.exe` on Windows, using the same logic to identify the current user and similar code to create the process with an environment block sourced by the userToken.</li>
      <li>`RunAs=localuser` specifies a user different from the logged on user. 
      <ul>
         <li>`user=<username>` or `{relevance to describe the username}` where the username specified must be either local or listed in local accounts.</li>
      </ul>
      <p>On Windows operating systems, you can use the option password as:
      <ul>
         <li>`password=required` if the Take Action Dialog must ask for the password and pass it to the agent as a SecureParameter.</li>
         <li>`password=impersonate` if the agent must search for a session running with the user specified with option user, and run the command in that session.</li>
      </ul>
      On other operating systems, option password is ignored.</p></li>
    </ul>
         <p>On UNIX/Linux, you cannot universally get the appropriate user environment variables, so there is no attempt to apply environment variables at all, with the exception of required Xauthority variables. On UNIX/Linux a call is made to [setuid](https://en.wikipedia.org/wiki/Setuid) to the id of the user identified as the current user for the XBESClientUI. This is a very specific and platform dependent test which requires the user to be logged on at the local console and running X Windows.</p>
  </dd>

</dl>

## Limitations on Completion=job

### Windows

To exercise the most flexible job control over a process, the override command allows the process to selectively break child processes away from the job. This allows the process to do its own job control management, but removes any of its broken out children from the job object.

In those limited cases where the launched process is responsible for its own job control, it is assumed that a member of the job will remain running until all of its child processes complete. This is not a guarantee, however, and there may be situations where this is not the case. In those cases, the action completes even though the child processes are still running.

### UNIX/Linux

On UNIX/Linux platforms session IDs are used to manage job processes. Session IDs take on the value of the process id of the session leader (the process you want to launch). The client waits for the leader process to end, as in the `Completion=process` case, then begins a cycle of a half-second of sleep followed by enumerating processes looking for anything with a session id matching the job leader's process id. When no more of these processes exist, the job is complete and the command finishes.

The exit code returned with the command is always that of the leader process, not the last process to complete.

## Examples

This example provides the same functionality as `waithidden notepad.exe`:

```actionscript
override wait
hidden=true
wait notepad.exe
```

This example shows how you might run a patch as a hidden process by the current user, waiting for completion of the job before continuing the action script:

```actionscript
override wait
completion=job
hidden=true
runas=currentuser
wait __Download\patch.exe arg1 arg2 arg3
```
