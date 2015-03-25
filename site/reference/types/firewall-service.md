# type: firewall service

The &amp;lt;firewall service&amp;gt; inspectors provide access to the properties of a service that may be authorized to listen through the firewall. These properties correspond to the INetFwService interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &amp;#39;Windows Firewall API&amp;#39; at the msdn site (http://msdn.microsoft.com/library/).

# customized of &lt;firewall service&gt; : boolean

Returns a flag that indicates whether at least one of the ports associated with the service has been customized. Either TRUE or FALSE.

# enabled of &lt;firewall service&gt; : boolean

Returns the enabled flag for the specified firewall service.

# globally open port of &lt;firewall service&gt; : firewall open port

Returns the collection of globally open ports associated with the firewall service.Example: exists globally open port whose (port of it = 52311 and protocol of it = udp and enabled of it) of current profile of local policy of firewall - Returns `True` if the BES Client can receive pings.

# ip version of &lt;firewall service&gt; : ip version

Returns the the IP version for the specified firewall service.

# name of &lt;firewall service&gt; : string

Returns the friendly name of the firewall service.

# remote addresses of &lt;firewall service&gt; : string

Returns the contents of the RemoteAddresses property for the specified firewall service.

# scope of &lt;firewall service&gt; : firewall scope

Retrieves the contents of the Scope property of the firewall service.

# type of &lt;firewall service&gt; : firewall service type

Returns the type of the specified firewall service (file and print, upnp, remote desktop or none).
