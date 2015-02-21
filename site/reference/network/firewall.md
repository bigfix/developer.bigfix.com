---
title: firewall
---

{% type firewall service type%}

The &lt;firewall service type&gt; inspectors provide access to the firewall service type. These properties correspond to the INetFwService.Type interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

{% type firewall service restriction%}

The &lt;firewall service restriction&gt; inspectors provide a wrapper for the Windows Firewall Service Restriction. They are Vista-only. On a non-Vista machine, they return no results. For more information see the MSDN Library reference to INetFwServiceRestriction at http://msdn.microsoft.com/library/.

#### Properties

{% property service restricted <( string, string )> of <firewall service restriction> %}

Returns the service restriction state of a given service. There are two strings passed to define the restriction: the service name and the application name. For more information, see the MSDN Library section on INetFwServiceRestriction.

{% property rule of <firewall service restriction> %}

Retrieves the collection of Windows Service Hardening network rules for the specified firewall service restriction. For more information, see the MSDN Library section on INetFwServiceRestriction.

{% type firewall service%}

The &lt;firewall service&gt; inspectors provide access to the properties of a service that may be authorized to listen through the firewall. These properties correspond to the INetFwService interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### Properties

{% property type of <firewall service> %}

Returns the type of the specified firewall service (file and print, upnp, remote desktop or none).

{% property scope of <firewall service> %}

Retrieves the contents of the Scope property of the firewall service.

{% property remote addresses of <firewall service> %}

Returns the contents of the RemoteAddresses property for the specified firewall service.

{% property name of <firewall service> %}

Returns the friendly name of the firewall service.

{% property ip version of <firewall service> %}

Returns the the IP version for the specified firewall service.

{% property globally open port of <firewall service> %}

Returns the collection of globally open ports associated with the firewall service.Example: exists globally open port whose (port of it = 52311 and protocol of it = udp and enabled of it) of current profile of local policy of firewall - Returns TRUE if the BES Client can receive pings.

{% property enabled of <firewall service> %}

Returns the enabled flag for the specified firewall service.

{% property customized of <firewall service> %}

Returns a flag that indicates whether at least one of the ports associated with the service has been customized. Either TRUE or FALSE.

{% type firewall scope%}

The &lt;firewall scope&gt; inspectors provide access to the firewall scope. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

{% type firewall rule%}

The &lt;firewall rule&gt; inspectors provide a wrapper for the Windows Firewall Rule. They are Vista-only. On a non-Vista machine, they return no results. For more information, see the MSDN library for INetFwRule at http://msdn.microsoft.com/library/.

#### Properties

{% property service name of <firewall rule> %}

Retrieves the ServiceName property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property remote ports string of <firewall rule> %}

Retrieves the RemotePorts property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property remote addresses string of <firewall rule> %}

Retrieves the RemoteAddresses property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property protocol of <firewall rule> %}

Retrieves the Protocol property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property profile <firewall profile type> of <firewall rule> %}

Retrieves the given profile property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property outbound of <firewall rule> %}

Retrieves the outbound direction property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule and IDispatch.

{% property name of <firewall rule> %}

Retrieves the Name property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property local ports string of <firewall rule> %}

Retrieves the LocalPorts property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property local addresses string of <firewall rule> %}

Retrieves the Interfaces property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property interface types string of <firewall rule> %}

Retrieves the Interface types property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property interface of <firewall rule> %}

Retrieves the Interfaces property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property inbound of <firewall rule> %}

Retrieves the inbound direction property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule and IDispatch.

{% property icmp types_and_codes string of <firewall rule> %}

Retrieves the IcmpTypesAndCodes property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property grouping of <firewall rule> %}

Retrieves the Grouping property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property enabled of <firewall rule> %}

Retrieves the Enabled property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property edge traversal allowed of <firewall rule> %}

Retrieves the EdgeTraversal property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property description of <firewall rule> %}

Retrieves the Description property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property currently active of <firewall rule> %}

Currently active is true if and only if the specified firewall rule is enabled (the Enabled property is true) AND the currently active profile type (as defined by the CurrentProfileTypes property of INetFwPolicy2) is one of the profiles for which the rule applies (as defined by the Profiles property). For more information see the MSDN Library articles for INetFwRule, including the CurrentProfileTypes and Profiles properties.

{% property application name of <firewall rule> %}

Retrieves the application name property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% property action of <firewall rule> %}

Retrieves the Action property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

{% type firewall remote admin settings%}

No documentation exists for this type.

{% type firewall profile type%}

The &lt;firewall profile type&gt; inspectors provide access to the firewall profile type. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### Casts

{% property <firewall profile type> as string %}

No documentation exists for this cast.

{% type firewall profile%}

The &lt;firewall profile&gt; inspectors provide access to the firewall profile. These properties correspond to the INetFwProfile interface in the Windows Firewall API. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### Properties

{% property unicast responses to multicast broadcast disabled of <firewall profile> %}

Gets the value of the UnicastResponsesToMulticastBroadcastDisabled setting.

{% property type of <firewall profile> %}

Returns the type of the specified firewall profile: domain, standard or current.

