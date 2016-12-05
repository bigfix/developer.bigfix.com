---
title: Shell script
---

Web Reports has a generalized report format that can incorporate reports from
content sites, allowing new reports to be added, edited, or removed. The report file
must have the extension .beswrpt, and is written in XML:


```xml
<BESWebReport>
   <Name>Report name</Name>
   <Description>Report description</Description>
   <Type>[TemplateReport] | [CustomReport] | [ExternalReport]</Type>
   <Category>Report category</Category>
   <Source>Report source</Source>
   <URLParameters>param1=value1&amp;param2=value2</URLParameters>
   <Data>Custom data or external URL</Data>
</BESWebReport>
```

The .beswrpt file can also contain multiple reports in one xml file:

```
<BESWeb Reports>
<BESWebReport>
.
.
.
</BESWebReport>
<BESWebReport>
.
.
.
</BESWebReport>
</BESWeb Reports>
```

The *Name*, *Category*, and *Source* are listed in the basic report list, and *Description*
shows if the question mark (?) next to it is clicked. If the category is blank, a
suitable default is filled in, depending on the type of the report. A blank source
just appears blank.
URLParameters and Data depend on the Type tag. The type tag can be one of three
strings, [TemplateReport](./template_report.html), [CustomReport](./custom_report.html), 
or [ExternalReport](./external_report.html) (case-sensitive).
