---
title: date-and-time
---

## year with multiplicity

The &lt;year with multiplicity&gt; inspectors deal with year arrays, allowing you to extract unique year values and count them. 

#### multiplicity of &lt;year with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;year&gt; types.

## year

The &lt;year&gt; inspectors provide tools for dealing and calculating with year types, which are of the form YYYY, as in 2008.

#### &lt;year&gt; as string : string

Casts a year as a string.

#### &lt;year&gt; as integer : integer

Casts a year as an integer.

#### unique value of &lt;year&gt; : year with multiplicity

Returns the unique values of a given list of &lt;year&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;year&gt; : year

Returns the minimum value from a list of &lt;year&gt; types.

#### maximum of &lt;year&gt; : year

Returns the maximum value from a list of &lt;year&gt; types.

#### length of &lt;year&gt; : time interval

Returns the number of day in the specified year. Leap years have 366 days.Example: length of year &quot;2008&quot; - Returns 366.

#### leap of &lt;year&gt; : boolean

Returns a flag indicating whether or not the specified year is a leap year.

#### extrema of &lt;year&gt; : ( year, year )

Returns the minimum and maximum extreme values of the given list of &lt;year&gt; types.

## time zone with multiplicity

The &lt;time zone with multiplicity&gt; inspectors deal with time zone arrays, allowing you to extract unique time zone values and count them. 

#### multiplicity of &lt;time zone with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time zone&gt; types.

## time zone

Time zones are used in conjunction with the time object. Time zones have a resolution of 1 minute.

#### &lt;time zone&gt; as string : string

Returns a string corresponding to the time zone object provided.

#### unique value of &lt;time zone&gt; : time zone with multiplicity

Returns the unique values of a given list of &lt;time zone&gt; types, removing duplicates and sorting by value.

## time with multiplicity

The &lt;time with multiplicity&gt; inspectors deal with time arrays, allowing you to extract unique time values and count them.

#### multiplicity of &lt;time with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time&gt; types.

## time range with multiplicity

The &lt;time range with multiplicity&gt; inspectors deal with time-range arrays, allowing you to extract unique time-range values and count them.

#### multiplicity of &lt;time range with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time range&gt; types.

## time range

The &lt;time range&gt; inspectors provide tools for dealing and calculating with time-range types, which are of the form &#39;time to time&#39;, such as Tue, 18 Apr 2006 16:46:07 -0400 to Wed, 19 Apr 2006 16:46:07 -0400

#### &lt;time range&gt; as string : string

Casts a time range as a string.

#### unique value of &lt;time range&gt; : time range with multiplicity

Returns the unique values of a given list of &lt;time range&gt; types, removing duplicates and sorting by value.

#### start of &lt;time range&gt; : time

Returns the starting date of a time range.

#### range before &lt;time&gt; of &lt;time range&gt; : time range

Returns a new time range, starting from the original time in the specified range and continuting to the specified time. The time must be within the range, or an error will result.

#### range after &lt;time&gt; of &lt;time range&gt; : time range

Returns a new time range, starting from the specified time and continuing through the end of the original range. The time must be within the range, or an error will result.

#### length of &lt;time range&gt; : time interval

Returns the time interval (in days, hours, minutes, seconds) between the start and end date of a time range.

#### initial part &lt;time interval&gt; of &lt;time range&gt; : time range

Returns a time range starting with the first date of the time range and lasting for the specified interval.

#### final part &lt;time interval&gt; of &lt;time range&gt; : time range

Returns a time range with the specified interval, but ending on the final date of the time range.

#### end of &lt;time range&gt; : time

Returns the end date of a time range.

## time of day with time zone with multiplicity

The &lt;time of day with time zone with multiplicity&gt; inspectors deal with time-of-day-with-time-zone arrays, allowing you to extract unique time-of-day-with-time-zone values and count them. 

#### multiplicity of &lt;time of day with time zone with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time of day with time zone&gt; types.

## time of day with time zone

