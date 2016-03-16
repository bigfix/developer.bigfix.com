# type: string

Strings are typically core objects, but some string inspectors may be client-specific. Note: A string literal is written within double quotes. Special characters must be inserted by using the percent sign followed by 2 hex digits. Special characters include those characters with ASCII codes less than the &#39;space&#39; character (hex 20) or greater than &#39;tilde&#39; character (hex 7f) as well as the percent character itself (25 hex). For example, to create a string containing a null character and a percent character use "a null is %00, the percent itself is %25". Conversion to upper and lower case is also provided. String works in combination with the string position and substring data types. A string position is a point within a string. It can be compared to an integer, but it also acts as a pointer within a string so that the preceding and following text can be extracted. A substring is a part of a larger string. All operations allowed on a string can be performed on a substring. There are two substrings "be" in the string "To be or not to be". The substrings only differ in their positions within the string.

# abbr &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;abbr&gt; tag modified by the first given string.

{% qna %}
Q: abbr "title=%22BigFix%22" of "bf"
A: &lt;abbr title="BigFix"&gt;bf&lt;/abbr&gt;
I: singular html
{% endqna %}

# abbr of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;abbr&gt; tag.

# account with privilege &lt;string&gt; : security account

Returns a security account constant corresponding to an account with the privilege specified in the string.

# acronym &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;acronym&gt; tag modified by the first given string.

# acronym of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;acronym&gt; tag.

# active device file &lt;string&gt; : file

Under Windows NT, returns a file object corresponding to the name provided. See file.

# address &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;address&gt; tag modified by the first given string.

# address of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;address&gt; tag.

# anchor &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;a&gt; tag modified by the first given string.

# anchor of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;a&gt; tag.

# application &lt;string&gt; : application

Returns the named applications (bundles) and executables as filesystem objects.

# application &lt;string&gt; : filesystem object

No documentation exists.

# application usage &lt;string&gt; : timed( time range, integer )

No documentation exists.

# application usage summary &lt;string&gt; : application usage summary

Returns the usage summary for the application specified in &lt;string&gt;.

# b &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;b&gt; tag modified by the first given string.

# b of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;b&gt; tag.

# base &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;base&gt; tag modified by the first given string.

# base of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;base&gt; tag.

# base64 decode &lt;string&gt; : string

