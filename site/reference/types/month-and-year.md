# type: month and year

The &amp;lt;month and year&amp;gt; inspectors provide tools for dealing and calculating with month-and-year types, which are of the form month of year, eg., January of 2007.

# extrema of &lt;month and year&gt; : ( month and year, month and year )

Returns the minimum and maximum extreme values of the given list of &amp;lt;month and year&amp;gt; types.

# first &lt;day of week&gt; of &lt;month and year&gt; : date

Finds the specific date corresponding to the first day of the week (eg. Friday) for a given month and year.

{{#example}}
Q: first (monday) of april of 2020
A: Mon, 06 Apr 2020
{{/example}}

# first friday of &lt;month and year&gt; : date

Finds the date corresponding to the first Friday of any given month and year.

{{#example}}
Q: first friday of april of 2020
A: Fri, 03 Apr 2020
{{/example}}

# first monday of &lt;month and year&gt; : date

Finds the date corresponding to the first Monday of any given month and year.

# first saturday of &lt;month and year&gt; : date

Finds the date corresponding to the first Saturday of any given month and year.

# first sunday of &lt;month and year&gt; : date

Finds the date corresponding to the first Sunday of any given month and year.

# first thursday of &lt;month and year&gt; : date

Finds the date corresponding to the first Thursday of any given month and year.

# first tuesday of &lt;month and year&gt; : date

Finds the date corresponding to the first Tuesday of any given month and year.

# first wednesday of &lt;month and year&gt; : date

Finds the date corresponding to the first Wednesday of any given month and year.

# length of &lt;month and year&gt; : time interval

Returns the number of days in the specified month.

{{#example}}
Q: length of (month &quot;February&quot; &amp; year &quot;2004&quot;)
A: 29 days
{{/example}}

# maximum of &lt;month and year&gt; : month and year

Returns the maximum value from a list of &amp;lt;month and year&amp;gt; types.

# minimum of &lt;month and year&gt; : month and year

Returns the minimum value from a list of &amp;lt;month and year&amp;gt; types.

# month of &lt;month and year&gt; : month

Returns the name of the month corresponding to the given date.Example: month of date &amp;quot;Sun, 02 Apr 2006&amp;quot; + 2*month - Returns June.

# unique value of &lt;month and year&gt; : month and year with multiplicity

Returns the unique values of a given list of &amp;lt;month and year&amp;gt; types, removing duplicates and sorting by value.

# year of &lt;month and year&gt; : year

Returns the year portion of the specified date (in month year format).

# &lt;month and year&gt; as string : string

Casts a date (in month year format) as a string.

# &lt;month and year&gt; &lt; &lt;month and year&gt; : boolean

No documentation exists.

# &lt;month and year&gt; &lt;= &lt;month and year&gt; : boolean

No documentation exists.

# &lt;month and year&gt; - &lt;month and year&gt; : number of months

Subtracts two dates (in month year format), returning a number of months.

{{#example}}
Q: January of 2020 - current month_and_year
A: 4 years, 10 months
{{/example}}

# &lt;month and year&gt; = &lt;month and year&gt; : boolean

No documentation exists.
