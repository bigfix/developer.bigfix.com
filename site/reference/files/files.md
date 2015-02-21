---
title: files
---

{% type symlink%}

Symlinks, or symbolic links, are the Unix version of shortcut files (pointers to other files). inspectors can analyze the file objects (files and folders) that symlinks point to by using the standard file inspectors. The symlink inspectors, on the other hand, allow you to analyze the properties of a symlink itself, not just the underlying file. There are many properties that symlinks have in common with files, such as name, pathname, parent folder, and more. In addition, a symlink has a value corresponding to the file object it points to. You can also determine if the file is available or not.

{% property <symlink> as symlink %}

Casts a symlink, provided for completeness.

{% property <symlink> as string %}

Casts a symlink object as a string.

{% property <symlink> as socket file %}

Casts a symlink type as a socket file type.

{% property <symlink> as folder %}

Converts a symlink object into the folder it points to.

{% property <symlink> as file %}

Converts a symlink object into the file it points to.

{% property <symlink> as fifo file %}

Casts a symlink type as a FIFO (named pipe) file.

{% property <symlink> as device file %}

Casts a symlink type as a device file type.

{% property value of <symlink> %}

Returns the pathname that the symlink points to.

{% property value accessible of <symlink> %}

Returns TRUE if the pathname pointed to by the specified symlink is available. Returns FALSE if the file object is missing or unavailable with the current permissions.

{% property user name of <symlink> %}

Returns the symlink owner&#39;s (user&#39;s) name.

{% property uid of <symlink> %}

The user ID of the user who owns this symlink.

{% property pathname of <symlink> %}

Returns a string that contains the full pathname of the specified symlink.

{% property parent folder of <symlink> %}

Creates a folder object corresponding to the parent folder of the given symlink.

{% property name of <symlink> %}

Returns a string that is the full pathname of the specified symlink.

{% property modification time of <symlink> %}

Returns the time corresponding to the modification time of the specified symlink, not the file it points to.Example: modification time of symlink &quot;/example/link&quot; - Returns the time corresponding to the modification time of the given symlink, not the file it points to.Example: modification time of file &quot;/example/link&quot; - Returns the time corresponding to the file object that the symlink is pointing to.

{% property location of <symlink> %}

Returns a string corresponding to the directory in which the symlink is located.

{% property link count of <symlink> %}

Returns an integer corresponding to the number of hard links attached to the specified symlink.

{% property group name of <symlink> %}

Returns the group name of the specified symlink.

{% property gid of <symlink> %}

Returns the group ID of the given symlink.

{% property filesystem of <symlink> %}

Returns the filesystem on which the symlink resides.

{% property drive of <symlink> %}

Returns the drive associated with the specified symlink as a &lt;filesystem&gt; object.

{% property change time of <symlink> %}

Returns the last time the specified symlink was &#39;changed&#39; by either writing it or setting its inode information.

{% property ancestor of <symlink> %}

Returns all ancestor folders (recursive parent folders) of the given symlink.

{% property accessed time of <symlink> %}

Returns the last accessed time of the specified symlink.

{% type folder%}

For every folder that exists in the file system, you can create a folder object. These inspectors allow you to examine dozens of properties of folder objects. On the Macintosh, there are dozens of specialized folders; access to them depends on the domain. If the domain is not specified, it defaults to the system domain.

{% property symlink of <folder> %}

Returns the symlink(s) in the specified folder, whether or not they are broken. Note: This behavior differs from looking for files in a folder. Although that returns links along with the files, it doesn&#39;t return broken links.

{% property symlink <string> of <folder> %}

Returns the named symlink from the specified folder.

{% property socket file of <folder> %}

Returns the socket file(s) in the specified folder.

{% property socket file <string> of <folder> %}

Returns the socket file with the given name in the specified folder.

{% property folder of <folder> %}

Iterates through the folders of a folder returning folder objects. When combined with a whose clause, you can select folders with specific properties.

{% property folder <string> of <folder> %}

Returns a folder object for the named sub-folder. Trailing slashes should be omitted from the name.

{% property find folder <string> of <folder> %}

Finds the folder with the given wildcard name inside another folder. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

{% property find file <string> of <folder> %}

Iterates through the files of a folder returning file objects whose name matches the wildcard string provided in the name parameter.  A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt. See example below.Example: Number of find files &quot;siteico*.bmp&quot; of client folder of current site = 3 - Returns TRUE if there are 3 files matching the wildcard pattern siteico*.bmp.Example: names of find files &quot;*.exe&quot; of windows folder - Returns a list of the names of all the executable programs in the Windows folder.

{% property filesystem of <folder> %}

Returns the filesystem on which the folder resides. On a Macintosh, this inspector returns a &lt;volume&gt; object.

{% property file of <folder> %}

Iterates through the files of a folder returning file objects. When combined with a whose clause you can select files with specific properties. See file.

{% property file <string> of <folder> %}

Returns a file object for the named file located in the folder.Example: exists file whose (name of it contains &quot;.pdf&quot;) of folder &quot;name&quot; - Returns TRUE if some file in the folder has a name including the string &quot;.pdf&quot;.

{% property fifo file of <folder> %}

Returns the list of FIFO file in the given folder.

{% property fifo file <string> of <folder> %}

Returns the FIFO file (named pipe) with the given name in the specified folder.

{% property drive of <folder> %}

Returns the drive associated with the specified folder.On Macintosh computers, this returns a &lt;volume&gt; object.On  *nix computers, this returns a &lt;filesystem&gt; object.

{% property device file of <folder> %}

Returns the device files that exist in the specified folder.

