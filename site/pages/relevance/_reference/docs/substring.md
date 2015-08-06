# type: substring

A substring object is a part of a larger string and has all the properties of a string, as well as extra methods and properties.

# end of &lt;substring&gt; : string position

Returns the position of the substring within its containing string.

{% qna %}
Q: end of first "be" of "to be or not to be"
A: 5
{% endqna %}

# following text of &lt;substring&gt; : substring

Returns the string following the substring.

{% qna %}
Q: following text of last "." of "log.txt"
A: txt
{% endqna %}

# preceding text of &lt;substring&gt; : substring

Returns the string preceding the substring.

{% qna %}
Q: preceding text of last "." of "log.txt"
A: log
{% endqna %}

# start of &lt;substring&gt; : string position

Returns the position within the string of the substring.

{% qna %}
Q: start of substring "or" of "to be or not to be"
A: 6
{% endqna %}
