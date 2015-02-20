---
title: general
---

## computer

The &lt;computer&gt; inspectors provide access to the name of the computer.

#### name of &lt;computer&gt; : string

The name of the computer.

## ram

The &lt;ram&gt; object is used to inspect properties of the computer&#39;s random access memory.

#### used amount of &lt;ram&gt; : integer

Returns the amount of system RAM currently used, in bytes.

#### unavailable amount of &lt;ram&gt; : integer

Returns the amount of system RAM currently unavailable, in bytes.

#### total amount of &lt;ram&gt; : integer

Same as size of &lt;ram&gt;.

#### size of &lt;ram&gt; : integer

Returns the number of bytes of random access memory on the current machine.

#### shared amount of &lt;ram&gt; : integer

Returns the amount of system RAM currently shared, in bytes.

#### free amount of &lt;ram&gt; : integer

Returns the amount of system RAM currently unused, in bytes.

#### cached amount of &lt;ram&gt; : integer

Returns the amount of system RAM currently cached, in bytes.

#### buffered amount of &lt;ram&gt; : integer

Returns the amount of system RAM currently buffered, in bytes.

#### available amount of &lt;ram&gt; : integer

Returns the amount of system ram that is currently available, in bytes.

## primary language

A primary language identifier indicates the written/spoken language that is used by the system. However, to identify the language that is used in a country or region you must combine the primary language with a sub-language identifier to form language identifiers.

#### &lt;primary language&gt; as string : string

Returns the primary language.

## operating system

The operating system object provides access to several important properties of the system.

#### &lt;operating system&gt; as string : string

Returns a string containing the name of the operating system concatenated with the release.

#### windows of &lt;operating system&gt; : boolean

Returns TRUE if the local computer is a Windows system.

#### uptime of &lt;operating system&gt; : time interval

Returns a time interval that represents the elapsed time since the operating system was last booted. Note: Depending on the notebook, this interval may not include time spent in hibernation.

#### unix of &lt;operating system&gt; : boolean

Returns TRUE if the local computer is a UNIX system.

#### release of &lt;operating system&gt; : string

Information about the release of the operating system, formatted as a &lt;version&gt; on the Macintosh, but a &lt;string&gt; on UNIX and Windows.

#### name of &lt;operating system&gt; : string

Returns the name of the operating system as a string. Names might include Win98, WinNT, etcetera.

#### mac of &lt;operating system&gt; : boolean

Returns TRUE if the client computer is a Macintosh.

#### build of &lt;operating system&gt; : string

Returns a string corresponding to the build number of the OS.

#### boot time of &lt;operating system&gt; : time

Returns the time of the last restart.

#### architecture of &lt;operating system&gt; : string

Returns the architecture of the operating system. This is the value of the &#39;machine&#39; element of the utsname structure obtained by calling uname.

#### version of &lt;operating system&gt; : version

Returns the version of the operating system.

#### build number of &lt;operating system&gt; : integer

Returns the integer build number (as a string) of the operating system. On the Macintosh, this inspector returns a string.

#### x64 of &lt;operating system&gt; : boolean

Returns TRUE if the current operating system is 64-bits.

#### suite mask of &lt;operating system&gt; : operating system suite mask

Returns the bit-mapped suite mask for the operating system, which contains further fine-grain information about the version.

#### service pack minor version of &lt;operating system&gt; : integer

Returns the minor version number of the current service pack of the specified OS.

#### service pack major version of &lt;operating system&gt; : integer

Returns the major version number of the current service pack of the specified OS.

#### product type of &lt;operating system&gt; : operating system product type

Returns the product type of the operating system, which includes Workstations, Domain Controllers and Servers.

#### product info string of &lt;operating system&gt; : string

On Windows versions 6.0 and newer (Vista minimum), this inspector returns a string derived from the GetProductInfo API. It will be one of the following values:UnlicensedBusinessCluster ServerServer DatacenterServer Datacenter CoreEnterpriseServer EnterpriseServer Enterprise CoreServer Enterprise ItaniumHome BasicHome ServerServer for Small BusinessSmall Business ServerSmall Business Server PremiumServer StandardServer Standard CoreStarterStorage Server EnterpriseStorage Server StandardStorage Server WorkgroupUltimateWeb ServerUnknown.

