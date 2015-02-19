---
permalink: reference/wmi-select.html
name: wmi select
---

The <wmi select> object represents a value returned as a result of a WMI select query. You can find more information at the MSDN Library (http://msdn.microsoft.com/library/) under WMI Classes. WMI inspectors can provide you with useful information about your Client computers. For instance, to get the asset tag from a dell, use: string value of select "SerialNumber from Win32_systemenclosure" of wmi.