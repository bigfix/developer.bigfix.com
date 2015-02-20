---
title: files
---

## symlink

Symlinks, or symbolic links, are the Unix version of shortcut files (pointers to other files). inspectors can analyze the file objects (files and folders) that symlinks point to by using the standard file inspectors. The symlink inspectors, on the other hand, allow you to analyze the properties of a symlink itself, not just the underlying file. There are many properties that symlinks have in common with files, such as name, pathname, parent folder, and more. In addition, a symlink has a value corresponding to the file object it points to. You can also determine if the file is available or not.

#### &lt;symlink&gt; as symlink : symlink

Casts a symlink, provided for completeness.

#### &lt;symlink&gt; as string : string

Casts a symlink object as a string.

#### &lt;symlink&gt; as socket file : socket file

Casts a symlink type as a socket file type.

#### &lt;symlink&gt; as folder : folder

Converts a symlink object into the folder it points to.

#### &lt;symlink&gt; as file : file

Converts a symlink object into the file it points to.

#### &lt;symlink&gt; as fifo file : fifo file

Casts a symlink type as a FIFO (named pipe) file.

#### &lt;symlink&gt; as device file : device file

Casts a symlink type as a device file type.

#### value of &lt;symlink&gt; : string

Returns the pathname that the symlink points to.

#### value accessible of &lt;symlink&gt; : boolean

Returns TRUE if the pathname pointed to by the specified symlink is available. Returns FALSE if the file object is missing or unavailable with the current permissions.

#### user name of &lt;symlink&gt; : string

Returns the symlink owner&#39;s (user&#39;s) name.

#### uid of &lt;symlink&gt; : integer

The user ID of the user who owns this symlink.

#### pathname of &lt;symlink&gt; : string

Returns a string that contains the full pathname of the specified symlink.

#### parent folder of &lt;symlink&gt; : folder

Creates a folder object corresponding to the parent folder of the given symlink.

#### name of &lt;symlink&gt; : string

Returns a string that is the full pathname of the specified symlink.

#### modification time of &lt;symlink&gt; : time

Returns the time corresponding to the modification time of the specified symlink, not the file it points to.Example: modification time of symlink &quot;/example/link&quot; - Returns the time corresponding to the modification time of the given symlink, not the file it points to.Example: modification time of file &quot;/example/link&quot; - Returns the time corresponding to the file object that the symlink is pointing to.

#### location of &lt;symlink&gt; : string

Returns a string corresponding to the directory in which the symlink is located.

#### link count of &lt;symlink&gt; : integer

Returns an integer corresponding to the number of hard links attached to the specified symlink.

#### group name of &lt;symlink&gt; : string

Returns the group name of the specified symlink.

#### gid of &lt;symlink&gt; : integer

Returns the group ID of the given symlink.

#### filesystem of &lt;symlink&gt; : filesystem

Returns the filesystem on which the symlink resides.

#### drive of &lt;symlink&gt; : filesystem

Returns the drive associated with the specified symlink as a &lt;filesystem&gt; object.

#### change time of &lt;symlink&gt; : time

Returns the last time the specified symlink was &#39;changed&#39; by either writing it or setting its inode information.

#### ancestor of &lt;symlink&gt; : folder

Returns all ancestor folders (recursive parent folders) of the given symlink.

#### accessed time of &lt;symlink&gt; : time

Returns the last accessed time of the specified symlink.

## folder

For every folder that exists in the file system, you can create a folder object. These inspectors allow you to examine dozens of properties of folder objects. On the Macintosh, there are dozens of specialized folders; access to them depends on the domain. If the domain is not specified, it defaults to the system domain.

#### symlink of &lt;folder&gt; : symlink

Returns the symlink(s) in the specified folder, whether or not they are broken. Note: This behavior differs from looking for files in a folder. Although that returns links along with the files, it doesn&#39;t return broken links.

#### symlink &lt;string&gt; of &lt;folder&gt; : symlink

Returns the named symlink from the specified folder.

#### socket file of &lt;folder&gt; : socket file

Returns the socket file(s) in the specified folder.

#### socket file &lt;string&gt; of &lt;folder&gt; : socket file

Returns the socket file with the given name in the specified folder.

#### folder of &lt;folder&gt; : folder

Iterates through the folders of a folder returning folder objects. When combined with a whose clause, you can select folders with specific properties.

#### folder &lt;string&gt; of &lt;folder&gt; : folder

Returns a folder object for the named sub-folder. Trailing slashes should be omitted from the name.

#### find folder &lt;string&gt; of &lt;folder&gt; : folder

Finds the folder with the given wildcard name inside another folder. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

#### find file &lt;string&gt; of &lt;folder&gt; : file

Iterates through the files of a folder returning file objects whose name matches the wildcard string provided in the name parameter.  A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt. See example below.Example: Number of find files &quot;siteico*.bmp&quot; of client folder of current site = 3 - Returns TRUE if there are 3 files matching the wildcard pattern siteico*.bmp.Example: names of find files &quot;*.exe&quot; of windows folder - Returns a list of the names of all the executable programs in the Windows folder.

#### filesystem of &lt;folder&gt; : filesystem

Returns the filesystem on which the folder resides. On a Macintosh, this inspector returns a &lt;volume&gt; object.

#### file of &lt;folder&gt; : file

Iterates through the files of a folder returning file objects. When combined with a whose clause you can select files with specific properties. See file.

#### file &lt;string&gt; of &lt;folder&gt; : file

Returns a file object for the named file located in the folder.Example: exists file whose (name of it contains &quot;.pdf&quot;) of folder &quot;name&quot; - Returns TRUE if some file in the folder has a name including the string &quot;.pdf&quot;.

#### fifo file of &lt;folder&gt; : fifo file

Returns the list of FIFO file in the given folder.

#### fifo file &lt;string&gt; of &lt;folder&gt; : fifo file

Returns the FIFO file (named pipe) with the given name in the specified folder.

#### drive of &lt;folder&gt; : filesystem

Returns the drive associated with the specified folder.On Macintosh computers, this returns a &lt;volume&gt; object.On  *nix computers, this returns a &lt;filesystem&gt; object.

#### device file of &lt;folder&gt; : device file

