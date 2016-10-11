---
title: BES XML document
---

The easiest way to learn about BES XML documents is to create one instance of that type of content on the BigFix console 
and then export it as follows:
1. To export a Fixlet, task, baseline, action, analysis or computer group, right-click one from the 
console list panel and select **Export** from the pop-up menu.
2. To export retrieved properties, open **Tools -> Manage Properties**, select a property, and click **Export**.
3. Select a folder for the exported .bes file.
4. Open the saved .bes file in an XML editor or plain-text editor.

Generally speaking, a BES XML file contains a ```BES``` document element, with at least one Fixlet, task,
baseline, analysis, SingleAction, MultipleActionGroup, ComputerGroup, or property element. This is the list of all the 
possible elements that you can include in your BES XML file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="BES.xsd">
<Fixlet>
  ...
</Fixlet>
<Task>
  ...
</Task>
<Baseline>
  ...
</Baseline>
<Analysis>
  ...
</Analysis>
<SingleAction>
  ...
</SingleAction>
<MultipleActionGroup>
  ...
</MultipleActionGroup>
<ComputerGroup>
  ...
</ComputerGroup>
<Property>
  ...
</Property>
</BES>
```

The format and the fields to specify for each element in the BES XML file is documented in the 
BES Schema file [BES.xsd](/rest-api/bes_xsd.html). You can find this file in the *Program
Files\BigFix Enterprise\BES Console\Reference* folder on your console computer.

Specifically, the BES.xsd file contains the definitions for all the content that you can submit to the Server API. 
Any content that you create must validate against this schema or it is rejected during the import. 

You can also use this schema file when you create your scripts, because many XML authoring tools include the
schema to make XML authoring easier.

The content that you create for the Server API is in XML format and is saved in
files with extension *.bes*.

**Note:** In XML, the ```<```, ```>```, ```&```, and ```”``` characters must be escaped as ```&lt;```,
```&gt;```, ```&amp;```, and ```&quot;``` respectively. Because many elements can contain
HTML, it can be easier to wrap the element’s unescaped contents in a CDATA tag,
as in ```<![CDATA[...]]>```. CDATA tags cannot be nested, so this technique does not
work if the data already contains the CDATA end tag ```(“]]>”)```.

