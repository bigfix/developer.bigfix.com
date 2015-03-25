# type: string set

The &lt;string set&lt; inspectors deal with sets of strings, which are essentially lists or arrays with string elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

# element of &lt;string set&gt; : string

Returns the unique elements of the specified &lt;string set&lt;, removing duplicates and sorting by value.Example: elements of set of ("beta";"beta";"alpha";"gamma";"beta") - Returns the strings alpha, beta, gamma.

# intersection of &lt;string set&gt; : string set

Returns a set of strings equal to the intersection of the specified sets, aphabetized and with redundant elements stripped out.

# size of &lt;string set&gt; : integer

Returns the number of unique elements in the specified set.Example: size of set of ("to";"be"; "or"; "not"; "to"; "be") - Returns 4, the number of unique strings in the set.

# union of &lt;string set&gt; : string set

Returns a set of strings equal to the union of the specified sets, alphabetized and with redundant elements stripped out.

# &lt;string set&gt; * &lt;string set&gt; : string set

Returns the intersection of the specified sets.Example: elements of (set of ("to";"be";"or") * set of ("not";"to";"be")) - Returns the list: be,to.Example: elements of (set of ("lime";"pie") * set of ("pie";"face") * set of("pie";"in";"sky")) - Returns "pie.".

# &lt;string set&gt; + &lt;string set&gt; : string set

Returns the union of the specified sets.Example:  elements of (set of ("to";"be";"or") + set of ("not";"to";"be")) - Returns the list: be,not,or,to.

# &lt;string set&gt; - &lt;string set&gt; : string set

Subtracts the elements in the second set from the elements in the first.Example: elements of (set of ("to";"be";"or") - set of ("not";"to";"be")) - Returns or.Example: elements of (set of ("fee";"fie";"foe") - set of ("fee") - set of("foe")) - Return "fie.".

# &lt;string set&gt; = &lt;string set&gt; : boolean

Returns `True` if the specified sets have identical contents.

# &lt;string set&gt; contains &lt;string set&gt; : boolean

Returns `True` if the first set contains all the elements of the second set.Example: set of ("to";"be";"or";"not") contains set of ("to";"be") - Returns `True`.
