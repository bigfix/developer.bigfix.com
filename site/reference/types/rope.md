# type: rope

The &amp;lt;rope&amp;gt; object is a way to efficiently concatenate long strings. String literals in the Relevence language are limited to 512 characters, but internally, they can be any length. Ropes provide a technique for concatenating string literals that is memory-efficient. In general, the Fixlet author will not need to worry about ropes, but they are useful for increasing efficiency.

# length of &lt;rope&gt; : integer

Returns the number of bytes in the rope.

# &lt;rope&gt; as string : string

Converts a rope into a string object. When converted, all the other string properties are available.

# &lt;rope&gt; &amp; &lt;rope&gt; : rope

Concatenates two ropes into a new rope.
