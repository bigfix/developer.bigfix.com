# network

The &lt;network&gt; objects are the keywords used to query the local network configuration.

# adapter [integer] of [network]

Returns the nth adapter of the specified network.

# adapter [string] of [network]

Returns the named adapter of the specified network.

# adapter of [network]

Returns the one or more network adapter objects of the network.

# any adapter [integer] of [network]

No documentation exists.

# any adapter of [network]

This inspector returns the same as &#39;adapter of &lt;network&gt;&#39;, but it includes loopback and tunnels.

# connection of [network]

Returns a connection to the specified network. This inspector requires Windows XP or better.

# dns server of [network]

Returns a list of DNS servers used by the local computer.

# find adapter [string] of [network]

This inspector lets you find a network adapter from the &quot;Friendly Name&quot;.

# interface [integer] of [network]

Returns the Nth interface of the network.

# interface of [network]

Returns all the interfaces of the network.

# ip interface [integer] of [network]

Returns the Nth ip interface of the network.

# ip interface of [network]

Returns all the ip interfaces of the network.

# ipv4 interface [integer] of [network]

No documentation exists.

# ipv4 interface of [network]

Returns an IPv4 network adapter interface from the specified network.

# ipv4or6 interface [integer] of [network]

No documentation exists.

# ipv4or6 interface of [network]

Returns all the ipv4or6 network adapter interfaces from the specified network.

# ipv6 interface [integer] of [network]

No documentation exists.

# ipv6 interface of [network]

Returns all the ipv6 interfaces of the specified network.

# link interface [integer] of [network]

Returns the Nth network link interface of the given network.

# link interface of [network]

Returns the network link interface of the specified network.

# socket of [network]

Returns a &lt;socket&gt; type that is examinable for socket information.

# winsock2 supported of [network]

Indicates that winsock2 is supported by the network. If this returns `False`, many of the other properties of the interface are not available for inspection.
