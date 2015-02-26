# type: firewall open port

The &lt;firewall open port&gt; inspectors provide access to the properties of a port that has been opened in the Windows Firewall. These properties correspond to the INetFwOpenPort interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

# built in of &lt;firewall open port&gt;

Returns the contents of the BuiltIn property of the firewall open port.

# enabled of &lt;firewall open port&gt;

Returns the contents of the Enabled property of the firewall open port.

# ip version of &lt;firewall open port&gt;

Returns the IpVersion property of the firewall open port.

# name of &lt;firewall open port&gt;

Returns the Name property of the firewall open port.

# port of &lt;firewall open port&gt;

Returns the Port property of the firewall open port.

# protocol of &lt;firewall open port&gt;

Returns the Protocol property of the firewall open port.Example: exists globally open port whose (port of it = 52311 and protocol of it = udp and enabled of it) of current profile of local policy of firewall - Returns `True` if the BES Client can receive pings.

# remote addresses of &lt;firewall open port&gt;

Returns the RemoteAddresses property of the firewall open port.

# scope of &lt;firewall open port&gt;

Returns the Scope property of the firewall open port.
