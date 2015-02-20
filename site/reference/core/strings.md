---
title: strings
---

## utf8 string

No documentation exists for this type.

## substring

A substring object is a part of a larger string and has all the properties of a string, as well as extra methods and properties.

#### start of &lt;substring&gt; : string position

Returns the position within the string of the substring. For example, start of substring &quot;or&quot; of &quot;to be or not to be&quot; = 6.

#### preceding text of &lt;substring&gt; : substring

Returns the string preceding the substring. For example, preceding text of last &quot;.&quot; of &quot;log.txt&quot; = &quot;log&quot;.

#### following text of &lt;substring&gt; : substring

Returns the string following the substring. For example, following text of last &quot;.&quot; of &quot;log.txt&quot; = &quot;txt&quot;.

#### end of &lt;substring&gt; : string position

Returns the position of the substring within its containing string. For example, end of first &quot;be&quot; of &quot;to be or not to be&quot; = 5.

## string with multiplicity

The &lt;string with multiplicity&gt; inspectors deal with arrays of strings, allowing you to extract unique strings and count them.

#### multiplicity of &lt;string with multiplicity&gt; : integer

Returns the multiplicity (quantity) of each element in a multiple string list.Example: multiplicities of unique values of (&quot;steak&quot;; &quot;chop&quot;; &quot;rib&quot;; &quot;rib&quot;; &quot;rib&quot;) - Returns the multiplicity of (the number of times) each string in the list is used, namely, 1,3,1. Note that the multiplicities are based on the alphabetic order of the strings (chop, rib, steak), not their position in the list.

## string set

The &lt;string set&gt; inspectors deal with sets of strings, which are essentially lists or arrays with string elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

#### union of &lt;string set&gt; : string set

Returns a set of strings equal to the union of the specified sets, alphabetized and with redundant elements stripped out.

#### size of &lt;string set&gt; : integer

Returns the number of unique elements in the specified set.Example: size of set of (&quot;to&quot;;&quot;be&quot;; &quot;or&quot;; &quot;not&quot;; &quot;to&quot;; &quot;be&quot;) - Returns 4, the number of unique strings in the set.

#### intersection of &lt;string set&gt; : string set

Returns a set of strings equal to the intersection of the specified sets, aphabetized and with redundant elements stripped out.

#### element of &lt;string set&gt; : string

Returns the unique elements of the specified &lt;string set&gt;, removing duplicates and sorting by value.Example: elements of set of (&quot;beta&quot;;&quot;beta&quot;;&quot;alpha&quot;;&quot;gamma&quot;;&quot;beta&quot;) - Returns the strings alpha, beta, gamma.

## string position

String position works in combination with the string and substring data types. A string position is a point within a string. It can be compared to an integer (which it is derived from), but it also acts as a pointer within a string so that the preceding and following text can be extracted. 

#### preceding text of &lt;string position&gt; : substring

Returns the substring preceding the position in the string. For example, preceding text of position 5 of &quot;0123456789&quot; = &quot;01234&quot;.

#### following text of &lt;string position&gt; : substring

Returns the substring following the position in the string. For example, following text of position 5 of &quot;0123456789&quot; = &quot;567890&quot;.

## string

Strings are typically core objects, but some string inspectors may be client-specific. Note: A string literal is written within double quotes. Special characters must be inserted by using the percent sign followed by 2 hex digits. Special characters include those characters with ASCII codes less than the &#39;space&#39; character (hex 20) or greater than &#39;tilde&#39; character (hex 7f) as well as the percent character itself (25 hex). For example, to create a string containing a null character and a percent character use &quot;a null is %00, the percent itself is %25&quot;. Conversion to upper and lower case is also provided. String works in combination with the string position and substring data types. A string position is a point within a string. It can be compared to an integer, but it also acts as a pointer within a string so that the preceding and following text can be extracted. A substring is a part of a larger string. All operations allowed on a string can be performed on a substring. There are two substrings &quot;be&quot; in the string &quot;To be or not to be&quot;. The substrings only differ in their positions within the string.

#### &lt;string&gt; as zoned time_of_day : time of day with time zone

Converts a string into a zoned time of day.

#### &lt;string&gt; as year : year

Converts a string into a year.

#### &lt;string&gt; as windows display time : time

Returns a Windows display time object from a properly formatted string. See &lt;Time&gt;.

#### &lt;string&gt; as version : version

Returns a version if the string can be parsed as a version. The first numeric set of characters delimited with period, comma or comma-space is returned.

#### &lt;string&gt; as uppercase : string

