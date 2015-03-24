# type: boolean

The `boolean` type represents a `True` or `False` value.

# conjunction of &lt;boolean&gt;

This inspector performs a serial `and` on all its boolean arguments.

{{#example}}
Q: conjunction of (true; true; true)
A: True
I: singular boolean
{{/example}}

{{#example}}
Q: conjunction of (true; true; false)
A: False
I: singular boolean
{{/example}}

# disjunction of &lt;boolean&gt;

This inspector performs a serial `or` on all its boolean arguments.

{{#example}}
Q: disjunction of (false; false; false)
A: False
I: singular boolean
{{/example}}

{{#example}}
Q: disjunction of (false; false; true)
A: True
I: singular boolean
{{/example}}

# javascript array &lt;string&gt; of &lt;boolean&gt;

No documentation exists.

# &lt;boolean&gt; as boolean

A do-nothing cast that just returns the argument.

# &lt;boolean&gt; as string

Converts the boolean value to a string.

{{#example}}
Q: true as string
A: True
I: singular string
{{/example}}

{{#example}}
Q: false as string
A: False
I: singular string
{{/example}}

# &lt;boolean&gt; = &lt;boolean&gt;

Returns whether the two boolean values are equal.
