---
title: action uses file encoding
---

The <i>action uses file encoding</i> command affects the behavior of the [appendfile](../file/appendfile.html) and [createfile until](../file/createfile-until.html) commands.
If you do not use the <i>action uses file encoding</i> command, the [appendfile](../file/appendfile.html) and [createfile until](../file/createfile-until.html) commands create files in the local client encoding.


The encoding might be any name that ICU can recognize, such as ISO-8859-1, Shift_JIS, and UTF-8.
After created, the file objects can be used as regular file objects and you can apply any operations applicable to text files.
To turn off the encoding change and reuse the local encoding, you can set the encoding keyword to local.

Version | Platforms
--- | ---
9.5.7 | All

## Syntax

```actionscript
    action uses file encoding encoding [ NoBOM ]
```
	
## Examples

To create a file using the UTF-8 encoding without a BOM, you can run the following command:

```actionscript
action uses file encoding UTF-8 noBOM
```
