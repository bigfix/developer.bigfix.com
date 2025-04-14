# type: network adapter interface

A network adapter interfaces a computer to a network. These inspectors expose the adapter so that you can determine its properties, such as its address, subnet mask, mac address and whether or not it supports broadcast, multicast or point-to-point.

# adapter of &lt;network adapter interface&gt; : network adapter

Returns the adapters associated with the specified network adapter interface.

# address of &lt;network adapter interface&gt; : ipv4or6 address

Returns the IP address of the specified network adapter interface as an ipv4or6 address type.

# broadcast address of &lt;network adapter interface&gt; : ipv4or6 address

Creates an object with the broadcast address (ipv4or6) of the specified network adapter interface.

# broadcast support of &lt;network adapter interface&gt; : boolean

Returns `True` if the given network adapter interface has broadcast support.

# cidr address of &lt;network adapter interface&gt; : string

Returns the CIDR address of the specified interface as a string type, for example, 192.168.0.0/16 (IPv4) or 2001:db8::/32 (IPv6).

# cidr string of &lt;network adapter interface&gt; : string

A cidr string (see CIDR_notation at Wikipedia) is a string representation of a cidr address.  It looks like an ip address followed by a slash and then the number of leading non-zero bits of the routing prefix. For example, 192.168.0.0/16 for IPv4, and 2001:db8::/32 for IPv6.

# cidr subnet of &lt;network adapter interface&gt; : cidr subnet

Returns the CIDR of the specified network interface.

{% qna %}
Q: cidr subnets of ipv4 interfaces of adapters of network
A: 192.14.35.0/24
{% endqna %}

{% qna %}
Q: cidr subnets of ipv6 interfaces of adapters of network
A: fe80::/64
{% endqna %}

# loopback of &lt;network adapter interface&gt; : boolean

Returns `True` if the specified interface supports loopbacks.

# mac address of &lt;network adapter interface&gt; : string

Returns the MAC address of the specified network adapter interface as a string type.

# multicast support of &lt;network adapter interface&gt; : boolean

Returns `True` if the specified interface supports multicasting.

# point to point of &lt;network adapter interface&gt; : boolean

A network adapter interface can be a point-to-point interface, such as you might use for a VPN connection or a SLIP connection. This inspector returns `True` if the specified network adapter interface is configured to run point-to-point.

# subnet address of &lt;network adapter interface&gt; : ipv4or6 address

Returns the subnet address of the specified interface as an ipv4or6 address type.

# subnet mask of &lt;network adapter interface&gt; : ipv4or6 address

Returns the subnet mask of the specified interface as an ipv4or6 address type.

# up of &lt;network adapter interface&gt; : boolean

Returns `True` if the specified interface is currently up and working.
