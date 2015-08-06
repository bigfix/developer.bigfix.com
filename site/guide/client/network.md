# Network

## Addressing

We can easily grab the IP Addresses assigned to adapters on the system

{{#example}}
Q: addresses whose (it as string != "0.0.0.0") of ip interfaces whose (loopback of it = false) of network as string
A: 192.168.1.102
A: 9.80.109.49
{{/example}}

We can also grab Mac Addresses of network adapters:

{{#example}}
Q: (mac addresses of it, addresses of it) of ip interfaces of network as string
A: 3c-15-c2-b7-c7-1a, 192.168.1.102
{{/example}}

And we can grab the names of the network adapters:

{{#example}}
Q: names of adapters of network
A: bridge0
A: en0
A: en1
A: en2
A: fw0
A: gif0
A: lo0
A: p2p0
A: stf0
A: vmnet1
A: vmnet8
{{/example}}

Or the names of the active network adapters:

{{#example}}
Q: friendly names of adapters whose (up of it = true) of network
A: bridge0
A: en0
A: en1
A: en2
A: lo0
A: p2p0
A: vmnet1
A: vmnet8
{{/example}}

Finally, we can get the names and IP addresses of the adapters that are online:

{{#example}}
Q: addresses of ipv4 interfaces whose (exists address of it) of adapters whose (up of it = true) of network
A: 192.168.44.92
A: 127.0.0.1
A: 192.168.235.1
A: 192.168.181.1
{{/example}}

Some adapters don't have associated ipv4 interfaces so we had to check to make sure they exist using a whose-it statement.

Finally, we can get the names and addresses of all adapters:

{{#example}}
Q: (name of adapter of it, addresses of it) of ipv4 interfaces of adapters whose (up of it = true) of network
A: en1, 192.168.44.92
A: lo0, 127.0.0.1
A: vmnet1, 192.168.235.1
A: vmnet8, 192.168.181.1
{{/example}}

We can also get the cidr strings of our connected networks:

{{#example}}
Q: (name of adapter of it, cidr string of it) of ipv4 interfaces of adapters whose (up of it = true) of network
A: en1, 192.168.44.0/24
A: lo0, 127.0.0.0/8
A: vmnet1, 192.168.235.0/24
{{/example}}

This is particularly useful for checking if an endpoint is on a certain network (Note one of my interfaces is on the 192.168.44.0/24 subnet):

{{#example}}
Q: exists (ipv4 interfaces of adapters whose (up of it = true) of network) whose (cidr string of it = "192.168.44.0/24")
A: True
{{/example}}
