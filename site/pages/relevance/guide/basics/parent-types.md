---
title: Parent Types
---

# Parent Types

Objects can have a parent object.  The child object inherits the [properties](./properties.html) of its parent. This is very useful because it gives us access to a lot more inspectors.  For example, the parent of {{'file line' | linkType}} is {{'string' | linkType}}.  So we can make use of all the {{'string' | linkType}} inspectors with a {{'file line' | linkType}} object.

In this example we use the [substring separated by](/relevance/reference/string.html#substring-separated-by-string-of-string-substring) inspector of the {{'string' | linkType}} object on a {{'file line' | linkType}} object:

{% qna %}
Q: substrings separated by "," of lines of file "c:\temp\file.txt"
A: Hello
A: world.
{% endqna %}

The inherited properties are not listed in the usual documentation nor are they returned by the `properties of type` introspector.  These are the properties of the {{'file line' | linkType }}, as you can see there's no `substrings separated by`:

{% qna %}
Q: properties of type "file line"
A: line number of <file line>: integer
A: previous line of <file line>: file line
A: next line of <file line>: file line
{% endqna %}

We can view the parent of an object using an introspector called `parent of type`:

{% qna %}
Q: parent of type "file line"
A: string
{% endqna %}

We can see the inherited properties by introspecting the parent:

{% qna %}
Q: properties of parent of type "file line"
A: concatenations <html> of <string>: html
A: html tag <string> of <string>: html
A: html of <string>: html
A: ...
{% endqna %}

Finally, We can use use the `parent of type` introspector to find all the objects that have a parent:

{% qna %}
Q: types whose (exists parent of it)
A: application
A: client
A: ...
{% endqna %}