{% property device file <string> of <folder> %}

Returns the device file with the specified name in the given folder.

{% property descendant of <folder> %}

Returns a list of all the descendant files of the specified folder.

{% property descendant folder of <folder> %}

Returns the descendant folders, recursively, of the given folder. The folder equivalent of &quot;descendants of &lt;folder&gt;&quot;.

{% property application <string> of <folder> %}

Returns an application object for the named file located in the folder. See application.Example: exists application &quot;notepad.exe&quot; of the windows folder - Using the application of folder creation method, this example locates the notepad application provided it exists in the Windows folder.

{% property volume of <folder> %}

The volume containing the specified folder.

{% property version of <folder> %}

Returns a version for a folder representing an application.

{% property relative posix folder <string> of <folder> %}

Returns the POSIX folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

{% property relative posix file <string> of <folder> %}

Returns the POSIX file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

{% property relative item <string> of <folder> %}

Returns a filesystem object with the given relative item name from the specified folder, using POSIX format.

{% property relative hfs folder <string> of <folder> %}

Returns the HFS folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

{% property relative hfs file <string> of <folder> %}

Returns the HFS file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

{% property relative folder <string> of <folder> %}

Returns the folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

{% property relative file <string> of <folder> %}

Returns the file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.Example: relative file &quot;Safari.app/Contents/MacOS/Safari&quot; of applications folder - Returns the concatenation of the specified folder and the given path, /Applications/Safari.app/Contents/MacOS/Safari.

{% property posix relative item <string> of <folder> %}

Returns a filesystem object with the given relative item name from the specified folder, using POSIX format.

{% property item of <folder> %}

Returns a list of the items (file or folder) in the specified folder.Example: names of items of applications folder - Returns a list of applications, such as DS_Store, .localized, AddressBook.app, AppleScript, Calculator.app, Chess.app, DVD Player.app, etc....

{% property item ending in <string> of <folder> %}

Returns a list of items (files/folders) ending in &quot;xxxx&quot;. Typically used to identify a dotted extension. Equivalent to a wildcard search for &quot;*xxxx&quot;.

{% property item <string> of <folder> %}

Returns the named item (file or folder) from the specified folder.

{% property hfs relative item <string> of <folder> %}

Returns a filesystem object with the given wildcard name from the specified folder, using HFS format. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

{% property folder ending in <string> of <folder> %}

Returns a list of folders ending in &quot;xxxx&quot;. Typically used to identify a dotted extension. Equivalent to a wildcard search for &quot;*xxxx&quot;.

{% property find item <string> of <folder> %}

Returns the filesystem objects matching the item wildcard string of the given folder. Macintosh &#39;items&#39; are analogous to files and folders on other systems. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

{% property file ending in <string> of <folder> %}

Returns a list of files ending in &quot;xxxx&quot;. Typically used to identify a dotted extension. Equivalent to a wildcard search for &quot;*xxxx&quot;.Example: files ending in &quot;.a&quot; of folder &quot;/usr/lib&quot;  - Returns a list of files with the specified ending, such as: /usr/lib/libcpp_kext.a, /usr/lib/libfl.a, /usr/lib/libioabc.a, and others.

{% property bundle version of <folder> %}

Returns the version of the folder corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

{% property bundle of <folder> %}

Returns a bundle from a folder (if it has one like application folders do).Example: exists (bundle of applications folder) - Typically returns TRUE.

{% property application of <folder> %}

Recursively finds executables in the supplied folder, returning a list of &quot;application&quot; objects, which are basically  filesystem_objects.Example: applications of folder &quot;/Users/fizzle/bin&quot; - Returns a list of applications in the specified directory, such as /Users/fizzle/bin/p4, /Users/fizzle/bin/mylocaltool.

{% property security descriptor of <folder> %}

Specifies the security descriptor associated with the specified folder.

{% type filesystem object%}

The &lt;filesystem object&gt; inspectors provide handles for the various objects available in the file system.

{% property <filesystem object> as symlink %}

Casts a link in the form of a file into a symlink.

{% property <filesystem object> as string %}

Casts a filesystem object as a string.

{% property <filesystem object> as socket file %}

Casts a given filesystem object as a socket file.

{% property <filesystem object> as fifo file %}

Returns a FIFO file or nothing (if the filesystem object specified is not a FIFO file).

{% property <filesystem object> as device file %}

Returns a device file or nothing (if the filesystem object specified is not a device file).

{% property <filesystem object> as folder %}

Returns a folder or nothing.

{% property <filesystem object> as file %}

Returns a file or nothing (if, for example, the filesystem object was a folder).

{% property user write of <filesystem object> %}

Returns the owner (user) write permissions for the specified filesystem object.

{% property user read of <filesystem object> %}

Returns the owner (user) read permissions for the specified filesystem object.

{% property user name of <filesystem object> %}

Returns the owner (user) name of the specified filesystem object.

{% property user mask of <filesystem object> %}

Integer representing user permissions (3 bit mask, RWX) on the specified filesystem object.

{% property user execute of <filesystem object> %}

Returns TRUE if the owner (user) has execute permissions on the given filesystem object.

{% property uid of <filesystem object> %}

The user ID of the user who owns this filesystem object.

{% property setuid of <filesystem object> %}

Returns TRUE if the setuid (user ID) bit is set for the specified filesystem object.

{% property setgid of <filesystem object> %}

Returns TRUE if the setgid (group ID) bit is set for the specified filesystem object.

{% property pathname of <filesystem object> %}

Returns the full pathname of the specified file or folder (filesystem object) as a string.

