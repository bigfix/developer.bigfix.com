# bes user

The &lt;bes user&gt; inspectors let you keep track of the users authorized to use the BES Console. You can iterate over the users, producing lists containing information such as the name and authorization level.

# action site of [bes user]

If the user is a master operator, this inspector returns the Master Action site.  Otherwise, it returns the operator site of the user.  For example, &quot;number of subscribed computers of action site of current console user&quot;.Example: number of subscribed computers of action site of current console user - Returns the number of computers currently subscribed to the specified user&#39;s Action site.

# administered computer of [bes user]

Iterates and returns a list of the computers that are administered by the specified BES user.Example: names of administered computers of bes user whose (name of it is &quot;Joe&quot;) - Returns the list of computers currently administered by the BES User named Joe.

# administered computer set of [bes user]

Returns the set of computers that are administerable by the specified BES user.

# administrator [bes computer] of [bes user]

Returns `True` if the specified user is an administrator of the given computers.

# approver role of [bes user]

No documentation exists.

# can create actions flag of [bes user]

No documentation exists.

# can lock flag of [bes user]

No documentation exists.

# can send multiple refresh flag of [bes user]

No documentation exists.

# creation time of [bes user]

Returns the time when the specified user was created.

# custom content flag of [bes user]

Returns `True` if the user has been granted the privilege to author custom content/actions.

# distinguished name of [bes user]

No documentation exists.

# issued action of [bes user]

Returns all actions, including hidden actions, issued by the specified user.

# issued action set of [bes user]

Returns all actions, including hidden actions, issued by the specified user. This list is formatted as a mathematical set.

# issued computer group of [bes user]

Returns all computer groups issued by the specified user.

# issued computer group set of [bes user]

Returns all computer group sets issued by the specified user.

# issued fixlet of [bes user]

Returns all Fixlet messages issued by the specified user.

# issued fixlet set of [bes user]

Returns all Fixlet message sets issued by the specified user.

# last login time of [bes user]

Returns the time of the specified user&#39;s most recent database login.

# ldap directory of [bes user]

No documentation exists.

# link [html] of [bes user]

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified user document (in the BES Console) or its description page (in Web Reports).

# link [string] of [bes user]

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given user document (in the BES Console) or description page (in Web Reports).

# link href of [bes user]

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes user&gt;). Note that link href returns a normal string, not an HTML string.

# link of [bes user]

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified user document (in the BES Console) or its description page (in Web Reports).

# master flag of [bes user]

Returns `True` if the user is a master administrator.

# masthead operator name of [bes user]

No documentation exists.

# name of [bes user]

Returns the name of the specified BES user (database login name).

# operator site of [bes user]

This inspector returns the BES site object for the given (non-master) user. If the user is a Master Operator, this inspector will throw NoSuchObject.

# restartandshutdown actionscript privilege allowboth flag of [bes user]

No documentation exists.

# restartandshutdown actionscript privilege allowrestartonly flag of [bes user]

No documentation exists.

# restartandshutdown actionscript privilege none flag of [bes user]

No documentation exists.

# restartandshutdown postaction privilege allowboth flag of [bes user]

No documentation exists.

# restartandshutdown postaction privilege allowrestartonly flag of [bes user]

No documentation exists.

# restartandshutdown postaction privilege none flag of [bes user]

No documentation exists.

# role of [bes user]

No documentation exists.

# role set of [bes user]

No documentation exists.

# set of [bes user]

Converts the specified BES User list to a set that can be arithmetically manipulated.

# show other action flag of [bes user]

No documentation exists.

# unique value of [bes user]

Returns the unique values and counts of a given list of &lt;bes user&gt; types, removing duplicates and sorting by value.

# unmanagedasset privilege scanpoint flag of [bes user]

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns `True` if the &quot;scanpoint only&quot; option is set for the specified user.

# unmanagedasset privilege showall flag of [bes user]

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns `True` if all assets are visible for the specified user.

# unmanagedasset privilege shownone flag of [bes user]

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns `True` if no assets are visible the specified user.
