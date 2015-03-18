# type: integer set

The `integer set` inspectors deal with sets of integers, which are essentially lists or arrays with integer elements. Think of them as mathematical sets: you can compare them, subtract them from other sets, and form the union and intersection of multiple sets.

# element of &lt;integer set&gt;

Returns the unique elements of the specified set, removing duplicates and sorting by value.

{{#example}}
Q: elements of set of (5; 7; 2; 3; 3; 3)
A: 2
A: 3
A: 5
A: 7
{{/example}}

# intersection of &lt;integer set&gt;

Returns a set of integers equal to the intersection of the specified sets.

{{#example}}
Q: elements of intersection of (set of (5; 7; 2; 3; 3; 3); set of (1; 2; 3))
A: 2
A: 3
{{/example}}

# size of &lt;integer set&gt;

Returns the number of unique elements in the specified set.

{{#example}}
Q: size of set of (3; 2; 2; 1)
A: 3
{{/example}}

# union of &lt;integer set&gt;

Returns a set of integers equal to the union of the specified sets, in numeric order and with redundant elements stripped out.

{{#example}}
Q: elements of union of (set of (1; 2); set of (3; 4))
A: 1
A: 2
A: 3
A: 4
{{/example}}

# &lt;integer set&gt; * &lt;integer set&gt;

Returns the intersection of the specified sets.

{{#example}}
Q: elements of (set of (1; 2; 3) * set of (2; 3; 4))
A: 2
A: 3
{{/example}}

# &lt;integer set&gt; + &lt;integer set&gt;

Returns the union of the specified sets.

{{#example}}
Q: elements of (set of (1; 2; 3) + set of (2; 3; 4))
A: 1
A: 2
A: 3
A: 4
{{/example}}

# &lt;integer set&gt; - &lt;integer set&gt;

Subtracts the elements in the second set from the elements in the first.

{{#example}}
Q: elements of (set of (1; 2; 3) - set of (2; 3; 4))
A: 1
{{/example}}

# &lt;integer set&gt; = &lt;integer set&gt;

Returns `True` if the specified sets have identical contents.

{{#example}}
Q: set of (1; 2; 3) = set of (1; 2; 4)
A: False
{{/example}}

{{#example}}
Q: set of (1; 2; 3) = set of (3; 2; 1)
A: True
{{/example}}

# &lt;integer set&gt; contains &lt;integer set&gt;

Returns `True` if the first set contains all the elements of the second set.

{{#example}}
Q: set of (1; 2; 3) contains set of (2; 3)
A: True
{{/example}}
