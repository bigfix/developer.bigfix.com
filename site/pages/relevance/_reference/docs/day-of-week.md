# type: day of week

The `day of week` inspectors provide tools for handling day-of-week types, which include Monday, Tuesday, etc.

# unique value of &lt;day of week&gt; : day of week with multiplicity

Returns the unique values of a given list of `day of week` objects, removing duplicates and sorting by value.

{% qna %}
Q: unique values of (monday; wednesday; friday; wednesday)
A: Monday
A: Wednesday
A: Friday
{% endqna %}

# &lt;day of week&gt; as string : string

Casts the day of week as a string.

{% qna %}
Q: monday as string
A: Monday
{% endqna %}

# &lt;day of week&gt; as three letters : string

Casts the day of week as a three-letter abbreviation (Mon, Tue, etc.).

{% qna %}
Q: monday as three letters
A: Mon
{% endqna %}

# &lt;day of week&gt; - &lt;day of week&gt; : time interval

Subtract two day of week types (Monday, Tuesday, etc.) to produce a time interval. The answer cannot exceed 6 days.

{% qna %}
Q: friday - monday
A: 4 days
{% endqna %}

# &lt;day of week&gt; = &lt;day of week&gt; : boolean

Compares two days of the week and returns a boolean `True` or `False`.

{% qna %}
Q: monday = tuesday
A: False
{% endqna %}
