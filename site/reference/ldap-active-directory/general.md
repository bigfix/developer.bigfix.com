---
title: general
---

{% type distinguished name component%}

The &lt;distinguished name component&gt; inspectors refer to the various components of the distinguished name (DN) as defined by the Microsoft Active Directory API. A DN is a sequence of relative distinguished names (RDN) connected by commas. An RDN is an attribute with an associated value in the form attribute=value; normally expressed in a UTF-8 string format. For more information, see the MSDN article on Distinguished Names.

#### Properties

{% property value of <distinguished name component> %}

Returns the value of the specified component of the distinguished name.Example: value of component 0 of distinguished name &quot;CN=BIGFOOT,CN=Computers,DC=devlan,DC=bigfix,DC=com&quot; - Returns &quot;BIGFOOT&quot;.

{% property type of <distinguished name component> %}

Returns the type of the specified component of the distinguished name.Example: (type of it, value of it) of components of distinguished name &quot;CN=BIGFOOT,CN=Computers,DC=devlan,DC=bigfix,DC=com&quot; - Returns the list: CN, BIGFOOTCN, ComputersDC, devlanDC, bigfixDC, com.

{% type distinguished name%}

The &lt;distinguished name&gt; inspectors refer to the distinguished name (DN) as defined by the Microsoft Active Directory service. See the core inspector guide for a list of properties of a distinguished name object. 

#### Properties

{% property component of <distinguished name> %}

Used as a plural, returns a list of the components of the given distinguished name.

{% property component <integer> of <distinguished name> %}

Returns the component (as specified by &lt;integer&gt;) of the distinguished name.

{% type active directory server%}

The &lt;active directory server&gt; objects are the base types that allows access to the AD objects such as local machine and local user.

#### Properties

{% property local computer of <active directory server> %}

Represents your computer within the Active Directory.

{% property logged on user of <active directory server> %}

Returns the Active Directory local user object which allows inspection of AD properties for the currently logged in users of the specified AD server.

{% property logged on user <string> of <active directory server> %}

Returns the Active Directory local user object which allows inspection of AD properties for the specified currently logged in user.

{% property local user of <active directory server> %}

Returns the local users associated with the specified active directory server.

{% property local user <string> of <active directory server> %}

Returns the named local user of the specified active directory server.

{% property logged on group <string> of <active directory server> %}

Returns the named group if a logged on active directory user has this group membership

{% property local group <string> of <active directory server> %}

Returns the named group if a local active directory user has this group membership

{% type active directory local computer%}

The &lt;active directory local computer&gt; objects are the Active Directory inspectors for the local computer. Caching (using XML files to represent the last data update) limits how often the client refreshes the AD data, reducing network traffic. These inspectors require network access to work. If no network connection is available and the information is not cached, then the inspectors will return NoSuchObject. AD user requests are limited to users that are either cached or have a local profile on the specified machine.

#### Properties

{% property sample time of <active directory local computer> %}

Returns the time that the specified item was sampled from Active Directory.Example: sample time of local computer of active directory - Returns a time corresponding to the specified sample time.

{% property distinguished name of <active directory local computer> %}

Returns the computer&#39;s fully qualified active directory name in the distinguished name format, for instance, &#39;CN=ALBATROSS, CN=Computers, DC=bigfix, DC=com&#39;.Example: distinguished name of local computer of active directory - Returns CN=mymachinename,CN=Computers,DC=bigfix,DC=com.

{% property distinguished name error message of <active directory local computer> %}

Active Directory error if unable to get the distinguished name (this is for debugging purposes).

{% property groups error message of <active directory local computer> %}

Returns the error message (if any) received when trying to get the groups for the specified active directory local computer.

{% property group of <active directory local computer> %}

Returns a list of the active directory groups for the specified local user.

{% property group <string> of <active directory local computer> %}

Returns the Active Directory group corresponding to the specified group of the given AD local computer.

{% property dns domainname of <active directory local computer> %}

No documentation exists for this property.

{% property netbios domainname of <active directory local computer> %}

No documentation exists for this property.

{% type active directory local user%}

The &lt;active directory local user&gt; objects are the inspectors for the AD local users. They include the distinguished name and groups.

#### Properties

{% property sample time of <active directory local user> %}

Returns the last sample time for the specified active directory local user.

{% property name of <active directory local user> %}

Returns the name (as a string) of the specified Active Directory local user for the local machine.

{% property groups error message of <active directory local user> %}

Returns the error message (if any) received when trying to get the groups for the specified active directory local user.

{% property group of <active directory local user> %}

Returns a list of the active directory groups for the specified local computer.

{% property group <string> of <active directory local user> %}

Returns the Active Directory group corresponding to the specified group of the given AD local user.

{% property distinguished name of <active directory local user> %}

Returns the distinguished name (as a string) of the specified active directory local user.

{% property distinguished name error message of <active directory local user> %}

Returns the error message (if any) received when trying to get the distinguished name for the specified active directory local user.

{% property dns domainname of <active directory local user> %}

No documentation exists for this property.

{% property netbios domainname of <active directory local user> %}

No documentation exists for this property.

{% property domain of <active directory local user> %}

No documentation exists for this property.

{% property domain user of <active directory local user> %}

No documentation exists for this property.

{% type active directory group%}

The &lt;active directory group&gt; inspectors constitute the base types that allow access to the AD group information, such as distinguished name.

#### Properties

{% property sid of <active directory group> %}

Returns the security identifier object corresponding to the specified Active Directory groups for the local machine.

{% property sample time of <active directory group> %}

Returns the last sample time for the specified active directory group.

{% property name of <active directory group> %}

Returns the name (as strings) of the specified Active Directory group for the local machine.

{% property distinguished name of <active directory group> %}

Returns the distinguished name (as a string) of the specified active directory group.

{% property distinguished name error message of <active directory group> %}

Returns the error message (if any) received when trying to get the distinguished name for the specified active directory group.

