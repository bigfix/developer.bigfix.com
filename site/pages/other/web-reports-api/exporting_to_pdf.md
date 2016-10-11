---
title: Exporting to PDF
---

You can export content reports by using **EvaluateRelevance** to PDF. By default,
Web Reports allows only ten seconds for generating the PDF. If your reports are
taking longer than that, you can adjust the wait, by performing the following
steps:
1. Include an element with ```id='wr_content_will_signal_completion'``` to your report,
like this:
```xml
<div id='wr_content_will_signal_completion'></div>
```
2. When your report is ready to print, set the DOM property
*document.wr_content_complete* to true with the following JavaScript:
```js
document.wr_content_complete = true;
```
3. If the report never sets the *document.wr_content_complete* property, it times
out after an hour and reports an error. To avoid delays with PDF generation,
you can wrap your report in a try/catch block and, in the catch portion, set
```js
document.wr_content_complete = true
```

