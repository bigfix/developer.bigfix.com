---
title: The Session Relevance Tester
---

{% section %}

Starting the BigFix Console just to access the Presentation Debugger can be inconvenient because the Console takes a while to load. Instead of that approach, you can run the Session Relevance Editor.
These are the main features in the BigFix Session Relevance Tester:

* Session Relevance Editor against the Web Reports context.
* Web Reports Editor to write and run reports.

Click [Session Relevance](/relevance/guide/session/) to access the part dedicated to the Session Relevance language.

It also includes modules such as the Session Relevance Editor module, the Inspector Reference module, 
and the Web Reports module, which simply returns the values from the Properties inspector. It provides a fast and efficient way to browse through available inspectors and their corresponding creation methods and properties.

{% endsection %}

## Session Relevance Editor

These are the main capabilities of the Session Relevance Editor module:

* Syntax highlighted editor for Session Relevance, including a detection of open/close parenthesis.
* Accepts comments using double slashes // (or /* */ block).
* Automatically sort the results.
* Automatically split tuples into columns.
* Output results as Grid or HTML.
* Export to Excel.
* Support for printing (preview, page setup, additional options).
* Supports saving the documents (.bsr extension is associated with this app).
* Line numbering, word wrapping within the editor.
* Start multiple editors in different tabs.
* Indent and flatten the relevance statements.

![Session Relevance Editor on SRT](/static/img/session_relevance_editor_onsrt.jpg)

## Inspector Reference

This module provides a fast and efficient way to browse through available Inspectors and their corresponding creation methods and properties from within the Session Relevance Tester. It returns the values from the [Properties](../relevance/guide/basics/properties.html) Inspector, for example:

```
properties whose (it as string contains "computer group")
```
![Inspector Reference](/static/img/inspector_reference.jpg)

## Web Reports Editor

 This module interacts directly with the Web Reports. If you click the **Evaluate** button and have the code run against the Web Reports. 
 The Web Reports Editor can switch between HTML syntax highlight and JavaScript syntax highlight.
 
![Web Reports Editor](/static/img/web_reports_editor.jpg) 
 
## Session Relevance Tester Requirements

* IBM BigFix 7.2 or above is required.
* The app is written in C#, and requires .NET Framework 2.0 or above. 

## Download

Download the zip file with the installer by clicking [Session Relevance Tester](http://leewei.com/bigfix/prod/sessrel/BESSessionRelevanceInstaller80627.zip ).

