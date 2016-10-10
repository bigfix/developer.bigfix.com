---
title: Relevance in dashboards
---

{% section %}

Dashboard markup is passed through a pre-processor that recognizes Relevance
tags. These Relevance expressions are evaluated and the tag is then replaced by
those results. The results are then wrapped in a special ```<span>``` tag so they can be
reevaluated and updated as they change, creating a dynamic document. You can
also use JavaScript to evaluate Relevance and for other document object model
manipulations.

{% endsection %}
{% section %}

You can evaluate relevance in dashboards in two ways, both of which are
compatible with wizards and Web Reports.

- The first technique is to use the ```<?relevance expression ?>``` tag. This method is used
when you want to create sections of properly formatted HTML containing
Relevance results. These instructions are parsed at load time and replaced by the
result of evaluating the given expression. The result is coerced into the html
inspector type that means that the string is escaped, ensuring that it does not
interfere with any surrounding HTML code. The html type is described in greater
detail later in this guide.

- The second technique works when you must evaluate relevance from within
JavaScript. In this case, use the **EvaluateRelevance** function. This function is
defined in an external JavaScript source file that is automatically included by
console documents that support dashboard functions, including Fixlets, tasks,
baselines, analyses, wizard documents, and Web Reports. In Web Reports, the
external definition is somewhat different, but it works the same way.

{% endsection %}
{% section %}

From any script code, you can evaluate a relevance expression and get the results
back as a string, with a statement like this:
```
myDiv.innerText = EvaluateRelevance( "expression" );
```
The expression is a relevance expression string just like in the ```<?relevance ?>``` case.

![Dashboard graphics](/static/img/dashboard_graphic.png)

The result of **EvaluateRelevance** depends on whether the expression is a singular
expression or a plural expression. 

If the expression is singular, the result is a string.

If it is plural, the result is an array of strings. 

Unlike the results of relevance in processing instructions, none of the strings are HTML 
escaped unless you use the ```"as html"``` cast explicitly. 

{% endsection %}

If an error is encountered, **EvaluateRelevance** throws an exception. 
You can get a descriptive error string as follows:
```
try {
myDiv.innerText = EvaluateRelevance( "expression" );
}
catch (e){
window.alert( "Error encountered evaluating relevance: " + e.description );
}
```