{% property parent folder of <filesystem object> %}

The folder containing the specified file or folder.

{% property other write of <filesystem object> %}

Returns TRUE if others (not in the group) have write permissions on the given filesystem object.

{% property other read of <filesystem object> %}

Returns TRUE if others (not in the group) have read permissions on the given filesystem object.

{% property other mask of <filesystem object> %}

Returns the other (not in the group) mask as a 3-bit integer corresponding to rwx permissions for the specified filesystem object.

{% property other execute of <filesystem object> %}

Returns TRUE if others (not in the group) have execute permissions on the given filesystem object.

{% property name of <filesystem object> %}

This returns the name of the file or folder.

{% property modification time of <filesystem object> %}

The date and time of latest modification of the file. This corresponds to what is shown in the &quot;Get Info&quot; box.Example: name of object &quot;iChat.app&quot; of applications folder - Returns iChat.app.

{% property mode of <filesystem object> %}

Returns the permissions mode for the given filesystem object.

{% property location of <filesystem object> %}

Returns the name of the directory in which the file or folder (filesystem object) is located.

{% property link count of <filesystem object> %}

Returns an integer corresponding to the number of hard links attached to the specified filesystem object.

{% property group write of <filesystem object> %}

Returns TRUE if the group write flag is set for the given filesystem object.

{% property group read of <filesystem object> %}

Returns TRUE if the group read flag is set for the given filesystem object.

{% property group name of <filesystem object> %}

Returns the group name of the given filesystem object.

{% property group mask of <filesystem object> %}

Returns the group permission mask of the given filesystem object.

{% property group execute of <filesystem object> %}

Returns TRUE if the group execute flag is set for the given filesystem object.

{% property gid of <filesystem object> %}

Returns the group ID of the given filesystem object.

{% property change time of <filesystem object> %}

Returns the last time the specified filesystem object was changed by either writing it or setting its inode information.

{% property ancestor of <filesystem object> %}

Returns all ancestor folders (recursive parent folders) of the given filesystem object (file or folder).

{% property accessed time of <filesystem object> %}

When the filesystem object (file or folder) was last accessed. Some file systems maintain this property.

{% property version of <filesystem object> %}

This returns the version information from &quot;vers&quot; resource 1 of the file. It is usually present in applications, and may exist in data files as well. It corresponds to what appears in the &quot;Get Info&quot; box for the specified filesystem object.

{% property sibling item <string> of <filesystem object> %}

The named sibling of a filesystem object (file, folder).

{% property sibling folder <string> of <filesystem object> %}

A named property. A folder in the same folder as the specified file object.

{% property sibling file <string> of <filesystem object> %}

A named property. A file in the same folder as the specified file object.

{% property posix path of <filesystem object> %}

The POSIX file path for the file or folder.

{% property hfs path of <filesystem object> %}

Returns the path to a filesystem object in HFS terms (colons as delimiters).

{% property creation time of <filesystem object> %}

The date and time of creation of the specified file or folder. This corresponds to what is shown in the &quot;Get Info&quot; box.Example: creation time of file &quot;System&quot; of System Folder &gt; time &quot;3 jan 1998 00:00+0000&quot; - Returns TRUE if the creation time of the system file is newer than the specified date.

{% property bundle version of <filesystem object> %}

Returns the version of the filesystem object corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

{% property backup time of <filesystem object> %}

The date of the last backup of the specified filesystem object (such as a file or folder). This corresponds to what is shown in the &quot;Get Info&quot; box for this object.

{% property temporary of <filesystem object> %}

Returns TRUE if the file or folder (the filesystem object) is marked as a temporary folder.

{% property system of <filesystem object> %}

Returns TRUE if the file or folder (the filesystem object) is marked as a system folder.

{% property readonly of <filesystem object> %}

Returns TRUE if the file or folder (the filesystem object) is marked as read-only.

{% property offline of <filesystem object> %}

Returns TRUE if the file or folder (the filesystem object) is marked as &#39;offline&#39;.

{% property normal of <filesystem object> %}

Returns TRUE if the file or folder (filesystem object) is &#39;normal&#39;.

{% property hidden of <filesystem object> %}

Returns TRUE if the file or folder (filesystem object) is marked as hidden.

{% property drive of <filesystem object> %}

Returns the drive associated with the specified file or folder (filesystem object).

{% property compressed of <filesystem object> %}

Returns TRUE if the file or folder (filesystem object) has been compressed.

{% property archive of <filesystem object> %}

Returns TRUE if the Archive bit is turned on for the specified file or folder (filesystem object). This bit is often used by backup software.

{% type filesystem%}

The filesystem object can be used to inspect various aspects of mounted file systems, including the format of the file system. Here are some of the possible format types:affsext, ext2, ext2_oldhpfsisominix, minix_30, minix2, minix2_30 msdos ncpnfsprocsmbxenixsysv4, sysv2cohufsxia

{% property used space of <filesystem> %}

Returns the number of bytes on this filesystem currently in use.

{% property used percent of <filesystem> %}

Returns the percentage of the file system currently in use.

{% property used file count of <filesystem> %}

The number of files in use on this filesystem.

{% property type of <filesystem> %}

Returns the filesystem format type, as listed in the type header.

{% property total space of <filesystem> %}

Returns the total number of bytes on this file system (same as size).

{% property size of <filesystem> %}

Returns the total number of bytes on this file system (same as total space).

{% property name of <filesystem> %}

Returns the mount point of the filesystem object.Example: names of filesystems - Returns the mount points of the file systems.Example: (name of it, type of it) of filesystems - Returns the names and types of all mounted file systems.

