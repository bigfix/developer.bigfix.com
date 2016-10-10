---
title: WEB Reports API content structure
---

{% section %}

The Web Reports API is based on HTML and XML, with a new interface based on
SOAP. 

![WEB reports panel 2](/static/img/web_reports_2.png)

The XML defines hooks into the console or Web Reports and it has a single primary section that holds HTML. 

{% endsection %}

The HTML section in turn can contain anything that a browser can render. 
In addition to the basic browser environment, there is a library of JavaScript 
hooks available to provide access to various functions.

The content that is embedded in the HTML section is typically a mix of JavaScript,
HTML, Flex, and Relevance expressions that are evaluated with the JavaScript
function **EvaluateRelevance**. As soon as they are received, the results of the
evaluation are embedded directly into the page and it is redrawn.

![WEB reports graphics](/static/img/webreports_graphic.png)

Web Reports markup is passed through a pre-processor that recognizes Relevance
tags. The Relevance language uses a special class of inspectors called [Datastore Inspectors](../../relevance/guide/session/datastoreinspectors.html) 
that can help you query and aggregate statistics on your data. These
Relevance expressions are evaluated and the tag is then replaced by those results.
You can also use JavaScript to evaluate Relevance and for other document object
model manipulations.

