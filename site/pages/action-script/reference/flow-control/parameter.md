---
title: parameter
---

This command can be used to create variables in the action script. After setting
a variable, the value can be accessed using the
[parameter](/relevance/reference/string.html#parameter-string-string) inspector.

A parameter can only have one value. Trying to set an existing parameter to a
different value will result in an error.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    parameter "<name>"="<value>"

Note that both the name and the value of the parameter must be inside quotes.

## Examples

Defines a parameter named `loc` that contains the pathname of the `tmp` folder,
and uses it to write configuration information to a file.

```actionscript
parameter "loc" = "{pathname of folder (value of variable "tmp" of environment)}"
createfile until end
Operating system = {name of operating system}
Processor count = {number of processors}
end
delete "{parameter "loc"}\config.txt"
copy __createfile "{parameter "loc"}\config.txt"
```

## Notes

The saved parameter value is always a string.

If there is any error in evaluating the relevance expression to create the
parameter, then the parameter will not be set. If the relevance expression
results in multiple values then, then the command fails.
