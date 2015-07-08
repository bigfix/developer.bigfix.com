# System Information

The system information inspectors are particularly useful for identifying attributes of the running operating system. 

## Hardware

There are a large number of properties of the underlying hardware that we can query.

We'll start with processor information:

{{#example}}
Q: vendor names of processors
A: GenuineIntel
A: GenuineIntel
...
A: GenuineIntel
{{/example}}

You'll notice quickly that this will return a bunch of entries even on single processor systems. That is because each CPU core is referenced as its own processor. 

Continuing, we can reference the speed of the processors:

{{#example}}
Q: speeds of processors
A: 2600000000 hertz
A: 2600000000 hertz
...
A: 2600000000 hertz
A: 2600000000 hertz
{{/example}}

And the name:

{{#example}}
Q: family names of processors
A: Core i7-3720QM
A: Core i7-3720QM
....
A: Core i7-3720QM
A: Core i7-3720QM
{{/example}}

## Operating System

We can easily pull the name of the operating system:

{{#example}}
Q: name of operating system
A: Mac OS X
{{/example}}

{{#example}}
Q: name of operating system
A: Win2008R2
{{/example}}

Or the version:

{{#example}}
Q: (name of it, version of it) of operating system
A: Mac OS X, 10.9.5
{{/example}}

{{#example}}
Q: (name of it, version of it) of operating system
A: Win2008R2, 6.1.7601
{{/example}}

We can also pull the architecture:

{{#example}}
Q: (name of it, architecture of it) of operating system
A: Mac OS X, x86_64
{{/example}}

{{#example}}
Q: (name of it, architecture of it) of operating system
A: Win2008R2, 6.1.7601
{{/example}}

There are simple ways to determine the OS of an endpoint without having to do string comparisons:

{{#example}}
Q: windows of operating system
A: False
{{/example}}

{{#example}}
Q: unix of operating system
A: False
{{/example}}

{{#example}}
Q: mac of operating system
A: True
{{/example}}

Under Windows we can also query the service pack version:

{{#example}}
Q: service pack major version of operating system
A: 1
{{/example}}

Finally we can query uptime

{{#example}}
Q: uptime of operating system
A: 28 days, 20:20:22.496818
{{/example}}

## Drives

We can also query information related to mounted disk drives.

On a Mac:

{{#example}}
Q: free space of volume "Macintosh HD"
A: 402534928384
{{/example}}

On Windows:

{{#example}}
Q: (free spaces of it, names of it) of drives
A: 53851201536, C:
{{/example}}
