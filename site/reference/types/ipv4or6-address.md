# type: ipv4or6 address

The &amp;lt;ipv4or6 address&amp;gt; inspectors allow you to represent IPv4 and IPv6 addresses as a common type. From these inclusive inspectors, you can derive the corresponding v4 and v6 IP addresses.

# extrema of &lt;ipv4or6 address&gt; : ( ipv4or6 address, ipv4or6 address )

Returns the minimum and maximum of the specified list of ipv4or6 addresses.

# hexadecet &lt;integer&gt; of &lt;ipv4or6 address&gt; : integer

Returns one of the eight 16-bit parts (hexadecets) of an ipv4or6 address specified by &amp;lt;integer&amp;gt;. Here zero refers to the highest hexadecet (network or big-endian order). Thus hexadecet 0 refers to the most-significant 16-bits of the 128 bit ipv4or6 address.

# ip version of &lt;ipv4or6 address&gt; : ip version

Returns the IP version of the specified ipv4or6 address.

# ipv4 part of &lt;ipv4or6 address&gt; : ipv4 address

Returns the lowest 32-bits of the IPv4or6 address as an IPv4 address.

# maximum of &lt;ipv4or6 address&gt; : ipv4or6 address

Returns the maximum of the specified list of &amp;lt;ipv4or6 address&amp;gt; types.

# minimum of &lt;ipv4or6 address&gt; : ipv4or6 address

Returns the minimum of the specified list of &amp;lt;ipv4or6 address&amp;gt; types.

# unique value of &lt;ipv4or6 address&gt; : ipv4or6 address with multiplicity

Returns the unique values of a given list of addresses (ipv4or6), removing duplicates and sorting by value.

# &lt;ipv4or6 address&gt; as compressed string : string

Compresses the IP address, using double colons to stand in for repeated zeroes in the address.Example: (&amp;quot;0:0:0:0:0:ffff:c0a8:16a&amp;quot; as ipv4or6 address) as compressed string - Returns &amp;quot;::ffff:c0a8:16a&amp;quot;, a compressed string with a double colon standing in for leading zeroes.

# &lt;ipv4or6 address&gt; as compressed string with ipv4 : string

Similar to casting to a string, but with both colon-compression and standard IPv4 representation for the low 32-bits.Example: (&amp;quot;0:0:0:0:0:ffff:c0a8:16a&amp;quot; as ipv4or6 address) as compressed string with ipv4 - Returns &amp;quot;::ffff:192.168.1.106&amp;quot;, a compressed string (leading zeroes collapsed to ::) with a four-byte IPv4 address as the lower 32 bits.

# &lt;ipv4or6 address&gt; as compressed string with ipv4 with zone index : string

Creates a compressed string (replacing multiple zeroes with double colons) with the lower 32 bits in IPv4 format. It includes the zone index (on Windows, typically a number) following a percent sign (%).

# &lt;ipv4or6 address&gt; as compressed string with zone index : string

Creates a compressed string (replacing multiple zeroes with double colons) and includes the zone index (on Windows, typically a number) following a percent sign (%).

# &lt;ipv4or6 address&gt; as string : string

Casts an IP address (v4 or 6) as a string type.

# &lt;ipv4or6 address&gt; as string with ipv4 : string

Converts an address to a string with the lower 32 bits in IPv4 format.

# &lt;ipv4or6 address&gt; as string with ipv4 with zone index : string

Converts an address to a string with the lower 32 bits in IPv4 format as well as any zone index.

# &lt;ipv4or6 address&gt; as string with leading zeros : string

Converts an IP address into a string with all fields packed with leading zeroes.

# &lt;ipv4or6 address&gt; as string with leading zeros with zone index : string

Converts an IP address into a string with all fields packed with leading zeroes, as well as any zone index.

# &lt;ipv4or6 address&gt; as string with zone index : string

Converts an IP address into a string with a zone index, if any.

# &lt;ipv4or6 address&gt; &lt; &lt;ipv4or6 address&gt; : boolean

No documentation exists.

# &lt;ipv4or6 address&gt; &lt;= &lt;ipv4or6 address&gt; : boolean

No documentation exists.

# &lt;ipv4or6 address&gt; = &lt;ipv4or6 address&gt; : boolean

No documentation exists.
