---
title: wmi
---

## wmi select

The &lt;wmi select&gt; object represents a value returned as a result of a WMI select query. You can find more information at the MSDN Library (http://msdn.microsoft.com/library/) under WMI Classes. WMI inspectors can provide you with useful information about your Client computers. For instance, to get the asset tag from a dell, use: string value of select &quot;SerialNumber from Win32_systemenclosure&quot; of wmi.

#### &lt;wmi select&gt; as string : string

Returns a string formatted as &lt;name&gt;=&lt;value&gt; for the wmi select.

#### type of &lt;wmi select&gt; : integer

Returns the type of data stored in the wmi select value. Possible values are: 8 (VT_BSTR)11 (VT_BOOL)22 (VT_INT)(See MSDN documentation for the meaning of additional values).

#### time value of &lt;wmi select&gt; : time

Returns the time value of the wmi select whose value is of type time.

#### time value &lt;integer&gt; of &lt;wmi select&gt; : time

Returns the numbered time of a WMI array value.

#### string value of &lt;wmi select&gt; : string

Returns the string value of the wmi select.

#### string value &lt;integer&gt; of &lt;wmi select&gt; : string

Returns the numbered string of a WMI array value.

#### name of &lt;wmi select&gt; : string

Returns the name of the wmi select.

#### integer value of &lt;wmi select&gt; : integer

Returns the integer value of a &lt;wmi select&gt; object whose value is of type integer.

#### integer value &lt;integer&gt; of &lt;wmi select&gt; : integer

Returns the WMI value cast to an integer.

#### boolean value of &lt;wmi select&gt; : boolean

Returns the boolean value of a &lt;wmi select&gt; object (exists only for boolean objects).

#### boolean value &lt;integer&gt; of &lt;wmi select&gt; : boolean

Returns the WMI value cast to boolean.

## wmi object

The &lt;wmi object&gt; inspectors allow you to analyze the properties of WMI objects.

#### &lt;wmi object&gt; as string : string

Casts the given wmi object as a string type.

#### property of &lt;wmi object&gt; : wmi select

Returns the inspector properties of the specified wmi object.

#### property &lt;string&gt; of &lt;wmi object&gt; : wmi select

Returns the inspector properties of the form &lt;string&gt; of &lt;wmi object&gt;.Example: properties &quot;select&quot; of type &quot;wmi&quot; - Returns inspector properties of the form &quot;select of &lt;wmi&gt;&quot;.

## wmi

A &lt;wmi&gt; object provides access to the WMI (Windows Management Instrumentation) query facility. This object provides access to a large amount of configuration and client-specific data.

#### select object &lt;string&gt; of &lt;wmi&gt; : wmi object

Returns the desired property (specified by &lt;string&gt;) from the given wmi object.

#### select &lt;string&gt; of &lt;wmi&gt; : wmi select

Returns the wmi select whose name matches the string provided.