Returns an uppercase version of the string provided.

#### &lt;string&gt; as universal zoned time_of_day : time of day with time zone

Converts a string into a universal zoned time of day.

#### &lt;string&gt; as universal time : time

Returns a universal time object from a properly formatted string.

#### &lt;string&gt; as trimmed string : string

Trims the leading and trailing spaces off of the specified string.

#### &lt;string&gt; as time_of_day : time of day

Converts a string to a time_of_day type.

#### &lt;string&gt; as time : time

Returns a time object from a properly formatted string. See &lt;time&gt;.

#### &lt;string&gt; as time zone : time zone

Returns a time zone object from a properly formatted string. See &lt;time zone&gt;.

#### &lt;string&gt; as time interval : time interval

Returns a time interval object from a properly formatted string. Expects strings formatted as ddd days, HH:MM:SS.mmmmmm.

#### &lt;string&gt; as string : string

Returns the string provided.

#### &lt;string&gt; as site version list : site version list

Converts a string into a site version list.

#### &lt;string&gt; as right trimmed string : string

Trims the trailing spaces from a string.

#### &lt;string&gt; as month : month

Converts a string into a month.

#### &lt;string&gt; as lowercase : string

Returns a lowercase version of the string provided.

#### &lt;string&gt; as local zoned time_of_day : time of day with time zone

Converts a string to a time of day with local time zone.

#### &lt;string&gt; as local time : time

Returns a local time object from a properly formatted string. See &lt;time&gt;.

#### &lt;string&gt; as left trimmed string : string

Trims the leading spaces from a string.

#### &lt;string&gt; as ipv6 address : ipv6 address

Converts a string representations of an IPv6 address (with colons and/or dots) as an IPv6 address type.

#### &lt;string&gt; as ipv4or6 address : ipv4or6 address

Converts a string version of an IP address into the flexible ipv4or6 address format.

#### &lt;string&gt; as integer : integer

Returns an integer value for the string provided. If the string contains anything but ASCII digits, the conversion will fail. Use numeric value for more liberal parsing rules.

#### &lt;string&gt; as html : html

Casts a string into html.

#### &lt;string&gt; as hexadecimal : string

Converts a string to a hexadecimal number.

#### &lt;string&gt; as floating point : floating point

Converts the contents of a string into a floating point number.Example: &quot;4.5&quot; as floating point - Returns 4.5.

#### &lt;string&gt; as day_of_week : day of week

Casts a string as a day of the week.

#### &lt;string&gt; as day_of_month : day of month

Casts a string as a day of the month (eg. 28).

#### &lt;string&gt; as date : date

Casts a string as a date type.

#### &lt;string&gt; as boolean : boolean

Returns a boolean value for the string. All possible capitalization&#39;s of &quot;TRUE&quot; and &quot;FALSE&quot; will convert successfully.

#### &lt;string&gt; as strverscmp version : strverscmp version

Converts a string to strverscmp version, which is compared to other versions using the OS supplied strverscmp function.

#### xml document of &lt;string&gt; : xml dom document

No documentation exists for this property.

#### var of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;var&gt; (variable type) tag.

#### var &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;var&gt; (variable type) tag modified by the first given string.

#### unordered list of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;ul&gt;&lt;li&gt; (unordered list item) tag.

#### unordered list &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;ul&gt;&lt;li&gt; (unordered list item) tag modified by the first given string.

#### unique value of &lt;string&gt; : string with multiplicity

Returns the unique values of a given list of &lt;string&gt; types, removing duplicates and sorting by value. As of version 6.0 of BES, this inspector returns a &lt;string with multiplicity&gt;.

#### ul of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;ul&gt; (unordered list) tag.

#### ul &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;ul&gt; (unordered list) tag modified by the first given string.

#### tuple string item of &lt;string&gt; : string

Parses the given string as if it were a tuple result string and iterates over the &lt;string&gt; objects that make up the tuple. The tuple inspectors used to be session-only, but as of version 8.0, they are core inspectors, available to all platforms at all times.

#### tuple string item &lt;integer&gt; of &lt;string&gt; : string

Parses the given string as if it were a tuple result string and returns the string which is the nth item of the tuple. The tuple inspectors used to be session-only, but as of version 8.0, they are core inspectors, available to all platforms at all times.

#### tt of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tt&gt; (teletype font) tag.

#### tt &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tt&gt; (teletype font) tag modified by the first given string.

#### tr of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tr&gt; (table row) tag.

#### tr &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tr&gt; (table row) tag modified by the first given string.

