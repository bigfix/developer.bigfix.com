# time

A &lt;time&gt; object is used to identify a point in time. Time objects are used to represent important properties of objects such as the modification time of a file. You can create time objects from literal strings. The format of the string is defined by the MIME standard. The difference between two Time objects may be calculated by subtracting them and yields time intervals. Time intervals may be added or subtracted from time objects to obtain time objects.

# date [time zone] of [time]

Returns the date adjusted for the specified time zone.

# extrema of [time]

Returns the minimum and maximum extreme values of the given list of &lt;time&gt; types.

# maximum of [time]

Returns the maximum time from a list of times.

# minimum of [time]

Returns the minimum time from a list of times.

# time [time zone] of [time]

Adjusts the specified time to the given time zone.

# unique value of [time]

Returns the unique values of a given list of &lt;time&gt; types, removing duplicates and sorting by value.

# [time] as local string

Returns a string in MIME format of the given time object. The format is: ddd, DD mmm YYYY HH:MM:SS sZZZZ. The string is formatted using the local time zone.

# [time] as string

Same as above.

# [time] as universal string

Returns a string in MIME format of the given time object. The format is:ddd, DD mmm YYYY HH:MM:SS +0000The string is formatted using the universal time zone.
