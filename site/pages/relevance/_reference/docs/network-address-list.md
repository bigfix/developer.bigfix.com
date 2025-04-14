# type: network address list

A network adapter may be configured to respond to a list of network addresses. This object type provides access to such a list.

# address of &lt;network address list&gt; : ipv4 address

Returns the IP address of the address list.

{% qna %}
Q: address of adapter 1 of network
A: 10.0.2.15
{% endqna %}

# cidr address of &lt;network address list&gt; : string

Returns the [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) address of the address list.

{% qna %}
Q: (address of it, cidr address of it) of adapter 1 of network
A: 10.0.2.15, 10.0.2.15/24
{% endqna %}

# cidr string of &lt;network address list&gt; : string

Returns the [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) value for the specified network address list as a string value.

{% qna %}
Q: (address of it, cidr string of it) of adapter 1 of network
A: 10.0.2.15, 10.0.2.0/24
{% endqna %}

# cidr subnet of &lt;network address list&gt; : cidr subnet

Returns the CIDR subnet of the specified network address list.

{% qna %}
Q: cidr subnets of address lists of adapters of network
A: 192.14.25.0/24
{% endqna %}

# subnet address of &lt;network address list&gt; : ipv4 address

Returns the subnet address (IPv4) of the specified network address list.

{% qna %}
Q: (address of it, subnet address of it) of adapter 1 of network
A: 10.0.2.15, 10.0.2.0
{% endqna %}

# subnet mask of &lt;network address list&gt; : ipv4 address

Returns the subnet mask (IPv4) of the specified network address list.

{% qna %}
Q: (address of it, subnet mask of it) of adapter 1 of network
A: 10.0.2.15, 255.255.255.0
{% endqna %}
