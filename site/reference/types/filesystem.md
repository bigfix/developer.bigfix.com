# filesystem

The filesystem object can be used to inspect various aspects of mounted file systems, including the format of the file system. Here are some of the possible format types:affsext, ext2, ext2_oldhpfsisominix, minix_30, minix2, minix2_30 msdos ncpnfsprocsmbxenixsysv4, sysv2cohufsxia

# file count of [filesystem]

Returns the total number of files that may be saved on this filesystem.

# free file count of [filesystem]

Returns the number of files available on this filesystem.

# free percent of [filesystem]

Returns the percentage of the file system currently available.

# free space of [filesystem]

Returns the number of bytes on this filesystem.

# logical volume of [filesystem]

On an AIX system, returns the logical volume corresponding to the given filesystem.

# name of [filesystem]

Returns the mount point of the filesystem object.Example: names of filesystems - Returns the mount points of the file systems.Example: (name of it, type of it) of filesystems - Returns the names and types of all mounted file systems.

# size of [filesystem]

Returns the total number of bytes on this file system (same as total space).

# total space of [filesystem]

Returns the total number of bytes on this file system (same as size).

# type of [filesystem]

Returns the filesystem format type, as listed in the type header.

# used file count of [filesystem]

The number of files in use on this filesystem.

# used percent of [filesystem]

Returns the percentage of the file system currently in use.

# used space of [filesystem]

Returns the number of bytes on this filesystem currently in use.

# volume of [filesystem]

This is a &lt;Plain&gt; property inspector that takes a &lt;filesystem&gt; type and returns a &lt;volume&gt; type.
