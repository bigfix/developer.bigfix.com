---
title: Properties
---

All objects have properties and those properties can be inspected and referenced. An example of a property of an object might be its size or length. There are thousands of property inspectors available to cover the majority of software and hardware features of Windows, Mac, and Unix systems.

We can view all of the properties of an object using an introspector called "properties of type"

{% qna %}
Q: properties of type "string"
A: sets of <string>: string set
A: length of <string>: integer
A: concatenations of <string>: string
A: ....
{% endqna %}

A string has over 150 properties that we can query!

We can query its length:

{% qna %}
Q: length of string "test"
A: 4
{% endqna %}

... and we can hash the string:

{% qna %}
Q: SHA256 of string "test"
A: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
{% endqna %}

We can query the properties of date objects like the day of the week:

{% qna %}
Q: day_of_week of current date
A: Tuesday
{% endqna %}

... and we can get the current year:

{% qna %}
Q: year of current date
A: 2015
{% endqna %}

We can query the number of processors our system has:

{% qna %}
Q: number of processors
A: 2
{% endqna %}

And we can query their speed:

{% qna %}
Q: speeds of processors
A: 3093000000 hertz
{% endqna %}

We can also query aspects of the local system

{% qna %}
Q: names of local groups
A: Administrators
A: Backup Operators
A: Guests
{% endqna %}
