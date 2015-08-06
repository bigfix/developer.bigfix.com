# type: ipv4 address

This is an [IPv4](http://en.wikipedia.org/wiki/IPv4) adddress. IPv4 addresses are composed of four single-byte integers separated by periods, such as `192.168.1.7`.

# extrema of &lt;ipv4 address&gt; : ( ipv4 address, ipv4 address )

Returns the minimum and maximum from a list of addresses.

{% qna %}
Q: extrema of ipv4 addresses ("24.22.64.0"; "192.168.56.3"; "9.22.100.0")
A: 9.22.100.0, 192.168.56.3
{% endqna %}

# maximum of &lt;ipv4 address&gt; : ipv4 address

Returns the maximum value from a list of addresses.

{% qna %}
Q: maximum of ipv4 addresses ("24.22.64.0"; "192.168.56.3"; "9.22.100.0")
A: 192.168.56.3
{% endqna %}

# minimum of &lt;ipv4 address&gt; : ipv4 address

Returns the minimum value from a list of addresses.

{% qna %}
Q: minimum of ipv4 addresses ("24.22.64.0"; "192.168.56.3"; "9.22.100.0")
A: 9.22.100.0
{% endqna %}

# unique value of &lt;ipv4 address&gt; : ipv4 address with multiplicity

Returns the unique values from a list of addresses.

{% qna %}
Q: unique values of ipv4 addresses ("192.168.56.3"; "9.22.100.0"; "9.22.100.0")
A: 9.22.100.0
A: 192.168.56.3
{% endqna %}

# &lt;ipv4 address&gt; as ipv4or6 address : ipv4or6 address

Converts an IPv4 address into the more inclusive ipv4or6 type.

{% qna %}
Q: ipv4 address "192.168.56.3" as ipv4or6 address
A: 0:0:0:0:0:ffff:c0a8:3803
{% endqna %}

# &lt;ipv4 address&gt; as ipv6 address : ipv6 address

Returns the specified IPv4 address embedded in a IPv6 address as defined by [RFC 4291 section 2.5.5](https://tools.ietf.org/html/rfc4291#section-2.5.5). In this scheme the lowest 32 bits of the IPv6 address contain the IPv4 address, the next higher 16 bits are all `1` and the remaining bits are all `0`.

{% qna %}
Q: ipv4 address "192.168.56.3" as ipv6 address
A: 0:0:0:0:0:ffff:c0a8:3803
{% endqna %}

# &lt;ipv4 address&gt; as string : string

Converts the ipv4 address to a string.

{% qna %}
Q: ipv4 address "192.168.56.3" as string
A: 192.168.56.3
{% endqna %}

# &lt;ipv4 address&gt; &lt; &lt;ipv4 address&gt; : boolean

Compare the two addresses.

{% qna %}
Q: ipv4 address "192.168.56.3" &lt; ipv4 address "200.10.0.1"
A: True
{% endqna %}

# &lt;ipv4 address&gt; &lt;= &lt;ipv4 address&gt; : boolean

Compare the two addresses.

{% qna %}
Q: ipv4 address "192.168.56.3" &lt;= ipv4 address "192.168.56.3"
A: True
{% endqna %}

# &lt;ipv4 address&gt; = &lt;ipv4 address&gt; : boolean

Compare the two addresses.

{% qna %}
Q: ipv4 address "192.168.56.3" = ipv4 address "192.168.56.3"
A: True
{% endqna %}
