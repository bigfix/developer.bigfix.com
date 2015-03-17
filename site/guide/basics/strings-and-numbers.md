# Strings and Numbers

The basic building blocks of the language are numbers, strings and expressions
that combine them.

{{#example}}
Q: "hello world"
A: hello world
{{/example}}

This example outputs a string of characters.

Strings aren’t the only primitives:

{{#example}}
Q: 6000
A: 6000
{{/example}}

This above example demonstrates an integer. You can also do math:

{{#example}}
Q: (8+3)*6
A: 66
{{/example}}

Primary elements include parenthetical expressions like `(8+3)` above. These
primary elements can be teased apart as well:

{{#example}}
Q: substrings separated by "-" of "an-over-hyphenated-string"
A: an
A: over
A: hyphenated
A: string
{{/example}}

Note in the example above that four values were returned, not just one. This
output is typical of a plural inspector like `substrings`. You can filter this
list with a `whose` statement:

{{#example}}
Q: (substrings separated by " " of "who observed what happened, when and where?") whose (it contains "w")
A: who
A: what
A: when
A: where?
{{/example}}

This example shows two clauses in parentheses. The first parenthetical clause
creates a list of words (substrings separated by a space). This `whose` clause
contains the primary keyword `it` (discussed in greater detail below), that can
stand in for another object – in this case, `it` stands in for each of the
individual words, and the expression returns just those words that contain the
letter 'w'. How many of these substrings are there?

{{#example}}
Q: number of (substrings separated by " " of "who observed what happened, when and where?") whose (it contains "w")
A: 4 
{{/example}}

This expression shows how you can count up the number of items returned and
filtered from a plural inspector. As these examples show, you can get either
singular or plural items back from a Relevance expression. What about no items
at all? That's a subject for the next section.

## Escaping

Literal strings like this are parsed for one special character: the percent
sign. This is an escape character that encodes for other, non-printable
characters, specifically control characters and delete. When a percent sign is
found, the encoding expects the next two characters to be hex digits producing a
one-byte hex value. That hex value is then added to the internal representation
of the string, allowing you incorporate otherwise unavailable characters into a
string. Since the percent is used as the escape key, to actually get a percent
into a string you must use `%25`, the hex value of percent. To convert back to
an escaped string for output, characters with a hex value less than `0x20`,
greater than `0x7E` or equal to `0x25` are printed as escaped characters, e.g.
`%25`.
