---
title: Casts
---

Values can be converted into other types, making it easy to create, concatenate
and combine inspectors into complex expressions.

{% example %}
Q: "01 Apr 2020" as date
A: Wed, 01 Apr 2020
{% endexample %}

Converts (casts) a string into a date type.

{% example %}
Q: 5 as month
A: May
{% endexample %}

Converts an integer into the corresponding month type.

{% example %}
Q: january as three letters
A: Jan
{% endexample %}

Converts the month January into a three-letter abbreviation.

The Relevance Debugger casts values to strings in order to print them. If an
object does not result in a string, the debugger uses the `as string` method of
the object to turn it into a string. If the object can’t be cast as a string, an
error message is displayed.
