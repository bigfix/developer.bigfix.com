---
title: general
---

{% type ipv6 address with multiplicity%}

The &lt;ipv6 address with multiplicity&gt; inspectors deal with ipv6 address arrays, allowing you to extract unique ipv6 addresses and count them.

#### Properties

{% property multiplicity of <ipv6 address with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;ipv6 address&gt; types.

{% type ipv6 address%}

The &lt;ipv6 address&gt; inspectors deal with the Internet Protocol addressing scheme, version 6. Note: Prior to version 8.0 of BigFix, this was not a derived type.

#### Casts

{% property <ipv6 address> as string %}

Returns a string representation of the IPv6 address in the form x:x:x:x:x:x:x:x, where each x represents one to four hexadecimal digits of the eight 16-bit address fields. Leading zeros in an individual field are omitted. See RFC 4291 section 2.2, item 1.

{% property <ipv6 address> as string with zone index %}

Converts an IPv6 address into a string with a terminating slash-delimited zone index, if any.

{% property <ipv6 address> as string with leading zeros %}

Similar to casting as a string, but leading zeros in individual fields are preserved.

{% property <ipv6 address> as string with leading zeros with zone index %}

Converts an IPv6 address into a string with all fields packed with leading zeroes as well as a terminating zone index, if any.

{% property <ipv6 address> as string with ipv4 %}

Similar to casting as a string, but with the lowest 32 bits of the address in the standard IPv4 representation (RFC 4291 section 2.2, item 3).

{% property <ipv6 address> as string with ipv4 with zone index %}

Similar to casting as a string, but with standard IPv4 representation for the low 32-bits as well as any zone index.

{% property <ipv6 address> as ipv4or6 address %}

Casts an IPv6 address as a more flexible ipv4or6 address.

{% property <ipv6 address> as compressed string %}

Similar to casting as a string, but with double colons used to represent multiple zero 16-bit parts (RFC 4291 section 2.2, item 2).

{% property <ipv6 address> as compressed string with zone index %}

Similar to casting as a string, but with both colon-compression and a zone index.

{% property <ipv6 address> as compressed string with ipv4 %}

Similar to casting as a string, but with both colon-compression and standard IPv4 representation for the low 32-bits.

{% property <ipv6 address> as compressed string with ipv4 with zone index %}

Similar to casting as a string, but with both colon-compression and standard IPv4 representation for the low 32-bits as well as any zone index.

#### Properties

{% property unique value of <ipv6 address> %}

Returns the unique values of a given list of &lt;ipv6 address&gt; types, removing duplicates and sorting by value.

{% property minimum of <ipv6 address> %}

Returns the minimum value from a list of &lt;ipv6 address&gt; types.

{% property maximum of <ipv6 address> %}

Returns the maximum value from a list of &lt;ipv6 address&gt; types.

{% property ipv4 part of <ipv6 address> %}

Returns the lowest 32-bits of the IPv6 address as an IPv4 address.As of version 8.0, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

{% property hexadecet <integer> of <ipv6 address> %}

Returns one of the eight 16-bit parts (hexadecets) of an IPv6 address specified by &lt;integer&gt;. Here zero refers to the highest hexadecet (network or big-endian order). Thus hexadecet 0 refers to the most-significant 16-bits of the 128 bit IPv6 address.

{% property extrema of <ipv6 address> %}

Returns the minimum and maximum extreme values of the given list of &lt;ipv6 address&gt; types.

{% type ipv4or6 address with multiplicity%}

The &lt;ipv4or6 address with multiplicity&gt; inspectors deal with arrays of ipv4or6 addresses, allowing you to extract unique addresses and count them. 

#### Properties

{% property multiplicity of <ipv4or6 address with multiplicity> %}

Returns the multiplicity (how many entries of each unique address) of a list of ipv4or6 addresses.

{% type ipv4or6 address%}

The &lt;ipv4or6 address&gt; inspectors allow you to represent IPv4 and IPv6 addresses as a common type. From these inclusive inspectors, you can derive the corresponding v4 and v6 IP addresses.

#### Casts

{% property <ipv4or6 address> as string %}

Casts an IP address (v4 or 6) as a string type.

{% property <ipv4or6 address> as string with zone index %}

Converts an IP address into a string with a zone index, if any.

{% property <ipv4or6 address> as string with leading zeros %}

Converts an IP address into a string with all fields packed with leading zeroes.

{% property <ipv4or6 address> as string with leading zeros with zone index %}

Converts an IP address into a string with all fields packed with leading zeroes, as well as any zone index.

{% property <ipv4or6 address> as string with ipv4 %}

Converts an address to a string with the lower 32 bits in IPv4 format.

{% property <ipv4or6 address> as string with ipv4 with zone index %}

Converts an address to a string with the lower 32 bits in IPv4 format as well as any zone index.

{% property <ipv4or6 address> as compressed string %}

Compresses the IP address, using double colons to stand in for repeated zeroes in the address.Example: (&quot;0:0:0:0:0:ffff:c0a8:16a&quot; as ipv4or6 address) as compressed string - Returns &quot;::ffff:c0a8:16a&quot;, a compressed string with a double colon standing in for leading zeroes.

{% property <ipv4or6 address> as compressed string with zone index %}

Creates a compressed string (replacing multiple zeroes with double colons) and includes the zone index (on Windows, typically a number) following a percent sign (%).

{% property <ipv4or6 address> as compressed string with ipv4 %}

Similar to casting to a string, but with both colon-compression and standard IPv4 representation for the low 32-bits.Example: (&quot;0:0:0:0:0:ffff:c0a8:16a&quot; as ipv4or6 address) as compressed string with ipv4 - Returns &quot;::ffff:192.168.1.106&quot;, a compressed string (leading zeroes collapsed to ::) with a four-byte IPv4 address as the lower 32 bits.

{% property <ipv4or6 address> as compressed string with ipv4 with zone index %}

Creates a compressed string (replacing multiple zeroes with double colons) with the lower 32 bits in IPv4 format. It includes the zone index (on Windows, typically a number) following a percent sign (%).

#### Properties

{% property unique value of <ipv4or6 address> %}

Returns the unique values of a given list of addresses (ipv4or6), removing duplicates and sorting by value.

{% property minimum of <ipv4or6 address> %}

Returns the minimum of the specified list of &lt;ipv4or6 address&gt; types.

{% property maximum of <ipv4or6 address> %}

Returns the maximum of the specified list of &lt;ipv4or6 address&gt; types.

{% property ipv4 part of <ipv4or6 address> %}

Returns the lowest 32-bits of the IPv4or6 address as an IPv4 address.

{% property ip version of <ipv4or6 address> %}

Returns the IP version of the specified ipv4or6 address.

{% property hexadecet <integer> of <ipv4or6 address> %}

Returns one of the eight 16-bit parts (hexadecets) of an ipv4or6 address specified by &lt;integer&gt;. Here zero refers to the highest hexadecet (network or big-endian order). Thus hexadecet 0 refers to the most-significant 16-bits of the 128 bit ipv4or6 address.

{% property extrema of <ipv4or6 address> %}

Returns the minimum and maximum of the specified list of ipv4or6 addresses.

{% type ipv4 address with multiplicity%}

The &lt;ipv4 address with multiplicity&gt; inspectors deal with ipv4 address arrays, allowing you to extract unique ipv4 addresses and count them.

#### Properties

{% property multiplicity of <ipv4 address with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;ipv4 address&gt; types.

{% type ipv4 address%}

This is an Internet Protocol address, version 4. IP addresses are composed of four single-byte integers separated by periods, such as &quot;192.5.0.7&quot;. Note: Prior to version 8.0 of BigFix, this was not a derived type.

#### Casts

{% property <ipv4 address> as string %}

Converts the ipv4 address to a string.

{% property <ipv4 address> as ipv6 address %}

Returns the specified IPv4 address embedded in a IPv6 address space as defined by RFC 4291 section 2.5.5.2: IPv4-Mapped IPv6 Address. In this scheme the lowest 32 bits of the IPv6 address contain the IPv4 address, the next higher 16 bits are all 1 (ffff) and the remaining bits are all 0.

{% property <ipv4 address> as ipv4or6 address %}

Converts an IPv4 address into the more inclusive ipv4or6 type.

#### Properties

{% property unique value of <ipv4 address> %}

Returns the unique values of a given list of &lt;ipv4 address&gt; types, removing duplicates and sorting by value.

{% property minimum of <ipv4 address> %}

Returns the minimum value from a list of &lt;ipv4 address&gt; types.

{% property maximum of <ipv4 address> %}

Returns the maximum value from a list of &lt;ipv4 address&gt; types.

{% property extrema of <ipv4 address> %}

Returns the minimum and maximum extreme values of the given list of &lt;ipv4 address&gt; types.

{% type ip version%}

The &lt;ip version&gt; inspectors distinguish between ipv6 and ipv4. The integer representations of these are chosen to meet existing standards.

#### Casts

{% property <ip version> as string %}

Converts an IP version to a string.

{% type network ip interface%}

In general, the network ip interface object holds locally determined properties of logical network devices configured on the computer. On the Mac, these correspond to interfaces of type AF_INET. The properties that are available depend on the socket support installed on the computer. For Windows computers with winsock 2 support installed, for instance, the information is obtained by an ioctl call and includes Interface address, Interface broadcast address, Interface network mask, Broadcast support flag, Multicast support flag, Loopback interface flag and Point to point interface flag.

#### Properties

{% property up of <network ip interface> %}

Returns TRUE if the specified network IP interface is currently up.

{% property subnet mask of <network ip interface> %}

Returns the subnet mask (IPv4) of the specified network ip interface.As of version 8.0, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

{% property subnet address of <network ip interface> %}

Returns the subnet address (IPv4) to which the specified interface belongs.

{% property point to point of <network ip interface> %}

Indicates that the interface is a point-to-point interface. Usually TRUE for dialup connections.

{% property name of <network ip interface> %}

Returns the name of the network ip interface object. Typical names are lan0, lo0. Virtual interfaces are usually of the form lan0:2.

{% property multicast support of <network ip interface> %}

Indicates that multicast messages are supported by the ip interface.

{% property mac address of <network ip interface> %}

Returns the MAC address (AKA hardware address) of the network ip interface object. The mac address is formatted as a string of lower case hex digits separated by &#39;-&#39;.Example:  mac address whose (it = &quot;00-61-b1-d1-7d-29&quot;) of ip interfaces of network - Returns the mac address of the specified network ip interface object.

{% property loopback of <network ip interface> %}

Indicates that the particular network ip interface is a loopback interface.Example: address of ip interface whose (loopback of it = false) of network = &quot;192.168.127.127&quot; - Returns TRUE if the given IP address doesn&#39;t have loopback.

{% property cidr string of <network ip interface> %}

Returns the Classless Inter-Domain Routing value for the specified network ip interface as a string type.

{% property cidr address of <network ip interface> %}

Returns the Classless Inter-Domain Routing address for the specified network ip interface as a string type.

{% property broadcast support of <network ip interface> %}

Indicates that broadcast messages are supported by the ip interface.

{% property broadcast address of <network ip interface> %}

Returns the broadcast address of the specified interface as an IPv4 type.

{% property alias of <network ip interface> %}

Returns TRUE if the network ip interface has an alias defined for it (a virtual device, rather than a physical device).

{% property address of <network ip interface> %}

Returns the ip address of the ip interface.

{% type network interface%}

The network interface object describes a generic network interface, and has information about the name and family of that interface. On the Mac these are commonly of type AF_INET, AF_LINK and AF_INET6.

#### Properties

{% property family of <network interface> %}

Returns an family designator of the address family (i.e., 2=AFI_NET).

{% property up of <network interface> %}

Returns TRUE if the specified network interface is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

{% property name of <network interface> %}

Returns the name of the network interface object.

{% property family name of <network interface> %}

Returns the name of the interface family. There are about 35 of these, but the most common is AF_INET, or normal IP interface. AF_LINK is used for wifi devices and AF_INET6 is for IP v6 addresses. There are specific inspectors for AF_INET (ip interface) and AF_LINK (link interface). The family name of inspector returns this type as a string corresponding to the #define value in the header file.

{% type network adapter interface%}

A network adapter interfaces a computer to a network. These inspectors expose the adapter so that you can determine its properties, such as its address, subnet mask, mac address and whether or not it supports broadcast, multicast or point-to-point.

#### Properties

{% property up of <network adapter interface> %}

Returns TRUE if the specified interface is currently up and working.

{% property subnet mask of <network adapter interface> %}

Returns the subnet mask of the specified interface as an ipv4or6 address type.

{% property subnet address of <network adapter interface> %}

Returns the subnet address of the specified interface as an ipv4or6 address type.

{% property point to point of <network adapter interface> %}

A network adapter interface can be a point-to-point interface, such as you might use for a VPN connection or a SLIP connection. This inspector returns TRUE if the specified network adapter interface is configured to run point-to-point.

{% property multicast support of <network adapter interface> %}

Returns TRUE if the specified interface supports multicasting.

{% property mac address of <network adapter interface> %}

Returns the MAC address of the specified network adapter interface as a string type.

{% property loopback of <network adapter interface> %}

Returns TRUE if the specified interface supports loopbacks.

{% property cidr string of <network adapter interface> %}

A cidr string (see CIDR_notation at Wikipedia) is a string representation of a cidr address.  It looks like an ip address followed by a slash and then the number of leading non-zero bits of the routing prefix. For example, 192.168.0.0/16 for IPv4, and 2001:db8::/32 for IPv6.

{% property cidr address of <network adapter interface> %}

Returns the CIDR address of the specified interface as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

{% property broadcast support of <network adapter interface> %}

Returns TRUE if the given network adapter interface has broadcast support.

{% property broadcast address of <network adapter interface> %}

Creates an object with the broadcast address (ipv4or6) of the specified network adapter interface.

{% property address of <network adapter interface> %}

Returns the IP address of the specified network adapter interface as an ipv4or6 address type.

{% property adapter of <network adapter interface> %}

Returns the adapters associated with the specified network adapter interface.

{% type network adapter%}

One or more network adapters may be inspected using this property of the network object. Each network adapter has a number of interesting properties such as the MAC address.

#### Properties

{% property up of <network adapter> %}

Returns TRUE if the specified network adaoter is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

{% property subnet mask of <network adapter> %}

Returns the subnet mask (IPv4) of the specified network adapter.

{% property subnet address of <network adapter> %}

Returns the subnet address (IPv4) of the specified network adapter.

{% property name of <network adapter> %}

Returns the name of the network adapter.

{% property multicast support of <network adapter> %}

Returns TRUE if multicast messages are supported by the specified network adapter.

{% property mac address of <network adapter> %}

Returns the mac address of the network adapter.

{% property loopback of <network adapter> %}

Returns TRUE if the specified network adapter is a loopback interface.

{% property ipv6 interface of <network adapter> %}

Returns the IPv6 interfaces of the specified network adapter as a network adapter interface type.

{% property ipv4or6 interface of <network adapter> %}

Returns the ipv4or network adapter interface from the specified network adapter.

{% property ipv4 interface of <network adapter> %}

Returns the IPv4 interface of the specified network adapter as a &lt;network adapter ip interface&gt; type.

{% property friendly name of <network adapter> %}

Returns a user-friendly name for the adapter, for example &quot;Local Area Connection 1&quot;.

{% property cidr string of <network adapter> %}

Returns the Classless Inter-Domain Routing value for the specified network adapter as a string value.

{% property cidr address of <network adapter> %}

Returns the CIDR address of the specified network adapter as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

{% property address of <network adapter> %}

Returns the ip address of the network adapter (returns the first address if it is a list).

{% property point to point of <network adapter> %}

Returns TRUE if the specified network adapter is a point-to-point interface. Usually TRUE for dialup connections.

{% property link interface of <network adapter> %}

Returns the network link interface(s) of the specified network adapter.

{% property ip interface of <network adapter> %}

Returns an object or an object list (using the plural keyword) with all the ip interfaces of the specified network adapter.

{% property interface of <network adapter> %}

Returns a network interface object from the specified network adapter.

{% property broadcast support of <network adapter> %}

Returns TRUE if the specified network adapter supports broadcast.

{% property broadcast address of <network adapter> %}

Returns the broadcast address of the specified network adapter as an &lt;ipv4 address&gt;.

{% property wins enabled of <network adapter> %}

Returns TRUE if WINS is enabled on the network adapter.

{% property wakeonlan enabled of <network adapter> %}

Returns TRUE if the specified network adapter is configured to react to Wake-On-Lan requests. Wake-On-Lan is a mechanism used to trigger a boot of a machine in standby mode by sending a special packet.Note: Wake-On-Lan is only supported for Windows 2000 and XP machines.

{% property type of <network adapter> %}

Returns the interface type of the specified adapter as defined by the Internet Assigned Names Authority (IANA). Possible values for the interface type are listed in the Ipifcons.h header file.

{% property tunnel of <network adapter> %}

Returns TRUE if the specidfied adapter is a tunnel.

{% property status of <network adapter> %}

The operational status for the interface as defined in RFC 2863. It can be one of the values from the IF_OPER_STATUS enumeration type defined in the Iftypes.h header file. On Windows Vista and later, the header files were reorganized and this enumeration is defined in the Ifdef.h header file.

{% property secondary wins server of <network adapter> %}

Returns the IPv4 address of the secondary wins server of the specified network adapter.As of version 8.0 of BES, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

{% property primary wins server of <network adapter> %}

Returns the IPv4 address of the primary wins server of the specified network adapter.

{% property maximum transmission unit of <network adapter> %}

The maximum transmission unit (MTU) size, in bytes, of the specified adapter.

{% property link speed of <network adapter> %}

This is a property of a network adapter. It returns the maximum speed of the NIC card in bits per second.

{% property lease obtained of <network adapter> %}

Returns the time that the dhcp lease was obtained of the network adapter.

{% property lease expires of <network adapter> %}

Returns the time that the dhcp lease will expire of the network adapter.

{% property ipv6 dns server of <network adapter> %}

Returns the DNS server address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

{% property ipv6 address of <network adapter> %}

Returns the local IP address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

{% property ipv4or6 dns server of <network adapter> %}

Returns the ipv4or6 address of the DNS server of the specified network adapter.

{% property internet connection firewall of <network adapter> %}

Creates a Windows XP firewall object.

{% property gateway of <network adapter> %}

Returns the ip address of the gateway of the network adapter.

{% property gateway list of <network adapter> %}

Returns the gateway network address list of the network adapter.

{% property dns suffix of <network adapter> %}

Returns the Domain Name System (DNS) suffix associated with the specified adapter.

{% property dns server of <network adapter> %}

Returns a list of DNS servers used by the specified adapter.

{% property dhcp server of <network adapter> %}

Returns the ip address of the dhcp server of the network adapter (returns the first address if it is a list).

{% property dhcp enabled of <network adapter> %}

Returns TRUE if dhcp is enabled on the network adapter.

{% property description of <network adapter> %}

Returns the description of the network adapter.

{% property address list of <network adapter> %}

Returns the address list of the network adapter.

{% property wifi of <network adapter> %}

Filters the network adapter object by WiFi type and creates the &lt;wifi&gt; object(s)

{% property ipv6 interface <integer> of <network adapter> %}

No documentation exists for this property.

{% property ipv4or6 interface <integer> of <network adapter> %}

No documentation exists for this property.

{% property ipv4 interface <integer> of <network adapter> %}

No documentation exists for this property.

{% type network%}

The &lt;network&gt; objects are the keywords used to query the local network configuration.

#### Properties

{% property ipv6 interface of <network> %}

Returns all the ipv6 interfaces of the specified network.

{% property ipv4or6 interface of <network> %}

Returns all the ipv4or6 network adapter interfaces from the specified network.

{% property ipv4 interface of <network> %}

Returns an IPv4 network adapter interface from the specified network.

{% property ip interface of <network> %}

Returns all the ip interfaces of the network.

{% property ip interface <integer> of <network> %}

Returns the Nth ip interface of the network.

{% property interface of <network> %}

Returns all the interfaces of the network.

{% property interface <integer> of <network> %}

Returns the Nth interface of the network.

{% property find adapter <string> of <network> %}

This inspector lets you find a network adapter from the &quot;Friendly Name&quot;.

{% property any adapter of <network> %}

This inspector returns the same as &#39;adapter of &lt;network&gt;&#39;, but it includes loopback and tunnels.

{% property adapter of <network> %}

Returns the one or more network adapter objects of the network.

{% property link interface of <network> %}

Returns the network link interface of the specified network.

{% property link interface <integer> of <network> %}

Returns the Nth network link interface of the given network.

{% property adapter <string> of <network> %}

Returns the named adapter of the specified network.

{% property adapter <integer> of <network> %}

Returns the nth adapter of the specified network.

{% property winsock2 supported of <network> %}

Indicates that winsock2 is supported by the network. If this returns FALSE, many of the other properties of the interface are not available for inspection.

{% property dns server of <network> %}

Returns a list of DNS servers used by the local computer.

{% property connection of <network> %}

Returns a connection to the specified network. This inspector requires Windows XP or better.

{% property socket of <network> %}

Returns a &lt;socket&gt; type that is examinable for socket information.

{% property ipv6 interface <integer> of <network> %}

No documentation exists for this property.

{% property ipv4or6 interface <integer> of <network> %}

No documentation exists for this property.

{% property ipv4 interface <integer> of <network> %}

No documentation exists for this property.

{% property any adapter <integer> of <network> %}

No documentation exists for this property.

{% type socket file%}

The &lt;socket file&gt; inspectors allow you to interrogate socket files, which are representations of UNIX domain sockets identified by their pathname.

#### Properties

{% property filesystem of <socket file> %}

Returns the filesystem object corresponding to the specified socket file.

{% property drive of <socket file> %}

Returns the drive associated with the specified socket file.

{% type wifi%}

These inspectors expose the WiFi adapters available on an endpoint.

#### Properties

{% property ssid of <wifi> %}

Returns a string of the SSID of the WiFi connection

{% property secured of <wifi> %}

Returns a boolean that is true if the WiFi connection is secured.

{% property encryption of <wifi> %}

Returns a string of the encryption type of the WiFi connection. eg: &quot;WEP&quot;, &quot;WPA2-PSK&quot;

{% type network share%}

The network share inspector does not work on Windows 95/98/Me. The password and permission properties are relevant only for shares using share-level security. User-level security is given by the security descriptor. The use limit property will throw NoSuchObject if use is unlimited.

#### Properties

{% property write permission of <network share> %}

Returns TRUE if permission is granted to write data to the specified network share.

{% property use limit of <network share> %}

Specifies an integer value indicating the maximum number of concurrent connections that the shared resource can accommodate.

{% property use count of <network share> %}

Specifies an integer value that indicates the number of current connections to the specified network share.

{% property type of <network share> %}

Specifies an integer value that indicates the type of share. (See the Microsoft document on SHARE_INFO_502).

{% property security descriptor of <network share> %}

Specifies the security descriptor associated with the specified network share.

{% property read permission of <network share> %}

Returns TRUE if permission is granted to read data from a resource and, by default, to execute the specified network share.

{% property permission permission of <network share> %}

Returns TRUE if permission is granted to modify the permissions (read, write, create, execute, and delete) for the specified network share.

{% property path of <network share> %}

A string containing the local path for the shared resource.

{% property password of <network share> %}

A string that specifies the share&#39;s password (when the server is running with share-level security). Note that the Windows Server 2003 family, Windows XP, Windows 2000, and Windows NT do not support share-level security.

{% property name of <network share> %}

Returns a string specifying the name of the specified shared resource.

{% property execute permission of <network share> %}

Returns TRUE if permission is granted to execute the resource.

{% property delete permission of <network share> %}

Returns TRUE if permission is granted to delete the resource.

{% property create permission of <network share> %}

Returns TRUE if permission is granted to create an instance of a shared resource (such as a file).

{% property comment of <network share> %}

Returns a string specifying an optional comment about the shared resource.

{% property attribute permission of <network share> %}

Returns TRUE if permission is granted to modify the attributes of the shared resource (such as the date and time when a file was last modified).

{% type network address list%}

A network adapter may be configured to respond to a list of network addresses. This object type provides access to such a list.

#### Properties

{% property subnet mask of <network address list> %}

Returns the subnet mask (IPv4) of the specified network address list.

{% property subnet address of <network address list> %}

Returns the subnet address (IPv4) of the specified network address list.

{% property cidr string of <network address list> %}

Returns the Classless Inter-Domain Routing value for the specified network address list as a string value.

{% property cidr address of <network address list> %}

Returns the CIDR address of the address list as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

{% property address of <network address list> %}

Returns the IP address of the address list.

{% type tcp state%}

These inspectors expose the state of a socket on an endpoint

#### Casts

{% property <tcp state> as string %}

Cast a &lt;tcp state&gt; to a string representation

#### Properties

{% property time wait of <tcp state> %}

Returns true if the state represented is TIME_WAIT

{% property syn sent of <tcp state> %}

Returns true if the state represented is SYN_SENT

{% property syn received of <tcp state> %}

Returns true if the state represented is SYN_RECEIVED

{% property listening of <tcp state> %}

Returns true if the state represented is LISTENING

{% property last ack of <tcp state> %}

Returns true if the state represented is LAST_ACK

{% property fin wait two of <tcp state> %}

Returns true if the state represented is FIN_WAIT2

{% property fin wait one of <tcp state> %}

Returns true if the state represented is FIN_WAIT1

{% property established of <tcp state> %}

Returns true if the state represented is ESTABLISHED

{% property delete tcb of <tcp state> %}

Returns true if the state represented is DELETE_TCB

{% property closing of <tcp state> %}

Returns true if the state represented is CLOSING

{% property closed of <tcp state> %}

Returns true if the state represented is CLOSED

{% property close wait of <tcp state> %}

Returns true if the state represented is CLOSE_WAIT

{% type socket%}

These inspectors expose the sockets opened on the network on the endpoint

#### Properties

{% property udp of <socket> %}

Returns true if the socket is a UDP socket

{% property tcp state of <socket> %}

Returns a &lt;tcp state&gt; of the socket

{% property tcp of <socket> %}

Returns true if the socket is a TCP socket

{% property remote port of <socket> %}

Returns an &lt;integer&gt; representing the remote port number of the socket

{% property remote address of <socket> %}

Returns a &lt;ipv4or6 address&gt; representing the remote address of the socket

{% property process of <socket> %}

Returns a &lt;process&gt; representing the local owner of the socket

{% property local port of <socket> %}

Returns an &lt;integer&gt; representing the local port number of the socket

{% property local address of <socket> %}

Returns an &lt;ipv4or6 address&gt; representing the local address of the socket

{% type ipv4 routing table%}

No documentation exists for this type.

#### Properties

{% property route of <ipv4 routing table> %}

Returns all the routes in the routing table in Linux. On Solaris, this returns all routes which are not broadcast, local, or cache routes.

{% property all route of <ipv4 routing table> %}

Returns all the routes in the routing table on Solaris.

{% type ipv4 route%}

No documentation exists for this type.

#### Properties

{% property window of <ipv4 route> %}

Returns the TCP window setting for connections over the route. Typically only used on AX.25 networks and with drivers unable to handle back to back frames.

{% property up flag of <ipv4 route> %}

Returns a boolean specifying if the route is up.

{% property reject flag of <ipv4 route> %}

Returns a boolean specifying if the route is a blocking route.

{% property mtu of <ipv4 route> %}

Returns an integer specifying the maximum transmission unit setting of the route. Typically not used.

{% property metric of <ipv4 route> %}

Returns an integer specifying the metric value of the route.

{% property mask of <ipv4 route> %}

Returns an ipv4 address containing the netmask of the route in the format &quot;255.255.255.0&quot;.

{% property irtt of <ipv4 route> %}

Returns an integer specifying the initial roud trip time for TCP connections over the route in milliseconds (1-12000). Typically only used on AX.25 networks, with a default value of 300 if not specified.

{% property interface of <ipv4 route> %}

Returns a string containing the name of the interface the route goes through.

{% property host flag of <ipv4 route> %}

Returns a boolean specifying if the target of the route is a host.

{% property gateway of <ipv4 route> %}

Returns the ipv4 address of the route&#39;s gateway if the gateway flag is set, otherwise &quot;0.0.0.0&quot;.

{% property gateway flag of <ipv4 route> %}

Returns a boolean specifying if the route is going through a gateway.

{% property destination of <ipv4 route> %}

Returns an ipv4 address specifying the destination of the route.

{% property use count of <ipv4 route> %}

Returns an integer specifying the number of lookups for the route.

{% property static flag of <ipv4 route> %}

Returns a boolean specifying if the route is a persistent static route.

{% property setsrc flag of <ipv4 route> %}

Returns a boolean specifying whether the route assigns the default source address.

{% property reference count of <ipv4 route> %}

Returns an integer specifying the number of referenced to the route.

{% property private flag of <ipv4 route> %}

Returns a boolean specifying if the route is private and not advertised.

{% property prefix flag of <ipv4 route> %}

Returns a boolean specifying if the route is a prefix route.

{% property multiroute flag of <ipv4 route> %}

Returns a boolean specifying if the route is redundant.

{% property modified flag of <ipv4 route> %}

Returns a boolean specifying if the route was modified by a daemon or redirect.

{% property loopback flag of <ipv4 route> %}

Returns a boolean specifying if the route is the loopback route.

{% property local flag of <ipv4 route> %}

Returns a boolean specifying if the route is to the local network.

{% property dynamic flag of <ipv4 route> %}

Returns a boolean specifying if the route was dynamically installed by a daemon or redirect.

{% property default flag of <ipv4 route> %}

Returns a boolean specifying whether the route is a default route.

{% property cache flag of <ipv4 route> %}

Returns a boolean specifying if the route is in the cache.

{% property broadcast flag of <ipv4 route> %}

Returns a boolean specifying if the route is a broadcast route.

{% property blackhole flag of <ipv4 route> %}

Returns a boolean specifying if the route is a blackhole route.

{% type routing table%}

No documentation exists for this type.

#### Properties

{% property route of <routing table> %}

No documentation exists for this property.

{% type route%}

No documentation exists for this type.

#### Properties

{% property window of <route> %}

No documentation exists for this property.

{% property up flag of <route> %}

No documentation exists for this property.

{% property reject flag of <route> %}

No documentation exists for this property.

{% property mtu of <route> %}

No documentation exists for this property.

{% property metric of <route> %}

No documentation exists for this property.

{% property mask of <route> %}

No documentation exists for this property.

{% property irtt of <route> %}

No documentation exists for this property.

{% property interface of <route> %}

No documentation exists for this property.

{% property host flag of <route> %}

No documentation exists for this property.

{% property gateway of <route> %}

No documentation exists for this property.

{% property gateway flag of <route> %}

No documentation exists for this property.

{% property destination of <route> %}

No documentation exists for this property.

{% property xresolve flag of <route> %}

No documentation exists for this property.

{% property wascloned flag of <route> %}

No documentation exists for this property.

{% property static flag of <route> %}

No documentation exists for this property.

{% property sent packet count of <route> %}

No documentation exists for this property.

{% property seconds to expiration of <route> %}

No documentation exists for this property.

{% property router flag of <route> %}

No documentation exists for this property.

{% property reference of <route> %}

No documentation exists for this property.

{% property proxy flag of <route> %}

No documentation exists for this property.

{% property proto3 flag of <route> %}

No documentation exists for this property.

{% property proto2 flag of <route> %}

No documentation exists for this property.

{% property proto1 flag of <route> %}

No documentation exists for this property.

{% property prcloning flag of <route> %}

No documentation exists for this property.

{% property pinned flag of <route> %}

No documentation exists for this property.

{% property netstat flag of <route> %}

No documentation exists for this property.

{% property multicast flag of <route> %}

No documentation exists for this property.

{% property modified flag of <route> %}

No documentation exists for this property.

{% property local flag of <route> %}

No documentation exists for this property.

{% property llinfo flag of <route> %}

No documentation exists for this property.

{% property ip family of <route> %}

No documentation exists for this property.

{% property ifscope flag of <route> %}

No documentation exists for this property.

{% property ifref flag of <route> %}

No documentation exists for this property.

{% property gateway type of <route> %}

No documentation exists for this property.

{% property gateway string of <route> %}

No documentation exists for this property.

{% property flags string of <route> %}

No documentation exists for this property.

{% property expiration time of <route> %}

No documentation exists for this property.

{% property dynamic flag of <route> %}

No documentation exists for this property.

{% property done flag of <route> %}

No documentation exists for this property.

{% property destination type of <route> %}

No documentation exists for this property.

{% property destination string of <route> %}

No documentation exists for this property.

{% property delclone flag of <route> %}

No documentation exists for this property.

{% property default of <route> %}

No documentation exists for this property.

{% property condemned flag of <route> %}

No documentation exists for this property.

{% property cloning flag of <route> %}

No documentation exists for this property.

{% property cloned of <route> %}

No documentation exists for this property.

{% property broadcast flag of <route> %}

No documentation exists for this property.

{% property blackhole flag of <route> %}

No documentation exists for this property.

{% type connection status%}

The &lt;connection status&gt; objects return information about the status of your connections.

{% type connection%}

The &lt;connection&gt; objects are used to query your connections. These are all properties of the Internet Connection Firewall, as returned in the NETCON_PROPERTIES structure.

#### Properties

{% property status of <connection> %}

Returns the status of the specified connection.

{% property name of <connection> %}

Returns the name of the specified connection.

{% property media type of <connection> %}

Returns the media type of for the specified connection.

{% property guid of <connection> %}

Returns the globally-unique identifier (GUID) for the specified connection.

{% property firewall of <connection> %}

Returns the internet connection firewall object corresponding to the specified connection.

{% property device name of <connection> %}

Returns the name of the device associated with the specified connection.

{% type media type%}

The &lt;media type&gt; objects allow you to inspect the media type of your Internet Connection Firewall type connection, as returned in the NETCON_PROPERTIES structure.

{% type network link interface%}

The network link interface objects correspond to interfaces of type AF_LINK.

#### Properties

{% property mac address of <network link interface> %}

Returns the MAC address of the specified network link interface.Example: mac addresses of link interfaces of network - Returns a list of the MAC addresses of the network link interfaces, for example, 00-14-c8-3a-82-11, 00-16-bc-72-2c-57, 00-14-e4-26-fe-4c-14-37, etcetera.Example: mac address of link interface (whose name of it is &quot;fw0&quot;) of network - Returns the MAC address of the specified network link interface.

