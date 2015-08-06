# type: firewall profile

The &lt;firewall profile&gt; inspectors provide access to the firewall profile. These properties correspond to the INetFwProfile interface in the Windows Firewall API. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

# authorized application of &lt;firewall profile&gt; : firewall authorized application

Access to the AuthorizedApplications collection for this profile. This inspector can be iterated through all the authorized applications in each firewall profile.

# exceptions allowed of &lt;firewall profile&gt; : boolean

Returns the property that indicates whether exceptions should be allowed by the firewall.

# excluded interface of &lt;firewall profile&gt; : string

Gets the value of the ExcludedInterfaces property from the specified firewall profile. This property contains the list of interfaces excluded from a the profile&#39;s firewall rules. For more information, see the MSDN Library entry for INetFwPolicy2.

# firewall enabled of &lt;firewall profile&gt; : boolean

Gets the value of the FirewallEnabled setting.Example: firewall enabled of current profile of local policy of firewall - Verify that the firewall is enabled.

# globally open port of &lt;firewall profile&gt; : firewall open port

Provides access to the GloballyOpenPorts collection for this profile. This property can be iterated.

# icmp settings of &lt;firewall profile&gt; : firewall icmp settings

Gets the object governing settings for ICMP packets.

# inbound connections allowed of &lt;firewall profile&gt; : boolean

Determines whether the default action for inbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

# notifications disabled of &lt;firewall profile&gt; : boolean

Gets the value of the NotificationsDisabled setting, TRUE or FALSE.

# outbound connections allowed of &lt;firewall profile&gt; : boolean

Determines whether the default action for outbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

# remote admin settings of &lt;firewall profile&gt; : firewall remote admin settings

Gets the object containing the remote administration settings.

# rule group enabled &lt;string&gt; of &lt;firewall profile&gt; : boolean

Determines whether a specified group of firewall rules are enabled or disabled. For more information, see the MSDN Library entry for INetFwPolicy2.

# service of &lt;firewall profile&gt; : firewall service

Gets the collection containing the services for this profile. This inspector can be iterated over all services.

# type of &lt;firewall profile&gt; : firewall profile type

Returns the type of the specified firewall profile: domain, standard or current.

# unicast responses to multicast broadcast disabled of &lt;firewall profile&gt; : boolean

Gets the value of the UnicastResponsesToMulticastBroadcastDisabled setting.
