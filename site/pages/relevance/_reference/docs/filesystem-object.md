# type: filesystem object

The &lt;filesystem object&gt; inspectors provide handles for the various objects available in the file system.

# accessed time of &lt;filesystem object&gt; : time

When the filesystem object (file or folder) was last accessed. Some file systems maintain this property.

# ancestor of &lt;filesystem object&gt; : folder

Returns all ancestor folders (recursive parent folders) of the given filesystem object.

{% qna %}
Q: ancestors of file "/var/www/api/relevance/evaluate/bin/qna"
A: /var/www/api/relevance/evaluate/bin
A: /var/www/api/relevance/evaluate
A: /var/www/api/relevance
A: /var/www/api
A: /var/www
A: /var
A: /
{% endqna %}

# archive of &lt;filesystem object&gt; : boolean

Returns `True` if the Archive bit is turned on for the specified file or folder (filesystem object). This bit is often used by backup software.

# backup time of &lt;filesystem object&gt; : time

The date of the last backup of the specified filesystem object (such as a file or folder). This corresponds to what is shown in the "Get Info" box for this object.

# binary name of &lt;filesystem object&gt; : binary_string

No documentation exists.

# bundle version of &lt;filesystem object&gt; : version

Returns the version of the filesystem object corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

# change time of &lt;filesystem object&gt; : time

Returns the last time the specified filesystem object was changed by either writing it or setting its inode information.

# compressed of &lt;filesystem object&gt; : boolean

Returns `True` if the file or folder (filesystem object) has been compressed.

# creation time of &lt;filesystem object&gt; : time

The date and time of creation of the specified file or folder. This corresponds to what is shown in the "Get Info" box.Example: creation time of file "System" of System Folder &gt; time "3 jan 1998 00:00+0000" - Returns `True` if the creation time of the system file is newer than the specified date.

# device file &lt;filesystem object&gt; : device file

Returns the device file indicated by the specified filesystem object.

# drive of &lt;filesystem object&gt; : drive

Returns the drive associated with the specified file or folder (filesystem object).

# fifo file &lt;filesystem object&gt; : fifo file

Returns the FIFO file (named pipe) described by the specified filesytem object.

# gid of &lt;filesystem object&gt; : integer

Returns the group ID of the given filesystem object.

{% qna %}
Q: gid of file "/etc/passwd"
A: 0
{% endqna %}

# group execute of &lt;filesystem object&gt; : boolean

Returns `True` if the group execute flag is set for the given filesystem object.

{% qna %}
Q: group execute of file "/etc/passwd"
A: False
{% endqna %}

# group mask of &lt;filesystem object&gt; : integer

Returns the group permission mask of the given filesystem object.

{% qna %}
Q: group mask of file "/etc/passwd"
A: 4
{% endqna %}

# group name of &lt;filesystem object&gt; : string

Returns the group name of the given filesystem object.

{% qna %}
Q: group name of file "/etc/passwd"
A: root
{% endqna %}

# group read of &lt;filesystem object&gt; : boolean

Returns `True` if the group read flag is set for the given filesystem object.

{% qna %}
Q: group read of file "/etc/passwd"
A: True
{% endqna %}

# group write of &lt;filesystem object&gt; : boolean

Returns `True` if the group write flag is set for the given filesystem object.

{% qna %}
Q: group write of file "/etc/passwd"
A: False
{% endqna %}

# has extended acl of &lt;filesystem object&gt; : boolean

No documentation exists.

# hfs path of &lt;filesystem object&gt; : string

Returns the path to a filesystem object in HFS terms (colons as delimiters).

# hidden of &lt;filesystem object&gt; : boolean

Returns `True` if the file or folder (filesystem object) is marked as hidden.

# link count of &lt;filesystem object&gt; : integer

Returns an integer corresponding to the number of hard links attached to the specified filesystem object.

{% qna %}
Q: link count of file "/etc/passwd"
A: 1
{% endqna %}

# location of &lt;filesystem object&gt; : folder

No documentation exists.

# location of &lt;filesystem object&gt; : string

Returns the name of the directory in which the file or folder is located.

{% qna %}
Q: location of file "/etc/passwd"
A: /etc
{% endqna %}

# mode of &lt;filesystem object&gt; : mode

Returns the permissions mode for the given filesystem object.

{% qna %}
Q: mode of file "/etc/passwd"
A: rw-r--r--
{% endqna %}

# modification time of &lt;filesystem object&gt; : time

Returns the date and time of latest modification of the file.

{% qna %}
Q: modification time of file "/etc/passwd"
A: Fri, 14 Aug 2015 21:04:58 +0000
{% endqna %}

# name of &lt;filesystem object&gt; : string

Returns the name of the file or folder.

{% qna %}
Q: name of file "/etc/passwd"
A: passwd
{% endqna %}

# normal of &lt;filesystem object&gt; : boolean

Returns `True` if the file or folder (filesystem object) is &#39;normal&#39;.

# offline of &lt;filesystem object&gt; : boolean

Returns `True` if the file or folder (the filesystem object) is marked as &#39;offline&#39;.

# other execute of &lt;filesystem object&gt; : boolean

Returns `True` if others have execute permissions on the given filesystem object.

