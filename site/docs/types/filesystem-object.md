# type: filesystem object

The &lt;filesystem object&gt; inspectors provide handles for the various objects available in the file system.

# accessed time of &lt;filesystem object&gt;

When the filesystem object (file or folder) was last accessed. Some file systems maintain this property.

# ancestor of &lt;filesystem object&gt;

Returns all ancestor folders (recursive parent folders) of the given filesystem object (file or folder).

# archive of &lt;filesystem object&gt;

Returns `True` if the Archive bit is turned on for the specified file or folder (filesystem object). This bit is often used by backup software.

# backup time of &lt;filesystem object&gt;

The date of the last backup of the specified filesystem object (such as a file or folder). This corresponds to what is shown in the &quot;Get Info&quot; box for this object.

# bundle version of &lt;filesystem object&gt;

Returns the version of the filesystem object corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

# change time of &lt;filesystem object&gt;

Returns the last time the specified filesystem object was changed by either writing it or setting its inode information.

# compressed of &lt;filesystem object&gt;

Returns `True` if the file or folder (filesystem object) has been compressed.

# creation time of &lt;filesystem object&gt;

The date and time of creation of the specified file or folder. This corresponds to what is shown in the &quot;Get Info&quot; box.Example: creation time of file &quot;System&quot; of System Folder &gt; time &quot;3 jan 1998 00:00+0000&quot; - Returns `True` if the creation time of the system file is newer than the specified date.

# device file &lt;filesystem object&gt;

Returns the device file indicated by the specified filesystem object.

# drive of &lt;filesystem object&gt;

Returns the drive associated with the specified file or folder (filesystem object).

# fifo file &lt;filesystem object&gt;

Returns the FIFO file (named pipe) described by the specified filesytem object.

# gid of &lt;filesystem object&gt;

Returns the group ID of the given filesystem object.

# group execute of &lt;filesystem object&gt;

Returns `True` if the group execute flag is set for the given filesystem object.

# group mask of &lt;filesystem object&gt;

Returns the group permission mask of the given filesystem object.

# group name of &lt;filesystem object&gt;

Returns the group name of the given filesystem object.

# group read of &lt;filesystem object&gt;

Returns `True` if the group read flag is set for the given filesystem object.

# group write of &lt;filesystem object&gt;

Returns `True` if the group write flag is set for the given filesystem object.

# hfs path of &lt;filesystem object&gt;

Returns the path to a filesystem object in HFS terms (colons as delimiters).

# hidden of &lt;filesystem object&gt;

Returns `True` if the file or folder (filesystem object) is marked as hidden.

# link count of &lt;filesystem object&gt;

Returns an integer corresponding to the number of hard links attached to the specified filesystem object.

# location of &lt;filesystem object&gt;

Returns the name of the directory in which the file or folder (filesystem object) is located.

# mode of &lt;filesystem object&gt;

Returns the permissions mode for the given filesystem object.

# modification time of &lt;filesystem object&gt;

The date and time of latest modification of the file. This corresponds to what is shown in the &quot;Get Info&quot; box.Example: name of object &quot;iChat.app&quot; of applications folder - Returns iChat.app.

# name of &lt;filesystem object&gt;

This returns the name of the file or folder.

# normal of &lt;filesystem object&gt;

Returns `True` if the file or folder (filesystem object) is &#39;normal&#39;.

# offline of &lt;filesystem object&gt;

Returns `True` if the file or folder (the filesystem object) is marked as &#39;offline&#39;.

# other execute of &lt;filesystem object&gt;

Returns `True` if others (not in the group) have execute permissions on the given filesystem object.

# other mask of &lt;filesystem object&gt;

Returns the other (not in the group) mask as a 3-bit integer corresponding to rwx permissions for the specified filesystem object.

# other read of &lt;filesystem object&gt;

Returns `True` if others (not in the group) have read permissions on the given filesystem object.

# other write of &lt;filesystem object&gt;

Returns `True` if others (not in the group) have write permissions on the given filesystem object.

# parent folder of &lt;filesystem object&gt;

The folder containing the specified file or folder.

# pathname of &lt;filesystem object&gt;

Returns the full pathname of the specified file or folder (filesystem object) as a string.

# posix path of &lt;filesystem object&gt;

The POSIX file path for the file or folder.

# readonly of &lt;filesystem object&gt;

Returns `True` if the file or folder (the filesystem object) is marked as read-only.

# setgid of &lt;filesystem object&gt;

Returns `True` if the setgid (group ID) bit is set for the specified filesystem object.

# setuid of &lt;filesystem object&gt;

Returns `True` if the setuid (user ID) bit is set for the specified filesystem object.

# sibling file &lt;string&gt; of &lt;filesystem object&gt;

A named property. A file in the same folder as the specified file object.

# sibling folder &lt;string&gt; of &lt;filesystem object&gt;

A named property. A folder in the same folder as the specified file object.

# sibling item &lt;string&gt; of &lt;filesystem object&gt;

The named sibling of a filesystem object (file, folder).

# socket file &lt;filesystem object&gt;

Returns the socket file(s) indicated by the supplied filesystem object.

# symlink &lt;filesystem object&gt;

Returns a symlink from the specified filesystem object.

# system of &lt;filesystem object&gt;

Returns `True` if the file or folder (the filesystem object) is marked as a system folder.

# temporary of &lt;filesystem object&gt;

Returns `True` if the file or folder (the filesystem object) is marked as a temporary folder.

# uid of &lt;filesystem object&gt;

The user ID of the user who owns this filesystem object.

# user execute of &lt;filesystem object&gt;

Returns `True` if the owner (user) has execute permissions on the given filesystem object.

# user mask of &lt;filesystem object&gt;

Integer representing user permissions (3 bit mask, RWX) on the specified filesystem object.

# user name of &lt;filesystem object&gt;

Returns the owner (user) name of the specified filesystem object.

# user read of &lt;filesystem object&gt;

Returns the owner (user) read permissions for the specified filesystem object.

# user write of &lt;filesystem object&gt;

Returns the owner (user) write permissions for the specified filesystem object.

# version of &lt;filesystem object&gt;

This returns the version information from &quot;vers&quot; resource 1 of the file. It is usually present in applications, and may exist in data files as well. It corresponds to what appears in the &quot;Get Info&quot; box for the specified filesystem object.

# &lt;filesystem object&gt; as device file

Returns a device file or nothing (if the filesystem object specified is not a device file).

# &lt;filesystem object&gt; as fifo file

Returns a FIFO file or nothing (if the filesystem object specified is not a FIFO file).

# &lt;filesystem object&gt; as file

Returns a file or nothing (if, for example, the filesystem object was a folder).

# &lt;filesystem object&gt; as folder

Returns a folder or nothing.

# &lt;filesystem object&gt; as socket file

Casts a given filesystem object as a socket file.

# &lt;filesystem object&gt; as string

Casts a filesystem object as a string.

# &lt;filesystem object&gt; as symlink

Casts a link in the form of a file into a symlink.
