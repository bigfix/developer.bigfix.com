---
title: Setting OnLoad events
---

If you want to add an onload event, make sure that you call the original Web
Reports onload event at some point. This is how you would typically create an
onload event:

```js
window.onload = function() {
     hourglass(document.body);
     RetrieveData();
     pointer (document.body);
}
```

To work with Web Reports, make sure that you include the original onload event
as follows:

```js
var oldonload = window.onload;
window.onload = function() {
     hourglass(document.body);
     RetrieveData();
     pointer(document.body);
     oldonload();
}
```

This ensures that the Web Reports UI is displayed correctly.
