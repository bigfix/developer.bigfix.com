# type: large integer

A `large integer` is a signed 128-bit value.

# bit &lt;integer&gt; of &lt;large integer&gt; : boolean

Returns `True` if the nth bit is set. Bits are numbered starting at zero. Bit 0 is the least significant bit.

{% qna %}
Q: bit 0 of large integer "2"
A: False

Q: bit 1 of large integer "2"
A: True
{% endqna %}

# extrema of &lt;large integer&gt; : ( large integer, large integer )

Returns the minimum and maximum values of a given list of 128-bit signed integers.

{% qna %}
Q: extrema of (large integer "100"; large integer "200"; large integer "150")
A: 100, 200
{% endqna %}

# maximum of &lt;large integer&gt; : large integer

Returns the maximum value of a list of 128-bit signed integers.

{% qna %}
Q: maximum of (large integer "100"; large integer "200"; large integer "150")
A: 200
{% endqna %}

# minimum of &lt;large integer&gt; : large integer

Returns the minimum value of a list of 128-bit signed integers.

{% qna %}
Q: minimum of (large integer "100"; large integer "200"; large integer "150")
A: 100
{% endqna %}

# &lt;large integer&gt; as integer : integer

Converts a 128-bit signed integer into an integer.

# &lt;large integer&gt; as hexadecimal : string

Converts a 128-bit signed integer into a hexadecimal string.

# &lt;large integer&gt; as string : string

Converts a 128-bit signed integer to a string.

# &lt;large integer&gt; as large integer : large integer

Reflexive cast for completeness.

# &lt;large integer&gt; as uinteger : uinteger

Converts a 128-bit signed integer to a uinteger.

# &lt;large integer&gt; &lt; &lt;large integer&gt; : boolean

Returns true if the value of the left operand is less than the value of the right operand.

# &lt;large integer&gt; &lt;= &lt;large integer&gt; : boolean

Returns true if the value of the left operand is less than or equal to the value of the right operand.

# &lt;large integer&gt; * &lt;large integer&gt; : large integer

Returns the multiplication of the operands.

# &lt;large integer&gt; + &lt;large integer&gt; : large integer

Returns the sum of the operands.

# &lt;large integer&gt; - &lt;large integer&gt; : large integer

Returns the difference between the operands.

# &lt;large integer&gt; / &lt;large integer&gt; : large integer

Returns the division of the left operand by the right operand.

# &lt;large integer&gt; = &lt;large integer&gt; : boolean

Returns true if the value of the left operand is equal to the value of the right operand.

# &lt;large integer&gt; mod &lt;large integer&gt; : large integer

Returns the remainder of the division of the left operand by the right operand.

# &lt;large integer&gt; &lt; &lt;integer&gt; : boolean

Returns true if the value of the left operand is less than the value of the right operand.

# &lt;large integer&gt; &lt;= &lt;integer&gt; : boolean

Returns true if the value of the left operand is less than or equal to the value of the right operand.

# &lt;large integer&gt; = &lt;integer&gt; : boolean

Returns true if the value of the left operand is equal to the value of the right operand.

# &lt;large integer&gt; + &lt;integer&gt; : large integer

Returns the sum of the operands.

# &lt;large integer&gt; - &lt;integer&gt; : large integer

Returns the difference between the operands.

# &lt;large integer&gt; * &lt;integer&gt; : large integer

Returns the multiplication of the operands.

# &lt;large integer&gt; / &lt;integer&gt; : large integer

Returns the division of the left operand by the right operand.

# &lt;large integer&gt; mod &lt;integer&gt; : large integer

Returns the remainder of the division of the left operand by the right operand.