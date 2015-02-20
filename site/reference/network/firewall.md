---
title: firewall
---

## firewall service type

The &lt;firewall service type&gt; inspectors provide access to the firewall service type. These properties correspond to the INetFwService.Type interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

## firewall service restriction

The &lt;firewall service restriction&gt; inspectors provide a wrapper for the Windows Firewall Service Restriction. They are Vista-only. On a non-Vista machine, they return no results. For more information see the MSDN Library reference to INetFwServiceRestriction at http://msdn.microsoft.com/library/.

#### service restricted &lt;( string, string )&gt; of &lt;firewall service restriction&gt; : boolean

Returns the service restriction state of a given service. There are two strings passed to define the restriction: the service name and the application name. For more information, see the MSDN Library section on INetFwServiceRestriction.

#### rule of &lt;firewall service restriction&gt; : firewall rule

Retrieves the collection of Windows Service Hardening network rules for the specified firewall service restriction. For more information, see the MSDN Library section on INetFwServiceRestriction.

## firewall service

The &lt;firewall service&gt; inspectors provide access to the properties of a service that may be authorized to listen through the firewall. These properties correspond to the INetFwService interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### type of &lt;firewall service&gt; : firewall service type

Returns the type of the specified firewall service (file and print, upnp, remote desktop or none).

#### scope of &lt;firewall service&gt; : firewall scope

Retrieves the contents of the Scope property of the firewall service.

#### remote addresses of &lt;firewall service&gt; : string

Returns the contents of the RemoteAddresses property for the specified firewall service.

#### name of &lt;firewall service&gt; : string

Returns the friendly name of the firewall service.

#### ip version of &lt;firewall service&gt; : ip version

Returns the the IP version for the specified firewall service.

#### globally open port of &lt;firewall service&gt; : firewall open port

Returns the collection of globally open ports associated with the firewall service.Example: exists globally open port whose (port of it = 52311 and protocol of it = udp and enabled of it) of current profile of local policy of firewall - Returns TRUE if the BES Client can receive pings.

#### enabled of &lt;firewall service&gt; : boolean

Returns the enabled flag for the specified firewall service.

#### customized of &lt;firewall service&gt; : boolean

Returns a flag that indicates whether at least one of the ports associated with the service has been customized. Either TRUE or FALSE.

## firewall scope

The &lt;firewall scope&gt; inspectors provide access to the firewall scope. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

## firewall rule

The &lt;firewall rule&gt; inspectors provide a wrapper for the Windows Firewall Rule. They are Vista-only. On a non-Vista machine, they return no results. For more information, see the MSDN library for INetFwRule at http://msdn.microsoft.com/library/.

#### service name of &lt;firewall rule&gt; : string

Retrieves the ServiceName property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### remote ports string of &lt;firewall rule&gt; : string

Retrieves the RemotePorts property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### remote addresses string of &lt;firewall rule&gt; : string

Retrieves the RemoteAddresses property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### protocol of &lt;firewall rule&gt; : internet protocol

Retrieves the Protocol property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### profile &lt;firewall profile type&gt; of &lt;firewall rule&gt; : boolean

Retrieves the given profile property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### outbound of &lt;firewall rule&gt; : boolean

Retrieves the outbound direction property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule and IDispatch.

#### name of &lt;firewall rule&gt; : string

Retrieves the Name property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### local ports string of &lt;firewall rule&gt; : string

Retrieves the LocalPorts property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### local addresses string of &lt;firewall rule&gt; : string

Retrieves the Interfaces property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### interface types string of &lt;firewall rule&gt; : string

Retrieves the Interface types property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### interface of &lt;firewall rule&gt; : string

Retrieves the Interfaces property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### inbound of &lt;firewall rule&gt; : boolean

Retrieves the inbound direction property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule and IDispatch.

#### icmp types_and_codes string of &lt;firewall rule&gt; : string

Retrieves the IcmpTypesAndCodes property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### grouping of &lt;firewall rule&gt; : string

Retrieves the Grouping property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### enabled of &lt;firewall rule&gt; : boolean

Retrieves the Enabled property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### edge traversal allowed of &lt;firewall rule&gt; : boolean