{% property service of <firewall profile> %}

Gets the collection containing the services for this profile. This inspector can be iterated over all services.

{% property rule group enabled <string> of <firewall profile> %}

Determines whether a specified group of firewall rules are enabled or disabled. For more information, see the MSDN Library entry for INetFwPolicy2.

{% property remote admin settings of <firewall profile> %}

Gets the object containing the remote administration settings.

{% property outbound connections allowed of <firewall profile> %}

Determines whether the default action for outbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

{% property notifications disabled of <firewall profile> %}

Gets the value of the NotificationsDisabled setting, TRUE or FALSE.

{% property inbound connections allowed of <firewall profile> %}

Determines whether the default action for inbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

{% property icmp settings of <firewall profile> %}

Gets the object governing settings for ICMP packets.

{% property globally open port of <firewall profile> %}

Provides access to the GloballyOpenPorts collection for this profile. This property can be iterated.

{% property firewall enabled of <firewall profile> %}

Gets the value of the FirewallEnabled setting.Example: firewall enabled of current profile of local policy of firewall - Verify that the firewall is enabled.

{% property excluded interface of <firewall profile> %}

Gets the value of the ExcludedInterfaces property from the specified firewall profile. This property contains the list of interfaces excluded from a the profile&#39;s firewall rules. For more information, see the MSDN Library entry for INetFwPolicy2.

{% property exceptions allowed of <firewall profile> %}

Returns the property that indicates whether exceptions should be allowed by the firewall.

{% property authorized application of <firewall profile> %}

Access to the AuthorizedApplications collection for this profile. This inspector can be iterated through all the authorized applications in each firewall profile.

{% type firewall policy%}

The &lt;firewall policy&gt; inspectors provide access to the local, current, domain and standard firewall policies. These properties correspond to the INetFwPolicy interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### Properties

{% property standard profile of <firewall policy> %}

Returns the standard profile of the specified firewall policy. The standard profile settings are used when a computer is connected to a network that does not contain the organization&#39;s domain controllers. This inspector corresponds to the Microsoft Windows Firewall enumerated type NET_FW_PROFILE_STANDARD.

{% property public profile of <firewall policy> %}

Retrieves the public profile type from the specified firewall policy. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

{% property private profile of <firewall policy> %}

Retrieves the private profile type from the specified firewall policy. This profile type is used for home and other private network types. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

{% property domain profile of <firewall policy> %}

Returns the domain profile of the specified firewall policy. The domain profile settings are used when a computer is connected to a network that contains the organization&#39;s domain controllers. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

{% property current profile of <firewall policy> %}

Returns the profile currently in effect for the specified firewall policy.

{% property profile of <firewall policy> %}

No documentation exists for this property.

{% type firewall open port%}

The &lt;firewall open port&gt; inspectors provide access to the properties of a port that has been opened in the Windows Firewall. These properties correspond to the INetFwOpenPort interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### Properties

{% property scope of <firewall open port> %}

Returns the Scope property of the firewall open port.

{% property remote addresses of <firewall open port> %}

Returns the RemoteAddresses property of the firewall open port.

{% property protocol of <firewall open port> %}

Returns the Protocol property of the firewall open port.Example: exists globally open port whose (port of it = 52311 and protocol of it = udp and enabled of it) of current profile of local policy of firewall - Returns TRUE if the BES Client can receive pings.

{% property port of <firewall open port> %}

Returns the Port property of the firewall open port.

{% property name of <firewall open port> %}

Returns the Name property of the firewall open port.

{% property ip version of <firewall open port> %}

Returns the IpVersion property of the firewall open port.

{% property enabled of <firewall open port> %}

Returns the contents of the Enabled property of the firewall open port.

{% property built in of <firewall open port> %}

Returns the contents of the BuiltIn property of the firewall open port.

{% type firewall local policy modify state%}

The &lt;firewall local policy modify state&gt; inspectors provide a wrapper for the Windows Firewall Policy Modification State. They are Vista-only. On a non-Vista machine, they return no results. For more information see the MSDN Library reference to NET_FW_MODIFY_STATE at http://msdn.microsoft.com/library/.

{% type firewall icmp settings%}

The &lt;firewall icmp settings&gt; inspectors provide access to the settings controlling Internet Control Message Protocol (ICMP) packets. These properties correspond to the INetFwIcmpSettings interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### Properties

{% property allow redirect of <firewall icmp settings> %}

Accesses the AllowRedirect property. Type common to IPv4 and IPv6.

{% property allow outbound time exceeded of <firewall icmp settings> %}

Returns the value of the AllowOutboundTimeExceeded property. Type common to IPv4 and IPv6.

{% property allow outbound source quench of <firewall icmp settings> %}

Returns the value of the AllowOutboundSourceQuench property. Type common to IPv4 only.

{% property allow outbound parameter problem of <firewall icmp settings> %}

Returns the value of the AllowOutboundParameterProblem property. Type common to IPv4 and IPv6.

{% property allow outbound packet too big of <firewall icmp settings> %}

Returns the value of the AllowOutboundPacketTooBig property. Type common to IPv6 only.