The &lt;time of day with time zone&gt; inspectors provide tools for dealing and calculating with time-of-day-with-time-zone types, which are of the form HH:MM:SS +ZZZZ, as in 12:59:59 -0400. 

#### &lt;time of day with time zone&gt; as string : string

Converts a &#39;time of day with time zone&#39; object into a string.

#### zone of &lt;time of day with time zone&gt; : time zone

Returns the zone associated with the specified time.

#### unique value of &lt;time of day with time zone&gt; : time of day with time zone with multiplicity

Returns the unique values of a given list of &lt;time of day with time zone&gt; types, removing duplicates and sorting by value.

#### two digit second of &lt;time of day with time zone&gt; : string

Returns the second of the zoned time of day as text, with values less than 10 having a leading zero.

#### two digit minute of &lt;time of day with time zone&gt; : string

Returns the minute of the zoned time of day as text, with values less than 10 having a leading zero.

#### two digit hour of &lt;time of day with time zone&gt; : string

Returns the hour of the zoned time of day as text, with values less than 10 having a leading zero.

#### time of &lt;time of day with time zone&gt; : time of day

Returns the time of day, without the time zone information.

#### second_of_minute of &lt;time of day with time zone&gt; : integer

Returns the &#39;seconds after the minute&#39; section of the &#39;time of day with time zone&#39; object.

#### minute_of_hour of &lt;time of day with time zone&gt; : integer

Returns the &#39;minutes after the hour&#39; section of the &#39;time of day with time zone&#39; object.Example: minute_of_hour of time (local time zone) of now - Returns the current minute past the hour.

#### hour_of_day of &lt;time of day with time zone&gt; : integer

Returns the hour section of the &#39;time of day with time zone&#39; object.Example: hour_of_day of time (universal time zone) of now - Returns the hour of day in Greenwich, England.

## time of day with multiplicity

The &lt;time of day with multiplicity&gt; inspectors deal with time-of-day arrays, allowing you to extract unique time-of-day values and count them. 

#### multiplicity of &lt;time of day with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time of day&gt; types.

## time of day

The &lt;time of day&gt; inspectors provide tools for dealing and calculating with time-of-day types, which are of the form HH:MM:SS, as in 12:59:59. 

#### &lt;time of day&gt; as string : string

Casts the time of day as a string type.

#### unique value of &lt;time of day&gt; : time of day with multiplicity

Returns the unique values of a given list of &lt;time of day&gt; types, removing duplicates and sorting by value.

#### two digit second of &lt;time of day&gt; : string

Extracts the 2-digit second from the time of day.

#### two digit minute of &lt;time of day&gt; : string

Extracts the 2-digit minute from the time of day.

#### two digit hour of &lt;time of day&gt; : string

Extracts the 2-digit hour from the time of day.

#### second_of_minute of &lt;time of day&gt; : integer

Extracts the &#39;seconds after the minute&#39; section of the &#39;tim of day&#39; object.

#### minute_of_hour of &lt;time of day&gt; : integer

Returns the &#39;minutes after the hour&#39; section of the &#39;time of day&#39; object.

#### minimum of &lt;time of day&gt; : time of day

Returns the minimum value from a list of &lt;time of day&gt; types.

#### maximum of &lt;time of day&gt; : time of day

Returns the maximum value from a list of &lt;time of day&gt; types.

#### hour_of_day of &lt;time of day&gt; : integer

Returns the hour section of the &#39;time of day&#39; object.

#### extrema of &lt;time of day&gt; : ( time of day, time of day )

Returns the minimum and maximum extreme values of the given list of &lt;time of day&gt; types.

## time interval with multiplicity

The &lt;time interval with multiplicity&gt; inspectors deal with time-interval arrays, allowing you to extract unique time-interval values and count them. 

#### multiplicity of &lt;time interval with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;time interval&gt; types.

## time interval

Time intervals are used in conjunction with the time object. Time intervals have a resolution of 1 microsecond.

#### &lt;time interval&gt; as string : string

