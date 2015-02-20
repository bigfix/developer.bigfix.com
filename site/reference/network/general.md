---
title: general
---

## ipv6 address with multiplicity

The &lt;ipv6 address with multiplicity&gt; inspectors deal with ipv6 address arrays, allowing you to extract unique ipv6 addresses and count them.

#### multiplicity of &lt;ipv6 address with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;ipv6 address&gt; types.

## ipv6 address

The &lt;ipv6 address&gt; inspectors deal with the Internet Protocol addressing scheme, version 6. Note: Prior to version 8.0 of BigFix, this was not a derived type.

#### &lt;ipv6 address&gt; as string : string

Returns a string representation of the IPv6 address in the form x:x:x:x:x:x:x:x, where each x represents one to four hexadecimal digits of the eight 16-bit address fields. Leading zeros in an individual field are omitted. See RFC 4291 section 2.2, item 1.

#### &lt;ipv6 address&gt; as string with zone index : string

Converts an IPv6 address into a string with a terminating slash-delimited zone index, if any.

#### &lt;ipv6 address&gt; as string with leading zeros : string

Similar to casting as a string, but leading zeros in individual fields are preserved.

#### &lt;ipv6 address&gt; as string with leading zeros with zone index : string

Converts an IPv6 address into a string with all fields packed with leading zeroes as well as a terminating zone index, if any.

#### &lt;ipv6 address&gt; as string with ipv4 : string

Similar to casting as a string, but with the lowest 32 bits of the address in the standard IPv4 representation (RFC 4291 section 2.2, item 3).

#### &lt;ipv6 address&gt; as string with ipv4 with zone index : string

Similar to casting as a string, but with standard IPv4 representation for the low 32-bits as well as any zone index.

#### &lt;ipv6 address&gt; as ipv4or6 address : ipv4or6 address

Casts an IPv6 address as a more flexible ipv4or6 address.

#### &lt;ipv6 address&gt; as compressed string : string

Similar to casting as a string, but with double colons used to represent multiple zero 16-bit parts (RFC 4291 section 2.2, item 2).

#### &lt;ipv6 address&gt; as compressed string with zone index : string

Similar to casting as a string, but with both colon-compression and a zone index.

#### &lt;ipv6 address&gt; as compressed string with ipv4 : string

Similar to casting as a string, but with both colon-compression and standard IPv4 representation for the low 32-bits.

#### &lt;ipv6 address&gt; as compressed string with ipv4 with zone index : string

Similar to casting as a string, but with both colon-compression and standard IPv4 representation for the low 32-bits as well as any zone index.

#### unique value of &lt;ipv6 address&gt; : ipv6 address with multiplicity

Returns the unique values of a given list of &lt;ipv6 address&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;ipv6 address&gt; : ipv6 address

Returns the minimum value from a list of &lt;ipv6 address&gt; types.

#### maximum of &lt;ipv6 address&gt; : ipv6 address

Returns the maximum value from a list of &lt;ipv6 address&gt; types.

#### ipv4 part of &lt;ipv6 address&gt; : ipv4 address

Returns the lowest 32-bits of the IPv6 address as an IPv4 address.As of version 8.0, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

#### hexadecet &lt;integer&gt; of &lt;ipv6 address&gt; : integer

Returns one of the eight 16-bit parts (hexadecets) of an IPv6 address specified by &lt;integer&gt;. Here zero refers to the highest hexadecet (network or big-endian order). Thus hexadecet 0 refers to the most-significant 16-bits of the 128 bit IPv6 address.

#### extrema of &lt;ipv6 address&gt; : ( ipv6 address, ipv6 address )

Returns the minimum and maximum extreme values of the given list of &lt;ipv6 address&gt; types.

## ipv4or6 address with multiplicity

The &lt;ipv4or6 address with multiplicity&gt; inspectors deal with arrays of ipv4or6 addresses, allowing you to extract unique addresses and count them. 

#### multiplicity of &lt;ipv4or6 address with multiplicity&gt; : integer

Returns the multiplicity (how many entries of each unique address) of a list of ipv4or6 addresses.

## ipv4or6 address

The &lt;ipv4or6 address&gt; inspectors allow you to represent IPv4 and IPv6 addresses as a common type. From these inclusive inspectors, you can derive the corresponding v4 and v6 IP addresses.

#### &lt;ipv4or6 address&gt; as string : string

Casts an IP address (v4 or 6) as a string type.

#### &lt;ipv4or6 address&gt; as string with zone index : string

Converts an IP address into a string with a zone index, if any.

#### &lt;ipv4or6 address&gt; as string with leading zeros : string

Converts an IP address into a string with all fields packed with leading zeroes.

