---
title: general
---

{% type user%}

The &lt;user&gt; inspectors allow you to list properties of all users, whether they are logged in or not.

#### Properties

{% property tty of <user> %}

Returns the tty of the user.

{% property name of <user> %}

Returns the name of all the specified user, whether logged in or not. On Linux or UNIX platforms, returns the name of all logged on users.

{% property primary group id of <user> %}

On a Mac, this inspector returns the dsAttrTypeStandard:PrimaryGroupID attribute for the specified user.Note: On a Windows computer, this inspector returns the gid as an integer, not a string.

{% property id of <user> %}

Returns the dsAttrTypeStandard:UniqueID attribute of the specified user.

{% property home directory of <user> %}

On a Mac, this inspector returns the dsAttrTypeStandard:NFSHomeDirectory attribute of the specified user as a folder. Note: On a Windows system, this inspector has a different interpretation: it returns the directory (as a string) where the user files are stored for the specified user.

{% property attribute of <user> %}

Returns a list of attributes for the given user, logged in or not. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system.

{% property attribute <string> of <user> %}

Returns the specified named user attribute for the given user. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system.

{% property active directory user of <user> %}

Returns an &lt;active directory local user&gt; object from the specified logged-on user object. This bridges the gaps between user types when using Active Directory inspectors. It retains the domain information of the logged-on user within the user object where other user types might not.

{% property workstation trust account flag of <user> %}

Returns TRUE if the specified user&#39;s account is for a workstation or server.

{% property user privilege of <user> %}

Returns TRUE if the specified user has a privilege level of &#39;user&#39;.

{% property user id of <user> %}

Returns the specified user&#39;s RID number.

{% property user comment of <user> %}

Returns the user comments of the specified user.

{% property temporary duplicate account flag of <user> %}

Returns TRUE if this is a temporary duplicate account of the specified user.

{% property server trust account flag of <user> %}

Returns TRUE if the specified user has server trust account privileges (for a backup domain controller).

{% property server operator flag of <user> %}

Returns TRUE if the specified user has server operator privileges.

{% property script flag of <user> %}

Returns TRUE if the logon script for the specified user has been executed.

{% property profile folder of <user> %}

Returns the pathname of the folder which contains the specified user&#39;s profile.

{% property print operator flag of <user> %}

Returns TRUE if the specified user has print operator privileges.

{% property password expired of <user> %}

Returns TRUE if the specified user&#39;s password has expired.

{% property password expiration disabled flag of <user> %}

Returns TRUE if the specified user&#39;s password on this account will never expire.

{% property password change disabled flag of <user> %}

Returns TRUE if the specified user is not allowed to change his password.

{% property password age of <user> %}

Returns a time interval since the specified user&#39;s password was last changed.

{% property normal account flag of <user> %}

Returns TRUE if the specified user&#39;s account has a default account type corresponding to a typical user.

{% property no password required flag of <user> %}

Returns TRUE if no password is required for the specified user.

{% property maximum storage of <user> %}

Returns the specified user&#39;s disk quota. Will return FALSE if the user has no disk quota.

{% property logon server of <user> %}

Returns the name of the server (as a string) to which logon requests are sent for the specified user&#39;s account.

{% property logon script of <user> %}

Returns the pathname (as a string) of the specified user&#39;s logon script.

{% property logon count of <user> %}

Returns the number of times which the specified user&#39;s account has successfully logged on to the local machine.

{% property logged on user of <user> %}

Converts a user into a &#39;logged on&#39; user type -- if and only if the specified user is currently logged in.

{% property locked out flag of <user> %}

Returns TRUE if the specified user is currently locked out.

{% property last logon of <user> %}

Returns the time when the specified user last logged on.

{% property last logoff of <user> %}

Returns the time when the specified user last logged off.

{% property interdomain trust account flag of <user> %}

Returns TRUE if the given user&#39;s account stipulates that a domain should trust other domains.

{% property home directory required flag of <user> %}

Returns TRUE if a home directory is required for the specified user.

{% property home directory drive of <user> %}

Returns the name of the drive assigned to the specified user&#39;s home directory.

{% property guest privilege of <user> %}

Returns TRUE if the specified user has a privilege level of &#39;guest&#39;.

{% property full name of <user> %}

Returns the full name of the specified user.

{% property country code of <user> %}

Returns the country code of the user&#39;s preferred language.

{% property communications operator flag of <user> %}

Returns TRUE if the specified user has communications operator privileges.

{% property comment of <user> %}

Returns the comments associated with this user&#39;s account.

{% property code page of <user> %}

Returns the code page corresponding to the specified user&#39;s preferred language.

