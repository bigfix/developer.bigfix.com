---
title: administrator add
---

This command lets you add a BigFix user as an administrator of the computer.
This is accomplished by using a BigFix client setting with an effective date
passed as a parameter. The date is not optional. The effective date tests are
the same as for the [setting](./setting.html) command.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    administrator add <operator-name> on <date>

## Examples

Add the BigFix operator named `bob` as an administrator of the client computer.

```actionscript
administrator add "bob" on "21 Aug 2002 17:39:14 gmt" 
```

## Notes

The `operator-name` that this command expects is the masthead user name of the
operator. To determine what the masthead user name is for an operator, you can
use the [masthead operator name](/relevance/reference/bes-user.html#masthead-operator-name-of-bes-user-string)
session inspector.
