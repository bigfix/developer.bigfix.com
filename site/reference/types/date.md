# type: date

The `date` objects are the various inspectors that access the date types.

# day_of_month of &lt;date&gt; : day of month

Returns the day of the month from the specified date.

{{#example}}
Q: day_of_month of current date
A: 21
{{/example}}

# day_of_week of &lt;date&gt; : day of week

Returns the day of the week from the specified date.

{{#example}}
Q: day_of_week of current date
A: Saturday
{{/example}}

# day_of_year of &lt;date&gt; : day of year

Returns the day of year from the specified date.

{{#example}}
Q: day_of_year of current date
A: March 21
{{/example}}

# extrema of &lt;date&gt; : ( date, date )

Returns the minimum and maximum values of the list of dates.

{{#example}}
Q: extrema of (march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: ( Tue, 27 Jan 1970 ), ( Mon, 18 Aug 2042 )
{{/example}}

# maximum of &lt;date&gt; : date

Returns the maximum value from a list of dates.

{{#example}}
Q: maximum of (march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: Mon, 18 Aug 2042
{{/example}}

# minimum of &lt;date&gt; : date

Returns the minimum value from a list of dates.

{{#example}}
Q: minimum of (march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: Tue, 27 Jan 1970
{{/example}}

# month of &lt;date&gt; : month

Returns the month derived from the given date.

{{#example}}
Q: month of current date
A: March
{{/example}}

# month_and_year of &lt;date&gt; : month and year

Returns the month and year from the specified date.

{{#example}}
Q: month_and_year of current date
A: March 2015
{{/example}}

# unique value of &lt;date&gt; : date with multiplicity

Returns the unique values and counts of a list of dates, removing duplicates and sorting by value.

{{#example}}
Q: unique values of (march 11 of 1984; march 11 of 1984; january 27 of 1970; august 18 of 2042)
A: Tue, 27 Jan 1970
A: Sun, 11 Mar 1984
A: Mon, 18 Aug 2042
{{/example}}

# year of &lt;date&gt; : year

Returns the year from the given date.

{{#example}}
Q: year of current date
A: 2015
{{/example}}

# &lt;date&gt; as string : string

Cast a date type as a string.

{{#example}}
Q: current date as string
A: Sat, 21 Mar 2015
{{/example}}

# &lt;date&gt; &lt; &lt;date&gt; : boolean

Compare the two dates.

{{#example}}
Q: current date &lt; january 21 of 2042
A: True
{{/example}}

# &lt;date&gt; &lt;= &lt;date&gt; : boolean

Compare the two dates.

{{#example}}
Q: current date &gt;= march 21 of 1984
A: True
{{/example}}

# &lt;date&gt; - &lt;date&gt; : time interval

Subtracts two dates to produce a time interval.

{{#example}}
Q: current date - march 11 of 1984
A: 11332 days
{{/example}}

# &lt;date&gt; = &lt;date&gt; : boolean

Compare the two dates.

{{#example}}
Q: current date = march 21 of 2015
A: True
{{/example}}
