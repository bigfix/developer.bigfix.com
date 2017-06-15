---
title: agent interface
---

This command allows to pass instructions to the other end of the Agent to Agent communication channel, addressing a specific agent. 

Version | Platforms
--- | ---
9.5.5.0 | All

## Syntax

```actionscript
agent interface "ProductID" command
```

## Examples

These are examples using the ProductID "EDR":

```actionscript
agent interface "EDR" quarantine file -filepath "C:\myfolder\myfile.exe"
```

```actionscript
agent interface "EDR" kill 10567
```
