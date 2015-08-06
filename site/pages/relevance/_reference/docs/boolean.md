# type: boolean

The `boolean` type represents a `True` or `False` value.

# conjunction of &lt;boolean&gt; : boolean

This inspector performs a serial `and` on all its boolean arguments.

{% qna %}
Q: conjunction of (true; true; true)
A: True
I: singular boolean
{% endqna %}

{% qna %}
Q: conjunction of (true; true; false)
A: False
I: singular boolean
{% endqna %}

# disjunction of &lt;boolean&gt; : boolean

This inspector performs a serial `or` on all its boolean arguments.

{% qna %}
Q: disjunction of (false; false; false)
A: False
I: singular boolean
{% endqna %}

{% qna %}
Q: disjunction of (false; false; true)
A: True
I: singular boolean
{% endqna %}

# javascript array &lt;string&gt; of &lt;boolean&gt; : html

No documentation exists.

# &lt;boolean&gt; as boolean : boolean

A do-nothing cast that just returns the argument.

# &lt;boolean&gt; as string : string

Converts the boolean value to a string.

{% qna %}
Q: true as string
A: True
I: singular string
{% endqna %}

{% qna %}
Q: false as string
A: False
I: singular string
{% endqna %}

# &lt;boolean&gt; = &lt;boolean&gt; : boolean

Returns whether the two boolean values are equal.
