# type: yaml value

The `yaml value` type represents a [YAML](https://en.wikipedia.org/wiki/YAML) value. This can be any of the following:
- **Null:** Represented as `null`, `~` or with no value at all (i.e. leaving a key value empty)
- **Boolean:** Represented as `true` or `false`
- **Integer:** an integer number.
- **Floating Point:** a floating-point number, written in a human-readable format, with a dot separating the fractional part.
- **String:** A [Unicode](http://en.wikipedia.org/wiki/Unicode) string. YAML supports single-quoted, double-quoted, or unquoted strings. Escaping is done with backslashes in double-quoted strings. An empty string (e.g. `''`) is different from `Null`.
- **Array (Sequence):** A sequence of values, represented as a list with each item prefixed by a dash `-` and aligned at the same indentation level. The values do not need to be of the same type.
- **Object (Mapping):** A collection of key-value pairs, where keys are strings and values can be any valid YAML value. These mappings are separated by a colon `:` and structured using indentation to denote hierarchy. Keys must be unique within a mapping.

In our implementation, we use our own definitions of the terms "key" and "value".

We store the entire "YAML object" in a `yaml value`.
Each key-value pair inside it is a `yaml key`.
The "key" in a key-value pair is just a `string` and we refer to it as the "name of the key".
The "value" in a key-value pair is another `yaml value`.

Our YAML parser is implemented using the `yaml-cpp` library, available at [https://github.com/jbeder/yaml-cpp](https://github.com/jbeder/yaml-cpp).

For more information, see the [YAML key page](https://developer.bigfix.com/relevance/reference/yaml-key.html).

# element &lt;integer&gt; of &lt;yaml value&gt; : yaml value

Returns the nth value in a YAML array.

{% qna %}
Q: element 2 of yaml of "[a, b, c, d]"
A: c
{% endqna %}

# element of &lt;yaml value&gt; : yaml value

Returns each value in a YAML array.

{% qna %}
Q: elements of yaml of "[1, 2, 3]"
A: 1
A: 2
A: 3
{% endqna %}

# key &lt;string&gt; of &lt;yaml value&gt; : yaml key

Returns the key-value pair corresponding to the specified key, in a YAML object.

{% qna %}
Q: value of key "abc" of yaml of "abc: 123"
A: 123
{% endqna %}

# key of &lt;yaml value&gt; : yaml key

Returns all key-value pairs in a YAML object.

{% qna %}
Q: keys of yaml of "{a: 1, b: 2}"
A: a : 1
A: b : 2
{% endqna %}

# path &lt;string&gt; of &lt;yaml value&gt; : yaml value

Returns a `yaml value` object representing the data retrieved by the specified YAMLPath expression.

YAML path expressions can use the "dot notation" or the "bracket notation". The bracket notation is useful for accessing keys that include special characters, such as the period and space, which cannot be expressed with the dot-notation. To escape a character, use '\' before it.

Example of YAML path using the dot notation.
{% qna %}
Q: path "$.domain[0]" of yaml of file "./test.yaml"
A: devops
{% endqna %}

Example of YAML path using the bracket notation.
{% qna %}
Q: path "$['tutorial'][0]['yaml']['name']" of yaml of file "./test.yaml"
A: YAML Ain't Markup Language
{% endqna %}

Example of YAML path using the bracket notation and an escaped quote character.
{% qna %}
Q: path "$['Steve\'s iPhone']" of yaml of "{ %22Steve's iPhone%22 : 4 }"
A: 4
{% endqna %}

# type of &lt;yaml value&gt; : string

Returns the type of data stored in the `yaml value` object. It outputs one of the following strings:
- yaml boolean
- yaml float
- yaml integer
- yaml mapping
- yaml null
- yaml sequence
- yaml string

{% qna %}
Q: type of yaml of "{a: [a, b, c, d]}"
A: YAML Map
{% endqna %}

# &lt;yaml value&gt; as boolean : boolean

Casts a YAML value as a boolean. The value type must be `boolean`.

{% qna %}
Q: yaml of "true" as boolean
A: True
{% endqna %}

# &lt;yaml value&gt; as float : floating point

Casts a YAML value as a float. The value type must be `float`.

{% qna %}
Q: yaml of "3.14" as float
A: 3.14000010490417
{% endqna %}

# &lt;yaml value&gt; as integer : integer

Casts a YAML value as an integer. The value type must be `integer`.

{% qna %}
Q: yaml of "1" as integer
A: 1
{% endqna %}

# &lt;yaml value&gt; as string : string

Returns a string representation of the YAML value.

{% qna %}
Q: yaml of "name" as string
A: name
{% endqna %}

# &lt;yaml value&gt; = &lt;yaml value&gt; : boolean

Returns whether the YAML values are equal.
When comparing two YAML **arrays**, this operator will only yield true if they contain the same elements **in the same order**.
When comparing two YAML **objects**, this operator will yield true if they contain the same key-value pairs, **regardless of their order**.

This example shows the operator used to compare two YAML arrays.
{% qna %}
Q: yaml value of "key1: [a1, a2, a3]" = yaml of "key1: [a1, a2, a3]"
A: True
{% endqna %}

This example shows the operator used to compare two YAML objects.
{% qna %}
Q: yaml of "{Bacon:Cheeseburger, Brazilian:Steak}" = yaml of "{Brazilian:Steak, Bacon:Cheeseburger}"
A: True
{% endqna %}
