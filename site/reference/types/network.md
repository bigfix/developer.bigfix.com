# type: network

The &lt;network&gt; objects are the keywords used to query the local network configuration.

# adapter &lt;integer&gt; of &lt;network&gt;

Returns the nth adapter of the specified network.

# adapter &lt;string&gt; of &lt;network&gt;

Returns the named adapter of the specified network.

# adapter of &lt;network&gt;

Returns the one or more network adapter objects of the network.

# any adapter &lt;integer&gt; of &lt;network&gt;

No documentation exists.

# any adapter of &lt;network&gt;

This inspector returns the same as &#39;adapter of &lt;network&gt;&#39;, but it includes loopback and tunnels.

# connection of &lt;network&gt;

Returns a connection to the specified network. This inspector requires Windows XP or better.

# dns server of &lt;network&gt;

Returns a list of DNS servers used by the local computer.

# find adapter &lt;string&gt; of &lt;network&gt;

This inspector lets you find a network adapter from the &quot;Friendly Name&quot;.

# interface &lt;integer&gt; of &lt;network&gt;

Returns the Nth interface of the network.

# interface of &lt;network&gt;

Returns all the interfaces of the network.

# ip interface &lt;integer&gt; of &lt;network&gt;

Returns the Nth ip interface of the network.

# ip interface of &lt;network&gt;

Returns all the ip interfaces of the network.

# ipv4 interface &lt;integer&gt; of &lt;network&gt;

No documentation exists.

# ipv4 interface of &lt;network&gt;

Returns an IPv4 network adapter interface from the specified network.

# ipv4or6 interface &lt;integer&gt; of &lt;network&gt;

No documentation exists.

# ipv4or6 interface of &lt;network&gt;

Returns all the ipv4or6 network adapter interfaces from the specified network.

# ipv6 interface &lt;integer&gt; of &lt;network&gt;

No documentation exists.

# ipv6 interface of &lt;network&gt;

Returns all the ipv6 interfaces of the specified network.

# link interface &lt;integer&gt; of &lt;network&gt;

Returns the Nth network link interface of the given network.

# link interface of &lt;network&gt;

Returns the network link interface of the specified network.

# socket of &lt;network&gt;

Returns all existing sockets.

# winsock2 supported of &lt;network&gt;

Indicates that winsock2 is supported by the network. If this returns `False`, many of the other properties of the interface are not available for inspection.

{{#example}}
Q: winsock2 supported of network
A: True
{{/example}}
