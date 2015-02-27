# type: bit set

A small, numbered collection of bits that can be examined and manipulated.

# bit &lt;integer&gt; of &lt;bit set&gt;

Returns the value of the bit at the given &lt;integer&gt; position in the set.

# least significant one bit of &lt;bit set&gt;

Returns the least n such that bit n of the set is true.

# left shift &lt;integer&gt; of &lt;bit set&gt;

A bit set which, at each position n &gt;= delta, holds bit n-delta of the original bit set, where delta is the given integer.

# most significant one bit of &lt;bit set&gt;

Returns the greatest n such that bit n of the set is true.

# one bit of &lt;bit set&gt;

Returns the numbers n for which bit n of the set is true.

# padded string of &lt;bit set&gt;

No documentation exists.

# right shift &lt;integer&gt; of &lt;bit set&gt;

A bit set which, at each position n, holds bit n+delta of the original bit set, where delta is the given shift integer.

# &lt;bit set&gt; as integer

Returns the integer whose binary representation matches the bit set.

# &lt;bit set&gt; as string

Returns the bits (0s and 1s) in a string format.

# &lt;bit set&gt; * &lt;bit set&gt;

Returns the intersection of the two bit sets.

# &lt;bit set&gt; + &lt;bit set&gt;

Returns the union of the two sets.

# &lt;bit set&gt; - &lt;bit set&gt;

Returns the bits that are true in the left bit set and false in the right bit set.

# &lt;bit set&gt; = &lt;bit set&gt;

Returns `True` if the corresponding bits of the two sets are equal.

# &lt;bit set&gt; contains &lt;bit set&gt;

Returns `False` if -- for any n -- bit n of the left set is false, but bit n of the right set is true.
