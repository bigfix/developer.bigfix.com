# type: symlink

Symlinks, or symbolic links, are the Unix version of shortcut files (pointers to other files). inspectors can analyze the file objects (files and folders) that symlinks point to by using the standard file inspectors. The symlink inspectors, on the other hand, allow you to analyze the properties of a symlink itself, not just the underlying file. There are many properties that symlinks have in common with files, such as name, pathname, parent folder, and more. In addition, a symlink has a value corresponding to the file object it points to. You can also determine if the file is available or not.

# accessed time of &lt;symlink&gt; : time

Returns the last accessed time of the specified symlink.

# ancestor of &lt;symlink&gt; : folder

Returns all ancestor folders (recursive parent folders) of the given symlink.

# change time of &lt;symlink&gt; : time

Returns the last time the specified symlink was &#39;changed&#39; by either writing it or setting its inode information.

# device file &lt;symlink&gt; : device file

Returns the device file specified by the supplied symbolic link.

# drive of &lt;symlink&gt; : filesystem

Returns the drive associated with the specified symlink as a &lt;filesystem&gt; object.

# fifo file &lt;symlink&gt; : fifo file

Returns the FIFO file (named pipe) described by the specified symbolic link (symlink).

# file &lt;symlink&gt; : file

Returns the file pointed to by the specified symlink. If the file doesn&#39;t exist, this inspector will throw a &#39;non-existent object&#39; error.

# filesystem of &lt;symlink&gt; : filesystem

Returns the filesystem on which the symlink resides.

# folder &lt;symlink&gt; : folder

Returns the folder pointed to by the specified symlink.

# gid of &lt;symlink&gt; : integer

Returns the group ID of the given symlink.

# group name of &lt;symlink&gt; : string

Returns the group name of the specified symlink.

# link count of &lt;symlink&gt; : integer

Returns an integer corresponding to the number of hard links attached to the specified symlink.

# location of &lt;symlink&gt; : string

Returns a string corresponding to the directory in which the symlink is located.

# modification time of &lt;symlink&gt; : time

Returns the time corresponding to the modification time of the specified symlink, not the file it points to.Example: modification time of symlink "/example/link" - Returns the time corresponding to the modification time of the given symlink, not the file it points to.Example: modification time of file "/example/link" - Returns the time corresponding to the file object that the symlink is pointing to.

# name of &lt;symlink&gt; : string

Returns a string that is the full pathname of the specified symlink.

# parent folder of &lt;symlink&gt; : folder

Creates a folder object corresponding to the parent folder of the given symlink.

# pathname of &lt;symlink&gt; : string

Returns a string that contains the full pathname of the specified symlink.

# socket file &lt;symlink&gt; : socket file

Returns the socket file(s) indicated by the supplied symlink.

# symlink &lt;symlink&gt; : symlink

Returns a symlink from the specified symlink path, even if the symlink is broken.

# uid of &lt;symlink&gt; : integer

The user ID of the user who owns this symlink.

# user name of &lt;symlink&gt; : string

Returns the symlink owner&#39;s (user&#39;s) name.

# value accessible of &lt;symlink&gt; : boolean

Returns `True` if the pathname pointed to by the specified symlink is available. Returns `False` if the file object is missing or unavailable with the current permissions.

# value of &lt;symlink&gt; : string

Returns the pathname that the symlink points to.

# &lt;symlink&gt; as binary_string : binary_string

Returns a binary string for a full path of symbolic link.

# &lt;symlink&gt; as device file : device file

Casts a symlink type as a device file type.

# &lt;symlink&gt; as fifo file : fifo file

Casts a symlink type as a FIFO (named pipe) file.

# &lt;symlink&gt; as file : file

Converts a symlink object into the file it points to.

# &lt;symlink&gt; as folder : folder

Converts a symlink object into the folder it points to.

# &lt;symlink&gt; as socket file : socket file

Casts a symlink type as a socket file type.

# &lt;symlink&gt; as string : string

Casts a symlink object as a string.

# &lt;symlink&gt; as symlink : symlink

Casts a symlink, provided for completeness.
