# type: operating system

The operating system object provides access to several important properties of the system.

# android of &lt;operating system&gt;

No documentation exists.

# apar &lt;string&gt; of &lt;operating system&gt;

Returns the APAR whose APAR number exactly matches the string.

# apar of &lt;operating system&gt;

Returns all APARs.

# architecture of &lt;operating system&gt;

Returns the architecture of the operating system. This is the value of the &#39;machine&#39; element of the utsname structure obtained by calling uname.

# big endian of &lt;operating system&gt;

No documentation exists.

# boot time of &lt;operating system&gt;

Returns the time of the last restart.

# build number high of &lt;operating system&gt;

Numeric representation of the most significant 16 bits of the build number.

# build number low of &lt;operating system&gt;

Numeric representation of the least significant 16 bits of the build number.

# build number of &lt;operating system&gt;

Returns the integer build number (as a string) of the operating system. On the Macintosh, this inspector returns a string.

# build of &lt;operating system&gt;

Returns a string corresponding to the build number of the OS.

# codename of &lt;operating system&gt;

This *NIX inspector returns a string that corresponds to the codename of the given release. For example, Ubuntu 8.04 has the codename of &#39;hardy&#39;.

# csd version of &lt;operating system&gt;

Returns the Corrective Service Disk version of the operating system. The szCSDVersion as returned by the GetVersionEx system call. The format varies depending on the installed service packs. For WinNT it contains a string such as &quot;Service Pack 3&quot;, for Win95 it can contain a string such as &quot;B&quot;.

# current service pack of &lt;operating system&gt;

Returns the current service pack, or no such object if none have been applied at the current technology level.

# current technology level of &lt;operating system&gt;

Returns the current technology level. This also includes the base level information, similar to &#39;oslevel -r&#39;.

# embedded of &lt;operating system&gt;

No documentation exists.

# ia64 of &lt;operating system&gt;

Returns `True` iff the BES Client is running on Itanium.

# little endian of &lt;operating system&gt;

No documentation exists.

# mac of &lt;operating system&gt;

Returns `True` if the client computer is a Macintosh.

# machine of &lt;operating system&gt;

Returns the architecture of the machine.

# major version of &lt;operating system&gt;

Returns integer which is the dwMajorVersion returned by the GetVersionEx system call. Note that while the WinNT major version tracks the release (3 for 3.51, 4 for 4.0, and 5.0 for Windows 2000, 5.1 for Windows XP), the major version for Win95 and Win98 is always 4.

# metric &lt;integer&gt; of &lt;operating system&gt;

This inspector uses the windows GetSystemMetrics API. The integer constants and their meaning are defined by Microsoft. For example, the integer 87 indicates that the operating system is a media center edition. The integer constants are defined in WinUser.h.

# minor version of &lt;operating system&gt;

Numeric representation of the minor version of the operating system.

# name of &lt;operating system&gt;

Returns the name of the operating system as a string. Names might include Win98, WinNT, etcetera.

# performance counter frequency of &lt;operating system&gt;

The rate at which the performance counter is being incremented (per second).

# performance counter of &lt;operating system&gt;

Retrieves a 64-bit performance counter value.

# platform id of &lt;operating system&gt;

Returns the dwPlatformId as returned by the GetVersionEx system call. Possible values are 1 (Win95/95) and 2 (WinNT).

# product info numeric of &lt;operating system&gt;

This Windows-specific inspector returns the integer from the Windows GetProductInfo API. The inspector only provides meaningful results for Windows Vista and newer versions of the OS. The major/minor version of the OS must be 6.0 or greater for the result to be meaningful. For more information, refer to the Microsoft article at http://msdn2.microsoft.com/en-us/library/ms724358(VS.85).aspx.

# product info string of &lt;operating system&gt;

On Windows versions 6.0 and newer (Vista minimum), this inspector returns a string derived from the GetProductInfo API. It will be one of the following values:UnlicensedBusinessCluster ServerServer DatacenterServer Datacenter CoreEnterpriseServer EnterpriseServer Enterprise CoreServer Enterprise ItaniumHome BasicHome ServerServer for Small BusinessSmall Business ServerSmall Business Server PremiumServer StandardServer Standard CoreStarterStorage Server EnterpriseStorage Server StandardStorage Server WorkgroupUltimateWeb ServerUnknown.

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

Returns `True` if the current operating system is 64-bits.

# &lt;operating system&gt; as string

Returns a string containing the name of the operating system concatenated with the release.