Returns the device files that exist in the specified folder.

#### device file &lt;string&gt; of &lt;folder&gt; : device file

Returns the device file with the specified name in the given folder.

#### descendant of &lt;folder&gt; : file

Returns a list of all the descendant files of the specified folder.

#### descendant folder of &lt;folder&gt; : folder

Returns the descendant folders, recursively, of the given folder. The folder equivalent of &quot;descendants of &lt;folder&gt;&quot;.

#### application &lt;string&gt; of &lt;folder&gt; : application

Returns an application object for the named file located in the folder. See application.Example: exists application &quot;notepad.exe&quot; of the windows folder - Using the application of folder creation method, this example locates the notepad application provided it exists in the Windows folder.

#### volume of &lt;folder&gt; : volume

The volume containing the specified folder.

#### version of &lt;folder&gt; : version

Returns a version for a folder representing an application.

#### relative posix folder &lt;string&gt; of &lt;folder&gt; : folder

Returns the POSIX folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

#### relative posix file &lt;string&gt; of &lt;folder&gt; : file

Returns the POSIX file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

#### relative item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a filesystem object with the given relative item name from the specified folder, using POSIX format.

#### relative hfs folder &lt;string&gt; of &lt;folder&gt; : folder

Returns the HFS folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

#### relative hfs file &lt;string&gt; of &lt;folder&gt; : file

Returns the HFS file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

#### relative folder &lt;string&gt; of &lt;folder&gt; : folder

Returns the folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

#### relative file &lt;string&gt; of &lt;folder&gt; : file

Returns the file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.Example: relative file &quot;Safari.app/Contents/MacOS/Safari&quot; of applications folder - Returns the concatenation of the specified folder and the given path, /Applications/Safari.app/Contents/MacOS/Safari.

#### posix relative item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a filesystem object with the given relative item name from the specified folder, using POSIX format.

#### item of &lt;folder&gt; : filesystem object

Returns a list of the items (file or folder) in the specified folder.Example: names of items of applications folder - Returns a list of applications, such as DS_Store, .localized, AddressBook.app, AppleScript, Calculator.app, Chess.app, DVD Player.app, etc....

#### item ending in &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a list of items (files/folders) ending in &quot;xxxx&quot;. Typically used to identify a dotted extension. Equivalent to a wildcard search for &quot;*xxxx&quot;.

#### item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns the named item (file or folder) from the specified folder.

#### hfs relative item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a filesystem object with the given wildcard name from the specified folder, using HFS format. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

#### folder ending in &lt;string&gt; of &lt;folder&gt; : folder

Returns a list of folders ending in &quot;xxxx&quot;. Typically used to identify a dotted extension. Equivalent to a wildcard search for &quot;*xxxx&quot;.

#### find item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns the filesystem objects matching the item wildcard string of the given folder. Macintosh &#39;items&#39; are analogous to files and folders on other systems. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

#### file ending in &lt;string&gt; of &lt;folder&gt; : file

Returns a list of files ending in &quot;xxxx&quot;. Typically used to identify a dotted extension. Equivalent to a wildcard search for &quot;*xxxx&quot;.Example: files ending in &quot;.a&quot; of folder &quot;/usr/lib&quot;  - Returns a list of files with the specified ending, such as: /usr/lib/libcpp_kext.a, /usr/lib/libfl.a, /usr/lib/libioabc.a, and others.

#### bundle version of &lt;folder&gt; : version

Returns the version of the folder corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

#### bundle of &lt;folder&gt; : bundle

Returns a bundle from a folder (if it has one like application folders do).Example: exists (bundle of applications folder) - Typically returns TRUE.

#### application of &lt;folder&gt; : application

Recursively finds executables in the supplied folder, returning a list of &quot;application&quot; objects, which are basically  filesystem_objects.Example: applications of folder &quot;/Users/fizzle/bin&quot; - Returns a list of applications in the specified directory, such as /Users/fizzle/bin/p4, /Users/fizzle/bin/mylocaltool.

#### security descriptor of &lt;folder&gt; : security descriptor

Specifies the security descriptor associated with the specified folder.

## filesystem object

The &lt;filesystem object&gt; inspectors provide handles for the various objects available in the file system.

#### &lt;filesystem object&gt; as symlink : symlink

Casts a link in the form of a file into a symlink.

#### &lt;filesystem object&gt; as string : string

Casts a filesystem object as a string.

#### &lt;filesystem object&gt; as socket file : socket file

Casts a given filesystem object as a socket file.

#### &lt;filesystem object&gt; as fifo file : fifo file

Returns a FIFO file or nothing (if the filesystem object specified is not a FIFO file).

#### &lt;filesystem object&gt; as device file : device file

Returns a device file or nothing (if the filesystem object specified is not a device file).

#### &lt;filesystem object&gt; as folder : folder

Returns a folder or nothing.

#### &lt;filesystem object&gt; as file : file

Returns a file or nothing (if, for example, the filesystem object was a folder).

#### user write of &lt;filesystem object&gt; : boolean

Returns the owner (user) write permissions for the specified filesystem object.

#### user read of &lt;filesystem object&gt; : boolean

Returns the owner (user) read permissions for the specified filesystem object.

#### user name of &lt;filesystem object&gt; : string

Returns the owner (user) name of the specified filesystem object.

#### user mask of &lt;filesystem object&gt; : integer

Integer representing user permissions (3 bit mask, RWX) on the specified filesystem object.

#### user execute of &lt;filesystem object&gt; : boolean

Returns TRUE if the owner (user) has execute permissions on the given filesystem object.

#### uid of &lt;filesystem object&gt; : integer

The user ID of the user who owns this filesystem object.

#### setuid of &lt;filesystem object&gt; : boolean

Returns TRUE if the setuid (user ID) bit is set for the specified filesystem object.

#### setgid of &lt;filesystem object&gt; : boolean

Returns TRUE if the setgid (group ID) bit is set for the specified filesystem object.

#### pathname of &lt;filesystem object&gt; : string

Returns the full pathname of the specified file or folder (filesystem object) as a string.

#### parent folder of &lt;filesystem object&gt; : folder

The folder containing the specified file or folder.

