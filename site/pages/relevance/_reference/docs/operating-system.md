# type: operating system

The `operating system` type provides information about the operating system and computer.

# android of &lt;operating system&gt; : boolean

Returns whether the computer is an [Android](http://en.wikipedia.org/wiki/Android_%28operating_system%29) device.

{% qna %}
Q: android of operating system
A: False
{% endqna %}

# apar &lt;string&gt; of &lt;operating system&gt; : apar

Returns the APAR whose APAR number exactly matches the string.

# apar of &lt;operating system&gt; : apar

Returns all APARs.

# architecture of &lt;operating system&gt; : string

Returns the architecture of the operating system.

{% qna %}
Q: architecture of operating system
A: x86_64
{% endqna %}

# big endian of &lt;operating system&gt; : boolean

Returns whether the computer is [big-endian](http://en.wikipedia.org/wiki/Endianness).

{% qna %}
Q: big endian of operating system
A: False
{% endqna %}

# boot time of &lt;operating system&gt; : time

Returns the time of the last restart.

{% qna %}
Q: boot time of operating system
A: Tue, 10 Mar 2015 15:22:13 -0700
{% endqna %}

# build number high of &lt;operating system&gt; : integer

Returns the most significant 16 bits of the build number.

{% qna %}
Q: (build number high of it, version of it, name of it) of operating system
A: 0, 6.3.9600, Win8.1
{% endqna %}

# build number low of &lt;operating system&gt; : integer

Returns the least significant 16 bits of the build number.

{% qna %}
Q: (build number low of it, version of it, name of it) of operating system
A: 9600, 6.3.9600, Win8.1
{% endqna %}

# build number of &lt;operating system&gt; : integer

Returns the build number of the operating system.

{% qna %}
Q: (build number of it, version of it, name of it) of operating system
A: 9600, 6.3.9600, Win8.1
{% endqna %}

# build number of &lt;operating system&gt; : string

Returns the build number of the operating system.

# build of &lt;operating system&gt; : string

Returns a string corresponding to the build number of the OS.

{% qna %}
Q: (build of it, name of it) of operating system
A: Darwin Kernel Version 14.1.0: Thu Feb 26 19:26:47 PST 2015; root:xnu-2782.10.73~1/RELEASE_X86_64, Mac OS X
{% endqna %}

{% qna %}
Q: (build of it, name of it) of operating system
A: #58-Ubuntu SMP Tue Jul 29 16:45:05 UTC 2014, Linux Ubuntu 14.04.1 LTS
{% endqna %}

# codename of &lt;operating system&gt; : string

Returns a string that corresponds to the codename of the given release. For example, Ubuntu 8.04 has the codename of &#39;hardy&#39;.

{% qna %}
Q: (codename of it, name of it) of operating system
A: trusty, Linux Ubuntu 14.04.1 LTS
{% endqna %}

# csd version of &lt;operating system&gt; : string

Returns the Corrective Service Disk version of the operating system. This is the `szCSDVersion` as returned by the [GetVersionEx](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724451%28v=vs.85%29.aspx) function. The format varies depending on the installed service packs. For WinNT it contains a string such as &#39;Service Pack 3&#39;, for Win95 it can contain a string such as &#39;B&#39;.

{% qna %}
Q: (csd version of it, name of it) of operating system
A: , Win8.1
{% endqna %}

# current service pack of &lt;operating system&gt; : service pack

Returns the current service pack, or no such object if none have been applied at the current technology level.

# current technology level of &lt;operating system&gt; : technology level

Returns the current technology level. This also includes the base level information, similar to &#39;oslevel -r&#39;.

# display version of &lt;operating system&gt; : string

Returns the Windows operating system version. This inspector returns a valid information only for Windows 10 and later Windows versions. Running this inspector on other Windows operating systems results in an error referring to a nonexistent object.

Running the inspector on Windows 10, OS Build 19043.396:

{% qna %}
Q: display version of operating system
A: 21H1
{% endqna %}

# embedded of &lt;operating system&gt; : boolean

Returns whether the operating system is an embedded version, such as Windows XP Embedded.

{% qna %}
Q: embedded of operating system
A: False
{% endqna %}

# hypervisor of &lt;operating system&gt; : string

No documentation exists.

# ia64 of &lt;operating system&gt; : boolean

Returns `True` if the computer is running on [Itanium](http://en.wikipedia.org/wiki/Itanium).

{% qna %}
Q: ia64 of operating system
A: False
{% endqna %}

# little endian of &lt;operating system&gt; : boolean

Returns `True` if the computer is [little-endian](http://en.wikipedia.org/wiki/Endianness).

{% qna %}
Q: little endian of operating system
A: True
{% endqna %}

# mac of &lt;operating system&gt; : boolean

Returns `True` if the computer is a Macintosh.

{% qna %}
Q: (mac of it, name of it) of operating system
A: True, Mac OS X
{% endqna %}

{% qna %}
Q: (mac of it, name of it) of operating system
A: False, Win8.1
{% endqna %}

{% qna %}
Q: (mac of it, name of it) of operating system
A: False, Linux Ubuntu 14.04.2 LTS
{% endqna %}

# machine of &lt;operating system&gt; : string

Returns the architecture of the computer.

{% qna %}
Q: machine of operating system
A: x86_64
{% endqna %}

# major version of &lt;operating system&gt; : integer

Returns the major version of the operating system.

{% qna %}
Q: (major version of it, version of it, name of it) of operating system
A: 6, 6.3.9600, Win8.1
{% endqna %}

{% qna %}
Q: (major version of it, version of it, name of it) of operating system
A: 14, 14.04, Linux Ubuntu 14.04.1 LTS
{% endqna %}

{% qna %}
Q: (major version of it, version of it, name of it) of operating system
A: 10, 10.10.2, Mac OS X
{% endqna %}

# metric &lt;integer&gt; of &lt;operating system&gt; : integer

Returns the result of the [GetSystemMetrics](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724385%28v=vs.85%29.aspx) function for the integer argument. The integer constants and their meaning are defined by Microsoft. For example, the integer 87 indicates that the operating system is a media center edition.

{% qna %}
Q: metric 87 of operating system
A: 0
{% endqna %}

# minor version of &lt;operating system&gt; : integer

Returns the minor version of the operating system.

{% qna %}
Q: (minor version of it, version of it, name of it) of operating system
A: 3, 6.3.9600, Win8.1
{% endqna %}

{% qna %}
Q: (minor version of it, version of it, name of it) of operating system
A: 4, 14.04, Linux Ubuntu 14.04.1 LTS
{% endqna %}

{% qna %}
Q: (minor version of it, version of it, name of it) of operating system
A: 10, 10.10.2, Mac OS X
{% endqna %}

# name of &lt;operating system&gt; : string

Returns the name of the operating system as a string.

{% qna %}
Q: name of operating system
A: Win8.1
{% endqna %}

{% qna %}
Q: name of operating system
A: Linux Ubuntu 14.04.1 LTS
{% endqna %}

{% qna %}
Q: name of operating system
A: Mac OS X
{% endqna %}

# performance counter frequency of &lt;operating system&gt; : hertz

Returns the rate at which the performance counter is being incremented per second. This value comes from the [QueryPerformanceFrequency](https://msdn.microsoft.com/en-us/library/windows/desktop/ms644905%28v=vs.85%29.aspx) function.

{% qna %}
Q: performance counter frequency of operating system
A: 2938672 hertz
{% endqna %}

# performance counter of &lt;operating system&gt; : integer

Returns the current 64-bit performance counter value. This value comes from the [QueryPerformanceCounter](https://msdn.microsoft.com/en-us/library/windows/desktop/ms644904%28v=vs.85%29.aspx) function.

{% qna %}
Q: performance counter of operating system
A: 11657096717
{% endqna %}

# platform id of &lt;operating system&gt; : integer

Returns the `dwPlatformId` as returned by the [GetVersionEx](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724451%28v=vs.85%29.aspx) function. Possible values are 1 for Win9x and 2 for WinNT.

{% qna %}
Q: platform id of operating system
A: 2
{% endqna %}

# product info numeric of &lt;operating system&gt; : integer

Returns the result of the [GetProductInfo](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724358%28v=vs.85%29.aspx) function. The inspector only provides meaningful results for Windows Vista and newer versions of the OS.

{% qna %}
Q: (product info numeric of it, name of it) of operating system
A: 6, Win8.1
{% endqna %}

# product info string of &lt;operating system&gt; : string

Returns a string derived from the [GetProductInfo](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724358%28v=vs.85%29.aspx) function. Some example values are &#39;Business&#39;, &#39;Cluster Server&#39;, &#39;Enterprise&#39;, &#39;Home&#39;, etc.

{% qna %}
Q: (product info string of it, name of it) of operating system
A: Business, Win8.1
{% endqna %}

# product type of &lt;operating system&gt; : operating system product type

Returns the product type of the operating system, which includes Workstations, Domain Controllers and Servers.

# release of &lt;operating system&gt; : string

Information about the release of the operating system, formatted as a &lt;version&gt; on the Macintosh, but a &lt;string&gt; on UNIX and Windows.

# release of &lt;operating system&gt; : version

Returns the release version of operating system.

# releaseid of &lt;operating system&gt; : string

Returns the "ReleaseId" of the Windows operating system which indicates the update level. This is also included in the base string representation of the &lt;operating system&gt; inspector. A value is returned only if the "ReleaseId" is defined on the operating system.

# service pack &lt;string&gt; of &lt;operating system&gt; : service pack

Returns the service pack that matches the string in the format "base-tl-sp-date". For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be "5300-06-03-0732". Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

# service pack major version of &lt;operating system&gt; : integer

Returns the major version number of the current service pack of the specified OS.

{% qna %}
Q: (service pack major version of it, name of it) of operating system
A: 0, Win8.1
{% endqna %}

# service pack minor version of &lt;operating system&gt; : integer

Returns the minor version number of the current service pack of the specified OS.

{% qna %}
Q: (service pack minor version of it, name of it) of operating system
A: 0, Win8.1
{% endqna %}

# service pack of &lt;operating system&gt; : service pack

Returns all service packs

# suite mask of &lt;operating system&gt; : operating system suite mask

Returns the bit-mapped suite mask for the operating system, which contains further fine-grain information about the version.

# technology level &lt;string&gt; of &lt;operating system&gt; : technology level

Returns the technology level that matches the string in the format "base-tl". For example, AIX 5.3 at technology level 6 is "5300-06".

# technology level of &lt;operating system&gt; : technology level

Returns all technology levels.

# unix of &lt;operating system&gt; : boolean

Returns `True` if the local computer is a UNIX system.

{% qna %}
Q: (unix of it, name of it) of operating system
A: True, Linux Ubuntu 14.04.2 LTS
{% endqna %}

{% qna %}
Q: (unix of it, name of it) of operating system
A: False, Mac OS X
{% endqna %}

{% qna %}
Q: (unix of it, name of it) of operating system
A: False, Win8.1
{% endqna %}

# update level of &lt;operating system&gt; : integer

Returns the minor version of the operating system.

{% qna %}
Q: (update level of it, name of it) of operating system
A: 4, Linux Ubuntu 14.04.2 LTS
{% endqna %}

# uptime of &lt;operating system&gt; : time interval

Returns a time interval that represents the elapsed time since the operating system was last booted.

**Note:** Depending on the computer, this may not include time spent in hibernation.

{% qna %}
Q: uptime of operating system
A: 12 days, 18:10:01.642793
{% endqna %}

# uuid of &lt;operating system&gt; : uuid

Returns the UUID (Universally Unique Identifier) of the operating system.

**For AIX**

This property returns a UUID in the AIX Object Data Manager (ODM) Customized Attribute entry. You can get the attribute by performing the ODM query ``attribute=os_uuid and name=sys0``.

Alternatively, you can use the ODM inspector with the Relevance ``uuid (attribute value of customized attribute "attribute=os_uuid" of odm)`` to generate the UUID.

If the AIX installation does not have an operating system UUID already set, then a Relevance check of ``exists uuid of operating system`` evaluates to false.

**For Solaris**

For Solaris, the operating system UUID is associated with a zone. Every configured zone has a UUID that is returned by the inspector.

A Relevance check of ``exists uuid of operating system`` evaluates to false, if:

- the Solaris installation does not have a configured zone
- the Relevance check is done in the global zone

# version of &lt;operating system&gt; : version

Returns the version of the operating system.

{% qna %}
Q: (version of it, name of it) of operating system
A: 10.10.2, Mac OS X
{% endqna %}

# virtual machine of &lt;operating system&gt; : boolean

No documentation exists.

# windows of &lt;operating system&gt; : boolean

Returns `True` if the computer is running Windows.

{% qna %}
Q: (windows of it, name of it) of operating system
A: True, Win8.1
{% endqna %}

{% qna %}
Q: (windows of it, name of it) of operating system
A: False, Mac OS X
{% endqna %}

{% qna %}
Q: (windows of it, name of it) of operating system
A: False, Linux Ubuntu 14.04.2 LTS
{% endqna %}

# x32 of &lt;operating system&gt; : boolean

Returns `True` if the operating system is 32-bit.

{% qna %}
Q: x32 of operating system
A: False
{% endqna %}

# x64 of &lt;operating system&gt; : boolean

Returns `True` if the operating system is 64-bit.

{% qna %}
Q: x64 of operating system
A: True
{% endqna %}

# &lt;operating system&gt; as string : string

Returns a string containing the name of the operating system concatenated with the release.

{% qna %}
Q: operating system as string
A: Mac OS X 10.10.2
{% endqna %}
