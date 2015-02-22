---
title: ip-address
---

{% type ipv4 address %}

This is an Internet Protocol address, version 4. IP addresses are composed of four single-byte integers separated by periods, such as &quot;192.5.0.7&quot;. Note: Prior to version 8.0 of BigFix, this was not a derived type.

#### Properties of ipv4 address

{% property extrema of <ipv4 address> %}

Returns the minimum and maximum extreme values of the given list of &lt;ipv4 address&gt; types.

{% property maximum of <ipv4 address> %}

Returns the maximum value from a list of &lt;ipv4 address&gt; types.

{% property minimum of <ipv4 address> %}

Returns the minimum value from a list of &lt;ipv4 address&gt; types.

{% property unique value of <ipv4 address> %}

Returns the unique values of a given list of &lt;ipv4 address&gt; types, removing duplicates and sorting by value.

#### Casts of ipv4 address

{% cast <ipv4 address> as ipv4or6 address %}

Converts an IPv4 address into the more inclusive ipv4or6 type.

{% cast <ipv4 address> as ipv6 address %}

Returns the specified IPv4 address embedded in a IPv6 address space as defined by RFC 4291 section 2.5.5.2: IPv4-Mapped IPv6 Address. In this scheme the lowest 32 bits of the IPv6 address contain the IPv4 address, the next higher 16 bits are all 1 (ffff) and the remaining bits are all 0.

{% cast <ipv4 address> as string %}

Converts the ipv4 address to a string.

{% type ipv4 address with multiplicity %}

The &lt;ipv4 address with multiplicity&gt; inspectors deal with ipv4 address arrays, allowing you to extract unique ipv4 addresses and count them.

#### Properties of ipv4 address with multiplicity