#### other write of &lt;filesystem object&gt; : boolean

Returns TRUE if others (not in the group) have write permissions on the given filesystem object.

#### other read of &lt;filesystem object&gt; : boolean

Returns TRUE if others (not in the group) have read permissions on the given filesystem object.

#### other mask of &lt;filesystem object&gt; : integer

Returns the other (not in the group) mask as a 3-bit integer corresponding to rwx permissions for the specified filesystem object.

#### other execute of &lt;filesystem object&gt; : boolean

Returns TRUE if others (not in the group) have execute permissions on the given filesystem object.

#### name of &lt;filesystem object&gt; : string

This returns the name of the file or folder.

#### modification time of &lt;filesystem object&gt; : time

The date and time of latest modification of the file. This corresponds to what is shown in the &quot;Get Info&quot; box.Example: name of object &quot;iChat.app&quot; of applications folder - Returns iChat.app.

#### mode of &lt;filesystem object&gt; : mode

Returns the permissions mode for the given filesystem object.

#### location of &lt;filesystem object&gt; : string

Returns the name of the directory in which the file or folder (filesystem object) is located.

#### link count of &lt;filesystem object&gt; : integer

Returns an integer corresponding to the number of hard links attached to the specified filesystem object.

#### group write of &lt;filesystem object&gt; : boolean

Returns TRUE if the group write flag is set for the given filesystem object.

#### group read of &lt;filesystem object&gt; : boolean

Returns TRUE if the group read flag is set for the given filesystem object.

#### group name of &lt;filesystem object&gt; : string

Returns the group name of the given filesystem object.

#### group mask of &lt;filesystem object&gt; : integer

Returns the group permission mask of the given filesystem object.

#### group execute of &lt;filesystem object&gt; : boolean

Returns TRUE if the group execute flag is set for the given filesystem object.

#### gid of &lt;filesystem object&gt; : integer

Returns the group ID of the given filesystem object.

#### change time of &lt;filesystem object&gt; : time

Returns the last time the specified filesystem object was changed by either writing it or setting its inode information.

#### ancestor of &lt;filesystem object&gt; : folder

Returns all ancestor folders (recursive parent folders) of the given filesystem object (file or folder).

#### accessed time of &lt;filesystem object&gt; : time

When the filesystem object (file or folder) was last accessed. Some file systems maintain this property.

#### version of &lt;filesystem object&gt; : version

This returns the version information from &quot;vers&quot; resource 1 of the file. It is usually present in applications, and may exist in data files as well. It corresponds to what appears in the &quot;Get Info&quot; box for the specified filesystem object.

#### sibling item &lt;string&gt; of &lt;filesystem object&gt; : filesystem object

The named sibling of a filesystem object (file, folder).

#### sibling folder &lt;string&gt; of &lt;filesystem object&gt; : folder

A named property. A folder in the same folder as the specified file object.

#### sibling file &lt;string&gt; of &lt;filesystem object&gt; : file

A named property. A file in the same folder as the specified file object.

#### posix path of &lt;filesystem object&gt; : string

The POSIX file path for the file or folder.

#### hfs path of &lt;filesystem object&gt; : string

Returns the path to a filesystem object in HFS terms (colons as delimiters).

#### creation time of &lt;filesystem object&gt; : time

The date and time of creation of the specified file or folder. This corresponds to what is shown in the &quot;Get Info&quot; box.Example: creation time of file &quot;System&quot; of System Folder &gt; time &quot;3 jan 1998 00:00+0000&quot; - Returns TRUE if the creation time of the system file is newer than the specified date.

#### bundle version of &lt;filesystem object&gt; : version

Returns the version of the filesystem object corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

#### backup time of &lt;filesystem object&gt; : time

The date of the last backup of the specified filesystem object (such as a file or folder). This corresponds to what is shown in the &quot;Get Info&quot; box for this object.

#### temporary of &lt;filesystem object&gt; : boolean

Returns TRUE if the file or folder (the filesystem object) is marked as a temporary folder.

#### system of &lt;filesystem object&gt; : boolean

Returns TRUE if the file or folder (the filesystem object) is marked as a system folder.

#### readonly of &lt;filesystem object&gt; : boolean

Returns TRUE if the file or folder (the filesystem object) is marked as read-only.

#### offline of &lt;filesystem object&gt; : boolean

Returns TRUE if the file or folder (the filesystem object) is marked as &#39;offline&#39;.

#### normal of &lt;filesystem object&gt; : boolean

Returns TRUE if the file or folder (filesystem object) is &#39;normal&#39;.

#### hidden of &lt;filesystem object&gt; : boolean

Returns TRUE if the file or folder (filesystem object) is marked as hidden.

#### drive of &lt;filesystem object&gt; : drive

Returns the drive associated with the specified file or folder (filesystem object).

#### compressed of &lt;filesystem object&gt; : boolean

Returns TRUE if the file or folder (filesystem object) has been compressed.

#### archive of &lt;filesystem object&gt; : boolean

Returns TRUE if the Archive bit is turned on for the specified file or folder (filesystem object). This bit is often used by backup software.

## filesystem

The filesystem object can be used to inspect various aspects of mounted file systems, including the format of the file system. Here are some of the possible format types:affsext, ext2, ext2_oldhpfsisominix, minix_30, minix2, minix2_30 msdos ncpnfsprocsmbxenixsysv4, sysv2cohufsxia

#### used space of &lt;filesystem&gt; : integer

Returns the number of bytes on this filesystem currently in use.

#### used percent of &lt;filesystem&gt; : integer

Returns the percentage of the file system currently in use.

#### used file count of &lt;filesystem&gt; : integer

The number of files in use on this filesystem.

#### type of &lt;filesystem&gt; : string

Returns the filesystem format type, as listed in the type header.

#### total space of &lt;filesystem&gt; : integer

Returns the total number of bytes on this file system (same as size).

#### size of &lt;filesystem&gt; : integer

Returns the total number of bytes on this file system (same as total space).

#### name of &lt;filesystem&gt; : string

Returns the mount point of the filesystem object.Example: names of filesystems - Returns the mount points of the file systems.Example: (name of it, type of it) of filesystems - Returns the names and types of all mounted file systems.

