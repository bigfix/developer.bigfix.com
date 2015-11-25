# type: json key

The `json key` type represents a key-value pair in a [JSON](https://en.wikipedia.org/wiki/JSON) object.

For example, in the following JSON object `foo` is the key and `bar` is the value:

    {
      "foo": "bar"
    }

# name of &lt;json key&gt; : string

Returns the name of the key-value pair.

{% qna %}
Q: names of keys of json of "%7b%22foo%22: %22bar%22%7d"
A: foo
{% endqna %}

# value of &lt;json key&gt; : json value

Returns the value of the key-value pair.

{% qna %}
Q: values of keys of json of "%7b%22foo%22: %22bar%22%7d"
A: bar
{% endqna %}

# &lt;json key&gt; as string : string

Returns a string like `key : value` for the key-value pair.

{% qna %}
Q: keys of json of "%7b%22foo%22: %22bar%22%7d"
A: foo : bar
{% endqna %}

# &lt;json key&gt; = &lt;json key&gt; : boolean

Returns whether two key-value pairs are equal.

{% qna %}
Q: key of json of "%7b%22foo%22: %22bar%22%7d" = key of json of "%7b%22foo%22: %22bar%22%7d"
A: True
{% endqna %}
