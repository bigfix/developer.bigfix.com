---
title: setting
---

This command sets a BigFix client setting.

Settings are named values that can be applied to individual sites or to client
computers. Each setting has a timestamp associated with it. This timestamp is
used to establish priority -- the latest setting will trump any earlier ones.

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

## Examples

Sets the setting `name` to `Bob` with an effective date of `31 Jan 2007
21:09:36 gmt`. It will supersede any other `name` setting with an earlier date.

```actionscript
setting "name"="Bob" on "31 Jan 2007 21:09:36 gmt" for client
```

Set the `preference` setting to `red` for the site named `color`. There can be a
different `preference` setting on each site. This example uses the
[now](/relevance/reference/time.html#now-time) inspector to set the effective
date to the time the action was evaluated.

```actionscript
setting "preference"="red" on "{now}" for site "color"
```

This sets the `division` setting to `"design group"`. Note that the quotes are
[percent encoded](https://en.wikipedia.org/wiki/Percent-encoding).

```actionscript
setting "division"="%22design group%22" on "{now}" for current site 
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
