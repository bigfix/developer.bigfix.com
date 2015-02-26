# type: floating point

The &lt;floating point&gt; type holds a floating-point number, with precision dependent on the computer. It also keeps track of the IEEE floating-point exceptions raised in a calculation and an estimate of the significance with which the number should be expressed when it is converted to a string. All arithmetic operations are carried out to the full precision of the computer; only conversions to string are affected by the estimated significance.

# divided by zero of &lt;floating point&gt;

Returns `True` if the calculation raised the divide-by-zero exception; that is, if some part of the calculation produced an exact infinity.

# extrema of &lt;floating point&gt;

Returns the minimum and maximum extreme values of the given list of &lt;floating point&gt; types.

# finite of &lt;floating point&gt;

Returns `True` if the floating point number is finite.Example: finite of (floating point &quot;1&quot;/ 0) - Returns `False`.

# floating point &lt;floating point&gt;

Creates a floating point type object from the specified floating point number.

# inexact of &lt;floating point&gt;

Returns `True` if the calculation raised the inexact exception; that is, if some intermediate result could not be represented exactly.

# infinite of &lt;floating point&gt;

Returns `True` if the floating point number is infinite.Example: infinite of (floating point &quot;1&quot;/ 0) - Returns `True`.

# integer ceiling of &lt;floating point&gt;

Returns the smallest integer not less than the floating point number. For example, ceiling of 2.1 = 3, ceiling of 2 = 2 and ceiling of -2.3 = -2.Example: integer ceiling of (15/8 as floating point) - Returns 2.

# integer floor of &lt;floating point&gt;

Returns the largest integer less than or equal to the floating point number. For example, floor of 2.8 = 2, floor of -2 = -2 and floor of -2.1 = -3. For nonnegative x, this is the same as the integer part of x.Example:  integer floor of (&quot;-2.1&quot; as floating point) - Returns -3.

# invalid of &lt;floating point&gt;

Returns `True` if the calculation raised the invalid exception; that is, if some part of the calculation a function was applied to a value outside its domain.

# less significance &lt;integer&gt; of &lt;floating point&gt;

Removes &lt;integer&gt; number of digits of significance from the floating point value.

# maximum of &lt;floating point&gt;

Returns the maximum value from a list of &lt;floating point&gt; types.

# mean of &lt;floating point&gt;

The mean of the floating point number(s).

# minimum of &lt;floating point&gt;

Returns the minimum value from a list of &lt;floating point&gt; types.

# more significance &lt;integer&gt; of &lt;floating point&gt;

Adds &lt;integer&gt; number of digits of significance to the floating point value.

# nan of &lt;floating point&gt;

Returns `True` if the value is not a number.Example: nan of (floating point &quot;1.e-99999&quot; * floating point &quot;1.e999999&quot;) - Returns `True`.

# normal of &lt;floating point&gt;

Returns `True` if the value is a valid floating point number.

# overflow of &lt;floating point&gt;

Returns `True` if the calculation raised the overflow exception; that is, if some intermediate result was too large to be represented, but not an exact infinity.Example: overflow of (floating point &quot;1.0e50000&quot;) - Returns `True`, since the number is too big to represent in floating point.

# product of &lt;floating point&gt;

Multiplies a list of floating point numbers, returning a floating point product.

# relative significance place &lt;integer&gt; of &lt;floating point&gt;

The same floating point value, to be expressed to the given number of significant digits.

# relative significance place of &lt;floating point&gt;

The base 10 logarithm of the quotient of the value and its significance place; approximately the number of significant digits to which the number should be expressed.

# significance place &lt;integer&gt; of &lt;floating point&gt;

The same floating point value, to be expressed to the given decimal place.

# significance place of &lt;floating point&gt;

The base 10 logarithm of the significance threshold; approximately the number of digits to the left (positive) or right (negative) of the ones place to which the number should be expressed.

# significance threshold of &lt;floating point&gt;

The difference between the given value and the next number expressed to the same significance level. For example, the significance threshold of 3 is 1, the significance threshold of 3.0 is 0.1, and the significance threshold of 3000 is 1000.

# sqrt of &lt;floating point&gt;

No documentation exists.

# standard deviation of &lt;floating point&gt;

The standard deviation of the floating point number(s).

# sum of &lt;floating point&gt;

Returns the sum of a list of floating point numbers.

# underflow of &lt;floating point&gt;

Returns `True` if the calculation raised the underflow exception; that is, if some intermediate result was a nonzero value too small to be represented.

# unique value of &lt;floating point&gt;

Returns the unique values of a given list of &lt;floating point&gt; types, removing duplicates and sorting by value.

# &lt;floating point&gt; as floating point

This casting operator is added for completeness. It takes a floating point number and casts it as a floating point number. It facilitates automatic relevance generation where the software is not aware of the input types.

# &lt;floating point&gt; as integer

Rounds off and casts a floating point number as an integer.Example: 15/2 as integer - Returns 7.

# &lt;floating point&gt; as scientific notation

Converts a floating point number into a string with scientific notation.

# &lt;floating point&gt; as standard notation

Converts a floating point number into a string with standard notation.

# &lt;floating point&gt; as string

Converts a floating point number into a string with standard notation.
