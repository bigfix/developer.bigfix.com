---
title: adapters
---

{% type network %}

The &lt;network&gt; objects are the keywords used to query the local network configuration.

#### Properties of network

{% property adapter <integer> of <network> %}

Returns the nth adapter of the specified network.

{% property adapter <string> of <network> %}

Returns the named adapter of the specified network.

{% property adapter of <network> %}

Returns the one or more network adapter objects of the network.

{% property any adapter <integer> of <network> %}

No documentation exists for this property.

{% property any adapter of <network> %}

This inspector returns the same as &#39;adapter of &lt;network&gt;&#39;, but it includes loopback and tunnels.

{% property connection of <network> %}

Returns a connection to the specified network. This inspector requires Windows XP or better.

{% property dns server of <network> %}

Returns a list of DNS servers used by the local computer.

{% property find adapter <string> of <network> %}

This inspector lets you find a network adapter from the &quot;Friendly Name&quot;.

{% property interface <integer> of <network> %}

Returns the Nth interface of the network.

{% property interface of <network> %}

Returns all the interfaces of the network.

{% property ip interface <integer> of <network> %}

Returns the Nth ip interface of the network.

{% property ip interface of <network> %}

Returns all the ip interfaces of the network.

{% property ipv4 interface <integer> of <network> %}

No documentation exists for this property.

{% property ipv4 interface of <network> %}

Returns an IPv4 network adapter interface from the specified network.

{% property ipv4or6 interface <integer> of <network> %}

No documentation exists for this property.

{% property ipv4or6 interface of <network> %}

Returns all the ipv4or6 network adapter interfaces from the specified network.

{% property ipv6 interface <integer> of <network> %}

No documentation exists for this property.

{% property ipv6 interface of <network> %}

Returns all the ipv6 interfaces of the specified network.

{% property link interface <integer> of <network> %}

Returns the Nth network link interface of the given network.

{% property link interface of <network> %}

Returns the network link interface of the specified network.

{% property socket of <network> %}

Returns a &lt;socket&gt; type that is examinable for socket information.

{% property winsock2 supported of <network> %}

Indicates that winsock2 is supported by the network. If this returns FALSE, many of the other properties of the interface are not available for inspection.

{% type network adapter %}

One or more network adapters may be inspected using this property of the network object. Each network adapter has a number of interesting properties such as the MAC address.

#### Properties of network adapter

{% property address list of <network adapter> %}

Returns the address list of the network adapter.

{% property address of <network adapter> %}

Returns the ip address of the network adapter (returns the first address if it is a list).

{% property broadcast address of <network adapter> %}

Returns the broadcast address of the specified network adapter as an &lt;ipv4 address&gt;.

{% property broadcast support of <network adapter> %}

Returns TRUE if the specified network adapter supports broadcast.

{% property cidr address of <network adapter> %}

Returns the CIDR address of the specified network adapter as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

{% property cidr string of <network adapter> %}

Returns the Classless Inter-Domain Routing value for the specified network adapter as a string value.

{% property description of <network adapter> %}

Returns the description of the network adapter.

{% property dhcp enabled of <network adapter> %}

Returns TRUE if dhcp is enabled on the network adapter.

{% property dhcp server of <network adapter> %}

Returns the ip address of the dhcp server of the network adapter (returns the first address if it is a list).

{% property dns server of <network adapter> %}

Returns a list of DNS servers used by the specified adapter.

{% property dns suffix of <network adapter> %}

Returns the Domain Name System (DNS) suffix associated with the specified adapter.

{% property friendly name of <network adapter> %}

Returns a user-friendly name for the adapter, for example &quot;Local Area Connection 1&quot;.

{% property gateway list of <network adapter> %}

Returns the gateway network address list of the network adapter.

{% property gateway of <network adapter> %}

Returns the ip address of the gateway of the network adapter.

{% property interface of <network adapter> %}

Returns a network interface object from the specified network adapter.

{% property internet connection firewall of <network adapter> %}

Creates a Windows XP firewall object.

{% property ip interface of <network adapter> %}

Returns an object or an object list (using the plural keyword) with all the ip interfaces of the specified network adapter.

{% property ipv4 interface <integer> of <network adapter> %}

No documentation exists for this property.

{% property ipv4 interface of <network adapter> %}

Returns the IPv4 interface of the specified network adapter as a &lt;network adapter ip interface&gt; type.

{% property ipv4or6 dns server of <network adapter> %}

Returns the ipv4or6 address of the DNS server of the specified network adapter.

{% property ipv4or6 interface <integer> of <network adapter> %}

No documentation exists for this property.

{% property ipv4or6 interface of <network adapter> %}

Returns the ipv4or network adapter interface from the specified network adapter.

{% property ipv6 address of <network adapter> %}

Returns the local IP address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

{% property ipv6 dns server of <network adapter> %}

Returns the DNS server address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

{% property ipv6 interface <integer> of <network adapter> %}

