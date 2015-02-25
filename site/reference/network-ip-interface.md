# network ip interface

In general, the network ip interface object holds locally determined properties of logical network devices configured on the computer. On the Mac, these correspond to interfaces of type AF_INET. The properties that are available depend on the socket support installed on the computer. For Windows computers with winsock 2 support installed, for instance, the information is obtained by an ioctl call and includes Interface address, Interface broadcast address, Interface network mask, Broadcast support flag, Multicast support flag, Loopback interface flag and Point to point interface flag.

# address of [network ip interface]

Returns the ip address of the ip interface.

# alias of [network ip interface]

Returns `True` if the network ip interface has an alias defined for it (a virtual device, rather than a physical device).

# broadcast address of [network ip interface]

Returns the broadcast address of the specified interface as an IPv4 type.

# broadcast support of [network ip interface]

Indicates that broadcast messages are supported by the ip interface.

# cidr address of [network ip interface]

Returns the Classless Inter-Domain Routing address for the specified network ip interface as a string type.

# cidr string of [network ip interface]

Returns the Classless Inter-Domain Routing value for the specified network ip interface as a string type.

# loopback of [network ip interface]

Indicates that the particular network ip interface is a loopback interface.Example: address of ip interface whose (loopback of it = false) of network = &quot;192.168.127.127&quot; - Returns `True` if the given IP address doesn&#39;t have loopback.

# mac address of [network ip interface]

Returns the MAC address (AKA hardware address) of the network ip interface object. The mac address is formatted as a string of lower case hex digits separated by &#39;-&#39;.Example:  mac address whose (it = &quot;00-61-b1-d1-7d-29&quot;) of ip interfaces of network - Returns the mac address of the specified network ip interface object.

# multicast support of [network ip interface]

Indicates that multicast messages are supported by the ip interface.

# name of [network ip interface]

Returns the name of the network ip interface object. Typical names are lan0, lo0. Virtual interfaces are usually of the form lan0:2.

# point to point of [network ip interface]

Indicates that the interface is a point-to-point interface. Usually TRUE for dialup connections.

# subnet address of [network ip interface]

Returns the subnet address (IPv4) to which the specified interface belongs.

# subnet mask of [network ip interface]

Returns the subnet mask (IPv4) of the specified network ip interface.As of version 8.0, this inspector type is derived from an &lt;ipv4or6 address&gt; type.

# up of [network ip interface]

Returns `True` if the specified network IP interface is currently up.
