---
title: numbers
---

{% type integer with multiplicity%}

The &lt;integer with multiplicity&gt; inspectors deal with arrays of integers, allowing you to extract unique numbers and count them. 

#### Properties

{% property multiplicity of <integer with multiplicity> %}

Returns the multiplicity (quantity) of each element in a multiple integer list.Example: multiplicities of unique values of (1;2;3;3) - Returns the multiplicity of (the number of times) each number in the list is used, namely, 1,1,2.

{% type integer set%}

The &lt;integer set&gt; inspectors deal with sets of integers, which are essentially lists or arrays with integer elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

#### Properties

{% property union of <integer set> %}

Returns a set of integers equal to the union of the specified sets, in numeric order and with redundant elements stripped out.

{% property size of <integer set> %}

Returns the number of unique elements in the specified set.Example: size of set of (3; 2; 2; 1; -1) - Returns 4, the number of unique elements in the defined set.

{% property intersection of <integer set> %}

Returns a set of integers equal to the intersection of the specified sets, in numeric order and with redundant elements stripped out.

{% property element of <integer set> %}

Returns the unique elements of the specified &lt;integer set&gt;, removing duplicates and sorting by value.Example:  elements of set of (5;7;2;3;3;3) - Returns the integers 2,3,5,7.

{% type integer%}

Integers are represented internally as 64-bit signed values.

#### Casts

{% property <integer> as year %}

Casts an integer as a year type.

{% property <integer> as string %}

Converts an integer to a string.

{% property <integer> as month %}

Returns the name of the nth month of the year.

{% property <integer> as integer %}

Reflexive cast for completeness.

{% property <integer> as hexadecimal %}

Converts an integer into a hexadecimal string.

{% property <integer> as floating point %}

Converts an integer into a floating point number.

{% property <integer> as day_of_month %}

Cast an integer as a day of the month type.

{% property <integer> as bits %}

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

{% property <integer> as bit set %}

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

#### Properties

{% property unique value of <integer> %}

Returns the unique values of a given list of &lt;integer&gt; types, removing duplicates and sorting by value.

{% property sum of <integer> %}

Returns the sum of a list of integers.

{% property standard deviation of <integer> %}

The standard deviation of the integer(s).

{% property significant digits <integer> of <integer> %}

Returns a number with &lt;integer&gt; significant digits (for example, significant digits 3 of 1235569 = 1240000).

{% property set of <integer> %}

Creates a set from the given list of semicolon-separated integers.

{% property september of <integer> %}

Creates a date (in month year format) corresponding to September of the specified year (as an &lt;integer&gt;).

{% property september <integer> of <integer> %}

Returns the nth day of September and the specified year as a date (day of week, month day year).

{% property product of <integer> %}

Multiplies a list of integers, returning the product.

{% property october of <integer> %}

Creates a date (in month year format) corresponding to October of the specified year (as an &lt;integer&gt;).

{% property october <integer> of <integer> %}

Returns the nth day of October and the specified year as a date (day of week, month day year).

{% property november of <integer> %}

Creates a date (in month year format) corresponding to November of the specified year (as an &lt;integer&gt;).

{% property november <integer> of <integer> %}

Returns the nth day of November and the specified year as a date (day of week, month day year).

{% property minimum of <integer> %}

Returns the minimum of a list of integers.

{% property mean of <integer> %}

The mean of the integer(s).

{% property may of <integer> %}

Creates a date (in month year format) corresponding to May of the specified year (as an &lt;integer&gt;).

{% property may <integer> of <integer> %}

Returns the nth day of May and the specified year as a date (day of week, month day year).

{% property maximum of <integer> %}

Returns the maximum of a list of integers.

{% property march of <integer> %}

Creates a date (in month year format) corresponding to March of the specified year (as an &lt;integer&gt;).

{% property march <integer> of <integer> %}

Returns the nth day of March and the specified year as a date (day of week, month day year).

{% property june of <integer> %}

Creates a date (in month year format) corresponding to June of the specified year (as an &lt;integer&gt;).

{% property june <integer> of <integer> %}

Returns the nth day of June and the specified year as a date (day of week, month day year).

{% property july of <integer> %}

Creates a date (in month year format) corresponding to July of the specified year (as an &lt;integer&gt;).

{% property july <integer> of <integer> %}

Returns the nth day of July and the specified year as a date (day of week, month day year).

{% property javascript array <string> of <integer> %}

No documentation exists for this property.

{% property january of <integer> %}

Creates a date (in month year format) corresponding to January of the specified year (as an &lt;integer&gt;).

{% property january <integer> of <integer> %}

Returns the nth day of January and the specified year as a date (day of week, month day year).

{% property february of <integer> %}

Creates a date (in month year format) corresponding to February of the specified year (as an &lt;integer&gt;).

{% property february <integer> of <integer> %}

Returns the nth day of February and the specified year as a date (day of week, month day year).

{% property extrema of <integer> %}

Returns the minimum and maximum extreme values of the given list of &lt;integer&gt; types.

{% property december of <integer> %}

Creates a date (in month year format) corresponding to December of the specified year (as an &lt;integer&gt;).

{% property december <integer> of <integer> %}

Returns the nth day of December and the specified year as a date (day of week, month day year).

{% property bit <integer> of <integer> %}

Returns TRUE if the numbered bit is on. Bits are numbered starting at zero. Bit 0 is the least significant bit.Example: bit 0 of (least integer + 1) - Returns the least significant bit of the smallest possible integer, plus one.

{% property august of <integer> %}

Creates a date (in month year format) corresponding to August of the specified year (as an &lt;integer&gt;).

{% property august <integer> of <integer> %}

Returns the nth day of August and the specified year as a date (day of week, month day year).

