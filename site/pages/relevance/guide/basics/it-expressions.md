---
title: It
---

There are two contexts in which `it` has a meaning:

1. `<expression> whose (it)`
2. `(it) of <expression>`

An example of the second context is this expression, which lists the names and
file sizes of a specified folder:

{% qna %}
Q: (name of it, size of it) of files of folder "c:"
A: AUTOEXEC.BAT, 0
A: blacklist.txt, 42
A: boot.ini, 209
A: CONFIG.SYS, 0
A: whitelist.txt, 213
{% endqna %}

Here, `it` refers to `files of folder "c:"`.

The `whose` clause lets you filter a list based on the evaluation of an `it`
expression. This is one of the most important targets of the `it` keyword:

{% qna %}
Q: exist files whose (name of it starts with "b") of folder "c:"
A: True
{% endqna %}

{% qna %}
Q: number of (files whose (name of it starts with "b") of folder "c:")
A: 2
{% endqna %}

In these expressions, `it` still refers to `files of folder "c:"`.

You must be careful about the placement of parentheses, which can change the
target of the `it` keyword. In the following expression, `it` refers to `files`:

{% qna %}
Q: (files of folder "c:") whose (name of it contains "a")
A: "atl70.dll" "7.0.9466.0" "ATL Module for Windows (Unicode)" "7.00.9466.0" "Microsoft Corporation"
A: "blacklist.txt" "" "" "" ""
...
{% endqna %}

Note that this is not the same as the following expressions, which both have the
wrong placement of parentheses:

{% qna %}
Q: files of folder "c:" whose (name of it contains "a")
E: Singular expression refers to nonexistent object.
{% endqna %}

{% qna %}
Q: files of (folder "c:" whose (name of it contains "a"))
E: Singular expression refers to nonexistent object.
{% endqna %}

These are two equivalent (and wrong) statements where the `it` refers to the
closest object, which is the folder, not the files.

There can be more than one `it` in an expression. The rule is that each one
refers to the object listed to the left of the associated `whose`. For
example:

{% qna %}
Q: preceding texts whose (it contains "n") of characters whose (it is "a") of "banana"
A: ban
A: banan
{% endqna %}

Here the expression returns the substrings preceding 'a' that contain 'n'. The
first `it` refers to the substrings; the second refers to the characters. This
simple and intuitive rule makes it easy to develop complex expressions. Here's
another example:

{% qna %}
Q: (characters of "banana") whose (exists character whose (it is "n") of preceding text of it)
A: a
A: n
A: a
{% endqna %}

This expression illustrates two nested whose-it clauses. The inner one finds
leading substrings that contain an 'n'. The outer one returns the characters
following those substrings. 

Because `it` represents a value, you can operate on it like any other variable:

{% qna %}
Q: (it * it) of (1;2;3;4)
A: 1
A: 4
A: 9
A: 16
{% endqna %}

You can nest these references:

{% qna %}
Q: (it * it) whose (it > 8) of (1;2;3;4)
A: 9
A: 16
{% endqna %}

Here, the first instances of `it` are multiplied and passed on to the third
instance of `it` for comparison.

The `it` keyword never stands for an expression, but rather for a single value.
Often it stands, in turn, for the serial values of a plural expression. But it
can only stand for one value at a time.

Watch the video about the [It-without-Whose construct](https://www.youtube.com/watch?v=yz0V4Si849E&list=PLiD3_RDV00JfbODj7IAXC0jfP7BKSj6Yr&index=5) to have more information about this clause.