---
title: action parameter query
---

This command allows you to prompt the user that creates the action for the value
of a parameter. This is typically used to prompt for setting values, file
locations, or service names.

Parameter names may include blanks, and are case sensitive. The parameter name,
description, and value must each be enclosed inside double quotation marks `"`.

## Syntax

    action parameter query "<name>" [with description "<description>"] [and] [with default [value] "<value>"]

## Examples

Ask the user for the value of `InstallationPoint` when this action is taken. When the script is run, use the value of `InstallationPoint` as an argument to `MyTool.exe`:

```actionscript
action parameter query "InstallationPoint" with description "Please enter the location of the shared installation point:"
run MyTool.exe {parameter "InstallationPoint"}
```

Create a parameter that can turn 'Tips' on or off:

```actionscript
action parameter query "tips" with description "Enter 'on' or 'off' to control Fixlet tips." with default "on"
regset "[HKEY_CURRENT_USER\Software\BigFix]" "tips"="{parameter "tips"}"
```

## Notes

The parameter values input by the user may include %xx where xx stands for a
two-digit hexadecimal number to specify the character you want to embed. To
embed a percent sign, use `%25`. To embed a double quote, use `%22`.

While the action is executing, you can retrieve the action parameter value
entered by the user with the [parameter](/relevance/reference/string.html#parameter-string-string)
inspector. For example, in your action you could use relevance substitution:

```actionscript
run "{parameter "parameter name"}"
```

Relevance substitution is **not** performed on the action parameter query
command line itself. This is because the command is interpreted in the BigFix
Console before the action is sent out.
