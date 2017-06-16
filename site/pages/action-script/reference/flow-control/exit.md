---
title: exit
---

This command terminates the action and sets the action exit code. Relevance
substitution can be used to set the exit code.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    exit <code>

## Examples

Exit the action early if `foo.exe` returns a non-zero exit code.

```actionscript
wait "foo.exe"
parameter "error" = "{exit code of action}"
if {parameter "error" != "0"}
  exit {parameter "error"}
endif
// continue processing
```

## Notes

This is one of the four script commands that can change the action exit code.
The other commands that can change the exit code are:

* [wait](../execution/wait.html)
* [waithidden](../execution/waithidden.html)
* [waitdetached](../execution/waitdetached.html)

For actions of type `sh` the exit code of the script is collected into the
inspector value when the client finishes processing the shell script. Exit codes
from Unix shell scripts are written to the client log.