{% property april of <integer> %}

Creates a date (in month year format) corresponding to April of the specified year (as an &lt;integer&gt;).

{% property april <integer> of <integer> %}

Returns the nth day of April and the specified year as a date (day of week, month day year).

{% property absolute value of <integer> %}

Returns the positive value of the integer.

{% property sqrt of <integer> %}

No documentation exists for this property.

{% type floating point with multiplicity%}

The &lt;floating point with multiplicity&gt; inspectors deal with floating point arrays, allowing you to extract unique floating point numbers and count them. 

#### Properties

{% property multiplicity of <floating point with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;floating point&gt; types.

{% type floating point%}

The &lt;floating point&gt; type holds a floating-point number, with precision dependent on the computer. It also keeps track of the IEEE floating-point exceptions raised in a calculation and an estimate of the significance with which the number should be expressed when it is converted to a string. All arithmetic operations are carried out to the full precision of the computer; only conversions to string are affected by the estimated significance.

#### Casts

{% property <floating point> as string %}

Converts a floating point number into a string with standard notation.

{% property <floating point> as standard notation %}

Converts a floating point number into a string with standard notation.

{% property <floating point> as scientific notation %}

Converts a floating point number into a string with scientific notation.

{% property <floating point> as integer %}

Rounds off and casts a floating point number as an integer.Example: 15/2 as integer - Returns 7.

{% property <floating point> as floating point %}

This casting operator is added for completeness. It takes a floating point number and casts it as a floating point number. It facilitates automatic relevance generation where the software is not aware of the input types.

#### Properties

{% property unique value of <floating point> %}

Returns the unique values of a given list of &lt;floating point&gt; types, removing duplicates and sorting by value.

{% property underflow of <floating point> %}

Returns TRUE if the calculation raised the underflow exception; that is, if some intermediate result was a nonzero value too small to be represented.

{% property sum of <floating point> %}

Returns the sum of a list of floating point numbers.

{% property standard deviation of <floating point> %}

The standard deviation of the floating point number(s).

{% property significance threshold of <floating point> %}

The difference between the given value and the next number expressed to the same significance level. For example, the significance threshold of 3 is 1, the significance threshold of 3.0 is 0.1, and the significance threshold of 3000 is 1000.

{% property significance place of <floating point> %}

The base 10 logarithm of the significance threshold; approximately the number of digits to the left (positive) or right (negative) of the ones place to which the number should be expressed.

{% property significance place <integer> of <floating point> %}

The same floating point value, to be expressed to the given decimal place.

{% property relative significance place of <floating point> %}

The base 10 logarithm of the quotient of the value and its significance place; approximately the number of significant digits to which the number should be expressed.

{% property relative significance place <integer> of <floating point> %}

The same floating point value, to be expressed to the given number of significant digits.

{% property product of <floating point> %}

Multiplies a list of floating point numbers, returning a floating point product.

{% property overflow of <floating point> %}

Returns TRUE if the calculation raised the overflow exception; that is, if some intermediate result was too large to be represented, but not an exact infinity.Example: overflow of (floating point &quot;1.0e50000&quot;) - Returns TRUE, since the number is too big to represent in floating point.

{% property normal of <floating point> %}

Returns TRUE if the value is a valid floating point number.

{% property nan of <floating point> %}

Returns TRUE if the value is not a number.Example: nan of (floating point &quot;1.e-99999&quot; * floating point &quot;1.e999999&quot;) - Returns TRUE.

{% property more significance <integer> of <floating point> %}

Adds &lt;integer&gt; number of digits of significance to the floating point value.

{% property minimum of <floating point> %}

Returns the minimum value from a list of &lt;floating point&gt; types.

{% property mean of <floating point> %}

The mean of the floating point number(s).

{% property maximum of <floating point> %}

Returns the maximum value from a list of &lt;floating point&gt; types.

{% property less significance <integer> of <floating point> %}

Removes &lt;integer&gt; number of digits of significance from the floating point value.

{% property invalid of <floating point> %}

Returns TRUE if the calculation raised the invalid exception; that is, if some part of the calculation a function was applied to a value outside its domain.

{% property integer floor of <floating point> %}

Returns the largest integer less than or equal to the floating point number. For example, floor of 2.8 = 2, floor of -2 = -2 and floor of -2.1 = -3. For nonnegative x, this is the same as the integer part of x.Example:  integer floor of (&quot;-2.1&quot; as floating point) - Returns -3.

{% property integer ceiling of <floating point> %}

Returns the smallest integer not less than the floating point number. For example, ceiling of 2.1 = 3, ceiling of 2 = 2 and ceiling of -2.3 = -2.Example: integer ceiling of (15/8 as floating point) - Returns 2.

{% property infinite of <floating point> %}

Returns TRUE if the floating point number is infinite.Example: infinite of (floating point &quot;1&quot;/ 0) - Returns TRUE.

{% property inexact of <floating point> %}

Returns TRUE if the calculation raised the inexact exception; that is, if some intermediate result could not be represented exactly.

{% property finite of <floating point> %}

Returns TRUE if the floating point number is finite.Example: finite of (floating point &quot;1&quot;/ 0) - Returns FALSE.

{% property extrema of <floating point> %}

Returns the minimum and maximum extreme values of the given list of &lt;floating point&gt; types.

{% property divided by zero of <floating point> %}

Returns TRUE if the calculation raised the divide-by-zero exception; that is, if some part of the calculation produced an exact infinity.

{% property sqrt of <floating point> %}

No documentation exists for this property.

{% type integer range%}

No documentation exists for this type.

#### Properties

{% property upper bound of <integer range> %}

No documentation exists for this property.

{% property lower bound of <integer range> %}

No documentation exists for this property.

