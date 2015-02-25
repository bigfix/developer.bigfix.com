# network adapter interface

A network adapter interfaces a computer to a network. These inspectors expose the adapter so that you can determine its properties, such as its address, subnet mask, mac address and whether or not it supports broadcast, multicast or point-to-point.

# adapter of [network adapter interface]

Returns the adapters associated with the specified network adapter interface.

# address of [network adapter interface]

Returns the IP address of the specified network adapter interface as an ipv4or6 address type.

# broadcast address of [network adapter interface]

Creates an object with the broadcast address (ipv4or6) of the specified network adapter interface.

# broadcast support of [network adapter interface]

Returns `True` if the given network adapter interface has broadcast support.

# cidr address of [network adapter interface]

Returns the CIDR address of the specified interface as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

# cidr string of [network adapter interface]

A cidr string (see CIDR_notation at Wikipedia) is a string representation of a cidr address.  It looks like an ip address followed by a slash and then the number of leading non-zero bits of the routing prefix. For example, 192.168.0.0/16 for IPv4, and 2001:db8::/32 for IPv6.

# loopback of [network adapter interface]

Returns `True` if the specified interface supports loopbacks.

# mac address of [network adapter interface]

Returns the MAC address of the specified network adapter interface as a string type.

# multicast support of [network adapter interface]

Returns `True` if the specified interface supports multicasting.

# point to point of [network adapter interface]

A network adapter interface can be a point-to-point interface, such as you might use for a VPN connection or a SLIP connection. This inspector returns `True` if the specified network adapter interface is configured to run point-to-point.

# subnet address of [network adapter interface]

Returns the subnet address of the specified interface as an ipv4or6 address type.

# subnet mask of [network adapter interface]

Returns the subnet mask of the specified interface as an ipv4or6 address type.

# up of [network adapter interface]

Returns `True` if the specified interface is currently up and working.
