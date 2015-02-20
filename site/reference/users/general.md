---
title: general
---

## user

The &lt;user&gt; inspectors allow you to list properties of all users, whether they are logged in or not.

#### tty of &lt;user&gt; : string

Returns the tty of the user.

#### name of &lt;user&gt; : string

Returns the name of all the specified user, whether logged in or not. On Linux or UNIX platforms, returns the name of all logged on users.

#### primary group id of &lt;user&gt; : integer

On a Mac, this inspector returns the dsAttrTypeStandard:PrimaryGroupID attribute for the specified user.Note: On a Windows computer, this inspector returns the gid as an integer, not a string.

#### id of &lt;user&gt; : integer

Returns the dsAttrTypeStandard:UniqueID attribute of the specified user.

#### home directory of &lt;user&gt; : string

On a Mac, this inspector returns the dsAttrTypeStandard:NFSHomeDirectory attribute of the specified user as a folder. Note: On a Windows system, this inspector has a different interpretation: it returns the directory (as a string) where the user files are stored for the specified user.

#### attribute of &lt;user&gt; : user attribute

Returns a list of attributes for the given user, logged in or not. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system.

#### attribute &lt;string&gt; of &lt;user&gt; : user attribute

Returns the specified named user attribute for the given user. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system.

#### active directory user of &lt;user&gt; : active directory local user

Returns an &lt;active directory local user&gt; object from the specified logged-on user object. This bridges the gaps between user types when using Active Directory inspectors. It retains the domain information of the logged-on user within the user object where other user types might not.

#### workstation trust account flag of &lt;user&gt; : boolean

Returns TRUE if the specified user&#39;s account is for a workstation or server.

#### user privilege of &lt;user&gt; : boolean

Returns TRUE if the specified user has a privilege level of &#39;user&#39;.

#### user id of &lt;user&gt; : integer

Returns the specified user&#39;s RID number.

#### user comment of &lt;user&gt; : string

Returns the user comments of the specified user.

#### temporary duplicate account flag of &lt;user&gt; : boolean

Returns TRUE if this is a temporary duplicate account of the specified user.

#### server trust account flag of &lt;user&gt; : boolean

Returns TRUE if the specified user has server trust account privileges (for a backup domain controller).

#### server operator flag of &lt;user&gt; : boolean

Returns TRUE if the specified user has server operator privileges.

#### script flag of &lt;user&gt; : boolean

Returns TRUE if the logon script for the specified user has been executed.

#### profile folder of &lt;user&gt; : string

Returns the pathname of the folder which contains the specified user&#39;s profile.

#### print operator flag of &lt;user&gt; : boolean

Returns TRUE if the specified user has print operator privileges.

#### password expired of &lt;user&gt; : boolean

Returns TRUE if the specified user&#39;s password has expired.

#### password expiration disabled flag of &lt;user&gt; : boolean

Returns TRUE if the specified user&#39;s password on this account will never expire.

#### password change disabled flag of &lt;user&gt; : boolean

Returns TRUE if the specified user is not allowed to change his password.

#### password age of &lt;user&gt; : time interval

Returns a time interval since the specified user&#39;s password was last changed.

#### normal account flag of &lt;user&gt; : boolean

Returns TRUE if the specified user&#39;s account has a default account type corresponding to a typical user.

#### no password required flag of &lt;user&gt; : boolean

Returns TRUE if no password is required for the specified user.

#### maximum storage of &lt;user&gt; : integer

Returns the specified user&#39;s disk quota. Will return FALSE if the user has no disk quota.

#### logon server of &lt;user&gt; : string

Returns the name of the server (as a string) to which logon requests are sent for the specified user&#39;s account.

#### logon script of &lt;user&gt; : string

Returns the pathname (as a string) of the specified user&#39;s logon script.

#### logon count of &lt;user&gt; : integer

Returns the number of times which the specified user&#39;s account has successfully logged on to the local machine.

#### logged on user of &lt;user&gt; : logged on user

Converts a user into a &#39;logged on&#39; user type -- if and only if the specified user is currently logged in.

#### locked out flag of &lt;user&gt; : boolean

Returns TRUE if the specified user is currently locked out.

#### last logon of &lt;user&gt; : time

Returns the time when the specified user last logged on.

#### last logoff of &lt;user&gt; : time

Returns the time when the specified user last logged off.

#### interdomain trust account flag of &lt;user&gt; : boolean

Returns TRUE if the given user&#39;s account stipulates that a domain should trust other domains.

#### home directory required flag of &lt;user&gt; : boolean

Returns TRUE if a home directory is required for the specified user.

#### home directory drive of &lt;user&gt; : string

Returns the name of the drive assigned to the specified user&#39;s home directory.

#### guest privilege of &lt;user&gt; : boolean

Returns TRUE if the specified user has a privilege level of &#39;guest&#39;.

