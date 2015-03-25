# type: ipv4 route

No documentation exists.

# blackhole flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a blackhole route.

# broadcast flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a broadcast route.

# cache flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is in the cache.

# default flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying whether the route is a default route.

# destination of &lt;ipv4 route&gt; : ipv4 address

Returns an ipv4 address specifying the destination of the route.

# dynamic flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route was dynamically installed by a daemon or redirect.

# gateway flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is going through a gateway.

# gateway of &lt;ipv4 route&gt; : ipv4 address

Returns the ipv4 address of the route&#39;s gateway if the gateway flag is set, otherwise "0.0.0.0".

# host flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the target of the route is a host.

# interface of &lt;ipv4 route&gt; : string

Returns a string containing the name of the interface the route goes through.

# irtt of &lt;ipv4 route&gt; : integer

Returns an integer specifying the initial roud trip time for TCP connections over the route in milliseconds (1-12000). Typically only used on AX.25 networks, with a default value of 300 if not specified.

# local flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is to the local network.

# loopback flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is the loopback route.

# mask of &lt;ipv4 route&gt; : ipv4 address

Returns an ipv4 address containing the netmask of the route in the format "255.255.255.0".

# metric of &lt;ipv4 route&gt; : integer

Returns an integer specifying the metric value of the route.

# modified flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route was modified by a daemon or redirect.

# mtu of &lt;ipv4 route&gt; : integer

Returns an integer specifying the maximum transmission unit setting of the route. Typically not used.

# multiroute flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is redundant.

# prefix flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a prefix route.

# private flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is private and not advertised.

# reference count of &lt;ipv4 route&gt; : integer

Returns an integer specifying the number of referenced to the route.

# reject flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a blocking route.

# setsrc flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying whether the route assigns the default source address.

# static flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is a persistent static route.

# up flag of &lt;ipv4 route&gt; : boolean

Returns a boolean specifying if the route is up.

# use count of &lt;ipv4 route&gt; : integer

Returns an integer specifying the number of lookups for the route.

# window of &lt;ipv4 route&gt; : integer

Returns the TCP window setting for connections over the route. Typically only used on AX.25 networks and with drivers unable to handle back to back frames.