#### free space of &lt;filesystem&gt; : integer

Returns the number of bytes on this filesystem.

#### free percent of &lt;filesystem&gt; : integer

Returns the percentage of the file system currently available.

#### free file count of &lt;filesystem&gt; : integer

Returns the number of files available on this filesystem.

#### file count of &lt;filesystem&gt; : integer

Returns the total number of files that may be saved on this filesystem.

#### logical volume of &lt;filesystem&gt; : logical volume

On an AIX system, returns the logical volume corresponding to the given filesystem.

#### volume of &lt;filesystem&gt; : string

This is a &lt;Plain&gt; property inspector that takes a &lt;filesystem&gt; type and returns a &lt;volume&gt; type.

## file section

Many programs and utilities store their settings in &#39;ini&#39; files. This object is designed to access these settings. An &#39;ini&#39; file is composed of zero or more named sections, each with zero or more keys. Each key is identified by name and has a string value.

#### key &lt;string&gt; of &lt;file section&gt; : string

Returns a string containing the value for the name provided. A case-insensitive search is performed through the section of the file.

## file line

A &lt;file line&gt; object produces strings from a text file.

#### previous line of &lt;file line&gt; : file line

Returns the line before the nth line in a file, provided n&gt;1. You may repeat this command up to three times.

#### next line of &lt;file line&gt; : file line

Returns the line after the specified line in a file (provided that it is not the last line). This inspector can be chained indefinitely, eg., next line of next line of ...

#### line number of &lt;file line&gt; : integer

Returns the line number of a given line. Can be used to locate specific lines in a file.Example:  line number of line containing &quot;[mciavi]&quot; of file &quot;mmdriver.inf&quot; of system folder - Returns the line number of the specified line in the given file.

## file content

Content objects can be constructed from file objects to inspect their contents.

#### &lt;file content&gt; as uppercase : file content

Returns an uppercase version of the content provided.

#### &lt;file content&gt; as lowercase : file content

Returns a lowercase version of the content provided.

## file

For each file in the file system, you can create a corresponding file object and inspect its properties. inspectors are also provided to look at version data of executable files.Note: File systems that do not maintain the creation or last accessed times will often return the last modification time when queried for the creation or last accessed times or files. Modification times are preserved when files are copied. Thus, it is not uncommon to see a file that appears to have been modified before it was created.

#### &lt;file&gt; as string : string

Creates a string containing the full pathname of the specified file. See &lt;file&gt;.

#### variable of &lt;file&gt; : string

Returns the names of variables contained in an INF style file, in the format [section].name=value.

#### size of &lt;file&gt; : integer

Returns the size in bytes of a file.

#### sha1 of &lt;file&gt; : string

Returns the sha1 checksum of the file hex encoded as a 40 character long string.

#### section &lt;string&gt; of &lt;file&gt; : file section

Returns a named section of a file. Useful for locating sections of &#39;ini&#39; files. Section names are delimited by square bracket characters &#39;[section name]&#39;. See examples below.

#### line starting with &lt;string&gt; of &lt;file&gt; : file line

Same as line &lt;string&gt; of &lt;file&gt;, returns the lines of the given file that start with the specified string.

#### line of &lt;file&gt; : file line

Iterates over all the lines of the specified file. Note that the lines are truncated to 1023 characters.

#### line containing &lt;string&gt; of &lt;file&gt; : file line

Returns all lines from the given file that contain the specified string.

#### line &lt;integer&gt; of &lt;file&gt; : file line

Returns the nth line (specified by &lt;integer&gt;) from the given file.

#### key &lt;string&gt; of &lt;file&gt; : string

Returns a key and its value from the given structured text file. It iterates over lines that start with the key name (as specified by &lt;string&gt;) followed by an = or : character. When searching, white space is ignored.

#### filesystem of &lt;file&gt; : filesystem

Returns the UNIX filesystem flag for the given file. On a Macintosh, this returns a &lt;volume&gt; object.

#### drive of &lt;file&gt; : filesystem

Returns the drive associated with the specified file. On Macintosh computers, this returns a &lt;volume&gt; object.On  *nix computers, this returns a &lt;filesystem&gt; object.

#### content of &lt;file&gt; : file content

Returns an object that can be used to search for a string in the file. See content.

#### byte &lt;integer&gt; of &lt;file&gt; : integer

Returns the numeric value of the byte located at the offset specified by number within the file. Byte 0 of the file is the first byte.Example: byte 0 of file &quot;C:\test.txt&quot; - Returns the first byte in the specified file.

#### volume of &lt;file&gt; : volume

The volume containing the file.

#### visible of &lt;file&gt; : boolean

Returns TRUE if the file is visible.

#### version &lt;integer&gt; of &lt;file&gt; : version

Returns the nth version information from the &quot;vers&quot; resource of the given file. Typically n=1, but other information may be stored in &quot;vers&quot; resources greater than 1.

#### type of &lt;file&gt; : file type

This refers to the four-character identifier used in all MacOS files. The type describes the sort of file it is.

#### stationery of &lt;file&gt; : boolean

Returns TRUE if the file is a stationery file.

#### resource fork of &lt;file&gt; : resfork

Returns information about the resource fork of the file.

#### locked of &lt;file&gt; : boolean

Returns TRUE if the file is locked.Example: locked of file &quot;this file&quot; of folder &quot;this folder&quot; - Returns TRUE if the specified file is locked.

#### length of &lt;file&gt; : integer

The total length of the data and resource forks.Example: Length of data fork of file &quot;Microsoft Word&quot; of folder &quot;Microsoft Office X&quot; of Applications folder is greater than 100000 - Returns TRUE if the data fork of the system file is greater than the specified amount.

#### dictionary of &lt;file&gt; : dictionary

Returns the dictionary object for the specified file.

#### data fork of &lt;file&gt; : datafork

Returns information about the data fork of the specified file.

#### creator of &lt;file&gt; : file signature

This refers to the four-character identifier used in all MacOS files. The creator tells what application should open the specified file.

#### alias of &lt;file&gt; : boolean

Returns TRUE if the file is an alias for another file.

#### xml document of &lt;file&gt; : xml dom document