#### &lt;ipv4or6 address&gt; as string with leading zeros with zone index : string

Converts an IP address into a string with all fields packed with leading zeroes, as well as any zone index.

#### &lt;ipv4or6 address&gt; as string with ipv4 : string

Converts an address to a string with the lower 32 bits in IPv4 format.

#### &lt;ipv4or6 address&gt; as string with ipv4 with zone index : string

Converts an address to a string with the lower 32 bits in IPv4 format as well as any zone index.

#### &lt;ipv4or6 address&gt; as compressed string : string

Compresses the IP address, using double colons to stand in for repeated zeroes in the address.Example: (&quot;0:0:0:0:0:ffff:c0a8:16a&quot; as ipv4or6 address) as compressed string - Returns &quot;::ffff:c0a8:16a&quot;, a compressed string with a double colon standing in for leading zeroes.

#### &lt;ipv4or6 address&gt; as compressed string with zone index : string

Creates a compressed string (replacing multiple zeroes with double colons) and includes the zone index (on Windows, typically a number) following a percent sign (%).

#### &lt;ipv4or6 address&gt; as compressed string with ipv4 : string

Similar to casting to a string, but with both colon-compression and standard IPv4 representation for the low 32-bits.Example: (&quot;0:0:0:0:0:ffff:c0a8:16a&quot; as ipv4or6 address) as compressed string with ipv4 - Returns &quot;::ffff:192.168.1.106&quot;, a compressed string (leading zeroes collapsed to ::) with a four-byte IPv4 address as the lower 32 bits.

#### &lt;ipv4or6 address&gt; as compressed string with ipv4 with zone index : string

Creates a compressed string (replacing multiple zeroes with double colons) with the lower 32 bits in IPv4 format. It includes the zone index (on Windows, typically a number) following a percent sign (%).

#### unique value of &lt;ipv4or6 address&gt; : ipv4or6 address with multiplicity

Returns the unique values of a given list of addresses (ipv4or6), removing duplicates and sorting by value.

#### minimum of &lt;ipv4or6 address&gt; : ipv4or6 address

Returns the minimum of the specified list of &lt;ipv4or6 address&gt; types.

#### maximum of &lt;ipv4or6 address&gt; : ipv4or6 address

Returns the maximum of the specified list of &lt;ipv4or6 address&gt; types.

#### ipv4 part of &lt;ipv4or6 address&gt; : ipv4 address

Returns the lowest 32-bits of the IPv4or6 address as an IPv4 address.

#### ip version of &lt;ipv4or6 address&gt; : ip version

Returns the IP version of the specified ipv4or6 address.

#### hexadecet &lt;integer&gt; of &lt;ipv4or6 address&gt; : integer

Returns one of the eight 16-bit parts (hexadecets) of an ipv4or6 address specified by &lt;integer&gt;. Here zero refers to the highest hexadecet (network or big-endian order). Thus hexadecet 0 refers to the most-significant 16-bits of the 128 bit ipv4or6 address.

#### extrema of &lt;ipv4or6 address&gt; : ( ipv4or6 address, ipv4or6 address )

Returns the minimum and maximum of the specified list of ipv4or6 addresses.

## ipv4 address with multiplicity

The &lt;ipv4 address with multiplicity&gt; inspectors deal with ipv4 address arrays, allowing you to extract unique ipv4 addresses and count them.

#### multiplicity of &lt;ipv4 address with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;ipv4 address&gt; types.

## ipv4 address

This is an Internet Protocol address, version 4. IP addresses are composed of four single-byte integers separated by periods, such as &quot;192.5.0.7&quot;. Note: Prior to version 8.0 of BigFix, this was not a derived type.

#### &lt;ipv4 address&gt; as string : string

Converts the ipv4 address to a string.

#### &lt;ipv4 address&gt; as ipv6 address : ipv6 address

Returns the specified IPv4 address embedded in a IPv6 address space as defined by RFC 4291 section 2.5.5.2: IPv4-Mapped IPv6 Address. In this scheme the lowest 32 bits of the IPv6 address contain the IPv4 address, the next higher 16 bits are all 1 (ffff) and the remaining bits are all 0.

#### &lt;ipv4 address&gt; as ipv4or6 address : ipv4or6 address

Converts an IPv4 address into the more inclusive ipv4or6 type.

#### unique value of &lt;ipv4 address&gt; : ipv4 address with multiplicity

Returns the unique values of a given list of &lt;ipv4 address&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;ipv4 address&gt; : ipv4 address

Returns the minimum value from a list of &lt;ipv4 address&gt; types.

#### maximum of &lt;ipv4 address&gt; : ipv4 address

