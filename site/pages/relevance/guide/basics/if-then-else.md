---
title: If...Then...Else
---

If-then-else clauses have the form:

````
if <conditional-expression> then <expression1> else <expression2>
````

Both `<expression1>` and `<expression2>` must have the same type, and
`<conditional-expression>` must be a singular Boolean.

If `<conditional-expression>` is true, then `<expression1>` is evaluated and
returned; otherwise `<expression2>` is evaluated and returned.

If-then-else clauses have been implemented as late-binding, so potential missing
inspectors on the branch not taken are ignored. This makes it safe to write
cross-platform expressions without worrying about causing errors for incorrect
OS-specific Inspectors. For example, you can write:

{% qna %}
Q: if name of operating system contains "Win" then name of application "conf.exe" of registry else "conf.exe"
A: conf.exe
{% endqna %}

On a non-Windows OS, this expression runs the `else` expression and
avoid attempting to inspect a non-existent registry.

If-statements can be useful for reporting user-defined errors:

{% qna %}
Q: if (year of current date as integer < 2006) then "Still good" else error "Expired"
E: User-defined error: Expired
{% endqna %}

This expression throws a user-defined error if the argument is false.

{% qna %}
Q: if (name of operating system = "WinXP") then "wired" else if (name of operating system ="WinNT") then "tired" else "expired"
A: wired
{% endqna %}

This expression does a three-way test of the operating system.

Watch the video about the [If-Then-Else in Relevance Language](https://www.youtube.com/watch?v=vRoZhvShPeY) to have more information about this clause.
