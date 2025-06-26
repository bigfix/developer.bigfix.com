# type: yaml key

The `yaml key` type represents a key-value pair in a [YAML](https://en.wikipedia.org/wiki/YAML) object.

For example, in the following YAML object `foo` is the key and `bar` is the value:
```
{
  "foo": "bar"
}
```

Since YAML allows for nesting, the value in a key-value pair could also be another YAML object.
For example `{ "foo": { "bar": "baz" } }`, or `{ "pairs": { three: 3, pi: 3.14 } }`.

However, in our implementation, we adopt a slightly different definition of the terms "key" and "value".
The entire "YAML object" is a `yaml value`.
Each key-value pair inside it is a `yaml key`.
The "key" in a key-value pair is just a `string` and we refer to it as the "name of the key".
The "value" in a key-value pair is another `yaml value`.

If a `yaml value` only contains a simple value, it can be cast to a base type.
Otherwise, it contains other `yaml key` key-value pairs.

The whole `{ "foo": "bar" }` is represented as a `yaml value`.
The key-pair `"foo": "bar"` inside it is represented as a `yaml key`.
The key `"foo"` is returned as the `name of` the `yaml key` and it is represented as a `string`.
The value `"foo"` is returned as the `value of` the `yaml key` and it is represented as `yaml key`, but it can be cast to `string` because that is what it contains.

The parser also supports the inline (non-indented) versions of **objects** and **arrays**, allowing YAML structures to be defined in a more compact format.

The YAML Inspector uses the external library `yaml-cpp` (version 0.8.0), available at [https://github.com/jbeder/yaml-cpp](https://github.com/jbeder/yaml-cpp), for parsing YAML content.

**Note:** For certain characters, such as double quotes, newline characters, and others, we use URL encoding (or percent encoding) to ensure proper handling within the text.

For more details about how the `yaml value` is represented, refer to the [YAML value page](https://developer.bigfix.com/relevance/reference/yaml-value.html).

# name of &lt;yaml key&gt; : string

Returns the name of the key in a key-value pair.

{% qna %}
Q: names of keys of yaml of "{a: 1, b: 2}"
A: a
A: b
{% endqna %}

# value of &lt;yaml key&gt; : yaml value

Returns the value of the key-value pair.

{% qna %}
Q: values of keys of yaml of "{a: 1, b: 2}"
A: 1
A: 2
{% endqna %}

# &lt;yaml key&gt; as string : string

Returns a string like `key : value` for the key-value pair.

In this example, the "as string" is implied.

{% qna %}
Q: keys of yaml of "name: bigfix"
A: name : bigfix
{% endqna %}

# &lt;yaml key&gt; = &lt;yaml key&gt; : boolean

Returns whether two key-value pairs are equal.

{% qna %}
Q: key of yaml of "key1: [a1, a3, a2]" = key of yaml of "key1: [a1, a2, a3]"
A: False
Q: key of yaml of "key1: [a1, a2, a3]" = key of yaml of "key1: [a1, a2, a3]"
A: True
{% endqna %}
