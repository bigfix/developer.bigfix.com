# type: year

The `year` type represents a calendar year.

# extrema of &lt;year&gt; : ( year, year )

Returns the minimum and maximum extreme values of the given list of &lt;year&gt; types.

# leap of &lt;year&gt; : boolean

Returns `True` if the year was a leap year.

{{#example}}
Q: leap of year 1984
A: True
{{/example}}

# length of &lt;year&gt; : time interval

Returns the number of days in the year.

{{#example}}
Q: length of year 1984
A: 366 days
{{/example}}

# maximum of &lt;year&gt; : year

Returns the maximum value from a list of &lt;year&gt; types.

# minimum of &lt;year&gt; : year

Returns the minimum value from a list of &lt;year&gt; types.

# unique value of &lt;year&gt; : year with multiplicity

Returns the unique values of a given list of &lt;year&gt; types, removing duplicates and sorting by value.

# &lt;year&gt; as integer : integer

Casts a year as an integer.

# &lt;year&gt; as string : string

Casts a year as a string.

# &lt;year&gt; &lt; &lt;year&gt; : boolean

No documentation exists.

# &lt;year&gt; &lt;= &lt;year&gt; : boolean

No documentation exists.

# &lt;year&gt; - &lt;year&gt; : number of months

Returns the difference between the two years.

{{#example}}
Q: year 2015 - year 1984
A: 31 years
{{/example}}

# &lt;year&gt; = &lt;year&gt; : boolean

No documentation exists.