#### title of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;title&gt; tag.

#### title &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;title&gt; tag modified by the first given string.

#### thead of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;thead&gt; (table header) tag.

#### thead &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;thead&gt; (table header) tag modified by the first given string.

#### th of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;th&gt; (table header) tag.

#### th &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;th&gt; (table header) tag modified by the first given string.

#### tfoot of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tfoot&gt; (table foot) tag.

#### tfoot &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tfoot&gt; (table foot) tag modified by the first given string.

#### td of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;td&gt; (table cell) tag.

#### td &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;td&gt; (table cell) tag modified by the first given string.

#### tbody of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tbody&gt; tag.

#### tbody &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tbody&gt; tag modified by the first given string.

#### table of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;table&gt; tag.

#### table &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;table&gt; tag modified by the first given string.

#### sup of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;sup&gt; (superscript) tag.

#### sup &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;sup&gt; (superscript) tag modified by the first given string.

#### substring separated by &lt;string&gt; of &lt;string&gt; : substring

Returns a substring (or set of substrings) delimited by the first string.

#### substring between &lt;string&gt; of &lt;string&gt; : substring

Returns the substring in the second string found between two instances of the first string.

#### substring before &lt;string&gt; of &lt;string&gt; : substring

Returns the substrings that come before the first string delimiter.

#### substring after &lt;string&gt; of &lt;string&gt; : substring

Returns the substrings that come after the first string delimiter.

#### substring &lt;string&gt; of &lt;string&gt; : substring

Iterates through the string returning all the substrings matching the name given. For example, number of substrings &quot;be&quot; of &quot;to be or not to be&quot; = 2.

#### substring &lt;( integer, integer )&gt; of &lt;string&gt; : substring

Returns a substring of the specified string as defined by the start and length. The first integer is the start and the second integer is the length.

#### sub of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;sub&gt; (subscript) tag.

#### sub &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;sub&gt; (subscript) tag modified by the first given string.

#### strong of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;strong&gt; tag.

#### strong &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;strong&gt; tag modified by the first given string.

#### span of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;span&gt; tag.

#### span &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;span&gt; tag modified by the first given string.

#### small of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;small&gt; tag.

#### small &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;small&gt; tag modified by the first given string.

#### set of &lt;string&gt; : string set

Creates a set from the given list of semicolon-separated strings.

#### samp of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;samp&gt; (sample) tag.

#### samp &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;samp&gt; (sample) tag modified by the first given string.

#### regex escape of &lt;string&gt; : string

Creates a new string that escapes the special characters .[]{}()\*+?|^$,-.

#### q of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;q&gt; (quotation) tag.

#### q &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;q&gt; (quotation) tag modified by the first given string.

#### pre of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;pre&gt; (preformatted) tag.

#### pre &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;pre&gt; (preformatted) tag modified by the first given string.

#### position of &lt;string&gt; : string position

Returns the positions of the string.

#### position &lt;integer&gt; of &lt;string&gt; : string position

Returns a string position pointing to the character position specified. The first character is at position 0.

#### p of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;p&gt; tag.

#### p &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;p&gt; tag modified by the first given string.

#### ordered list of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;ol&gt;&lt;li&gt; tag.

#### ordered list &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;ol&gt;&lt;li&gt; tag, where the &lt;ol&gt; tag is modified by the first given string.

#### ol of &lt;string&gt; : html

Creates an ordered list out of the &lt;string&gt;.

#### ol &lt;string&gt; of &lt;string&gt; : html

Creates an ordered list out of &lt;string2&gt; with an optional style specified by &lt;string1&gt;.

#### numeric value of &lt;string&gt; : integer

Returns an integer for the first numeric value in the string.Example: numeric value of &quot;string 123 xyz 45&quot; = 123 - Returns TRUE.

#### meta of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;meta&gt; tag.

#### meta &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;meta&gt; tag modified by the first given string.

#### match &lt;regular expression&gt; of &lt;string&gt; : regular expression match

Creates an object containing all the matches to the regular expression in the given string.

#### link of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;link&gt; tag.

#### link &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;link&gt; tag modified by the first given string.

#### li of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;li&gt; (list) tag.

#### li &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;li&gt; (list) tag modified by the first given string.

#### length of &lt;string&gt; : integer

Returns the number of characters in the string.

#### last &lt;string&gt; of &lt;string&gt; : substring

Returns a substring containing the last occurrence of the name provided.

#### last &lt;integer&gt; of &lt;string&gt; : substring

