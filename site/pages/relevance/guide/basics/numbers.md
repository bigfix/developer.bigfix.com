---
title: Arithmetic Operations
---

Integers are numbers (0-9) without a decimal place. Integers are not wrapped in quotes. You can write a relevance query whose answer is a number
{% qna %}
Q: 6000
A: 6000
{% endqna %}

## Simple Operators
The normal operators you'd expect to be able to use with numbers work in the Relevance Language. These are a few samples:

{% qna %}
Q: (8+3)*6
A: 66
{% endqna %}

Operations are run in sequence from left to right, ensure you use parentheses to group operations that must be run before others.

Pay attention to not mix strings and integers, for example:

{% qna %}
Q: ("8" + "3") * 6
E: The operator "plus" is not defined.
{% endqna %}

This happens because "8" and "3" are strings and the **+** symbol is not a valid operator for strings.
To *add strings* or *create time ranges*, use the [Concatenation](./concatenations.html) and the *&* symbol. 

{% qna %}
Q: "8" & "3"
A: 83
{% endqna %}

You can ue arithmetic operators also with data types, for example:

{% qna %}
Q: 36*month/2
A: 1 year, 6 months
{% endqna %}

{% qna %}
Q: december - current month
A: 3 months
{% endqna %}
