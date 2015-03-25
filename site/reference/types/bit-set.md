# type: bit set

A small, numbered collection of bits that can be examined and manipulated.

# bit &lt;integer&gt; of &lt;bit set&gt; : boolean

Returns the value of the bit at the nth position in the set.

{{#example}}
Q: bit 0 of bit set "10"
A: False
I: singular boolean
{{/example}}

{{#example}}
Q: bit 1 of bit set "10"
A: True
I: singular boolean
{{/example}}

# least significant one bit of &lt;bit set&gt; : integer

Returns the least n such that bit n of the set is `1`.

{{#example}}
Q: least significant one bit of bit set "1111100"
A: 2
I: singular integer
{{/example}}

# left shift &lt;integer&gt; of &lt;bit set&gt; : bit set

Shift the bit set left n times.

{{#example}}
Q: left shift 2 of bit set "10101"
A: 1010100
I: singular bit set
{{/example}}

# most significant one bit of &lt;bit set&gt; : integer

Returns the greatest n such that bit n of the set is `1`.

{{#example}}
Q: most significant one bit of bit set "1111100"
A: 6
I: singular integer
{{/example}}

# one bit of &lt;bit set&gt; : integer

Returns the numbers n for which bit n of the set is `1`.

{{#example}}
Q: one bits of bit set "10101"
A: 0
A: 2
A: 4
I: plural integer
{{/example}}

# padded string of &lt;bit set&gt; : string

Returns a string with the bit set padded to 64-bits.

{{#example}}
Q: padded string of bit set "10101"
A: 0000000000000000000000000000000000000000000000000000000000010101
I: singular string
{{/example}}

# right shift &lt;integer&gt; of &lt;bit set&gt; : bit set

Shift the bit set right n times.

{{#example}}
Q: right shift 2 of bit set "10101"
A: 101
I: singular bit set
{{/example}}

# &lt;bit set&gt; as integer : integer

Returns the integer whose binary representation matches the bit set.

{{#example}}
Q: bit set "10101" as integer
A: 21
I: singular integer
{{/example}}

# &lt;bit set&gt; as string : string

Returns the bits (0s and 1s) in a string format.

{{#example}}
Q: 42 as bits as string
A: 101010
I: singular string
{{/example}}

# &lt;bit set&gt; * &lt;bit set&gt; : bit set

Returns the intersection of the two bit sets.

{{#example}}
Q: bit set "10011" * bit set "10101"
A: 10001
I: singular bit set
{{/example}}

# &lt;bit set&gt; + &lt;bit set&gt; : bit set

Returns the union of the two sets.

{{#example}}
Q: bit set "10011" + bit set "10101"
A: 10111
I: singular bit set
{{/example}}

# &lt;bit set&gt; - &lt;bit set&gt; : bit set

Returns the bits that are `1` in the left bit set and `0` in the right bit set.

{{#example}}
Q: bit set "10011" - bit set "10101"
A: 10
I: singular bit set
{{/example}}

# &lt;bit set&gt; = &lt;bit set&gt; : boolean

Returns `True` if the corresponding bits of the two sets are equal.

# &lt;bit set&gt; contains &lt;bit set&gt; : boolean

Returns `False` if -- for any n -- bit n of the left set is false, but bit n of the right set is true.
