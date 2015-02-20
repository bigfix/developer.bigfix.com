---
title: users
---

## bes user with multiplicity

The &lt;bes user with multiplicity&gt; inspectors deal with arrays of BES users, allowing you to extract unique users and count them.

#### multiplicity of &lt;bes user with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes user&gt; types.

## bes user set

The &lt;bes user set&gt; inspectors iterate over the current set of BES users and package them as a mathematical set, suitable for further set manipulation.

#### union of &lt;bes user set&gt; : bes user set

Returns the union of multiple BES User sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### size of &lt;bes user set&gt; : integer

Returns the number of unique BES Users in the specified set.

#### intersection of &lt;bes user set&gt; : bes user set

Returns the intersection of multiple BES User sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes user set&gt; : bes user

Returns the unique elements of the specified &lt;bes user set&gt;, removing duplicates and sorting by value.

## bes user

The &lt;bes user&gt; inspectors let you keep track of the users authorized to use the BES Console. You can iterate over the users, producing lists containing information such as the name and authorization level.

#### unmanagedasset privilege shownone flag of &lt;bes user&gt; : boolean

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns TRUE if no assets are visible the specified user.

#### unmanagedasset privilege showall flag of &lt;bes user&gt; : boolean

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns TRUE if all assets are visible for the specified user.

#### unmanagedasset privilege scanpoint flag of &lt;bes user&gt; : boolean

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns TRUE if the &quot;scanpoint only&quot; option is set for the specified user.

#### unique value of &lt;bes user&gt; : bes user with multiplicity

Returns the unique values and counts of a given list of &lt;bes user&gt; types, removing duplicates and sorting by value.

#### set of &lt;bes user&gt; : bes user set

Converts the specified BES User list to a set that can be arithmetically manipulated.

#### operator site of &lt;bes user&gt; : bes site

This inspector returns the BES site object for the given (non-master) user. If the user is a Master Operator, this inspector will throw NoSuchObject.

#### name of &lt;bes user&gt; : string

Returns the name of the specified BES user (database login name).

#### master flag of &lt;bes user&gt; : boolean

Returns TRUE if the user is a master administrator.

#### link of &lt;bes user&gt; : html

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified user document (in the BES Console) or its description page (in Web Reports).

#### link href of &lt;bes user&gt; : string

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes user&gt;). Note that link href returns a normal string, not an HTML string.

#### link &lt;string&gt; of &lt;bes user&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given user document (in the BES Console) or description page (in Web Reports).

#### link &lt;html&gt; of &lt;bes user&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified user document (in the BES Console) or its description page (in Web Reports).

#### last login time of &lt;bes user&gt; : time

Returns the time of the specified user&#39;s most recent database login.

#### issued fixlet set of &lt;bes user&gt; : bes fixlet set

Returns all Fixlet message sets issued by the specified user.

#### issued fixlet of &lt;bes user&gt; : bes fixlet

Returns all Fixlet messages issued by the specified user.

#### issued computer group set of &lt;bes user&gt; : bes computer group set

Returns all computer group sets issued by the specified user.

#### issued computer group of &lt;bes user&gt; : bes computer group

Returns all computer groups issued by the specified user.

#### issued action set of &lt;bes user&gt; : bes action set

Returns all actions, including hidden actions, issued by the specified user. This list is formatted as a mathematical set.

#### issued action of &lt;bes user&gt; : bes action

Returns all actions, including hidden actions, issued by the specified user.

#### custom content flag of &lt;bes user&gt; : boolean

Returns TRUE if the user has been granted the privilege to author custom content/actions.

#### creation time of &lt;bes user&gt; : time

Returns the time when the specified user was created.

#### administrator &lt;bes computer&gt; of &lt;bes user&gt; : boolean

Returns TRUE if the specified user is an administrator of the given computers.

#### administered computer set of &lt;bes user&gt; : bes computer set

Returns the set of computers that are administerable by the specified BES user.

#### administered computer of &lt;bes user&gt; : bes computer

Iterates and returns a list of the computers that are administered by the specified BES user.Example: names of administered computers of bes user whose (name of it is &quot;Joe&quot;) - Returns the list of computers currently administered by the BES User named Joe.

#### action site of &lt;bes user&gt; : bes site

If the user is a master operator, this inspector returns the Master Action site.  Otherwise, it returns the operator site of the user.  For example, &quot;number of subscribed computers of action site of current console user&quot;.Example: number of subscribed computers of action site of current console user - Returns the number of computers currently subscribed to the specified user&#39;s Action site.

#### role set of &lt;bes user&gt; : bes role set

No documentation exists for this property.

#### role of &lt;bes user&gt; : bes role

No documentation exists for this property.

#### masthead operator name of &lt;bes user&gt; : string

No documentation exists for this property.

#### ldap directory of &lt;bes user&gt; : bes ldap directory

No documentation exists for this property.

#### distinguished name of &lt;bes user&gt; : string

No documentation exists for this property.

#### approver role of &lt;bes user&gt; : bes role

No documentation exists for this property.

#### show other action flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### restartandshutdown postaction privilege none flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### restartandshutdown postaction privilege allowrestartonly flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### restartandshutdown postaction privilege allowboth flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### restartandshutdown actionscript privilege none flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### restartandshutdown actionscript privilege allowrestartonly flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### restartandshutdown actionscript privilege allowboth flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### can send multiple refresh flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### can lock flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

#### can create actions flag of &lt;bes user&gt; : boolean

No documentation exists for this property.