Returns an XML Document Object Model (DOM) for the specified file.

#### version of &lt;file&gt; : version

Synonym for file version of &lt;file&gt;.

#### version block of &lt;file&gt; : file version block

Iterates through the version blocks of a file.

#### version block &lt;string&gt; of &lt;file&gt; : file version block

You can identify the particular version block you are looking up by name. The name you provide should match the id string of the version block.

#### version block &lt;integer&gt; of &lt;file&gt; : file version block

You can identify the particular version block you want to access by ordinal number.

#### shortcut of &lt;file&gt; : file shortcut

Returns the properties and locates the target of a file shortcut:pathname (string)start in pathname (string)argument string (string)icon pathname (string)icon index (integer).

#### security descriptor of &lt;file&gt; : security descriptor

Specifies the security descriptor associated with the specified file.

#### raw version of &lt;file&gt; : version

Returns the version directly from a PE file.

#### raw version block of &lt;file&gt; : file version block

Returns the version block directly from a PE file.

#### raw version block &lt;string&gt; of &lt;file&gt; : file version block

Returns the named version block directly from a PE file.

#### raw version block &lt;integer&gt; of &lt;file&gt; : file version block

Returns the numbered version block directly from a PE file.

#### raw product version of &lt;file&gt; : version

Returns the product version directly from a PE file.

#### raw file version of &lt;file&gt; : version

Returns the file version directly from a PE file.

#### product version of &lt;file&gt; : version

Returns the product version extracted from the file&#39;s resource block. See version.

#### pem encoded certificate of &lt;file&gt; : x509 certificate

Reads and returns the certificate from a file in the PEM format. This can be used to analyze encryption credentials on decrypting relays or root servers.

#### only version block of &lt;file&gt; : file version block

Most files only have 1 version block. This property allows language independent access when there is only one version block present. The result is the same as &#39;version block 1&#39;.

#### only raw version block of &lt;file&gt; : file version block

Returns the only version block directly from a PE file.

#### first raw version block of &lt;file&gt; : file version block

Returns the first version block directly from a PE file. If the first block is sufficient for your purposes, use this version inspector for best speed.

#### file version of &lt;file&gt; : version

Returns the file version extracted from the file&#39;s resource block. See version.

#### executable file format of &lt;file&gt; : string

Returns a four-byte string containing the format specifier for the specified file.Example: executable file format of client - Returns a string like &quot;PE%00%00&quot;.

#### aol error time of &lt;file&gt; : time

No documentation exists for this property.

#### aol error of &lt;file&gt; : string

No documentation exists for this property.

#### array of &lt;file&gt; : array

This inspector creates an OSXArray from the specified XML Data file.

#### sqlite database of &lt;file&gt; : sqlite database

No documentation exists for this property.

#### sha2_512 of &lt;file&gt; : string

Returns the sha2-512 of the file, hex encoded as a string

#### sha2_384 of &lt;file&gt; : string

Returns the sha2-384 of the file, hex encoded as a string

#### sha2_256 of &lt;file&gt; : string

Returns the sha2-256 of the file, hex encoded as a string

#### sha2_224 of &lt;file&gt; : string

Returns the sha2-224 of the file, hex encoded as a string

#### md5 of &lt;file&gt; : string

Returns the md5 of the file, hex encoded as a string

#### json of &lt;file&gt; : json value

No documentation exists for this property.

#### sha512 of &lt;file&gt; : string

No documentation exists for this property.

#### sha384 of &lt;file&gt; : string

No documentation exists for this property.

#### sha256 of &lt;file&gt; : string

No documentation exists for this property.

#### sha224 of &lt;file&gt; : string

No documentation exists for this property.

#### windows checksum of &lt;file&gt; : integer

No documentation exists for this property.

## fifo file

In Unix systems, a FIFO file is a named pipe that uses the file system as a way to store the pipe name. These inspectors provide access to these named pipes.

#### filesystem of &lt;fifo file&gt; : filesystem

Returns the filesystem object corresponding to the specified FIFO file.

#### drive of &lt;fifo file&gt; : filesystem

Returns the drive associated with the specified FIFO (named pipe) file.

## device file

These inspector types interrogate Unix-style device files, which contain device drivers or system resources. Unix identifies these resources by a major number and a minor number, both stored as part of a node structure. Typically, the major number identifies the device driver and the minor number identifies the particular device controlled by that driver.

#### minor of &lt;device file&gt; : integer

Returns the minor number of the specified device file.

#### major of &lt;device file&gt; : integer

Returns the major number of the specified device file.

#### filesystem of &lt;device file&gt; : filesystem

Returns the filesystem object corresponding to the specified device file.

#### drive of &lt;device file&gt; : filesystem

Returns the drive associated with the specified device file.

#### device type of &lt;device file&gt; : string

Returns the device type corresponding to the give device file, as a string.

## swap

This object lets you inspect the properties of your swap space.

#### used amount of &lt;swap&gt; : integer

Returns the amount of the swap partition currently in use, in bytes.

#### total amount of &lt;swap&gt; : integer

Same as size of &lt;swap&gt;.

#### size of &lt;swap&gt; : integer

Returns the size, in bytes, of the swap partition.

#### free amount of &lt;swap&gt; : integer

Returns the amount of the swap partition currently unused, in bytes.

## file version block

You can inspect the version blocks of a file. There may be several language-specific version blocks. Version blocks contain version and name information in a human readable form for the specified language. This is the information that Windows displays in the file properties dialog. This technique uses string values and has a limited array of comparators. For better speed, utility and compactness see the version object.

#### value &lt;string&gt; of &lt;file version block&gt; : string

Returns a string corresponding to the name provided. Values have names such as &#39;CompanyName&#39;, &#39;FileDescription&#39;, &#39;FileVersion&#39;.Example: value &quot;FileVersion&quot; of version block 1 of regapp &quot;bigfix.exe&quot; as version - When casting a string value to a version, the parser skips through the string until it identifies something that can be interpreted as a version. This is convenient for extracting version numbers from strings containing added text.

#### language of &lt;file version block&gt; : string

