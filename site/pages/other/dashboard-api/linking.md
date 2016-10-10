---
title: Linking
---

The console intercepts all links before they are followed. If the *link:* protocol is
used, then they are interpreted as an instruction to the console. This is typically
something like:

```xml
link:opendoc?siteid=123&objectid=456
```

This link opens the given document from the specified site. Additional capabilities
include launching wizards and various console dialogs (such as Take Action or
Visualization), running search operations, and more.