Retrieves the EdgeTraversal property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### description of &lt;firewall rule&gt; : string

Retrieves the Description property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### currently active of &lt;firewall rule&gt; : boolean

Currently active is true if and only if the specified firewall rule is enabled (the Enabled property is true) AND the currently active profile type (as defined by the CurrentProfileTypes property of INetFwPolicy2) is one of the profiles for which the rule applies (as defined by the Profiles property). For more information see the MSDN Library articles for INetFwRule, including the CurrentProfileTypes and Profiles properties.

#### application name of &lt;firewall rule&gt; : string

Retrieves the application name property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

#### action of &lt;firewall rule&gt; : firewall action

Retrieves the Action property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

## firewall remote admin settings

No documentation exists for this type.

## firewall profile type

The &lt;firewall profile type&gt; inspectors provide access to the firewall profile type. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### &lt;firewall profile type&gt; as string : string

No documentation exists for this cast.

## firewall profile

The &lt;firewall profile&gt; inspectors provide access to the firewall profile. These properties correspond to the INetFwProfile interface in the Windows Firewall API. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### unicast responses to multicast broadcast disabled of &lt;firewall profile&gt; : boolean

Gets the value of the UnicastResponsesToMulticastBroadcastDisabled setting.

#### type of &lt;firewall profile&gt; : firewall profile type

Returns the type of the specified firewall profile: domain, standard or current.

#### service of &lt;firewall profile&gt; : firewall service

Gets the collection containing the services for this profile. This inspector can be iterated over all services.

#### rule group enabled &lt;string&gt; of &lt;firewall profile&gt; : boolean

Determines whether a specified group of firewall rules are enabled or disabled. For more information, see the MSDN Library entry for INetFwPolicy2.

#### remote admin settings of &lt;firewall profile&gt; : firewall remote admin settings

Gets the object containing the remote administration settings.

#### outbound connections allowed of &lt;firewall profile&gt; : boolean

Determines whether the default action for outbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

#### notifications disabled of &lt;firewall profile&gt; : boolean

Gets the value of the NotificationsDisabled setting, TRUE or FALSE.

#### inbound connections allowed of &lt;firewall profile&gt; : boolean

Determines whether the default action for inbound traffic for the specified firewall profile is NET_FW_ACTION_ALLOW. For more information, see the MSDN Library entry for INetFwPolicy2.

#### icmp settings of &lt;firewall profile&gt; : firewall icmp settings

Gets the object governing settings for ICMP packets.

#### globally open port of &lt;firewall profile&gt; : firewall open port

Provides access to the GloballyOpenPorts collection for this profile. This property can be iterated.

#### firewall enabled of &lt;firewall profile&gt; : boolean

Gets the value of the FirewallEnabled setting.Example: firewall enabled of current profile of local policy of firewall - Verify that the firewall is enabled.

#### excluded interface of &lt;firewall profile&gt; : string

Gets the value of the ExcludedInterfaces property from the specified firewall profile. This property contains the list of interfaces excluded from a the profile&#39;s firewall rules. For more information, see the MSDN Library entry for INetFwPolicy2.

#### exceptions allowed of &lt;firewall profile&gt; : boolean

Returns the property that indicates whether exceptions should be allowed by the firewall.

#### authorized application of &lt;firewall profile&gt; : firewall authorized application

Access to the AuthorizedApplications collection for this profile. This inspector can be iterated through all the authorized applications in each firewall profile.

## firewall policy

The &lt;firewall policy&gt; inspectors provide access to the local, current, domain and standard firewall policies. These properties correspond to the INetFwPolicy interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### standard profile of &lt;firewall policy&gt; : firewall profile

Returns the standard profile of the specified firewall policy. The standard profile settings are used when a computer is connected to a network that does not contain the organization&#39;s domain controllers. This inspector corresponds to the Microsoft Windows Firewall enumerated type NET_FW_PROFILE_STANDARD.

#### public profile of &lt;firewall policy&gt; : firewall profile

Retrieves the public profile type from the specified firewall policy. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

#### private profile of &lt;firewall policy&gt; : firewall profile

