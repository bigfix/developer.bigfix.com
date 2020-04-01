---
title: External report
---

An External Report places an absolute link into the report list that can point to any
valid web page. It allows, among other things, linking to another reporting engine
or service. The Data tag contains the full external URL and must start with http or
https.

This is an example report that displays the HCL Software home page:

```xml
<BESWebReport>
  <Name>Example External Report</Name>
  <Description>Home Page</Description>
  <Type>ExternalReport</Type>
  <Category>External Report</Category>
  <Source>HCL</Source>
  <Data>https://www.hcltechsw.com/</Data>
</BESWebReport>
```