Returns a string formatted as ddd days, HH:MM:SS.mmmmmmFor example, millisecond as string = &quot; 00:00:00.001&quot;.

#### unique value of &lt;time interval&gt; : time interval with multiplicity

Returns the unique values of a given list of &lt;time interval&gt; types, removing duplicates and sorting by value.

#### sum of &lt;time interval&gt; : time interval

Returns the sum of the supplied time intervals.

#### minimum of &lt;time interval&gt; : time interval

Returns the minimum interval from a list of time intervals.

#### maximum of &lt;time interval&gt; : time interval

Returns the maximum interval from a list of time intervals.

#### extrema of &lt;time interval&gt; : ( time interval, time interval )

Returns the minimum and maximum extreme values of the given list of &lt;time interval&gt; types.

#### absolute value of &lt;time interval&gt; : time interval

Returns positive value of the time interval.

## time

A &lt;time&gt; object is used to identify a point in time. Time objects are used to represent important properties of objects such as the modification time of a file. You can create time objects from literal strings. The format of the string is defined by the MIME standard. The difference between two Time objects may be calculated by subtracting them and yields time intervals. Time intervals may be added or subtracted from time objects to obtain time objects.

#### &lt;time&gt; as universal string : string

Returns a string in MIME format of the given time object. The format is:ddd, DD mmm YYYY HH:MM:SS +0000The string is formatted using the universal time zone.

#### &lt;time&gt; as string : string

Same as above.

#### &lt;time&gt; as local string : string

Returns a string in MIME format of the given time object. The format is: ddd, DD mmm YYYY HH:MM:SS sZZZZ. The string is formatted using the local time zone.

#### unique value of &lt;time&gt; : time with multiplicity

Returns the unique values of a given list of &lt;time&gt; types, removing duplicates and sorting by value.

#### time &lt;time zone&gt; of &lt;time&gt; : time of day with time zone

Adjusts the specified time to the given time zone.

#### minimum of &lt;time&gt; : time

Returns the minimum time from a list of times.

#### maximum of &lt;time&gt; : time

Returns the maximum time from a list of times.

#### extrema of &lt;time&gt; : ( time, time )

Returns the minimum and maximum extreme values of the given list of &lt;time&gt; types.

#### date &lt;time zone&gt; of &lt;time&gt; : date

Returns the date adjusted for the specified time zone.

## number of months with multiplicity

The &lt;number of months with multiplicity&gt; inspectors deal with number-of-month arrays, allowing you to extract unique number-of-month values and count them.

#### multiplicity of &lt;number of months with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;number of month&gt; types.

## number of months

The &lt;number of months&gt; inspectors provide tools for dealing and calculating with number-of-month types, which are similar to integers, but wih yearly roll-over.

#### &lt;number of months&gt; as string : string

Converts a number of months type into a string type.

#### unique value of &lt;number of months&gt; : number of months with multiplicity

Returns the unique values of a given list of &lt;number of month&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;number of months&gt; : number of months

Returns the minimum value from a list of &lt;number of months&gt; types.

#### maximum of &lt;number of months&gt; : number of months

Returns the maximum value from a list of &lt;number of months&gt; types.

#### extrema of &lt;number of months&gt; : ( number of months, number of months )

Returns the minimum and maximum extreme values of the given list of &lt;number of months&gt; types.

## month with multiplicity

The &lt;month with multiplicity&gt; inspectors deal with month arrays, allowing you to extract unique month values and count them.

#### multiplicity of &lt;month with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;month&gt; types.

## month and year with multiplicity

The &lt;month and year with multiplicity&gt; inspectors deal with month-and-year arrays, allowing you to extract unique month-and-year values and count them. 

#### multiplicity of &lt;month and year with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;month and year&gt; types.

## month and year

The &lt;month and year&gt; inspectors provide tools for dealing and calculating with month-and-year types, which are of the form month of year, eg., January of 2007.

#### &lt;month and year&gt; as string : string

Casts a date (in month year format) as a string.

