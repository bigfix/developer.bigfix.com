# type: integer

Integers are represented internally as 64-bit signed values.

# absolute value of &lt;integer&gt; : integer

Returns the absolute value of the integer.

{{#example}}
Q: absolute value of (-42)
A: 42
I: singular integer
{{/example}}

# action &lt;integer&gt; : action

Returns the action matching the &amp;lt;integer&amp;gt; id.

# april &lt;integer&gt; : day of year

Returns the nth day of April.

{{#example}}
Q: april 1
A: April 1
I: singular day of year
{{/example}}

# april &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of April and the specified year as a date.

{{#example}}
Q: april 4 of 2015
A: Sat, 04 Apr 2015
I: singular date
{{/example}}

# april of &lt;integer&gt; : month and year

Returns a date corresponding to April of the specified year.

{{#example}}
Q: april of 1984
A: April 1984
I: singular month and year
{{/example}}

# august &lt;integer&gt; : day of year

Returns the nth day of August.

{{#example}}
Q: august 31
A: August 31
I: singular day of year
{{/example}}

# august &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of August and the specified year as a date.

{{#example}}
Q: august 31 of 1984
A: Fri, 31 Aug 1984
I: singular date
{{/example}}

# august of &lt;integer&gt; : month and year

Creates a date corresponding to August of the specified year.

{{#example}}
Q: august of 1975
A: August 1975
I: singular month and year
{{/example}}

# bes computer &lt;integer&gt; : bes computer

No documentation exists.

# bes filter &lt;integer&gt; : bes filter

Returns the filter with the specified ID. It is the same as &amp;quot;bes filter whose (id of it is &amp;lt;integer&amp;gt;)&amp;quot;.

# bit &lt;integer&gt; : bit set

Returns a bit set with the nth bit set.

{{#example}}
Q: bit 5
A: 100000
I: singular bit set
{{/example}}

# bit &lt;integer&gt; of &lt;integer&gt; : boolean

Returns `True` if the nth bit is set. Bits are numbered starting at zero. Bit 0 is the least significant bit.

{{#example}}
Q: bit 0 of 2
A: False
{{/example}}

{{#example}}
Q: bit 1 of 2
A: True
{{/example}}

# character &lt;integer&gt; : string

Returns a string containing a single ASCII character.

{{#example}}
Q: character 104 &amp; character 105
A: hi
{{/example}}

# connection status &lt;integer&gt; : connection status

Returns the connection status based on its integer value. This inspector is included to take advantage of new (or undocumented) additions to the status values.

# csidl folder &lt;integer&gt; : folder

Returns the [CSIDL](https://msdn.microsoft.com/en-us/library/windows/desktop/bb762494%28v=vs.85%29.aspx) folder corresponding to the specified integer. The [SHGetSpecialFolderLocation](https://msdn.microsoft.com/en-us/library/windows/desktop/bb762203%28v=vs.85%29.aspx) function is used to look up paths to special folders, which are identified by passing the specified integer as the second argument of the API call. These values and their meaning are described in the Windows `ShlObj.h` file found in the development SDK.

Note that some of these folders do not exist in the Local System context.

{{#example}}
Q: csidl folder 35
A: C:\ProgramData
{{/example}}

# day_of_month &lt;integer&gt; : day of month

Converts the given integer to a day of month.

{{#example}}
Q: day_of_month 11 &amp; march
A: March 11
{{/example}}

# december &lt;integer&gt; : day of year

Returns the nth day of December.

{{#example}}
Q: december 25
A: December 25
{{/example}}

# december &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of December and the specified year as a date.

{{#example}}
Q: december 19 of 2008
A: Fri, 19 Dec 2008
{{/example}}

# december of &lt;integer&gt; : month and year

Creates a date corresponding to December of the specified year.

{{#example}}
Q: december of 1993
A: December 1993
{{/example}}

# drive &lt;integer&gt; : volume

Returns the volume corresponding to the numbered drive.

# event log event type &lt;integer&gt; : event log event type

Returns an event type object corresponding to the specified number. The enumerated types are:

| value | meaning       |
|-------|---------------|
| 1     | error         |
| 2     | warning       |
| 4     | information   |
| 8     | audit success |
| 16    | audit failure |

{{#example}}
Q: event log event type 8 = audit success event log event type
A: True
{{/example}}

# extrema of &lt;integer&gt; : ( integer, integer )

Returns the minimum and maximum extreme values of the given list of integers.

{{#example}}
Q: extrema of (1; 600; 2; -5; 23)
A: -5, 600
{{/example}}

# february &lt;integer&gt; : day of year

Returns the nth day of February as a &amp;#39;day of year&amp;#39; type (month day).

# february &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of February and the specified year as a date (day of week, month day year).

# february of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to February of the specified year (as an &amp;lt;integer&amp;gt;).

# filesystem &lt;integer&gt; : volume

Returns the volume corresponding to the numbered filesystem.

# firewall action &lt;integer&gt; : firewall action

Returns the Nth enumerated type from the Firewall Action interface. This provides an alternative way to access the firewall action variables and requires Vista. For more information, see the MSDN Library entry for NET_FW_ACTION.

# firewall local policy modify state &lt;integer&gt; : firewall local policy modify state

Returns a value corresponding to the NET_FW_MODIFY_STATE enumerated type, which specifies the effect of modifications to the current policy. The &amp;lt;integer&amp;gt; specifies the zero-based enumeration, and provides an alternative access method. For more information, see the MSDN Library entry for NET_FW_MODIFY_STATE.

# firewall profile type &lt;integer&gt; : firewall profile type

Returns the firewall profile type corresponding to the given integer:0: Domain1: Standard2: Current.

# firewall scope &lt;integer&gt; : firewall scope

Returns the scope of addresses from which a port can listen.

# firewall service type &lt;integer&gt; : firewall service type

Returns the firewall service type specified by &amp;lt;integer&amp;gt;.

# install folder &lt;integer&gt; : folder

Returns a folder object corresponding to the number provided. The placement of some system folders can be found using numbers that have been associated with those folders. See folder.

# integer &lt;integer&gt; : integer

Returns an integer. The keyword is optional.

# integer to &lt;integer&gt; : integer

Returns a list of integers from zero up to the specified integer.

# internet protocol &lt;integer&gt; : internet protocol

Returns the firewall internet protocol specified by the given integer. These correspond to the Microsoft enumerated types: NET_FW_IP_PROTOCOL_TCPNET_FW_IP_PROTOCOL_UDP.

# ip version &lt;integer&gt; : ip version

Returns the the IP version for the &amp;lt;integer&amp;gt; port corresponding to the Microsoft enumerated types:0: NET_FW_IP_VERSION_V41: NET_FW_IP_VERSION_V62: NET_FW_IP_VERSION_ANY3: NET_FW_IP_VERSION_MAX.

# january &lt;integer&gt; : day of year

Returns the nth day of January as a &amp;#39;day of year&amp;#39; type (month day).

# january &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of January and the specified year as a date (day of week, month day year).

# january of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to January of the specified year (as an &amp;lt;integer&amp;gt;).

# javascript array &lt;string&gt; of &lt;integer&gt; : html

No documentation exists.

# july &lt;integer&gt; : day of year

Returns the nth day of July as a &amp;#39;day of year&amp;#39; type (month day).

# july &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of July and the specified year as a date (day of week, month day year).

# july of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to July of the specified year (as an &amp;lt;integer&amp;gt;).

# june &lt;integer&gt; : day of year

Returns the nth day of June as a &amp;#39;day of year&amp;#39; type (month day).

# june &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of June and the specified year as a date (day of week, month day year).

# june of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to June of the specified year (as an &amp;lt;integer&amp;gt;).

# march &lt;integer&gt; : day of year

Returns the nth day of March as a &amp;#39;day of year&amp;#39; type (month day).

# march &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of March and the specified year as a date (day of week, month day year).

# march of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to March of the specified year (as an &amp;lt;integer&amp;gt;).

# maximum of &lt;integer&gt; : integer

Returns the maximum of a list of integers.

# may &lt;integer&gt; : day of year

Returns the nth day of May as a &amp;#39;day of year&amp;#39; type (month day).

# may &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of May and the specified year as a date (day of week, month day year).

# may of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to May of the specified year (as an &amp;lt;integer&amp;gt;).

# mean of &lt;integer&gt; : floating point

The mean of the integer(s).

# media type &lt;integer&gt; : media type

Returns the media type based on its integer value. This inspector is included to take advantage of new (or undocumented) additions to the media types.

# minimum of &lt;integer&gt; : integer

Returns the minimum of a list of integers.

# month &lt;integer&gt; : month

Returns the month type corresponding to the given &amp;lt;integer&amp;gt;.

# november &lt;integer&gt; : day of year

Returns the nth day of November as a &amp;#39;day of year&amp;#39; type (month day).

# november &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of November and the specified year as a date (day of week, month day year).

# november of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to November of the specified year (as an &amp;lt;integer&amp;gt;).

# october &lt;integer&gt; : day of year

Returns the nth day of October as a &amp;#39;day of year&amp;#39; type (month day).

# october &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of October and the specified year as a date (day of week, month day year).

# october of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to October of the specified year (as an &amp;lt;integer&amp;gt;).

# operating system product type &lt;integer&gt; : operating system product type

Returns an object corresponding to the numbered OS product type.

# palm device &lt;integer&gt; : palm device

No documentation exists.

# process &lt;integer&gt; : process

Returns the process object corresponding to the given integer pid.

# processor &lt;integer&gt; : processor

Returns a processor object for the numbered processor. Processors are numbered from 1.

# product of &lt;integer&gt; : integer

Multiplies a list of integers, returning the product.

# scsibus &lt;integer&gt; : scsibus

Returns a SCSI bus with the given number.

# scsidevice &lt;integer&gt; : scsidevice

Returns a SCSI device with the given number.

# september &lt;integer&gt; : day of year

Returns the nth day of September as a &amp;#39;day of year&amp;#39; type (month day).

# september &lt;integer&gt; of &lt;integer&gt; : date

Returns the nth day of September and the specified year as a date (day of week, month day year).

# september of &lt;integer&gt; : month and year

Creates a date (in month year format) corresponding to September of the specified year (as an &amp;lt;integer&amp;gt;).

# set of &lt;integer&gt; : integer set

Creates a set from the given list of integers.

{{#example}}
Q: elements of set of (1; 2; 2; 3)
A: 1
A: 2
A: 3
{{/example}}

# significant digits &lt;integer&gt; of &lt;integer&gt; : integer

Returns a number with &amp;lt;integer&amp;gt; significant digits (for example, significant digits 3 of 1235569 = 1240000).

# sqrt of &lt;integer&gt; : floating point

No documentation exists.

# standard deviation of &lt;integer&gt; : floating point

The standard deviation of the integer(s).

# sum of &lt;integer&gt; : integer

Returns the sum of a list of integers.

# task action type &lt;integer&gt; : task action type

Returns the task action type according to its enumerated value:0:  TASK_ACTION_EXEC5:  TASK_ACTION_COM_HANDLER6:  TASK_ACTION_SEND_EMAIL7:  TASK_ACTION_SHOW_MESSAGE.

# task trigger type &lt;integer&gt; : task trigger type

Creates a task trigger type corresponding to the given integer.

# unique value of &lt;integer&gt; : integer with multiplicity

Returns the unique values of a given list of &amp;lt;integer&amp;gt; types, removing duplicates and sorting by value.

# volume &lt;integer&gt; : volume

A numbered property returning the specified volume.

# well known account &lt;integer&gt; : security account

Returns a security account constant corresponding to a numbered &amp;#39;well known account&amp;#39;.

# year &lt;integer&gt; : year

Creates a year object from the specified integer.

# zone &lt;integer&gt; : zone

Returns the Nth (as specified by the integer) global Solaris zone.

# &lt;integer&gt; as bit set : bit set

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

{{#example}}
Q: 42 as bit set
A: 101010
I: singular bit set
{{/example}}

# &lt;integer&gt; as bits : bit set

Returns the bits of the binary representation of the integer; bit zero is the least-significant bit.

{{#example}}
Q: 42 as bits
A: 101010
I: singular bit set
{{/example}}

# &lt;integer&gt; as day_of_month : day of month

Cast an integer as a day of the month type.

# &lt;integer&gt; as floating point : floating point

Converts an integer into a floating point number.

# &lt;integer&gt; as hexadecimal : string

Converts an integer into a hexadecimal string.

# &lt;integer&gt; as integer : integer

Reflexive cast for completeness.

# &lt;integer&gt; as month : month

Returns the name of the nth month of the year.

# &lt;integer&gt; as string : string

Converts an integer to a string.

# &lt;integer&gt; as year : year

Casts an integer as a year type.

# &lt;integer&gt; &lt; &lt;integer&gt; : boolean

No documentation exists.

# &lt;integer&gt; &lt;= &lt;integer&gt; : boolean

No documentation exists.

# &lt;integer&gt; * &lt;integer&gt; : integer

No documentation exists.

# &lt;integer&gt; + &lt;integer&gt; : integer

No documentation exists.

# &lt;integer&gt; - &lt;integer&gt; : integer

No documentation exists.

# &lt;integer&gt; / &lt;integer&gt; : integer

No documentation exists.

# &lt;integer&gt; = &lt;integer&gt; : boolean

No documentation exists.

# &lt;integer&gt; mod &lt;integer&gt; : integer

No documentation exists.

# - &lt;integer&gt; : integer

Creates the negative of the integer provided.
