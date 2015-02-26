# time

A &lt;time&gt; object is used to identify a point in time. Time objects are used to represent important properties of objects such as the modification time of a file. You can create time objects from literal strings. The format of the string is defined by the MIME standard. The difference between two Time objects may be calculated by subtracting them and yields time intervals. Time intervals may be added or subtracted from time objects to obtain time objects.

# date &lt;time zone&gt; of &lt;time&gt;

Returns the date adjusted for the specified time zone.

# extrema of &lt;time&gt;

Returns the minimum and maximum extreme values of the given list of &lt;time&gt; types.

# maximum of &lt;time&gt;

Returns the maximum time from a list of times.

# minimum of &lt;time&gt;

Returns the minimum time from a list of times.

# time &lt;time zone&gt; of &lt;time&gt;

Adjusts the specified time to the given time zone.

# unique value of &lt;time&gt;

Returns the unique values of a given list of &lt;time&gt; types, removing duplicates and sorting by value.

# &lt;time&gt; as local string

Returns a string in MIME format of the given time object. The format is: ddd, DD mmm YYYY HH:MM:SS sZZZZ. The string is formatted using the local time zone.

# &lt;time&gt; as string

Same as above.

# &lt;time&gt; as universal string

Returns a string in MIME format of the given time object. The format is:ddd, DD mmm YYYY HH:MM:SS +0000The string is formatted using the universal time zone.