{% property free space of <filesystem> %}

Returns the number of bytes on this filesystem.

{% property free percent of <filesystem> %}

Returns the percentage of the file system currently available.

{% property free file count of <filesystem> %}

Returns the number of files available on this filesystem.

{% property file count of <filesystem> %}

Returns the total number of files that may be saved on this filesystem.

{% property logical volume of <filesystem> %}

On an AIX system, returns the logical volume corresponding to the given filesystem.

{% property volume of <filesystem> %}

This is a &lt;Plain&gt; property inspector that takes a &lt;filesystem&gt; type and returns a &lt;volume&gt; type.

{% type file section%}

Many programs and utilities store their settings in &#39;ini&#39; files. This object is designed to access these settings. An &#39;ini&#39; file is composed of zero or more named sections, each with zero or more keys. Each key is identified by name and has a string value.

{% property key <string> of <file section> %}

Returns a string containing the value for the name provided. A case-insensitive search is performed through the section of the file.

{% type file line%}

A &lt;file line&gt; object produces strings from a text file.

{% property previous line of <file line> %}

Returns the line before the nth line in a file, provided n&gt;1. You may repeat this command up to three times.

{% property next line of <file line> %}

Returns the line after the specified line in a file (provided that it is not the last line). This inspector can be chained indefinitely, eg., next line of next line of ...

{% property line number of <file line> %}

Returns the line number of a given line. Can be used to locate specific lines in a file.Example:  line number of line containing &quot;[mciavi]&quot; of file &quot;mmdriver.inf&quot; of system folder - Returns the line number of the specified line in the given file.

{% type file content%}

Content objects can be constructed from file objects to inspect their contents.

{% property <file content> as uppercase %}

Returns an uppercase version of the content provided.

{% property <file content> as lowercase %}

Returns a lowercase version of the content provided.

{% type file%}

For each file in the file system, you can create a corresponding file object and inspect its properties. inspectors are also provided to look at version data of executable files.Note: File systems that do not maintain the creation or last accessed times will often return the last modification time when queried for the creation or last accessed times or files. Modification times are preserved when files are copied. Thus, it is not uncommon to see a file that appears to have been modified before it was created.

{% property <file> as string %}

Creates a string containing the full pathname of the specified file. See &lt;file&gt;.

{% property variable of <file> %}

Returns the names of variables contained in an INF style file, in the format [section].name=value.

{% property size of <file> %}

Returns the size in bytes of a file.

{% property sha1 of <file> %}

Returns the sha1 checksum of the file hex encoded as a 40 character long string.

{% property section <string> of <file> %}

Returns a named section of a file. Useful for locating sections of &#39;ini&#39; files. Section names are delimited by square bracket characters &#39;[section name]&#39;. See examples below.

{% property line starting with <string> of <file> %}

Same as line &lt;string&gt; of &lt;file&gt;, returns the lines of the given file that start with the specified string.

{% property line of <file> %}

Iterates over all the lines of the specified file. Note that the lines are truncated to 1023 characters.

{% property line containing <string> of <file> %}

Returns all lines from the given file that contain the specified string.

{% property line <integer> of <file> %}

Returns the nth line (specified by &lt;integer&gt;) from the given file.

{% property key <string> of <file> %}

Returns a key and its value from the given structured text file. It iterates over lines that start with the key name (as specified by &lt;string&gt;) followed by an = or : character. When searching, white space is ignored.

{% property filesystem of <file> %}

Returns the UNIX filesystem flag for the given file. On a Macintosh, this returns a &lt;volume&gt; object.

{% property drive of <file> %}

Returns the drive associated with the specified file. On Macintosh computers, this returns a &lt;volume&gt; object.On  *nix computers, this returns a &lt;filesystem&gt; object.

{% property content of <file> %}

Returns an object that can be used to search for a string in the file. See content.

{% property byte <integer> of <file> %}

Returns the numeric value of the byte located at the offset specified by number within the file. Byte 0 of the file is the first byte.Example: byte 0 of file &quot;C:\test.txt&quot; - Returns the first byte in the specified file.

{% property volume of <file> %}

The volume containing the file.

{% property visible of <file> %}

Returns TRUE if the file is visible.

{% property version <integer> of <file> %}

Returns the nth version information from the &quot;vers&quot; resource of the given file. Typically n=1, but other information may be stored in &quot;vers&quot; resources greater than 1.

{% property type of <file> %}

This refers to the four-character identifier used in all MacOS files. The type describes the sort of file it is.

{% property stationery of <file> %}

Returns TRUE if the file is a stationery file.

{% property resource fork of <file> %}

Returns information about the resource fork of the file.

{% property locked of <file> %}

Returns TRUE if the file is locked.Example: locked of file &quot;this file&quot; of folder &quot;this folder&quot; - Returns TRUE if the specified file is locked.

{% property length of <file> %}

The total length of the data and resource forks.Example: Length of data fork of file &quot;Microsoft Word&quot; of folder &quot;Microsoft Office X&quot; of Applications folder is greater than 100000 - Returns TRUE if the data fork of the system file is greater than the specified amount.

{% property dictionary of <file> %}

Returns the dictionary object for the specified file.

{% property data fork of <file> %}

Returns information about the data fork of the specified file.

{% property creator of <file> %}

This refers to the four-character identifier used in all MacOS files. The creator tells what application should open the specified file.

{% property alias of <file> %}

Returns TRUE if the file is an alias for another file.

{% property xml document of <file> %}

Returns an XML Document Object Model (DOM) for the specified file.

