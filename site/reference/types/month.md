# type: month

The &lt;month&lt; inspectors provide tools for dealing and calculating with month types, which are of the form January, February, and more. This set of inspectors includes each month as a self-named object.

# extrema of &lt;month&gt; : ( month, month )

Returns the minimum and maximum extreme values of the given list of &lt;month&lt; types.

# maximum of &lt;month&gt; : month

Returns the maximum value from a list of &lt;month&lt; types.

# minimum of &lt;month&gt; : month

Returns the minimum value from a list of &lt;month&lt; types.

# unique value of &lt;month&gt; : month with multiplicity

Returns the unique values of a given list of &lt;month&lt; types, removing duplicates and sorting by value.

# &lt;month&gt; as integer : integer

Converts the given month into an integer (1-12).

# &lt;month&gt; as string : string

Converts the given month into a string value.

# &lt;month&gt; as three letters : string

Converts the given month into a 3-letter string (Jan, Feb, etcetera.).Example: january as three letters - Returns Jan.

# &lt;month&gt; as two digits : string

Converts the month into a two digit number (01 - 12).Example: january as two digits - Returns 01.

# &lt;month&gt; &lt; &lt;month&gt; : boolean

No documentation exists.

# &lt;month&gt; &lt;= &lt;month&gt; : boolean

No documentation exists.

# &lt;month&gt; - &lt;month&gt; : number of months

Subtracts two months, returning a positive number of months. If the first month is earlier than the second, it assumes the year has rolled over.Example: december - current month - Returns the number of months left until december. If the current month is April, it returns 8 months.

# &lt;month&gt; = &lt;month&gt; : boolean

No documentation exists.
