# type: string set

The &amp;lt;string set&amp;gt; inspectors deal with sets of strings, which are essentially lists or arrays with string elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

# element of &lt;string set&gt; : string

Returns the unique elements of the specified &amp;lt;string set&amp;gt;, removing duplicates and sorting by value.Example: elements of set of (&amp;quot;beta&amp;quot;;&amp;quot;beta&amp;quot;;&amp;quot;alpha&amp;quot;;&amp;quot;gamma&amp;quot;;&amp;quot;beta&amp;quot;) - Returns the strings alpha, beta, gamma.

# intersection of &lt;string set&gt; : string set

Returns a set of strings equal to the intersection of the specified sets, aphabetized and with redundant elements stripped out.

# size of &lt;string set&gt; : integer

Returns the number of unique elements in the specified set.Example: size of set of (&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;; &amp;quot;or&amp;quot;; &amp;quot;not&amp;quot;; &amp;quot;to&amp;quot;; &amp;quot;be&amp;quot;) - Returns 4, the number of unique strings in the set.

# union of &lt;string set&gt; : string set

Returns a set of strings equal to the union of the specified sets, alphabetized and with redundant elements stripped out.

# &lt;string set&gt; * &lt;string set&gt; : string set

Returns the intersection of the specified sets.Example: elements of (set of (&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;;&amp;quot;or&amp;quot;) * set of (&amp;quot;not&amp;quot;;&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;)) - Returns the list: be,to.Example: elements of (set of (&amp;quot;lime&amp;quot;;&amp;quot;pie&amp;quot;) * set of (&amp;quot;pie&amp;quot;;&amp;quot;face&amp;quot;) * set of(&amp;quot;pie&amp;quot;;&amp;quot;in&amp;quot;;&amp;quot;sky&amp;quot;)) - Returns &amp;quot;pie.&amp;quot;.

# &lt;string set&gt; + &lt;string set&gt; : string set

Returns the union of the specified sets.Example:  elements of (set of (&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;;&amp;quot;or&amp;quot;) + set of (&amp;quot;not&amp;quot;;&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;)) - Returns the list: be,not,or,to.

# &lt;string set&gt; - &lt;string set&gt; : string set

Subtracts the elements in the second set from the elements in the first.Example: elements of (set of (&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;;&amp;quot;or&amp;quot;) - set of (&amp;quot;not&amp;quot;;&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;)) - Returns or.Example: elements of (set of (&amp;quot;fee&amp;quot;;&amp;quot;fie&amp;quot;;&amp;quot;foe&amp;quot;) - set of (&amp;quot;fee&amp;quot;) - set of(&amp;quot;foe&amp;quot;)) - Return &amp;quot;fie.&amp;quot;.

# &lt;string set&gt; = &lt;string set&gt; : boolean

Returns `True` if the specified sets have identical contents.

# &lt;string set&gt; contains &lt;string set&gt; : boolean

Returns `True` if the first set contains all the elements of the second set.Example: set of (&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;;&amp;quot;or&amp;quot;;&amp;quot;not&amp;quot;) contains set of (&amp;quot;to&amp;quot;;&amp;quot;be&amp;quot;) - Returns `True`.
