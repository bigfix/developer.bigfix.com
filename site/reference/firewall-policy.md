# firewall policy

The &lt;firewall policy&gt; inspectors provide access to the local, current, domain and standard firewall policies. These properties correspond to the INetFwPolicy interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

# current profile of [firewall policy]

Returns the profile currently in effect for the specified firewall policy.

# domain profile of [firewall policy]

Returns the domain profile of the specified firewall policy. The domain profile settings are used when a computer is connected to a network that contains the organization&#39;s domain controllers. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

# private profile of [firewall policy]

Retrieves the private profile type from the specified firewall policy. This profile type is used for home and other private network types. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

# profile of [firewall policy]

No documentation exists.

# public profile of [firewall policy]

Retrieves the public profile type from the specified firewall policy. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

# standard profile of [firewall policy]

Returns the standard profile of the specified firewall policy. The standard profile settings are used when a computer is connected to a network that does not contain the organization&#39;s domain controllers. This inspector corresponds to the Microsoft Windows Firewall enumerated type NET_FW_PROFILE_STANDARD.
