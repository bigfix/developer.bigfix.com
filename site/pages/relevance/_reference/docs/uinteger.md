# type: uinteger

A `uinteger` is an unsigned 64-bit value.

# bit &lt;integer&gt; of &lt;uinteger&gt; : boolean

Returns `True` if the nth bit is set. Bits are numbered starting at zero. Bit 0 is the least significant bit.

{% qna %}
Q: bit 0 of uinteger "2"
A: False

Q: bit 1 of uinteger "2"
A: True
{% endqna %}

# extrema of &lt;uinteger&gt; : ( uinteger, uinteger )

Returns the minimum and maximum extreme values of the given list of unsigned integers.

{% qna %}
Q: extrema of (uinteger "100"; uinteger "200"; uinteger "150")
A: 100, 200
{% endqna %}

# maximum of &lt;uinteger&gt; : uinteger

Returns the maximum of a list of unsigned integers.

# minimum of &lt;uinteger&gt; : uinteger

Returns the minimum of a list of unsigned integers.

# multiplicity of &lt;uinteger with multiplicity&gt; : integer

Returns the number of times each element occurs in a list of unsigned integers.

{% qna %}
Q: multiplicity of unique values of (uinteger "2"; uinteger "5"; uinteger "2")
A: 2
{% endqna %}

# unique value of &lt;uinteger&gt; : uinteger with multiplicity

Returns the unique values of a given list of &lt;uinteger&gt; types, removing duplicates and sorting by value.

{% qna %}
Q: unique values of (uinteger "2"; uinteger "5"; uinteger "2")
A: 2
A: 5
{% endqna %}

# &lt;uinteger&gt; as integer : integer

Converts an unsigned integer into an integer.

# &lt;uinteger&gt; as hexadecimal : string

Converts an unsigned integer into a hexadecimal string.

# &lt;uinteger&gt; as string : string

Converts an unsigned integer to a string.

# &lt;uinteger&gt; as uinteger : uinteger

Reflexive cast for completeness.

# &lt;uinteger&gt; &lt; &lt;uinteger&gt; : boolean

Returns true if the value of the left operand is less than the value of the right operand.

# &lt;uinteger&gt; &lt;= &lt;uinteger&gt; : boolean

Returns true if the value of the left operand is less than or equal to the value of the right operand.

# &lt;uinteger&gt; * &lt;uinteger&gt; : uinteger

Returns the multiplication of the operands.

# &lt;uinteger&gt; + &lt;uinteger&gt; : uinteger

Returns the sum of the operands.

# &lt;uinteger&gt; - &lt;uinteger&gt; : uinteger

Returns the difference between the operands.

# &lt;uinteger&gt; / &lt;uinteger&gt; : uinteger

Returns the division of the left operand by the right operand.

# &lt;uinteger&gt; = &lt;uinteger&gt; : boolean

Returns true if the value of the left operand is equal to the value of the right operand.

# &lt;uinteger&gt; mod &lt;uinteger&gt; : uinteger

Returns the remainder of the division of the left operand by the right operand.

# &lt;uinteger&gt; &lt; &lt;integer&gt; : boolean

Returns true if the value of the left operand is less than the value of the right operand.

# &lt;uinteger&gt; &lt;= &lt;integer&gt; : boolean

Returns true if the value of the left operand is less than or equal to the value of the right operand.

# &lt;uinteger&gt; = &lt;integer&gt; : boolean

Returns true if the value of the left operand is equal to the value of the right operand.

# &lt;uinteger&gt; + &lt;integer&gt; : uinteger

Returns the sum of the operands.

# &lt;uinteger&gt; - &lt;integer&gt; : uinteger

Returns the difference between the operands.

# &lt;uinteger&gt; * &lt;integer&gt; : uinteger

Returns the multiplication of the operands.

# &lt;uinteger&gt; / &lt;integer&gt; : uinteger

Returns the division of the left operand by the right operand.

# &lt;uinteger&gt; mod &lt;integer&gt; : uinteger

Returns the remainder of the division of the left operand by the right operand.