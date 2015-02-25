# network adapter

One or more network adapters may be inspected using this property of the network object. Each network adapter has a number of interesting properties such as the MAC address.

# address list of [network adapter]

Returns the address list of the network adapter.

# address of [network adapter]

Returns the ip address of the network adapter (returns the first address if it is a list).

# broadcast address of [network adapter]

Returns the broadcast address of the specified network adapter as an &lt;ipv4 address&gt;.

# broadcast support of [network adapter]

Returns `True` if the specified network adapter supports broadcast.

# cidr address of [network adapter]

Returns the CIDR address of the specified network adapter as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

# cidr string of [network adapter]

Returns the Classless Inter-Domain Routing value for the specified network adapter as a string value.

# description of [network adapter]

Returns the description of the network adapter.

# dhcp enabled of [network adapter]

Returns `True` if dhcp is enabled on the network adapter.

# dhcp server of [network adapter]

Returns the ip address of the dhcp server of the network adapter (returns the first address if it is a list).

# dns server of [network adapter]

Returns a list of DNS servers used by the specified adapter.

# dns suffix of [network adapter]

Returns the Domain Name System (DNS) suffix associated with the specified adapter.

# friendly name of [network adapter]

Returns a user-friendly name for the adapter, for example &quot;Local Area Connection 1&quot;.

# gateway list of [network adapter]

Returns the gateway network address list of the network adapter.

# gateway of [network adapter]

Returns the ip address of the gateway of the network adapter.

# interface of [network adapter]

Returns a network interface object from the specified network adapter.

# internet connection firewall of [network adapter]

Creates a Windows XP firewall object.

# ip interface of [network adapter]

Returns an object or an object list (using the plural keyword) with all the ip interfaces of the specified network adapter.

# ipv4 interface [integer] of [network adapter]

No documentation exists.

# ipv4 interface of [network adapter]

Returns the IPv4 interface of the specified network adapter as a &lt;network adapter ip interface&gt; type.

# ipv4or6 dns server of [network adapter]

Returns the ipv4or6 address of the DNS server of the specified network adapter.

# ipv4or6 interface [integer] of [network adapter]

No documentation exists.

# ipv4or6 interface of [network adapter]

Returns the ipv4or network adapter interface from the specified network adapter.

# ipv6 address of [network adapter]

Returns the local IP address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

# ipv6 dns server of [network adapter]

Returns the DNS server address (as IPv6) of the adapter. Only for XP/Server 2003 and later.

# ipv6 interface [integer] of [network adapter]

No documentation exists.

# ipv6 interface of [network adapter]

Returns the IPv6 interfaces of the specified network adapter as a network adapter interface type.

# lease expires of [network adapter]

Returns the time that the dhcp lease will expire of the network adapter.

# lease obtained of [network adapter]

Returns the time that the dhcp lease was obtained of the network adapter.

# link interface of [network adapter]

Returns the network link interface(s) of the specified network adapter.

# link speed of [network adapter]

This is a property of a network adapter. It returns the maximum speed of the NIC card in bits per second.

# loopback of [network adapter]

Returns `True` if the specified network adapter is a loopback interface.

# mac address of [network adapter]

Returns the mac address of the network adapter.

# maximum transmission unit of [network adapter]

The maximum transmission unit (MTU) size, in bytes, of the specified adapter.

# multicast support of [network adapter]

Returns `True` if multicast messages are supported by the specified network adapter.

# name of [network adapter]

Returns the name of the network adapter.

# point to point of [network adapter]

Returns `True` if the specified network adapter is a point-to-point interface. Usually TRUE for dialup connections.

# primary wins server of [network adapter]

Returns the IPv4 address of the primary wins server of the specified network adapter.

# secondary wins server of [network adapter]

Returns the IPv4 address of the secondary wins server of the specified network adapter.As of version 8.0 of BES, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

# status of [network adapter]

The operational status for the interface as defined in RFC 2863. It can be one of the values from the IF_OPER_STATUS enumeration type defined in the Iftypes.h header file. On Windows Vista and later, the header files were reorganized and this enumeration is defined in the Ifdef.h header file.

# subnet address of [network adapter]

Returns the subnet address (IPv4) of the specified network adapter.

# subnet mask of [network adapter]

Returns the subnet mask (IPv4) of the specified network adapter.

# tunnel of [network adapter]

Returns `True` if the specidfied adapter is a tunnel.

# type of [network adapter]

Returns the interface type of the specified adapter as defined by the Internet Assigned Names Authority (IANA). Possible values for the interface type are listed in the Ipifcons.h header file.

# up of [network adapter]

Returns `True` if the specified network adaoter is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

# wakeonlan enabled of [network adapter]

Returns `True` if the specified network adapter is configured to react to Wake-On-Lan requests. Wake-On-Lan is a mechanism used to trigger a boot of a machine in standby mode by sending a special packet.Note: Wake-On-Lan is only supported for Windows 2000 and XP machines.

# wifi of [network adapter]

Filters the network adapter object by WiFi type and creates the &lt;wifi&gt; object(s)

# wins enabled of [network adapter]

Returns `True` if WINS is enabled on the network adapter.
