# type: network address list

A network adapter may be configured to respond to a list of network addresses. This object type provides access to such a list.

# address of &lt;network address list&gt; : ipv4 address

Returns the IP address of the address list.

{{#example}}
Q: address of adapter 1 of network
A: 10.0.2.15
{{/example}}

# cidr address of &lt;network address list&gt; : string

Returns the [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) address of the address list.

{{#example}}
Q: (address of it, cidr address of it) of adapter 1 of network
A: 10.0.2.15, 10.0.2.15/24
{{/example}}

# cidr string of &lt;network address list&gt; : string

Returns the [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) value for the specified network address list as a string value.

{{#example}}
Q: (address of it, cidr string of it) of adapter 1 of network
A: 10.0.2.15, 10.0.2.0/24
{{/example}}

# subnet address of &lt;network address list&gt; : ipv4 address

Returns the subnet address (IPv4) of the specified network address list.

{{#example}}
Q: (address of it, subnet address of it) of adapter 1 of network
A: 10.0.2.15, 10.0.2.0
{{/example}}

# subnet mask of &lt;network address list&gt; : ipv4 address

Returns the subnet mask (IPv4) of the specified network address list.

{{#example}}
Q: (address of it, subnet mask of it) of adapter 1 of network
A: 10.0.2.15, 255.255.255.0
{{/example}}
