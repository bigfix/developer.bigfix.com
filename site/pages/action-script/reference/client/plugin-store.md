---
title: plugin store
---

This command inserts, updates or deletes a BigFix cloud plugin setting.
Plugin store settings are named values that can be encrypted or otherwise. Each plugin store setting has a timestamp associated with it. 


Version | Platforms
--- | ---
10.0.0.0 | Red Hat, Windows

## Syntax

    plugin store "<pluginName>" set "<pluginKey>" value "<value>" on "<date>"
    plugin store "<pluginName>" set encrypted "<pluginKey>" value "<value>" on "<date>"
    plugin store "<pluginName>" delete "<pluginKey>"
    plugin store "<pluginName>" delete all

Where:
`pluginName` describes the name of the plugin
`pluginKey` describes the key name of the plugin
`value` is the value to set
`date` is a timestamp

and

`set` is the command to insert or update a plugin key value
`set encrypted` is the command to insert or update a plugin key value in encrypted mode
`delete` is the command to delete plugin keys
`delete all` is the command to delete all plugin keys

    
## Examples

```actionscript
plugin store "AWSAssetDiscoveryPlugin" set "UName" value "JUser" on "31 Jan 2007 21:09:36 gmt"
```

```actionscript
plugin store "AWSAssetDiscoveryPlugin" set encrypted "UPassword" value "W34dfT_ghy7" on "{now}"
```

```actionscript
plugin store "AWSAssetDiscoveryPlugin" delete "UPassword"
```

```actionscript
plugin store "AWSAssetDiscoveryPlugin" delete all
```
