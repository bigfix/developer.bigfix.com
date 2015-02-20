---
title: zones
---

## zone network interface

The &lt;zone network interface&gt; objects allow you to inspect the network interfaces (IP layers) installed when booting a Solaris Zone.

#### &lt;zone network interface&gt; as string : string

Casts a Zone network interface as a string type.

#### name of &lt;zone network interface&gt; : string

Returns the name of the specified Solaris Zone network interface as a string.

#### address of &lt;zone network interface&gt; : string

Returns the address of the specified Solaris zone network interface as a string type.

## zone

The Solaris OS allows you to set up zones, which provide a virtual view of the runtime environment that is segregated from other zones. Solaris Zones act as completely isolated virtual servers within a single operating system instance. These inspectors allow you to monitor the user&#39;s zone configurations.

#### &lt;zone&gt; as string : string

Casts a Zone as a string type.

#### uuid of &lt;zone&gt; : uuid

Returns the UUID of the specified Solaris Zone.

#### scheduling class of &lt;zone&gt; : string

Returns the scheduling class of the specified Solaris Zone, a platform-provided string.  See the Solaris documentation for more information.

#### physical memory cap of &lt;zone&gt; : integer

Returns the physical memory cap of the specified Solaris Zone (if one exists). An attempt to get the physical memory cap of an zone when none exists will result in &#39;Singular expression refers to nonexistent object&#39;.  See the Solaris documentation for more information.

#### path of &lt;zone&gt; : string

Returns the path of the given Solaris Zone as a string.

#### network interface of &lt;zone&gt; : zone network interface

Returns a list of the network interfaces of the specified Solaris Zone.

#### network interface &lt;string&gt; of &lt;zone&gt; : zone network interface

Returns the named network interface of the specified Solaris Zone.

#### name of &lt;zone&gt; : string

Returns the name of the specified Solaris Zone as a string.

#### init process of &lt;zone&gt; : process

Returns the init process of the specified Solaris Zone. An attempt to get the init process of an inactive zone will result in &#39;Singular expression refers to nonexistent object&#39;. See the Solaris documentation for more information.

#### inherited package directory of &lt;zone&gt; : string

Returns the inherited package directories of the specified Solaris Zone (if any exist) as strings.

#### id of &lt;zone&gt; : integer

Returns the ID of the specified Solaris Zone as an integer.

#### execution state of &lt;zone&gt; : string

Returns the Execution State of the specified Solaris Zone as a string, such as &#39;Active&#39;, &#39;Running&#39;, &#39;Stopped&#39;, etcetera.

#### exclusive ip of &lt;zone&gt; : boolean

Returns TRUE if the Exclusive IP flag is set for the specified Solaris Zone. This configuration implies that a given non-global zone will have exclusive access to one of the NICs on your system.

#### configuration state of &lt;zone&gt; : string

Returns the configuration state of the specified Solaris Zone as a string type.

#### comment of &lt;zone&gt; : string

Returns the comments associated with the specified Solaris Zone.

#### brand of &lt;zone&gt; : string

Returns the brand of the selected Solaris Zone as a string, such as &#39;native&#39;, &#39;cluster&#39; or &#39;solaris9&#39;.

#### boot argument of &lt;zone&gt; : string

Returns a list of the boot arguments of the specified Solaris zone.

#### boot argument &lt;integer&gt; of &lt;zone&gt; : string

Returns the Nth boot argument of the specified Solaris zone.

#### autoboot value of &lt;zone&gt; : boolean

Returns TRUE if the specified Solaris Zone is set to Autoboot.