Returns a substring containing the number of characters specified. For example, Last 5 of &quot;To be or not to be&quot; is &quot;to be&quot;.

#### kbd of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;kbd&gt; (keyboard entry) tag.

#### kbd &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;kbd&gt; (keyboard entry) tag modified by the first given string.

#### javascript array &lt;string&gt; of &lt;string&gt; : html

No documentation exists for this property.

#### italic of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;i&gt; tag.

#### italic &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;i&gt; tag modified by the first given string.

#### ins of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;ins&gt; (insert) tag.

#### ins &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;ins&gt; (insert) tag modified by the first given string.

#### html tag &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the second string enclosed in a tag specified by the first string.

#### html of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;html&gt; tag.

#### html &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;html&gt; tag modified by the first given string.

#### head of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;head&gt; tag.

#### head &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;head&gt; tag modified by the first given string.

#### h6 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h6&gt; (header) tag.

#### h6 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h6&gt; (header) tag modified by the first given string.

#### h5 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h5&gt; (header) tag.

#### h5 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h5&gt; (header) tag modified by the first given string.

#### h4 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h4&gt; (header) tag.

#### h4 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h4&gt; (header) tag modified by the first given string.

#### h3 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h3&gt; (header) tag.

#### h3 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h3&gt; (header) tag modified by the first given string.

#### h2 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h2&gt; (header) tag.

#### h2 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h2&gt; (header) tag modified by the first given string.

#### h1 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h1&gt; (header) tag.

#### h1 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h1&gt; (header) tag modified by the first given string.

#### first match &lt;regular expression&gt; of &lt;string&gt; : regular expression match

Creates an object containing the first match to the regular expression in the given string

#### first &lt;string&gt; of &lt;string&gt; : substring

Returns a substring containing the first occurrence of the name provided. See substring.

#### first &lt;integer&gt; of &lt;string&gt; : substring

Returns a substring containing the number of characters specified from the given string. For example, First 5 of &quot;To be or not to be&quot; is &quot;To be&quot;.

#### em of &lt;string&gt; : html

Emphasize the specified string inside an &lt;em&gt;&lt;/em&gt; tag.

#### em &lt;string&gt; of &lt;string&gt; : html

Emphasize the specified string inside an &lt;em string&gt;&lt;/em&gt; tag.

#### dt of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dt&gt; (definition) tag.

#### dt &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dt&gt; (definition) tag modified by the first given string.

#### div of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;div&gt; (division or section) tag.

#### div &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;div&gt; (division or section) tag modified by the first given string.

#### dfn of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dfn&gt; (definition) tag.

#### dfn &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dfn&gt; (definition) tag modified by the first given string.

#### del of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;del&gt; tag.

#### del &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;del&gt; tag modified by the first given string.

#### definition list of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dl&gt; (definition) tag.

#### definition list &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dl&gt; (definition) tag modified by the first given string.

#### dd of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dd&gt; (definition) tag.

#### dd &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dd&gt; (definition) tag modified by the first given string.

#### concatenation of &lt;string&gt; : string

Combines the supplied strings into a single string, end-to-end.

#### concatenation &lt;string&gt; of &lt;string&gt; : string

This inspector concatenates the string items in the second argument with a separator defined by the string argument.

#### concatenation &lt;html&gt; of &lt;string&gt; : html

This inspector concatenates the string items in the second argument with a separator defined by the first argument.

#### colgroup of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;colgroup&gt; (column group) tag.

#### colgroup &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;colgroup&gt; (column group) tag modified by the first given string.

#### col of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;col&gt; (column) tag.

#### col &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;col&gt; (column) tag modified by the first given string.

#### code of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;code&gt; (fixed-width font) tag.

#### code &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;code&gt; (fixed-width font) tag modified by the first given string.

#### cite of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;cite&gt; (citation) tag.

#### cite &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;cite&gt; (citation) tag modified by the first given string.

#### character of &lt;string&gt; : substring

Returns the characters from the string.

#### character &lt;integer&gt; of &lt;string&gt; : substring

Returns a string of length 1 made by taking the character identified by &lt;integer&gt; from the string. Numbering begins at zero. Example, Character 1 of &quot;HI&quot; is &quot;I&quot;.

#### caption of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;caption&gt; tag.

#### caption &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;caption&gt; tag modified by the first given string.

#### body of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;body&gt; tag.

#### body &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;body&gt; tag modified by the first given string.

#### blockquote of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;blockquote&gt; tag.

#### blockquote &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;blockquote&gt; tag modified by the first given string.

#### big of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;big&gt; tag.

