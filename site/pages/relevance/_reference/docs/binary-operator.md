# type: binary operator

The `binary operator` type represents a binary operator in the Relevance Language. This is a form of [reflection](https://en.wikipedia.org/wiki/Reflection_%28computer_programming%29) that allows you to see what inspectors are available and how to use them.

# left operand type of &lt;binary operator&gt; : type

Returns the type on the left side of the binary operator.

{% qna %}
Q: binary operators whose (left operand type of it is type "time zone")
A: <time zone> & <time of day>: time of day with time zone
A: <time zone> & <time of day with time zone>: time of day with time zone
A: <time zone> + <time interval>: time zone
A: <time zone> - <time interval>: time zone
A: <time zone> - <time zone>: time interval
A: <time zone> = <time zone>: boolean
{% endqna %}

# name of &lt;binary operator&gt; : string

Returns the name of the operation performend by the binary operator.

{% qna %}
Q: names of binary operators whose (left operand type of it is type "time zone")
A: concatenate
A: concatenate
A: plus
A: minus
A: minus
A: equal
{% endqna %}

# result type of &lt;binary operator&gt; : type

Returns the type that the binary operator produces.

{% qna %}
Q: result types of binary operators whose (left operand type of it is type "time zone")
A: time of day with time zone
A: time of day with time zone
A: time zone
A: time zone
A: time interval
A: boolean
{% endqna %}

# right operand type of &lt;binary operator&gt; : type

Returns the type on the right side of the binary operator.

{% qna %}
Q: binary operators whose (right operand type of it is type "time zone")
A: <time of day> & <time zone>: time of day with time zone
A: <time of day with time zone> & <time zone>: time of day with time zone
A: <time interval> + <time zone>: time zone
A: <time zone> - <time zone>: time interval
A: <time zone> = <time zone>: boolean
{% endqna %}

# symbol of &lt;binary operator&gt; : string

Returns the phrase or punctuation mark used to invoke the operator.

{% qna %}
Q: unique values of symbols of binary operators
A: %
A: &
A: *
A: +
A: -
A: /
A: <
A: <=
A: =
A: contains
A: ends with
A: starts with
{% endqna %}

# &lt;binary operator&gt; as string : string

Returns a short description of the operator.

{% qna %}
Q: binary operators whose (it as string contains "regular")
A: <string> contains <regular expression>: boolean
A: <string> = <regular expression>: boolean
A: <regular expression> = <string>: boolean
A: <string> starts with <regular expression>: boolean
A: <string> ends with <regular expression>: boolean
{% endqna %}