{% property bad password count of <user> %}

Returns the number of attempts to logon to the specified user account with a bad password.

{% property application parameter string of <user> %}

Returns a string used by Microsoft products to store user configuration information.

{% property allowed workstations string of <user> %}

Returns a list of workstations the specified user is allowed to login to. If this string is empty, no restrictions apply.

{% property admin privilege of <user> %}

Returns TRUE if the specified user has a privilege level of &#39;admin&#39;.

{% property accounts operator flag of <user> %}

Returns TRUE if this user has the accounts operator privilege.

{% property account expiration of <user> %}

Returns the time when the specified user&#39;s account is set to expire.

{% property account disabled flag of <user> %}

Returns TRUE if the specified user&#39;s account is disabled.

{% property sid of <user> %}

No documentation exists for this property.

{% property domain of <user> %}

No documentation exists for this property.

{% property winrt package of <user> %}

No documentation exists for this property.

{% type logged on user%}

These Windows and Macintosh inspectors return information about the currently logged-on user. With the advent of Terminal Services and Fast User Switching, these inspectors are designed to iterate over all logged on users. Windows Note: If Terminal Services are available (NT/2000/2003/XP/Vista) and enabled, these inspectors iterate over the active and disconnected sessions as returned by WTSEnumerateSessions. Disconnected sessions are those where a user logs on, but is currently inactive. On Vista, the non-interactive session 0 (used for services isolation) is not included. If Terminal Services aren&#39;t available, the ACLs on the security descriptor of the &quot;winsta0&quot; window station are examined for user logons. On Windows 9x systems, these inspectors return the user session associated with the registry value &quot;Current User&quot; of &quot;SYSTEM\CurrentControlSet\Control&quot; if it exists. Otherwise, if a shell process process such as Explorer.exe is running, they return a single session associated with an unnamed user (which occurs when the user cancels the 9x login dialog).

#### Properties

{% property session id of <logged on user> %}

Returns the session id, which uniquely identifies a logged on user session. A logged-on user is a subclass of a user, and adding the session id uniquely identifies the session.

{% property remote of <logged on user> %}

Returns TRUE if the user session is a remote terminal services connection.

{% property active of <logged on user> %}

Returns TRUE if the specified user session is active (either as a current Fast User or an active terminal services connection).

{% property sid of <logged on user> %}

Returns the Security ID (SID) of the user associated with the session&#39;s primary access token. With Windows 2003/XP/Vista, this is determined by WTSQueryUserToken. With NT4/2000 it is determined by the apparent shell process running in the given session. This inspector may fail if run in a non-privileged context. The SID does not exist under Windows 9x.

{% property name of <logged on user> %}

If Terminal Services is available and enabled under NT4/2000/2003/XP/Vista, this inspector returns the result of WTSQuerySessionInformation with WTSUserName. With Terminal Services disabled, it examines the ACLs on the security descriptor of the &quot;winsta0&quot; window station. Under Windows 9x, returns the &quot;Current User&quot; of &quot;SYSTEM\CurrentControlSet\Control&quot; if it exists. Otherwise returns No Such Object.

{% property activity history of <logged on user> %}

Returns the activity history of the specified logged-on user. This.

{% property user of <logged on user> %}

Returns a user object from a &#39;logged on&#39; user. This is for Active Directory expressions to bridge the gaps between user types. This retains the domain information of the logged on user within the user object where other user types might not.

{% property tty of <logged on user> %}

Returns the name of the connection the user is on. Result is platform specific. Examples are: &quot;Console&quot;, &quot;RDP-Tcp#0&quot;, &quot;pts/1&quot;, &quot;:0&quot;

{% property process id of <logged on user> %}

Returns the process id number for the base session process for logged on users, usually the session manager.

{% property user key of <logged on user> %}

Returns the registry key of the specified logged on user

{% type local user%}

No documentation exists for this type.

#### Properties

{% property workstation trust account flag of <local user> %}

No documentation exists for this property.

{% property user privilege of <local user> %}

No documentation exists for this property.

{% property user id of <local user> %}

No documentation exists for this property.

{% property user comment of <local user> %}

No documentation exists for this property.

{% property temporary duplicate account flag of <local user> %}

No documentation exists for this property.

{% property server trust account flag of <local user> %}

No documentation exists for this property.

{% property server operator flag of <local user> %}

No documentation exists for this property.

{% property script flag of <local user> %}

No documentation exists for this property.

{% property profile folder of <local user> %}

No documentation exists for this property.

{% property print operator flag of <local user> %}

No documentation exists for this property.

