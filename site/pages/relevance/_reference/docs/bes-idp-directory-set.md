# type: bes idp directory set

The `bes idp directory set` inspector represents all BES Identity Provider Directories as a mathematical set. A mathematical set only contains unique elements and the operations on it never introduce any duplicate elements.

# element of &lt;bes idp directory set&gt; : bes idp directory

Returns the elements of the specified `bes idp directory set` as a list.

{% qna %}
Q: ids of elements of set of bes idp directories whose (id of it > 60)
A: 61
A: 62

Q: ids of elements of set of bes idp directories whose (use ssl of it)
A: 58
A: 59
A: 60
{% endqna %}

# intersection of &lt;bes idp directory set&gt; : bes idp directory set

This operator acts on a list of `bes idp directory set` objects. It returns a new set representing the intersection of the sets in the list. You can create such a list using this syntax `( set1; set2 )`.

{% qna %}
Q: size of intersection of (set of bes idp directories whose (id of it > 60); set of bes idp directories whose (use ssl of it))
A: 0
{% endqna %}

# size of &lt;bes idp directory set&gt; : integer

Returns the number of BES Identity Provider Directories elements in the specified set.

{% qna %}
Q: size of set of bes idp directories whose (id of it > 60)
A: 2

Q: size of set of bes idp directories whose (use ssl of it)
A: 3
{% endqna %}

# union of &lt;bes idp directory set&gt; : bes idp directory set

This operator acts on a list of `bes idp directory set` objects. It returns a new set representing the union of the sets in the list.

{% qna %}
Q: size of union of (set of bes idp directories whose (id of it > 60); set of bes idp directories whose (use ssl of it))
A: 5
{% endqna %}

# &lt;bes idp directory set&gt; * &lt;bes idp directory set&gt; : bes idp directory set

This operator performs a set intersection. It returns a new set containing only the elements that are present in both sets.

{% qna %}
Q: size of (set of bes idp directories whose (id of it > 60) * set of bes idp directories whose (use ssl of it))
A: 0
{% endqna %}

# &lt;bes idp directory set&gt; + &lt;bes idp directory set&gt; : bes idp directory set

This operator performs a set union. It returns a new set containing all the unique elements from both of the specified `bes idp directory sets`.

{% qna %}
Q: size of (set of bes idp directories whose (id of it > 60) + set of bes idp directories whose (use ssl of it))
A: 5
{% endqna %}

# &lt;bes idp directory set&gt; - &lt;bes idp directory set&gt; : bes idp directory set

This operator performs a set difference. It returns a new set containing the elements that are present in the first set but not in the second set.

{% qna %}
Q: size of (set of bes idp directories whose (id of it > 60) - set of bes idp directories whose (use ssl of it))
A: 1
{% endqna %}

# &lt;bes idp directory set&gt; = &lt;bes idp directory set&gt; : boolean

This operator checks for set equality. It returns `True` if both sets contain the exact same elements, and `False` otherwise.

{% qna %}
Q: set of bes idp directories whose (id of it > 60) = set of bes idp directories whose (use ssl of it)
A: False
{% endqna %}

# &lt;bes idp directory set&gt; contains &lt;bes idp directory set&gt; : boolean

This operator checks for subset membership. It returns `True` if all the elements of the second set are also present in the first set, and `False` otherwise.

{% qna %}
Q: set of bes idp directories whose (id of it > 60) contains set of bes idp directories whose (use ssl of it)
A: False
{% endqna %}