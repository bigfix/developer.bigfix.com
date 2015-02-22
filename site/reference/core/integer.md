---
title: integer
---

{% type integer %}

Integers are represented internally as 64-bit signed values.

#### Properties of integer

{% property absolute value of <integer> %}

Returns the positive value of the integer.

{% property april <integer> of <integer> %}

Returns the nth day of April and the specified year as a date (day of week, month day year).

{% property april of <integer> %}

Creates a date (in month year format) corresponding to April of the specified year (as an &lt;integer&gt;).

{% property august <integer> of <integer> %}

Returns the nth day of August and the specified year as a date (day of week, month day year).

{% property august of <integer> %}

Creates a date (in month year format) corresponding to August of the specified year (as an &lt;integer&gt;).

{% property bit <integer> of <integer> %}

Returns TRUE if the numbered bit is on. Bits are numbered starting at zero. Bit 0 is the least significant bit.Example: bit 0 of (least integer + 1) - Returns the least significant bit of the smallest possible integer, plus one.

{% property december <integer> of <integer> %}

Returns the nth day of December and the specified year as a date (day of week, month day year).

{% property december of <integer> %}

Creates a date (in month year format) corresponding to December of the specified year (as an &lt;integer&gt;).

{% property extrema of <integer> %}

Returns the minimum and maximum extreme values of the given list of &lt;integer&gt; types.

{% property february <integer> of <integer> %}

Returns the nth day of February and the specified year as a date (day of week, month day year).

{% property february of <integer> %}

Creates a date (in month year format) corresponding to February of the specified year (as an &lt;integer&gt;).

{% property january <integer> of <integer> %}

Returns the nth day of January and the specified year as a date (day of week, month day year).

{% property january of <integer> %}

Creates a date (in month year format) corresponding to January of the specified year (as an &lt;integer&gt;).

{% property javascript array <string> of <integer> %}

No documentation exists for this property.

{% property july <integer> of <integer> %}

Returns the nth day of July and the specified year as a date (day of week, month day year).

{% property july of <integer> %}

Creates a date (in month year format) corresponding to July of the specified year (as an &lt;integer&gt;).

{% property june <integer> of <integer> %}

Returns the nth day of June and the specified year as a date (day of week, month day year).

{% property june of <integer> %}

Creates a date (in month year format) corresponding to June of the specified year (as an &lt;integer&gt;).

{% property march <integer> of <integer> %}

Returns the nth day of March and the specified year as a date (day of week, month day year).

{% property march of <integer> %}

Creates a date (in month year format) corresponding to March of the specified year (as an &lt;integer&gt;).

{% property maximum of <integer> %}

Returns the maximum of a list of integers.

{% property may <integer> of <integer> %}

Returns the nth day of May and the specified year as a date (day of week, month day year).

{% property may of <integer> %}

Creates a date (in month year format) corresponding to May of the specified year (as an &lt;integer&gt;).

{% property mean of <integer> %}

The mean of the integer(s).

{% property minimum of <integer> %}

Returns the minimum of a list of integers.

{% property november <integer> of <integer> %}

Returns the nth day of November and the specified year as a date (day of week, month day year).

{% property november of <integer> %}

Creates a date (in month year format) corresponding to November of the specified year (as an &lt;integer&gt;).

{% property october <integer> of <integer> %}

Returns the nth day of October and the specified year as a date (day of week, month day year).

{% property october of <integer> %}

Creates a date (in month year format) corresponding to October of the specified year (as an &lt;integer&gt;).

{% property product of <integer> %}

Multiplies a list of integers, returning the product.

{% property september <integer> of <integer> %}

Returns the nth day of September and the specified year as a date (day of week, month day year).

{% property september of <integer> %}

Creates a date (in month year format) corresponding to September of the specified year (as an &lt;integer&gt;).

{% property set of <integer> %}

Creates a set from the given list of semicolon-separated integers.

{% property significant digits <integer> of <integer> %}

Returns a number with &lt;integer&gt; significant digits (for example, significant digits 3 of 1235569 = 1240000).

{% property sqrt of <integer> %}

No documentation exists for this property.

{% property standard deviation of <integer> %}

The standard deviation of the integer(s).

{% property sum of <integer> %}

Returns the sum of a list of integers.

{% property unique value of <integer> %}

Returns the unique values of a given list of &lt;integer&gt; types, removing duplicates and sorting by value.

#### Casts of integer

{% cast <integer> as bit set %}

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

{% cast <integer> as bits %}

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

{% cast <integer> as day_of_month %}

Cast an integer as a day of the month type.

{% cast <integer> as floating point %}

Converts an integer into a floating point number.

{% cast <integer> as hexadecimal %}

Converts an integer into a hexadecimal string.

{% cast <integer> as integer %}

Reflexive cast for completeness.

{% cast <integer> as month %}

Returns the name of the nth month of the year.

{% cast <integer> as string %}

Converts an integer to a string.

{% cast <integer> as year %}

Casts an integer as a year type.

{% type integer range %}

No documentation exists for this type.

#### Properties of integer range

{% property lower bound of <integer range> %}

No documentation exists for this property.

{% property upper bound of <integer range> %}

No documentation exists for this property.

{% type integer set %}

The &lt;integer set&gt; inspectors deal with sets of integers, which are essentially lists or arrays with integer elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

#### Properties of integer set

{% property element of <integer set> %}

Returns the unique elements of the specified &lt;integer set&gt;, removing duplicates and sorting by value.Example:  elements of set of (5;7;2;3;3;3) - Returns the integers 2,3,5,7.

{% property intersection of <integer set> %}

Returns a set of integers equal to the intersection of the specified sets, in numeric order and with redundant elements stripped out.

{% property size of <integer set> %}

Returns the number of unique elements in the specified set.Example: size of set of (3; 2; 2; 1; -1) - Returns 4, the number of unique elements in the defined set.

{% property union of <integer set> %}

Returns a set of integers equal to the union of the specified sets, in numeric order and with redundant elements stripped out.

{% type integer with multiplicity %}

The &lt;integer with multiplicity&gt; inspectors deal with arrays of integers, allowing you to extract unique numbers and count them. 

#### Properties of integer with multiplicity

{% property multiplicity of <integer with multiplicity> %}

Returns the multiplicity (quantity) of each element in a multiple integer list.Example: multiplicities of unique values of (1;2;3;3) - Returns the multiplicity of (the number of times) each number in the list is used, namely, 1,1,2.

