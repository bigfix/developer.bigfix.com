---
title: Dashboard API content structure
---

{% section %}

The Dashboard API is based on HTML and XML.

The XML defines hooks into the console or Web Reports and it has a single primary section that holds HTML. 

{% endsection %}

The HTML section in turn can contain anything that a browser can render. 
In addition to the basic browser environment, there is a library of JavaScript 
hooks available to provide access to various functions.

The content that is embedded in the HTML section is typically a mix of JavaScript-Dojo-jQuery
or Adobe Flex, and Relevance expressions that are evaluated with the JavaScript
function **EvaluateRelevance** or with the ```<?relevance expression ?>``` tag. As soon as they are received, the results of the
evaluation are embedded directly into the page and it is redrawn. For more information, access [Relevance in dashboards](./relevance_in_dashboards.html).

The document can also specify how your dashboard is attached to the console UI,
for example as a menu, a list, or an item on the navigation bar. Dashboard
documents can also be linked to or from other documents. They can be imported
or exported and used by internal or external Fixlet sites.