No documentation exists for this property.

{% property ipv6 interface of <network adapter> %}

Returns the IPv6 interfaces of the specified network adapter as a network adapter interface type.

{% property lease expires of <network adapter> %}

Returns the time that the dhcp lease will expire of the network adapter.

{% property lease obtained of <network adapter> %}

Returns the time that the dhcp lease was obtained of the network adapter.

{% property link interface of <network adapter> %}

Returns the network link interface(s) of the specified network adapter.

{% property link speed of <network adapter> %}

This is a property of a network adapter. It returns the maximum speed of the NIC card in bits per second.

{% property loopback of <network adapter> %}

Returns TRUE if the specified network adapter is a loopback interface.

{% property mac address of <network adapter> %}

Returns the mac address of the network adapter.

{% property maximum transmission unit of <network adapter> %}

The maximum transmission unit (MTU) size, in bytes, of the specified adapter.

{% property multicast support of <network adapter> %}

Returns TRUE if multicast messages are supported by the specified network adapter.

{% property name of <network adapter> %}

Returns the name of the network adapter.

{% property point to point of <network adapter> %}

Returns TRUE if the specified network adapter is a point-to-point interface. Usually TRUE for dialup connections.

{% property primary wins server of <network adapter> %}

Returns the IPv4 address of the primary wins server of the specified network adapter.

{% property secondary wins server of <network adapter> %}

Returns the IPv4 address of the secondary wins server of the specified network adapter.As of version 8.0 of BES, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

{% property status of <network adapter> %}

The operational status for the interface as defined in RFC 2863. It can be one of the values from the IF_OPER_STATUS enumeration type defined in the Iftypes.h header file. On Windows Vista and later, the header files were reorganized and this enumeration is defined in the Ifdef.h header file.

{% property subnet address of <network adapter> %}

Returns the subnet address (IPv4) of the specified network adapter.

{% property subnet mask of <network adapter> %}

Returns the subnet mask (IPv4) of the specified network adapter.

{% property tunnel of <network adapter> %}

Returns TRUE if the specidfied adapter is a tunnel.

{% property type of <network adapter> %}

Returns the interface type of the specified adapter as defined by the Internet Assigned Names Authority (IANA). Possible values for the interface type are listed in the Ipifcons.h header file.

{% property up of <network adapter> %}

Returns TRUE if the specified network adaoter is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

{% property wakeonlan enabled of <network adapter> %}

Returns TRUE if the specified network adapter is configured to react to Wake-On-Lan requests. Wake-On-Lan is a mechanism used to trigger a boot of a machine in standby mode by sending a special packet.Note: Wake-On-Lan is only supported for Windows 2000 and XP machines.

{% property wifi of <network adapter> %}

Filters the network adapter object by WiFi type and creates the &lt;wifi&gt; object(s)

{% property wins enabled of <network adapter> %}

Returns TRUE if WINS is enabled on the network adapter.

{% type network adapter interface %}

A network adapter interfaces a computer to a network. These inspectors expose the adapter so that you can determine its properties, such as its address, subnet mask, mac address and whether or not it supports broadcast, multicast or point-to-point.

#### Properties of network adapter interface

{% property adapter of <network adapter interface> %}

Returns the adapters associated with the specified network adapter interface.

{% property address of <network adapter interface> %}

Returns the IP address of the specified network adapter interface as an ipv4or6 address type.

{% property broadcast address of <network adapter interface> %}

Creates an object with the broadcast address (ipv4or6) of the specified network adapter interface.

{% property broadcast support of <network adapter interface> %}

Returns TRUE if the given network adapter interface has broadcast support.

{% property cidr address of <network adapter interface> %}

Returns the CIDR address of the specified interface as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

{% property cidr string of <network adapter interface> %}

A cidr string (see CIDR_notation at Wikipedia) is a string representation of a cidr address.  It looks like an ip address followed by a slash and then the number of leading non-zero bits of the routing prefix. For example, 192.168.0.0/16 for IPv4, and 2001:db8::/32 for IPv6.

{% property loopback of <network adapter interface> %}

Returns TRUE if the specified interface supports loopbacks.

{% property mac address of <network adapter interface> %}

Returns the MAC address of the specified network adapter interface as a string type.

{% property multicast support of <network adapter interface> %}

Returns TRUE if the specified interface supports multicasting.

{% property point to point of <network adapter interface> %}

A network adapter interface can be a point-to-point interface, such as you might use for a VPN connection or a SLIP connection. This inspector returns TRUE if the specified network adapter interface is configured to run point-to-point.

{% property subnet address of <network adapter interface> %}

Returns the subnet address of the specified interface as an ipv4or6 address type.

{% property subnet mask of <network adapter interface> %}

Returns the subnet mask of the specified interface as an ipv4or6 address type.

{% property up of <network adapter interface> %}

Returns TRUE if the specified interface is currently up and working.

{% type network address list %}

