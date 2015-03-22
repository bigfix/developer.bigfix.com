# type: operating system

The `operating system` type provides access to information about the operating system and computer.

# android of &lt;operating system&gt;

Returns whether the computer is an [Android](http://en.wikipedia.org/wiki/Android_%28operating_system%29) device.

{{#example}}
Q: android of operating system
A: False
{{/example}}

# apar &lt;string&gt; of &lt;operating system&gt;

Returns the APAR whose APAR number exactly matches the string.

# apar of &lt;operating system&gt;

Returns all APARs.

# architecture of &lt;operating system&gt;

Returns the architecture of the operating system.

{{#example}}
Q: architecture of operating system
A: x86_64
{{/example}}

# big endian of &lt;operating system&gt;

Returns whether the computer is [big-endian](http://en.wikipedia.org/wiki/Endianness).

{{#example}}
Q: big endian of operating system
A: False
{{/example}}

# boot time of &lt;operating system&gt;

Returns the time of the last restart.

{{#example}}
Q: boot time of operating system
A: Tue, 10 Mar 2015 15:22:13 -0700
{{/example}}

# build number high of &lt;operating system&gt;

Returns the most significant 16 bits of the build number.

{{#example}}
Q: (build number high of it, version of it, name of it) of operating system
A: 0, 6.3.9600, Win8.1
{{/example}}

# build number low of &lt;operating system&gt;

Returns the least significant 16 bits of the build number.

{{#example}}
Q: (build number low of it, version of it, name of it) of operating system
A: 9600, 6.3.9600, Win8.1
{{/example}}

# build number of &lt;operating system&gt;

Returns the integer build number of the operating system.

{{#example}}
Q: (build number of it, version of it, name of it) of operating system
A: 9600, 6.3.9600, Win8.1
{{/example}}

# build of &lt;operating system&gt;

Returns a string corresponding to the build number of the OS.

{{#example}}
Q: (build of it, name of it) of operating system
A: Darwin Kernel Version 14.1.0: Thu Feb 26 19:26:47 PST 2015; root:xnu-2782.10.73~1/RELEASE_X86_64, Mac OS X
{{/example}}

{{#example}}
Q: (build of it, name of it) of operating system
A: #58-Ubuntu SMP Tue Jul 29 16:45:05 UTC 2014, Linux Ubuntu 14.04.1 LTS
{{/example}}

# codename of &lt;operating system&gt;

Returns a string that corresponds to the codename of the given release. For example, Ubuntu 8.04 has the codename of 'hardy'.

{{#example}}
Q: (codename of it, name of it) of operating system
A: trusty, Linux Ubuntu 14.04.1 LTS
{{/example}}

# csd version of &lt;operating system&gt;

Returns the Corrective Service Disk version of the operating system. This is the `szCSDVersion` as returned by the [GetVersionEx](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724451%28v=vs.85%29.aspx) function. The format varies depending on the installed service packs. For WinNT it contains a string such as 'Service Pack 3', for Win95 it can contain a string such as 'B'.

{{#example}}
Q: (csd version of it, name of it) of operating system
A: , Win8.1
{{/example}}

# current service pack of &lt;operating system&gt;

Returns the current service pack, or no such object if none have been applied at the current technology level.

# current technology level of &lt;operating system&gt;

Returns the current technology level. This also includes the base level information, similar to &#39;oslevel -r&#39;.

# embedded of &lt;operating system&gt;

Returns whether the operating system is an embedded version, such as Windows XP Embedded.

{{#example}}
Q: embedded of operating system
A: False
{{/example}}

# ia64 of &lt;operating system&gt;

Returns `True` if the computer is running on [Itanium](http://en.wikipedia.org/wiki/Itanium).

{{#example}}
Q: ia64 of operating system
A: False
{{/example}}

# little endian of &lt;operating system&gt;

Returns `True` if the computer is [little-endian](http://en.wikipedia.org/wiki/Endianness).

{{#example}}
Q: little endian of operating system
A: True
{{/example}}

# mac of &lt;operating system&gt;

Returns `True` if the computer is a Macintosh.

{{#example}}
Q: (mac of it, name of it) of operating system
A: False, Win8.1
{{/example}}

{{#example}}
Q: (mac of it, name of it) of operating system
A: True, Mac OS X
{{/example}}

# machine of &lt;operating system&gt;

Returns the architecture of the computer.

{{#example}}
Q: machine of operating system
A: x86_64
{{/example}}

# major version of &lt;operating system&gt;

Returns the major version of the operating system.

{{#example}}
Q: (major version of it, version of it, name of it) of operating system
A: 6, 6.3.9600, Win8.1
{{/example}}

{{#example}}
Q: (major version of it, version of it, name of it) of operating system
A: 14, 14.04, Linux Ubuntu 14.04.1 LTS
{{/example}}

{{#example}}
Q: (major version of it, version of it, name of it) of operating system
A: 10, 10.10.2, Mac OS X
{{/example}}

# metric &lt;integer&gt; of &lt;operating system&gt;

Returns the result of the [GetSystemMetrics](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724385%28v=vs.85%29.aspx) function for the integer argument. The integer constants and their meaning are defined by Microsoft. For example, the integer 87 indicates that the operating system is a media center edition.

{{#example}}
Q: metric 87 of operating system
A: 0
{{/example}}

# minor version of &lt;operating system&gt;

Returns the minor version of the operating system.

{{#example}}
Q: (minor version of it, version of it, name of it) of operating system
A: 3, 6.3.9600, Win8.1
{{/example}}

{{#example}}
Q: (minor version of it, version of it, name of it) of operating system
A: 4, 14.04, Linux Ubuntu 14.04.1 LTS
{{/example}}

{{#example}}
Q: (minor version of it, version of it, name of it) of operating system
A: 10, 10.10.2, Mac OS X
{{/example}}

# name of &lt;operating system&gt;

Returns the name of the operating system as a string.

{{#example}}
Q: name of operating system
A: Win8.1
{{/example}}

{{#example}}
Q: name of operating system
A: Linux Ubuntu 14.04.1 LTS
{{/example}}

{{#example}}
Q: name of operating system
A: Mac OS X
{{/example}}

# performance counter frequency of &lt;operating system&gt;

Returns the rate at which the performance counter is being incremented per second. This value comes from the [QueryPerformanceFrequency](https://msdn.microsoft.com/en-us/library/windows/desktop/ms644905%28v=vs.85%29.aspx) function.

{{#example}}
Q: performance counter frequency of operating system
A: 2938672 hertz
{{/example}}

# performance counter of &lt;operating system&gt;

Returns the current 64-bit performance counter value. This value comes from the [QueryPerformanceCounter](https://msdn.microsoft.com/en-us/library/windows/desktop/ms644904%28v=vs.85%29.aspx) function.

{{#example}}
Q: performance counter of operating system
A: 11657096717
{{/example}}

# platform id of &lt;operating system&gt;

Returns the `dwPlatformId` as returned by the [GetVersionEx](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724451%28v=vs.85%29.aspx) function. Possible values are 1 for Win9x and 2 for WinNT.

{{#example}}
Q: platform id of operating system
A: 2
{{/example}}

# product info numeric of &lt;operating system&gt;

Returns the result of the [GetProductInfo](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724358%28v=vs.85%29.aspx) function. The inspector only provides meaningful results for Windows Vista and newer versions of the OS.

{{#example}}
Q: (product info numeric of it, name of it) of operating system
A: 6, Win8.1
{{/example}}

# product info string of &lt;operating system&gt;

Returns a string derived from the [GetProductInfo](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724358%28v=vs.85%29.aspx) function. Some example values are 'Business', 'Cluster Server', 'Enterprise', 'Home', etc.

{{#example}}
Q: (product info string of it, name of it) of operating system
A: Business, Win8.1
{{/example}}

# product type of &lt;operating system&gt;

Returns the product type of the operating system, which includes Workstations, Domain Controllers and Servers.

# release of &lt;operating system&gt;

Information about the release of the operating system, formatted as a &lt;version&gt; on the Macintosh, but a &lt;string&gt; on UNIX and Windows.

# service pack &lt;string&gt; of &lt;operating system&gt;

Returns the service pack that matches the string in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

# service pack major version of &lt;operating system&gt;

Returns the major version number of the current service pack of the specified OS.

# service pack minor version of &lt;operating system&gt;

Returns the minor version number of the current service pack of the specified OS.

# service pack of &lt;operating system&gt;

Returns all service packs

# suite mask of &lt;operating system&gt;

Returns the bit-mapped suite mask for the operating system, which contains further fine-grain information about the version.

# technology level &lt;string&gt; of &lt;operating system&gt;

Returns the technology level that matches the string in the format &quot;base-tl&quot;. For example, AIX 5.3 at technology level 6 is &quot;5300-06&quot;.

# technology level of &lt;operating system&gt;

Returns all technology levels.

# unix of &lt;operating system&gt;

Returns `True` if the local computer is a UNIX system.

# update level of &lt;operating system&gt;

No documentation exists.

# uptime of &lt;operating system&gt;

Returns a time interval that represents the elapsed time since the operating system was last booted. Note: Depending on the notebook, this interval may not include time spent in hibernation.

# version of &lt;operating system&gt;

Returns the version of the operating system.

# windows of &lt;operating system&gt;

Returns `True` if the local computer is a Windows system.

# x32 of &lt;operating system&gt;

No documentation exists.

# x64 of &lt;operating system&gt;

Returns `True` if the current operating system is 64-bit.

# &lt;operating system&gt; as string

Returns a string containing the name of the operating system concatenated with the release.
