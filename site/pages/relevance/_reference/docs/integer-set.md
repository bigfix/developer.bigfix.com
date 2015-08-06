# type: integer set

The `integer set` inspectors deal with sets of integers, which are essentially lists or arrays with integer elements. Think of them as mathematical sets: you can compare them, subtract them from other sets, and form the union and intersection of multiple sets.

# element of &lt;integer set&gt; : integer

Returns the unique elements of the specified set, removing duplicates and sorting by value.

{% qna %}
Q: elements of set of (5; 7; 2; 3; 3; 3)
A: 2
A: 3
A: 5
A: 7
{% endqna %}

# intersection of &lt;integer set&gt; : integer set

Returns a set of integers equal to the intersection of the specified sets.

{% qna %}
Q: elements of intersection of (set of (5; 7; 2; 3; 3; 3); set of (1; 2; 3))
A: 2
A: 3
{% endqna %}

# size of &lt;integer set&gt; : integer

Returns the number of unique elements in the specified set.

{% qna %}
Q: size of set of (3; 2; 2; 1)
A: 3
{% endqna %}

# union of &lt;integer set&gt; : integer set

Returns a set of integers equal to the union of the specified sets, in numeric order and with redundant elements stripped out.

{% qna %}
Q: elements of union of (set of (1; 2); set of (3; 4))
A: 1
A: 2
A: 3
A: 4
{% endqna %}

# &lt;integer set&gt; * &lt;integer set&gt; : integer set

Returns the intersection of the specified sets.

{% qna %}
Q: elements of (set of (1; 2; 3) * set of (2; 3; 4))
A: 2
A: 3
{% endqna %}

# &lt;integer set&gt; + &lt;integer set&gt; : integer set

Returns the union of the specified sets.

{% qna %}
Q: elements of (set of (1; 2; 3) + set of (2; 3; 4))
A: 1
A: 2
A: 3
A: 4
{% endqna %}

# &lt;integer set&gt; - &lt;integer set&gt; : integer set

Subtracts the elements in the second set from the elements in the first.

{% qna %}
Q: elements of (set of (1; 2; 3) - set of (2; 3; 4))
A: 1
{% endqna %}

# &lt;integer set&gt; = &lt;integer set&gt; : boolean

Returns `True` if the specified sets have identical contents.

{% qna %}
Q: set of (1; 2; 3) = set of (1; 2; 4)
A: False
{% endqna %}

{% qna %}
Q: set of (1; 2; 3) = set of (3; 2; 1)
A: True
{% endqna %}

# &lt;integer set&gt; contains &lt;integer set&gt; : boolean

Returns `True` if the first set contains all the elements of the second set.

{% qna %}
Q: set of (1; 2; 3) contains set of (2; 3)
A: True
{% endqna %}