A network adapter may be configured to respond to a list of network addresses. This object type provides access to such a list.

#### Properties of network address list

{% property address of <network address list> %}

Returns the IP address of the address list.

{% property cidr address of <network address list> %}

Returns the CIDR address of the address list as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

{% property cidr string of <network address list> %}

Returns the Classless Inter-Domain Routing value for the specified network address list as a string value.

{% property subnet address of <network address list> %}

Returns the subnet address (IPv4) of the specified network address list.

{% property subnet mask of <network address list> %}

Returns the subnet mask (IPv4) of the specified network address list.

{% type network interface %}

The network interface object describes a generic network interface, and has information about the name and family of that interface. On the Mac these are commonly of type AF_INET, AF_LINK and AF_INET6.

#### Properties of network interface

{% property family name of <network interface> %}

Returns the name of the interface family. There are about 35 of these, but the most common is AF_INET, or normal IP interface. AF_LINK is used for wifi devices and AF_INET6 is for IP v6 addresses. There are specific inspectors for AF_INET (ip interface) and AF_LINK (link interface). The family name of inspector returns this type as a string corresponding to the #define value in the header file.

{% property family of <network interface> %}

Returns an family designator of the address family (i.e., 2=AFI_NET).

{% property name of <network interface> %}

Returns the name of the network interface object.

{% property up of <network interface> %}

Returns TRUE if the specified network interface is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

{% type network ip interface %}

In general, the network ip interface object holds locally determined properties of logical network devices configured on the computer. On the Mac, these correspond to interfaces of type AF_INET. The properties that are available depend on the socket support installed on the computer. For Windows computers with winsock 2 support installed, for instance, the information is obtained by an ioctl call and includes Interface address, Interface broadcast address, Interface network mask, Broadcast support flag, Multicast support flag, Loopback interface flag and Point to point interface flag.

#### Properties of network ip interface

{% property address of <network ip interface> %}

Returns the ip address of the ip interface.

{% property alias of <network ip interface> %}

Returns TRUE if the network ip interface has an alias defined for it (a virtual device, rather than a physical device).

{% property broadcast address of <network ip interface> %}

Returns the broadcast address of the specified interface as an IPv4 type.

{% property broadcast support of <network ip interface> %}

Indicates that broadcast messages are supported by the ip interface.

{% property cidr address of <network ip interface> %}

Returns the Classless Inter-Domain Routing address for the specified network ip interface as a string type.

{% property cidr string of <network ip interface> %}

Returns the Classless Inter-Domain Routing value for the specified network ip interface as a string type.

{% property loopback of <network ip interface> %}

Indicates that the particular network ip interface is a loopback interface.Example: address of ip interface whose (loopback of it = false) of network = &quot;192.168.127.127&quot; - Returns TRUE if the given IP address doesn&#39;t have loopback.

{% property mac address of <network ip interface> %}

Returns the MAC address (AKA hardware address) of the network ip interface object. The mac address is formatted as a string of lower case hex digits separated by &#39;-&#39;.Example:  mac address whose (it = &quot;00-61-b1-d1-7d-29&quot;) of ip interfaces of network - Returns the mac address of the specified network ip interface object.

{% property multicast support of <network ip interface> %}

Indicates that multicast messages are supported by the ip interface.

{% property name of <network ip interface> %}

Returns the name of the network ip interface object. Typical names are lan0, lo0. Virtual interfaces are usually of the form lan0:2.

{% property point to point of <network ip interface> %}

Indicates that the interface is a point-to-point interface. Usually TRUE for dialup connections.

{% property subnet address of <network ip interface> %}

Returns the subnet address (IPv4) to which the specified interface belongs.

{% property subnet mask of <network ip interface> %}

Returns the subnet mask (IPv4) of the specified network ip interface.As of version 8.0, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

{% property up of <network ip interface> %}

Returns TRUE if the specified network IP interface is currently up.

{% type network link interface %}

The network link interface objects correspond to interfaces of type AF_LINK.

#### Properties of network link interface

{% property mac address of <network link interface> %}

Returns the MAC address of the specified network link interface.Example: mac addresses of link interfaces of network - Returns a list of the MAC addresses of the network link interfaces, for example, 00-14-c8-3a-82-11, 00-16-bc-72-2c-57, 00-14-e4-26-fe-4c-14-37, etcetera.Example: mac address of link interface (whose name of it is &quot;fw0&quot;) of network - Returns the MAC address of the specified network link interface.

{% type wifi %}

These inspectors expose the WiFi adapters available on an endpoint.

#### Properties of wifi

{% property encryption of <wifi> %}

Returns a string of the encryption type of the WiFi connection. eg: &quot;WEP&quot;, &quot;WPA2-PSK&quot;

{% property secured of <wifi> %}

Returns a boolean that is true if the WiFi connection is secured.

{% property ssid of <wifi> %}

Returns a string of the SSID of the WiFi connection