#### year of &lt;month and year&gt; : year

Returns the year portion of the specified date (in month year format).

#### unique value of &lt;month and year&gt; : month and year with multiplicity

Returns the unique values of a given list of &lt;month and year&gt; types, removing duplicates and sorting by value.

#### month of &lt;month and year&gt; : month

Returns the name of the month corresponding to the given date.Example: month of date &quot;Sun, 02 Apr 2006&quot; + 2*month - Returns June.

#### minimum of &lt;month and year&gt; : month and year

Returns the minimum value from a list of &lt;month and year&gt; types.

#### maximum of &lt;month and year&gt; : month and year

Returns the maximum value from a list of &lt;month and year&gt; types.

#### length of &lt;month and year&gt; : time interval

Returns the number of days in the specified month.Example: length of (month &quot;February&quot; &amp; year &quot;2004&quot;) - Returns 29.

#### first wednesday of &lt;month and year&gt; : date

Finds the date corresponding to the first Wednesday of any given month and year.

#### first tuesday of &lt;month and year&gt; : date

Finds the date corresponding to the first Tuesday of any given month and year.

#### first thursday of &lt;month and year&gt; : date

Finds the date corresponding to the first Thursday of any given month and year.

#### first sunday of &lt;month and year&gt; : date

Finds the date corresponding to the first Sunday of any given month and year.

#### first saturday of &lt;month and year&gt; : date

Finds the date corresponding to the first Saturday of any given month and year.

#### first monday of &lt;month and year&gt; : date

Finds the date corresponding to the first Monday of any given month and year.

#### first friday of &lt;month and year&gt; : date

Finds the date corresponding to the first Friday of any given month and year.

#### first &lt;day of week&gt; of &lt;month and year&gt; : date

Finds the specific date corresponding to the first day of the week (eg. Friday) for a given month and year.Example: first monday of april of 2020 - Returns the date of the first Monday in April 2020, which is Mon, 06 Apr 2020.

#### extrema of &lt;month and year&gt; : ( month and year, month and year )

Returns the minimum and maximum extreme values of the given list of &lt;month and year&gt; types.

## month

The &lt;month&gt; inspectors provide tools for dealing and calculating with month types, which are of the form January, February, and more. This set of inspectors includes each month as a self-named object.

#### &lt;month&gt; as two digits : string

Converts the month into a two digit number (01 - 12).Example: january as two digits - Returns 01.

#### &lt;month&gt; as three letters : string

Converts the given month into a 3-letter string (Jan, Feb, etcetera.).Example: january as three letters - Returns Jan.

#### &lt;month&gt; as string : string

Converts the given month into a string value.

#### &lt;month&gt; as integer : integer

Converts the given month into an integer (1-12).

#### unique value of &lt;month&gt; : month with multiplicity

Returns the unique values of a given list of &lt;month&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;month&gt; : month

Returns the minimum value from a list of &lt;month&gt; types.

#### maximum of &lt;month&gt; : month

Returns the maximum value from a list of &lt;month&gt; types.

#### extrema of &lt;month&gt; : ( month, month )

Returns the minimum and maximum extreme values of the given list of &lt;month&gt; types.

## day of year with multiplicity

The &lt;day of year with multiplicity&gt; inspectors deal with day-of-year arrays, allowing you to extract unique day-of-year values and count them. 

#### multiplicity of &lt;day of year with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;day of year&gt; types.

## day of year

The &lt;day of year&gt; inspectors provide tools for dealing and calculating with day-of-month types, which are of the form Sun, 01 Apr 2007.

#### &lt;day of year&gt; as string : string

Casts a day of the year as a string type.

#### unique value of &lt;day of year&gt; : day of year with multiplicity

Returns the unique values of a given list of &lt;day of year&gt; types, removing duplicates and sorting by value.

#### month of &lt;day of year&gt; : month

Returns the month portion of the given date (in month day format).

#### minimum of &lt;day of year&gt; : day of year

