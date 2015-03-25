# type: bes fixlet set

The &lt;bes fixlet set&lt; inspectors iterate over the current set of BES Fixlets and package them as a mathematical set, suitable for further set manipulation.

# element of &lt;bes fixlet set&gt; : bes fixlet

Returns the unique elements of the specified &lt;bes fixlet set&lt;, removing duplicates and sorting by value.

# intersection of &lt;bes fixlet set&gt; : bes fixlet set

Returns the intersection of multiple BES Fixlet sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

# size of &lt;bes fixlet set&gt; : integer

Returns the number of unique BES Fixlets in the specified set.

# union of &lt;bes fixlet set&gt; : bes fixlet set

Returns the union of multiple BES Fixlet sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

# &lt;bes fixlet set&gt; as xml : utf8 string

Converts the specified set of BES Fixlets to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

# &lt;bes fixlet set&gt; * &lt;bes fixlet set&gt; : bes fixlet set

No documentation exists.

# &lt;bes fixlet set&gt; + &lt;bes fixlet set&gt; : bes fixlet set

No documentation exists.

# &lt;bes fixlet set&gt; - &lt;bes fixlet set&gt; : bes fixlet set

No documentation exists.

# &lt;bes fixlet set&gt; = &lt;bes fixlet set&gt; : boolean

Compares two sets of BES Fixlets for equivalence.

# &lt;bes fixlet set&gt; contains &lt;bes fixlet set&gt; : boolean

No documentation exists.
