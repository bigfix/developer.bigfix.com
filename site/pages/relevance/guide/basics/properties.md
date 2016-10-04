---
title: Properties
---

All objects have properties and those properties can be inspected and referenced. An example of a property of an object might be its size or length. There are thousands of property inspectors available to cover the majority of software and hardware features of Windows, Mac, and UNIX systems.

These are different ways that you can use to list the properties of an object you can query using an inspector:
- Click [Inspector Search](../../evaluate/), type the name of the inspector that you want to search and then the magnifying lens. In the list that you get, click the link to the inspector.
- Click [Reference](../../reference/), navigate the area of interest that the inspector belongs to and then click the inspector name. 
- Query the inspector, for example "string", from the [Fixlet Debugger](../../..tools/fixlet_debugger.html) or the [QnA tool](../../..tools/qna.html) using an *introspector* called "properties of type". This page explains how to use this introspector.

{% qna %}
Q: properties of type "string"
A: sets of <string>: string set
A: length of <string>: integer
A: concatenations of <string>: string
A: ....
{% endqna %}

A string has over 150 properties that you can query!

You can query its length:

{% qna %}
Q: length of string "test"
A: 4
{% endqna %}

... and you can hash the string:

{% qna %}
Q: SHA256 of string "test"
A: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
{% endqna %}

You can query the properties of date objects like the day of the week:

{% qna %}
Q: day_of_week of current date
A: Tuesday
{% endqna %}

... and you can get the current year:

{% qna %}
Q: year of current date
A: 2015
{% endqna %}

You can query the number of processors our system has:

{% qna %}
Q: number of processors
A: 2
{% endqna %}

And you can query their speed:

{% qna %}
Q: speeds of processors
A: 3093000000 hertz
{% endqna %}

You can also query aspects of the local system

{% qna %}
Q: names of local groups
A: Administrators
A: Backup Operators
A: Guests
{% endqna %}

Watch the video about the [Property of an Object](https://www.youtube.com/watch?v=Qv_1MHQQpno&index=4&list=PLiD3_RDV00JfbODj7IAXC0jfP7BKSj6Yr) to have more information about this clause.