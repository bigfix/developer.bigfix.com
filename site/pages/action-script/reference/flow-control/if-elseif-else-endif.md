---
title: if, elseif, else, endif
---

The `if`, `elseif`, `else`, and `endif` commands allow conditional execution of
commands.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    if {expression1}
      statement1
      statement2
      ...
    elseif {expression2}
      statement3
      statement4
      ...
    else
      statement5
      statement6
      ...
    endif

## Examples

Prefetch and run a different file depending on the operating system.

```actionscript
if {name of operating system = "WinME"}
prefetch patch1.exe sha1:e6dd60e1e2d4d25354b339ea893f6511581276fd size:4389760 http://example.com/winme.exe
wait __Download\patch1.exe
elseif {name of operating system = "WinXP"}
prefetch patch2.exe sha1:92c643875dda80022b3ce3f1ad580f62704b754f size:813160 http://example.com/winxp.exe
wait __Download\patch2.exe
else
prefetch patch3.exe sha1:c964d4fd345b6e5fd73c2235ec75079b34e9b3d2 size:845416 http://example.com/win7.exe
wait __Download\patch3.exe
endif
```

## Notes

The client parses actions before it actually executes them, looking for
downloads to [prefetch](../download/prefetch.html).

If the prefetching process doesn't parse properly, an action syntax error will
be returned and the action will not run. This can be problematic if you are
creating actions that work in multiple environments where only one branch of an
if statement may parse correctly. For instance, you might want to load files
that are unique to specific platforms. A script like this would seem to do the
trick:

```actionscript
if {not exists key "foo" of registry}
prefetch windows_file ...
else if {not exists package "bar" of rpm}
prefetch unix_file ...
endif
```

Here a Windows registry key triggers the first prefetch, while a Unix package
triggers the second. The problem is that the registry inspector will fail on
Unix systems, and the package inspector will fail on Windows, causing the
prefetch parser to throw an error in both cases.

The answer here is to use cross-platform inspectors to make sure the wrong
blocks are not evaluated:

```actionscript
if {name of operating system starts with "Win"}
if {not exists key "foo" of registry}
prefetch windows_file ...
endif
else if {name of operating system starts with "Redhat"}
if {not exists package "bar" of rpm}
prefetch unix_file ...
endif
endif
```

By checking first for the proper operating system, you can avoid this type of
prefetch parse error.

However, sometimes there may be no way to avoid a potential error. For instance,
an action may create and access a file that doesn't yet exist in the prefetch
phase:

```actionscript
wait chkntfs c: > c:\output.txt
if {line 2 of file "c:\output.txt" as lowercase contains "not dirty"}
regset "HKLM\Software\MyCompany\" "Last NTFS Check"="OK"
else
regset "HKLM\Software\MyCompany\" "Last NTFS Check"="FAIL"
endif
```

In this Windows example, the output file doesn't exist until the script is
actually executed. The prefetch parser will notice that the file doesn't exist
when it checks for its contents. It will then throw an error and terminate the
action. However, you can adjust the if-condition to allow the prefetch pass to
succeed. One technique is to use the
[active of action](/relevance/reference/action.html#active-of-action-boolean)
expression which always returns `False` during the prefetch pass. You can use
this to avoid the problematic block during the pre-parse:

```actionscript
wait chkntfs c: > c:\output.txt
if {not active of action OR (line 2 of file "c:\output.txt" as lowercase contains "not dirty")}
regset "HKLM\Software\MyCompany\" "Last NTFS Check"="OK"
else
regset "HKLM\Software\MyCompany\" "Last NTFS Check"="FAIL"
endif
```

By checking first to see whether the action is being pre-parsed or executed, you
get a successful prefetch pass and the desired behavior when the action is
running.
