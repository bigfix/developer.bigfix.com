# symlink

Symlinks, or symbolic links, are the Unix version of shortcut files (pointers to other files). inspectors can analyze the file objects (files and folders) that symlinks point to by using the standard file inspectors. The symlink inspectors, on the other hand, allow you to analyze the properties of a symlink itself, not just the underlying file. There are many properties that symlinks have in common with files, such as name, pathname, parent folder, and more. In addition, a symlink has a value corresponding to the file object it points to. You can also determine if the file is available or not.

# accessed time of [symlink]

Returns the last accessed time of the specified symlink.

# ancestor of [symlink]

Returns all ancestor folders (recursive parent folders) of the given symlink.

# change time of [symlink]

Returns the last time the specified symlink was &#39;changed&#39; by either writing it or setting its inode information.

# device file [symlink]

Returns the device file specified by the supplied symbolic link.

# drive of [symlink]

Returns the drive associated with the specified symlink as a &lt;filesystem&gt; object.

# fifo file [symlink]

Returns the FIFO file (named pipe) described by the specified symbolic link (symlink).

# file [symlink]

Returns the file pointed to by the specified symlink. If the file doesn&#39;t exist, this inspector will throw a &#39;non-existent object&#39; error.

# filesystem of [symlink]

Returns the filesystem on which the symlink resides.

# folder [symlink]

Returns the folder pointed to by the specified symlink.

# gid of [symlink]

Returns the group ID of the given symlink.

# group name of [symlink]

Returns the group name of the specified symlink.

# link count of [symlink]

Returns an integer corresponding to the number of hard links attached to the specified symlink.

# location of [symlink]

Returns a string corresponding to the directory in which the symlink is located.

# modification time of [symlink]

Returns the time corresponding to the modification time of the specified symlink, not the file it points to.Example: modification time of symlink &quot;/example/link&quot; - Returns the time corresponding to the modification time of the given symlink, not the file it points to.Example: modification time of file &quot;/example/link&quot; - Returns the time corresponding to the file object that the symlink is pointing to.

# name of [symlink]

Returns a string that is the full pathname of the specified symlink.

# parent folder of [symlink]

Creates a folder object corresponding to the parent folder of the given symlink.

# pathname of [symlink]

Returns a string that contains the full pathname of the specified symlink.

# socket file [symlink]

Returns the socket file(s) indicated by the supplied symlink.

# symlink [symlink]

Returns a symlink from the specified symlink path, even if the symlink is broken.

# uid of [symlink]

The user ID of the user who owns this symlink.

# user name of [symlink]

Returns the symlink owner&#39;s (user&#39;s) name.

# value accessible of [symlink]

Returns `True` if the pathname pointed to by the specified symlink is available. Returns `False` if the file object is missing or unavailable with the current permissions.

# value of [symlink]

Returns the pathname that the symlink points to.

# [symlink] as device file

Casts a symlink type as a device file type.

# [symlink] as fifo file

Casts a symlink type as a FIFO (named pipe) file.

# [symlink] as file

Converts a symlink object into the file it points to.

# [symlink] as folder

Converts a symlink object into the folder it points to.

# [symlink] as socket file

Casts a symlink type as a socket file type.

# [symlink] as string

Casts a symlink object as a string.

# [symlink] as symlink

Casts a symlink, provided for completeness.
