# type: ipv4 address

This is an [IPv4](http://en.wikipedia.org/wiki/IPv4) adddress. IPv4 addresses are composed of four single-byte integers separated by periods, such as `192.168.1.7`.

# extrema of &lt;ipv4 address&gt; : ( ipv4 address, ipv4 address )

Returns the minimum and maximum from a list of addresses.

{{#example}}
Q: extrema of ipv4 addresses (&quot;24.22.64.0&quot;; &quot;192.168.56.3&quot;; &quot;9.22.100.0&quot;)
A: 9.22.100.0, 192.168.56.3
{{/example}}

# maximum of &lt;ipv4 address&gt; : ipv4 address

Returns the maximum value from a list of addresses.

{{#example}}
Q: maximum of ipv4 addresses (&quot;24.22.64.0&quot;; &quot;192.168.56.3&quot;; &quot;9.22.100.0&quot;)
A: 192.168.56.3
{{/example}}

# minimum of &lt;ipv4 address&gt; : ipv4 address

Returns the minimum value from a list of addresses.

{{#example}}
Q: minimum of ipv4 addresses (&quot;24.22.64.0&quot;; &quot;192.168.56.3&quot;; &quot;9.22.100.0&quot;)
A: 9.22.100.0
{{/example}}

# unique value of &lt;ipv4 address&gt; : ipv4 address with multiplicity

Returns the unique values from a list of addresses.

{{#example}}
Q: unique values of ipv4 addresses (&quot;192.168.56.3&quot;; &quot;9.22.100.0&quot;; &quot;9.22.100.0&quot;)
A: 9.22.100.0
A: 192.168.56.3
{{/example}}

# &lt;ipv4 address&gt; as ipv4or6 address : ipv4or6 address

Converts an IPv4 address into the more inclusive ipv4or6 type.

{{#example}}
Q: ipv4 address &quot;192.168.56.3&quot; as ipv4or6 address
A: 0:0:0:0:0:ffff:c0a8:3803
{{/example}}

# &lt;ipv4 address&gt; as ipv6 address : ipv6 address

Returns the specified IPv4 address embedded in a IPv6 address as defined by [RFC 4291 section 2.5.5](https://tools.ietf.org/html/rfc4291#section-2.5.5). In this scheme the lowest 32 bits of the IPv6 address contain the IPv4 address, the next higher 16 bits are all `1` and the remaining bits are all `0`.

{{#example}}
Q: ipv4 address &quot;192.168.56.3&quot; as ipv6 address
A: 0:0:0:0:0:ffff:c0a8:3803
{{/example}}

# &lt;ipv4 address&gt; as string : string

Converts the ipv4 address to a string.

{{#example}}
Q: ipv4 address &quot;192.168.56.3&quot; as string
A: 192.168.56.3
{{/example}}

# &lt;ipv4 address&gt; &lt; &lt;ipv4 address&gt; : boolean

Compare the two addresses.

{{#example}}
Q: ipv4 address &quot;192.168.56.3&quot; &lt; ipv4 address &quot;200.10.0.1&quot;
A: True
{{/example}}

# &lt;ipv4 address&gt; &lt;= &lt;ipv4 address&gt; : boolean

Compare the two addresses.

{{#example}}
Q: ipv4 address &quot;192.168.56.3&quot; &lt;= ipv4 address &quot;192.168.56.3&quot;
A: True
{{/example}}

# &lt;ipv4 address&gt; = &lt;ipv4 address&gt; : boolean

Compare the two addresses.

{{#example}}
Q: ipv4 address &quot;192.168.56.3&quot; = ipv4 address &quot;192.168.56.3&quot;
A: True
{{/example}}
