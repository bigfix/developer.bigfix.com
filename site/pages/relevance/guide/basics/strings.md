---
title: Strings
---
our
The basic building blocks of the relevance language are numbers, strings, and the expressions
that combine them.

The "Q:" is the relevance query that is being run and the "A:" is the answer to your query. Queries can be complex and answers to a queries can be of any type, but more on that soon!

Strings are sets of characters (a-z,0-9,!@#$) that are surrounded by quotes. The output of the following query is the string "hello world"
{% qna %}
Q: "hello world"
A: hello world
{% endqna %}


## String Operations
{% qna %}
Q: substrings separated by "-" of "an-over-hyphenated-string"
A: an
A: over
A: hyphenated
A: string
{% endqna %}

Note in the example above that four values were returned, not just one. This
output is typical of a plural inspector like `substrings`. You can filter this
list with a `whose` statement:

{% qna %}
Q: (substrings separated by " " of "who observed what happened, when and where?") whose (it contains "w")
A: who
A: what
A: when
A: where?
{% endqna %}

This example shows two clauses in parentheses. The first parenthetical clause
creates a list of words (substrings separated by a space). This `whose` clause
contains the primary keyword `it` (described in greater detail below), that can
stand in for another object – in this case, `it` stands in for each of the
individual words, and the expression returns just those words that contain the
letter 'w'. How many of these substrings are there?

{% qna %}
Q: number of (substrings separated by " " of "who observed what happened, when and where?") whose (it contains "w")
A: 4 
{% endqna %}

This expression shows how you can count the number of items returned and
filtered from a plural inspector. As these examples show, you can get either
singular or plural items back from a Relevance expression. What about no items
at all? That's a subject for the next section.

## Escaping

Literal strings like this are parsed for one special character: the percent
sign. This is an escape character that encodes for other, non-printable
characters, specifically control characters and delete. When a percent sign is
found, the encoding expects the next two characters to be hex digits producing a
one-byte hex value. This hex value is then added to the internal representation
of the string, allowing you incorporate otherwise unavailable characters into a
string. Because the percent is used as the escape key, to actually get a percent
into a string you must use `%25`, the hex value for percent. To convert back to
an escaped string for output, characters with a hex value less than `0x20`,
greater than `0x7E`, or equal to `0x25` are printed as escaped characters, for example 
`%25`.
