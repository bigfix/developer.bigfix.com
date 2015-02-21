---
title: date-and-time
---

{% type year with multiplicity%}

The &lt;year with multiplicity&gt; inspectors deal with year arrays, allowing you to extract unique year values and count them. 

#### Properties

{% property multiplicity of <year with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;year&gt; types.

{% type year%}

The &lt;year&gt; inspectors provide tools for dealing and calculating with year types, which are of the form YYYY, as in 2008.

#### Casts

{% property <year> as string %}

Casts a year as a string.

{% property <year> as integer %}

Casts a year as an integer.

#### Properties

{% property unique value of <year> %}

Returns the unique values of a given list of &lt;year&gt; types, removing duplicates and sorting by value.

{% property minimum of <year> %}

Returns the minimum value from a list of &lt;year&gt; types.

{% property maximum of <year> %}

Returns the maximum value from a list of &lt;year&gt; types.

{% property length of <year> %}

Returns the number of day in the specified year. Leap years have 366 days.Example: length of year &quot;2008&quot; - Returns 366.

{% property leap of <year> %}

Returns a flag indicating whether or not the specified year is a leap year.

{% property extrema of <year> %}

Returns the minimum and maximum extreme values of the given list of &lt;year&gt; types.

{% type time zone with multiplicity%}

The &lt;time zone with multiplicity&gt; inspectors deal with time zone arrays, allowing you to extract unique time zone values and count them. 

#### Properties

{% property multiplicity of <time zone with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time zone&gt; types.

{% type time zone%}

Time zones are used in conjunction with the time object. Time zones have a resolution of 1 minute.

#### Casts

{% property <time zone> as string %}

Returns a string corresponding to the time zone object provided.

#### Properties

{% property unique value of <time zone> %}

Returns the unique values of a given list of &lt;time zone&gt; types, removing duplicates and sorting by value.

{% type time with multiplicity%}

The &lt;time with multiplicity&gt; inspectors deal with time arrays, allowing you to extract unique time values and count them.

#### Properties

{% property multiplicity of <time with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time&gt; types.

{% type time range with multiplicity%}

The &lt;time range with multiplicity&gt; inspectors deal with time-range arrays, allowing you to extract unique time-range values and count them.

#### Properties

{% property multiplicity of <time range with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time range&gt; types.

{% type time range%}

The &lt;time range&gt; inspectors provide tools for dealing and calculating with time-range types, which are of the form &#39;time to time&#39;, such as Tue, 18 Apr 2006 16:46:07 -0400 to Wed, 19 Apr 2006 16:46:07 -0400

#### Casts

{% property <time range> as string %}

Casts a time range as a string.

#### Properties

{% property unique value of <time range> %}

Returns the unique values of a given list of &lt;time range&gt; types, removing duplicates and sorting by value.

{% property start of <time range> %}

Returns the starting date of a time range.

{% property range before <time> of <time range> %}

Returns a new time range, starting from the original time in the specified range and continuting to the specified time. The time must be within the range, or an error will result.

{% property range after <time> of <time range> %}

Returns a new time range, starting from the specified time and continuing through the end of the original range. The time must be within the range, or an error will result.

{% property length of <time range> %}

Returns the time interval (in days, hours, minutes, seconds) between the start and end date of a time range.

{% property initial part <time interval> of <time range> %}

Returns a time range starting with the first date of the time range and lasting for the specified interval.

{% property final part <time interval> of <time range> %}

Returns a time range with the specified interval, but ending on the final date of the time range.

{% property end of <time range> %}

Returns the end date of a time range.

{% type time of day with time zone with multiplicity%}

The &lt;time of day with time zone with multiplicity&gt; inspectors deal with time-of-day-with-time-zone arrays, allowing you to extract unique time-of-day-with-time-zone values and count them. 

#### Properties

{% property multiplicity of <time of day with time zone with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time of day with time zone&gt; types.

{% type time of day with time zone%}

The &lt;time of day with time zone&gt; inspectors provide tools for dealing and calculating with time-of-day-with-time-zone types, which are of the form HH:MM:SS +ZZZZ, as in 12:59:59 -0400. 

#### Casts

{% property <time of day with time zone> as string %}

Converts a &#39;time of day with time zone&#39; object into a string.

#### Properties

{% property zone of <time of day with time zone> %}

Returns the zone associated with the specified time.

{% property unique value of <time of day with time zone> %}

Returns the unique values of a given list of &lt;time of day with time zone&gt; types, removing duplicates and sorting by value.

{% property two digit second of <time of day with time zone> %}

Returns the second of the zoned time of day as text, with values less than 10 having a leading zero.

{% property two digit minute of <time of day with time zone> %}

Returns the minute of the zoned time of day as text, with values less than 10 having a leading zero.

{% property two digit hour of <time of day with time zone> %}

Returns the hour of the zoned time of day as text, with values less than 10 having a leading zero.

{% property time of <time of day with time zone> %}

Returns the time of day, without the time zone information.

{% property second_of_minute of <time of day with time zone> %}

Returns the &#39;seconds after the minute&#39; section of the &#39;time of day with time zone&#39; object.

{% property minute_of_hour of <time of day with time zone> %}

Returns the &#39;minutes after the hour&#39; section of the &#39;time of day with time zone&#39; object.Example: minute_of_hour of time (local time zone) of now - Returns the current minute past the hour.

{% property hour_of_day of <time of day with time zone> %}

Returns the hour section of the &#39;time of day with time zone&#39; object.Example: hour_of_day of time (universal time zone) of now - Returns the hour of day in Greenwich, England.

{% type time of day with multiplicity%}

The &lt;time of day with multiplicity&gt; inspectors deal with time-of-day arrays, allowing you to extract unique time-of-day values and count them. 

#### Properties

{% property multiplicity of <time of day with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time of day&gt; types.

{% type time of day%}

The &lt;time of day&gt; inspectors provide tools for dealing and calculating with time-of-day types, which are of the form HH:MM:SS, as in 12:59:59. 

#### Casts

{% property <time of day> as string %}

Casts the time of day as a string type.

#### Properties

{% property unique value of <time of day> %}

Returns the unique values of a given list of &lt;time of day&gt; types, removing duplicates and sorting by value.

{% property two digit second of <time of day> %}

Extracts the 2-digit second from the time of day.

{% property two digit minute of <time of day> %}

Extracts the 2-digit minute from the time of day.

{% property two digit hour of <time of day> %}

Extracts the 2-digit hour from the time of day.

{% property second_of_minute of <time of day> %}

Extracts the &#39;seconds after the minute&#39; section of the &#39;tim of day&#39; object.

{% property minute_of_hour of <time of day> %}

Returns the &#39;minutes after the hour&#39; section of the &#39;time of day&#39; object.

{% property minimum of <time of day> %}

Returns the minimum value from a list of &lt;time of day&gt; types.

{% property maximum of <time of day> %}

Returns the maximum value from a list of &lt;time of day&gt; types.

{% property hour_of_day of <time of day> %}

Returns the hour section of the &#39;time of day&#39; object.

{% property extrema of <time of day> %}

Returns the minimum and maximum extreme values of the given list of &lt;time of day&gt; types.

{% type time interval with multiplicity%}

The &lt;time interval with multiplicity&gt; inspectors deal with time-interval arrays, allowing you to extract unique time-interval values and count them. 

#### Properties

{% property multiplicity of <time interval with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time interval&gt; types.

{% type time interval%}

Time intervals are used in conjunction with the time object. Time intervals have a resolution of 1 microsecond.

#### Casts

{% property <time interval> as string %}

Returns a string formatted as ddd days, HH:MM:SS.mmmmmmFor example, millisecond as string = &quot; 00:00:00.001&quot;.

#### Properties

{% property unique value of <time interval> %}

Returns the unique values of a given list of &lt;time interval&gt; types, removing duplicates and sorting by value.

{% property sum of <time interval> %}

Returns the sum of the supplied time intervals.

{% property minimum of <time interval> %}

Returns the minimum interval from a list of time intervals.

{% property maximum of <time interval> %}

Returns the maximum interval from a list of time intervals.

{% property extrema of <time interval> %}

Returns the minimum and maximum extreme values of the given list of &lt;time interval&gt; types.

{% property absolute value of <time interval> %}

Returns positive value of the time interval.

{% type time%}

A &lt;time&gt; object is used to identify a point in time. Time objects are used to represent important properties of objects such as the modification time of a file. You can create time objects from literal strings. The format of the string is defined by the MIME standard. The difference between two Time objects may be calculated by subtracting them and yields time intervals. Time intervals may be added or subtracted from time objects to obtain time objects.

#### Casts

{% property <time> as universal string %}

Returns a string in MIME format of the given time object. The format is:ddd, DD mmm YYYY HH:MM:SS +0000The string is formatted using the universal time zone.

{% property <time> as string %}

Same as above.

{% property <time> as local string %}

Returns a string in MIME format of the given time object. The format is: ddd, DD mmm YYYY HH:MM:SS sZZZZ. The string is formatted using the local time zone.

#### Properties

{% property unique value of <time> %}

Returns the unique values of a given list of &lt;time&gt; types, removing duplicates and sorting by value.

{% property time <time zone> of <time> %}

Adjusts the specified time to the given time zone.

{% property minimum of <time> %}

Returns the minimum time from a list of times.

{% property maximum of <time> %}

Returns the maximum time from a list of times.

{% property extrema of <time> %}

Returns the minimum and maximum extreme values of the given list of &lt;time&gt; types.

{% property date <time zone> of <time> %}

Returns the date adjusted for the specified time zone.

{% type number of months with multiplicity%}

The &lt;number of months with multiplicity&gt; inspectors deal with number-of-month arrays, allowing you to extract unique number-of-month values and count them.

#### Properties

{% property multiplicity of <number of months with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;number of month&gt; types.

{% type number of months%}

The &lt;number of months&gt; inspectors provide tools for dealing and calculating with number-of-month types, which are similar to integers, but wih yearly roll-over.

#### Casts

{% property <number of months> as string %}

Converts a number of months type into a string type.

#### Properties

{% property unique value of <number of months> %}

Returns the unique values of a given list of &lt;number of month&gt; types, removing duplicates and sorting by value.

{% property minimum of <number of months> %}

Returns the minimum value from a list of &lt;number of months&gt; types.

{% property maximum of <number of months> %}

Returns the maximum value from a list of &lt;number of months&gt; types.

{% property extrema of <number of months> %}

Returns the minimum and maximum extreme values of the given list of &lt;number of months&gt; types.

{% type month with multiplicity%}

The &lt;month with multiplicity&gt; inspectors deal with month arrays, allowing you to extract unique month values and count them.

#### Properties

{% property multiplicity of <month with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;month&gt; types.

{% type month and year with multiplicity%}

The &lt;month and year with multiplicity&gt; inspectors deal with month-and-year arrays, allowing you to extract unique month-and-year values and count them. 

#### Properties

{% property multiplicity of <month and year with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;month and year&gt; types.

{% type month and year%}

The &lt;month and year&gt; inspectors provide tools for dealing and calculating with month-and-year types, which are of the form month of year, eg., January of 2007.

#### Casts

{% property <month and year> as string %}

Casts a date (in month year format) as a string.

#### Properties

{% property year of <month and year> %}

Returns the year portion of the specified date (in month year format).

{% property unique value of <month and year> %}

Returns the unique values of a given list of &lt;month and year&gt; types, removing duplicates and sorting by value.

{% property month of <month and year> %}

Returns the name of the month corresponding to the given date.Example: month of date &quot;Sun, 02 Apr 2006&quot; + 2*month - Returns June.

{% property minimum of <month and year> %}

Returns the minimum value from a list of &lt;month and year&gt; types.

{% property maximum of <month and year> %}

Returns the maximum value from a list of &lt;month and year&gt; types.

{% property length of <month and year> %}

Returns the number of days in the specified month.Example: length of (month &quot;February&quot; &amp; year &quot;2004&quot;) - Returns 29.

{% property first wednesday of <month and year> %}

Finds the date corresponding to the first Wednesday of any given month and year.

{% property first tuesday of <month and year> %}

Finds the date corresponding to the first Tuesday of any given month and year.

{% property first thursday of <month and year> %}

Finds the date corresponding to the first Thursday of any given month and year.

{% property first sunday of <month and year> %}

Finds the date corresponding to the first Sunday of any given month and year.

{% property first saturday of <month and year> %}

Finds the date corresponding to the first Saturday of any given month and year.

{% property first monday of <month and year> %}

Finds the date corresponding to the first Monday of any given month and year.

{% property first friday of <month and year> %}

Finds the date corresponding to the first Friday of any given month and year.

{% property first <day of week> of <month and year> %}

Finds the specific date corresponding to the first day of the week (eg. Friday) for a given month and year.Example: first monday of april of 2020 - Returns the date of the first Monday in April 2020, which is Mon, 06 Apr 2020.

{% property extrema of <month and year> %}

Returns the minimum and maximum extreme values of the given list of &lt;month and year&gt; types.

{% type month%}

The &lt;month&gt; inspectors provide tools for dealing and calculating with month types, which are of the form January, February, and more. This set of inspectors includes each month as a self-named object.

#### Casts

{% property <month> as two digits %}

Converts the month into a two digit number (01 - 12).Example: january as two digits - Returns 01.

{% property <month> as three letters %}

Converts the given month into a 3-letter string (Jan, Feb, etcetera.).Example: january as three letters - Returns Jan.

{% property <month> as string %}

Converts the given month into a string value.

{% property <month> as integer %}

Converts the given month into an integer (1-12).

#### Properties

{% property unique value of <month> %}

Returns the unique values of a given list of &lt;month&gt; types, removing duplicates and sorting by value.

{% property minimum of <month> %}

Returns the minimum value from a list of &lt;month&gt; types.

{% property maximum of <month> %}

Returns the maximum value from a list of &lt;month&gt; types.

{% property extrema of <month> %}

Returns the minimum and maximum extreme values of the given list of &lt;month&gt; types.

{% type day of year with multiplicity%}

The &lt;day of year with multiplicity&gt; inspectors deal with day-of-year arrays, allowing you to extract unique day-of-year values and count them. 

#### Properties

{% property multiplicity of <day of year with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;day of year&gt; types.

{% type day of year%}

The &lt;day of year&gt; inspectors provide tools for dealing and calculating with day-of-month types, which are of the form Sun, 01 Apr 2007.

#### Casts

{% property <day of year> as string %}

Casts a day of the year as a string type.

#### Properties

{% property unique value of <day of year> %}

Returns the unique values of a given list of &lt;day of year&gt; types, removing duplicates and sorting by value.

{% property month of <day of year> %}

Returns the month portion of the given date (in month day format).

{% property minimum of <day of year> %}

Returns the minimum value from a list of &lt;day of year&gt; types.

{% property maximum of <day of year> %}

Returns the maximum value from a list of &lt;day of year&gt; types.

{% property extrema of <day of year> %}

Returns the minimum and maximum extreme values of the given list of &lt;day of year&gt; types.

{% property day of <day of year> %}

Returns the day of the month of the specified date.Example: day of July 4 - Returns 4.

{% type day of week with multiplicity%}

The &lt;day of week with multiplicity&gt; inspectors deal with day-of-week arrays, allowing you to extract unique day-of-week values and count them.

#### Properties

{% property multiplicity of <day of week with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;day of week&gt; types.

{% type day of week%}

The &lt;day of week&gt; inspectors provide tools for dealing and calculating with day-of-week types, which include Monday, Tuesday, and more. This set of inspectors includes each day as a self-named object.

#### Casts

{% property <day of week> as three letters %}

Casts the day of week as a three-letter abbreviation (Mon, Tue, etcetera.).Example: Saturday as three letters - Returns Sat.

{% property <day of week> as string %}

Casts the day of week as a string.

#### Properties

{% property unique value of <day of week> %}

Returns the unique values of a given list of &lt;day of week&gt; types, removing duplicates and sorting by value.

{% type day of month with multiplicity%}

The &lt;day of month with multiplicity&gt; inspectors deal with day-of-month arrays, allowing you to extract unique day-of-month values and count them.

#### Properties

{% property multiplicity of <day of month with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;day of month&gt; types.

{% type day of month%}

The &lt;day of month&gt; inspectors provide tools for dealing and calculating with day-of-month types, which are numbers from 1-31.

#### Casts

{% property <day of month> as two digits %}

Cast a day of month type as a two-digit number.

{% property <day of month> as string %}

Cast a day of month type as a string.

{% property <day of month> as integer %}

Cast a day of month type as an integer.Example: current day_of_month as integer - Returns the day of the month as an integer.

#### Properties

{% property unique value of <day of month> %}

Returns the unique values of a given list of &lt;day of month&gt; types, removing duplicates and sorting by value.

{% property minimum of <day of month> %}

Returns the minimum value from a list of &lt;day of month&gt; types.

{% property maximum of <day of month> %}

Returns the maximum value from a list of &lt;day of month&gt; types.

{% property extrema of <day of month> %}

Returns the minimum and maximum extreme values of the given list of &lt;day of month&gt; types.

{% type date with multiplicity%}

The &lt;date with multiplicity&gt; inspectors deal with arrays of dates, allowing you to extract unique dates and count them.

#### Properties

{% property multiplicity of <date with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;date&gt; types.

{% type date%}

The &lt;date&gt; objects are the various inspectors that access the date types.

#### Casts

{% property <date> as string %}

Cast a date type as a string.

#### Properties

{% property year of <date> %}

Returns the year, extracted from the given date.

{% property unique value of <date> %}

Returns the unique values and counts of a given list of &lt;date&gt; types, removing duplicates and sorting by value.

{% property month_and_year of <date> %}

Formats the specified date in month year format, eg. March 2012.

{% property month of <date> %}

Returns the month derived from the given date.

{% property minimum of <date> %}

Returns the minimum value from a list of &lt;date&gt; types.

{% property maximum of <date> %}

Returns the maximum value from a list of &lt;date&gt; types.

{% property extrema of <date> %}

Returns the minimum and maximum extreme values of the given list of &lt;date&gt; types.

{% property day_of_year of <date> %}

Extracts the day of year from the specified date, in the &#39;Month Day&#39; format.

{% property day_of_week of <date> %}

Extracts the day of the week (Monday, Tuesday, etcetera) from the specified date.

{% property day_of_month of <date> %}

Extracts the day of the month from the specified date.

