# type: property

The `property` type represents an inspector property in the Relevance Language.  This is a form of [reflection](https://en.wikipedia.org/wiki/Reflection_%28computer_programming%29) that allows you to see what inspectors are available and how to use them.

# dependency known of &lt;property&gt; : boolean

This introspector returns `True` if a property's dependency is known. If it isn't, then properties containing the expression can't be fingerprinted, an optimization that exempts expressions from re-evaluation if their dependencies haven't changed.

{% qna %}
Q: (it as string, dependency known of it) of properties of type "file"
A: json of <file>: json value, True
A: sqlite database of <file>: sqlite database, False
A: content of <file>: file content, True
A: ...
{% endqna %}

# direct object type of &lt;property&gt; : type

The type (if any) required after the keyword "of" in an expression using the property.

{% qna %}
Q: properties whose (direct object type of it = type "boolean")
A: conjunctions of <boolean>: boolean
A: disjunctions of <boolean>: boolean
{% endqna %}

# index type of &lt;property&gt; : type

The type (if any) required before or without the keyword "of" in an expression using the property.

{% qna %}
Q: properties whose (index type of it = type "regular expression")
A: matches <regular expression> of <string>: regular expression match
A: first matches <regular expression> of <string>: regular expression match
{% endqna %}

# multivalued of &lt;property&gt; : boolean

Returns whether the property can have more than one value for a single input.

{% qna %}
Q: properties whose (multivalued of it) of type "bit set"
A: one bits of <bit set>: integer
{% endqna %}

# plural name of &lt;property&gt; : string

Returns the plural name of the property.

{% qna %}
Q: (singular name of it, plural name of it) of properties of type "boolean"
A: conjunction, conjunctions
A: disjunction, disjunctions
{% endqna %}

# result type of &lt;property&gt; : type

Returns the result type of the property. This is the type of the object that the inspector property returns.

{% qna %}
Q: (it as string, result type of it) of properties of type "substring"
A: preceding text of <substring>: substring, substring
A: following text of <substring>: substring, substring
A: start of <substring>: string position, string position
A: end of <substring>: string position, string position
{% endqna %}

# singular name of &lt;property&gt; : string

Returns the singular name of the property.

{% qna %}
Q: (singular name of it, plural name of it) of properties of type "boolean"
A: conjunction, conjunctions
A: disjunction, disjunctions
{% endqna %}

# usual name of &lt;property&gt; : string

If the property can return multiple values, this is the plural name of the property. Otherwise it is the singular name.

{% qna %}
Q: usual names of properties of type "bit set"
A: padded string
A: least significant one bit
A: most significant one bit
A: right shift
A: left shift
A: bit
A: one bits
{% endqna %}

# &lt;property&gt; as string : string

Returns a short description of the property.

{% qna %}
Q: properties of type "boolean"
A: conjunctions of <boolean>: boolean
A: disjunctions of <boolean>: boolean
{% endqna %}