{% property primary group id of <local user> %}

No documentation exists for this property.

{% property password expired of <local user> %}

No documentation exists for this property.

{% property password expiration disabled flag of <local user> %}

No documentation exists for this property.

{% property password change disabled flag of <local user> %}

No documentation exists for this property.

{% property password age of <local user> %}

No documentation exists for this property.

{% property normal account flag of <local user> %}

No documentation exists for this property.

{% property no password required flag of <local user> %}

No documentation exists for this property.

{% property name of <local user> %}

No documentation exists for this property.

{% property maximum storage of <local user> %}

No documentation exists for this property.

{% property logon server of <local user> %}

No documentation exists for this property.

{% property logon script of <local user> %}

No documentation exists for this property.

{% property logon count of <local user> %}

No documentation exists for this property.

{% property locked out flag of <local user> %}

No documentation exists for this property.

{% property last logon of <local user> %}

No documentation exists for this property.

{% property last logoff of <local user> %}

No documentation exists for this property.

{% property interdomain trust account flag of <local user> %}

No documentation exists for this property.

{% property home directory required flag of <local user> %}

No documentation exists for this property.

{% property home directory of <local user> %}

No documentation exists for this property.

{% property home directory drive of <local user> %}

No documentation exists for this property.

{% property guest privilege of <local user> %}

No documentation exists for this property.

{% property full name of <local user> %}

No documentation exists for this property.

{% property country code of <local user> %}

No documentation exists for this property.

{% property communications operator flag of <local user> %}

No documentation exists for this property.

{% property comment of <local user> %}

No documentation exists for this property.

{% property code page of <local user> %}

No documentation exists for this property.

{% property bad password count of <local user> %}

No documentation exists for this property.

{% property application parameter string of <local user> %}

No documentation exists for this property.

{% property allowed workstations string of <local user> %}

No documentation exists for this property.

{% property admin privilege of <local user> %}

No documentation exists for this property.

{% property accounts operator flag of <local user> %}

No documentation exists for this property.

{% property account expiration of <local user> %}

No documentation exists for this property.

{% property account disabled flag of <local user> %}

No documentation exists for this property.

{% type local group member%}

The &lt;local group member&gt; inspectors return information (such as security IDs) on members of local groups as defined on the local BES Client computer using the windows NetLocalGroupEnum API, one of Windows Network Management Functions.

#### Casts

{% property <local group member> as string %}

Casts a local group member as a string.

{% type local group%}

The &lt;local group&gt; inspectors return information on local groups as defined on the local BES Client computer using the windows NetLocalGroupEnum API, one of Windows Network Management Functions. Local groups have names, comments, members and security IDs.

#### Properties

{% property name of <local group> %}

Returns the name of the local group.Example: names of local groups - Returns a list of the local groups, such as Administrators, Guests, Users, and others.

{% property member of <local group> %}

Returns a list of the members of the specified local group.

{% property comment of <local group> %}

Returns a string containing a comment associated with the specfied local group (Administrator, Guest, Users).Example: comment of local group &quot;Administrators&quot; - Returns the string &quot;Administrators have complete and unrestricted access to the computer/domain&quot;.

{% type user attribute%}

These Macintosh inspectors provide information, such as user ID and home directory, about the specified user.

#### Casts

{% property <user attribute> as string %}

Returns a list of user attributes. These can be inspected for value and key, but this inspector concatenates them so the cast yields a string of the form &quot;key: value&quot;. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system (much like ActiveDirectory). For more information, see the Apple developer site.

#### Properties

{% property value of <user attribute> %}

Returns the value of the specified user attribute, as specified by the LocalHost node of Apple&#39;s OpenDirectory system.

{% property key of <user attribute> %}

Returns the key names of the specified user attribute, as specified by the LocalHost node of Apple&#39;s OpenDirectory system.

{% type activity history%}

The &lt;activity history&gt; inspectors keep track of the activity of a single logged-on user. You may iterate over all logged-on users and get the history for each user separately. User information is purged at log off and power off/client off, even if the user immediately logs back in. These inspectors retrieve information within a tracking window (defaulting to 14 days) or, if the window is still open, the start of that window. Information is in the form of a list of (interval, state) tuples. The first element of the list is the current state of the system. The event lists are fetched from the client each time &#39;activity history&#39; is referenced, so you should avoid referencing these inspectors more than once in a relevance statement. Note: Activity tracking only works while the Client UI is running. These inspectors only work with Windows 2000 or better.

#### Properties

{% property user interval of <activity history> %}

Returns a power interval (containing a time range and a power state, such as standby or idle) corresponding to the specified user activity history.

