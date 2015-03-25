# type: network

The &lt;network&gt; objects are the keywords used to query the local network configuration.

# adapter &lt;integer&gt; of &lt;network&gt; : network adapter

Returns the nth adapter of the specified network.

# adapter &lt;string&gt; of &lt;network&gt; : network adapter

Returns the named adapter of the specified network.

# adapter of &lt;network&gt; : network adapter

Returns the one or more network adapter objects of the network.

# any adapter &lt;integer&gt; of &lt;network&gt; : network adapter

No documentation exists.

# any adapter of &lt;network&gt; : network adapter

This inspector returns the same as &#39;adapter of &lt;network&gt;&#39;, but it includes loopback and tunnels.

# connection of &lt;network&gt; : connection

Returns a connection to the specified network. This inspector requires Windows XP or better.

# dns server of &lt;network&gt; : network address list

Returns a list of DNS servers used by the local computer.

{{#example}}
Q: addresses of dns servers of network
A: 10.0.2.3
{{/example}}

# find adapter &lt;string&gt; of &lt;network&gt; : network adapter

This inspector lets you find a network adapter from the "Friendly Name".

# interface &lt;integer&gt; of &lt;network&gt; : network interface

Returns the Nth interface of the network.

# interface of &lt;network&gt; : network interface

Returns all the interfaces of the network.

# ip interface &lt;integer&gt; of &lt;network&gt; : network ip interface

Returns the Nth ip interface of the network.

# ip interface of &lt;network&gt; : network ip interface

Returns all the ip interfaces of the network.

# ipv4 interface &lt;integer&gt; of &lt;network&gt; : network adapter interface

No documentation exists.

# ipv4 interface of &lt;network&gt; : network adapter interface

Returns an IPv4 network adapter interface from the specified network.

# ipv4or6 interface &lt;integer&gt; of &lt;network&gt; : network adapter interface

No documentation exists.

# ipv4or6 interface of &lt;network&gt; : network adapter interface

Returns all the ipv4or6 network adapter interfaces from the specified network.

# ipv6 interface &lt;integer&gt; of &lt;network&gt; : network adapter interface

No documentation exists.

# ipv6 interface of &lt;network&gt; : network adapter interface

Returns all the ipv6 interfaces of the specified network.

# link interface &lt;integer&gt; of &lt;network&gt; : network link interface

Returns the Nth network link interface of the given network.

# link interface of &lt;network&gt; : network link interface

Returns the network link interface of the specified network.

# socket of &lt;network&gt; : socket

Returns all existing sockets.

# winsock2 supported of &lt;network&gt; : boolean

Indicates that winsock2 is supported by the network. If this returns `False`, many of the other properties of the interface are not available for inspection.

{{#example}}
Q: winsock2 supported of network
A: True
{{/example}}
