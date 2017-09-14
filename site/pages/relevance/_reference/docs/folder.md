# type: folder

For every folder that exists in the file system, you can create a folder object. These inspectors allow you to examine dozens of properties of folder objects. On the Macintosh, there are dozens of specialized folders; access to them depends on the domain. If the domain is not specified, it defaults to the system domain.

# application &lt;binary_string&gt; of &lt;folder&gt; : application

No documentation exists.

# application &lt;string&gt; of &lt;folder&gt; : application

Returns an application object for the named file located in the folder. See application.Example: exists application "notepad.exe" of the windows folder - Using the application of folder creation method, this example locates the notepad application provided it exists in the Windows folder.

# application of &lt;folder&gt; : application

No documentation exists.

# application of &lt;folder&gt; : filesystem object

Recursively finds executables in the supplied folder, returning a list of "application" objects, which are basically  filesystem_objects.Example: applications of folder "/Users/fizzle/bin" - Returns a list of applications in the specified directory, such as /Users/fizzle/bin/p4, /Users/fizzle/bin/mylocaltool.

This Inspector was replaced by another Inspector returning an *application* type.

# binary named file of &lt;folder&gt; : file

No documentation exists.

# binary named folder of &lt;folder&gt; : folder

Iterates through the folders of a folder returning folder objects.  
On Unix operating system, this is similar to "folder of <folder>", except this method returns all folders regardless of its names.   
On other operating systems, same as "folder of <folder>"

# bundle of &lt;folder&gt; : bundle

Returns a bundle from a folder (if it has one like application folders do).Example: exists (bundle of applications folder) - Typically returns `True`.

# bundle version of &lt;folder&gt; : version

Returns the version of the folder corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

# descendant folder of &lt;folder&gt; : folder

Returns the descendant folders, recursively, of the given folder. The folder equivalent of "descendants of &lt;folder&gt;".

# descendant of &lt;folder&gt; : file

Returns a list of all the descendant files of the specified folder.

# device file &lt;string&gt; of &lt;folder&gt; : device file

Returns the device file with the specified name in the given folder.

# device file of &lt;folder&gt; : device file

Returns the device files that exist in the specified folder.

# drive of &lt;folder&gt; : filesystem

Returns the drive associated with the specified folder.On Macintosh computers, this returns a &lt;volume&gt; object.On  *nix computers, this returns a &lt;filesystem&gt; object.

# drive of &lt;folder&gt; : volume

No documentation exists.

# fifo file &lt;string&gt; of &lt;folder&gt; : fifo file

Returns the FIFO file (named pipe) with the given name in the specified folder.

# fifo file of &lt;folder&gt; : fifo file

Returns the list of FIFO file in the given folder.

# file &lt;binary_string&gt; of &lt;folder&gt; : file

No documentation exists.

# file &lt;string&gt; of &lt;folder&gt; : file

Returns a file object for the named file located in the folder.Example: exists file whose (name of it contains ".pdf") of folder "name" - Returns `True` if some file in the folder has a name including the string ".pdf".

# file ending in &lt;string&gt; of &lt;folder&gt; : file

Returns a list of files ending in "xxxx". Typically used to identify a dotted extension. Equivalent to a wildcard search for "*xxxx".Example: files ending in ".a" of folder "/usr/lib"  - Returns a list of files with the specified ending, such as: /usr/lib/libcpp_kext.a, /usr/lib/libfl.a, /usr/lib/libioabc.a, and others.

# file of &lt;folder&gt; : file

Iterates through the files of a folder returning file objects. When combined with a whose clause you can select files with specific properties. See file.

# filesystem of &lt;folder&gt; : filesystem

Returns the filesystem on which the folder resides. On a Macintosh, this inspector returns a &lt;volume&gt; object.

# filesystem of &lt;folder&gt; : volume

No documentation exists.

# find file &lt;string&gt; of &lt;folder&gt; : file

Iterates through the files of a folder returning file objects whose name matches the wildcard string provided in the name parameter.  A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt. See example below.Example: Number of find files "siteico*.bmp" of client folder of current site = 3 - Returns `True` if there are 3 files matching the wildcard pattern siteico*.bmp.Example: names of find files "*.exe" of windows folder - Returns a list of the names of all the executable programs in the Windows folder.