Returns the maximum value from a list of &lt;ipv4 address&gt; types.

#### extrema of &lt;ipv4 address&gt; : ( ipv4 address, ipv4 address )

Returns the minimum and maximum extreme values of the given list of &lt;ipv4 address&gt; types.

## ip version

The &lt;ip version&gt; inspectors distinguish between ipv6 and ipv4. The integer representations of these are chosen to meet existing standards.

#### &lt;ip version&gt; as string : string

Converts an IP version to a string.

## network ip interface

In general, the network ip interface object holds locally determined properties of logical network devices configured on the computer. On the Mac, these correspond to interfaces of type AF_INET. The properties that are available depend on the socket support installed on the computer. For Windows computers with winsock 2 support installed, for instance, the information is obtained by an ioctl call and includes Interface address, Interface broadcast address, Interface network mask, Broadcast support flag, Multicast support flag, Loopback interface flag and Point to point interface flag.

#### up of &lt;network ip interface&gt; : boolean

Returns TRUE if the specified network IP interface is currently up.

#### subnet mask of &lt;network ip interface&gt; : ipv4 address

Returns the subnet mask (IPv4) of the specified network ip interface.As of version 8.0, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

#### subnet address of &lt;network ip interface&gt; : ipv4 address

Returns the subnet address (IPv4) to which the specified interface belongs.

#### point to point of &lt;network ip interface&gt; : boolean

Indicates that the interface is a point-to-point interface. Usually TRUE for dialup connections.

#### name of &lt;network ip interface&gt; : string

Returns the name of the network ip interface object. Typical names are lan0, lo0. Virtual interfaces are usually of the form lan0:2.

#### multicast support of &lt;network ip interface&gt; : boolean

Indicates that multicast messages are supported by the ip interface.

#### mac address of &lt;network ip interface&gt; : string

Returns the MAC address (AKA hardware address) of the network ip interface object. The mac address is formatted as a string of lower case hex digits separated by &#39;-&#39;.Example:  mac address whose (it = &quot;00-61-b1-d1-7d-29&quot;) of ip interfaces of network - Returns the mac address of the specified network ip interface object.

#### loopback of &lt;network ip interface&gt; : boolean

Indicates that the particular network ip interface is a loopback interface.Example: address of ip interface whose (loopback of it = false) of network = &quot;192.168.127.127&quot; - Returns TRUE if the given IP address doesn&#39;t have loopback.

#### cidr string of &lt;network ip interface&gt; : string

Returns the Classless Inter-Domain Routing value for the specified network ip interface as a string type.

#### cidr address of &lt;network ip interface&gt; : string

Returns the Classless Inter-Domain Routing address for the specified network ip interface as a string type.

#### broadcast support of &lt;network ip interface&gt; : boolean

Indicates that broadcast messages are supported by the ip interface.

#### broadcast address of &lt;network ip interface&gt; : ipv4 address

Returns the broadcast address of the specified interface as an IPv4 type.

#### alias of &lt;network ip interface&gt; : boolean

Returns TRUE if the network ip interface has an alias defined for it (a virtual device, rather than a physical device).

#### address of &lt;network ip interface&gt; : ipv4 address

Returns the ip address of the ip interface.

## network interface

The network interface object describes a generic network interface, and has information about the name and family of that interface. On the Mac these are commonly of type AF_INET, AF_LINK and AF_INET6.

#### family of &lt;network interface&gt; : integer

Returns an family designator of the address family (i.e., 2=AFI_NET).

#### up of &lt;network interface&gt; : boolean

Returns TRUE if the specified network interface is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

#### name of &lt;network interface&gt; : string

Returns the name of the network interface object.

#### family name of &lt;network interface&gt; : string

Returns the name of the interface family. There are about 35 of these, but the most common is AF_INET, or normal IP interface. AF_LINK is used for wifi devices and AF_INET6 is for IP v6 addresses. There are specific inspectors for AF_INET (ip interface) and AF_LINK (link interface). The family name of inspector returns this type as a string corresponding to the #define value in the header file.

## network adapter interface

A network adapter interfaces a computer to a network. These inspectors expose the adapter so that you can determine its properties, such as its address, subnet mask, mac address and whether or not it supports broadcast, multicast or point-to-point.

#### up of &lt;network adapter interface&gt; : boolean

Returns TRUE if the specified interface is currently up and working.

#### subnet mask of &lt;network adapter interface&gt; : ipv4or6 address

Returns the subnet mask of the specified interface as an ipv4or6 address type.

#### subnet address of &lt;network adapter interface&gt; : ipv4or6 address

Returns the subnet address of the specified interface as an ipv4or6 address type.

