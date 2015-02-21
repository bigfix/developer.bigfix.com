---
title: wmi
---

{% type wmi select%}

The &lt;wmi select&gt; object represents a value returned as a result of a WMI select query. You can find more information at the MSDN Library (http://msdn.microsoft.com/library/) under WMI Classes. WMI inspectors can provide you with useful information about your Client computers. For instance, to get the asset tag from a dell, use: string value of select &quot;SerialNumber from Win32_systemenclosure&quot; of wmi.

{% property <wmi select> as string %}

Returns a string formatted as &lt;name&gt;=&lt;value&gt; for the wmi select.

{% property type of <wmi select> %}

Returns the type of data stored in the wmi select value. Possible values are: 8 (VT_BSTR)11 (VT_BOOL)22 (VT_INT)(See MSDN documentation for the meaning of additional values).

{% property time value of <wmi select> %}

Returns the time value of the wmi select whose value is of type time.

{% property time value <integer> of <wmi select> %}

Returns the numbered time of a WMI array value.

{% property string value of <wmi select> %}

Returns the string value of the wmi select.

{% property string value <integer> of <wmi select> %}

Returns the numbered string of a WMI array value.

{% property name of <wmi select> %}

Returns the name of the wmi select.

{% property integer value of <wmi select> %}

Returns the integer value of a &lt;wmi select&gt; object whose value is of type integer.

{% property integer value <integer> of <wmi select> %}

Returns the WMI value cast to an integer.

{% property boolean value of <wmi select> %}

Returns the boolean value of a &lt;wmi select&gt; object (exists only for boolean objects).

{% property boolean value <integer> of <wmi select> %}

Returns the WMI value cast to boolean.

{% type wmi object%}

The &lt;wmi object&gt; inspectors allow you to analyze the properties of WMI objects.

{% property <wmi object> as string %}

Casts the given wmi object as a string type.

{% property property of <wmi object> %}

Returns the inspector properties of the specified wmi object.

{% property property <string> of <wmi object> %}

Returns the inspector properties of the form &lt;string&gt; of &lt;wmi object&gt;.Example: properties &quot;select&quot; of type &quot;wmi&quot; - Returns inspector properties of the form &quot;select of &lt;wmi&gt;&quot;.

{% type wmi%}

A &lt;wmi&gt; object provides access to the WMI (Windows Management Instrumentation) query facility. This object provides access to a large amount of configuration and client-specific data.

{% property select object <string> of <wmi> %}

Returns the desired property (specified by &lt;string&gt;) from the given wmi object.

{% property select <string> of <wmi> %}

Returns the wmi select whose name matches the string provided.