#### product info numeric of &lt;operating system&gt; : integer

This Windows-specific inspector returns the integer from the Windows GetProductInfo API. The inspector only provides meaningful results for Windows Vista and newer versions of the OS. The major/minor version of the OS must be 6.0 or greater for the result to be meaningful. For more information, refer to the Microsoft article at http://msdn2.microsoft.com/en-us/library/ms724358(VS.85).aspx.

#### platform id of &lt;operating system&gt; : integer

Returns the dwPlatformId as returned by the GetVersionEx system call. Possible values are 1 (Win95/95) and 2 (WinNT).

#### performance counter of &lt;operating system&gt; : integer

Retrieves a 64-bit performance counter value.

#### performance counter frequency of &lt;operating system&gt; : hertz

The rate at which the performance counter is being incremented (per second).

#### minor version of &lt;operating system&gt; : integer

Numeric representation of the minor version of the operating system.

#### metric &lt;integer&gt; of &lt;operating system&gt; : integer

This inspector uses the windows GetSystemMetrics API. The integer constants and their meaning are defined by Microsoft. For example, the integer 87 indicates that the operating system is a media center edition. The integer constants are defined in WinUser.h.

#### major version of &lt;operating system&gt; : integer

Returns integer which is the dwMajorVersion returned by the GetVersionEx system call. Note that while the WinNT major version tracks the release (3 for 3.51, 4 for 4.0, and 5.0 for Windows 2000, 5.1 for Windows XP), the major version for Win95 and Win98 is always 4.

#### ia64 of &lt;operating system&gt; : boolean

Returns TRUE iff the BES Client is running on Itanium.

#### csd version of &lt;operating system&gt; : string

Returns the Corrective Service Disk version of the operating system. The szCSDVersion as returned by the GetVersionEx system call. The format varies depending on the installed service packs. For WinNT it contains a string such as &quot;Service Pack 3&quot;, for Win95 it can contain a string such as &quot;B&quot;.

#### build number low of &lt;operating system&gt; : integer

Numeric representation of the least significant 16 bits of the build number.

#### build number high of &lt;operating system&gt; : integer

Numeric representation of the most significant 16 bits of the build number.

#### codename of &lt;operating system&gt; : string

This *NIX inspector returns a string that corresponds to the codename of the given release. For example, Ubuntu 8.04 has the codename of &#39;hardy&#39;.

#### machine of &lt;operating system&gt; : string

Returns the architecture of the machine.

#### technology level of &lt;operating system&gt; : technology level

Returns all technology levels.

#### technology level &lt;string&gt; of &lt;operating system&gt; : technology level

Returns the technology level that matches the string in the format &quot;base-tl&quot;. For example, AIX 5.3 at technology level 6 is &quot;5300-06&quot;.

#### service pack of &lt;operating system&gt; : service pack

Returns all service packs

#### service pack &lt;string&gt; of &lt;operating system&gt; : service pack

Returns the service pack that matches the string in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

#### current technology level of &lt;operating system&gt; : technology level

Returns the current technology level. This also includes the base level information, similar to &#39;oslevel -r&#39;.

#### current service pack of &lt;operating system&gt; : service pack

Returns the current service pack, or no such object if none have been applied at the current technology level.

#### apar of &lt;operating system&gt; : apar

Returns all APARs.

#### apar &lt;string&gt; of &lt;operating system&gt; : apar

Returns the APAR whose APAR number exactly matches the string.

#### embedded of &lt;operating system&gt; : boolean

No documentation exists for this property.

#### update level of &lt;operating system&gt; : integer

No documentation exists for this property.

#### android of &lt;operating system&gt; : boolean

No documentation exists for this property.

#### little endian of &lt;operating system&gt; : boolean

No documentation exists for this property.

#### big endian of &lt;operating system&gt; : boolean

No documentation exists for this property.

#### x32 of &lt;operating system&gt; : boolean

No documentation exists for this property.

## operating system suite mask

No documentation exists for this type.

## operating system product type

The &lt;operating system product type&gt; inspectors return the product type of the operating system, which includes Workstations, Domain Controllers and Servers.

## technology level with multiplicity

No documentation exists for this type.

