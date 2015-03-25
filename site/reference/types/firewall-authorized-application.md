# type: firewall authorized application

The &lt;firewall authorized application&gt; inspectors apply to applications that are authorized to exchange traffic through the Windows Firewall. These properties correspond to the INetFwAuthorizedApplication interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

# enabled of &lt;firewall authorized application&gt; : boolean

Returns the contents of the Enabled property for the specified application. Returns `True` if the settings for this application are currently enabled.

# ip version of &lt;firewall authorized application&gt; : ip version

Returns the contents of the IpVersion property for the specified application.

# name of &lt;firewall authorized application&gt; : string

Returns the contents of the Friendly Name property for the specified application.

# process image file name of &lt;firewall authorized application&gt; : string

Returns the contents of the ProcessImageFileName property for the specified application.

# remote addresses of &lt;firewall authorized application&gt; : string

Returns the contents of the RemoteAddresses property for the specified application. This property accesses a set of remote addresses that an application can use to listen for traffic.

# scope of &lt;firewall authorized application&gt; : firewall scope

Returns the contents of the Scope property for the specified application. This property controls the network scope that a port can listen to.
