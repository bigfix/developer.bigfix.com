# type: osxvalue

The &amp;lt;osxvalue&amp;gt; inspectors provide access to the elements of a dictionary.

# array of &lt;osxvalue&gt; : array

Casts the osxvalue (which is essentially untyped) to an array.

# boolean of &lt;osxvalue&gt; : boolean

Casts the osxvalue (which is essentially untyped) to a boolean.

# cstring of &lt;osxvalue&gt; : string

Strips off any trailing null from an osxvalue, returning a proper string from the dictionary.Note: In Version 6.0.9.54, the plural inspector is misspelled as csrings.

# data of &lt;osxvalue&gt; : string

Casts the specified osxvalue to a string.

# date of &lt;osxvalue&gt; : time

Casts the osxvalue (essentially untyped) to a date.

# dictionary of &lt;osxvalue&gt; : dictionary

Casts the osxvalue (essentially untyped) to a dictionary.

# integer of &lt;osxvalue&gt; : integer

Casts the osxvalue (essentially untyped) to an integer.

# string of &lt;osxvalue&gt; : string

The string of the osxvalue, cast to a string if necessary.

# type of &lt;osxvalue&gt; : string

The type of the osxvalue (for example boolean, string, integer, data, date, array, dictionary, or unknown type).
