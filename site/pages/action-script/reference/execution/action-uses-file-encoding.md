---
title: action uses file encoding
---

The <i>action uses file encoding</i> command affects the behavior of the [appendfile](../file/appendfile.html) and [createfile until](../file/createfile-until.html) commands.
If you do not use the <i>action uses file encoding</i> command, the [appendfile](../file/appendfile.html) and [createfile until](../file/createfile-until.html) commands create files in the local client encoding.


The encoding might be any name that the [International Components for Unicode (ICU)](http://demo.icu-project.org/icu-bin/convexp) can recognize, such as ISO-8859-1, Shift_JIS, and UTF-8.
If any of UTF encodings (UTF-8, UTF-16, or UTF-32) is specified as the value of encoding, the file to be created will have a BOM (Byte Order Mark) at the head of it. But, in case that the client's local encoding is UTF-8 and no encoding is explicitly specified in an action, files to be created with the action will be written in UTF-8 without BOM. This behavior is the same with the existing version of the "appendfile" and "createfile until" commands, so we should keep the same behavior unless any encoding is specified so that the existing actions will work as before.

To suppress adding any BOM, you can pass an optional suboption "NoBOM" (case-insensitive) following the value of encoding. The "NoBOM" suboption is effective only with any UTF encodings (UTF-8, UTF-16, and UTF-32), and it will be ignored if it is passed with any other encoding name.

After created, the file objects can be used as regular file objects and you can apply any operations applicable to text files.
To turn off the encoding change and reuse the local encoding, you can set the encoding name to local.

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
action uses file encoding UTF-8 NoBOM
```

To revert using the local encoding, run the following command:

```actionscript
action uses file encoding local
```

On non-Windows platforms:

```actionscript
delete "{(client folder of current site as string) & "/__appendfile"}"
action uses file encoding UTF-8 noBOM	
appendfile Hello world !!
delete /tmp/encode_test.txt
move __appendfile /tmp/encode_test.txt
```
