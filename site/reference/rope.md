# rope

The &lt;rope&gt; object is a way to efficiently concatenate long strings. String literals in the Relevence language are limited to 512 characters, but internally, they can be any length. Ropes provide a technique for concatenating string literals that is memory-efficient. In general, the Fixlet author will not need to worry about ropes, but they are useful for increasing efficiency.

# length of [rope]

Returns the number of bytes in the rope.

# [rope] as string

Converts a rope into a string object. When converted, all the other string properties are available.
