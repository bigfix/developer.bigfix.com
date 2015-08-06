# type: logged on user

These Windows and Macintosh inspectors return information about the currently logged-on user. With the advent of Terminal Services and Fast User Switching, these inspectors are designed to iterate over all logged on users. Windows Note: If Terminal Services are available (NT/2000/2003/XP/Vista) and enabled, these inspectors iterate over the active and disconnected sessions as returned by WTSEnumerateSessions. Disconnected sessions are those where a user logs on, but is currently inactive. On Vista, the non-interactive session 0 (used for services isolation) is not included. If Terminal Services aren&#39;t available, the ACLs on the security descriptor of the "winsta0" window station are examined for user logons. On Windows 9x systems, these inspectors return the user session associated with the registry value "Current User" of "SYSTEM\CurrentControlSet\Control" if it exists. Otherwise, if a shell process process such as Explorer.exe is running, they return a single session associated with an unnamed user (which occurs when the user cancels the 9x login dialog).

# active of &lt;logged on user&gt; : boolean

Returns `True` if the specified user session is active (either as a current Fast User or an active terminal services connection).

# activity history of &lt;logged on user&gt; : activity history

Returns the activity history of the specified logged-on user. This.

# name of &lt;logged on user&gt; : string

If Terminal Services is available and enabled under NT4/2000/2003/XP/Vista, this inspector returns the result of WTSQuerySessionInformation with WTSUserName. With Terminal Services disabled, it examines the ACLs on the security descriptor of the "winsta0" window station. Under Windows 9x, returns the "Current User" of "SYSTEM\CurrentControlSet\Control" if it exists. Otherwise returns No Such Object.

# process id of &lt;logged on user&gt; : integer

Returns the process id number for the base session process for logged on users, usually the session manager.

# remote of &lt;logged on user&gt; : boolean

Returns `True` if the user session is a remote terminal services connection.

# session id of &lt;logged on user&gt; : integer

No documentation exists.

# session id of &lt;logged on user&gt; : string

Returns the session id, which uniquely identifies a logged on user session. A logged-on user is a subclass of a user, and adding the session id uniquely identifies the session.

# sid of &lt;logged on user&gt; : security identifier

Returns the Security ID (SID) of the user associated with the session&#39;s primary access token. With Windows 2003/XP/Vista, this is determined by WTSQueryUserToken. With NT4/2000 it is determined by the apparent shell process running in the given session. This inspector may fail if run in a non-privileged context. The SID does not exist under Windows 9x.

# tty of &lt;logged on user&gt; : string

Returns the name of the connection the user is on. Result is platform specific. Examples are: "Console", "RDP-Tcp#0", "pts/1", ":0"

# user key of &lt;logged on user&gt; : registry key

Returns the registry key of the specified logged on user

# user of &lt;logged on user&gt; : user

Returns a user object from a &#39;logged on&#39; user. This is for Active Directory expressions to bridge the gaps between user types. This retains the domain information of the logged on user within the user object where other user types might not.
