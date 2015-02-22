---
title: other
---

{% type bit set %}

A small, numbered collection of bits that can be examined and manipulated.

#### Properties of bit set

{% property bit <integer> of <bit set> %}

Returns the value of the bit at the given &lt;integer&gt; position in the set.

{% property least significant one bit of <bit set> %}

Returns the least n such that bit n of the set is true.

{% property left shift <integer> of <bit set> %}

A bit set which, at each position n &gt;= delta, holds bit n-delta of the original bit set, where delta is the given integer.

{% property most significant one bit of <bit set> %}

Returns the greatest n such that bit n of the set is true.

{% property one bit of <bit set> %}

Returns the numbers n for which bit n of the set is true.

{% property padded string of <bit set> %}

No documentation exists for this property.

{% property right shift <integer> of <bit set> %}

A bit set which, at each position n, holds bit n+delta of the original bit set, where delta is the given shift integer.

#### Casts of bit set

{% cast <bit set> as integer %}

Returns the integer whose binary representation matches the bit set.

{% cast <bit set> as string %}

Returns the bits (0s and 1s) in a string format.

{% type format %}

Format inspectors make it easier for content authors to create localizable content. Similar in concept to the C printf function, they allow you to embed arguments into a formatting string, which is followed by the argument values themselves. The arguments are numbered and enclosed in curly brackets {0} and the values to be substituted are preceded by a plus sign (+). For example:Q: format &quot;At {1}, user {0} is logged on.&quot; + name of current user + nowA: At 9/27/2010 3:03:26 PM, user Scott is logged on.

#### Casts of format

{% cast <format> as string %}

Returns the formatted output as a string type.

{% type rope %}

The &lt;rope&gt; object is a way to efficiently concatenate long strings. String literals in the Relevence language are limited to 512 characters, but internally, they can be any length. Ropes provide a technique for concatenating string literals that is memory-efficient. In general, the Fixlet author will not need to worry about ropes, but they are useful for increasing efficiency.

#### Properties of rope

{% property length of <rope> %}

Returns the number of bytes in the rope.

#### Casts of rope

{% cast <rope> as string %}

Converts a rope into a string object. When converted, all the other string properties are available.

