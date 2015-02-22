---
title: string
---

{% type string %}

Strings are typically core objects, but some string inspectors may be client-specific. Note: A string literal is written within double quotes. Special characters must be inserted by using the percent sign followed by 2 hex digits. Special characters include those characters with ASCII codes less than the &#39;space&#39; character (hex 20) or greater than &#39;tilde&#39; character (hex 7f) as well as the percent character itself (25 hex). For example, to create a string containing a null character and a percent character use &quot;a null is %00, the percent itself is %25&quot;. Conversion to upper and lower case is also provided. String works in combination with the string position and substring data types. A string position is a point within a string. It can be compared to an integer, but it also acts as a pointer within a string so that the preceding and following text can be extracted. A substring is a part of a larger string. All operations allowed on a string can be performed on a substring. There are two substrings &quot;be&quot; in the string &quot;To be or not to be&quot;. The substrings only differ in their positions within the string.

#### Properties of string

{% property abbr <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;abbr&gt; tag modified by the first given string.

{% property abbr of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;abbr&gt; tag.

{% property acronym <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;acronym&gt; tag modified by the first given string.

{% property acronym of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;acronym&gt; tag.

{% property address <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;address&gt; tag modified by the first given string.

{% property address of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;address&gt; tag.

{% property anchor <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;a&gt; tag modified by the first given string.

{% property anchor of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;a&gt; tag.

{% property b <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;b&gt; tag modified by the first given string.

{% property b of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;b&gt; tag.

{% property base <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;base&gt; tag modified by the first given string.

{% property base of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;base&gt; tag.

{% property big <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;big&gt; tag modified by the first given string.

{% property big of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;big&gt; tag.

{% property blockquote <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;blockquote&gt; tag modified by the first given string.

{% property blockquote of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;blockquote&gt; tag.

{% property body <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;body&gt; tag modified by the first given string.

{% property body of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;body&gt; tag.

{% property caption <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;caption&gt; tag modified by the first given string.

{% property caption of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;caption&gt; tag.

{% property character <integer> of <string> %}

Returns a string of length 1 made by taking the character identified by &lt;integer&gt; from the string. Numbering begins at zero. Example, Character 1 of &quot;HI&quot; is &quot;I&quot;.

{% property character of <string> %}

Returns the characters from the string.

{% property cite <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;cite&gt; (citation) tag modified by the first given string.

{% property cite of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;cite&gt; (citation) tag.

{% property code <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;code&gt; (fixed-width font) tag modified by the first given string.

{% property code of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;code&gt; (fixed-width font) tag.

{% property col <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;col&gt; (column) tag modified by the first given string.

{% property col of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;col&gt; (column) tag.

{% property colgroup <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;colgroup&gt; (column group) tag modified by the first given string.

{% property colgroup of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;colgroup&gt; (column group) tag.

{% property concatenation <html> of <string> %}

This inspector concatenates the string items in the second argument with a separator defined by the first argument.

{% property concatenation <string> of <string> %}

This inspector concatenates the string items in the second argument with a separator defined by the string argument.

{% property concatenation of <string> %}

Combines the supplied strings into a single string, end-to-end.

{% property dd <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;dd&gt; (definition) tag modified by the first given string.

{% property dd of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;dd&gt; (definition) tag.

{% property definition list <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;dl&gt; (definition) tag modified by the first given string.

{% property definition list of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;dl&gt; (definition) tag.

{% property del <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;del&gt; tag modified by the first given string.

{% property del of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;del&gt; tag.

{% property dfn <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;dfn&gt; (definition) tag modified by the first given string.

{% property dfn of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;dfn&gt; (definition) tag.

{% property div <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;div&gt; (division or section) tag modified by the first given string.

{% property div of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;div&gt; (division or section) tag.

{% property dt <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;dt&gt; (definition) tag modified by the first given string.

{% property dt of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;dt&gt; (definition) tag.

{% property em <string> of <string> %}

Emphasize the specified string inside an &lt;em string&gt;&lt;/em&gt; tag.

{% property em of <string> %}

Emphasize the specified string inside an &lt;em&gt;&lt;/em&gt; tag.

{% property escape of <string> %}

Returns a string containing a \\ for every \ character found. Useful for setting registry key values to strings in regset action commands.

{% property expand environment string of <string> %}

Uses the Windows ExpandEnvironmentStrings API to translate a string containing special Windows environment variables. For example, %windir%\my.dll might expand to c:\winnt\my.dll.

{% property expand x32 environment string of <string> %}

Uses the Windows ExpandEnvironmentStrings API to translate a string containing special Windows environment variables from the 32 bit environment. For example, %windir%\my.dll might expand to c:\Windows\my.dll.

{% property expand x64 environment string of <string> %}

Given an environment string such as %ProgramFiles%, this inspector expands it to &#39;C:\Program Files (x86)&#39;. Although similar to &#39;expand environment string of &lt;string&gt;&#39;, this inspector works on 64-bit Windows systems only. On a 32-bit system, it returns &#39;No Such Object&#39;.

{% property first <integer> of <string> %}

Returns a substring containing the number of characters specified from the given string. For example, First 5 of &quot;To be or not to be&quot; is &quot;To be&quot;.

{% property first <string> of <string> %}

Returns a substring containing the first occurrence of the name provided. See substring.

{% property first match <regular expression> of <string> %}

Creates an object containing the first match to the regular expression in the given string

{% property h1 <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;h1&gt; (header) tag modified by the first given string.

{% property h1 of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;h1&gt; (header) tag.

{% property h2 <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;h2&gt; (header) tag modified by the first given string.

{% property h2 of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;h2&gt; (header) tag.

{% property h3 <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;h3&gt; (header) tag modified by the first given string.

{% property h3 of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;h3&gt; (header) tag.

{% property h4 <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;h4&gt; (header) tag modified by the first given string.

{% property h4 of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;h4&gt; (header) tag.

{% property h5 <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;h5&gt; (header) tag modified by the first given string.

{% property h5 of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;h5&gt; (header) tag.

{% property h6 <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;h6&gt; (header) tag modified by the first given string.

{% property h6 of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;h6&gt; (header) tag.

{% property head <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;head&gt; tag modified by the first given string.

{% property head of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;head&gt; tag.

{% property html <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;html&gt; tag modified by the first given string.

{% property html of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;html&gt; tag.

{% property html tag <string> of <string> %}

Returns an HTML snippet with the second string enclosed in a tag specified by the first string.

{% property ins <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;ins&gt; (insert) tag modified by the first given string.

{% property ins of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;ins&gt; (insert) tag.

{% property italic <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;i&gt; tag modified by the first given string.

{% property italic of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;i&gt; tag.

{% property javascript array <string> of <string> %}

No documentation exists for this property.

{% property json of <string> %}

No documentation exists for this property.

{% property kbd <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;kbd&gt; (keyboard entry) tag modified by the first given string.

{% property kbd of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;kbd&gt; (keyboard entry) tag.

{% property last <integer> of <string> %}

Returns a substring containing the number of characters specified. For example, Last 5 of &quot;To be or not to be&quot; is &quot;to be&quot;.

{% property last <string> of <string> %}

Returns a substring containing the last occurrence of the name provided.

{% property length of <string> %}

Returns the number of characters in the string.

{% property li <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;li&gt; (list) tag modified by the first given string.

{% property li of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;li&gt; (list) tag.

{% property link <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;link&gt; tag modified by the first given string.

{% property link of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;link&gt; tag.

{% property match <regular expression> of <string> %}

Creates an object containing all the matches to the regular expression in the given string.

{% property md5 of <string> %}

Returns the md5 of the string, hex encoded as a string. Not available in FIPS mode.

{% property meta <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;meta&gt; tag modified by the first given string.

{% property meta of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;meta&gt; tag.

{% property numeric value of <string> %}

Returns an integer for the first numeric value in the string.Example: numeric value of &quot;string 123 xyz 45&quot; = 123 - Returns TRUE.

{% property ol <string> of <string> %}

Creates an ordered list out of &lt;string2&gt; with an optional style specified by &lt;string1&gt;.

{% property ol of <string> %}

Creates an ordered list out of the &lt;string&gt;.

{% property ordered list <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;ol&gt;&lt;li&gt; tag, where the &lt;ol&gt; tag is modified by the first given string.

{% property ordered list of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;ol&gt;&lt;li&gt; tag.

{% property p <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;p&gt; tag modified by the first given string.

{% property p of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;p&gt; tag.

{% property position <integer> of <string> %}

Returns a string position pointing to the character position specified. The first character is at position 0.

{% property position of <string> %}

Returns the positions of the string.

{% property pre <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in an &lt;pre&gt; (preformatted) tag modified by the first given string.

{% property pre of <string> %}

Returns an HTML snippet containing the specified string enclosed in an &lt;pre&gt; (preformatted) tag.

{% property q <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;q&gt; (quotation) tag modified by the first given string.

{% property q of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;q&gt; (quotation) tag.

{% property regex escape of <string> %}

Creates a new string that escapes the special characters .[]{}()\*+?|^$,-.

{% property samp <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;samp&gt; (sample) tag modified by the first given string.

{% property samp of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;samp&gt; (sample) tag.

{% property set of <string> %}

Creates a set from the given list of semicolon-separated strings.

{% property sha1 of <string> %}

No documentation exists for this property.

{% property sha224 of <string> %}

No documentation exists for this property.

{% property sha256 of <string> %}

No documentation exists for this property.

{% property sha2_224 of <string> %}

Returns the sha2-224 of the string, hex encoded as a string

{% property sha2_256 of <string> %}

Returns the sha2-256 of the string, hex encoded as a string

{% property sha2_384 of <string> %}

Returns the sha2-384 of the string, hex encoded as a string

{% property sha2_512 of <string> %}

Returns the sha2-512 of the string, hex encoded as a string

{% property sha384 of <string> %}

No documentation exists for this property.

{% property sha512 of <string> %}

No documentation exists for this property.

{% property small <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;small&gt; tag modified by the first given string.

{% property small of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;small&gt; tag.

{% property span <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;span&gt; tag modified by the first given string.

{% property span of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;span&gt; tag.

{% property strong <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;strong&gt; tag modified by the first given string.

{% property strong of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;strong&gt; tag.

{% property sub <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;sub&gt; (subscript) tag modified by the first given string.

{% property sub of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;sub&gt; (subscript) tag.

{% property substring <( integer, integer )> of <string> %}

Returns a substring of the specified string as defined by the start and length. The first integer is the start and the second integer is the length.

{% property substring <string> of <string> %}

Iterates through the string returning all the substrings matching the name given. For example, number of substrings &quot;be&quot; of &quot;to be or not to be&quot; = 2.

{% property substring after <string> of <string> %}

Returns the substrings that come after the first string delimiter.

{% property substring before <string> of <string> %}

Returns the substrings that come before the first string delimiter.

{% property substring between <string> of <string> %}

Returns the substring in the second string found between two instances of the first string.

{% property substring separated by <string> of <string> %}

Returns a substring (or set of substrings) delimited by the first string.

{% property sup <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;sup&gt; (superscript) tag modified by the first given string.

{% property sup of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;sup&gt; (superscript) tag.

{% property table <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;table&gt; tag modified by the first given string.

{% property table of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;table&gt; tag.

{% property tbody <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;tbody&gt; tag modified by the first given string.

{% property tbody of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;tbody&gt; tag.

{% property td <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;td&gt; (table cell) tag modified by the first given string.

{% property td of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;td&gt; (table cell) tag.

{% property tfoot <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;tfoot&gt; (table foot) tag modified by the first given string.

{% property tfoot of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;tfoot&gt; (table foot) tag.

{% property th <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;th&gt; (table header) tag modified by the first given string.

{% property th of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;th&gt; (table header) tag.

{% property thead <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;thead&gt; (table header) tag modified by the first given string.

{% property thead of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;thead&gt; (table header) tag.

{% property title <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;title&gt; tag modified by the first given string.

{% property title of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;title&gt; tag.

{% property tr <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;tr&gt; (table row) tag modified by the first given string.

{% property tr of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;tr&gt; (table row) tag.

{% property tt <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;tt&gt; (teletype font) tag modified by the first given string.

{% property tt of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;tt&gt; (teletype font) tag.

{% property tuple string item <integer> of <string> %}

Parses the given string as if it were a tuple result string and returns the string which is the nth item of the tuple. The tuple inspectors used to be session-only, but as of version 8.0, they are core inspectors, available to all platforms at all times.

{% property tuple string item of <string> %}

Parses the given string as if it were a tuple result string and iterates over the &lt;string&gt; objects that make up the tuple. The tuple inspectors used to be session-only, but as of version 8.0, they are core inspectors, available to all platforms at all times.

{% property ul <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;ul&gt; (unordered list) tag modified by the first given string.

{% property ul of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;ul&gt; (unordered list) tag.

{% property unique value of <string> %}

Returns the unique values of a given list of &lt;string&gt; types, removing duplicates and sorting by value. As of version 6.0 of BES, this inspector returns a &lt;string with multiplicity&gt;.

{% property unordered list <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;ul&gt;&lt;li&gt; (unordered list item) tag modified by the first given string.

{% property unordered list of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;ul&gt;&lt;li&gt; (unordered list item) tag.

{% property var <string> of <string> %}

Returns an HTML snippet with the specified string enclosed in a &lt;var&gt; (variable type) tag modified by the first given string.

{% property var of <string> %}

Returns an HTML snippet containing the specified string enclosed in a &lt;var&gt; (variable type) tag.

{% property xml document of <string> %}

No documentation exists for this property.

#### Casts of string

{% cast <string> as boolean %}

Returns a boolean value for the string. All possible capitalization&#39;s of &quot;TRUE&quot; and &quot;FALSE&quot; will convert successfully.

{% cast <string> as date %}

Casts a string as a date type.

{% cast <string> as day_of_month %}

Casts a string as a day of the month (eg. 28).

{% cast <string> as day_of_week %}

Casts a string as a day of the week.

{% cast <string> as floating point %}

Converts the contents of a string into a floating point number.Example: &quot;4.5&quot; as floating point - Returns 4.5.

{% cast <string> as hexadecimal %}

Converts a string to a hexadecimal number.

{% cast <string> as html %}

Casts a string into html.

{% cast <string> as integer %}

Returns an integer value for the string provided. If the string contains anything but ASCII digits, the conversion will fail. Use numeric value for more liberal parsing rules.

{% cast <string> as ipv4or6 address %}

Converts a string version of an IP address into the flexible ipv4or6 address format.

{% cast <string> as ipv6 address %}

Converts a string representations of an IPv6 address (with colons and/or dots) as an IPv6 address type.

{% cast <string> as left trimmed string %}

Trims the leading spaces from a string.

{% cast <string> as local time %}

Returns a local time object from a properly formatted string. See &lt;time&gt;.

{% cast <string> as local zoned time_of_day %}

Converts a string to a time of day with local time zone.

{% cast <string> as lowercase %}

Returns a lowercase version of the string provided.

{% cast <string> as month %}

Converts a string into a month.

{% cast <string> as right trimmed string %}

Trims the trailing spaces from a string.

{% cast <string> as site version list %}

Converts a string into a site version list.

{% cast <string> as string %}

Returns the string provided.

{% cast <string> as strverscmp version %}

Converts a string to strverscmp version, which is compared to other versions using the OS supplied strverscmp function.

{% cast <string> as time %}

Returns a time object from a properly formatted string. See &lt;time&gt;.

{% cast <string> as time interval %}

Returns a time interval object from a properly formatted string. Expects strings formatted as ddd days, HH:MM:SS.mmmmmm.

{% cast <string> as time zone %}

Returns a time zone object from a properly formatted string. See &lt;time zone&gt;.

{% cast <string> as time_of_day %}

Converts a string to a time_of_day type.

{% cast <string> as trimmed string %}

Trims the leading and trailing spaces off of the specified string.

{% cast <string> as universal time %}

Returns a universal time object from a properly formatted string.

{% cast <string> as universal zoned time_of_day %}

Converts a string into a universal zoned time of day.

{% cast <string> as uppercase %}

Returns an uppercase version of the string provided.

{% cast <string> as version %}

Returns a version if the string can be parsed as a version. The first numeric set of characters delimited with period, comma or comma-space is returned.

{% cast <string> as windows display time %}

Returns a Windows display time object from a properly formatted string. See &lt;Time&gt;.

{% cast <string> as year %}

Converts a string into a year.

{% cast <string> as zoned time_of_day %}

Converts a string into a zoned time of day.

{% type string position %}

String position works in combination with the string and substring data types. A string position is a point within a string. It can be compared to an integer (which it is derived from), but it also acts as a pointer within a string so that the preceding and following text can be extracted. 

#### Properties of string position

{% property following text of <string position> %}

Returns the substring following the position in the string. For example, following text of position 5 of &quot;0123456789&quot; = &quot;567890&quot;.

{% property preceding text of <string position> %}

Returns the substring preceding the position in the string. For example, preceding text of position 5 of &quot;0123456789&quot; = &quot;01234&quot;.

{% type string set %}

The &lt;string set&gt; inspectors deal with sets of strings, which are essentially lists or arrays with string elements. Think of them as mathematical sets: you can compare them, subtract them from other sets and form the union and intersection of multiple sets.Note: These inspectors are not available on SUSE Linux systems.

#### Properties of string set

{% property element of <string set> %}

Returns the unique elements of the specified &lt;string set&gt;, removing duplicates and sorting by value.Example: elements of set of (&quot;beta&quot;;&quot;beta&quot;;&quot;alpha&quot;;&quot;gamma&quot;;&quot;beta&quot;) - Returns the strings alpha, beta, gamma.

{% property intersection of <string set> %}

Returns a set of strings equal to the intersection of the specified sets, aphabetized and with redundant elements stripped out.

{% property size of <string set> %}

Returns the number of unique elements in the specified set.Example: size of set of (&quot;to&quot;;&quot;be&quot;; &quot;or&quot;; &quot;not&quot;; &quot;to&quot;; &quot;be&quot;) - Returns 4, the number of unique strings in the set.

{% property union of <string set> %}

Returns a set of strings equal to the union of the specified sets, alphabetized and with redundant elements stripped out.

{% type string with multiplicity %}

The &lt;string with multiplicity&gt; inspectors deal with arrays of strings, allowing you to extract unique strings and count them.

#### Properties of string with multiplicity

{% property multiplicity of <string with multiplicity> %}

Returns the multiplicity (quantity) of each element in a multiple string list.Example: multiplicities of unique values of (&quot;steak&quot;; &quot;chop&quot;; &quot;rib&quot;; &quot;rib&quot;; &quot;rib&quot;) - Returns the multiplicity of (the number of times) each string in the list is used, namely, 1,3,1. Note that the multiplicities are based on the alphabetic order of the strings (chop, rib, steak), not their position in the list.

{% type substring %}

A substring object is a part of a larger string and has all the properties of a string, as well as extra methods and properties.

#### Properties of substring

{% property end of <substring> %}

Returns the position of the substring within its containing string. For example, end of first &quot;be&quot; of &quot;to be or not to be&quot; = 5.

{% property following text of <substring> %}

Returns the string following the substring. For example, following text of last &quot;.&quot; of &quot;log.txt&quot; = &quot;txt&quot;.

{% property preceding text of <substring> %}

Returns the string preceding the substring. For example, preceding text of last &quot;.&quot; of &quot;log.txt&quot; = &quot;log&quot;.

{% property start of <substring> %}

Returns the position within the string of the substring. For example, start of substring &quot;or&quot; of &quot;to be or not to be&quot; = 6.

{% type utf8 string %}

No documentation exists for this type.

