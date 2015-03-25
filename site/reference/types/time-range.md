# type: time range

The &amp;lt;time range&amp;gt; inspectors provide tools for dealing and calculating with time-range types, which are of the form &amp;#39;time to time&amp;#39;, such as Tue, 18 Apr 2006 16:46:07 -0400 to Wed, 19 Apr 2006 16:46:07 -0400

# end of &lt;time range&gt; : time

Returns the end date of a time range.

# final part &lt;time interval&gt; of &lt;time range&gt; : time range

Returns a time range with the specified interval, but ending on the final date of the time range.

# initial part &lt;time interval&gt; of &lt;time range&gt; : time range

Returns a time range starting with the first date of the time range and lasting for the specified interval.

# length of &lt;time range&gt; : time interval

Returns the time interval (in days, hours, minutes, seconds) between the start and end date of a time range.

# range after &lt;time&gt; of &lt;time range&gt; : time range

Returns a new time range, starting from the specified time and continuing through the end of the original range. The time must be within the range, or an error will result.

# range before &lt;time&gt; of &lt;time range&gt; : time range

Returns a new time range, starting from the original time in the specified range and continuting to the specified time. The time must be within the range, or an error will result.

# start of &lt;time range&gt; : time

Returns the starting date of a time range.

# unique value of &lt;time range&gt; : time range with multiplicity

Returns the unique values of a given list of &amp;lt;time range&amp;gt; types, removing duplicates and sorting by value.

# &lt;time range&gt; as string : string

Casts a time range as a string.

# &lt;time range&gt; &amp; &lt;time range&gt; : time range

Returns the smallest range that contains both ot the specified ranges (same as &amp;lt;time range&amp;gt; + &amp;lt;time range&amp;gt;).

# &lt;time range&gt; * &lt;time range&gt; : time range

Returns the intersection of the two specified time ranges, if one exists.Example: (week &amp;amp; now) * (day &amp;amp; now) - Returns a one-day time range (from yesterday to today).

# &lt;time range&gt; + &lt;time range&gt; : time range

Returns the smallest range that contains both ot the specified ranges (same as &amp;lt;time range&amp;gt; &amp;amp; &amp;lt;time range&amp;gt;).Example: (week &amp;amp; now) + (day &amp;amp; now) - Returns a one-week time range (from a week ago to today).

# &lt;time range&gt; = &lt;time range&gt; : boolean

Compares two time range types and returns `True` if they are equal.

# &lt;time range&gt; contains &lt;time range&gt; : boolean

No documentation exists.
