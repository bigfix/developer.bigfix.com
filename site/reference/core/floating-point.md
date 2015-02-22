---
title: floating-point
---

{% type floating point %}

The &lt;floating point&gt; type holds a floating-point number, with precision dependent on the computer. It also keeps track of the IEEE floating-point exceptions raised in a calculation and an estimate of the significance with which the number should be expressed when it is converted to a string. All arithmetic operations are carried out to the full precision of the computer; only conversions to string are affected by the estimated significance.

#### Properties of floating point

{% property divided by zero of <floating point> %}

Returns TRUE if the calculation raised the divide-by-zero exception; that is, if some part of the calculation produced an exact infinity.

{% property extrema of <floating point> %}

Returns the minimum and maximum extreme values of the given list of &lt;floating point&gt; types.

{% property finite of <floating point> %}

Returns TRUE if the floating point number is finite.Example: finite of (floating point &quot;1&quot;/ 0) - Returns FALSE.

{% property inexact of <floating point> %}

Returns TRUE if the calculation raised the inexact exception; that is, if some intermediate result could not be represented exactly.

{% property infinite of <floating point> %}

Returns TRUE if the floating point number is infinite.Example: infinite of (floating point &quot;1&quot;/ 0) - Returns TRUE.

{% property integer ceiling of <floating point> %}

Returns the smallest integer not less than the floating point number. For example, ceiling of 2.1 = 3, ceiling of 2 = 2 and ceiling of -2.3 = -2.Example: integer ceiling of (15/8 as floating point) - Returns 2.

{% property integer floor of <floating point> %}

Returns the largest integer less than or equal to the floating point number. For example, floor of 2.8 = 2, floor of -2 = -2 and floor of -2.1 = -3. For nonnegative x, this is the same as the integer part of x.Example:  integer floor of (&quot;-2.1&quot; as floating point) - Returns -3.

{% property invalid of <floating point> %}

Returns TRUE if the calculation raised the invalid exception; that is, if some part of the calculation a function was applied to a value outside its domain.

{% property less significance <integer> of <floating point> %}

Removes &lt;integer&gt; number of digits of significance from the floating point value.

{% property maximum of <floating point> %}

Returns the maximum value from a list of &lt;floating point&gt; types.

{% property mean of <floating point> %}

The mean of the floating point number(s).

{% property minimum of <floating point> %}

Returns the minimum value from a list of &lt;floating point&gt; types.

{% property more significance <integer> of <floating point> %}

Adds &lt;integer&gt; number of digits of significance to the floating point value.

{% property nan of <floating point> %}

Returns TRUE if the value is not a number.Example: nan of (floating point &quot;1.e-99999&quot; * floating point &quot;1.e999999&quot;) - Returns TRUE.

{% property normal of <floating point> %}

Returns TRUE if the value is a valid floating point number.

{% property overflow of <floating point> %}

Returns TRUE if the calculation raised the overflow exception; that is, if some intermediate result was too large to be represented, but not an exact infinity.Example: overflow of (floating point &quot;1.0e50000&quot;) - Returns TRUE, since the number is too big to represent in floating point.

{% property product of <floating point> %}

Multiplies a list of floating point numbers, returning a floating point product.

{% property relative significance place <integer> of <floating point> %}

The same floating point value, to be expressed to the given number of significant digits.

{% property relative significance place of <floating point> %}

The base 10 logarithm of the quotient of the value and its significance place; approximately the number of significant digits to which the number should be expressed.

{% property significance place <integer> of <floating point> %}

The same floating point value, to be expressed to the given decimal place.

{% property significance place of <floating point> %}

The base 10 logarithm of the significance threshold; approximately the number of digits to the left (positive) or right (negative) of the ones place to which the number should be expressed.

{% property significance threshold of <floating point> %}

The difference between the given value and the next number expressed to the same significance level. For example, the significance threshold of 3 is 1, the significance threshold of 3.0 is 0.1, and the significance threshold of 3000 is 1000.

{% property sqrt of <floating point> %}

No documentation exists for this property.

{% property standard deviation of <floating point> %}

The standard deviation of the floating point number(s).

{% property sum of <floating point> %}

Returns the sum of a list of floating point numbers.

{% property underflow of <floating point> %}

Returns TRUE if the calculation raised the underflow exception; that is, if some intermediate result was a nonzero value too small to be represented.

{% property unique value of <floating point> %}

Returns the unique values of a given list of &lt;floating point&gt; types, removing duplicates and sorting by value.

#### Casts of floating point

{% cast <floating point> as floating point %}

This casting operator is added for completeness. It takes a floating point number and casts it as a floating point number. It facilitates automatic relevance generation where the software is not aware of the input types.

{% cast <floating point> as integer %}

Rounds off and casts a floating point number as an integer.Example: 15/2 as integer - Returns 7.

{% cast <floating point> as scientific notation %}

Converts a floating point number into a string with scientific notation.

{% cast <floating point> as standard notation %}

Converts a floating point number into a string with standard notation.

{% cast <floating point> as string %}

Converts a floating point number into a string with standard notation.

{% type floating point with multiplicity %}

The &lt;floating point with multiplicity&gt; inspectors deal with floating point arrays, allowing you to extract unique floating point numbers and count them. 

#### Properties of floating point with multiplicity

{% property multiplicity of <floating point with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;floating point&gt; types.

