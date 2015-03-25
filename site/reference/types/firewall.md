# type: firewall

The Firewall inspectors allow you to view the settings of the Windows Firewall on Windows Clients. By inspecting the firewall properties, you can determine which applications have access to unsolicited traffic and how the firewall is configured for various subsets of your network. The Windows Firewall is supported on Windows XP SP2. For more information, search for &amp;#39;Windows Firewall API&amp;#39; at the MSDN site (http://msdn.microsoft.com/library/).

# current profile type of &lt;firewall&gt; : firewall profile type

Returns the current profile type, corresponding to the Microsoft Windows Firewall enumerated type: NET_FW_PROFILE_TYPE.

# local policy modify state of &lt;firewall&gt; : firewall local policy modify state

Determines if adding or setting a rule or group of rules will take effect in the specified firewall profile. For more information, see the MSDN Library entry for INetFwPolicy2.

# local policy of &lt;firewall&gt; : firewall policy

Returns the local policy of the specified firewall.

# profile type of &lt;firewall&gt; : firewall profile type

No documentation exists.

# rule group currently enabled &lt;string&gt; of &lt;firewall&gt; : boolean

Determines whether a specified group of firewall rules is enabled or disabled for the current profile, considering the firewall&amp;#39;s state, BlockAllInboundTraffic state and group policy overrides state. The string is used to group rules together. It can be the group name or an indirect string to the group name in the form of &amp;quot;@yourresourcedll.dll,-23255.&amp;quot; Rules belonging to this group will be queried.

# rule of &lt;firewall&gt; : firewall rule

Retrieves the collection of rules for the specified firewall. For more information, see the MSDN Library article on INetFwPolicy2.

# service restriction of &lt;firewall&gt; : firewall service restriction

Retrieves the access interface to manipulate the Windows Service Hardening store. On Windows operating systems earlier than Vista, this inspector always returns no-such-object. For more information, see the MSDN Library entry for INetFwPolicy2.
