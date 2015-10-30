---
title: archive now
---

This command invokes the [Archive Manager](http://support.bigfix.com/product/documents/Upload_Archive_Manager_80_101211.pdf). If the `Archive Operating Mode` is set
to manual, this command will trigger archiving and uploading of the configured
set of files. To set the appropriate archive mode to manual, use this setting:

    _BESClient_ArchiveManager_OperatingMode = 2

The `archive now` command will fail if the operating mode is not set to manual.
It will also fail if an existing archive is currently being uploaded.

## Syntax

    archive now

## Examples

This command initiates archiving and uploading of the configured set of files.

```actionscript
archive now
```
