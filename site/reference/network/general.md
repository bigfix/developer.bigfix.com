---
title: general
---

{% type connection %}

The &lt;connection&gt; objects are used to query your connections. These are all properties of the Internet Connection Firewall, as returned in the NETCON_PROPERTIES structure.

#### Properties of connection

{% property device name of <connection> %}

Returns the name of the device associated with the specified connection.

{% property firewall of <connection> %}

Returns the internet connection firewall object corresponding to the specified connection.

{% property guid of <connection> %}

Returns the globally-unique identifier (GUID) for the specified connection.

{% property media type of <connection> %}

Returns the media type of for the specified connection.

{% property name of <connection> %}

Returns the name of the specified connection.

{% property status of <connection> %}

Returns the status of the specified connection.

{% type connection status %}

The &lt;connection status&gt; objects return information about the status of your connections.

{% type ip version %}

The &lt;ip version&gt; inspectors distinguish between ipv6 and ipv4. The integer representations of these are chosen to meet existing standards.

#### Casts of ip version

{% cast <ip version> as string %}

Converts an IP version to a string.

{% type media type %}

The &lt;media type&gt; objects allow you to inspect the media type of your Internet Connection Firewall type connection, as returned in the NETCON_PROPERTIES structure.

{% type network share %}

The network share inspector does not work on Windows 95/98/Me. The password and permission properties are relevant only for shares using share-level security. User-level security is given by the security descriptor. The use limit property will throw NoSuchObject if use is unlimited.

#### Properties of network share

{% property attribute permission of <network share> %}

Returns TRUE if permission is granted to modify the attributes of the shared resource (such as the date and time when a file was last modified).

{% property comment of <network share> %}

Returns a string specifying an optional comment about the shared resource.

{% property create permission of <network share> %}

Returns TRUE if permission is granted to create an instance of a shared resource (such as a file).

{% property delete permission of <network share> %}

Returns TRUE if permission is granted to delete the resource.

{% property execute permission of <network share> %}

Returns TRUE if permission is granted to execute the resource.

{% property name of <network share> %}

Returns a string specifying the name of the specified shared resource.

{% property password of <network share> %}

A string that specifies the share&#39;s password (when the server is running with share-level security). Note that the Windows Server 2003 family, Windows XP, Windows 2000, and Windows NT do not support share-level security.

{% property path of <network share> %}

A string containing the local path for the shared resource.

{% property permission permission of <network share> %}

Returns TRUE if permission is granted to modify the permissions (read, write, create, execute, and delete) for the specified network share.

{% property read permission of <network share> %}

Returns TRUE if permission is granted to read data from a resource and, by default, to execute the specified network share.

{% property security descriptor of <network share> %}

Specifies the security descriptor associated with the specified network share.

{% property type of <network share> %}

Specifies an integer value that indicates the type of share. (See the Microsoft document on SHARE_INFO_502).

{% property use count of <network share> %}

Specifies an integer value that indicates the number of current connections to the specified network share.

{% property use limit of <network share> %}

Specifies an integer value indicating the maximum number of concurrent connections that the shared resource can accommodate.

{% property write permission of <network share> %}

Returns TRUE if permission is granted to write data to the specified network share.

{% type route %}

No documentation exists for this type.

#### Properties of route

{% property blackhole flag of <route> %}

No documentation exists for this property.

{% property broadcast flag of <route> %}

No documentation exists for this property.

{% property cloned of <route> %}

No documentation exists for this property.

{% property cloning flag of <route> %}

No documentation exists for this property.

{% property condemned flag of <route> %}

No documentation exists for this property.

{% property default of <route> %}

No documentation exists for this property.

{% property delclone flag of <route> %}

No documentation exists for this property.

{% property destination of <route> %}

No documentation exists for this property.

{% property destination string of <route> %}

No documentation exists for this property.

{% property destination type of <route> %}

No documentation exists for this property.

{% property done flag of <route> %}

No documentation exists for this property.

{% property dynamic flag of <route> %}

No documentation exists for this property.

{% property expiration time of <route> %}

No documentation exists for this property.

{% property flags string of <route> %}

No documentation exists for this property.

{% property gateway flag of <route> %}

No documentation exists for this property.

{% property gateway of <route> %}

No documentation exists for this property.

{% property gateway string of <route> %}

No documentation exists for this property.

{% property gateway type of <route> %}

No documentation exists for this property.

{% property host flag of <route> %}

No documentation exists for this property.

{% property ifref flag of <route> %}

No documentation exists for this property.

{% property ifscope flag of <route> %}

No documentation exists for this property.

{% property interface of <route> %}

No documentation exists for this property.

{% property ip family of <route> %}

No documentation exists for this property.

{% property irtt of <route> %}

No documentation exists for this property.

{% property llinfo flag of <route> %}

No documentation exists for this property.

{% property local flag of <route> %}

No documentation exists for this property.

{% property mask of <route> %}

No documentation exists for this property.

{% property metric of <route> %}

No documentation exists for this property.

{% property modified flag of <route> %}

No documentation exists for this property.

{% property mtu of <route> %}

No documentation exists for this property.

{% property multicast flag of <route> %}

No documentation exists for this property.

{% property netstat flag of <route> %}

No documentation exists for this property.

{% property pinned flag of <route> %}

No documentation exists for this property.

{% property prcloning flag of <route> %}

No documentation exists for this property.

{% property proto1 flag of <route> %}

No documentation exists for this property.

{% property proto2 flag of <route> %}

No documentation exists for this property.

{% property proto3 flag of <route> %}

No documentation exists for this property.

{% property proxy flag of <route> %}

No documentation exists for this property.

{% property reference of <route> %}

No documentation exists for this property.

{% property reject flag of <route> %}

No documentation exists for this property.

{% property router flag of <route> %}

No documentation exists for this property.

{% property seconds to expiration of <route> %}

No documentation exists for this property.

{% property sent packet count of <route> %}

No documentation exists for this property.

{% property static flag of <route> %}

No documentation exists for this property.

{% property up flag of <route> %}

No documentation exists for this property.

{% property wascloned flag of <route> %}

No documentation exists for this property.

{% property window of <route> %}

No documentation exists for this property.

{% property xresolve flag of <route> %}

No documentation exists for this property.

{% type routing table %}

No documentation exists for this type.

#### Properties of routing table

{% property route of <routing table> %}

No documentation exists for this property.

