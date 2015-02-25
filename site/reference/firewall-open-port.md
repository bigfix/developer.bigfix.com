# firewall open port

The &lt;firewall open port&gt; inspectors provide access to the properties of a port that has been opened in the Windows Firewall. These properties correspond to the INetFwOpenPort interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

# built in of [firewall open port]

Returns the contents of the BuiltIn property of the firewall open port.

# enabled of [firewall open port]

Returns the contents of the Enabled property of the firewall open port.

# ip version of [firewall open port]

Returns the IpVersion property of the firewall open port.

# name of [firewall open port]

Returns the Name property of the firewall open port.

# port of [firewall open port]

Returns the Port property of the firewall open port.

# protocol of [firewall open port]

Returns the Protocol property of the firewall open port.Example: exists globally open port whose (port of it = 52311 and protocol of it = udp and enabled of it) of current profile of local policy of firewall - Returns `True` if the BES Client can receive pings.

# remote addresses of [firewall open port]

Returns the RemoteAddresses property of the firewall open port.

# scope of [firewall open port]

Returns the Scope property of the firewall open port.