A string representation of the language portion of the id of this version block. For example, &#39;English (United States)&#39;. See notes for known values.Example: language of version block 1 of regapp &quot;bigfix.exe&quot; = &quot;English (United States)&quot; - Returns TRUE if the given file&#39;s version block language is as specified.

#### id of &lt;file version block&gt; : string

A string representation containing both the language and codepage of this version block. The format is 8 hex digits, 4 of the codepage concatenated with 4 of the language. For example, &#39;040904b0&#39;. See notes for known values.Example: id of only version block of regapp &quot;bigfix.exe&quot; is &quot;040904b0&quot; - Returns TRUE if the given file&#39;s version block id is the specified string.

#### codepage of &lt;file version block&gt; : string

A string representation of the codepage portion of the id of this version block. See notes for known codepage strings. For example, &#39;Unicode&#39;.Example: codepage of only version block of regapp &quot;bigfix.exe&quot; is &quot;Unicode&quot; - Returns TRUE if the version block codepage for the specified file is unicode.

## file shortcut

Shortcuts to files can be constructed in the file system. The shortcut contains some additional properties that can be inspected.

#### start in pathname of &lt;file shortcut&gt; : string

Returns the full pathname the system sets the current directory when the user launches the shortcut.

#### pathname of &lt;file shortcut&gt; : string

Returns the full pathname of the object to which the shortcut points.Example: pathname of parent folder of system folder = pathname of windows folder - Checks that the system folder is located inside the Windows folder.

#### icon pathname of &lt;file shortcut&gt; : string

The full pathname of the file containing the icon associated with the shortcut.

#### icon index of &lt;file shortcut&gt; : integer

The index number of the icon in the file containing the icon associated with the shortcut.

#### argument string of &lt;file shortcut&gt; : string

Returns the arguments that are passed to the application to which the shortcut points when the user attempts to open the shortcut.

## mode_mask

The &lt;mode_mask&gt; inspector is a differently formatted version of the mode, created by shifting the key information down to the low three bits. 

#### &lt;mode_mask&gt; as string : string

Converts the mode mask to a string, for example &quot;rwx&quot;.

#### &lt;mode_mask&gt; as integer : integer

Converts the mode mask to an integer, 1-4.

#### write of &lt;mode_mask&gt; : boolean

Returns TRUE if the write flag (w) of the rwx mode mask is on. (binary 010 = 2).

#### read of &lt;mode_mask&gt; : boolean

Returns TRUE if the read flag of the rwx mode mask is on. (binary 100 = 4).

#### execute of &lt;mode_mask&gt; : boolean

Returns TRUE if the execute flag (x) of the rwx mode mask is on. (binary 001 = 1).

## mode

The &lt;mode&gt; inpector returns file type information and permissions. These are the possible values of mode:S_IFMT 170000 bitmask for the file type bitfieldsS_IFSOCK 140000 socketS_IFLNK 120000 symbolic linkS_IFREG 100000 regular fileS_IFBLK 060000 block deviceS_IFDIR 040000 directoryS_IFCHR 020000 character deviceS_IFIFO 010000 fifoS_ISUID 004000 set UID bitS_ISGID 002000 set GID bitS_ISVTX 001000 sticky bitS_IRWXU 000700 mask for file owner permissionsS_IRUSR 000400 owner has read permissionS_IWUSR 000200 owner has write permissionS_IXUSR 000100 owner has execute permissionS_IRWXG 000070 mask for group permissionsS_IRGRP 000040 group has read permissionS_IWGRP 000020 group has write permissionS_IXGRP 000010 group has execute permissionS_IRWXO 000007 mask for permissions for others (not in group)S_IROTH 000004 others have read permissionS_IWOTH 000002 others have write permissionS_IXOTH 000001 others have execute permission

#### &lt;mode&gt; as string : string

Converts the mode to a string.

#### &lt;mode&gt; as octal string : string

Converts the mode to a string of octal numbers.

#### user mask of &lt;mode&gt; : mode_mask

Returns the mask for the user (file owner) permissions for the given mode.

#### sticky of &lt;mode&gt; : boolean

