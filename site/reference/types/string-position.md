# type: string position

String position works in combination with the string and substring data types. A string position is a point within a string. It can be compared to an integer (which it is derived from), but it also acts as a pointer within a string so that the preceding and following text can be extracted.

# following text of &lt;string position&gt; : substring

Returns the substring following the position in the string.

{{#example}}
Q: following text of position 5 of "0123456789"
A: 56789
{{/example}}

# preceding text of &lt;string position&gt; : substring

Returns the substring preceding the position in the string.

{{#example}}
Q: preceding text of position 5 of "0123456789"
A: 01234
{{/example}}
