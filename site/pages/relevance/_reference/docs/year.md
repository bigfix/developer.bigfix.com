# type: year

The `year` type represents a calendar year.

# extrema of &lt;year&gt; : ( year, year )

Returns the minimum and maximum extreme values of the given list of `year` types.

{% qna %}
Q: extrema of years (2001; 2005; 1984; 2036; 1789)
A: 1789, 2036
{% endqna %}

# leap of &lt;year&gt; : boolean

Returns `True` if the year was a leap year.

{% qna %}
Q: leap of year 1984
A: True
{% endqna %}

# length of &lt;year&gt; : time interval

Returns the number of days in the year.

{% qna %}
Q: length of year 1984
A: 366 days
{% endqna %}

# maximum of &lt;year&gt; : year

Returns the maximum value from a list of `year` types.

{% qna %}
Q: maximum of (year 2005; year 2013)
A: 2013
{% endqna %}

# minimum of &lt;year&gt; : year

Returns the minimum value from a list of `year` types.

{% qna %}
Q: minimum of (year 2005; year 2013)
A: 2005
{% endqna %}

# unique value of &lt;year&gt; : year with multiplicity

Returns the unique values of a given list of `year` types, removing duplicates and sorting by value.

{% qna %}
Q: unique values of years (2001; 2001; 2002)
A: 2001
A: 2002
{% endqna %}

# &lt;year&gt; as integer : integer

Casts a year as an integer.

{% qna %}
Q: year 2001 as integer + 1
A: 2002
{% endqna %}

# &lt;year&gt; as string : string

Casts a year as a string.

{% qna %}
Q: year 2001 as string
A: 2001
{% endqna %}

# &lt;year&gt; &lt; &lt;year&gt; : boolean

Returns whether the first year is less than the second.

{% qna %}
Q: year 2001 < year 2002
A: True
{% endqna %}

# &lt;year&gt; &lt;= &lt;year&gt; : boolean

Returns whether the first year is less than or equal to the second.

{% qna %}
Q: year 2001 <= year 2000
A: False
{% endqna %}

# &lt;year&gt; - &lt;year&gt; : number of months

Returns the difference between the two years.

{% qna %}
Q: year 2015 - year 1984
A: 31 years
{% endqna %}

# &lt;year&gt; = &lt;year&gt; : boolean

Returns whether the two years are equal.

{% qna %}
Q: year 2001 = year 2001
A: True
{% endqna %}
