---
title: Custom report
---

A custom report is constructed from HTML, relevance expressions, and JavaScript.
The ```<Data>``` tag contains a definition of the report in a ```CDATA``` block to allow the
HTML and JavaScript portions to be presented normally, without the need for
escape characters.

This is a custom web report that retrieves and prints the names of your networked
computers:

```xml
<BESWebReport>
 <Name>Example Custom Report</Name>
 <Description>
  A customized report, prints all computer names.
 </Description>
 <Type>CustomReport</Type>
 <Category>Custom Report</Category>
 <Source>IBM</Source>
 <Data>
  <![CDATA[
   <div>Computer Names</div>
   <?Relevance names of bes computers?>
  ]]>
 </Data>
</BESWebReport>
```