#### point to point of &lt;network adapter interface&gt; : boolean

A network adapter interface can be a point-to-point interface, such as you might use for a VPN connection or a SLIP connection. This inspector returns TRUE if the specified network adapter interface is configured to run point-to-point.

#### multicast support of &lt;network adapter interface&gt; : boolean

Returns TRUE if the specified interface supports multicasting.

#### mac address of &lt;network adapter interface&gt; : string

Returns the MAC address of the specified network adapter interface as a string type.

#### loopback of &lt;network adapter interface&gt; : boolean

Returns TRUE if the specified interface supports loopbacks.

#### cidr string of &lt;network adapter interface&gt; : string

A cidr string (see CIDR_notation at Wikipedia) is a string representation of a cidr address.  It looks like an ip address followed by a slash and then the number of leading non-zero bits of the routing prefix. For example, 192.168.0.0/16 for IPv4, and 2001:db8::/32 for IPv6.

#### cidr address of &lt;network adapter interface&gt; : string

Returns the CIDR address of the specified interface as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

#### broadcast support of &lt;network adapter interface&gt; : boolean

Returns TRUE if the given network adapter interface has broadcast support.

#### broadcast address of &lt;network adapter interface&gt; : ipv4or6 address

Creates an object with the broadcast address (ipv4or6) of the specified network adapter interface.

#### address of &lt;network adapter interface&gt; : ipv4or6 address

Returns the IP address of the specified network adapter interface as an ipv4or6 address type.

#### adapter of &lt;network adapter interface&gt; : network adapter

Returns the adapters associated with the specified network adapter interface.

## network adapter

One or more network adapters may be inspected using this property of the network object. Each network adapter has a number of interesting properties such as the MAC address.

#### up of &lt;network adapter&gt; : boolean

Returns TRUE if the specified network adaoter is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

#### subnet mask of &lt;network adapter&gt; : ipv4 address

Returns the subnet mask (IPv4) of the specified network adapter.

#### subnet address of &lt;network adapter&gt; : ipv4 address

Returns the subnet address (IPv4) of the specified network adapter.

#### name of &lt;network adapter&gt; : string

Returns the name of the network adapter.

#### multicast support of &lt;network adapter&gt; : boolean

Returns TRUE if multicast messages are supported by the specified network adapter.

#### mac address of &lt;network adapter&gt; : string

Returns the mac address of the network adapter.

#### loopback of &lt;network adapter&gt; : boolean

Returns TRUE if the specified network adapter is a loopback interface.

#### ipv6 interface of &lt;network adapter&gt; : network adapter interface

Returns the IPv6 interfaces of the specified network adapter as a network adapter interface type.

#### ipv4or6 interface of &lt;network adapter&gt; : network adapter interface

Returns the ipv4or network adapter interface from the specified network adapter.

#### ipv4 interface of &lt;network adapter&gt; : network adapter interface

Returns the IPv4 interface of the specified network adapter as a &lt;network adapter ip interface&gt; type.

#### friendly name of &lt;network adapter&gt; : string

Returns a user-friendly name for the adapter, for example &quot;Local Area Connection 1&quot;.

#### cidr string of &lt;network adapter&gt; : string

Returns the Classless Inter-Domain Routing value for the specified network adapter as a string value.

#### cidr address of &lt;network adapter&gt; : string

Returns the CIDR address of the specified network adapter as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

#### address of &lt;network adapter&gt; : ipv4 address

Returns the ip address of the network adapter (returns the first address if it is a list).

#### point to point of &lt;network adapter&gt; : boolean

Returns TRUE if the specified network adapter is a point-to-point interface. Usually TRUE for dialup connections.

#### link interface of &lt;network adapter&gt; : network link interface

Returns the network link interface(s) of the specified network adapter.

#### ip interface of &lt;network adapter&gt; : network ip interface

Returns an object or an object list (using the plural keyword) with all the ip interfaces of the specified network adapter.

#### interface of &lt;network adapter&gt; : network interface

Returns a network interface object from the specified network adapter.

#### broadcast support of &lt;network adapter&gt; : boolean

Returns TRUE if the specified network adapter supports broadcast.

#### broadcast address of &lt;network adapter&gt; : ipv4 address

Returns the broadcast address of the specified network adapter as an &lt;ipv4 address&gt;.

#### wins enabled of &lt;network adapter&gt; : boolean

Returns TRUE if WINS is enabled on the network adapter.

#### wakeonlan enabled of &lt;network adapter&gt; : boolean

Returns TRUE if the specified network adapter is configured to react to Wake-On-Lan requests. Wake-On-Lan is a mechanism used to trigger a boot of a machine in standby mode by sending a special packet.Note: Wake-On-Lan is only supported for Windows 2000 and XP machines.

