---
title: general
---

## distinguished name component

The &lt;distinguished name component&gt; inspectors refer to the various components of the distinguished name (DN) as defined by the Microsoft Active Directory API. A DN is a sequence of relative distinguished names (RDN) connected by commas. An RDN is an attribute with an associated value in the form attribute=value; normally expressed in a UTF-8 string format. For more information, see the MSDN article on Distinguished Names.

#### value of &lt;distinguished name component&gt; : string

Returns the value of the specified component of the distinguished name.Example: value of component 0 of distinguished name &quot;CN=BIGFOOT,CN=Computers,DC=devlan,DC=bigfix,DC=com&quot; - Returns &quot;BIGFOOT&quot;.

#### type of &lt;distinguished name component&gt; : string

Returns the type of the specified component of the distinguished name.Example: (type of it, value of it) of components of distinguished name &quot;CN=BIGFOOT,CN=Computers,DC=devlan,DC=bigfix,DC=com&quot; - Returns the list: CN, BIGFOOTCN, ComputersDC, devlanDC, bigfixDC, com.

## distinguished name

The &lt;distinguished name&gt; inspectors refer to the distinguished name (DN) as defined by the Microsoft Active Directory service. See the core inspector guide for a list of properties of a distinguished name object. 

#### component of &lt;distinguished name&gt; : distinguished name component

Used as a plural, returns a list of the components of the given distinguished name.

#### component &lt;integer&gt; of &lt;distinguished name&gt; : distinguished name component

Returns the component (as specified by &lt;integer&gt;) of the distinguished name.

## active directory server

The &lt;active directory server&gt; objects are the base types that allows access to the AD objects such as local machine and local user.

#### local computer of &lt;active directory server&gt; : active directory local computer

Represents your computer within the Active Directory.

#### logged on user of &lt;active directory server&gt; : active directory local user

Returns the Active Directory local user object which allows inspection of AD properties for the currently logged in users of the specified AD server.

#### logged on user &lt;string&gt; of &lt;active directory server&gt; : active directory local user

Returns the Active Directory local user object which allows inspection of AD properties for the specified currently logged in user.

#### local user of &lt;active directory server&gt; : active directory local user

Returns the local users associated with the specified active directory server.

#### local user &lt;string&gt; of &lt;active directory server&gt; : active directory local user

Returns the named local user of the specified active directory server.

#### logged on group &lt;string&gt; of &lt;active directory server&gt; : active directory group

Returns the named group if a logged on active directory user has this group membership

#### local group &lt;string&gt; of &lt;active directory server&gt; : active directory group

Returns the named group if a local active directory user has this group membership

## active directory local computer

The &lt;active directory local computer&gt; objects are the Active Directory inspectors for the local computer. Caching (using XML files to represent the last data update) limits how often the client refreshes the AD data, reducing network traffic. These inspectors require network access to work. If no network connection is available and the information is not cached, then the inspectors will return NoSuchObject. AD user requests are limited to users that are either cached or have a local profile on the specified machine.

#### sample time of &lt;active directory local computer&gt; : time

Returns the time that the specified item was sampled from Active Directory.Example: sample time of local computer of active directory - Returns a time corresponding to the specified sample time.

#### distinguished name of &lt;active directory local computer&gt; : string

Returns the computer&#39;s fully qualified active directory name in the distinguished name format, for instance, &#39;CN=ALBATROSS, CN=Computers, DC=bigfix, DC=com&#39;.Example: distinguished name of local computer of active directory - Returns CN=mymachinename,CN=Computers,DC=bigfix,DC=com.

#### distinguished name error message of &lt;active directory local computer&gt; : string

Active Directory error if unable to get the distinguished name (this is for debugging purposes).

#### groups error message of &lt;active directory local computer&gt; : string

Returns the error message (if any) received when trying to get the groups for the specified active directory local computer.

#### group of &lt;active directory local computer&gt; : active directory group

Returns a list of the active directory groups for the specified local user.

#### group &lt;string&gt; of &lt;active directory local computer&gt; : active directory group

Returns the Active Directory group corresponding to the specified group of the given AD local computer.

#### dns domainname of &lt;active directory local computer&gt; : string

No documentation exists for this property.

#### netbios domainname of &lt;active directory local computer&gt; : string

No documentation exists for this property.

## active directory local user

The &lt;active directory local user&gt; objects are the inspectors for the AD local users. They include the distinguished name and groups.

#### sample time of &lt;active directory local user&gt; : time

Returns the last sample time for the specified active directory local user.

#### name of &lt;active directory local user&gt; : string

Returns the name (as a string) of the specified Active Directory local user for the local machine.

#### groups error message of &lt;active directory local user&gt; : string

Returns the error message (if any) received when trying to get the groups for the specified active directory local user.

#### group of &lt;active directory local user&gt; : active directory group

Returns a list of the active directory groups for the specified local computer.

#### group &lt;string&gt; of &lt;active directory local user&gt; : active directory group

Returns the Active Directory group corresponding to the specified group of the given AD local user.

#### distinguished name of &lt;active directory local user&gt; : string

Returns the distinguished name (as a string) of the specified active directory local user.

#### distinguished name error message of &lt;active directory local user&gt; : string

Returns the error message (if any) received when trying to get the distinguished name for the specified active directory local user.

#### dns domainname of &lt;active directory local user&gt; : string

No documentation exists for this property.

#### netbios domainname of &lt;active directory local user&gt; : string

No documentation exists for this property.

#### domain of &lt;active directory local user&gt; : string

No documentation exists for this property.

#### domain user of &lt;active directory local user&gt; : user

No documentation exists for this property.

## active directory group

The &lt;active directory group&gt; inspectors constitute the base types that allow access to the AD group information, such as distinguished name.

#### sid of &lt;active directory group&gt; : security identifier

Returns the security identifier object corresponding to the specified Active Directory groups for the local machine.

#### sample time of &lt;active directory group&gt; : time

Returns the last sample time for the specified active directory group.

#### name of &lt;active directory group&gt; : string

Returns the name (as strings) of the specified Active Directory group for the local machine.

#### distinguished name of &lt;active directory group&gt; : string

Returns the distinguished name (as a string) of the specified active directory group.

#### distinguished name error message of &lt;active directory group&gt; : string

Returns the error message (if any) received when trying to get the distinguished name for the specified active directory group.