#### big &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;big&gt; tag modified by the first given string.

#### base of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;base&gt; tag.

#### base &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;base&gt; tag modified by the first given string.

#### b of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;b&gt; tag.

#### b &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;b&gt; tag modified by the first given string.

#### anchor of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;a&gt; tag.

#### anchor &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;a&gt; tag modified by the first given string.

#### address of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;address&gt; tag.

#### address &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;address&gt; tag modified by the first given string.

#### acronym of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;acronym&gt; tag.

#### acronym &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;acronym&gt; tag modified by the first given string.

#### abbr of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;abbr&gt; tag.

#### abbr &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;abbr&gt; tag modified by the first given string.

#### expand environment string of &lt;string&gt; : string

Uses the Windows ExpandEnvironmentStrings API to translate a string containing special Windows environment variables. For example, %windir%\my.dll might expand to c:\winnt\my.dll.

#### escape of &lt;string&gt; : string

Returns a string containing a \\ for every \ character found. Useful for setting registry key values to strings in regset action commands.

#### expand x64 environment string of &lt;string&gt; : string

Given an environment string such as %ProgramFiles%, this inspector expands it to &#39;C:\Program Files (x86)&#39;. Although similar to &#39;expand environment string of &lt;string&gt;&#39;, this inspector works on 64-bit Windows systems only. On a 32-bit system, it returns &#39;No Such Object&#39;.

#### sha1 of &lt;string&gt; : string

No documentation exists for this property.

#### sha2_512 of &lt;string&gt; : string

Returns the sha2-512 of the string, hex encoded as a string

#### sha2_384 of &lt;string&gt; : string

Returns the sha2-384 of the string, hex encoded as a string

#### sha2_256 of &lt;string&gt; : string

Returns the sha2-256 of the string, hex encoded as a string

#### sha2_224 of &lt;string&gt; : string

Returns the sha2-224 of the string, hex encoded as a string

#### md5 of &lt;string&gt; : string

Returns the md5 of the string, hex encoded as a string. Not available in FIPS mode.

#### json of &lt;string&gt; : json value

No documentation exists for this property.

#### expand x32 environment string of &lt;string&gt; : string

Uses the Windows ExpandEnvironmentStrings API to translate a string containing special Windows environment variables from the 32 bit environment. For example, %windir%\my.dll might expand to c:\Windows\my.dll.

#### sha512 of &lt;string&gt; : string

No documentation exists for this property.

#### sha384 of &lt;string&gt; : string

No documentation exists for this property.

#### sha256 of &lt;string&gt; : string

No documentation exists for this property.

#### sha224 of &lt;string&gt; : string

No documentation exists for this property.

## rope

The &lt;rope&gt; object is a way to efficiently concatenate long strings. String literals in the Relevence language are limited to 512 characters, but internally, they can be any length. Ropes provide a technique for concatenating string literals that is memory-efficient. In general, the Fixlet author will not need to worry about ropes, but they are useful for increasing efficiency.

#### &lt;rope&gt; as string : string

Converts a rope into a string object. When converted, all the other string properties are available.

#### length of &lt;rope&gt; : integer

Returns the number of bytes in the rope.

## regular expression match

The &lt;regular expression match&gt; inspectors let you match regular expressions (or regexes) in relevance statements. They use the boost library implementation of the &#39;POSIX-Extended&#39; regular expression syntax, as documented at Wikipedia using the search term &quot;posix-extended regex&quot;. 

#### parenthesized part of &lt;regular expression match&gt; : substring

Returns the parenthetical part of the specified regular expression match.

#### parenthesized part &lt;integer&gt; of &lt;regular expression match&gt; : substring

Returns the nth parenthetical (given by &lt;integer&gt;) in the specified regular expression match.

## regular expression

The &lt;regular expression&gt; inspectors let you use regular expressions (or regexes) in relevance statements. They use the boost library implementation of the &#39;POSIX-Extended&#39; regular expression syntax, as documented at Wikipedia using the search term &quot;posix-extended regex&quot;.

## format

Format inspectors make it easier for content authors to create localizable content. Similar in concept to the C printf function, they allow you to embed arguments into a formatting string, which is followed by the argument values themselves. The arguments are numbered and enclosed in curly brackets {0} and the values to be substituted are preceded by a plus sign (+). For example:Q: format &quot;At {1}, user {0} is logged on.&quot; + name of current user + nowA: At 9/27/2010 3:03:26 PM, user Scott is logged on.

#### &lt;format&gt; as string : string

Returns the formatted output as a string type.