# find folder &lt;string&gt; of &lt;folder&gt; : folder

Finds the folder with the given wildcard name inside another folder. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

# find item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns the filesystem objects matching the item wildcard string of the given folder. Macintosh &#39;items&#39; are analogous to files and folders on other systems. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

# folder &lt;binary_string&gt; of &lt;folder&gt; : folder

No documentation exists.

# folder &lt;string&gt; of &lt;folder&gt; : folder

Returns a folder object for the named sub-folder. Trailing slashes should be omitted from the name.

# folder ending in &lt;string&gt; of &lt;folder&gt; : folder

Returns a list of folders ending in "xxxx". Typically used to identify a dotted extension. Equivalent to a wildcard search for "*xxxx".

# folder of &lt;folder&gt; : folder

Iterates through the folders of a folder returning folder objects. When combined with a whose clause, you can select folders with specific properties.

# hfs relative item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a filesystem object with the given wildcard name from the specified folder, using HFS format. A wildcard string uses an asterisk to stand for any number of characters (incuding zero), and a question mark to stand for exactly one character. Thus A??.txt would match All.txt and AXE.txt but not all.txt or a.txt.

# item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns the named item (file or folder) from the specified folder.

# item ending in &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a list of items (files/folders) ending in "xxxx". Typically used to identify a dotted extension. Equivalent to a wildcard search for "*xxxx".

# item of &lt;folder&gt; : filesystem object

Returns a list of the items (file or folder) in the specified folder.Example: names of items of applications folder - Returns a list of applications, such as DS_Store, .localized, AddressBook.app, AppleScript, Calculator.app, Chess.app, DVD Player.app, etc....

# posix relative item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a filesystem object with the given relative item name from the specified folder, using POSIX format.

# relative file &lt;string&gt; of &lt;folder&gt; : file

Returns the file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;. For example: relative file "Safari.app/Contents/MacOS/Safari" of applications folder - Returns the concatenation of the specified folder and the given path, /Applications/Safari.app/Contents/MacOS/Safari.

# relative folder &lt;binary_string&gt; of &lt;folder&gt; : folder

No documentation exists.

# relative folder &lt;string&gt; of &lt;folder&gt; : folder

Returns the folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

# relative hfs file &lt;string&gt; of &lt;folder&gt; : file

Returns the HFS file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

# relative hfs folder &lt;string&gt; of &lt;folder&gt; : folder

Returns the HFS folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

# relative item &lt;string&gt; of &lt;folder&gt; : filesystem object

Returns a filesystem object with the given relative item name from the specified folder, using POSIX format.

# relative posix file &lt;string&gt; of &lt;folder&gt; : file

Returns the POSIX file with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

# relative posix folder &lt;string&gt; of &lt;folder&gt; : folder

Returns the POSIX folder with the path specified by &lt;string&gt; relative to the given &lt;folder&gt;.

# security descriptor of &lt;folder&gt; : security descriptor

Specifies the security descriptor associated with the specified folder.

# socket file &lt;string&gt; of &lt;folder&gt; : socket file

Returns the socket file with the given name in the specified folder.

# socket file of &lt;folder&gt; : socket file

Returns the socket file(s) in the specified folder.

# string named file of &lt;folder&gt; : file

No documentation exists.

# string named folder of &lt;folder&gt; : folder

Iterates through the folders of a folder returning folder objects.  
On Unix operating system, this is similar to "folder of <folder>", except that this method returns folders only if its name is valid in local character set.   
On other operating systems, same as "folder of <folder>"

# symlink &lt;binary_string&gt; of &lt;folder&gt; : symlink

No documentation exists.

# symlink &lt;string&gt; of &lt;folder&gt; : symlink

Returns the named symlink from the specified folder.

# symlink of &lt;folder&gt; : symlink

Returns the symlink(s) in the specified folder, whether or not they are broken. Note: This behavior differs from looking for files in a folder. Although that returns links along with the files, it doesn&#39;t return broken links.

# version of &lt;folder&gt; : version

Returns a version for a folder representing an application.

# volume of &lt;folder&gt; : volume

The volume containing the specified folder.
