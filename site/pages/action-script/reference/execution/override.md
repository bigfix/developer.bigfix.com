---
title: override
---

The override command provides the ability to customize certain commands and add multiple variations to existing commands.

This powerful compound command allows you to create your own custom combination command similar to the existing commands [waitdetached](./waitdetached.html) or [runhidden](./runhidden.html).

To add constraints to an existing command, you add predefined keyword/value pairs within the body of the command.

<p><b>Warning: </b>Do not launch long run programs directly from the <i>`__Download`</i> folder using any of the following commands: [run](./run.html), [rundetached](./rundetached.html), [runhidden](./runhidden.html), override with completion=none, or override with timeout, disposition=abandon. Instead, add an action to copy the programs to a location different from the <i>`__Download`</i> folder and launch the programs from there. This is necessary because, if a file in the <i>`__Download`</i> folder is invoked from any of these action script commands, the launched program locks the file until it ends and, if the launched program runs for a very long time or hangs, the Agent cannot process the next action for the same site context because it cannot clear the <i>`__Download`</i> folder.</p>

Version | Platforms
--- | ---
8.2.531.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows, Debian, Ubuntu

## Syntax

    override <cmd>
    <keyword>=<value>
    <keyword>=<value>
    <cmd> <rest of command-line>

## Keywords

The keywords may be specified in any order, but there must be only one per line. White-space is not needed around the equal sign `=` and is ignored.

Keywords are case-insensitive, and the values can be enclosed in {curly brackets} for Relevance substitution.

If duplicate keywords are listed, the last value will be used. The entire command fails if any of the keywords or values are invalid. Platform-specific keywords that are not meaningful on a given platform will be silently ignored.

The action command overrides *timeout_seconds* and *disposition* only modify the behavior of the `wait` and `waithidden` action commands.