#### type of &lt;network adapter&gt; : integer

Returns the interface type of the specified adapter as defined by the Internet Assigned Names Authority (IANA). Possible values for the interface type are listed in the Ipifcons.h header file.

#### tunnel of &lt;network adapter&gt; : boolean

Returns TRUE if the specidfied adapter is a tunnel.

#### status of &lt;network adapter&gt; : integer

The operational status for the interface as defined in RFC 2863. It can be one of the values from the IF_OPER_STATUS enumeration type defined in the Iftypes.h header file. On Windows Vista and later, the header files were reorganized and this enumeration is defined in the Ifdef.h header file.

#### secondary wins server of &lt;network adapter&gt; : ipv4 address

Returns the IPv4 address of the secondary wins server of the specified network adapter.As of version 8.0 of BES, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

#### primary wins server of &lt;network adapter&gt; : ipv4 address

Returns the IPv4 address of the primary wins server of the specified network adapter.

#### maximum transmission unit of &lt;network adapter&gt; : integer

The maximum transmission unit (MTU) size, in bytes, of the specified adapter.

#### link speed of &lt;network adapter&gt; : integer

This is a property of a network adapter. It returns the maximum speed of the NIC card in bits per second.

#### lease obtained of &lt;network adapter&gt; : time

Returns the time that the dhcp lease was obtained of the network adapter.

#### lease expires of &lt;network adapter&gt; : time

Returns the time that the dhcp lease will expire of the network adapter.

#### ipv6 dns server of &lt;network adapter&gt; : ipv6 address

Returns the DNS server address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

#### ipv6 address of &lt;network adapter&gt; : ipv6 address

Returns the local IP address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

#### ipv4or6 dns server of &lt;network adapter&gt; : ipv4or6 address

Returns the ipv4or6 address of the DNS server of the specified network adapter.

#### internet connection firewall of &lt;network adapter&gt; : internet connection firewall

Creates a Windows XP firewall object.

#### gateway of &lt;network adapter&gt; : ipv4 address

Returns the ip address of the gateway of the network adapter.

#### gateway list of &lt;network adapter&gt; : network address list

Returns the gateway network address list of the network adapter.

#### dns suffix of &lt;network adapter&gt; : string

Returns the Domain Name System (DNS) suffix associated with the specified adapter.

#### dns server of &lt;network adapter&gt; : network address list

Returns a list of DNS servers used by the specified adapter.

#### dhcp server of &lt;network adapter&gt; : ipv4 address

Returns the ip address of the dhcp server of the network adapter (returns the first address if it is a list).

#### dhcp enabled of &lt;network adapter&gt; : boolean

Returns TRUE if dhcp is enabled on the network adapter.

#### description of &lt;network adapter&gt; : string

Returns the description of the network adapter.

#### address list of &lt;network adapter&gt; : network address list

Returns the address list of the network adapter.

#### wifi of &lt;network adapter&gt; : wifi

Filters the network adapter object by WiFi type and creates the &lt;wifi&gt; object(s)

#### ipv6 interface &lt;integer&gt; of &lt;network adapter&gt; : network adapter interface

No documentation exists for this property.

#### ipv4or6 interface &lt;integer&gt; of &lt;network adapter&gt; : network adapter interface

No documentation exists for this property.

#### ipv4 interface &lt;integer&gt; of &lt;network adapter&gt; : network adapter interface

No documentation exists for this property.

## network

The &lt;network&gt; objects are the keywords used to query the local network configuration.

#### ipv6 interface of &lt;network&gt; : network adapter interface

Returns all the ipv6 interfaces of the specified network.

#### ipv4or6 interface of &lt;network&gt; : network adapter interface

Returns all the ipv4or6 network adapter interfaces from the specified network.

#### ipv4 interface of &lt;network&gt; : network adapter interface

Returns an IPv4 network adapter interface from the specified network.

#### ip interface of &lt;network&gt; : network ip interface

Returns all the ip interfaces of the network.

#### ip interface &lt;integer&gt; of &lt;network&gt; : network ip interface

Returns the Nth ip interface of the network.

#### interface of &lt;network&gt; : network interface

Returns all the interfaces of the network.

#### interface &lt;integer&gt; of &lt;network&gt; : network interface

Returns the Nth interface of the network.

#### find adapter &lt;string&gt; of &lt;network&gt; : network adapter

This inspector lets you find a network adapter from the &quot;Friendly Name&quot;.

#### any adapter of &lt;network&gt; : network adapter

This inspector returns the same as &#39;adapter of &lt;network&gt;&#39;, but it includes loopback and tunnels.