{% qna %}
Q: other execute of file "/etc/passwd"
A: False
{% endqna %}

# other mask of &lt;filesystem object&gt; : integer

Returns the other mask as a 3-bit integer corresponding to rwx permissions for the specified filesystem object.

{% qna %}
Q: other mask of file "/etc/passwd"
A: 4
{% endqna %}

# other read of &lt;filesystem object&gt; : boolean

Returns `True` if others have read permissions on the given filesystem object.

{% qna %}
Q: other read of file "/etc/passwd"
A: True
{% endqna %}

# other write of &lt;filesystem object&gt; : boolean

Returns `True` if others have write permissions on the given filesystem object.

{% qna %}
Q: other write of file "/etc/passwd"
A: False
{% endqna %}

# parent folder of &lt;filesystem object&gt; : folder

The folder containing the specified file or folder.

{% qna %}
Q: parent folder of file "/etc/passwd"
A: /etc
{% endqna %}

# pathname of &lt;filesystem object&gt; : string

Returns the full pathname of the specified file or folder as a string.

{% qna %}
Q: pathname of file "/etc/passwd"
A: /etc/passwd
{% endqna %}

# posix path of &lt;filesystem object&gt; : string

The POSIX file path for the file or folder.

# readonly of &lt;filesystem object&gt; : boolean

Returns `True` if the file or folder (the filesystem object) is marked as read-only.

# setgid of &lt;filesystem object&gt; : boolean

Returns `True` if the [setgid](https://en.wikipedia.org/wiki/Setuid) bit is set for the specified filesystem object.

{% qna %}
Q: setgid of file "/etc/passwd"
A: False
{% endqna %}

# setuid of &lt;filesystem object&gt; : boolean

Returns `True` if the [setuid](https://en.wikipedia.org/wiki/Setuid) bit is set for the specified filesystem object.

{% qna %}
Q: setuid of file "/etc/passwd"
A: False
{% endqna %}

# sibling file &lt;binary_string&gt; of &lt;filesystem object&gt; : file

No documentation exists.

# sibling file &lt;string&gt; of &lt;filesystem object&gt; : file

A named property. A file in the same folder as the specified file object.

# sibling folder &lt;string&gt; of &lt;filesystem object&gt; : folder

A named property. A folder in the same folder as the specified file object.

# sibling item &lt;string&gt; of &lt;filesystem object&gt; : filesystem object

The named sibling of a filesystem object (file, folder).

# socket file &lt;filesystem object&gt; : socket file

Returns the socket file(s) indicated by the supplied filesystem object.

# symlink &lt;filesystem object&gt; : symlink

Returns a symlink from the specified filesystem object.

# system of &lt;filesystem object&gt; : boolean

Returns `True` if the file or folder (the filesystem object) is marked as a system folder.

# temporary of &lt;filesystem object&gt; : boolean

Returns `True` if the file or folder (the filesystem object) is marked as a temporary folder.

# uid of &lt;filesystem object&gt; : integer

The user ID of the user who owns this filesystem object.

{% qna %}
Q: uid of file "/etc/passwd"
A: 0
{% endqna %}

# user execute of &lt;filesystem object&gt; : boolean

Returns `True` if the owner has execute permissions on the given filesystem object.

{% qna %}
Q: user execute of file "/bin/bash"
A: True
{% endqna %}

# user mask of &lt;filesystem object&gt; : integer

Returns an integer representing the owner permissions on the specified filesystem object.

{% qna %}
Q: user mask of file "/etc/passwd"
A: 6
{% endqna %}

# user name of &lt;filesystem object&gt; : string

Returns the owner name of the specified filesystem object.

{% qna %}
Q: user name of file "/etc/passwd"
A: root
{% endqna %}

# user read of &lt;filesystem object&gt; : boolean

Returns the owner read permissions for the specified filesystem object.

{% qna %}
Q: user read of file "/etc/passwd"
A: True
{% endqna %}

# user write of &lt;filesystem object&gt; : boolean

Returns the owner write permissions for the specified filesystem object.

{% qna %}
Q: user write of file "/etc/passwd"
A: True
{% endqna %}

# version of &lt;filesystem object&gt; : version

This returns the version information from "vers" resource 1 of the file. It is usually present in applications, and may exist in data files as well. It corresponds to what appears in the "Get Info" box for the specified filesystem object.

# &lt;filesystem object&gt; as device file : device file

Returns a device file or nothing (if the filesystem object specified is not a device file).

# &lt;filesystem object&gt; as fifo file : fifo file

Returns a FIFO file or nothing (if the filesystem object specified is not a FIFO file).

# &lt;filesystem object&gt; as file : file

Returns a file or nothing (if, for example, the filesystem object was a folder).

# &lt;filesystem object&gt; as folder : folder

Returns a folder or nothing.

# &lt;filesystem object&gt; as socket file : socket file

Casts a given filesystem object as a socket file.

# &lt;filesystem object&gt; as string : string

Casts a filesystem object as a string.

# &lt;filesystem object&gt; as symlink : symlink

Casts a link in the form of a file into a symlink.

# &lt;filesystem object&gt; = &lt;filesystem object&gt; : boolean

Compares two Macintosh file system objects.
