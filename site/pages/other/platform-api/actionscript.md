---
title: ActionScript
---

You can include multiple scripts in a .bes file. This is the schema:

```xml
<...
MIMEType="xs:normalizedString [0..1]">
	The attribute MIMEType specifies the type of the actionscript; if absent,
	it defaults to "application/x-Fixlet-Windows-Shell". For AppleScript, use
	“application/x-AppleScript”. For a sh script, use “application/x-sh”.
	The contents of the tag specify the contents of the action script.
	xs:string
</...>
```
