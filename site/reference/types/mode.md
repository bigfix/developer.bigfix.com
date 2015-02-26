# mode

The &lt;mode&gt; inpector returns file type information and permissions. These are the possible values of mode:S_IFMT 170000 bitmask for the file type bitfieldsS_IFSOCK 140000 socketS_IFLNK 120000 symbolic linkS_IFREG 100000 regular fileS_IFBLK 060000 block deviceS_IFDIR 040000 directoryS_IFCHR 020000 character deviceS_IFIFO 010000 fifoS_ISUID 004000 set UID bitS_ISGID 002000 set GID bitS_ISVTX 001000 sticky bitS_IRWXU 000700 mask for file owner permissionsS_IRUSR 000400 owner has read permissionS_IWUSR 000200 owner has write permissionS_IXUSR 000100 owner has execute permissionS_IRWXG 000070 mask for group permissionsS_IRGRP 000040 group has read permissionS_IWGRP 000020 group has write permissionS_IXGRP 000010 group has execute permissionS_IRWXO 000007 mask for permissions for others (not in group)S_IROTH 000004 others have read permissionS_IWOTH 000002 others have write permissionS_IXOTH 000001 others have execute permission

# group mask of &lt;mode&gt;

Returns the mask for group permissions for the given mode.

# other mask of &lt;mode&gt;

Returns the mask for permissions for others (those not in the group) for the given mode.

# setgid of &lt;mode&gt;

Returns `True` if setgid (the group ID flag) is set.

# setuid of &lt;mode&gt;

Returns `True` if setuid (the user ID flag) is set.

# sticky of &lt;mode&gt;

The `sticky&#39; bit (S_ISVTX) on a directory means that a file in that directory can be renamed or deleted only by the owner of the file, by the owner of the directory, and by root. This inspector returns `True` if the sticky bit of the given mode is on.

# user mask of &lt;mode&gt;

Returns the mask for the user (file owner) permissions for the given mode.

# &lt;mode&gt; as octal string

Converts the mode to a string of octal numbers.

# &lt;mode&gt; as string

Converts the mode to a string.
