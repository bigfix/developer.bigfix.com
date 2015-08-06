# type: date

The `date` objects are the various inspectors that access the date types.

# day_of_month of &lt;date&gt; : day of month

Returns the day of the month from the specified date.

{% qna %}
Q: day_of_month of current date
A: 21
{% endqna %}

# day_of_week of &lt;date&gt; : day of week

Returns the day of the week from the specified date.

{% qna %}
Q: day_of_week of current date
A: Saturday
{% endqna %}

# day_of_year of &lt;date&gt; : day of year

Returns the day of year from the specified date.

{% qna %}
Q: day_of_year of current date
A: March 21
{% endqna %}

# extrema of &lt;date&gt; : ( date, date )

Returns the minimum and maximum values of the list of dates.

{% qna %}
Q: extrema of (march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: ( Tue, 27 Jan 1970 ), ( Mon, 18 Aug 2042 )
{% endqna %}

# maximum of &lt;date&gt; : date

Returns the maximum value from a list of dates.

{% qna %}
Q: maximum of (march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: Mon, 18 Aug 2042
{% endqna %}

# minimum of &lt;date&gt; : date

Returns the minimum value from a list of dates.

{% qna %}
Q: minimum of (march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: Tue, 27 Jan 1970
{% endqna %}

# month of &lt;date&gt; : month

Returns the month derived from the given date.

{% qna %}
Q: month of current date
A: March
{% endqna %}

# month_and_year of &lt;date&gt; : month and year

Returns the month and year from the specified date.

{% qna %}
Q: month_and_year of current date
A: March 2015
{% endqna %}

# unique value of &lt;date&gt; : date with multiplicity

Returns the unique values and counts of a list of dates, removing duplicates and sorting by value.

{% qna %}
Q: unique values of (march 11 of 1984; march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: Tue, 27 Jan 1970
A: Sun, 11 Mar 1984
A: Mon, 18 Aug 2042
{% endqna %}

# year of &lt;date&gt; : year

Returns the year from the given date.

{% qna %}
Q: year of current date
A: 2015
{% endqna %}

# &lt;date&gt; as string : string

Cast a date type as a string.

{% qna %}
Q: current date as string
A: Sat, 21 Mar 2015
{% endqna %}

# &lt;date&gt; &lt; &lt;date&gt; : boolean

Compare the two dates.

{% qna %}
Q: current date &lt; january 21 of 2042
A: True
{% endqna %}

# &lt;date&gt; &lt;= &lt;date&gt; : boolean

Compare the two dates.

{% qna %}
Q: current date &gt;= march 21 of 1984
A: True
{% endqna %}

# &lt;date&gt; - &lt;date&gt; : time interval

Subtracts two dates to produce a time interval.

{% qna %}
Q: current date - march 11 of 1984
A: 11332 days
{% endqna %}

# &lt;date&gt; = &lt;date&gt; : boolean

Compare the two dates.

{% qna %}
Q: current date = march 21 of 2015
A: True
{% endqna %}
