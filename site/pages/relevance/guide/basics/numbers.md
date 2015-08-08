---
title: Numbers
---

# Numbers

Integers are numbers (0-9) without a decimal place. Integers are not wrapped in quotes. We can write a relevance query whose answer is a number
{% qna %}
Q: 6000
A: 6000
{% endqna %}

## Simple Operators
The normal operators you'd expect to be able to use with numbers work in the Relevance Language. Addition and multiplication are valid operations for integers so this works.

{% qna %}
Q: (8+3)*6
A: 66
{% endqna %}

However, plus and times are not valid operations for strings so this does not work.

The other thing we will notice right away is that you can't mix strings and integers:
{% qna %}
Q: ("8" + "3") * 6
E: The operator "times" is not defined.
{% endqna %}

Besides, how would you multiply two strings together anyway?! You might be asking, why can't I add strings together?

{% qna %}
Q: "8" + "3"
E: The operator "plus" is not defined.
{% endqna %}

The answer is that combining strings is not called, "adding", it's "concatenating" and the operator is, "&"
{% qna %}
Q: "8" & "3"
A: 83
{% endqna %}