Retrieves the private profile type from the specified firewall policy. This profile type is used for home and other private network types. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

#### domain profile of &lt;firewall policy&gt; : firewall profile

Returns the domain profile of the specified firewall policy. The domain profile settings are used when a computer is connected to a network that contains the organization&#39;s domain controllers. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

#### current profile of &lt;firewall policy&gt; : firewall profile

Returns the profile currently in effect for the specified firewall policy.

#### profile of &lt;firewall policy&gt; : firewall profile

No documentation exists for this property.

## firewall open port

The &lt;firewall open port&gt; inspectors provide access to the properties of a port that has been opened in the Windows Firewall. These properties correspond to the INetFwOpenPort interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### scope of &lt;firewall open port&gt; : firewall scope

Returns the Scope property of the firewall open port.

#### remote addresses of &lt;firewall open port&gt; : string

Returns the RemoteAddresses property of the firewall open port.

#### protocol of &lt;firewall open port&gt; : internet protocol

Returns the Protocol property of the firewall open port.Example: exists globally open port whose (port of it = 52311 and protocol of it = udp and enabled of it) of current profile of local policy of firewall - Returns TRUE if the BES Client can receive pings.

#### port of &lt;firewall open port&gt; : integer

Returns the Port property of the firewall open port.

#### name of &lt;firewall open port&gt; : string

Returns the Name property of the firewall open port.

#### ip version of &lt;firewall open port&gt; : ip version

Returns the IpVersion property of the firewall open port.

#### enabled of &lt;firewall open port&gt; : boolean

Returns the contents of the Enabled property of the firewall open port.

#### built in of &lt;firewall open port&gt; : boolean

Returns the contents of the BuiltIn property of the firewall open port.

## firewall local policy modify state

The &lt;firewall local policy modify state&gt; inspectors provide a wrapper for the Windows Firewall Policy Modification State. They are Vista-only. On a non-Vista machine, they return no results. For more information see the MSDN Library reference to NET_FW_MODIFY_STATE at http://msdn.microsoft.com/library/.

## firewall icmp settings

The &lt;firewall icmp settings&gt; inspectors provide access to the settings controlling Internet Control Message Protocol (ICMP) packets. These properties correspond to the INetFwIcmpSettings interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### allow redirect of &lt;firewall icmp settings&gt; : boolean

Accesses the AllowRedirect property. Type common to IPv4 and IPv6.

#### allow outbound time exceeded of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowOutboundTimeExceeded property. Type common to IPv4 and IPv6.

#### allow outbound source quench of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowOutboundSourceQuench property. Type common to IPv4 only.

#### allow outbound parameter problem of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowOutboundParameterProblem property. Type common to IPv4 and IPv6.

#### allow outbound packet too big of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowOutboundPacketTooBig property. Type common to IPv6 only.

#### allow outbound destination unreachable of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowOutboundDestinationUnreachable property. Type common to IPv4 and IPv6.

#### allow inbound timestamp request of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowInboundTimestampRequest property. Type common to IPv4 only.

#### allow inbound router request of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowInboundRouterRequest property. Type common to IPv4 only.

#### allow inbound mask request of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowInboundMaskRequest property. Type common to IPv4 only.

#### allow inbound echo request of &lt;firewall icmp settings&gt; : boolean

Returns the value of the AllowInboundEchoRequest property. Type common to IPv4 and IPv6.

## firewall authorized application

The &lt;firewall authorized application&gt; inspectors apply to applications that are authorized to exchange traffic through the Windows Firewall. These properties correspond to the INetFwAuthorizedApplication interface in the Windows Firewall API. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

#### scope of &lt;firewall authorized application&gt; : firewall scope

Returns the contents of the Scope property for the specified application. This property controls the network scope that a port can listen to.

#### remote addresses of &lt;firewall authorized application&gt; : string

Returns the contents of the RemoteAddresses property for the specified application. This property accesses a set of remote addresses that an application can use to listen for traffic.

#### process image file name of &lt;firewall authorized application&gt; : string

Returns the contents of the ProcessImageFileName property for the specified application.

#### name of &lt;firewall authorized application&gt; : string