{% property version of <file> %}

Synonym for file version of &lt;file&gt;.

{% property version block of <file> %}

Iterates through the version blocks of a file.

{% property version block <string> of <file> %}

You can identify the particular version block you are looking up by name. The name you provide should match the id string of the version block.

{% property version block <integer> of <file> %}

You can identify the particular version block you want to access by ordinal number.

{% property shortcut of <file> %}

Returns the properties and locates the target of a file shortcut:pathname (string)start in pathname (string)argument string (string)icon pathname (string)icon index (integer).

{% property security descriptor of <file> %}

Specifies the security descriptor associated with the specified file.

{% property raw version of <file> %}

Returns the version directly from a PE file.

{% property raw version block of <file> %}

Returns the version block directly from a PE file.

{% property raw version block <string> of <file> %}

Returns the named version block directly from a PE file.

{% property raw version block <integer> of <file> %}

Returns the numbered version block directly from a PE file.

{% property raw product version of <file> %}

Returns the product version directly from a PE file.

{% property raw file version of <file> %}

Returns the file version directly from a PE file.

{% property product version of <file> %}

Returns the product version extracted from the file&#39;s resource block. See version.

{% property pem encoded certificate of <file> %}

Reads and returns the certificate from a file in the PEM format. This can be used to analyze encryption credentials on decrypting relays or root servers.

{% property only version block of <file> %}

Most files only have 1 version block. This property allows language independent access when there is only one version block present. The result is the same as &#39;version block 1&#39;.

{% property only raw version block of <file> %}

Returns the only version block directly from a PE file.

{% property first raw version block of <file> %}

Returns the first version block directly from a PE file. If the first block is sufficient for your purposes, use this version inspector for best speed.

{% property file version of <file> %}

Returns the file version extracted from the file&#39;s resource block. See version.

{% property executable file format of <file> %}

Returns a four-byte string containing the format specifier for the specified file.Example: executable file format of client - Returns a string like &quot;PE%00%00&quot;.

{% property aol error time of <file> %}

No documentation exists for this property.

{% property aol error of <file> %}

No documentation exists for this property.

{% property array of <file> %}

This inspector creates an OSXArray from the specified XML Data file.

{% property sqlite database of <file> %}

No documentation exists for this property.

{% property sha2_512 of <file> %}

Returns the sha2-512 of the file, hex encoded as a string

{% property sha2_384 of <file> %}

Returns the sha2-384 of the file, hex encoded as a string

{% property sha2_256 of <file> %}

Returns the sha2-256 of the file, hex encoded as a string

{% property sha2_224 of <file> %}

Returns the sha2-224 of the file, hex encoded as a string

{% property md5 of <file> %}

Returns the md5 of the file, hex encoded as a string

{% property json of <file> %}

No documentation exists for this property.

{% property sha512 of <file> %}

No documentation exists for this property.

{% property sha384 of <file> %}

No documentation exists for this property.

{% property sha256 of <file> %}

No documentation exists for this property.

{% property sha224 of <file> %}

No documentation exists for this property.

{% property windows checksum of <file> %}

No documentation exists for this property.

{% type fifo file%}

In Unix systems, a FIFO file is a named pipe that uses the file system as a way to store the pipe name. These inspectors provide access to these named pipes.

{% property filesystem of <fifo file> %}

Returns the filesystem object corresponding to the specified FIFO file.

{% property drive of <fifo file> %}

Returns the drive associated with the specified FIFO (named pipe) file.

{% type device file%}

These inspector types interrogate Unix-style device files, which contain device drivers or system resources. Unix identifies these resources by a major number and a minor number, both stored as part of a node structure. Typically, the major number identifies the device driver and the minor number identifies the particular device controlled by that driver.

{% property minor of <device file> %}

Returns the minor number of the specified device file.

{% property major of <device file> %}

Returns the major number of the specified device file.

{% property filesystem of <device file> %}

Returns the filesystem object corresponding to the specified device file.

{% property drive of <device file> %}

Returns the drive associated with the specified device file.

{% property device type of <device file> %}

Returns the device type corresponding to the give device file, as a string.

{% type swap%}

This object lets you inspect the properties of your swap space.

{% property used amount of <swap> %}

Returns the amount of the swap partition currently in use, in bytes.

{% property total amount of <swap> %}

Same as size of &lt;swap&gt;.

{% property size of <swap> %}

Returns the size, in bytes, of the swap partition.

{% property free amount of <swap> %}

Returns the amount of the swap partition currently unused, in bytes.

{% type file version block%}

You can inspect the version blocks of a file. There may be several language-specific version blocks. Version blocks contain version and name information in a human readable form for the specified language. This is the information that Windows displays in the file properties dialog. This technique uses string values and has a limited array of comparators. For better speed, utility and compactness see the version object.

{% property value <string> of <file version block> %}

Returns a string corresponding to the name provided. Values have names such as &#39;CompanyName&#39;, &#39;FileDescription&#39;, &#39;FileVersion&#39;.Example: value &quot;FileVersion&quot; of version block 1 of regapp &quot;bigfix.exe&quot; as version - When casting a string value to a version, the parser skips through the string until it identifies something that can be interpreted as a version. This is convenient for extracting version numbers from strings containing added text.

{% property language of <file version block> %}

A string representation of the language portion of the id of this version block. For example, &#39;English (United States)&#39;. See notes for known values.Example: language of version block 1 of regapp &quot;bigfix.exe&quot; = &quot;English (United States)&quot; - Returns TRUE if the given file&#39;s version block language is as specified.

{% property id of <file version block> %}