The `sticky&#39; bit (S_ISVTX) on a directory means that a file in that directory can be renamed or deleted only by the owner of the file, by the owner of the directory, and by root. This inspector returns TRUE if the sticky bit of the given mode is on.

#### setuid of &lt;mode&gt; : boolean

Returns TRUE if setuid (the user ID flag) is set.

#### setgid of &lt;mode&gt; : boolean

Returns TRUE if setgid (the group ID flag) is set.

#### other mask of &lt;mode&gt; : mode_mask

Returns the mask for permissions for others (those not in the group) for the given mode.

#### group mask of &lt;mode&gt; : mode_mask

Returns the mask for group permissions for the given mode.

## datafork

The &lt;datafork&gt; inspectors refer to the data fork of a filesystem object.

#### size of &lt;datafork&gt; : integer

Returns the size of the specified datafork.

#### length of &lt;datafork&gt; : integer

The logical length of the data fork of the file.

## resfork

The &lt;resfork&gt; inspectors refer to the resource fork of a filesystem object.

#### size of &lt;resfork&gt; : integer

Returns the size of the resource fork.

#### length of &lt;resfork&gt; : integer

The logical length of the resource fork of the file.

## volume

The &lt;volume&gt; inspectors refer to the mounted drive volumes.

#### used space of &lt;volume&gt; : integer

Returns a number corresponding to the used bytes on the specified volume.Example: used space of volume 1 - Returns a number bytes such as 32167669760.

#### used percent of &lt;volume&gt; : integer

Returns the used percentage of room on the specified volume (or drive or filesystem).Example: used percentage of volume 2 - Returns a number between 0 and 100.

#### total space of &lt;volume&gt; : integer

The total amount of space, used and free, on the volume.

#### size of &lt;volume&gt; : integer

Returns a number corresponding to the total number of bytes (used and unused) on the specified volume.Example: size of volume 1 - Returns the size of the specified volume in bytes, eg. 159697911808.

#### name of &lt;volume&gt; : string

The name of the volume.

#### modification time of &lt;volume&gt; : time

Creates a time object corresponding to the time the volume was last modified.

#### init date of &lt;volume&gt; : time

Returns the initialization date of a disk volume.Example: init date of volume of system folder - Returns the date the system folder was initialized.

#### free space of &lt;volume&gt; : integer

The number of free bytes on the volume.

#### free percent of &lt;volume&gt; : integer

Returns the percentage of room available on the specified volume.Example: free percentage of volume 1  - Returns a number between 0 and 100.

#### flag of &lt;volume&gt; : integer

Returns the Mac-specific volume flags.More info on these flags can be found at the Apple developer site, under Carbon &gt; Reference &gt; File Manager.

#### file count of &lt;volume&gt; : integer

The number of files on the volume.

#### directory count of &lt;volume&gt; : integer

The number of directories on the volume.

#### allocation block count of &lt;volume&gt; : integer

The number of allocation blocks, used or free, on the volume.

#### type of &lt;volume&gt; : string

This Mac inspector returns the drive type as a string, such as &#39;DRIVE_FIXED&#39;.

## file type

The &lt;file type&gt; inspectors provide access to the four character file type associated with some types of files.

## file signature

The &lt;file signature&gt; inspectors provide access to each of the four character file signatures associated with some types of files.

## enableable_file

No documentation exists for this type.

#### enabled of &lt;enableable_file&gt; : boolean

No documentation exists for this property.

#### disabled of &lt;enableable_file&gt; : boolean

No documentation exists for this property.

## domain

Mac OS X defines several file system domains to control access to system resources on multi-user systems. These include the User, Local, Network, Classic and System domains. The domain for a given resource or folder determines its accessibility to the user. For example, while a user-installed font is only available to that user, an administrator-installed font is available to all network users. These inspectors allow folder access to be parceled out according to domain.Note: The &quot;user domain&quot; refers to the root user, not the currently logged in user.

#### volume settings folder of &lt;domain&gt; : folder

Returns the volume settings folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### voices folder of &lt;domain&gt; : folder

Returns the voices folder of the specified OS X domain, typically /System/Library/Speech/Voices. If the domain is not specified, it defaults to the system domain.

#### utilities folder of &lt;domain&gt; : folder

Returns the utilities folder of the specified OS X domain, typically /Applications/Utilities. If the domain is not specified, it defaults to the system domain.

#### users folder of &lt;domain&gt; : folder

Returns the users folder of the specified OS X domain, typically /Users. If the domain is not specified, it defaults to the system domain.

#### user temp folder of &lt;domain&gt; : folder

Returns the user temp folder of the specified OS X domain, typically /private/tmp/uid where uid is the user ID number. If the domain is not specified, it defaults to the system domain.

#### themes folder of &lt;domain&gt; : folder

Returns the themes folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### text encodings folder of &lt;domain&gt; : folder

Returns the text encodings folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### temporary items folder of &lt;domain&gt; : folder

Returns the temporary items folder of the specified OS X domain, typically /private/tmp/. If the domain is not specified, it defaults to the system domain.

#### system folder of &lt;domain&gt; : folder

Returns the system folder of the specified OS X domain, typically /System. If the domain is not specified, it defaults to the system domain.

#### startup items folder of &lt;domain&gt; : folder

Returns the startup items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### speech folder of &lt;domain&gt; : folder

Returns the speech folder of the specified OS X domain, typically /System/Library/Speech. If the domain is not specified, it defaults to the system domain.

#### sound folder of &lt;domain&gt; : folder

Returns the sound folder of the specified OS X domain, typically /System/Library/Sound. If the domain is not specified, it defaults to the system domain.

#### shutdown items folder of &lt;domain&gt; : folder

Returns the shutdown items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### shared libraries folder of &lt;domain&gt; : folder

Returns the shared libraries folder of the specified OS X domain, typically /System/Library/CFMSupport. If the domain is not specified, it defaults to the system domain.

#### shared folder of &lt;domain&gt; : folder

Returns the shared folder of the specified OS X domain, typically /Users/Shared. If the domain is not specified, it defaults to the system domain.

#### scripting additions folder of &lt;domain&gt; : folder

Returns the scripting additions folder of the specified OS X domain, typically /System/Library/Scripting Additions. If the domain is not specified, it defaults to the system domain.

#### receipts folder of &lt;domain&gt; : folder

Returns the receipts folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### quicktime folder of &lt;domain&gt; : folder

Returns the quicktime folder of the specified OS X domain, typically /System/Library/QuickTime. If the domain is not specified, it defaults to the system domain.

#### private framework folder of &lt;domain&gt; : folder

Returns the private framework folder of the specified OS X domain, typically /System/Library/PrivateFrameworks. If the domain is not specified, it defaults to the system domain.

#### printmonitor documents folder of &lt;domain&gt; : folder

Returns the printmonitor documents folder of the specified OS X domain, typically /Library/Printers/PrintMonitor Documents. If the domain is not specified, it defaults to the system domain.

#### printers folder of &lt;domain&gt; : folder

Returns the printers folder of the specified OS X domain, typically /System/Library/Printers. If the domain is not specified, it defaults to the system domain.

#### printer drivers folder of &lt;domain&gt; : folder

Returns the printer drivers folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### printer descriptions folder of &lt;domain&gt; : folder

Returns the printer descriptions folder of the specified OS X domain, typically /System/Library/Printers/PPDs. If the domain is not specified, it defaults to the system domain.

#### preferences folder of &lt;domain&gt; : folder

Returns the preferences folder of the specified OS X domain, typically /Users/username/Library/Preferences. If the domain is not specified, it defaults to the system domain.

#### modem scripts folder of &lt;domain&gt; : folder

Returns the modem scripts folder of the specified OS X domain, typically /System/Library/Modem Scripts. If the domain is not specified, it defaults to the system domain.

#### macos read me folder of &lt;domain&gt; : folder

Returns the Mac OS read me folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### locations folder of &lt;domain&gt; : folder

Returns the locations folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### location manager preferences folder of &lt;domain&gt; : folder

Returns the location manager preferences folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### location manager modules folder of &lt;domain&gt; : folder

Returns the location manager modules folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### locales folder of &lt;domain&gt; : folder

Returns the locales folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### kernel extensions folder of &lt;domain&gt; : folder

Returns the kernel extensions folder of the specified OS X domain, typically /System/Library/Extensions. If the domain is not specified, it defaults to the system domain.

#### iss download folder of &lt;domain&gt; : folder

Returns the Macintosh download folder for the specified domain.

#### internet plugins folder of &lt;domain&gt; : folder

Returns the internet plugins folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### help folder of &lt;domain&gt; : folder

Returns the help folder of the specified OS X domain, typically /Library/Documentation/Help. If the domain is not specified, it defaults to the system domain.

#### framework folder of &lt;domain&gt; : folder

Returns the framework folder of the specified OS X domain, typically /System/Library/Frameworks. If the domain is not specified, it defaults to the system domain.

#### framework &lt;string&gt; of &lt;domain&gt; : folder

Returns a folder of the form &quot;/System/Library/Frameworks/&lt;string&gt;.framework&quot;.Note: This inspector appends .framework for you, so don&#39;t provide it. The framework inspector needs a domain, and without it defaults to the system domain.Example: framework &quot;MyPrivate&quot; of local domain - Returns /Library/Frameworks/MyPrivate.framework.

#### fonts folder of &lt;domain&gt; : folder

Returns the font folder of the specified OS X domain, typically /System/Library/Fonts. If the domain is not specified, it defaults to the system domain.

#### favorites folder of &lt;domain&gt; : folder

Returns the favorites folder of the specified OS X domain, typically /Users/username/Library/Favorites. If the domain is not specified, it defaults to the system domain.

#### extensions folder of &lt;domain&gt; : folder

Returns the extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### domain top folder of &lt;domain&gt; : folder

Returns the top folder of the specified OS X domain, typically found at /System. If the domain is not specified, it defaults to the system domain.

#### domain library folder of &lt;domain&gt; : folder

Returns the domain library folder of the specified OS X domain, typically found at /Library. If the domain is not specified, it defaults to the system domain.

#### documents folder of &lt;domain&gt; : folder

Returns the documents folder for the specified OS X domain, typically found at /User/Username/Documents. If the domain is not specified, it defaults to the system domain.

#### documentation folder of &lt;domain&gt; : folder

Returns the documentation folder for the given OS X domain, typically found at /Library/Documentation. If the domain is not specified, it defaults to the system domain.Example: application support folder of user domain - Returns /var/root/Library/Application Support.

#### disabled system extensions folder of &lt;domain&gt; : folder

Returns the systems extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### disabled startup items folder of &lt;domain&gt; : folder

Returns the startup items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### disabled shutdown items folder of &lt;domain&gt; : folder

Returns the shutdown folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### disabled extensions folder of &lt;domain&gt; : folder

Returns the extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### disabled control panels folder of &lt;domain&gt; : folder

Returns the control panels folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### developer help folder of &lt;domain&gt; : folder

Returns the help folder of the specified OS X domain, typically /Developer/Documentation/Help. If the domain is not specified, it defaults to the system domain.

#### developer folder of &lt;domain&gt; : folder

Returns the developer folder of the specified OS X domain, typically found at /Developer. If the domain is not specified, it defaults to the system domain. If the domain is not specified, it defaults to the system domain.

#### developer docs folder of &lt;domain&gt; : folder

Returns the developer docs folder of the specified OS X domain, typically found at /Developer/Documentation. If the domain is not specified, it defaults to the system domain.

#### desktop folder of &lt;domain&gt; : folder

Returns the desktop folder of the specified OS X domain, typically /Users/Username/Desktop. If the domain is not specified, it defaults to the system domain.

#### current user folder of &lt;domain&gt; : folder

Returns the current user folder of the specified OS X domain, typically found at /Users/username. If the domain is not specified, it defaults to the system domain.

#### core services folder of &lt;domain&gt; : folder

Returns the core services folder of the specified OS X domain, typically /System/Library/CoreServices. If the domain is not specified, it defaults to the system domain.

#### control strip modules folder of &lt;domain&gt; : folder

Returns the control strip modules folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### control panels folder of &lt;domain&gt; : folder

Returns the control panels folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### contextual menu items folder of &lt;domain&gt; : folder

Returns the contextual menu items folder of the specified OS X domain, typically /Library/Contextual Menu Items. If the domain is not specified, it defaults to the system domain.

#### component folder of &lt;domain&gt; : folder

Returns the component folder of the specified OS X domain, typically /System/Library/Components. If the domain is not specified, it defaults to the system domain.

#### colorsync profiles folder of &lt;domain&gt; : folder

Returns the colorsync profiles folder of the specified OS X domain, typically /System/Library/ColorSync/Profiles. If the domain is not specified, it defaults to the system domain.

#### color sync folder of &lt;domain&gt; : folder

Returns the color sync folder of the specified OS X domain, typically /System/Library/ColorSync. If the domain is not specified, it defaults to the system domain.Example: color sync folder of system domain - Returns /System/Library/ColorSync.Example: color sync folder of local domain - Returns /Library/ColorSync.

#### classic folder of &lt;domain&gt; : folder

Returns the classic folder of the specified OS X domain, typically the /System Folder. If the domain is not specified, it defaults to the system domain.

#### chewable items folder of &lt;domain&gt; : folder

Returns the chewable items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### carbon folder of &lt;domain&gt; : folder

Returns the carbon folder of the specified OS X domain, typically /Library/Carbon. If the domain is not specified, it defaults to the system domain.

#### cache folder of &lt;domain&gt; : folder

Returns the cache folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### audio folder of &lt;domain&gt; : folder

Returns the audio folder of the specified OS X domain, typically /Library/Audio. If the domain is not specified, it defaults to the system domain.

#### assistants folder of &lt;domain&gt; : folder

Returns the assistants folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### applications folder of &lt;domain&gt; : folder

Returns the applications folder of the specified OS X domain, typically /Applications. If the domain is not specified, it defaults to the system domain.

#### application support folder of &lt;domain&gt; : folder

Returns the application support folder of the specified OS X domain, typically /Library/Application Support. If the domain is not specified, it defaults to the system domain.

#### apple menu items folder of &lt;domain&gt; : folder

Returns the apple menu items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

#### apple extras folder of &lt;domain&gt; : folder

Returns the apple extras folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

