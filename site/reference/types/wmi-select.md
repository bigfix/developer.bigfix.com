# type: wmi select

The &lt;wmi select&gt; object represents a value returned as a result of a WMI select query. You can find more information at the MSDN Library (http://msdn.microsoft.com/library/) under WMI Classes. WMI inspectors can provide you with useful information about your Client computers. For instance, to get the asset tag from a dell, use: string value of select "SerialNumber from Win32_systemenclosure" of wmi.

# boolean value &lt;integer&gt; of &lt;wmi select&gt; : boolean

Returns the WMI value cast to boolean.

# boolean value of &lt;wmi select&gt; : boolean

Returns the boolean value of a &lt;wmi select&gt; object (exists only for boolean objects).

# integer value &lt;integer&gt; of &lt;wmi select&gt; : integer

Returns the WMI value cast to an integer.

# integer value of &lt;wmi select&gt; : integer

Returns the integer value of a &lt;wmi select&gt; object whose value is of type integer.

# name of &lt;wmi select&gt; : string

Returns the name of the wmi select.

# string value &lt;integer&gt; of &lt;wmi select&gt; : string

Returns the numbered string of a WMI array value.

# string value of &lt;wmi select&gt; : string

Returns the string value of the wmi select.

# time value &lt;integer&gt; of &lt;wmi select&gt; : time

Returns the numbered time of a WMI array value.

# time value of &lt;wmi select&gt; : time

Returns the time value of the wmi select whose value is of type time.

# type of &lt;wmi select&gt; : integer

Returns the type of data stored in the wmi select value. Possible values are: 8 (VT_BSTR)11 (VT_BOOL)22 (VT_INT)(See MSDN documentation for the meaning of additional values).

# &lt;wmi select&gt; as string : string

Returns a string formatted as &lt;name&gt;=&lt;value&gt; for the wmi select.
