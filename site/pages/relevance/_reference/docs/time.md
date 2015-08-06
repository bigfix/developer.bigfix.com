# type: time

A &lt;time&gt; object is used to identify a point in time. Time objects are used to represent important properties of objects such as the modification time of a file. You can create time objects from literal strings. The format of the string is defined by the MIME standard. The difference between two Time objects may be calculated by subtracting them and yields time intervals. Time intervals may be added or subtracted from time objects to obtain time objects.

# date &lt;time zone&gt; of &lt;time&gt; : date

Returns the date adjusted for the specified time zone.

{% qna %}
Q: date (universal time zone) of now
A: Wed, 18 Mar 2015
{% endqna %}

# extrema of &lt;time&gt; : ( time, time )

Returns the minimum and maximum extreme values of the given list of &lt;time&gt; types.

# maximum of &lt;time&gt; : time

Returns the maximum time from a list of times.

# minimum of &lt;time&gt; : time

Returns the minimum time from a list of times.

# time &lt;time zone&gt; of &lt;time&gt; : time of day with time zone

Adjusts the specified time to the given time zone.

# unique value of &lt;time&gt; : time with multiplicity

Returns the unique values of a given list of &lt;time&gt; types, removing duplicates and sorting by value.

# &lt;time&gt; as local string : string

Returns a string in MIME format of the given time object. The format is: ddd, DD mmm YYYY HH:MM:SS sZZZZ. The string is formatted using the local time zone.

# &lt;time&gt; as string : string

Same as above.

# &lt;time&gt; as universal string : string

Returns a string in MIME format of the given time object. The format is:ddd, DD mmm YYYY HH:MM:SS +0000The string is formatted using the universal time zone.

# &lt;time&gt; &amp; &lt;time&gt; : time range

Concatenates two times into a time range, with the earliest date first and the latest date last.Example: time "Sat, 01 Jan 2000 00:00:00 -0400" &amp; now - Returns a time range from the beginning of the millennia to now, eg:Sat, 01 Jan 2000 00:00:00 -0400 to Sat, 08 Apr 2006 20:39:51 -0400.

# &lt;time&gt; &lt; &lt;time&gt; : boolean

No documentation exists.

# &lt;time&gt; &lt;= &lt;time&gt; : boolean

No documentation exists.

# &lt;time&gt; - &lt;time&gt; : time interval

Subtract one time from another and return a time interval

# &lt;time&gt; = &lt;time&gt; : boolean

No documentation exists.
