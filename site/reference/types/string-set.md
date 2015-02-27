# type: string set

The &lt;string set&gt; inspectors deal with sets of strings, which are essentially lists or arrays with string elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

# element of &lt;string set&gt;

Returns the unique elements of the specified &lt;string set&gt;, removing duplicates and sorting by value.Example: elements of set of (&quot;beta&quot;;&quot;beta&quot;;&quot;alpha&quot;;&quot;gamma&quot;;&quot;beta&quot;) - Returns the strings alpha, beta, gamma.

# intersection of &lt;string set&gt;

Returns a set of strings equal to the intersection of the specified sets, aphabetized and with redundant elements stripped out.

# size of &lt;string set&gt;

Returns the number of unique elements in the specified set.Example: size of set of (&quot;to&quot;;&quot;be&quot;; &quot;or&quot;; &quot;not&quot;; &quot;to&quot;; &quot;be&quot;) - Returns 4, the number of unique strings in the set.

# union of &lt;string set&gt;

Returns a set of strings equal to the union of the specified sets, alphabetized and with redundant elements stripped out.

# &lt;string set&gt; * &lt;string set&gt;

Returns the intersection of the specified sets.Example: elements of (set of (&quot;to&quot;;&quot;be&quot;;&quot;or&quot;) * set of (&quot;not&quot;;&quot;to&quot;;&quot;be&quot;)) - Returns the list: be,to.Example: elements of (set of (&quot;lime&quot;;&quot;pie&quot;) * set of (&quot;pie&quot;;&quot;face&quot;) * set of(&quot;pie&quot;;&quot;in&quot;;&quot;sky&quot;)) - Returns &quot;pie.&quot;.

# &lt;string set&gt; + &lt;string set&gt;

Returns the union of the specified sets.Example:  elements of (set of (&quot;to&quot;;&quot;be&quot;;&quot;or&quot;) + set of (&quot;not&quot;;&quot;to&quot;;&quot;be&quot;)) - Returns the list: be,not,or,to.

# &lt;string set&gt; - &lt;string set&gt;

Subtracts the elements in the second set from the elements in the first.Example: elements of (set of (&quot;to&quot;;&quot;be&quot;;&quot;or&quot;) - set of (&quot;not&quot;;&quot;to&quot;;&quot;be&quot;)) - Returns or.Example: elements of (set of (&quot;fee&quot;;&quot;fie&quot;;&quot;foe&quot;) - set of (&quot;fee&quot;) - set of(&quot;foe&quot;)) - Return &quot;fie.&quot;.

# &lt;string set&gt; = &lt;string set&gt;

Returns `True` if the specified sets have identical contents.

# &lt;string set&gt; contains &lt;string set&gt;

Returns `True` if the first set contains all the elements of the second set.Example: set of (&quot;to&quot;;&quot;be&quot;;&quot;or&quot;;&quot;not&quot;) contains set of (&quot;to&quot;;&quot;be&quot;) - Returns `True`.
