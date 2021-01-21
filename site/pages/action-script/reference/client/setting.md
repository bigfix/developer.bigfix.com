---
title: setting
---

This command sets a BigFix client setting.

Settings are named values that can be applied to individual sites or to client
computers. Each setting has a timestamp associated with it. This timestamp is
used to establish priority, the latest setting will trump any earlier ones.

Version | Platforms
--- | ---
8.0.584.0 | AIX, HP-UX, Mac, Red Hat, SUSE, Solaris, Windows
8.1.535.0 | Debian, Ubuntu

## Syntax

    setting "<name>"="value" on "<date>" for client
    setting "<name>"="value" on "<date>" for current site
    setting "<name>"="value" on "<date>" for site "<sitename>"

Where `name=value` describes the setting, and `date` is a timestamp used to
establish priority between conflicting `setting` commands.

The recommended `date` to use in most cases is `{parameter "action issue date"
of action}` which is interpreted as the date (and time) that the action is
issued at.
It is also possible to use `{now}` as the `date`, knowing that this may cause
the action to override setting values that were applied after the action was
issued (i.e. newer than the action). In fact, when the action runs, the
[now](/relevance/reference/time.html#now-time) inspector returns the current
time (i.e. at moment of the execution), and not the time that the action was
first issued at.

There can be a different `<name>` setting on each site.

## Examples

Sets the setting `name` to `Bob` with an effective date of `31 Jan 2007
21:09:36 gmt`. It will supersede any other `name` setting with an earlier date.

```actionscript
setting "name"="Bob" on "31 Jan 2007 21:09:36 gmt" for client
```

This sets the `foo` setting to `bar`. It will not overwrite that setting if
another action changed it after this action was issued.

```actionscript
setting "foo"="bar" on "{parameter "action issue date" of action}" for client
```

This sets the `division` setting to `"design group"` (quotes included) for the
current site. Note that the quotes are [percent encoded](https://en.wikipedia.org/wiki/Percent-encoding).

```actionscript
setting "division"="%22design group%22" on "{parameter "action issue date" of action}" for current site
```

Set the `preference` setting to `red` for the site named `color`. This example
uses `{now}` as the `date` to override the setting value regardless of when it
was last set.

```actionscript
setting "preference"="red" on "{now}" for site "color"
```

## Notes

When a client is reset, the effective dates of the settings are removed and any
subsequent setting commands will overwrite them. There are several ways that
clients can be reset, including computer-ID collisions (most often caused by
accidentally including the computer ID in an image that gets copied to multiple
systems), changing the masthead to a new server, or instructing the client to
collect a new ID.

The actions that run next will establish a new effective date, but the setting
values will be the same as before the reset. The values are retained because
they contain information such as relay selections. That way, when a deployment
reset occurs, you don’t have to issue new actions to reset your network relay
structure.

To make sure your actions do not interfere with each other, write your own checks
using the relevance language. You cannot rely on the settings date alone.
To ensure an action only runs once, use a task instead of a fixlet.
If you want to run multiple actions in a given order, create a baseline.

