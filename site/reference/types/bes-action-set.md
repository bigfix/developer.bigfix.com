# bes action set

The &lt;bes action set&gt; inspectors return the iterated list of BES Actions, converted into a set to make it easy to do set arithmetic with the list.

# element of <bes action set>

Returns the unique elements of the specified &lt;bes action set&gt;, removing duplicates and sorting by value.Example: names of elements of bes action set - Returns the names of all the BES Actions.

# intersection of <bes action set>

Returns the intersection of multiple BES Action sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

# size of <bes action set>

Returns the number of unique elements in the specified BES Action set.

# union of <bes action set>

Returns the union of multiple BES User sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

# <bes action set> as xml

Casts a BES Action set as an XML document, for submission to to the ImportXML API in the Console. It can only be used in the Console using the EvaluateRelevance API, not the &lt;?relevance ?&gt; interface.