<dl>

  <dt>**Completion**</dt>
  <dd>Default value: `none` for run, `process` for wait.
    <ul>
      <li>`Completion=none` acts the same as the current run command variants.</li>
      <li>`Completion=process` acts the same as the current wait command variants. When this value is used for run, the command result it is not displayed.</li>
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
  <dd>Use this keyword to specify the user and the context to use when running the command specified in the action.
  
  Default value: `agent`
    <ul>
      <li>`RunAs=agent` applies the same process ownership characteristics as the current [wait](./wait.html) and [run](./run.html) commands. The user and the context are the same as those used to with the current [wait](./wait.html) and [run](./run.html) commands</li>
      <li>`RunAs=currentuser` mimics `RunAsCurrentUser.exe` on Windows, using the same logic to identify the current user and similar code to create the process with an environment block sourced by the userToken. In case of multiple logged-on users, the BES agent chooses the console session if active, or the first logged-on user returned from the operating system.
      <p><b>Note: </b> 
	<ul><li>On UNIX and Linux the environment variables are not applied with the exception of required Xauthority variables. On such platforms a call is made to [setuid](https://en.wikipedia.org/wiki/Setuid) to the id of the user identified as the current user for the XBESClientUI. This is a very specific and platform dependent scenario which requires the user to be logged on at the local console and running X Windows.</li>
		<li>In the case of an Offer, there is no relationship between the user who has accepted the Offer and the current user identified by the BES agent at the time of action execution.</li></p>
      </li></ul>
      <li>`RunAs=localuser` specifies a user who can be different from the logged on user. 
      <p>Specify the mandatory option `user` in one of these two formats: `user=<username>`, or `user={relevance to describe the username}` to allow a parametrized input.</p>
      <p>This keyword requires the BigFix Agent to run successfully, for this reason it does not work when run from the Fixlet Debugger.</p>
<p>On Windows systems you can specify any local or domain account. If you use the keyword `Completion=process` or `Completion=job`, there is no need for the specified user to be logged on the system in advance. If you use the keyword `Completion=none`, the user must be logged on the system in advance and must have a registry hive.</p> 
On other operating systems, the specified user must be either local or listed in local accounts, in other words:
      <ul>
         <li>On Unix or Linux the user must be specified in the */etc/passwd* file.</li>
	 <li>On Mac the user must be one of the locally defined users.</li>
      </ul>	 
      <p>The following considerations about the `RunAs=localuser` keyword apply to users defined on Windows systems only:</p>
      <ul>
	 <li>You can specify a domain user by using one of the following formats:
         <ul>
	    <li>"user@domain" where domain is an active directory domain, for example "john@tem.test.com".</li>
	    <li>"domain\user" where domain is specified in the short domain name notation, for example "TEM\john".
	    <p><b>Note:</b> The action runs even if the specified domain user has never logged on the target system before then.</p></li>
	 </ul>
	 </li>
	 <li>You can specify the option `password` as follows:
	 <ul>
            <li>`password=required` if specified, a Take Action Dialog requiring to enter the user's password is displayed on the Console. That password is then passed to the agent as a SecureParameter.
	    <p><b>Note:</b> Only one password can be passed to the action using the override command. An action with more than one override command, with different users specified, fails unless the specified users use the same password. To bypass this constraint, you might want to create different Fixlets or tasks, each one with an action containing one of the override commands to run.</p></li>
            <li>`password=impersonate` if the agent must search for a session running with the user specified in the `user` option, and run the command in that session.</li>
	    <li>`password=system` to run the command the with the Local System account and without an user context. The command requires the specified user to be logged on when the `override` runs on the system. Any UI will be displayed in the session of the specified user.
	    <p><b>Note:</b> Use the `asadmin` option if you want the command to write to *HKEY_CURRENT_USER* registry hive.</p> 
	    </li>
         </ul>
	 <p><b>Note: </b>On other operating systems, the option `password` is ignored because the agent runs with *root* authority.</p>
	 </li>
	 <li>You can use the option `asadmin` as follows:
	 <ul>
	    <li>`asadmin=true` to run the specified command in the context of the specified user as if user is a member of builtin Administrators group. In this case you must:
	    <ul>
	       <li>Specify `password=required`.</li>
	       <li>Omit the `targetuser` keyword.</li>
	    </ul>
	    </li>
	    <li>`asadmin=interactive` to run the specified command in the context of the user specified in the `user` keyword  as if that user were a member of builtin Administrators group. The following rules apply if you use this value:
            <ul>
	       <li>If you use the `targetuser` keyword, the UI launched by the command is displayed in the session of the user specified with `targetuser`. The command fails if the user specified with the `targetuser` keyword is not logged on when the override command runs.</li>
	       <li>You must specify the keyword `password=required`, when using an existing account, or the `password="password"` keyword, if you want to use a temporary user and you have to specify the user's password in the action in clear text. If you use the `password="password"` keyword, specify the actual password surrounded with double quotes.</li>
	    </ul>
	    </li>
	 </ul>
	 </li>
      </ul> 
      </li>
   </ul>
   </dd>

  <dt>**timeout_seconds**</dt>
  <dd> Default value: 0
	<ul>
      <li>`timeout_seconds=*positive integer*` makes the client wait the specified number of seconds during a [wait](./wait.html) or [waithidden](./waithidden.html) command before the action script continues without waiting for the completion of the command's process. The supported values for the timeout are all positive integers to the maximum supported by the computer architecture.</li>
      <li>`timeout_seconds=0` is the default value, and makes the [wait](./wait.html) or [waithidden](./waithidden.html) commands act as if the `timeout_seconds` override were not set.</li>
    </ul>
  </dd>

  <dt>**disposition**</dt>
  <dd> Default value: `abandon`
	<ul>
		<li>`disposition` tells the client what to do with the process under the [wait](./wait.html) or [waithidden](./waithidden.html) command once the timeout is finished.</li>
		<li>`disposition=terminate` tells the client to kill the [wait](./wait.html) and [waithidden](./waithidden.html) command's process when the timeout is reached. Killing the process can have negative consequences, and should be used with extreme caution.</li>
		<li>`disposition=abandon` is the default value, and tells the client to disassociate the [wait](./wait.html) or [waithidden](./waithidden.html) command's process from the remainder of the actions.</li>
    </ul>
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

<b>On Windows platforms</b>

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

This example shows how you might run a maintenance application, but kill the maintenance process if it isn't finished by the time 1 hour has passed:

```actionscript
override wait
timeout_seconds=3600
disposition=terminate
wait "__Example\maintenance.exe" arg1 arg2 arg3
```

This example shows how you might install a software application on a Windows machine using the context of a domain user who doesn't belong to the Administraor group. A Take Action Dialog, asking for the user's password, will appear on the console . The password will be passed to the agent as a SecureParameter:

```actionscript
override wait
    	runas=localuser
	asadmin=true
	user=TEM\User1
	password=required
wait c:\IMAGE\SWD\application.exe /SILENT
```
<b>On non-Windows platforms</b>

```actionscript
override wait
completion=job
wait tar --directory=/tmp -zxvf __Download/myFile.tgz
```
