# type: network share

The network share inspector does not work on Windows 95/98/Me. The password and permission properties are relevant only for shares using share-level security. User-level security is given by the security descriptor. The use limit property will throw NoSuchObject if use is unlimited.

# attribute permission of &lt;network share&gt; : boolean

Returns `True` if permission is granted to modify the attributes of the shared resource (such as the date and time when a file was last modified).

# comment of &lt;network share&gt; : string

Returns a string specifying an optional comment about the shared resource.

# create permission of &lt;network share&gt; : boolean

Returns `True` if permission is granted to create an instance of a shared resource (such as a file).

# delete permission of &lt;network share&gt; : boolean

Returns `True` if permission is granted to delete the resource.

# execute permission of &lt;network share&gt; : boolean

Returns `True` if permission is granted to execute the resource.

# name of &lt;network share&gt; : string

Returns a string specifying the name of the specified shared resource.

# password of &lt;network share&gt; : string

A string that specifies the share&amp;#39;s password (when the server is running with share-level security). Note that the Windows Server 2003 family, Windows XP, Windows 2000, and Windows NT do not support share-level security.

# path of &lt;network share&gt; : string

A string containing the local path for the shared resource.

# permission permission of &lt;network share&gt; : boolean

Returns `True` if permission is granted to modify the permissions (read, write, create, execute, and delete) for the specified network share.

# read permission of &lt;network share&gt; : boolean

Returns `True` if permission is granted to read data from a resource and, by default, to execute the specified network share.

# security descriptor of &lt;network share&gt; : security descriptor

Specifies the security descriptor associated with the specified network share.

# type of &lt;network share&gt; : integer

Specifies an integer value that indicates the type of share. (See the Microsoft document on SHARE_INFO_502).

# use count of &lt;network share&gt; : integer

Specifies an integer value that indicates the number of current connections to the specified network share.

# use limit of &lt;network share&gt; : integer

Specifies an integer value indicating the maximum number of concurrent connections that the shared resource can accommodate.

# write permission of &lt;network share&gt; : boolean

Returns `True` if permission is granted to write data to the specified network share.
