---
title: general
---

{% type computer%}

The &lt;computer&gt; inspectors provide access to the name of the computer.

#### Properties

{% property name of <computer> %}

The name of the computer.

{% type ram%}

The &lt;ram&gt; object is used to inspect properties of the computer&#39;s random access memory.

#### Properties

{% property used amount of <ram> %}

Returns the amount of system RAM currently used, in bytes.

{% property unavailable amount of <ram> %}

Returns the amount of system RAM currently unavailable, in bytes.

{% property total amount of <ram> %}

Same as size of &lt;ram&gt;.

{% property size of <ram> %}

Returns the number of bytes of random access memory on the current machine.

{% property shared amount of <ram> %}

Returns the amount of system RAM currently shared, in bytes.

{% property free amount of <ram> %}

Returns the amount of system RAM currently unused, in bytes.

{% property cached amount of <ram> %}

Returns the amount of system RAM currently cached, in bytes.

{% property buffered amount of <ram> %}

Returns the amount of system RAM currently buffered, in bytes.

{% property available amount of <ram> %}

Returns the amount of system ram that is currently available, in bytes.

{% type primary language%}

A primary language identifier indicates the written/spoken language that is used by the system. However, to identify the language that is used in a country or region you must combine the primary language with a sub-language identifier to form language identifiers.

#### Casts

{% property <primary language> as string %}

Returns the primary language.

{% type operating system%}

The operating system object provides access to several important properties of the system.

#### Casts

{% property <operating system> as string %}

Returns a string containing the name of the operating system concatenated with the release.

#### Properties

{% property windows of <operating system> %}

Returns TRUE if the local computer is a Windows system.

{% property uptime of <operating system> %}

Returns a time interval that represents the elapsed time since the operating system was last booted. Note: Depending on the notebook, this interval may not include time spent in hibernation.

{% property unix of <operating system> %}

Returns TRUE if the local computer is a UNIX system.

{% property release of <operating system> %}

Information about the release of the operating system, formatted as a &lt;version&gt; on the Macintosh, but a &lt;string&gt; on UNIX and Windows.

{% property name of <operating system> %}

Returns the name of the operating system as a string. Names might include Win98, WinNT, etcetera.

{% property mac of <operating system> %}

Returns TRUE if the client computer is a Macintosh.

{% property build of <operating system> %}

Returns a string corresponding to the build number of the OS.

{% property boot time of <operating system> %}

Returns the time of the last restart.

{% property architecture of <operating system> %}

Returns the architecture of the operating system. This is the value of the &#39;machine&#39; element of the utsname structure obtained by calling uname.

{% property version of <operating system> %}

Returns the version of the operating system.

{% property build number of <operating system> %}

Returns the integer build number (as a string) of the operating system. On the Macintosh, this inspector returns a string.

{% property x64 of <operating system> %}

Returns TRUE if the current operating system is 64-bits.

{% property suite mask of <operating system> %}

Returns the bit-mapped suite mask for the operating system, which contains further fine-grain information about the version.

{% property service pack minor version of <operating system> %}

Returns the minor version number of the current service pack of the specified OS.

{% property service pack major version of <operating system> %}

Returns the major version number of the current service pack of the specified OS.

{% property product type of <operating system> %}

Returns the product type of the operating system, which includes Workstations, Domain Controllers and Servers.

{% property product info string of <operating system> %}

On Windows versions 6.0 and newer (Vista minimum), this inspector returns a string derived from the GetProductInfo API. It will be one of the following values:UnlicensedBusinessCluster ServerServer DatacenterServer Datacenter CoreEnterpriseServer EnterpriseServer Enterprise CoreServer Enterprise ItaniumHome BasicHome ServerServer for Small BusinessSmall Business ServerSmall Business Server PremiumServer StandardServer Standard CoreStarterStorage Server EnterpriseStorage Server StandardStorage Server WorkgroupUltimateWeb ServerUnknown.

{% property product info numeric of <operating system> %}

This Windows-specific inspector returns the integer from the Windows GetProductInfo API. The inspector only provides meaningful results for Windows Vista and newer versions of the OS. The major/minor version of the OS must be 6.0 or greater for the result to be meaningful. For more information, refer to the Microsoft article at http://msdn2.microsoft.com/en-us/library/ms724358(VS.85).aspx.

{% property platform id of <operating system> %}

Returns the dwPlatformId as returned by the GetVersionEx system call. Possible values are 1 (Win95/95) and 2 (WinNT).

{% property performance counter of <operating system> %}

Retrieves a 64-bit performance counter value.

{% property performance counter frequency of <operating system> %}

The rate at which the performance counter is being incremented (per second).

{% property minor version of <operating system> %}

Numeric representation of the minor version of the operating system.

{% property metric <integer> of <operating system> %}

This inspector uses the windows GetSystemMetrics API. The integer constants and their meaning are defined by Microsoft. For example, the integer 87 indicates that the operating system is a media center edition. The integer constants are defined in WinUser.h.

{% property major version of <operating system> %}

Returns integer which is the dwMajorVersion returned by the GetVersionEx system call. Note that while the WinNT major version tracks the release (3 for 3.51, 4 for 4.0, and 5.0 for Windows 2000, 5.1 for Windows XP), the major version for Win95 and Win98 is always 4.

{% property ia64 of <operating system> %}

Returns TRUE iff the BES Client is running on Itanium.

{% property csd version of <operating system> %}

Returns the Corrective Service Disk version of the operating system. The szCSDVersion as returned by the GetVersionEx system call. The format varies depending on the installed service packs. For WinNT it contains a string such as &quot;Service Pack 3&quot;, for Win95 it can contain a string such as &quot;B&quot;.

{% property build number low of <operating system> %}

Numeric representation of the least significant 16 bits of the build number.

