---
title: Adding Relevance to Presentations
---

You can evaluate relevance in presentations in two ways which are compatible with both the Console and Web Reports.
The two ways are **server side** and **client side**

## Server side preprocessing
Preprocessor directives are typically handled by the server before the page is loaded and handed off to the display engine. 
This is the syntax that is used:

```
<?relevance "expression"?>
```

which is similar to other language declarations, such as `<?xml?>` or `<?php?>` tags.

This is useful for expressions that only need to be evaluated once, or for those you need as soon as the page is loaded. 

In Web Reports, you might choose this technique if you want to apply an active filter. The result is coerced into the new html Inspector type, which means that string results will be escaped so that they will not confound any surrounding HTML code.

## Client side processing using JavaScript
This technique uses the EvaluateRelevance API, which allows you to incorporate Relevance results within JavaScripts. This functionality is provided by an external javascript file which is automatically included by console documents that support presentation functionality (including Fixlets, Tasks, Baselines, Analyses and Wizard documents). 

In Web Reports the included file is defined slightly differently, but provides the same functionality.
From any script code you can evaluate a Relevance expression and get the results back as a string, like this:

```
myDiv.innerText = EvaluateRelevance( "expression" );
```

Where `“expression”` is a Relevance expression, as discussed above. 

The result of EvaluateRelevance depends on whether the expression is a singular expression or a plural expression. If expression is singular, the result is a string. If it is plural, the result is an array of strings. Unlike the results of relevance in processing instructions, none of the strings are HTML-escaped unless you use the `"as html"` cast explicitly.
There are many advantages to working with JavaScript. One of the most important is user interactivity. For example, you can create a script that will only evaluate relevance after getting input from the Console user.