A string representation containing both the language and codepage of this version block. The format is 8 hex digits, 4 of the codepage concatenated with 4 of the language. For example, &#39;040904b0&#39;. See notes for known values.Example: id of only version block of regapp &quot;bigfix.exe&quot; is &quot;040904b0&quot; - Returns TRUE if the given file&#39;s version block id is the specified string.

{% property codepage of <file version block> %}

A string representation of the codepage portion of the id of this version block. See notes for known codepage strings. For example, &#39;Unicode&#39;.Example: codepage of only version block of regapp &quot;bigfix.exe&quot; is &quot;Unicode&quot; - Returns TRUE if the version block codepage for the specified file is unicode.

{% type file shortcut%}

Shortcuts to files can be constructed in the file system. The shortcut contains some additional properties that can be inspected.

{% property start in pathname of <file shortcut> %}

Returns the full pathname the system sets the current directory when the user launches the shortcut.

{% property pathname of <file shortcut> %}

Returns the full pathname of the object to which the shortcut points.Example: pathname of parent folder of system folder = pathname of windows folder - Checks that the system folder is located inside the Windows folder.

{% property icon pathname of <file shortcut> %}

The full pathname of the file containing the icon associated with the shortcut.

{% property icon index of <file shortcut> %}

The index number of the icon in the file containing the icon associated with the shortcut.

{% property argument string of <file shortcut> %}

Returns the arguments that are passed to the application to which the shortcut points when the user attempts to open the shortcut.

{% type mode_mask%}

The &lt;mode_mask&gt; inspector is a differently formatted version of the mode, created by shifting the key information down to the low three bits. 

{% property <mode_mask> as string %}

Converts the mode mask to a string, for example &quot;rwx&quot;.

{% property <mode_mask> as integer %}

Converts the mode mask to an integer, 1-4.

{% property write of <mode_mask> %}

Returns TRUE if the write flag (w) of the rwx mode mask is on. (binary 010 = 2).

{% property read of <mode_mask> %}

Returns TRUE if the read flag of the rwx mode mask is on. (binary 100 = 4).

{% property execute of <mode_mask> %}

Returns TRUE if the execute flag (x) of the rwx mode mask is on. (binary 001 = 1).

{% type mode%}

The &lt;mode&gt; inpector returns file type information and permissions. These are the possible values of mode:S_IFMT 170000 bitmask for the file type bitfieldsS_IFSOCK 140000 socketS_IFLNK 120000 symbolic linkS_IFREG 100000 regular fileS_IFBLK 060000 block deviceS_IFDIR 040000 directoryS_IFCHR 020000 character deviceS_IFIFO 010000 fifoS_ISUID 004000 set UID bitS_ISGID 002000 set GID bitS_ISVTX 001000 sticky bitS_IRWXU 000700 mask for file owner permissionsS_IRUSR 000400 owner has read permissionS_IWUSR 000200 owner has write permissionS_IXUSR 000100 owner has execute permissionS_IRWXG 000070 mask for group permissionsS_IRGRP 000040 group has read permissionS_IWGRP 000020 group has write permissionS_IXGRP 000010 group has execute permissionS_IRWXO 000007 mask for permissions for others (not in group)S_IROTH 000004 others have read permissionS_IWOTH 000002 others have write permissionS_IXOTH 000001 others have execute permission

{% property <mode> as string %}

Converts the mode to a string.

{% property <mode> as octal string %}

Converts the mode to a string of octal numbers.

{% property user mask of <mode> %}

Returns the mask for the user (file owner) permissions for the given mode.

{% property sticky of <mode> %}

