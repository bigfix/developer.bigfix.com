# firewall profile

The &lt;firewall profile&gt; inspectors provide access to the firewall profile. These properties correspond to the INetFwProfile interface in the Windows Firewall API. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

# authorized application of <firewall profile>

Access to the AuthorizedApplications collection for this profile. This inspector can be iterated through all the authorized applications in each firewall profile.

# exceptions allowed of <firewall profile>

Returns the property that indicates whether exceptions should be allowed by the firewall.

# excluded interface of <firewall profile>

Gets the value of the ExcludedInterfaces property from the specified firewall profile. This property contains the list of interfaces excluded from a the profile&#39;s firewall rules. For more information, see the MSDN Library entry for INetFwPolicy2.

# firewall enabled of <firewall profile>

Gets the value of the FirewallEnabled setting.Example: firewall enabled of current profile of local policy of firewall - Verify that the firewall is enabled.

# globally open port of <firewall profile>

Provides access to the GloballyOpenPorts collection for this profile. This property can be iterated.

# icmp settings of <firewall profile>

Gets the object governing settings for ICMP packets.

# inbound connections allowed of <firewall profile>

Determines whether the default action for inbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

# notifications disabled of <firewall profile>

Gets the value of the NotificationsDisabled setting, TRUE or FALSE.

# outbound connections allowed of <firewall profile>

Determines whether the default action for outbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

# remote admin settings of <firewall profile>

Gets the object containing the remote administration settings.

# rule group enabled <string> of <firewall profile>

Determines whether a specified group of firewall rules are enabled or disabled. For more information, see the MSDN Library entry for INetFwPolicy2.

# service of <firewall profile>

Gets the collection containing the services for this profile. This inspector can be iterated over all services.

# type of <firewall profile>

Returns the type of the specified firewall profile: domain, standard or current.

# unicast responses to multicast broadcast disabled of <firewall profile>

Gets the value of the UnicastResponsesToMulticastBroadcastDisabled setting.
