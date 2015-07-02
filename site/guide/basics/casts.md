# Casts

Values can be converted into other types, making it easy to create, concatenate and combine inspectors into complex expressions.

We can convert strings into integers:

{{#example}}
Q: "500" as integer
A: 500
{{/example}}

We can use the converted integers in math:

{{#example}}
Q: ("500" as integer) * 5
A: 2500
{{/example}}

We can convert integers to strings:

{{#example}}
Q: 500 as string
A: 500
{{/example}}

... and we can use concatenate to add text to our integers that we converted to strings:

{{#example}}
Q: 500 as string & " hertz"
A: 500 hertz
{{/example}}

We can work with dates:

{{#example}}
Q: "01 Apr 2020" as date
A: Wed, 01 Apr 2020
{{/example}}

We can turn the number of a month back into the name of the month:

{{#example}}
Q: 5 as month
A: May
{{/example}}

... and shorten the name of the month to its 3 or 4 letter abbreviation:

{{#example}}
Q: january as three letters
A: Jan
{{/example}}


Note:
The Relevance Debugger casts values to strings in order to print them. If an
object does not result in a string, the debugger uses the `as string` method of
the object to turn it into a string. If the object can’t be cast as a string, an
error message is displayed.
