# security database

The &lt;security database&gt; inspectors retrieve information from the security accounts manager (SAM) database or, in the case of domain controllers, the Active Directory. The Security database and its properties expose the NetUserModalsGet API, levels 0 and 3. For more information, see the NetUserModalsGet Function at the MSDN site: http://msdn.microsoft.com.

# account lockout duration of &lt;security database&gt;

Returns the time interval corresponding to how long a locked account remains locked before it is automatically unlocked. This may not exist for locked accounts that remain locked until an administrator unlocks them. For more information, see the MSDN article on NetUserModalsGet.

# account lockout observation window of &lt;security database&gt;

Returns a time interval corresponding to the maximum time that can elapse between any two failed logon attempts before lockout occurs. For more information, see the MSDN article on NetUserModalsGet.

# account lockout threshold of &lt;security database&gt;

Returns an integer corresponding to the number of invalid password authentications that can occur before an account is marked &#39;locked out.&#39; For more information, see the MSDN article on NetUserModalsGet.

# force logoff interval of &lt;security database&gt;

Returns the time interval between the end of the valid logon time and the time when the user must log off the network. A value of zero indicates that the user must log off immediately as soon as the valid logon time expires. This will not exist if the user is never forced to log off. For more information, see the MSDN article on NetUserModalsGet.

# maximum password age of &lt;security database&gt;

Returns a time interval corresponding to the maximum password age found in the specified security database. This will not exist if the password never expires.

# minimum password age of &lt;security database&gt;

Returns a time interval corresponding to the minimum password age found in the specified security database.

# minimum password length of &lt;security database&gt;

Returns an integer corresponding to the minimum password length found in the specified security database.

# password history length of &lt;security database&gt;

Returns the integer length of the password history maintained by the security database. A new password cannot match any of the previous passwords in the specified history. For more information, see the MSDN article on NetUserModalsGet.
