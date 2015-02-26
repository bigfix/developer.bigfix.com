# file

For each file in the file system, you can create a corresponding file object and inspect its properties. inspectors are also provided to look at version data of executable files.Note: File systems that do not maintain the creation or last accessed times will often return the last modification time when queried for the creation or last accessed times or files. Modification times are preserved when files are copied. Thus, it is not uncommon to see a file that appears to have been modified before it was created.

# alias of <file>

Returns `True` if the file is an alias for another file.

# aol error of <file>

No documentation exists.

# aol error time of <file>

No documentation exists.

# array of <file>

This inspector creates an OSXArray from the specified XML Data file.

# byte <integer> of <file>

Returns the numeric value of the byte located at the offset specified by number within the file. Byte 0 of the file is the first byte.Example: byte 0 of file &quot;C:\test.txt&quot; - Returns the first byte in the specified file.

# content of <file>

Returns an object that can be used to search for a string in the file. See content.

# creator of <file>

This refers to the four-character identifier used in all MacOS files. The creator tells what application should open the specified file.

# data fork of <file>

Returns information about the data fork of the specified file.

# dictionary of <file>

Returns the dictionary object for the specified file.

# drive of <file>

Returns the drive associated with the specified file. On Macintosh computers, this returns a &lt;volume&gt; object.On  *nix computers, this returns a &lt;filesystem&gt; object.

# executable file format of <file>

Returns a four-byte string containing the format specifier for the specified file.Example: executable file format of client - Returns a string like &quot;PE%00%00&quot;.

# file version of <file>

Returns the file version extracted from the file&#39;s resource block. See version.

# filesystem of <file>

Returns the UNIX filesystem flag for the given file. On a Macintosh, this returns a &lt;volume&gt; object.

# first raw version block of <file>

Returns the first version block directly from a PE file. If the first block is sufficient for your purposes, use this version inspector for best speed.

# json of <file>

No documentation exists.

# key <string> of <file>

Returns a key and its value from the given structured text file. It iterates over lines that start with the key name (as specified by &lt;string&gt;) followed by an = or : character. When searching, white space is ignored.

# length of <file>

The total length of the data and resource forks.Example: Length of data fork of file &quot;Microsoft Word&quot; of folder &quot;Microsoft Office X&quot; of Applications folder is greater than 100000 - Returns `True` if the data fork of the system file is greater than the specified amount.

# line <integer> of <file>

Returns the nth line (specified by &lt;integer&gt;) from the given file.

# line containing <string> of <file>

Returns all lines from the given file that contain the specified string.

# line of <file>

Iterates over all the lines of the specified file. Note that the lines are truncated to 1023 characters.

# line starting with <string> of <file>

Same as line &lt;string&gt; of &lt;file&gt;, returns the lines of the given file that start with the specified string.

# locked of <file>

Returns `True` if the file is locked.Example: locked of file &quot;this file&quot; of folder &quot;this folder&quot; - Returns `True` if the specified file is locked.

# md5 of <file>

Returns the md5 of the file, hex encoded as a string

# only raw version block of <file>

Returns the only version block directly from a PE file.

# only version block of <file>

Most files only have 1 version block. This property allows language independent access when there is only one version block present. The result is the same as &#39;version block 1&#39;.

# pem encoded certificate of <file>

Reads and returns the certificate from a file in the PEM format. This can be used to analyze encryption credentials on decrypting relays or root servers.

# product version of <file>

Returns the product version extracted from the file&#39;s resource block. See version.

# raw file version of <file>

Returns the file version directly from a PE file.

# raw product version of <file>

Returns the product version directly from a PE file.

# raw version block <integer> of <file>

Returns the numbered version block directly from a PE file.

# raw version block <string> of <file>

Returns the named version block directly from a PE file.

# raw version block of <file>

Returns the version block directly from a PE file.

# raw version of <file>

Returns the version directly from a PE file.

# resource fork of <file>

Returns information about the resource fork of the file.

# section <string> of <file>

Returns a named section of a file. Useful for locating sections of &#39;ini&#39; files. Section names are delimited by square bracket characters &#39;[section name]&#39;. See examples below.

# security descriptor of <file>

Specifies the security descriptor associated with the specified file.

# sha1 of <file>

Returns the sha1 checksum of the file hex encoded as a 40 character long string.

# sha224 of <file>

No documentation exists.

# sha256 of <file>

No documentation exists.

# sha2_224 of <file>

Returns the sha2-224 of the file, hex encoded as a string

# sha2_256 of <file>

Returns the sha2-256 of the file, hex encoded as a string

# sha2_384 of <file>

Returns the sha2-384 of the file, hex encoded as a string

# sha2_512 of <file>

Returns the sha2-512 of the file, hex encoded as a string

# sha384 of <file>

No documentation exists.

# sha512 of <file>

No documentation exists.

# shortcut of <file>

Returns the properties and locates the target of a file shortcut:pathname (string)start in pathname (string)argument string (string)icon pathname (string)icon index (integer).

# size of <file>

Returns the size in bytes of a file.

# sqlite database of <file>

No documentation exists.

# stationery of <file>

Returns `True` if the file is a stationery file.

# type of <file>

This refers to the four-character identifier used in all MacOS files. The type describes the sort of file it is.

# variable of <file>

Returns the names of variables contained in an INF style file, in the format [section].name=value.

# version <integer> of <file>

Returns the nth version information from the &quot;vers&quot; resource of the given file. Typically n=1, but other information may be stored in &quot;vers&quot; resources greater than 1.

# version block <integer> of <file>

You can identify the particular version block you want to access by ordinal number.

# version block <string> of <file>

You can identify the particular version block you are looking up by name. The name you provide should match the id string of the version block.

# version block of <file>

Iterates through the version blocks of a file.

# version of <file>

Synonym for file version of &lt;file&gt;.

# visible of <file>

Returns `True` if the file is visible.

# volume of <file>

The volume containing the file.

# windows checksum of <file>

No documentation exists.

# xml document of <file>

Returns an XML Document Object Model (DOM) for the specified file.

# <file> as string

Creates a string containing the full pathname of the specified file. See &lt;file&gt;.
