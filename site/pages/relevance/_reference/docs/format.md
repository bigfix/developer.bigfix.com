# type: format

The `format` inspectors make it easier for content authors to create localizable content. Similar in concept to the C printf function, they allow you to embed arguments into a formatting string, which is followed by the argument values themselves.

The arguments are numbered and enclosed in curly brackets `{0}` and the values to be substituted are preceded by a plus sign `+`.

{% qna %}
Q: format "At {1}, user {0} is logged on." + name of current user + now
A: At 9/27/2010 3:03:26 PM, user Scott is logged on.
{% endqna %}

# &lt;format&gt; as string : string

Returns the formatted output as a string type.

{% qna %}
Q: (format "Hello, {0}!" + "world") as string
A: Hello, world!
{% endqna %}

# &lt;format&gt; + &lt;format&gt; : format

This inspector allows you to embed a format inside another one.

{% qna %}
Q: format "Logged in: {0}" + (format "user {0}" + "bearmo")
A: Logged in: user bearmo
{% endqna %}