Returns the contents of the Friendly Name property for the specified application.

#### ip version of &lt;firewall authorized application&gt; : ip version

Returns the contents of the IpVersion property for the specified application.

#### enabled of &lt;firewall authorized application&gt; : boolean

Returns the contents of the Enabled property for the specified application. Returns TRUE if the settings for this application are currently enabled.

## firewall action

The firewall action inspectors provide wrappers around the Windows Vista Firewall API. These are Vista-only inspectors.

## firewall

The Firewall inspectors allow you to view the settings of the Windows Firewall on Windows Clients. By inspecting the firewall properties, you can determine which applications have access to unsolicited traffic and how the firewall is configured for various subsets of your network. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the MSDN site (http://msdn.microsoft.com/library/).

#### service restriction of &lt;firewall&gt; : firewall service restriction

Retrieves the access interface to manipulate the Windows Service Hardening store. On Windows operating systems earlier than Vista, this inspector always returns no-such-object. For more information, see the MSDN Library entry for INetFwPolicy2.

#### rule of &lt;firewall&gt; : firewall rule

Retrieves the collection of rules for the specified firewall. For more information, see the MSDN Library article on INetFwPolicy2.

#### rule group currently enabled &lt;string&gt; of &lt;firewall&gt; : boolean

Determines whether a specified group of firewall rules is enabled or disabled for the current profile, considering the firewall&#39;s state, BlockAllInboundTraffic state and group policy overrides state. The string is used to group rules together. It can be the group name or an indirect string to the group name in the form of &quot;@yourresourcedll.dll,-23255.&quot; Rules belonging to this group will be queried.

#### local policy of &lt;firewall&gt; : firewall policy

Returns the local policy of the specified firewall.

#### local policy modify state of &lt;firewall&gt; : firewall local policy modify state

Determines if adding or setting a rule or group of rules will take effect in the specified firewall profile. For more information, see the MSDN Library entry for INetFwPolicy2.

#### current profile type of &lt;firewall&gt; : firewall profile type

Returns the current profile type, corresponding to the Microsoft Windows Firewall enumerated type: NET_FW_PROFILE_TYPE.

#### profile type of &lt;firewall&gt; : firewall profile type

No documentation exists for this property.

## port mapping

Refers to a port mapping object for the built-in firewall.

#### target name of &lt;port mapping&gt; : string

Returns the target name of the specified port mapping.

#### target ipv4or6 address of &lt;port mapping&gt; : ipv4or6 address

Returns the target IP address (ipv4or6) of the specified port mapping.

#### target ip address of &lt;port mapping&gt; : ipv4 address

Returns the target IPv4 address of the specified port mapping.

#### protocol of &lt;port mapping&gt; : string

Returns a string like &quot;tcp&quot; or &quot;udp&quot;, corresponding to the protocol of the specified port mapping.

#### options of &lt;port mapping&gt; : integer

See port mapping at MSDN.

#### name of &lt;port mapping&gt; : string

Returns the name of the specified port mapping.

#### internal port of &lt;port mapping&gt; : integer

Returns the internal port number of the specified ICF port mapping.

#### external port of &lt;port mapping&gt; : integer

Returns the external port number of the specified ICF port mapping.

#### enabled of &lt;port mapping&gt; : boolean

A boolean indicating whether or not the port mapping is enabled.

## internet protocol

Returns the firewall internet protocol corresponding to the Microsoft enumerated types, either tcp or udp. The Windows Firewall is supported on Windows XP SP2. For more information, search for &#39;Windows Firewall API&#39; at the msdn site (http://msdn.microsoft.com/library/).

## internet connection firewall

The &lt;internet connection firewall&gt; inspectors provide access to the settings of the Internet Connection Firewall introduced in Windows XP. The Internet Connection Firewall helps to protect a computer that is directly connected to the Internet, or a home network, from network attacks.

#### port mapping of &lt;internet connection firewall&gt; : port mapping

Creates a port mapping object for the built-in firewall.

#### enabled of &lt;internet connection firewall&gt; : boolean

Returns TRUE if the local computer has the Windows XP built-in firewall enabled.

