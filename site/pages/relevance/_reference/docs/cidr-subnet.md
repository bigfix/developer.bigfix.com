# type: cidr subnet

The `cidr subnet` inspector allows you to represent a Classless Inter-Domain Routing (CIDR) subnet such as an IPv4 CIDR subnet "10.225.22.123/32" or an IPv6 CIDR subnet "C665:4BF6:F578:BA18:153D:F3AD:6270:52C6/128". In the edge case of a subnet mask that defines a subnet with a single address, the CIDR subnet will return the same CIDR value. An example of such a corner case would be the CIDR address "10.225.11.107/32".

# subnet mask of &lt;cidr subnet&gt; : ipv4or6 address

Returns the subnet mask of the specified CIDR subnet, stored in an `ipv4or6 address` object.

{% qna %}
Q: subnet mask of cidr subnet "192.168.1.0/24"
A: 255.255.255.0
{% endqna %}

# &lt;cidr subnet&gt; as string : string

Converts the CIDR subnet to a string.

{% qna %}
Q: cidr subnet "192.169.1.0/24" as string
A: 192.169.1.0/24
{% endqna %}
