---
title: numbers
---

## integer with multiplicity

The &lt;integer with multiplicity&gt; inspectors deal with arrays of integers, allowing you to extract unique numbers and count them. 

#### multiplicity of &lt;integer with multiplicity&gt; : integer

Returns the multiplicity (quantity) of each element in a multiple integer list.Example: multiplicities of unique values of (1;2;3;3) - Returns the multiplicity of (the number of times) each number in the list is used, namely, 1,1,2.

## integer set

The &lt;integer set&gt; inspectors deal with sets of integers, which are essentially lists or arrays with integer elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

#### union of &lt;integer set&gt; : integer set

Returns a set of integers equal to the union of the specified sets, in numeric order and with redundant elements stripped out.

#### size of &lt;integer set&gt; : integer

Returns the number of unique elements in the specified set.Example: size of set of (3; 2; 2; 1; -1) - Returns 4, the number of unique elements in the defined set.

#### intersection of &lt;integer set&gt; : integer set

Returns a set of integers equal to the intersection of the specified sets, in numeric order and with redundant elements stripped out.

#### element of &lt;integer set&gt; : integer

Returns the unique elements of the specified &lt;integer set&gt;, removing duplicates and sorting by value.Example:  elements of set of (5;7;2;3;3;3) - Returns the integers 2,3,5,7.

## integer

Integers are represented internally as 64-bit signed values.

#### &lt;integer&gt; as year : year

Casts an integer as a year type.

#### &lt;integer&gt; as string : string

Converts an integer to a string.

#### &lt;integer&gt; as month : month

Returns the name of the nth month of the year.

#### &lt;integer&gt; as integer : integer

Reflexive cast for completeness.

#### &lt;integer&gt; as hexadecimal : string

Converts an integer into a hexadecimal string.

#### &lt;integer&gt; as floating point : floating point

Converts an integer into a floating point number.

#### &lt;integer&gt; as day_of_month : day of month

Cast an integer as a day of the month type.

#### &lt;integer&gt; as bits : bit set

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

#### &lt;integer&gt; as bit set : bit set

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

#### unique value of &lt;integer&gt; : integer with multiplicity

Returns the unique values of a given list of &lt;integer&gt; types, removing duplicates and sorting by value.

#### sum of &lt;integer&gt; : integer

Returns the sum of a list of integers.

#### standard deviation of &lt;integer&gt; : floating point

The standard deviation of the integer(s).

#### significant digits &lt;integer&gt; of &lt;integer&gt; : integer

Returns a number with &lt;integer&gt; significant digits (for example, significant digits 3 of 1235569 = 1240000).

#### set of &lt;integer&gt; : integer set

Creates a set from the given list of semicolon-separated integers.

#### september of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to September of the specified year (as an &lt;integer&gt;).

#### september &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of September and the specified year as a date (day of week, month day year).

#### product of &lt;integer&gt; : integer

Multiplies a list of integers, returning the product.

#### october of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to October of the specified year (as an &lt;integer&gt;).

#### october &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of October and the specified year as a date (day of week, month day year).

#### november of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to November of the specified year (as an &lt;integer&gt;).

#### november &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of November and the specified year as a date (day of week, month day year).

#### minimum of &lt;integer&gt; : integer

Returns the minimum of a list of integers.

#### mean of &lt;integer&gt; : floating point

The mean of the integer(s).

#### may of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to May of the specified year (as an &lt;integer&gt;).

#### may &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of May and the specified year as a date (day of week, month day year).

#### maximum of &lt;integer&gt; : integer

Returns the maximum of a list of integers.

#### march of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to March of the specified year (as an &lt;integer&gt;).

#### march &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of March and the specified year as a date (day of week, month day year).

#### june of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to June of the specified year (as an &lt;integer&gt;).

#### june &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of June and the specified year as a date (day of week, month day year).

#### july of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to July of the specified year (as an &lt;integer&gt;).

#### july &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of July and the specified year as a date (day of week, month day year).

#### javascript array &lt;string&gt; of &lt;integer&gt; : html

No documentation exists for this property.

#### january of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to January of the specified year (as an &lt;integer&gt;).

#### january &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of January and the specified year as a date (day of week, month day year).

#### february of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to February of the specified year (as an &lt;integer&gt;).

#### february &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of February and the specified year as a date (day of week, month day year).

#### extrema of &lt;integer&gt; : ( integer, integer )

Returns the minimum and maximum extreme values of the given list of &lt;integer&gt; types.

#### december of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to December of the specified year (as an &lt;integer&gt;).

#### december &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of December and the specified year as a date (day of week, month day year).

#### bit &lt;integer&gt; of &lt;integer&gt; : boolean

Returns TRUE if the numbered bit is on. Bits are numbered starting at zero. Bit 0 is the least significant bit.Example: bit 0 of (least integer + 1) - Returns the least significant bit of the smallest possible integer, plus one.

#### august of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to August of the specified year (as an &lt;integer&gt;).

#### august &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of August and the specified year as a date (day of week, month day year).

#### april of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to April of the specified year (as an &lt;integer&gt;).

#### april &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of April and the specified year as a date (day of week, month day year).

#### absolute value of &lt;integer&gt; : integer

Returns the positive value of the integer.

#### sqrt of &lt;integer&gt; : floating point

No documentation exists for this property.

## floating point with multiplicity

The &lt;floating point with multiplicity&gt; inspectors deal with floating point arrays, allowing you to extract unique floating point numbers and count them. 

#### multiplicity of &lt;floating point with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;floating point&gt; types.

## floating point