#### full name of &lt;user&gt; : string

Returns the full name of the specified user.

#### country code of &lt;user&gt; : integer

Returns the country code of the user&#39;s preferred language.

#### communications operator flag of &lt;user&gt; : boolean

Returns TRUE if the specified user has communications operator privileges.

#### comment of &lt;user&gt; : string

Returns the comments associated with this user&#39;s account.

#### code page of &lt;user&gt; : integer

Returns the code page corresponding to the specified user&#39;s preferred language.

#### bad password count of &lt;user&gt; : integer

Returns the number of attempts to logon to the specified user account with a bad password.

#### application parameter string of &lt;user&gt; : string

Returns a string used by Microsoft products to store user configuration information.

#### allowed workstations string of &lt;user&gt; : string

Returns a list of workstations the specified user is allowed to login to. If this string is empty, no restrictions apply.

#### admin privilege of &lt;user&gt; : boolean

Returns TRUE if the specified user has a privilege level of &#39;admin&#39;.

#### accounts operator flag of &lt;user&gt; : boolean

Returns TRUE if this user has the accounts operator privilege.

#### account expiration of &lt;user&gt; : time

Returns the time when the specified user&#39;s account is set to expire.

#### account disabled flag of &lt;user&gt; : boolean

Returns TRUE if the specified user&#39;s account is disabled.

#### sid of &lt;user&gt; : security identifier

No documentation exists for this property.

#### domain of &lt;user&gt; : string

No documentation exists for this property.

#### winrt package of &lt;user&gt; : winrt package

No documentation exists for this property.

## logged on user

These Windows and Macintosh inspectors return information about the currently logged-on user. With the advent of Terminal Services and Fast User Switching, these inspectors are designed to iterate over all logged on users. Windows Note: If Terminal Services are available (NT/2000/2003/XP/Vista) and enabled, these inspectors iterate over the active and disconnected sessions as returned by WTSEnumerateSessions. Disconnected sessions are those where a user logs on, but is currently inactive. On Vista, the non-interactive session 0 (used for services isolation) is not included. If Terminal Services aren&#39;t available, the ACLs on the security descriptor of the &quot;winsta0&quot; window station are examined for user logons. On Windows 9x systems, these inspectors return the user session associated with the registry value &quot;Current User&quot; of &quot;SYSTEM\CurrentControlSet\Control&quot; if it exists. Otherwise, if a shell process process such as Explorer.exe is running, they return a single session associated with an unnamed user (which occurs when the user cancels the 9x login dialog).

#### session id of &lt;logged on user&gt; : integer

Returns the session id, which uniquely identifies a logged on user session. A logged-on user is a subclass of a user, and adding the session id uniquely identifies the session.

#### remote of &lt;logged on user&gt; : boolean

Returns TRUE if the user session is a remote terminal services connection.

#### active of &lt;logged on user&gt; : boolean

Returns TRUE if the specified user session is active (either as a current Fast User or an active terminal services connection).

#### sid of &lt;logged on user&gt; : security identifier

Returns the Security ID (SID) of the user associated with the session&#39;s primary access token. With Windows 2003/XP/Vista, this is determined by WTSQueryUserToken. With NT4/2000 it is determined by the apparent shell process running in the given session. This inspector may fail if run in a non-privileged context. The SID does not exist under Windows 9x.

#### name of &lt;logged on user&gt; : string

If Terminal Services is available and enabled under NT4/2000/2003/XP/Vista, this inspector returns the result of WTSQuerySessionInformation with WTSUserName. With Terminal Services disabled, it examines the ACLs on the security descriptor of the &quot;winsta0&quot; window station. Under Windows 9x, returns the &quot;Current User&quot; of &quot;SYSTEM\CurrentControlSet\Control&quot; if it exists. Otherwise returns No Such Object.

#### activity history of &lt;logged on user&gt; : activity history

Returns the activity history of the specified logged-on user. This.

#### user of &lt;logged on user&gt; : user

Returns a user object from a &#39;logged on&#39; user. This is for Active Directory expressions to bridge the gaps between user types. This retains the domain information of the logged on user within the user object where other user types might not.

#### tty of &lt;logged on user&gt; : string

Returns the name of the connection the user is on. Result is platform specific. Examples are: &quot;Console&quot;, &quot;RDP-Tcp#0&quot;, &quot;pts/1&quot;, &quot;:0&quot;

#### process id of &lt;logged on user&gt; : integer

Returns the process id number for the base session process for logged on users, usually the session manager.

#### user key of &lt;logged on user&gt; : registry key

Returns the registry key of the specified logged on user

## local user

No documentation exists for this type.

#### workstation trust account flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### user privilege of &lt;local user&gt; : boolean

No documentation exists for this property.

#### user id of &lt;local user&gt; : integer

No documentation exists for this property.