{% property multiplicity of <ipv4 address with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;ipv4 address&gt; types.

{% type ipv4 route %}

No documentation exists for this type.

#### Properties of ipv4 route

{% property blackhole flag of <ipv4 route> %}

Returns a boolean specifying if the route is a blackhole route.

{% property broadcast flag of <ipv4 route> %}

Returns a boolean specifying if the route is a broadcast route.

{% property cache flag of <ipv4 route> %}

Returns a boolean specifying if the route is in the cache.

{% property default flag of <ipv4 route> %}

Returns a boolean specifying whether the route is a default route.

{% property destination of <ipv4 route> %}

Returns an ipv4 address specifying the destination of the route.

{% property dynamic flag of <ipv4 route> %}

Returns a boolean specifying if the route was dynamically installed by a daemon or redirect.

{% property gateway flag of <ipv4 route> %}

Returns a boolean specifying if the route is going through a gateway.

{% property gateway of <ipv4 route> %}

Returns the ipv4 address of the route&#39;s gateway if the gateway flag is set, otherwise &quot;0.0.0.0&quot;.

{% property host flag of <ipv4 route> %}

Returns a boolean specifying if the target of the route is a host.

{% property interface of <ipv4 route> %}

Returns a string containing the name of the interface the route goes through.

{% property irtt of <ipv4 route> %}

Returns an integer specifying the initial roud trip time for TCP connections over the route in milliseconds (1-12000). Typically only used on AX.25 networks, with a default value of 300 if not specified.

{% property local flag of <ipv4 route> %}

Returns a boolean specifying if the route is to the local network.

{% property loopback flag of <ipv4 route> %}

Returns a boolean specifying if the route is the loopback route.

{% property mask of <ipv4 route> %}

Returns an ipv4 address containing the netmask of the route in the format &quot;255.255.255.0&quot;.

{% property metric of <ipv4 route> %}

Returns an integer specifying the metric value of the route.

{% property modified flag of <ipv4 route> %}

Returns a boolean specifying if the route was modified by a daemon or redirect.

{% property mtu of <ipv4 route> %}

Returns an integer specifying the maximum transmission unit setting of the route. Typically not used.

{% property multiroute flag of <ipv4 route> %}

Returns a boolean specifying if the route is redundant.

{% property prefix flag of <ipv4 route> %}

Returns a boolean specifying if the route is a prefix route.

{% property private flag of <ipv4 route> %}

Returns a boolean specifying if the route is private and not advertised.

{% property reference count of <ipv4 route> %}

Returns an integer specifying the number of referenced to the route.

{% property reject flag of <ipv4 route> %}

Returns a boolean specifying if the route is a blocking route.

{% property setsrc flag of <ipv4 route> %}

Returns a boolean specifying whether the route assigns the default source address.

{% property static flag of <ipv4 route> %}

Returns a boolean specifying if the route is a persistent static route.

{% property up flag of <ipv4 route> %}

Returns a boolean specifying if the route is up.

{% property use count of <ipv4 route> %}

Returns an integer specifying the number of lookups for the route.

{% property window of <ipv4 route> %}

Returns the TCP window setting for connections over the route. Typically only used on AX.25 networks and with drivers unable to handle back to back frames.

{% type ipv4 routing table %}

No documentation exists for this type.

#### Properties of ipv4 routing table

{% property all route of <ipv4 routing table> %}

Returns all the routes in the routing table on Solaris.

{% property route of <ipv4 routing table> %}

Returns all the routes in the routing table in Linux. On Solaris, this returns all routes which are not broadcast, local, or cache routes.

{% type ipv4or6 address %}

The &lt;ipv4or6 address&gt; inspectors allow you to represent IPv4 and IPv6 addresses as a common type. From these inclusive inspectors, you can derive the corresponding v4 and v6 IP addresses.

#### Properties of ipv4or6 address

{% property extrema of <ipv4or6 address> %}

Returns the minimum and maximum of the specified list of ipv4or6 addresses.

{% property hexadecet <integer> of <ipv4or6 address> %}

Returns one of the eight 16-bit parts (hexadecets) of an ipv4or6 address specified by &lt;integer&gt;. Here zero refers to the highest hexadecet (network or big-endian order). Thus hexadecet 0 refers to the most-significant 16-bits of the 128 bit ipv4or6 address.

{% property ip version of <ipv4or6 address> %}

Returns the IP version of the specified ipv4or6 address.

{% property ipv4 part of <ipv4or6 address> %}

Returns the lowest 32-bits of the IPv4or6 address as an IPv4 address.

{% property maximum of <ipv4or6 address> %}

Returns the maximum of the specified list of &lt;ipv4or6 address&gt; types.

{% property minimum of <ipv4or6 address> %}

Returns the minimum of the specified list of &lt;ipv4or6 address&gt; types.

{% property unique value of <ipv4or6 address> %}

Returns the unique values of a given list of addresses (ipv4or6), removing duplicates and sorting by value.

#### Casts of ipv4or6 address

{% cast <ipv4or6 address> as compressed string %}

Compresses the IP address, using double colons to stand in for repeated zeroes in the address.Example: (&quot;0:0:0:0:0:ffff:c0a8:16a&quot; as ipv4or6 address) as compressed string - Returns &quot;::ffff:c0a8:16a&quot;, a compressed string with a double colon standing in for leading zeroes.

{% cast <ipv4or6 address> as compressed string with ipv4 %}

Similar to casting to a string, but with both colon-compression and standard IPv4 representation for the low 32-bits.Example: (&quot;0:0:0:0:0:ffff:c0a8:16a&quot; as ipv4or6 address) as compressed string with ipv4 - Returns &quot;::ffff:192.168.1.106&quot;, a compressed string (leading zeroes collapsed to ::) with a four-byte IPv4 address as the lower 32 bits.

{% cast <ipv4or6 address> as compressed string with ipv4 with zone index %}

Creates a compressed string (replacing multiple zeroes with double colons) with the lower 32 bits in IPv4 format. It includes the zone index (on Windows, typically a number) following a percent sign (%).

{% cast <ipv4or6 address> as compressed string with zone index %}

Creates a compressed string (replacing multiple zeroes with double colons) and includes the zone index (on Windows, typically a number) following a percent sign (%).

{% cast <ipv4or6 address> as string %}

Casts an IP address (v4 or 6) as a string type.

{% cast <ipv4or6 address> as string with ipv4 %}

Converts an address to a string with the lower 32 bits in IPv4 format.

{% cast <ipv4or6 address> as string with ipv4 with zone index %}

Converts an address to a string with the lower 32 bits in IPv4 format as well as any zone index.

{% cast <ipv4or6 address> as string with leading zeros %}

Converts an IP address into a string with all fields packed with leading zeroes.

{% cast <ipv4or6 address> as string with leading zeros with zone index %}

Converts an IP address into a string with all fields packed with leading zeroes, as well as any zone index.

{% cast <ipv4or6 address> as string with zone index %}

Converts an IP address into a string with a zone index, if any.

{% type ipv4or6 address with multiplicity %}

The &lt;ipv4or6 address with multiplicity&gt; inspectors deal with arrays of ipv4or6 addresses, allowing you to extract unique addresses and count them. 

#### Properties of ipv4or6 address with multiplicity

{% property multiplicity of <ipv4or6 address with multiplicity> %}

Returns the multiplicity (how many entries of each unique address) of a list of ipv4or6 addresses.

{% type ipv6 address %}

The &lt;ipv6 address&gt; inspectors deal with the Internet Protocol addressing scheme, version 6. Note: Prior to version 8.0 of BigFix, this was not a derived type.

#### Properties of ipv6 address

{% property extrema of <ipv6 address> %}

Returns the minimum and maximum extreme values of the given list of &lt;ipv6 address&gt; types.

{% property hexadecet <integer> of <ipv6 address> %}

Returns one of the eight 16-bit parts (hexadecets) of an IPv6 address specified by &lt;integer&gt;. Here zero refers to the highest hexadecet (network or big-endian order). Thus hexadecet 0 refers to the most-significant 16-bits of the 128 bit IPv6 address.

{% property ipv4 part of <ipv6 address> %}

Returns the lowest 32-bits of the IPv6 address as an IPv4 address.As of version 8.0, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

{% property maximum of <ipv6 address> %}

Returns the maximum value from a list of &lt;ipv6 address&gt; types.

{% property minimum of <ipv6 address> %}

Returns the minimum value from a list of &lt;ipv6 address&gt; types.

{% property unique value of <ipv6 address> %}

Returns the unique values of a given list of &lt;ipv6 address&gt; types, removing duplicates and sorting by value.

#### Casts of ipv6 address

{% cast <ipv6 address> as compressed string %}

Similar to casting as a string, but with double colons used to represent multiple zero 16-bit parts (RFC 4291 section 2.2, item 2).

{% cast <ipv6 address> as compressed string with ipv4 %}

Similar to casting as a string, but with both colon-compression and standard IPv4 representation for the low 32-bits.

{% cast <ipv6 address> as compressed string with ipv4 with zone index %}

Similar to casting as a string, but with both colon-compression and standard IPv4 representation for the low 32-bits as well as any zone index.

{% cast <ipv6 address> as compressed string with zone index %}

Similar to casting as a string, but with both colon-compression and a zone index.

{% cast <ipv6 address> as ipv4or6 address %}

Casts an IPv6 address as a more flexible ipv4or6 address.

{% cast <ipv6 address> as string %}

Returns a string representation of the IPv6 address in the form x:x:x:x:x:x:x:x, where each x represents one to four hexadecimal digits of the eight 16-bit address fields. Leading zeros in an individual field are omitted. See RFC 4291 section 2.2, item 1.

{% cast <ipv6 address> as string with ipv4 %}

Similar to casting as a string, but with the lowest 32 bits of the address in the standard IPv4 representation (RFC 4291 section 2.2, item 3).

{% cast <ipv6 address> as string with ipv4 with zone index %}

Similar to casting as a string, but with standard IPv4 representation for the low 32-bits as well as any zone index.

{% cast <ipv6 address> as string with leading zeros %}

Similar to casting as a string, but leading zeros in individual fields are preserved.

{% cast <ipv6 address> as string with leading zeros with zone index %}

Converts an IPv6 address into a string with all fields packed with leading zeroes as well as a terminating zone index, if any.

{% cast <ipv6 address> as string with zone index %}

Converts an IPv6 address into a string with a terminating slash-delimited zone index, if any.

{% type ipv6 address with multiplicity %}

The &lt;ipv6 address with multiplicity&gt; inspectors deal with ipv6 address arrays, allowing you to extract unique ipv6 addresses and count them.

#### Properties of ipv6 address with multiplicity

{% property multiplicity of <ipv6 address with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;ipv6 address&gt; types.