#### multiplicity of &lt;technology level with multiplicity&gt; : integer

Returns an the number of times a technology level occurs.

## technology level

No documentation exists for this type.

#### &lt;technology level&gt; as string : string

Returns a string that uniquely identifies a technolgoy level in the format &quot;base-tl&quot;. For example, AIX 5.3 at technology level 6 would be &quot;5300-06&quot;.

#### unique value of &lt;technology level&gt; : technology level with multiplicity

Returns a list of all unique technology levels along with their respective counts.

#### uninstalled fileset version requirement of &lt;technology level&gt; : fileset version requirement

Returns all the fileset version requirements for the technology level that are not installed.

#### name of &lt;technology level&gt; : string

Returns a string that uniquely identifies a technolgoy level in the format &quot;base-tl&quot;. For example, AIX 5.3 at technology level 6 would be &quot;5300-06&quot;.

#### minimum of &lt;technology level&gt; : technology level

Returns the lowest technology level.

#### maximum of &lt;technology level&gt; : technology level

Returns the highest technology level.

#### installed unsatisfied fileset version requirement of &lt;technology level&gt; : fileset version requirement

Returns all the fileset version requirements for the technology level that are installed but do not meet the version requirement.

#### installed satisfied fileset version requirement of &lt;technology level&gt; : fileset version requirement

Returns all the fileset version requirements for the technology level that are installed and meet the version requirement.

#### fileset version requirement of &lt;technology level&gt; : fileset version requirement

Returns all the required filesets version requirements for the technology level.

#### fileset version requirement &lt;string&gt; of &lt;technology level&gt; : fileset version requirement

No documentation exists for this property.

#### extrema of &lt;technology level&gt; : ( technology level, technology level )

Returns a tuple with the lowest and highest technology levels.

#### abstract of &lt;technology level&gt; : string

Returns a string in the format &quot;AIX base-tl Update&quot;.

## service pack with multiplicity

No documentation exists for this type.

#### multiplicity of &lt;service pack with multiplicity&gt; : integer

Returns an the number of times a service pack occurs.

## service pack

No documentation exists for this type.

#### &lt;service pack&gt; as string : string

Returns a string that uniquely identifies a service pack in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

#### unique value of &lt;service pack&gt; : service pack with multiplicity

Returns a list of all unique service packs along with their respective counts.

#### uninstalled fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all the fileset version requirements for the service pack that are not installed.

#### technology level of &lt;service pack&gt; : technology level

Returns the technology associated of the service pack.

#### name of &lt;service pack&gt; : string

Returns a string that uniquely identifies a service pack in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

#### minimum of &lt;service pack&gt; : service pack

Returns the earliest service pack.

#### maximum of &lt;service pack&gt; : service pack

Returns the latest service pack.

#### installed unsatisfied fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all the fileset version requirements for the service pack that are installed but do not meet the version requirement.

#### installed satisfied fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all the fileset version requirements for the service pack that are installed and meet the version requirement.

#### fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all of the fileset version requirements for the service pack.

#### fileset version requirement &lt;string&gt; of &lt;service pack&gt; : fileset version requirement

Returns the fileset version requirements for the service pack if a fileset with an LPP name matching the string is a requirement of the service pack.

#### extrema of &lt;service pack&gt; : ( service pack, service pack )

Returns a tuple with the oldest and newest service packs.

#### abstract of &lt;service pack&gt; : string

Returns a string in the format &quot;AIX base-tl-sp (Concluding) Service Pack&quot;, with &#39;Concluding&#39; onyl for a CSP.

## language

A language is composed of a primary language (for example, Swiss) and a sub-language (for example, Swiss German).

#### &lt;language&gt; as string : string

Returns the language of the system locale.

#### primary language of &lt;language&gt; : primary language

Extracts the primary language identifier from a language.

#### platform id of &lt;language&gt; : string

Returns the string resulting from a call to setlocale(LC_TYPE, &quot;&quot;). This call examines the system environment and returns a string representing the language and character set for any text-related system function. The string is of the form &quot;en_US.UTF-8&quot;.

#### primary country of &lt;language&gt; : string

No documentation exists for this property.

#### primary codeset of &lt;language&gt; : string

No documentation exists for this property.