{% property allow outbound destination unreachable of <firewall icmp settings> %}

Returns the value of the AllowOutboundDestinationUnreachable property. Type common to IPv4 and IPv6.

{% property allow inbound timestamp request of <firewall icmp settings> %}

Returns the value of the AllowInboundTimestampRequest property. Type common to IPv4 only.

{% property allow inbound router request of <firewall icmp settings> %}

Returns the value of the AllowInboundRouterRequest property. Type common to IPv4 only.

{% property allow inbound mask request of <firewall icmp settings> %}

Returns the value of the AllowInboundMaskRequest property. Type common to IPv4 only.

{% property allow inbound echo request of <firewall icmp settings> %}

Returns the value of the AllowInboundEchoRequest property. Type common to IPv4 and IPv6.

{% type firewall authorized application%}

The &lt;firewall authorized application&gt; inspectors apply to applications that are authorized to exchange traffic through the Windows Firewall. These properties correspond to the INetFwAuthorizedApplication interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### Properties

{% property scope of <firewall authorized application> %}

Returns the contents of the Scope property for the specified application. This property controls the network scope that a port can listen to.

{% property remote addresses of <firewall authorized application> %}

Returns the contents of the RemoteAddresses property for the specified application. This property accesses a set of remote addresses that an application can use to listen for traffic.

{% property process image file name of <firewall authorized application> %}

Returns the contents of the ProcessImageFileName property for the specified application.

{% property name of <firewall authorized application> %}

Returns the contents of the Friendly Name property for the specified application.

{% property ip version of <firewall authorized application> %}

Returns the contents of the IpVersion property for the specified application.

{% property enabled of <firewall authorized application> %}

Returns the contents of the Enabled property for the specified application. Returns TRUE if the settings for this application are currently enabled.

{% type firewall action%}

The firewall action inspectors provide wrappers around the Windows Vista Firewall API. These are Vista-only inspectors.

{% type firewall%}

The Firewall inspectors allow you to view the settings of the Windows Firewall on Windows Clients. By inspecting the firewall properties, you can determine which applications have access to unsolicited traffic and how the firewall is configured for various subsets of your network. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the MSDN site (http://msdn.microsoft.com/library/).

#### Properties

{% property service restriction of <firewall> %}

Retrieves the access interface to manipulate the Windows Service Hardening store. On Windows operating systems earlier than Vista, this inspector always returns no-such-object. For more information, see the MSDN Library entry for INetFwPolicy2.

{% property rule of <firewall> %}

Retrieves the collection of rules for the specified firewall. For more information, see the MSDN Library article on INetFwPolicy2.

{% property rule group currently enabled <string> of <firewall> %}

Determines whether a specified group of firewall rules is enabled or disabled for the current profile, considering the firewall&#39;s state, BlockAllInboundTraffic state and group policy overrides state. The string is used to group rules together. It can be the group name or an indirect string to the group name in the form of &quot;@yourresourcedll.dll,-23255.&quot; Rules belonging to this group will be queried.

{% property local policy of <firewall> %}

Returns the local policy of the specified firewall.

{% property local policy modify state of <firewall> %}

Determines if adding or setting a rule or group of rules will take effect in the specified firewall profile. For more information, see the MSDN Library entry for INetFwPolicy2.

{% property current profile type of <firewall> %}

Returns the current profile type, corresponding to the Microsoft Windows Firewall enumerated type: NET_FW_PROFILE_TYPE.

{% property profile type of <firewall> %}

No documentation exists for this property.

{% type port mapping%}

Refers to a port mapping object for the built-in firewall.

#### Properties

{% property target name of <port mapping> %}

Returns the target name of the specified port mapping.

{% property target ipv4or6 address of <port mapping> %}

Returns the target IP address (ipv4or6) of the specified port mapping.

{% property target ip address of <port mapping> %}

Returns the target IPv4 address of the specified port mapping.

{% property protocol of <port mapping> %}

Returns a string like &quot;tcp&quot; or &quot;udp&quot;, corresponding to the protocol of the specified port mapping.

{% property options of <port mapping> %}

See port mapping at MSDN.

{% property name of <port mapping> %}

Returns the name of the specified port mapping.

{% property internal port of <port mapping> %}

Returns the internal port number of the specified ICF port mapping.

{% property external port of <port mapping> %}

Returns the external port number of the specified ICF port mapping.

{% property enabled of <port mapping> %}

A boolean indicating whether or not the port mapping is enabled.

{% type internet protocol%}

Returns the firewall internet protocol corresponding to the Microsoft enumerated types, either tcp or udp. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

{% type internet connection firewall%}

The &lt;internet connection firewall&gt; inspectors provide access to the settings of the Internet Connection Firewall introduced in Windows XP. The Internet Connection Firewall helps to protect a computer that is directly connected to the Internet, or a home network, from network attacks.

#### Properties

{% property port mapping of <internet connection firewall> %}

Creates a port mapping object for the built-in firewall.

{% property enabled of <internet connection firewall> %}

Returns TRUE if the local computer has the Windows XP built-in firewall enabled.

