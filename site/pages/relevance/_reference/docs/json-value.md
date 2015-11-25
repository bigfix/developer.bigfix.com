# type: json value

The `json value` type represents a [JSON](https://en.wikipedia.org/wiki/JSON) value. This can be an object, array, string, boolean, integer, or floating point number.

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

{% qna %}
Q: path "$.foo[2]" of json of "%7b%22foo%22: [123, 456, 789]%7d"
A: 789
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

{% qna %}
Q: json of "[1, 2, 3]" = json of "[1, 2, 3]"
A: True
{% endqna %}
