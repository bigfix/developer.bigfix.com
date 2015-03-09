# type: substring

A substring object is a part of a larger string and has all the properties of a string, as well as extra methods and properties.

# end of &lt;substring&gt;

Returns the position of the substring within its containing string.

{{#example}}
Q: end of first "be" of "to be or not to be"
A: 5
{{/example}}

# following text of &lt;substring&gt;

Returns the string following the substring.

{{#example}}
Q: following text of last "." of "log.txt"
A: txt
{{/example}}

# preceding text of &lt;substring&gt;

Returns the string preceding the substring.

{{#example}}
Q: preceding text of last "." of "log.txt"
A: log
{{/example}}

# start of &lt;substring&gt;

Returns the position within the string of the substring.

{{#example}}
Q: start of substring "or" of "to be or not to be"
A: 6
{{/example}}