#### adapter of &lt;network&gt; : network adapter

Returns the one or more network adapter objects of the network.

#### link interface of &lt;network&gt; : network link interface

Returns the network link interface of the specified network.

#### link interface &lt;integer&gt; of &lt;network&gt; : network link interface

Returns the Nth network link interface of the given network.

#### adapter &lt;string&gt; of &lt;network&gt; : network adapter

Returns the named adapter of the specified network.

#### adapter &lt;integer&gt; of &lt;network&gt; : network adapter

Returns the nth adapter of the specified network.

#### winsock2 supported of &lt;network&gt; : boolean

Indicates that winsock2 is supported by the network. If this returns FALSE, many of the other properties of the interface are not available for inspection.

#### dns server of &lt;network&gt; : network address list

Returns a list of DNS servers used by the local computer.

#### connection of &lt;network&gt; : connection

Returns a connection to the specified network. This inspector requires Windows XP or better.

#### socket of &lt;network&gt; : socket

Returns a &lt;socket&gt; type that is examinable for socket information.

#### ipv6 interface &lt;integer&gt; of &lt;network&gt; : network adapter interface

No documentation exists for this property.

#### ipv4or6 interface &lt;integer&gt; of &lt;network&gt; : network adapter interface

No documentation exists for this property.

#### ipv4 interface &lt;integer&gt; of &lt;network&gt; : network adapter interface

No documentation exists for this property.

#### any adapter &lt;integer&gt; of &lt;network&gt; : network adapter

No documentation exists for this property.

## socket file

The &lt;socket file&gt; inspectors allow you to interrogate socket files, which are representations of UNIX domain sockets identified by their pathname.

#### filesystem of &lt;socket file&gt; : filesystem

Returns the filesystem object corresponding to the specified socket file.

#### drive of &lt;socket file&gt; : filesystem

Returns the drive associated with the specified socket file.

## wifi

These inspectors expose the WiFi adapters available on an endpoint.

#### ssid of &lt;wifi&gt; : string

Returns a string of the SSID of the WiFi connection

#### secured of &lt;wifi&gt; : boolean

Returns a boolean that is true if the WiFi connection is secured.

#### encryption of &lt;wifi&gt; : string

Returns a string of the encryption type of the WiFi connection. eg: &quot;WEP&quot;, &quot;WPA2-PSK&quot;

## network share

The network share inspector does not work on Windows 95/98/Me. The password and permission properties are relevant only for shares using share-level security. User-level security is given by the security descriptor. The use limit property will throw NoSuchObject if use is unlimited.

#### write permission of &lt;network share&gt; : boolean

Returns TRUE if permission is granted to write data to the specified network share.

#### use limit of &lt;network share&gt; : integer

Specifies an integer value indicating the maximum number of concurrent connections that the shared resource can accommodate.

#### use count of &lt;network share&gt; : integer

Specifies an integer value that indicates the number of current connections to the specified network share.

#### type of &lt;network share&gt; : integer

Specifies an integer value that indicates the type of share. (See the Microsoft document on SHARE_INFO_502).

#### security descriptor of &lt;network share&gt; : security descriptor

Specifies the security descriptor associated with the specified network share.

#### read permission of &lt;network share&gt; : boolean

Returns TRUE if permission is granted to read data from a resource and, by default, to execute the specified network share.

#### permission permission of &lt;network share&gt; : boolean

Returns TRUE if permission is granted to modify the permissions (read, write, create, execute, and delete) for the specified network share.

#### path of &lt;network share&gt; : string

A string containing the local path for the shared resource.

#### password of &lt;network share&gt; : string

A string that specifies the share&#39;s password (when the server is running with share-level security). Note that the Windows Server 2003 family, Windows XP, Windows 2000, and Windows NT do not support share-level security.

#### name of &lt;network share&gt; : string

Returns a string specifying the name of the specified shared resource.

#### execute permission of &lt;network share&gt; : boolean

Returns TRUE if permission is granted to execute the resource.

#### delete permission of &lt;network share&gt; : boolean

Returns TRUE if permission is granted to delete the resource.

#### create permission of &lt;network share&gt; : boolean

Returns TRUE if permission is granted to create an instance of a shared resource (such as a file).

#### comment of &lt;network share&gt; : string

Returns a string specifying an optional comment about the shared resource.

#### attribute permission of &lt;network share&gt; : boolean

Returns TRUE if permission is granted to modify the attributes of the shared resource (such as the date and time when a file was last modified).

## network address list

A network adapter may be configured to respond to a list of network addresses. This object type provides access to such a list.

#### subnet mask of &lt;network address list&gt; : ipv4 address

Returns the subnet mask (IPv4) of the specified network address list.