Decode the string from [Base64](http://en.wikipedia.org/wiki/Base64).

{% qna %}
Q: base64 decode "SGVsbG8sIHdvcmxkIQ=="
A: Hello, world!
I: singular string
{% endqna %}

# base64 encode &lt;string&gt; : string

Encode the string into [Base64](http://en.wikipedia.org/wiki/Base64).

{% qna %}
Q: base64 encode "Hello, world!"
A: SGVsbG8sIHdvcmxkIQ==
I: singular string
{% endqna %}

# bes deployment option &lt;string&gt; : bes deployment option

Returns the value associated with the deployment option named by the &lt;string&gt;.

# bes domain &lt;string&gt; : bes domain

Returns the first BES Domain whose title matches the specified name.

# bes property &lt;string&gt; : bes property

Returns the first property whose name matches the given string. Note that it is not safe to assume that there is only one property with a given name.

# big &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;big&gt; tag modified by the first given string.

# big of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;big&gt; tag.

# binary operator &lt;string&gt; : binary operator

Returns the various possible binary inspectors that use the specified operators.

{% qna %}
Q: binary operators "starts with"
A: <string> starts with <regular expression>: boolean
A: <string> starts with <string>: boolean
{% endqna %}

# bit set &lt;string&gt; : bit set

Returns the bits of the binary number given by the string.

{% qna %}
Q: bit set "1010"
A: 1010
I: singular bit set
{% endqna %}

# blockquote &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;blockquote&gt; tag modified by the first given string.

# blockquote of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;blockquote&gt; tag.

# body &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;body&gt; tag modified by the first given string.

# body of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;body&gt; tag.

# boolean &lt;string&gt; : boolean

Returns a boolean. For example, boolean "TRUE".

# br &lt;string&gt; : html

Creates an HTML &lt;br/&gt; tag with an included modifier, such as class.

# bundle &lt;string&gt; : bundle

Returns a bundle (CFBundle) by name.

# capability &lt;string&gt; : capability

Converts a string to a capability object for rpm dependency version comparisons. Strings with version information take the form capability relation version, where relation is one of {&lt;,&gt;,&gt;=,&lt;=,=}. If a relation and version are not specified, then comparisons will assume a capability at any version number.

# caption &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;caption&gt; tag modified by the first given string.

# caption of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;caption&gt; tag.

# case insensitive regex &lt;string&gt; : regular expression

Returns a case-insensitive regular expression from the supplied string.

# case insensitive regular expression &lt;string&gt; : regular expression

Same as case insensitive regex &lt;string&gt;.

# cast &lt;string&gt; : cast

Returns a list of the objects that can be cast into the type specified by &lt;string&gt;.

# catalog &lt;string&gt; : message_catalog

Returns the named catalog.

# character &lt;integer&gt; of &lt;string&gt; : substring

Returns a string of length 1 made by taking the character identified by &lt;integer&gt; from the string. Numbering begins at zero.

{% qna %}
Q: character 1 of "hello"
A: e
I: singular substring
{% endqna %}

# character of &lt;string&gt; : substring

Returns the characters from the string.

{% qna %}
Q: characters of "hello"
A: h
A: e
A: l
A: l
A: o
I: plural substring
{% endqna %}

# cite &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;cite&gt; (citation) tag modified by the first given string.

# cite of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;cite&gt; (citation) tag.

# code &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;code&gt; (fixed-width font) tag modified by the first given string.

# code of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;code&gt; (fixed-width font) tag.

# col &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;col&gt; (column) tag modified by the first given string.

# col of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;col&gt; (column) tag.

# colgroup &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;colgroup&gt; (column group) tag modified by the first given string.

# colgroup of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;colgroup&gt; (column group) tag.

# concatenation &lt;html&gt; of &lt;string&gt; : html

This inspector concatenates the string items in the second argument with a separator defined by the first argument.

# concatenation &lt;string&gt; of &lt;string&gt; : string

This inspector concatenates the string items in the second argument with a separator defined by the string argument.

{% qna %}
Q: concatenation ", " of ("foo"; "bar"; "baz")
A: foo, bar, baz
I: singular string
{% endqna %}

# concatenation of &lt;string&gt; : string

Combines the supplied strings into a single string, end-to-end.

{% qna %}
Q: concatenation of ("foo"; "bar"; "baz")
A: foobarbaz
I: singular string
{% endqna %}

# control panel &lt;string&gt; : enableable_file

No documentation exists.

# country &lt;string&gt; : country

Maps a country script string (for example verAfrikaans) to its region code.

# custom site subscription effective date &lt;string&gt; : time

Returns the date the custom site (specified by &lt;string&gt;) was last subscribed or unsubscribed. It is used internally by BES to manage custom site subscriptions.

# date &lt;string&gt; : date

Converts the given string into a date. The string should be of the form &#39;Day Month Year&#39; and the returned date will be of the form &#39;Day of week, Day Month Year&#39;.

{% qna %}
Q: date "11 Mar 1984"
A: Sun, 11 Mar 1984
I: singular date
{% endqna %}

# day_of_month &lt;string&gt; : day of month

Converts the given string value (must be an integer from 1-31) to a day of month type.

# day_of_week &lt;string&gt; : day of week

Converts the given string value to a day of week type, eg. Monday, Tuesday, etcetera.

# dd &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dd&gt; (definition) tag modified by the first given string.

# dd of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dd&gt; (definition) tag.

# debian package version &lt;string&gt; : debian package version

Returns a Debian package version object from the given string.

# debian package version epoch &lt;string&gt; : debian package version epoch

Returns a Debian package version &#39;epoch&#39; object from the given string.

# debian package version revision &lt;string&gt; : debian package version revision

Returns a Debian package version revision object from the given string.

# debian package version upstream &lt;string&gt; : debian package upstream version

Returns a Debian package upstream_version object from the supplied string.

# definition list &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dl&gt; (definition) tag modified by the first given string.

# definition list of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dl&gt; (definition) tag.

# del &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;del&gt; tag modified by the first given string.

# del of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;del&gt; tag.

# device file &lt;string&gt; : device file

Returns the device file with the specified name.

# dfn &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dfn&gt; (definition) tag modified by the first given string.

# dfn of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dfn&gt; (definition) tag.

# disabled control panel &lt;string&gt; : enableable_file

No documentation exists.

# disabled extension &lt;string&gt; : enableable_file

No documentation exists.

# disabled shutdown item &lt;string&gt; : enableable_file

No documentation exists.

# disabled startup item &lt;string&gt; : enableable_file

No documentation exists.

# distinguished name &lt;string&gt; : distinguished name

Interprets a distinguished name in the textual format described by [RFC 2253](https://www.ietf.org/rfc/rfc2253.txt) and used by LDAP/Active Directory.

{% qna %}
Q: distinguished name "CN=bearmo,OU=bears,DC=example,DC=com"
A: CN=bearmo,OU=bears,DC=example,DC=com
{% endqna %}

# div &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;div&gt; (division or section) tag modified by the first given string.

# div of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;div&gt; (division or section) tag.

# domain user &lt;string&gt; : local user

Returns the user object corresponding to the specified name.

# domain user &lt;string&gt; : user

No documentation exists.

# download file &lt;string&gt; : file

This inspector is available in relevance subsitution action processing. It returns a file object with the given name from the client's download folder.

This is equivalent to:

```relevance
file "name" of download folder
```

# download path &lt;string&gt; : string

This inspector is available in relevance subsitution action processing. It returns a string corresponding to the download path of the specified file. This inspector, along with [download folder](/relevance/reference/folder.html#download-folder-folder) and [download file](/relevance/reference/string.html#download-file-string-file), is designed to be used during the prefetch process of action execution.

This is equivalent to something like:

```relevance
(pathname of download folder) & "\myfile".
```

# drive &lt;string&gt; : drive

No documentation exists.

# drive &lt;string&gt; : filesystem

Returns the volume corresponding to the named drive.

# drive &lt;string&gt; : volume

No documentation exists.

# dt &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;dt&gt; (definition) tag modified by the first given string.

# dt of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;dt&gt; (definition) tag.

# em &lt;string&gt; of &lt;string&gt; : html

Emphasize the specified string inside an &lt;em string&gt;&lt;/em&gt; tag.

# em of &lt;string&gt; : html

Emphasize the specified string inside an &lt;em&gt;&lt;/em&gt; tag.

# enabled control panel &lt;string&gt; : enableable_file

No documentation exists.

# enabled extension &lt;string&gt; : enableable_file

No documentation exists.

# enabled shutdown item &lt;string&gt; : enableable_file

No documentation exists.

# enabled startup item &lt;string&gt; : enableable_file

No documentation exists.

# error &lt;string&gt; : undefined

This expression allows you to output your own user-defined error message, typically in the &#39;else&#39; clause of an &#39;if/then/else&#39; statement.

{% qna %}
Q: error "hodor!"
E: User-defined error: hodor!
{% endqna %}

# escape of &lt;string&gt; : string

Returns a string containing a \\ for every \ character found. Useful for setting registry key values to strings in regset action commands.

# event log &lt;string&gt; : event log

Returns the named event log, which contains historical information that help to track down system and security problems. There are several distinct logs that you can specify, including:Application log: records application eventsSecurity log: recirds global or local policy audit eventsSystem log: records OS events.

# execution &lt;string&gt; : execution

No documentation exists.

# expand environment string of &lt;string&gt; : string

Uses the Windows [ExpandEnvironmentStrings](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724265%28v=vs.85%29.aspx) API to translate a string containing special Windows environment variables.

{% qna %}
Q: expand environment string of "%25windir%25\my.dll"
A: C:\Windows\my.dll
I: singular string
{% endqna %}

# expand x32 environment string of &lt;string&gt; : string

Uses the Windows [ExpandEnvironmentStrings](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724265%28v=vs.85%29.aspx) API to translate a string containing special Windows environment variables.

{% qna %}
Q: expand x32 environment string of "%25windir%25\my.dll"
A: C:\Windows\my.dll
I: singular string
{% endqna %}

# expand x64 environment string of &lt;string&gt; : string

Given an environment string such as %ProgramFiles%, this inspector expands it to &#39;C:\Program Files (x86)&#39;. Although similar to &#39;expand environment string of &lt;string&gt;&#39;, this inspector works on 64-bit Windows systems only. On a 32-bit system, it returns &#39;No Such Object&#39;.

# extension &lt;string&gt; : enableable_file

No documentation exists.

# fifo file &lt;string&gt; : fifo file

Returns the FIFO file (named pipe) with the given name.

# file &lt;string&gt; : file

Returns a filesystem object corresponding to the full pathname provided in &lt;string&gt;.

# file signature &lt;string&gt; : file signature

Turn a string into a file signature (four letters, for example FNDR).

# file type &lt;string&gt; : file type

The phrase &#39;file type&#39; can be used to create a file type object from a string.

# fileset version record &lt;string&gt; : fileset version record

Returns a fileset version record specified by the string in the format "ver.rel.mod.fix".

# fileset version requirement &lt;string&gt; : fileset version requirement

Returns a fileset version requirement specified by the string in the format "lpp_name ver.rel.mod.fix".

# filesystem &lt;string&gt; : filesystem

Returns the filesystem corresponding to the specified name. On a Macintosh, this inspector returns a &lt;volume&gt; object.

# filesystem &lt;string&gt; : volume

No documentation exists.

# first &lt;integer&gt; of &lt;string&gt; : substring

Returns a substring containing the number of characters specified from the given string.

{% qna %}
Q: first 5 of "To be or not to be"
A: To be
{% endqna %}

# first &lt;string&gt; of &lt;string&gt; : substring

Returns a substring containing the first occurrence of the name provided.

{% qna %}
Q: preceding text of first "." of "access.log.1"
A: access
{% endqna %}

# first match &lt;regular expression&gt; of &lt;string&gt; : regular expression match

Creates an object containing the first match to the regular expression in the given string

# floating point &lt;string&gt; : floating point

Creates a floating point number from the provided string.

# folder &lt;string&gt; : folder

Returns a folder object for the name provided. See drive.

# format &lt;string&gt; : format

Returns the specified string into a format type which can be used to print formatted variables.

# framework &lt;string&gt; : folder

No documentation exists.

# full wmi &lt;string&gt; : wmi

Returns a wmi object which can retrieve all values, including system values.

# gestalt &lt;string&gt; : integer

This reads a 32 bit integer from the MacOS. The selector name is the four character OSType that chooses which item is being inspected. The interpretation of the result depends on the selector. It might represent an integer or a version, for instance.

# grub config file &lt;string&gt; : grub config file

Returns the grub config file at the path specified by the string.

# h1 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h1&gt; (header) tag modified by the first given string.

# h1 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h1&gt; (header) tag.

# h2 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h2&gt; (header) tag modified by the first given string.

# h2 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h2&gt; (header) tag.

# h3 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h3&gt; (header) tag modified by the first given string.

# h3 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h3&gt; (header) tag.

# h4 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h4&gt; (header) tag modified by the first given string.

# h4 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h4&gt; (header) tag.

# h5 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h5&gt; (header) tag modified by the first given string.

# h5 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h5&gt; (header) tag.

# h6 &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;h6&gt; (header) tag modified by the first given string.

# h6 of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;h6&gt; (header) tag.

# head &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;head&gt; tag modified by the first given string.

# head of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;head&gt; tag.

# hexadecimal integer &lt;string&gt; : integer

Creates an integer from the provided hexadecimal value.

# hexadecimal string &lt;string&gt; : string

Creates a string from the given hexadecimal value.

# hfs file &lt;string&gt; : file

Returns the hierachical file system (HFS) file specified by &lt;string&gt;.

# hfs folder &lt;string&gt; : folder

Returns the hierachical file system (HFS) folder specified by &lt;string&gt;.

# hfs item &lt;string&gt; : filesystem object

Returns a filesystem object with the specified item name. The Macintosh has two different path types it can output. HFS (Hierarchical File System) was an OS9 format where the path separator was &#39;:&#39; and there were multiple roots (each volume). POSIX has superseded HFS and is single rooted with &#39;/&#39; as a separator.  All of the Macintosh inspectors that are not otherwise specified default to the POSIX version.

# hr &lt;string&gt; : html

Creates a horizontal line tag with an option specfied by the string &lt;hr string/&gt;.

# html &lt;string&gt; : html

Embeds the specified string between &lt;html&gt;&lt;/html&gt; tags.

# html &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;html&gt; tag modified by the first given string.

# html of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;html&gt; tag.

# html tag &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the second string enclosed in a tag specified by the first string.

# ins &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;ins&gt; (insert) tag modified by the first given string.

# ins of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;ins&gt; (insert) tag.

# integer &lt;string&gt; : integer

Returns integer for name provided.

# ips repo &lt;string&gt; : ips repo

No documentation exists.

# ipv4 address &lt;string&gt; : ipv4 address

Returns an ipv4 address for the string provided.

# ipv4or6 address &lt;string&gt; : ipv4or6 address

Returns an ipv4or6 address object as described by the given string.

# ipv6 address &lt;string&gt; : ipv6 address

Converts a string representations of an IPv6 address (with colons and/or dots) into an IPv6 address type.

# italic &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;i&gt; tag modified by the first given string.

# italic of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;i&gt; tag.

# item &lt;string&gt; : filesystem object

Returns a filesystem object with the given name, either a file or a folder.

# javascript array &lt;string&gt; of &lt;string&gt; : html

No documentation exists.

# json of &lt;string&gt; : json value

Returns a [JSON](https://en.wikipedia.org/wiki/JSON) object for the string.

{% qna %}
Q: json of "[1, 2, 3]"
A: [1,2,3]
{% endqna %}

# kbd &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;kbd&gt; (keyboard entry) tag modified by the first given string.

# kbd of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;kbd&gt; (keyboard entry) tag.

# last &lt;integer&gt; of &lt;string&gt; : substring

Returns a substring containing the number of characters specified.

{% qna %}
Q: last 5 of "Hello Kitty"
A: Kitty
{% endqna %}

# last &lt;string&gt; of &lt;string&gt; : substring

{% qna %}
Q: following text of last "." of "hello.exe"
A: exe
{% endqna %}

# length of &lt;string&gt; : integer

Returns the number of characters in the string.

# li &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;li&gt; (list) tag modified by the first given string.

# li of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;li&gt; (list) tag.

# link &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;link&gt; tag modified by the first given string.

# link of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;link&gt; tag.

# local group &lt;string&gt; : local group

Returns a local group corresponding to the given name, such as Adminstrator, Guests, and others. For backward compatibility, the &#39;as string&#39; cast of this inspector only returns the user name, not the other components of the sid. For all parts, use &#39;component string&#39; instead.

# local mssql database &lt;string&gt; : local mssql database

Returns the local Microsoft SQL (MSSQL) database object identified by the name provided.

# local time &lt;string&gt; : time

Returns a time object for the name provided. See time.

# local user &lt;string&gt; : local user

Returns the Active Directory local user object for the specified local user. This allows inspection of AD properties for that user, whether cached or currently logged in.

# local user &lt;string&gt; : user

Returns the local user object specified by the name &lt;string&gt;.

On Unix/Linux platform with Bigfix client version below 9.5, this returns only logged-on users. Since 9.5, this returns all local users, logged in or not.

# match &lt;regular expression&gt; of &lt;string&gt; : regular expression match

Creates an object containing all the matches to the regular expression in the given string.

# md5 of &lt;string&gt; : string

Returns the md5 of the string. This inspector is not available in FIPS mode.

{% qna %}
Q: md5 of "bigfix"
A: 19ef736567bdec67fdca33c30f6e280f
{% endqna %}

# meta &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;meta&gt; tag modified by the first given string.

# meta of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;meta&gt; tag.

# module &lt;string&gt; : module

For BigFix internal use only.

# month &lt;string&gt; : month

Returns a month type corresponding to the given &lt;string&gt;.

# native application &lt;string&gt; : application

No documentation exists.

# native file &lt;string&gt; : file

No documentation exists.

# native folder &lt;string&gt; : folder

No documentation exists.

# network option &lt;string&gt; : network_option

Returns the network parameter object corresponding to the specified string.

# network share &lt;string&gt; : network share

Creates a named network shared object.

# numeric value of &lt;string&gt; : integer

Returns an integer for the first numeric value in the string.Example: numeric value of "string 123 xyz 45" = 123 - Returns `True`.

# ol &lt;string&gt; of &lt;string&gt; : html

Creates an ordered list out of &lt;string2&gt; with an optional style specified by &lt;string1&gt;.

# ol of &lt;string&gt; : html

Creates an ordered list out of the &lt;string&gt;.

# ordered list &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;ol&gt;&lt;li&gt; tag, where the &lt;ol&gt; tag is modified by the first given string.

# ordered list of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;ol&gt;&lt;li&gt; tag.

# p &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;p&gt; tag modified by the first given string.

# p of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;p&gt; tag.

# palm device &lt;string&gt; : palm device

No documentation exists.

# parameter &lt;string&gt; : string

This inspector is a synonym for the parameter &lt;string&gt; of &lt;action&gt;. It looks up the value of the action parameter specified by &lt;string&gt;. This is used in conjunction with the parameter set command.

# pending restart &lt;string&gt; : boolean

Immediately after running an [action requires restart](/action-script/reference/flow-control/action-requires-restart.html) command like:

```actionscript
action requires restart "PatchGroupX"
```

The following expression will be true until the next restart:

```relevance
pending restart "PatchGroupX"
```

# percent decode &lt;string&gt; : string

No documentation exists.

# percent encode &lt;string&gt; : string

No documentation exists.

# position &lt;integer&gt; of &lt;string&gt; : string position

Returns a string position pointing to the character position specified. The first character is at position 0.

# position of &lt;string&gt; : string position

Returns the positions of the string.

# posix file &lt;string&gt; : file

Returns the POSIX file specified by &lt;string&gt;.

# posix folder &lt;string&gt; : folder

Returns the POSIX folder specified by &lt;string&gt;.

# posix item &lt;string&gt; : filesystem object

Returns a filesystem object with the given name, either a file or a folder, using POSIX formatting.

# pre &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in an &lt;pre&gt; (preformatted) tag modified by the first given string.

# pre of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in an &lt;pre&gt; (preformatted) tag.

# preference &lt;string&gt; : preference

The named set of preferences.

# process &lt;string&gt; : process

Returns the process object corresponding to the specified name.

{% qna %}
Q: pid of process "node"
A: 1
{% endqna %}

# property &lt;string&gt; : property

Typically used in the plural, returns the "line" inspector properties.

# q &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;q&gt; (quotation) tag modified by the first given string.

# q of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;q&gt; (quotation) tag.

# recent application &lt;string&gt; : application

Returns an application for the name provided it has recently executed. The name is assumed to be the last part of an executable file name.

# regapp &lt;string&gt; : application

Returns an application object for the name provided. See application and regapp.

# regex &lt;string&gt; : regular expression

Creates a regex object from the given string.

# regex escape of &lt;string&gt; : string

Creates a new string that escapes the special characters .[]{}()\*+?|^$,-.

# regular expression &lt;string&gt; : regular expression

Same as regex &lt;string&gt;.

# rope &lt;string&gt; : rope

Creates a rope object from the given string.

# rpm &lt;string&gt; : rpmdatabase

Returns an object corresponding to the database named by &lt;string&gt;.

# rpm package release &lt;string&gt; : rpm package release

Returns the named RPM package release.

# rpm package version &lt;string&gt; : rpm package version

Returns the named RPM package version.

# rpm package version record &lt;string&gt; : rpm package version record

Returns the named RPM package version record.

# running application &lt;string&gt; : application

Returns an application for the name provided it is currently executing. The name is assumed to be the last part of an executable file name.

# running service &lt;string&gt; : service

Returns the running service object matching the name provided.

# samp &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;samp&gt; (sample) tag modified by the first given string.

# samp of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;samp&gt; (sample) tag.

# scheduled task &lt;string&gt; : scheduled task

Returns a scheduled task with the specified name. It attempts to use the 2.0 interface if available, otherwise it uses the 1.0 interface. This method only looks in the root folder for 2.0 tasks, whch include hidden tasks.

# security account &lt;string&gt; : security account

This is a named inspector that uses the LookupAccountName API function to return an object representing a user or group.

# security descriptor &lt;string&gt; : security descriptor

No documentation exists.

# service &lt;string&gt; : dummy

No documentation exists.

# service &lt;string&gt; : service

Returns the service object matching the name provided, regardless of its running state.On a Macintosh, returns a &lt;dummy&gt; type.

# set of &lt;string&gt; : string set

Creates a set from the given list of semicolon-separated strings.

# sha1 of &lt;string&gt; : string

Returns the sha1 of the string.

{% qna %}
Q: sha1 of "bigfix"
A: 43af5f9db6b65e1bc3dd7048808d1fce1038ffbc
{% endqna %}

# sha224 of &lt;string&gt; : string

Returns the sha2-224 of the string.

{% qna %}
Q: sha224 of "bigfix"
A: b6396d1e9b44898da4d9823b5230ea462b4112c88b4a8dbfe66c6fe9
{% endqna %}

# sha256 of &lt;string&gt; : string

Returns the sha2-256 of the string.

{% qna %}
Q: sha256 of "bigfix"
A: d71451abd87cc3fe47d90616fc7498f89d41bbf7e760d50897950d6b59a65b5b
{% endqna %}

# sha2_224 of &lt;string&gt; : string

Returns the sha2-224 of the string.

{% qna %}
Q: sha2_224 of "bigfix"
A: b6396d1e9b44898da4d9823b5230ea462b4112c88b4a8dbfe66c6fe9
{% endqna %}

# sha2_256 of &lt;string&gt; : string

Returns the sha2-256 of the string.

{% qna %}
Q: sha2_256 of "bigfix"
A: d71451abd87cc3fe47d90616fc7498f89d41bbf7e760d50897950d6b59a65b5b
{% endqna %}

# sha2_384 of &lt;string&gt; : string

Returns the sha2-384 of the string.

{% qna %}
Q: sha2_384 of "bigfix"
A: 073f25784413df63213f501404737ddb37c9d796d4e43c5d0877dd190b2d5da0761fc28d91e799b12748fe6b1320f869
{% endqna %}

# sha2_512 of &lt;string&gt; : string

Returns the sha2-512 of the string.

{% qna %}
Q: sha2_512 of "bigfix"
A: 2d142f89401703e3227bd27d77f6e24dabac79e50dd4b4388e8d2d712e68c2b307a1661d647b24538f796428696e7a8a6c5a051a6b4c50a605c61001ff29c96d
{% endqna %}

# sha384 of &lt;string&gt; : string

Returns the sha2-384 of the string.

{% qna %}
Q: sha2_384 of "bigfix"
A: 073f25784413df63213f501404737ddb37c9d796d4e43c5d0877dd190b2d5da0761fc28d91e799b12748fe6b1320f869
{% endqna %}

# sha512 of &lt;string&gt; : string

Returns the sha2-512 of the string.

{% qna %}
Q: sha512 of "bigfix"
A: 2d142f89401703e3227bd27d77f6e24dabac79e50dd4b4388e8d2d712e68c2b307a1661d647b24538f796428696e7a8a6c5a051a6b4c50a605c61001ff29c96d
{% endqna %}

# shutdown item &lt;string&gt; : enableable_file

No documentation exists.

# sid &lt;string&gt; : security identifier

No documentation exists.

# site &lt;string&gt; : site

Returns a site object for the name provided. The name is the URL of the site location. See site.

# site version list &lt;string&gt; : site version list

Returns a textual representation of a site version list ("manyversion").

# small &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;small&gt; tag modified by the first given string.

# small of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;small&gt; tag.

# socket file &lt;string&gt; : socket file

Returns the named socket file.

# span &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;span&gt; tag modified by the first given string.

# span of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;span&gt; tag.

# stage &lt;string&gt; : stage

No documentation exists.

# startup item &lt;string&gt; : enableable_file

No documentation exists.

# string &lt;string&gt; : string

Returns a string for the name provided. The keyword string is optional. For example, string "hi" = "hi".

# strong &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;strong&gt; tag modified by the first given string.

# strong of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;strong&gt; tag.

# strverscmp version &lt;string&gt; : strverscmp version

Creates a strverscmp version, which is compared to other versions using the OS supplied strverscmp function.

# sub &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;sub&gt; (subscript) tag modified by the first given string.

# sub of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;sub&gt; (subscript) tag.

# substring &lt;( integer, integer )&gt; of &lt;string&gt; : substring

Returns a substring of the specified string as defined by the start and length. The first integer is the start and the second integer is the length.

{% qna %}
Q: substring (2, 2) of "abcdef"
A: cd
{% endqna %}

{% qna %}
Q: substrings (integers in (0, length of it, 2), 2) of "abcdef"
A: ab
A: cd
A: ef
{% endqna %}

# substring &lt;string&gt; of &lt;string&gt; : substring

Iterates through the string returning all the substrings matching the name given.

{% qna %}
Q: number of substrings "be" of "to be or not to be"
A: 2
{% endqna %}

{% qna %}
Q: preceding texts of substrings "be" of "to be or not to be"
A: to 
A: to be or not to 
{% endqna %}

# substring after &lt;string&gt; of &lt;string&gt; : substring

Returns the substrings that come after the first string delimiter.

{% qna %}
Q: substring after "=" of "name=value"
A: value
{% endqna %}

# substring before &lt;string&gt; of &lt;string&gt; : substring

Returns the substrings that come before the first string delimiter.

{% qna %}
Q: substring before "=" of "name=value"
A: name
{% endqna %}

# substring between &lt;string&gt; of &lt;string&gt; : substring

Returns the substring in the second string found between two instances of the first string.

{% qna %}
Q: substrings between "." of "abc.def.hij.klm"
A: def
A: hij
{% endqna %}

# substring separated by &lt;string&gt; of &lt;string&gt; : substring

Returns a substring (or set of substrings) delimited by the first string.

{% qna %}
Q: substrings separated by "," of "1,2,3"
A: 1
A: 2
A: 3
{% endqna %}

# sup &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;sup&gt; (superscript) tag modified by the first given string.

# sup of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;sup&gt; (superscript) tag.

# symlink &lt;string&gt; : symlink

Returns a symlink from the specified string.

# system file &lt;string&gt; : file

Returns a file object corresponding to the relative pathname provided.

# system ini device file &lt;string&gt; : file

Returns a file object corresponding to a device file loaded as a result of a device= line of the system.ini file.

# system x32 file &lt;string&gt; : file

No documentation exists.

# system x64 file &lt;string&gt; : file

No documentation exists.

# table &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;table&gt; tag modified by the first given string.

# table of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;table&gt; tag.

# task folder &lt;string&gt; : task folder

Gets the task folder with the given string name.

# tbody &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tbody&gt; tag modified by the first given string.

# tbody of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tbody&gt; tag.

# td &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;td&gt; (table cell) tag modified by the first given string.

# td of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;td&gt; (table cell) tag.

# tfoot &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tfoot&gt; (table foot) tag modified by the first given string.

# tfoot of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tfoot&gt; (table foot) tag.

# th &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;th&gt; (table header) tag modified by the first given string.

# th of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;th&gt; (table header) tag.

# thead &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;thead&gt; (table header) tag modified by the first given string.

# thead of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;thead&gt; (table header) tag.

# time &lt;string&gt; : time

Returns a time object for the name provided. See time.

# time interval &lt;string&gt; : time interval

Creates a time interval from the string.

# time zone &lt;string&gt; : time zone

Returns a time zone object for the name provided.

# time_of_day &lt;string&gt; : time of day

Creates a time of day object out of the given string.

# title &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;title&gt; tag modified by the first given string.

# title of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;title&gt; tag.

# tr &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tr&gt; (table row) tag modified by the first given string.

# tr of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tr&gt; (table row) tag.

# tt &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;tt&gt; (teletype font) tag modified by the first given string.

# tt of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;tt&gt; (teletype font) tag.

# tuple string item &lt;integer&gt; of &lt;string&gt; : string

Parses the given string as if it were a tuple result string and returns the string which is the nth item of the tuple. The tuple inspectors used to be session-only, but as of version 8.0, they are core inspectors, available to all platforms at all times.

# tuple string item of &lt;string&gt; : string

Parses the given string as if it were a tuple result string and iterates over the &lt;string&gt; objects that make up the tuple. The tuple inspectors used to be session-only, but as of version 8.0, they are core inspectors, available to all platforms at all times.

# type &lt;string&gt; : type

No documentation exists.

# ul &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;ul&gt; (unordered list) tag modified by the first given string.

# ul of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;ul&gt; (unordered list) tag.

# unary operator &lt;string&gt; : unary operator

Typically used in the plural, this inspector returns a list of objects that use the specified operator.

# unique value of &lt;string&gt; : string with multiplicity

Returns the unique values of a given list of &lt;string&gt; types, removing duplicates and sorting by value. As of version 6.0 of BES, this inspector returns a &lt;string with multiplicity&gt;.

# universal time &lt;string&gt; : time

Returns a time object for the name provided. See time.

# unordered list &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;ul&gt;&lt;li&gt; (unordered list item) tag modified by the first given string.

# unordered list of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;ul&gt;&lt;li&gt; (unordered list item) tag.

# user &lt;string&gt; : user

Returns the user specified by &lt;string&gt;.

# uuid &lt;string&gt; : uuid

Returns the named UUID (Universally Unique ID).

# var &lt;string&gt; of &lt;string&gt; : html

Returns an HTML snippet with the specified string enclosed in a &lt;var&gt; (variable type) tag modified by the first given string.

# var of &lt;string&gt; : html

Returns an HTML snippet containing the specified string enclosed in a &lt;var&gt; (variable type) tag.

# version &lt;string&gt; : version

Short hand for &#39;file version&#39;.

# volume &lt;string&gt; : volume

A numbered property returning the specified volume.

# windows display time &lt;string&gt; : time

Returns a string that may match the time shown in the Windows file system.

# windows file &lt;string&gt; : file

Returns a file object corresponding to the relative pathname (within the Windows folder) provided. See file.

# winrt package &lt;string&gt; : winrt package

No documentation exists.

# wmi &lt;string&gt; : wmi

Returns the wmi object corresponding to the namespace string provided.

# x32 application &lt;string&gt; : application

Returns an object corresponding to the 32-bit application specified by &lt;string&gt;.

# x32 file &lt;string&gt; : file

Returns an object corresponding to a 32 bit file with name specified by &lt;string&gt;.

# x32 folder &lt;string&gt; : folder

Returns a filesystem object corresponding to a 32-bit folder.

# x64 application &lt;string&gt; : application

Returns an object corresponding to the 64-bit application specified by &lt;string&gt;. On a 32-bit computer, this is equivalent to a normal application inspector, but on a 64-bit machine, this inspector returns an object that has filesystem redirection disabled.

# x64 file &lt;string&gt; : file

Returns an object corresponding to a 64 bit file with pathname specified by &lt;string&gt;. On a 32-bit computer, this is equivalent to a normal file inspector, but on a 64-bit machine, this inspector returns an object that has filesystem redirection disabled.

# x64 folder &lt;string&gt; : folder

Returns a filesystem object corresponding to a 64-bit folder with the given pathname. On a 32-bit computer, this is equivalent to a normal folder inspector, but on a 64-bit machine, this inspector returns an object that has filesystem redirection disabled. This action is transitive: any resulting filesystem objects will also have redirection disabled. For example, "pathnames of files of x64 folder &lt;path&gt;" will disable redirection when locating the folder, iterating over the files in the folder and calculating pathnames.

# xml document of &lt;string&gt; : xml dom document

No documentation exists.

# year &lt;string&gt; : year

Creates a year object from the specified string.

# zone &lt;string&gt; : zone

Returns the named global Solaris zone.

# zoned time_of_day &lt;string&gt; : time of day with time zone

Returns a &#39;time of day with time zone&#39; object from the specified string.

# &lt;string&gt; as boolean : boolean

Returns a boolean value for the string. All possible capitalization&#39;s of "TRUE" and "FALSE" will convert successfully.

# &lt;string&gt; as date : date

Casts a string as a date type.

# &lt;string&gt; as day_of_month : day of month

Casts a string as a day of the month (eg. 28).

# &lt;string&gt; as day_of_week : day of week

Casts a string as a day of the week.

# &lt;string&gt; as floating point : floating point

Converts the contents of a string into a floating point number.Example: "4.5" as floating point - Returns 4.5.

# &lt;string&gt; as hexadecimal : string

Converts a string to a hexadecimal number.

# &lt;string&gt; as html : html

Casts a string into html.

# &lt;string&gt; as integer : integer

Returns an integer value for the string provided. If the string contains anything but ASCII digits, the conversion will fail. Use numeric value for more liberal parsing rules.

# &lt;string&gt; as ipv4or6 address : ipv4or6 address

Converts a string version of an IP address into the flexible ipv4or6 address format.

# &lt;string&gt; as ipv6 address : ipv6 address

Converts a string representations of an IPv6 address (with colons and/or dots) as an IPv6 address type.

# &lt;string&gt; as left trimmed string : string

Trims the leading spaces from a string.

# &lt;string&gt; as local time : time

Returns a local time object from a properly formatted string. See &lt;time&gt;.

# &lt;string&gt; as local zoned time_of_day : time of day with time zone

Converts a string to a time of day with local time zone.

# &lt;string&gt; as lowercase : string

Returns a lowercase version of the string provided.

# &lt;string&gt; as month : month

Converts a string into a month.

# &lt;string&gt; as right trimmed string : string

Trims the trailing spaces from a string.

# &lt;string&gt; as site version list : site version list

Converts a string into a site version list.

# &lt;string&gt; as string : string

Returns the string provided.

# &lt;string&gt; as strverscmp version : strverscmp version

Converts a string to strverscmp version, which is compared to other versions using the OS supplied strverscmp function.

# &lt;string&gt; as time : time

Returns a time object from a properly formatted string. See &lt;time&gt;.

# &lt;string&gt; as time interval : time interval

Returns a time interval object from a properly formatted string. Expects strings formatted as ddd days, HH:MM:SS.mmmmmm.

# &lt;string&gt; as time zone : time zone

Returns a time zone object from a properly formatted string. See &lt;time zone&gt;.

# &lt;string&gt; as time_of_day : time of day

Converts a string to a time_of_day type.

# &lt;string&gt; as trimmed string : string

Trims the leading and trailing spaces off of the specified string.

# &lt;string&gt; as universal time : time

Returns a universal time object from a properly formatted string.

# &lt;string&gt; as universal zoned time_of_day : time of day with time zone

Converts a string into a universal zoned time of day.

# &lt;string&gt; as uppercase : string

Returns an uppercase version of the string provided.

# &lt;string&gt; as version : version

Returns a version if the string can be parsed as a version. The first numeric set of characters delimited with period, comma or comma-space is returned.

# &lt;string&gt; as windows display time : time

Returns a Windows display time object from a properly formatted string. See &lt;Time&gt;.

# &lt;string&gt; as year : year

Converts a string into a year.

# &lt;string&gt; as zoned time_of_day : time of day with time zone

Converts a string into a zoned time of day.

# &lt;string&gt; &amp; &lt;string&gt; : string

Concatenates two strings, producing a new string.

# &lt;string&gt; &lt; &lt;string&gt; : boolean

No documentation exists.

# &lt;string&gt; &lt;= &lt;string&gt; : boolean

No documentation exists.

# &lt;string&gt; = &lt;string&gt; : boolean

No documentation exists.

# &lt;string&gt; contains &lt;string&gt; : boolean

Returns a boolean TRUE if the first string contains the second string.

# &lt;string&gt; ends with &lt;string&gt; : boolean

Returns a boolean TRUE if the first string ends with the second string.

# &lt;string&gt; starts with &lt;string&gt; : boolean

Returns a boolean TRUE if the first string starts with the second string.
