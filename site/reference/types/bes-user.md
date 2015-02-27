# type: bes user

The &lt;bes user&gt; inspectors let you keep track of the users authorized to use the BES Console. You can iterate over the users, producing lists containing information such as the name and authorization level.

# action site of &lt;bes user&gt;

If the user is a master operator, this inspector returns the Master Action site.  Otherwise, it returns the operator site of the user.  For example, &quot;number of subscribed computers of action site of current console user&quot;.Example: number of subscribed computers of action site of current console user - Returns the number of computers currently subscribed to the specified user&#39;s Action site.

# administered computer of &lt;bes user&gt;

Iterates and returns a list of the computers that are administered by the specified BES user.Example: names of administered computers of bes user whose (name of it is &quot;Joe&quot;) - Returns the list of computers currently administered by the BES User named Joe.

# administered computer set of &lt;bes user&gt;

Returns the set of computers that are administerable by the specified BES user.

# administrator &lt;bes computer&gt; of &lt;bes user&gt;

Returns `True` if the specified user is an administrator of the given computers.

# approver role of &lt;bes user&gt;

No documentation exists.

# can create actions flag of &lt;bes user&gt;

No documentation exists.

# can lock flag of &lt;bes user&gt;

No documentation exists.

# can send multiple refresh flag of &lt;bes user&gt;

No documentation exists.

# creation time of &lt;bes user&gt;

Returns the time when the specified user was created.

# custom content flag of &lt;bes user&gt;

Returns `True` if the user has been granted the privilege to author custom content/actions.

# distinguished name of &lt;bes user&gt;

No documentation exists.

# issued action of &lt;bes user&gt;

Returns all actions, including hidden actions, issued by the specified user.

# issued action set of &lt;bes user&gt;

Returns all actions, including hidden actions, issued by the specified user. This list is formatted as a mathematical set.

# issued computer group of &lt;bes user&gt;

Returns all computer groups issued by the specified user.

# issued computer group set of &lt;bes user&gt;

Returns all computer group sets issued by the specified user.

# issued fixlet of &lt;bes user&gt;

Returns all Fixlet messages issued by the specified user.

# issued fixlet set of &lt;bes user&gt;

Returns all Fixlet message sets issued by the specified user.

# last login time of &lt;bes user&gt;

Returns the time of the specified user&#39;s most recent database login.

# ldap directory of &lt;bes user&gt;

No documentation exists.

# link &lt;html&gt; of &lt;bes user&gt;

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified user document (in the BES Console) or its description page (in Web Reports).

# link &lt;string&gt; of &lt;bes user&gt;

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given user document (in the BES Console) or description page (in Web Reports).

# link href of &lt;bes user&gt;

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes user&gt;). Note that link href returns a normal string, not an HTML string.

# link of &lt;bes user&gt;

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified user document (in the BES Console) or its description page (in Web Reports).

# master flag of &lt;bes user&gt;

Returns `True` if the user is a master administrator.

# masthead operator name of &lt;bes user&gt;

No documentation exists.

# name of &lt;bes user&gt;

Returns the name of the specified BES user (database login name).

# operator site of &lt;bes user&gt;

This inspector returns the BES site object for the given (non-master) user. If the user is a Master Operator, this inspector will throw NoSuchObject.

# restartandshutdown actionscript privilege allowboth flag of &lt;bes user&gt;

No documentation exists.

# restartandshutdown actionscript privilege allowrestartonly flag of &lt;bes user&gt;

No documentation exists.

# restartandshutdown actionscript privilege none flag of &lt;bes user&gt;

No documentation exists.

# restartandshutdown postaction privilege allowboth flag of &lt;bes user&gt;

No documentation exists.

# restartandshutdown postaction privilege allowrestartonly flag of &lt;bes user&gt;

No documentation exists.

# restartandshutdown postaction privilege none flag of &lt;bes user&gt;

No documentation exists.

# role of &lt;bes user&gt;

No documentation exists.

# role set of &lt;bes user&gt;

No documentation exists.

# set of &lt;bes user&gt;

Converts the specified BES User list to a set that can be arithmetically manipulated.

# show other action flag of &lt;bes user&gt;

No documentation exists.

# unique value of &lt;bes user&gt;

Returns the unique values and counts of a given list of &lt;bes user&gt; types, removing duplicates and sorting by value.

# unmanagedasset privilege scanpoint flag of &lt;bes user&gt;

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns `True` if the &quot;scanpoint only&quot; option is set for the specified user.

# unmanagedasset privilege showall flag of &lt;bes user&gt;

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns `True` if all assets are visible for the specified user.

# unmanagedasset privilege shownone flag of &lt;bes user&gt;

When you create or edit a user, you specify whether they can see all unmanaged assets, none, or only those that were scanned by a computer which the user manages. This inspector returns `True` if no assets are visible the specified user.

# &lt;bes user&gt; = &lt;bes user&gt;

Compares two BES Users.
