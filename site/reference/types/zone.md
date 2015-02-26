# zone

The Solaris OS allows you to set up zones, which provide a virtual view of the runtime environment that is segregated from other zones. Solaris Zones act as completely isolated virtual servers within a single operating system instance. These inspectors allow you to monitor the user&#39;s zone configurations.

# autoboot value of <zone>

Returns `True` if the specified Solaris Zone is set to Autoboot.

# boot argument <integer> of <zone>

Returns the Nth boot argument of the specified Solaris zone.

# boot argument of <zone>

Returns a list of the boot arguments of the specified Solaris zone.

# brand of <zone>

Returns the brand of the selected Solaris Zone as a string, such as &#39;native&#39;, &#39;cluster&#39; or &#39;solaris9&#39;.

# comment of <zone>

Returns the comments associated with the specified Solaris Zone.

# configuration state of <zone>

Returns the configuration state of the specified Solaris Zone as a string type.

# exclusive ip of <zone>

Returns `True` if the Exclusive IP flag is set for the specified Solaris Zone. This configuration implies that a given non-global zone will have exclusive access to one of the NICs on your system.

# execution state of <zone>

Returns the Execution State of the specified Solaris Zone as a string, such as &#39;Active&#39;, &#39;Running&#39;, &#39;Stopped&#39;, etcetera.

# id of <zone>

Returns the ID of the specified Solaris Zone as an integer.

# inherited package directory of <zone>

Returns the inherited package directories of the specified Solaris Zone (if any exist) as strings.

# init process of <zone>

Returns the init process of the specified Solaris Zone. An attempt to get the init process of an inactive zone will result in &#39;Singular expression refers to nonexistent object&#39;. See the Solaris documentation for more information.

# name of <zone>

Returns the name of the specified Solaris Zone as a string.

# network interface <string> of <zone>

Returns the named network interface of the specified Solaris Zone.

# network interface of <zone>

Returns a list of the network interfaces of the specified Solaris Zone.

# path of <zone>

Returns the path of the given Solaris Zone as a string.

# physical memory cap of <zone>

Returns the physical memory cap of the specified Solaris Zone (if one exists). An attempt to get the physical memory cap of an zone when none exists will result in &#39;Singular expression refers to nonexistent object&#39;.  See the Solaris documentation for more information.

# scheduling class of <zone>

Returns the scheduling class of the specified Solaris Zone, a platform-provided string.  See the Solaris documentation for more information.

# uuid of <zone>

Returns the UUID of the specified Solaris Zone.

# <zone> as string

Casts a Zone as a string type.