Returns the minimum value from a list of &lt;day of year&gt; types.

#### maximum of &lt;day of year&gt; : day of year

Returns the maximum value from a list of &lt;day of year&gt; types.

#### extrema of &lt;day of year&gt; : ( day of year, day of year )

Returns the minimum and maximum extreme values of the given list of &lt;day of year&gt; types.

#### day of &lt;day of year&gt; : day of month

Returns the day of the month of the specified date.Example: day of July 4 - Returns 4.

## day of week with multiplicity

The &lt;day of week with multiplicity&gt; inspectors deal with day-of-week arrays, allowing you to extract unique day-of-week values and count them.

#### multiplicity of &lt;day of week with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;day of week&gt; types.

## day of week

The &lt;day of week&gt; inspectors provide tools for dealing and calculating with day-of-week types, which include Monday, Tuesday, and more. This set of inspectors includes each day as a self-named object.

#### &lt;day of week&gt; as three letters : string

Casts the day of week as a three-letter abbreviation (Mon, Tue, etcetera.).Example: Saturday as three letters - Returns Sat.

#### &lt;day of week&gt; as string : string

Casts the day of week as a string.

#### unique value of &lt;day of week&gt; : day of week with multiplicity

Returns the unique values of a given list of &lt;day of week&gt; types, removing duplicates and sorting by value.

## day of month with multiplicity

The &lt;day of month with multiplicity&gt; inspectors deal with day-of-month arrays, allowing you to extract unique day-of-month values and count them.

#### multiplicity of &lt;day of month with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;day of month&gt; types.

## day of month

The &lt;day of month&gt; inspectors provide tools for dealing and calculating with day-of-month types, which are numbers from 1-31.

#### &lt;day of month&gt; as two digits : string

Cast a day of month type as a two-digit number.

#### &lt;day of month&gt; as string : string

Cast a day of month type as a string.

#### &lt;day of month&gt; as integer : integer

Cast a day of month type as an integer.Example: current day_of_month as integer - Returns the day of the month as an integer.

#### unique value of &lt;day of month&gt; : day of month with multiplicity

Returns the unique values of a given list of &lt;day of month&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;day of month&gt; : day of month

Returns the minimum value from a list of &lt;day of month&gt; types.

#### maximum of &lt;day of month&gt; : day of month

Returns the maximum value from a list of &lt;day of month&gt; types.

#### extrema of &lt;day of month&gt; : ( day of month, day of month )

Returns the minimum and maximum extreme values of the given list of &lt;day of month&gt; types.

## date with multiplicity

The &lt;date with multiplicity&gt; inspectors deal with arrays of dates, allowing you to extract unique dates and count them.

#### multiplicity of &lt;date with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;date&gt; types.

## date

The &lt;date&gt; objects are the various inspectors that access the date types.

#### &lt;date&gt; as string : string

Cast a date type as a string.

#### year of &lt;date&gt; : year

Returns the year, extracted from the given date.

#### unique value of &lt;date&gt; : date with multiplicity

Returns the unique values and counts of a given list of &lt;date&gt; types, removing duplicates and sorting by value.

#### month_and_year of &lt;date&gt; : month and year

Formats the specified date in month year format, eg. March 2012.

#### month of &lt;date&gt; : month

Returns the month derived from the given date.

#### minimum of &lt;date&gt; : date

Returns the minimum value from a list of &lt;date&gt; types.

#### maximum of &lt;date&gt; : date

Returns the maximum value from a list of &lt;date&gt; types.

#### extrema of &lt;date&gt; : ( date, date )

Returns the minimum and maximum extreme values of the given list of &lt;date&gt; types.

#### day_of_year of &lt;date&gt; : day of year

Extracts the day of year from the specified date, in the &#39;Month Day&#39; format.

#### day_of_week of &lt;date&gt; : day of week

Extracts the day of the week (Monday, Tuesday, etcetera) from the specified date.

#### day_of_month of &lt;date&gt; : day of month

Extracts the day of the month from the specified date.