#### subnet address of &lt;network address list&gt; : ipv4 address

Returns the subnet address (IPv4) of the specified network address list.

#### cidr string of &lt;network address list&gt; : string

Returns the Classless Inter-Domain Routing value for the specified network address list as a string value.

#### cidr address of &lt;network address list&gt; : string

Returns the CIDR address of the address list as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

#### address of &lt;network address list&gt; : ipv4 address

Returns the IP address of the address list.

## tcp state

These inspectors expose the state of a socket on an endpoint

#### &lt;tcp state&gt; as string : string

Cast a &lt;tcp state&gt; to a string representation

#### time wait of &lt;tcp state&gt; : boolean

Returns true if the state represented is TIME_WAIT

#### syn sent of &lt;tcp state&gt; : boolean

Returns true if the state represented is SYN_SENT

#### syn received of &lt;tcp state&gt; : boolean

Returns true if the state represented is SYN_RECEIVED

#### listening of &lt;tcp state&gt; : boolean

Returns true if the state represented is LISTENING

#### last ack of &lt;tcp state&gt; : boolean

Returns true if the state represented is LAST_ACK

#### fin wait two of &lt;tcp state&gt; : boolean

Returns true if the state represented is FIN_WAIT2

#### fin wait one of &lt;tcp state&gt; : boolean

Returns true if the state represented is FIN_WAIT1

#### established of &lt;tcp state&gt; : boolean

Returns true if the state represented is ESTABLISHED

#### delete tcb of &lt;tcp state&gt; : boolean

Returns true if the state represented is DELETE_TCB

#### closing of &lt;tcp state&gt; : boolean

Returns true if the state represented is CLOSING

#### closed of &lt;tcp state&gt; : boolean

Returns true if the state represented is CLOSED

#### close wait of &lt;tcp state&gt; : boolean

Returns true if the state represented is CLOSE_WAIT

## socket

These inspectors expose the sockets opened on the network on the endpoint

#### udp of &lt;socket&gt; : boolean

Returns true if the socket is a UDP socket

#### tcp state of &lt;socket&gt; : tcp state

Returns a &lt;tcp state&gt; of the socket

#### tcp of &lt;socket&gt; : boolean

Returns true if the socket is a TCP socket

#### remote port of &lt;socket&gt; : integer

Returns an &lt;integer&gt; representing the remote port number of the socket

#### remote address of &lt;socket&gt; : ipv4or6 address

Returns a &lt;ipv4or6 address&gt; representing the remote address of the socket

#### process of &lt;socket&gt; : process

Returns a &lt;process&gt; representing the local owner of the socket

#### local port of &lt;socket&gt; : integer

Returns an &lt;integer&gt; representing the local port number of the socket

#### local address of &lt;socket&gt; : ipv4or6 address

Returns an &lt;ipv4or6 address&gt; representing the local address of the socket

## ipv4 routing table

No documentation exists for this type.

#### route of &lt;ipv4 routing table&gt; : ipv4 route

Returns all the routes in the routing table in Linux. On Solaris, this returns all routes which are not broadcast, local, or cache routes.

#### all route of &lt;ipv4 routing table&gt; : ipv4 route

Returns all the routes in the routing table on Solaris.

## ipv4 route

No documentation exists for this type.

#### window of &lt;ipv4 route&gt; : integer

Returns the TCP window setting for connections over the route. Typically only used on AX.25 networks and with drivers unable to handle back to back frames.

#### up flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is up.

#### reject flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a blocking route.

#### mtu of &lt;ipv4 route&gt; : integer

Returns an integer specifying the maximum transmission unit setting of the route. Typically not used.

#### metric of &lt;ipv4 route&gt; : integer

Returns an integer specifying the metric value of the route.

#### mask of &lt;ipv4 route&gt; : ipv4 address

Returns an ipv4 address containing the netmask of the route in the format &quot;255.255.255.0&quot;.

#### irtt of &lt;ipv4 route&gt; : integer

Returns an integer specifying the initial roud trip time for TCP connections over the route in milliseconds (1-12000). Typically only used on AX.25 networks, with a default value of 300 if not specified.

#### interface of &lt;ipv4 route&gt; : string

Returns a string containing the name of the interface the route goes through.

#### host flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the target of the route is a host.

#### gateway of &lt;ipv4 route&gt; : ipv4 address

Returns the ipv4 address of the route&#39;s gateway if the gateway flag is set, otherwise &quot;0.0.0.0&quot;.

#### gateway flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is going through a gateway.

#### destination of &lt;ipv4 route&gt; : ipv4 address

Returns an ipv4 address specifying the destination of the route.

