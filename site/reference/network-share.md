# network share

The network share inspector does not work on Windows 95/98/Me. The password and permission properties are relevant only for shares using share-level security. User-level security is given by the security descriptor. The use limit property will throw NoSuchObject if use is unlimited.

# attribute permission of [network share]

Returns `True` if permission is granted to modify the attributes of the shared resource (such as the date and time when a file was last modified).

# comment of [network share]

Returns a string specifying an optional comment about the shared resource.

# create permission of [network share]

Returns `True` if permission is granted to create an instance of a shared resource (such as a file).

# delete permission of [network share]

Returns `True` if permission is granted to delete the resource.

# execute permission of [network share]

Returns `True` if permission is granted to execute the resource.

# name of [network share]

Returns a string specifying the name of the specified shared resource.

# password of [network share]

A string that specifies the share&#39;s password (when the server is running with share-level security). Note that the Windows Server 2003 family, Windows XP, Windows 2000, and Windows NT do not support share-level security.

# path of [network share]

A string containing the local path for the shared resource.

# permission permission of [network share]

Returns `True` if permission is granted to modify the permissions (read, write, create, execute, and delete) for the specified network share.

# read permission of [network share]

Returns `True` if permission is granted to read data from a resource and, by default, to execute the specified network share.

# security descriptor of [network share]

Specifies the security descriptor associated with the specified network share.

# type of [network share]

Specifies an integer value that indicates the type of share. (See the Microsoft document on SHARE_INFO_502).

# use count of [network share]

Specifies an integer value that indicates the number of current connections to the specified network share.

# use limit of [network share]

Specifies an integer value indicating the maximum number of concurrent connections that the shared resource can accommodate.

# write permission of [network share]

Returns `True` if permission is granted to write data to the specified network share.
