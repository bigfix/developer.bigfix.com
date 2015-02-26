# type: integer set

The &lt;integer set&gt; inspectors deal with sets of integers, which are essentially lists or arrays with integer elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

# element of &lt;integer set&gt;

Returns the unique elements of the specified &lt;integer set&gt;, removing duplicates and sorting by value.Example:  elements of set of (5;7;2;3;3;3) - Returns the integers 2,3,5,7.

# intersection of &lt;integer set&gt;

Returns a set of integers equal to the intersection of the specified sets, in numeric order and with redundant elements stripped out.

# size of &lt;integer set&gt;

Returns the number of unique elements in the specified set.Example: size of set of (3; 2; 2; 1; -1) - Returns 4, the number of unique elements in the defined set.

# union of &lt;integer set&gt;

Returns a set of integers equal to the union of the specified sets, in numeric order and with redundant elements stripped out.