The &lt;floating point&gt; type holds a floating-point number, with precision dependent on the computer. It also keeps track of the IEEE floating-point exceptions raised in a calculation and an estimate of the significance with which the number should be expressed when it is converted to a string. All arithmetic operations are carried out to the full precision of the computer; only conversions to string are affected by the estimated significance.

#### &lt;floating point&gt; as string : string

Converts a floating point number into a string with standard notation.

#### &lt;floating point&gt; as standard notation : string

Converts a floating point number into a string with standard notation.

#### &lt;floating point&gt; as scientific notation : string

Converts a floating point number into a string with scientific notation.

#### &lt;floating point&gt; as integer : integer

Rounds off and casts a floating point number as an integer.Example: 15/2 as integer - Returns 7.

#### &lt;floating point&gt; as floating point : floating point

This casting operator is added for completeness. It takes a floating point number and casts it as a floating point number. It facilitates automatic relevance generation where the software is not aware of the input types.

#### unique value of &lt;floating point&gt; : floating point with multiplicity

Returns the unique values of a given list of &lt;floating point&gt; types, removing duplicates and sorting by value.

#### underflow of &lt;floating point&gt; : boolean

Returns TRUE if the calculation raised the underflow exception; that is, if some intermediate result was a nonzero value too small to be represented.

#### sum of &lt;floating point&gt; : floating point

Returns the sum of a list of floating point numbers.

#### standard deviation of &lt;floating point&gt; : floating point

The standard deviation of the floating point number(s).

#### significance threshold of &lt;floating point&gt; : floating point

The difference between the given value and the next number expressed to the same significance level. For example, the significance threshold of 3 is 1, the significance threshold of 3.0 is 0.1, and the significance threshold of 3000 is 1000.

#### significance place of &lt;floating point&gt; : floating point

The base 10 logarithm of the significance threshold; approximately the number of digits to the left (positive) or right (negative) of the ones place to which the number should be expressed.

#### significance place &lt;integer&gt; of &lt;floating point&gt; : floating point

The same floating point value, to be expressed to the given decimal place.

#### relative significance place of &lt;floating point&gt; : floating point

The base 10 logarithm of the quotient of the value and its significance place; approximately the number of significant digits to which the number should be expressed.

#### relative significance place &lt;integer&gt; of &lt;floating point&gt; : floating point

The same floating point value, to be expressed to the given number of significant digits.

#### product of &lt;floating point&gt; : floating point

Multiplies a list of floating point numbers, returning a floating point product.

#### overflow of &lt;floating point&gt; : boolean

Returns TRUE if the calculation raised the overflow exception; that is, if some intermediate result was too large to be represented, but not an exact infinity.Example: overflow of (floating point &quot;1.0e50000&quot;) - Returns TRUE, since the number is too big to represent in floating point.

#### normal of &lt;floating point&gt; : boolean

Returns TRUE if the value is a valid floating point number.

#### nan of &lt;floating point&gt; : boolean

Returns TRUE if the value is not a number.Example: nan of (floating point &quot;1.e-99999&quot; * floating point &quot;1.e999999&quot;) - Returns TRUE.

#### more significance &lt;integer&gt; of &lt;floating point&gt; : floating point

Adds &lt;integer&gt; number of digits of significance to the floating point value.

#### minimum of &lt;floating point&gt; : floating point

Returns the minimum value from a list of &lt;floating point&gt; types.

#### mean of &lt;floating point&gt; : floating point

The mean of the floating point number(s).

#### maximum of &lt;floating point&gt; : floating point

Returns the maximum value from a list of &lt;floating point&gt; types.

#### less significance &lt;integer&gt; of &lt;floating point&gt; : floating point

Removes &lt;integer&gt; number of digits of significance from the floating point value.

#### invalid of &lt;floating point&gt; : boolean

Returns TRUE if the calculation raised the invalid exception; that is, if some part of the calculation a function was applied to a value outside its domain.

#### integer floor of &lt;floating point&gt; : integer

Returns the largest integer less than or equal to the floating point number. For example, floor of 2.8 = 2, floor of -2 = -2 and floor of -2.1 = -3. For nonnegative x, this is the same as the integer part of x.Example:  integer floor of (&quot;-2.1&quot; as floating point) - Returns -3.

#### integer ceiling of &lt;floating point&gt; : integer

Returns the smallest integer not less than the floating point number. For example, ceiling of 2.1 = 3, ceiling of 2 = 2 and ceiling of -2.3 = -2.Example: integer ceiling of (15/8 as floating point) - Returns 2.

#### infinite of &lt;floating point&gt; : boolean

Returns TRUE if the floating point number is infinite.Example: infinite of (floating point &quot;1&quot;/ 0) - Returns TRUE.

#### inexact of &lt;floating point&gt; : boolean

Returns TRUE if the calculation raised the inexact exception; that is, if some intermediate result could not be represented exactly.

#### finite of &lt;floating point&gt; : boolean

Returns TRUE if the floating point number is finite.Example: finite of (floating point &quot;1&quot;/ 0) - Returns FALSE.

#### extrema of &lt;floating point&gt; : ( floating point, floating point )

Returns the minimum and maximum extreme values of the given list of &lt;floating point&gt; types.

#### divided by zero of &lt;floating point&gt; : boolean

Returns TRUE if the calculation raised the divide-by-zero exception; that is, if some part of the calculation produced an exact infinity.

#### sqrt of &lt;floating point&gt; : floating point

No documentation exists for this property.

## integer range

No documentation exists for this type.

#### upper bound of &lt;integer range&gt; : integer

No documentation exists for this property.

#### lower bound of &lt;integer range&gt; : integer

No documentation exists for this property.

