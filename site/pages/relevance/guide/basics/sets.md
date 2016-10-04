---
title: Sets
---

You can convert a list returned by a plural Inspector into a mathematical set. As
such, you can perform typical set operations such as *union* and *intersection*. 

You can create sets from individual elements, separated by semicolons `:`.

Sets cannot be directly represented in the debugger. To see the individual items in the list, use
the `elements` command:

{% qna %}
Q: elements of intersection of (set of ("to";"be"); set of ("or";"not";"to";"be"))
A: be
A: to
{% endqna %}

Sets also allow subtraction. For example, the following query returns the set composed of the elements 2, 3, and 4. Note that subtracting a
number not in the original set doesn’t affect the result. You can convert the set back to a printable list, using the `elements` command:
 command.

{% qna %}
Q: elements of (set of (1;2;3;4) – set of (1;5))
A: 2
A: 3
A: 4
{% endqna %}

The `elements` keyword iterates over the set object, returning the individual set
`elements` as an ordinary list.


