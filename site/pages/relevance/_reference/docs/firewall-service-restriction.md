# type: firewall service restriction

The &lt;firewall service restriction&gt; inspectors provide a wrapper for the Windows Firewall Service Restriction. They are Vista-only. On a non-Vista machine, they return no results. For more information see the MSDN Library reference to INetFwServiceRestriction at http://msdn.microsoft.com/library/.

# rule of &lt;firewall service restriction&gt; : firewall rule

Retrieves the collection of Windows Service Hardening network rules for the specified firewall service restriction. For more information, see the MSDN Library section on INetFwServiceRestriction.

# service restricted &lt;( string, string )&gt; of &lt;firewall service restriction&gt; : boolean

Returns the service restriction state of a given service. There are two strings passed to define the restriction: the service name and the application name. For more information, see the MSDN Library section on INetFwServiceRestriction.