{% property build number high of <operating system> %}

Numeric representation of the most significant 16 bits of the build number.

{% property codename of <operating system> %}

This *NIX inspector returns a string that corresponds to the codename of the given release. For example, Ubuntu 8.04 has the codename of &#39;hardy&#39;.

{% property machine of <operating system> %}

Returns the architecture of the machine.

{% property technology level of <operating system> %}

Returns all technology levels.

{% property technology level <string> of <operating system> %}

Returns the technology level that matches the string in the format &quot;base-tl&quot;. For example, AIX 5.3 at technology level 6 is &quot;5300-06&quot;.

{% property service pack of <operating system> %}

Returns all service packs

{% property service pack <string> of <operating system> %}

Returns the service pack that matches the string in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

{% property current technology level of <operating system> %}

Returns the current technology level. This also includes the base level information, similar to &#39;oslevel -r&#39;.

{% property current service pack of <operating system> %}

Returns the current service pack, or no such object if none have been applied at the current technology level.

{% property apar of <operating system> %}

Returns all APARs.

{% property apar <string> of <operating system> %}

Returns the APAR whose APAR number exactly matches the string.

{% property embedded of <operating system> %}

No documentation exists for this property.

{% property update level of <operating system> %}

No documentation exists for this property.

{% property android of <operating system> %}

No documentation exists for this property.

{% property little endian of <operating system> %}

No documentation exists for this property.

{% property big endian of <operating system> %}

No documentation exists for this property.

{% property x32 of <operating system> %}

No documentation exists for this property.

{% type operating system suite mask%}

No documentation exists for this type.

{% type operating system product type%}

The &lt;operating system product type&gt; inspectors return the product type of the operating system, which includes Workstations, Domain Controllers and Servers.

{% type technology level with multiplicity%}

No documentation exists for this type.

#### Properties

{% property multiplicity of <technology level with multiplicity> %}

Returns an the number of times a technology level occurs.

{% type technology level%}

No documentation exists for this type.

#### Casts

{% property <technology level> as string %}

Returns a string that uniquely identifies a technolgoy level in the format &quot;base-tl&quot;. For example, AIX 5.3 at technology level 6 would be &quot;5300-06&quot;.

#### Properties

{% property unique value of <technology level> %}

Returns a list of all unique technology levels along with their respective counts.

{% property uninstalled fileset version requirement of <technology level> %}

Returns all the fileset version requirements for the technology level that are not installed.

{% property name of <technology level> %}

Returns a string that uniquely identifies a technolgoy level in the format &quot;base-tl&quot;. For example, AIX 5.3 at technology level 6 would be &quot;5300-06&quot;.

{% property minimum of <technology level> %}

Returns the lowest technology level.

{% property maximum of <technology level> %}

Returns the highest technology level.

{% property installed unsatisfied fileset version requirement of <technology level> %}

Returns all the fileset version requirements for the technology level that are installed but do not meet the version requirement.

{% property installed satisfied fileset version requirement of <technology level> %}

Returns all the fileset version requirements for the technology level that are installed and meet the version requirement.

{% property fileset version requirement of <technology level> %}

Returns all the required filesets version requirements for the technology level.

{% property fileset version requirement <string> of <technology level> %}

No documentation exists for this property.

{% property extrema of <technology level> %}

Returns a tuple with the lowest and highest technology levels.

{% property abstract of <technology level> %}

Returns a string in the format &quot;AIX base-tl Update&quot;.

{% type service pack with multiplicity%}

No documentation exists for this type.

#### Properties

{% property multiplicity of <service pack with multiplicity> %}

Returns an the number of times a service pack occurs.

{% type service pack%}

No documentation exists for this type.

#### Casts

{% property <service pack> as string %}

Returns a string that uniquely identifies a service pack in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

#### Properties

{% property unique value of <service pack> %}

Returns a list of all unique service packs along with their respective counts.

{% property uninstalled fileset version requirement of <service pack> %}

Returns all the fileset version requirements for the service pack that are not installed.

{% property technology level of <service pack> %}

Returns the technology associated of the service pack.

{% property name of <service pack> %}

Returns a string that uniquely identifies a service pack in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

{% property minimum of <service pack> %}

Returns the earliest service pack.

{% property maximum of <service pack> %}

Returns the latest service pack.

{% property installed unsatisfied fileset version requirement of <service pack> %}

Returns all the fileset version requirements for the service pack that are installed but do not meet the version requirement.

{% property installed satisfied fileset version requirement of <service pack> %}

Returns all the fileset version requirements for the service pack that are installed and meet the version requirement.

{% property fileset version requirement of <service pack> %}

Returns all of the fileset version requirements for the service pack.

{% property fileset version requirement <string> of <service pack> %}

Returns the fileset version requirements for the service pack if a fileset with an LPP name matching the string is a requirement of the service pack.

{% property extrema of <service pack> %}

Returns a tuple with the oldest and newest service packs.

{% property abstract of <service pack> %}

Returns a string in the format &quot;AIX base-tl-sp (Concluding) Service Pack&quot;, with &#39;Concluding&#39; onyl for a CSP.

{% type language%}

A language is composed of a primary language (for example, Swiss) and a sub-language (for example, Swiss German).

#### Casts

{% property <language> as string %}

Returns the language of the system locale.

#### Properties

{% property primary language of <language> %}

Extracts the primary language identifier from a language.

{% property platform id of <language> %}

Returns the string resulting from a call to setlocale(LC_TYPE, &quot;&quot;). This call examines the system environment and returns a string representing the language and character set for any text-related system function. The string is of the form &quot;en_US.UTF-8&quot;.

{% property primary country of <language> %}

No documentation exists for this property.

{% property primary codeset of <language> %}

No documentation exists for this property.

