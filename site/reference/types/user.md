# user

The &lt;user&gt; inspectors allow you to list properties of all users, whether they are logged in or not.

# account disabled flag of <user>

Returns `True` if the specified user&#39;s account is disabled.

# account expiration of <user>

Returns the time when the specified user&#39;s account is set to expire.

# accounts operator flag of <user>

Returns `True` if this user has the accounts operator privilege.

# active directory user of <user>

Returns an &lt;active directory local user&gt; object from the specified logged-on user object. This bridges the gaps between user types when using Active Directory inspectors. It retains the domain information of the logged-on user within the user object where other user types might not.

# admin privilege of <user>

Returns `True` if the specified user has a privilege level of &#39;admin&#39;.

# allowed workstations string of <user>

Returns a list of workstations the specified user is allowed to login to. If this string is empty, no restrictions apply.

# application parameter string of <user>

Returns a string used by Microsoft products to store user configuration information.

# attribute <string> of <user>

Returns the specified named user attribute for the given user. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system.

# attribute of <user>

Returns a list of attributes for the given user, logged in or not. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system.

# bad password count of <user>

Returns the number of attempts to logon to the specified user account with a bad password.

# code page of <user>

Returns the code page corresponding to the specified user&#39;s preferred language.

# comment of <user>

Returns the comments associated with this user&#39;s account.

# communications operator flag of <user>

Returns `True` if the specified user has communications operator privileges.

# country code of <user>

Returns the country code of the user&#39;s preferred language.

# domain of <user>

No documentation exists.

# full name of <user>

Returns the full name of the specified user.

# guest privilege of <user>

Returns `True` if the specified user has a privilege level of &#39;guest&#39;.

# home directory drive of <user>

Returns the name of the drive assigned to the specified user&#39;s home directory.

# home directory of <user>

On a Mac, this inspector returns the dsAttrTypeStandard:NFSHomeDirectory attribute of the specified user as a folder. Note: On a Windows system, this inspector has a different interpretation: it returns the directory (as a string) where the user files are stored for the specified user.

# home directory required flag of <user>

Returns `True` if a home directory is required for the specified user.

# id of <user>

Returns the dsAttrTypeStandard:UniqueID attribute of the specified user.

# interdomain trust account flag of <user>

Returns `True` if the given user&#39;s account stipulates that a domain should trust other domains.

# last logoff of <user>

Returns the time when the specified user last logged off.

# last logon of <user>

Returns the time when the specified user last logged on.

# locked out flag of <user>

Returns `True` if the specified user is currently locked out.

# logged on user of <user>

Converts a user into a &#39;logged on&#39; user type -- if and only if the specified user is currently logged in.

# logon count of <user>

Returns the number of times which the specified user&#39;s account has successfully logged on to the local machine.

# logon script of <user>

Returns the pathname (as a string) of the specified user&#39;s logon script.

# logon server of <user>

Returns the name of the server (as a string) to which logon requests are sent for the specified user&#39;s account.

# maximum storage of <user>

Returns the specified user&#39;s disk quota. Will return FALSE if the user has no disk quota.

# name of <user>

Returns the name of all the specified user, whether logged in or not. On Linux or UNIX platforms, returns the name of all logged on users.

# no password required flag of <user>

Returns `True` if no password is required for the specified user.

# normal account flag of <user>

Returns `True` if the specified user&#39;s account has a default account type corresponding to a typical user.

# password age of <user>

Returns a time interval since the specified user&#39;s password was last changed.

# password change disabled flag of <user>

Returns `True` if the specified user is not allowed to change his password.

# password expiration disabled flag of <user>

Returns `True` if the specified user&#39;s password on this account will never expire.

# password expired of <user>

Returns `True` if the specified user&#39;s password has expired.

# primary group id of <user>

On a Mac, this inspector returns the dsAttrTypeStandard:PrimaryGroupID attribute for the specified user.Note: On a Windows computer, this inspector returns the gid as an integer, not a string.

# print operator flag of <user>

Returns `True` if the specified user has print operator privileges.

# profile folder of <user>

Returns the pathname of the folder which contains the specified user&#39;s profile.

# script flag of <user>

Returns `True` if the logon script for the specified user has been executed.

# server operator flag of <user>

Returns `True` if the specified user has server operator privileges.

# server trust account flag of <user>

Returns `True` if the specified user has server trust account privileges (for a backup domain controller).

# sid of <user>

No documentation exists.

# temporary duplicate account flag of <user>

Returns `True` if this is a temporary duplicate account of the specified user.

# tty of <user>

Returns the tty of the user.

# user comment of <user>

Returns the user comments of the specified user.

# user id of <user>

Returns the specified user&#39;s RID number.

# user privilege of <user>

Returns `True` if the specified user has a privilege level of &#39;user&#39;.

# winrt package of <user>

No documentation exists.

# workstation trust account flag of <user>

Returns `True` if the specified user&#39;s account is for a workstation or server.
