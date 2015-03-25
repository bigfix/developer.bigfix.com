# type: floating point

The `floating point` type holds a floating-point number, with precision dependent on the computer. It also keeps track of the IEEE floating-point exceptions raised in a calculation and an estimate of the significance with which the number should be expressed when it is converted to a string.

All arithmetic operations are carried out to the full precision of the computer; only conversions to string are affected by the estimated significance.

# divided by zero of &lt;floating point&gt; : boolean

Returns `True` if the calculation raised the divide-by-zero exception; that is, if some part of the calculation produced an exact infinity.

# extrema of &lt;floating point&gt; : ( floating point, floating point )

Returns the minimum and maximum extreme values of the list of numbers.

{{#example}}
Q: extrema of floating points ("3.1415926"; "-1.06"; "2.7")
A: -1.06, 3.1415926
{{/example}}

# finite of &lt;floating point&gt; : boolean

Returns `True` if the floating point number is finite.

{{#example}}
Q: (it, finite of it) of (floating point "1" / 2)
A: 0.5, True
{{/example}}

{{#example}}
Q: (it, finite of it) of (floating point "1" / 0)
A: +infinity, False
{{/example}}

# floating point &lt;floating point&gt; : floating point

Creates a floating point type object from the specified floating point number.

{{#example}}
Q: floating point "3.14159265358"
A: 3.14159265358
{{/example}}

# inexact of &lt;floating point&gt; : boolean

Returns `True` if the calculation raised the inexact exception; that is, if some intermediate result could not be represented exactly.

# infinite of &lt;floating point&gt; : boolean

Returns `True` if the floating point number is infinite.Example: infinite of (floating point "1"/ 0) - Returns `True`.

# integer ceiling of &lt;floating point&gt; : integer

Returns the smallest integer not less than the floating point number.

{{#example}}
Q: integer ceiling of floating point "3.14159265358"
A: 4
{{/example}}

{{#example}}
Q: integer ceiling of floating point "-3.14159265358"
A: -3
{{/example}}

# integer floor of &lt;floating point&gt; : integer

Returns the largest integer less than or equal to the floating point number.

{{#example}}
Q: integer floor of floating point "3.14159265358"
A: 3
{{/example}}

{{#example}}
Q: integer floor of floating point "-3.14159265358"
A: -4
{{/example}}

# invalid of &lt;floating point&gt; : boolean

Returns `True` if the calculation raised the invalid exception; that is, if some part of the calculation a function was applied to a value outside its domain.

# less significance &lt;integer&gt; of &lt;floating point&gt; : floating point

Removes &lt;integer&lt; number of digits of significance from the floating point value.

# maximum of &lt;floating point&gt; : floating point

Returns the maximum value from a list of &lt;floating point&lt; types.

# mean of &lt;floating point&gt; : floating point

The mean of the floating point number(s).

# minimum of &lt;floating point&gt; : floating point

Returns the minimum value from a list of &lt;floating point&lt; types.

# more significance &lt;integer&gt; of &lt;floating point&gt; : floating point

Adds &lt;integer&lt; number of digits of significance to the floating point value.

# nan of &lt;floating point&gt; : boolean

Returns `True` if the value is not a number.Example: nan of (floating point "1.e-99999" * floating point "1.e999999") - Returns `True`.

# normal of &lt;floating point&gt; : boolean

Returns `True` if the value is a valid floating point number.

# overflow of &lt;floating point&gt; : boolean

Returns `True` if the calculation raised the overflow exception; that is, if some intermediate result was too large to be represented, but not an exact infinity.Example: overflow of (floating point "1.0e50000") - Returns `True`, since the number is too big to represent in floating point.

# product of &lt;floating point&gt; : floating point

Multiplies a list of floating point numbers, returning a floating point product.

# relative significance place &lt;integer&gt; of &lt;floating point&gt; : floating point

The same floating point value, to be expressed to the given number of significant digits.

# relative significance place of &lt;floating point&gt; : floating point

The base 10 logarithm of the quotient of the value and its significance place; approximately the number of significant digits to which the number should be expressed.

# significance place &lt;integer&gt; of &lt;floating point&gt; : floating point

The same floating point value, to be expressed to the given decimal place.

# significance place of &lt;floating point&gt; : floating point

The base 10 logarithm of the significance threshold; approximately the number of digits to the left (positive) or right (negative) of the ones place to which the number should be expressed.

# significance threshold of &lt;floating point&gt; : floating point

The difference between the given value and the next number expressed to the same significance level. For example, the significance threshold of 3 is 1, the significance threshold of 3.0 is 0.1, and the significance threshold of 3000 is 1000.

# sqrt of &lt;floating point&gt; : floating point

No documentation exists.

# standard deviation of &lt;floating point&gt; : floating point

The standard deviation of the floating point number(s).

# sum of &lt;floating point&gt; : floating point

Returns the sum of a list of floating point numbers.

# underflow of &lt;floating point&gt; : boolean

Returns `True` if the calculation raised the underflow exception; that is, if some intermediate result was a nonzero value too small to be represented.

# unique value of &lt;floating point&gt; : floating point with multiplicity

Returns the unique values of a given list of &lt;floating point&lt; types, removing duplicates and sorting by value.

# &lt;floating point&gt; as floating point : floating point

This casting operator is added for completeness. It takes a floating point number and casts it as a floating point number. It facilitates automatic relevance generation where the software is not aware of the input types.

# &lt;floating point&gt; as integer : integer

Rounds off and casts a floating point number as an integer.Example: 15/2 as integer - Returns 7.

# &lt;floating point&gt; as scientific notation : string

Converts a floating point number into a string with scientific notation.

# &lt;floating point&gt; as standard notation : string

Converts a floating point number into a string with standard notation.

# &lt;floating point&gt; as string : string

Converts a floating point number into a string with standard notation.

# &lt;floating point&gt; &lt; &lt;floating point&gt; : boolean

No documentation exists.

# &lt;floating point&gt; &lt;= &lt;floating point&gt; : boolean

No documentation exists.

# &lt;floating point&gt; * &lt;floating point&gt; : floating point

No documentation exists.

# &lt;floating point&gt; + &lt;floating point&gt; : floating point

No documentation exists.

# &lt;floating point&gt; - &lt;floating point&gt; : floating point

No documentation exists.

# &lt;floating point&gt; / &lt;floating point&gt; : floating point

No documentation exists.

# &lt;floating point&gt; = &lt;floating point&gt; : boolean

No documentation exists.

# - &lt;floating point&gt; : floating point

Change the sign of a floating point number.