#### user comment of &lt;local user&gt; : string

No documentation exists for this property.

#### temporary duplicate account flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### server trust account flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### server operator flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### script flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### profile folder of &lt;local user&gt; : string

No documentation exists for this property.

#### print operator flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### primary group id of &lt;local user&gt; : integer

No documentation exists for this property.

#### password expired of &lt;local user&gt; : boolean

No documentation exists for this property.

#### password expiration disabled flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### password change disabled flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### password age of &lt;local user&gt; : time interval

No documentation exists for this property.

#### normal account flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### no password required flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### name of &lt;local user&gt; : string

No documentation exists for this property.

#### maximum storage of &lt;local user&gt; : integer

No documentation exists for this property.

#### logon server of &lt;local user&gt; : string

No documentation exists for this property.

#### logon script of &lt;local user&gt; : string

No documentation exists for this property.

#### logon count of &lt;local user&gt; : integer

No documentation exists for this property.

#### locked out flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### last logon of &lt;local user&gt; : time

No documentation exists for this property.

#### last logoff of &lt;local user&gt; : time

No documentation exists for this property.

#### interdomain trust account flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### home directory required flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### home directory of &lt;local user&gt; : string

No documentation exists for this property.

#### home directory drive of &lt;local user&gt; : string

No documentation exists for this property.

#### guest privilege of &lt;local user&gt; : boolean

No documentation exists for this property.

#### full name of &lt;local user&gt; : string

No documentation exists for this property.

#### country code of &lt;local user&gt; : integer

No documentation exists for this property.

#### communications operator flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### comment of &lt;local user&gt; : string

No documentation exists for this property.

#### code page of &lt;local user&gt; : integer

No documentation exists for this property.

#### bad password count of &lt;local user&gt; : integer

No documentation exists for this property.

#### application parameter string of &lt;local user&gt; : string

No documentation exists for this property.

#### allowed workstations string of &lt;local user&gt; : string

No documentation exists for this property.

#### admin privilege of &lt;local user&gt; : boolean

No documentation exists for this property.

#### accounts operator flag of &lt;local user&gt; : boolean

No documentation exists for this property.

#### account expiration of &lt;local user&gt; : time

No documentation exists for this property.

#### account disabled flag of &lt;local user&gt; : boolean

No documentation exists for this property.

## local group member

The &lt;local group member&gt; inspectors return information (such as security IDs) on members of local groups as defined on the local BES Client computer using the windows NetLocalGroupEnum API, one of Windows Network Management Functions.

#### &lt;local group member&gt; as string : string

Casts a local group member as a string.

## local group

The &lt;local group&gt; inspectors return information on local groups as defined on the local BES Client computer using the windows NetLocalGroupEnum API, one of Windows Network Management Functions. Local groups have names, comments, members and security IDs.

#### name of &lt;local group&gt; : string

Returns the name of the local group.Example: names of local groups - Returns a list of the local groups, such as Administrators, Guests, Users, and others.

#### member of &lt;local group&gt; : local group member

Returns a list of the members of the specified local group.

#### comment of &lt;local group&gt; : string

Returns a string containing a comment associated with the specfied local group (Administrator, Guest, Users).Example: comment of local group &quot;Administrators&quot; - Returns the string &quot;Administrators have complete and unrestricted access to the computer/domain&quot;.

## user attribute

These Macintosh inspectors provide information, such as user ID and home directory, about the specified user.

#### &lt;user attribute&gt; as string : string

Returns a list of user attributes. These can be inspected for value and key, but this inspector concatenates them so the cast yields a string of the form &quot;key: value&quot;. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system (much like ActiveDirectory). For more information, see the Apple developer site.

#### value of &lt;user attribute&gt; : string

Returns the value of the specified user attribute, as specified by the LocalHost node of Apple&#39;s OpenDirectory system.

#### key of &lt;user attribute&gt; : string

Returns the key names of the specified user attribute, as specified by the LocalHost node of Apple&#39;s OpenDirectory system.

## activity history

The &lt;activity history&gt; inspectors keep track of the activity of a single logged-on user. You may iterate over all logged-on users and get the history for each user separately. User information is purged at log off and power off/client off, even if the user immediately logs back in. These inspectors retrieve information within a tracking window (defaulting to 14 days) or, if the window is still open, the start of that window. Information is in the form of a list of (interval, state) tuples. The first element of the list is the current state of the system. The event lists are fetched from the client each time &#39;activity history&#39; is referenced, so you should avoid referencing these inspectors more than once in a relevance statement. Note: Activity tracking only works while the Client UI is running. These inspectors only work with Windows 2000 or better.

#### user interval of &lt;activity history&gt; : system power interval

Returns a power interval (containing a time range and a power state, such as standby or idle) corresponding to the specified user activity history.

