# type: bes filter set

The &lt;bes filter set&lt; inspectors return the iterated list of BES Filters, converted into a set to make it easy to do set arithmetic with the list.

# element of &lt;bes filter set&gt; : bes filter

Returns the unique elements of the specified &lt;bes filter set&lt;, removing duplicates and sorting by value.

# intersection of &lt;bes filter set&gt; : bes filter set

Returns the intersection of multiple BES filter sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

# size of &lt;bes filter set&gt; : integer

Returns the number of unique BES Filters in the specified set.

# union of &lt;bes filter set&gt; : bes filter set

Returns the union of multiple BES filter sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

# &lt;bes filter set&gt; * &lt;bes filter set&gt; : bes filter set

No documentation exists.

# &lt;bes filter set&gt; + &lt;bes filter set&gt; : bes filter set

No documentation exists.

# &lt;bes filter set&gt; - &lt;bes filter set&gt; : bes filter set

No documentation exists.

# &lt;bes filter set&gt; = &lt;bes filter set&gt; : boolean

Compares two sets of BES filters for equivalence.

# &lt;bes filter set&gt; contains &lt;bes filter set&gt; : boolean

Returns `True` if the first filter set contains the second.
