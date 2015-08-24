# type: type

The `type` object represents a type in the Relevance Language. This is a form of [reflection](https://en.wikipedia.org/wiki/Reflection_%28computer_programming%29) that allows you to see what inspectors are available and how to use them.

# binary operator returning &lt;type&gt; : binary operator

Returns a list of binary operators that return the specified type.

{% qna %}
Q: binary operators returning (type "day of week")
A: <day of week> + <time interval>: day of week
A: <time interval> + <day of week>: day of week
A: <day of week> - <time interval>: day of week
{% endqna %}

# cast from of &lt;type&gt; : cast

Returns the casts that can be created from the specified type.

{% qna %}
Q: casts from of type "boolean"
A: <boolean> as string: string
A: <boolean> as boolean: boolean
{% endqna %}

# cast returning &lt;type&gt; : cast

Returns a list of the objects that can be cast into the specified type.

{% qna %}
Q: casts returning (type "boolean")
A: <string> as boolean: boolean
A: <boolean> as boolean: boolean
A: <json value> as boolean: boolean
{% endqna %}

# name of &lt;type&gt; : string

Returns the name of the type.

{% qna %}
Q: names of types whose (it as string starts with "b")
A: bes product
A: binary operator
A: bios
A: bit set
A: boolean
{% endqna %}

# parent of &lt;type&gt; : type

Returns the parent type of the type if one exists.

{% qna %}
Q: names of types whose (exists parent of it)
A: application
A: client
A: date with multiplicity
A: day of month with multiplicity
A: day of week with multiplicity
A: day of year with multiplicity
A: device file
A: ...
{% endqna %}

# property &lt;string&gt; of &lt;type&gt; : property

Returns the inspector property of the specified string and type.

{% qna %}
Q: property "length" of type "string"
A: length of <string>: integer
{% endqna %}

# property of &lt;type&gt; : property

Returns the inspector properties of the specified type.

{% qna %}
Q: properties of type "bit set"
A: padded string of <bit set>: string
A: least significant one bit of <bit set>: integer
A: most significant one bit of <bit set>: integer
A: right shift <integer> of <bit set>: bit set
A: left shift <integer> of <bit set>: bit set
A: bit <integer> of <bit set>: boolean
A: one bits of <bit set>: integer
{% endqna %}

# property returning &lt;type&gt; : property

Returns a list of the inspector properties that return the specified type.

{% qna %}
Q: properties returning (type "bit set")
A: bit set <string>: bit set
A: bit <integer>: bit set
A: right shift <integer> of <bit set>: bit set
A: left shift <integer> of <bit set>: bit set
{% endqna %}

# property returning &lt;type&gt; of &lt;type&gt; : property

Returns inspectors of the form &lt;type&gt; of &lt;type&gt;.

{% qna %}
Q: properties returning (type "integer") of type "string"
A: length of <string>: integer
A: numeric value of <string>: integer
{% endqna %}

# size of &lt;type&gt; : integer

Retruns the number of bytes used in the internal representation of an object of the given type.

{% qna %}
Q: size of type "integer"
A: 8
{% endqna %}

{% qna %}
Q: size of type "boolean"
A: 1
{% endqna %}

# unary operator returning &lt;type&gt; : unary operator

Returns a list of the unary operator inspectors that return the specified type.

{% qna %}
Q: unary operators returning (type "integer")
A: - <integer>: integer
{% endqna %}

# &lt;type&gt; as string : string

Returns the name of the type.

{% qna %}
Q: type "boolean" as string
A: boolean
{% endqna %}

# &lt;type&gt; = &lt;type&gt; : boolean

Returns `True` if both expressions denote the same type.

{% qna %}
Q: type "boolean" = type "string"
A: False
{% endqna %}