#### use count of &lt;ipv4 route&gt; : integer

Returns an integer specifying the number of lookups for the route.

#### static flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a persistent static route.

#### setsrc flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying whether the route assigns the default source address.

#### reference count of &lt;ipv4 route&gt; : integer

Returns an integer specifying the number of referenced to the route.

#### private flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is private and not advertised.

#### prefix flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a prefix route.

#### multiroute flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is redundant.

#### modified flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route was modified by a daemon or redirect.

#### loopback flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is the loopback route.

#### local flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is to the local network.

#### dynamic flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route was dynamically installed by a daemon or redirect.

#### default flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying whether the route is a default route.

#### cache flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is in the cache.

#### broadcast flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a broadcast route.

#### blackhole flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a blackhole route.

## routing table

No documentation exists for this type.

#### route of &lt;routing table&gt; : route

No documentation exists for this property.

## route

No documentation exists for this type.

#### window of &lt;route&gt; : integer

No documentation exists for this property.

#### up flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### reject flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### mtu of &lt;route&gt; : integer

No documentation exists for this property.

#### metric of &lt;route&gt; : integer

No documentation exists for this property.

#### mask of &lt;route&gt; : ipv4or6 address

No documentation exists for this property.

#### irtt of &lt;route&gt; : integer

No documentation exists for this property.

#### interface of &lt;route&gt; : string

No documentation exists for this property.

#### host flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### gateway of &lt;route&gt; : ipv4or6 address

No documentation exists for this property.

#### gateway flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### destination of &lt;route&gt; : ipv4or6 address

No documentation exists for this property.

#### xresolve flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### wascloned flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### static flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### sent packet count of &lt;route&gt; : integer

No documentation exists for this property.

#### seconds to expiration of &lt;route&gt; : integer

No documentation exists for this property.

#### router flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### reference of &lt;route&gt; : integer

No documentation exists for this property.

#### proxy flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### proto3 flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### proto2 flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### proto1 flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### prcloning flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### pinned flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### netstat flag of &lt;route&gt; : string

No documentation exists for this property.

#### multicast flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### modified flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### local flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### llinfo flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### ip family of &lt;route&gt; : string

No documentation exists for this property.

#### ifscope flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### ifref flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### gateway type of &lt;route&gt; : string

No documentation exists for this property.

#### gateway string of &lt;route&gt; : string

No documentation exists for this property.

#### flags string of &lt;route&gt; : string

No documentation exists for this property.

#### expiration time of &lt;route&gt; : time

No documentation exists for this property.

#### dynamic flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### done flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### destination type of &lt;route&gt; : string

No documentation exists for this property.

#### destination string of &lt;route&gt; : string

No documentation exists for this property.

#### delclone flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### default of &lt;route&gt; : boolean

No documentation exists for this property.

#### condemned flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### cloning flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### cloned of &lt;route&gt; : boolean

No documentation exists for this property.

#### broadcast flag of &lt;route&gt; : boolean

No documentation exists for this property.

#### blackhole flag of &lt;route&gt; : boolean

No documentation exists for this property.

## connection status

The &lt;connection status&gt; objects return information about the status of your connections.

## connection

The &lt;connection&gt; objects are used to query your connections. These are all properties of the Internet Connection Firewall, as returned in the NETCON_PROPERTIES structure.

#### status of &lt;connection&gt; : connection status

Returns the status of the specified connection.

#### name of &lt;connection&gt; : string

Returns the name of the specified connection.

#### media type of &lt;connection&gt; : media type

Returns the media type of for the specified connection.

#### guid of &lt;connection&gt; : string

Returns the globally-unique identifier (GUID) for the specified connection.

#### firewall of &lt;connection&gt; : internet connection firewall

Returns the internet connection firewall object corresponding to the specified connection.

#### device name of &lt;connection&gt; : string

Returns the name of the device associated with the specified connection.

## media type

The &lt;media type&gt; objects allow you to inspect the media type of your Internet Connection Firewall type connection, as returned in the NETCON_PROPERTIES structure.

## network link interface

The network link interface objects correspond to interfaces of type AF_LINK.

#### mac address of &lt;network link interface&gt; : string

Returns the MAC address of the specified network link interface.Example: mac addresses of link interfaces of network - Returns a list of the MAC addresses of the network link interfaces, for example, 00-14-c8-3a-82-11, 00-16-bc-72-2c-57, 00-14-e4-26-fe-4c-14-37, etcetera.Example: mac address of link interface (whose name of it is &quot;fw0&quot;) of network - Returns the MAC address of the specified network link interface.

