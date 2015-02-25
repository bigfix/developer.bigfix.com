# time of day with time zone

The &lt;time of day with time zone&gt; inspectors provide tools for dealing and calculating with time-of-day-with-time-zone types, which are of the form HH:MM:SS +ZZZZ, as in 12:59:59 -0400.

# hour_of_day of [time of day with time zone]

Returns the hour section of the &#39;time of day with time zone&#39; object.Example: hour_of_day of time (universal time zone) of now - Returns the hour of day in Greenwich, England.

# minute_of_hour of [time of day with time zone]

Returns the &#39;minutes after the hour&#39; section of the &#39;time of day with time zone&#39; object.Example: minute_of_hour of time (local time zone) of now - Returns the current minute past the hour.

# second_of_minute of [time of day with time zone]

Returns the &#39;seconds after the minute&#39; section of the &#39;time of day with time zone&#39; object.

# time of [time of day with time zone]

Returns the time of day, without the time zone information.

# two digit hour of [time of day with time zone]

Returns the hour of the zoned time of day as text, with values less than 10 having a leading zero.

# two digit minute of [time of day with time zone]

Returns the minute of the zoned time of day as text, with values less than 10 having a leading zero.

# two digit second of [time of day with time zone]

Returns the second of the zoned time of day as text, with values less than 10 having a leading zero.

# unique value of [time of day with time zone]

Returns the unique values of a given list of &lt;time of day with time zone&gt; types, removing duplicates and sorting by value.

# zone of [time of day with time zone]

Returns the zone associated with the specified time.

# [time of day with time zone] as string

Converts a &#39;time of day with time zone&#39; object into a string.
