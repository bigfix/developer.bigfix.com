---
title: Template report
---

A template report provides arguments for, and then runs, a previously existing
Web Report. The URL for the report is specified in the ```<URLParameters>``` tag.
The Data tag does not exist for this report.

For example, to create a particular *Issue Assessment* report, you might create a
template report like the following:

```xml
<BESWebReport>
<Name>Example Issue Assessment Report</Name>
<Description>
 An example report. Runs the Issue Assessment report with
 specific Fixlets, BES Support/129 and BES Support/173.
</Description>
<Type>TemplateReport</Type>
<Category>Issue Assessment</Category>
<Source>HCL</Source>
<URLParameters>
 FixletParam=BES Support%2f129&amp;FixletParam=BES Support%2f173&amp;page=VAReport
</URLParameters>
</BESWebReport>
```

**Note:** The URL must be properly escaped inside the XML.
