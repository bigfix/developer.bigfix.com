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

The <command-line> must start with the path of an executable, followed by its parameters, if any.

The `wait` command checks the exit code of the executable.

The `wait` command has two available override keywords: `timeout_seconds`, and `disposition`.
See the [override](./override.html) documentation for details.

## On Windows

On a Windows computer, this command has the same effect as calling the [CreateProcess](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682425%28v=vs.85%29.aspx) function with `<command-line>`. This is also the same as using `<command-line>` in the Windows Run dialog.

The use of quotes ("") is recommended practice, and necessary if there are spaces in the path of the executable or in its parameters.

Examples:

Run the scandskw.exe program and wait for it to complete.

```actionscript
wait "scandskw.exe"
```

## On non-Windows platforms

The wait command expects to run a single executable, not a series of commands.

If you need to wait for a series of commands to complete:
* you can pass them as a string to your shell
* you can create a shell script and run it

If you want to run inline shell commands, you can do as follows
```actionscript
wait /bin/sh -c "your command"
```

However, compared to typing your command in the terminal, the following differences apply:
* your command string must start with double quotes ("), not with single quotes (')
* to access the value of a variable declared in your command string, do not escape the $
* changes to your environment variables might be lost

Examples:

To create a file with a bit of text.
Note that you must start the command string with double quotes, but can use single quotes inside it.
Quote escaping works as expected.
```actionscript
/bin/sh -c "echo 'my text' > \"/root/Desktop/my file.txt\""
```


To initialize an environment variable and print it to a file, the command in the terminal would be
```actionscript
/bin/sh -c 'export MY_ENV_VAR="my value"; /bin/echo "$MY_ENV_VAR" > /root/Desktop/myFile.txt'
```
or
```actionscript
/bin/sh -c "export MY_ENV_VAR='my value'; /bin/echo \$MY_ENV_VAR > /root/Desktop/myFile.txt"
```


But to run it with the wait command, you would write it as follows
```actionscript
/bin/sh -c "export MY_ENV_VAR='my value'; /bin/echo $MY_ENV_VAR > /root/Desktop/myFile.txt"
```

Just remember that, after the command ends, changes to MY_ENV_VAR will be discarded.


To create a shell script and run it.

```actionscript
delete __createfile
createfile until END_OF_FILE
#!/bin/sh
export MY_ENV_VAR="my_value"
/bin/echo "$MY_ENV_VAR5" > "/root/Desktop/my_file.txt"
END_OF_FILE

delete my_script.sh
move __createfile my_script.sh

wait chmod +x ./my_script.sh
wait /bin/sh -c "./my_script.sh"
delete my_script.sh
```