The `sticky&#39; bit (S_ISVTX) on a directory means that a file in that directory can be renamed or deleted only by the owner of the file, by the owner of the directory, and by root. This inspector returns TRUE if the sticky bit of the given mode is on.

{% property setuid of <mode> %}

Returns TRUE if setuid (the user ID flag) is set.

{% property setgid of <mode> %}

Returns TRUE if setgid (the group ID flag) is set.

{% property other mask of <mode> %}

Returns the mask for permissions for others (those not in the group) for the given mode.

{% property group mask of <mode> %}

Returns the mask for group permissions for the given mode.

{% type datafork%}

The &lt;datafork&gt; inspectors refer to the data fork of a filesystem object.

{% property size of <datafork> %}

Returns the size of the specified datafork.

{% property length of <datafork> %}

The logical length of the data fork of the file.

{% type resfork%}

The &lt;resfork&gt; inspectors refer to the resource fork of a filesystem object.

{% property size of <resfork> %}

Returns the size of the resource fork.

{% property length of <resfork> %}

The logical length of the resource fork of the file.

{% type volume%}

The &lt;volume&gt; inspectors refer to the mounted drive volumes.

{% property used space of <volume> %}

Returns a number corresponding to the used bytes on the specified volume.Example: used space of volume 1 - Returns a number bytes such as 32167669760.

{% property used percent of <volume> %}

Returns the used percentage of room on the specified volume (or drive or filesystem).Example: used percentage of volume 2 - Returns a number between 0 and 100.

{% property total space of <volume> %}

The total amount of space, used and free, on the volume.

{% property size of <volume> %}

Returns a number corresponding to the total number of bytes (used and unused) on the specified volume.Example: size of volume 1 - Returns the size of the specified volume in bytes, eg. 159697911808.

{% property name of <volume> %}

The name of the volume.

{% property modification time of <volume> %}

Creates a time object corresponding to the time the volume was last modified.

{% property init date of <volume> %}

Returns the initialization date of a disk volume.Example: init date of volume of system folder - Returns the date the system folder was initialized.

{% property free space of <volume> %}

The number of free bytes on the volume.

{% property free percent of <volume> %}

Returns the percentage of room available on the specified volume.Example: free percentage of volume 1  - Returns a number between 0 and 100.

{% property flag of <volume> %}

Returns the Mac-specific volume flags.More info on these flags can be found at the Apple developer site, under Carbon &gt; Reference &gt; File Manager.

{% property file count of <volume> %}

The number of files on the volume.

{% property directory count of <volume> %}

The number of directories on the volume.

{% property allocation block count of <volume> %}

The number of allocation blocks, used or free, on the volume.

{% property type of <volume> %}

This Mac inspector returns the drive type as a string, such as &#39;DRIVE_FIXED&#39;.

{% type file type%}

The &lt;file type&gt; inspectors provide access to the four character file type associated with some types of files.

{% type file signature%}

The &lt;file signature&gt; inspectors provide access to each of the four character file signatures associated with some types of files.

{% type enableable_file%}

No documentation exists for this type.

{% property enabled of <enableable_file> %}

No documentation exists for this property.

{% property disabled of <enableable_file> %}

No documentation exists for this property.

{% type domain%}

Mac OS X defines several file system domains to control access to system resources on multi-user systems. These include the User, Local, Network, Classic and System domains. The domain for a given resource or folder determines its accessibility to the user. For example, while a user-installed font is only available to that user, an administrator-installed font is available to all network users. These inspectors allow folder access to be parceled out according to domain.Note: The &quot;user domain&quot; refers to the root user, not the currently logged in user.

{% property volume settings folder of <domain> %}

Returns the volume settings folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property voices folder of <domain> %}

Returns the voices folder of the specified OS X domain, typically /System/Library/Speech/Voices. If the domain is not specified, it defaults to the system domain.

{% property utilities folder of <domain> %}

Returns the utilities folder of the specified OS X domain, typically /Applications/Utilities. If the domain is not specified, it defaults to the system domain.

{% property users folder of <domain> %}

Returns the users folder of the specified OS X domain, typically /Users. If the domain is not specified, it defaults to the system domain.

{% property user temp folder of <domain> %}

Returns the user temp folder of the specified OS X domain, typically /private/tmp/uid where uid is the user ID number. If the domain is not specified, it defaults to the system domain.

{% property themes folder of <domain> %}

Returns the themes folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property text encodings folder of <domain> %}

Returns the text encodings folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property temporary items folder of <domain> %}

Returns the temporary items folder of the specified OS X domain, typically /private/tmp/. If the domain is not specified, it defaults to the system domain.

{% property system folder of <domain> %}

Returns the system folder of the specified OS X domain, typically /System. If the domain is not specified, it defaults to the system domain.

{% property startup items folder of <domain> %}

Returns the startup items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property speech folder of <domain> %}

Returns the speech folder of the specified OS X domain, typically /System/Library/Speech. If the domain is not specified, it defaults to the system domain.

{% property sound folder of <domain> %}

Returns the sound folder of the specified OS X domain, typically /System/Library/Sound. If the domain is not specified, it defaults to the system domain.

{% property shutdown items folder of <domain> %}

Returns the shutdown items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property shared libraries folder of <domain> %}

Returns the shared libraries folder of the specified OS X domain, typically /System/Library/CFMSupport. If the domain is not specified, it defaults to the system domain.

{% property shared folder of <domain> %}

Returns the shared folder of the specified OS X domain, typically /Users/Shared. If the domain is not specified, it defaults to the system domain.

{% property scripting additions folder of <domain> %}

Returns the scripting additions folder of the specified OS X domain, typically /System/Library/Scripting Additions. If the domain is not specified, it defaults to the system domain.

{% property receipts folder of <domain> %}

Returns the receipts folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property quicktime folder of <domain> %}

Returns the quicktime folder of the specified OS X domain, typically /System/Library/QuickTime. If the domain is not specified, it defaults to the system domain.

{% property private framework folder of <domain> %}

Returns the private framework folder of the specified OS X domain, typically /System/Library/PrivateFrameworks. If the domain is not specified, it defaults to the system domain.

{% property printmonitor documents folder of <domain> %}

Returns the printmonitor documents folder of the specified OS X domain, typically /Library/Printers/PrintMonitor Documents. If the domain is not specified, it defaults to the system domain.

{% property printers folder of <domain> %}

Returns the printers folder of the specified OS X domain, typically /System/Library/Printers. If the domain is not specified, it defaults to the system domain.

{% property printer drivers folder of <domain> %}

Returns the printer drivers folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property printer descriptions folder of <domain> %}

Returns the printer descriptions folder of the specified OS X domain, typically /System/Library/Printers/PPDs. If the domain is not specified, it defaults to the system domain.

{% property preferences folder of <domain> %}

Returns the preferences folder of the specified OS X domain, typically /Users/username/Library/Preferences. If the domain is not specified, it defaults to the system domain.

{% property modem scripts folder of <domain> %}

Returns the modem scripts folder of the specified OS X domain, typically /System/Library/Modem Scripts. If the domain is not specified, it defaults to the system domain.

{% property macos read me folder of <domain> %}

Returns the Mac OS read me folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property locations folder of <domain> %}

Returns the locations folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property location manager preferences folder of <domain> %}

Returns the location manager preferences folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property location manager modules folder of <domain> %}

Returns the location manager modules folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property locales folder of <domain> %}

Returns the locales folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property kernel extensions folder of <domain> %}

Returns the kernel extensions folder of the specified OS X domain, typically /System/Library/Extensions. If the domain is not specified, it defaults to the system domain.

{% property iss download folder of <domain> %}

Returns the Macintosh download folder for the specified domain.

{% property internet plugins folder of <domain> %}

Returns the internet plugins folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property help folder of <domain> %}

Returns the help folder of the specified OS X domain, typically /Library/Documentation/Help. If the domain is not specified, it defaults to the system domain.

{% property framework folder of <domain> %}

Returns the framework folder of the specified OS X domain, typically /System/Library/Frameworks. If the domain is not specified, it defaults to the system domain.

{% property framework <string> of <domain> %}

Returns a folder of the form &quot;/System/Library/Frameworks/&lt;string&gt;.framework&quot;.Note: This inspector appends .framework for you, so don&#39;t provide it. The framework inspector needs a domain, and without it defaults to the system domain.Example: framework &quot;MyPrivate&quot; of local domain - Returns /Library/Frameworks/MyPrivate.framework.

{% property fonts folder of <domain> %}

Returns the font folder of the specified OS X domain, typically /System/Library/Fonts. If the domain is not specified, it defaults to the system domain.

{% property favorites folder of <domain> %}

Returns the favorites folder of the specified OS X domain, typically /Users/username/Library/Favorites. If the domain is not specified, it defaults to the system domain.

{% property extensions folder of <domain> %}

Returns the extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property domain top folder of <domain> %}

Returns the top folder of the specified OS X domain, typically found at /System. If the domain is not specified, it defaults to the system domain.

{% property domain library folder of <domain> %}

Returns the domain library folder of the specified OS X domain, typically found at /Library. If the domain is not specified, it defaults to the system domain.

{% property documents folder of <domain> %}

Returns the documents folder for the specified OS X domain, typically found at /User/Username/Documents. If the domain is not specified, it defaults to the system domain.

{% property documentation folder of <domain> %}

Returns the documentation folder for the given OS X domain, typically found at /Library/Documentation. If the domain is not specified, it defaults to the system domain.Example: application support folder of user domain - Returns /var/root/Library/Application Support.

{% property disabled system extensions folder of <domain> %}

Returns the systems extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property disabled startup items folder of <domain> %}

Returns the startup items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property disabled shutdown items folder of <domain> %}

Returns the shutdown folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property disabled extensions folder of <domain> %}

Returns the extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property disabled control panels folder of <domain> %}

Returns the control panels folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property developer help folder of <domain> %}

Returns the help folder of the specified OS X domain, typically /Developer/Documentation/Help. If the domain is not specified, it defaults to the system domain.

{% property developer folder of <domain> %}

Returns the developer folder of the specified OS X domain, typically found at /Developer. If the domain is not specified, it defaults to the system domain. If the domain is not specified, it defaults to the system domain.

{% property developer docs folder of <domain> %}

Returns the developer docs folder of the specified OS X domain, typically found at /Developer/Documentation. If the domain is not specified, it defaults to the system domain.

{% property desktop folder of <domain> %}

Returns the desktop folder of the specified OS X domain, typically /Users/Username/Desktop. If the domain is not specified, it defaults to the system domain.

{% property current user folder of <domain> %}

Returns the current user folder of the specified OS X domain, typically found at /Users/username. If the domain is not specified, it defaults to the system domain.

{% property core services folder of <domain> %}

Returns the core services folder of the specified OS X domain, typically /System/Library/CoreServices. If the domain is not specified, it defaults to the system domain.

{% property control strip modules folder of <domain> %}

Returns the control strip modules folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property control panels folder of <domain> %}

Returns the control panels folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property contextual menu items folder of <domain> %}

Returns the contextual menu items folder of the specified OS X domain, typically /Library/Contextual Menu Items. If the domain is not specified, it defaults to the system domain.

{% property component folder of <domain> %}

Returns the component folder of the specified OS X domain, typically /System/Library/Components. If the domain is not specified, it defaults to the system domain.

{% property colorsync profiles folder of <domain> %}

Returns the colorsync profiles folder of the specified OS X domain, typically /System/Library/ColorSync/Profiles. If the domain is not specified, it defaults to the system domain.

{% property color sync folder of <domain> %}

Returns the color sync folder of the specified OS X domain, typically /System/Library/ColorSync. If the domain is not specified, it defaults to the system domain.Example: color sync folder of system domain - Returns /System/Library/ColorSync.Example: color sync folder of local domain - Returns /Library/ColorSync.

{% property classic folder of <domain> %}

Returns the classic folder of the specified OS X domain, typically the /System Folder. If the domain is not specified, it defaults to the system domain.

{% property chewable items folder of <domain> %}

Returns the chewable items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property carbon folder of <domain> %}

Returns the carbon folder of the specified OS X domain, typically /Library/Carbon. If the domain is not specified, it defaults to the system domain.

{% property cache folder of <domain> %}

Returns the cache folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property audio folder of <domain> %}

Returns the audio folder of the specified OS X domain, typically /Library/Audio. If the domain is not specified, it defaults to the system domain.

{% property assistants folder of <domain> %}

Returns the assistants folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property applications folder of <domain> %}

Returns the applications folder of the specified OS X domain, typically /Applications. If the domain is not specified, it defaults to the system domain.

{% property application support folder of <domain> %}

Returns the application support folder of the specified OS X domain, typically /Library/Application Support. If the domain is not specified, it defaults to the system domain.

{% property apple menu items folder of <domain> %}

Returns the apple menu items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

{% property apple extras folder of <domain> %}

Returns the apple extras folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

