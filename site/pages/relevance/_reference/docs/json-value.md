# type: json value

The `json value` type represents a [JSON](https://en.wikipedia.org/wiki/JSON) value. This can be any of the following:
- String (double-quoted [Unicode](http://en.wikipedia.org/wiki/Unicode), with backslack escaping)
- Number ([double precision floating-point format](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) in JavaScript)
- Object (an unordered collection of key:value pairs with the ':' character separating the key and the value, comma separated and enclosed in curly braces. The keys must be strings and should be distinct from each other.)
- Array (an ordered sequence of values, comma-separated and enclosed in square brackets; the values do not need to be of the same type)
- Boolean (`true` or `false`)
- `null` (empty)

# element &lt;integer&gt; of &lt;json value&gt; : json value

Return the nth value in an array.

{% qna %}
Q: element 1 of json of "[1,2,3]"
A: 2
{% endqna %}

# element of &lt;json value&gt; : json value

Returns each value in an array.

{% qna %}
Q: elements of json of "[1,2,3]"
A: 1
A: 2
A: 3
{% endqna %}

# key &lt;string&gt; of &lt;json value&gt; : json key

Returns a key-value pair in a JSON object.

{% qna %}
Q: value of key "foo" of json of "%7b%22foo%22: [1, 2, 3]%7d"
A: bar
{% endqna %}

# key of &lt;json value&gt; : json key

Returns all key-value pairs in a JSON object.

{% qna %}
Q: (name of it, value of it) of keys of json of "%7b%22foo%22: %22bar%22%7d"
A: foo, bar
{% endqna %}

# path &lt;string&gt; of &lt;json value&gt; : json value

Returns the JSON value at the specified [JSONPath](http://goessner.net/articles/JsonPath/).

JSON path expressions can use the *dot*-notation:

{% qna %}
Q: path "$.phoneNumber[1].type" of json of <Example>
A: fax
{% endqna %}

or the *bracket*-notation:

{% qna %}
Q: path "$['phoneNumber'][1]['type']" of json of <Example>
A: fax
{% endqna %}

The bracket notation is useful for accessing keys that include special characters, such as the period and space, which cannot be expressed with the dot-notation. To access a path that includes a single quote, insert a '\' before the single quote:

{% qna %}
Q: path "$['Steve\'s iPhone']" of json of "{ "Steve's iPhone" : 4 }"
A: 4 
{% endqna %}

# type of &lt;json value&gt; : string

Returns the type of the JSON object.

{% qna %}
Q: type of json of "[1, 2, 3]"
A: json array
{% endqna %}

# &lt;json value&gt; as boolean : boolean

Cast a JSON value as a boolean. The value type must be `json bool`.

{% qna %}
Q: element 1 of json of "[1.25, true, 3]" as boolean
A: True
{% endqna %}

# &lt;json value&gt; as float : floating point

Cast a JSON value as a float. The value type must be `json float`.

{% qna %}
Q: element 0 of json of "[1.25, 2, 3]" as float
A: 1.25000000000000
{% endqna %}

# &lt;json value&gt; as integer : integer

Cast a JSON value as an integer. The value type must be `json integer`.

{% qna %}
Q: element 0 of json of "[1, 2, 3]" as integer
A: 1
{% endqna %}

# &lt;json value&gt; as string : string

Returns a string representation of the JSON value.

{% qna %}
Q: json of "[1, 2, 3]" as string
A: [1,2,3]
{% endqna %}

# &lt;json value&gt; = &lt;json value&gt; : boolean

Returns whether the JSON values are equal.

The equals operator will only yield ture between two JSON Arrays if botht the elements *and* the orderings are equal.
{% qna %}
Q: json of "[1, 2, 3]" = json of "[1, 2, 3]"
A: True

Q: json of "[1, 2, 3]" = json of "[1, 3, 2]"
A: False
{% endqna %}

The equals operator will determine equality by checking each key and value of the object. **The ordering of the key value pairs does not matter in equality**.

{% qna %}
Q: json of "{"Bacon":"Cheeseburger", "Brazilian":"Steak"}" equals json of "{"Brazilian":"Steak", "Bacon":"Cheeseburger"}"
A: True
{% endqna %}
