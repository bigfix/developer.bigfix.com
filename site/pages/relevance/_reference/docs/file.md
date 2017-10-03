# type: file

For each file in the file system, you can create a corresponding file object and inspect its properties. inspectors are also provided to look at version data of executable files.Note: File systems that do not maintain the creation or last accessed times will often return the last modification time when queried for the creation or last accessed times or files. Modification times are preserved when files are copied. Thus, it is not uncommon to see a file that appears to have been modified before it was created.

# alias of &lt;file&gt; : boolean

Returns `True` if the file is an alias for another file.

# aol error of &lt;file&gt; : string

No documentation exists.

# aol error time of &lt;file&gt; : time

No documentation exists.

# array of &lt;file&gt; : array

This inspector creates an OSXArray from the specified XML Data file.

# byte &lt;integer&gt; of &lt;file&gt; : integer

Returns the numeric value of the byte located at the offset specified by number within the file. Byte 0 of the file is the first byte.Example: byte 0 of file "C:\test.txt" - Returns the first byte in the specified file.

# content of &lt;file&gt; : file content

Returns an object that can be used to search for a string in the file.

# creator of &lt;file&gt; : file signature

This refers to the four-character identifier used in all MacOS files. The creator tells what application should open the specified file.

# data fork of &lt;file&gt; : datafork

Returns information about the data fork of the specified file.

# dictionary of &lt;file&gt; : dictionary

Returns the dictionary object for the specified file.

# drive of &lt;file&gt; : filesystem

Returns the drive associated with the specified file. On Macintosh computers, this returns a &lt;volume&gt; object.On  *nix computers, this returns a &lt;filesystem&gt; object.

# drive of &lt;file&gt; : volume

No documentation exists.

# executable file format of &lt;file&gt; : string

Returns a four-byte string containing the format specifier for the specified file.Example: executable file format of client - Returns a string like "PE%00%00".

# file version of &lt;file&gt; : version

Returns the file version extracted from the file&#39;s resource block. See version.

# filesystem of &lt;file&gt; : filesystem

Returns the UNIX filesystem flag for the given file. On a Macintosh, this returns a &lt;volume&gt; object.

# filesystem of &lt;file&gt; : volume

No documentation exists.

# first raw version block of &lt;file&gt; : file version block

Returns the first version block directly from a PE file. If the first block is sufficient for your purposes, use this version inspector for best speed.

# json of &lt;file&gt; : json value

Returns a JSON value for the content of the file.

{% qna %}
Q: path "$.dependencies.express" of json of file "package.json"
A: ^4.13.3
{% endqna %}

# key &lt;string&gt; of &lt;file&gt; : string

Returns a key and its value from the given structured text file. It iterates over lines that start with the key name (as specified by &lt;string&gt;) followed by an = or : character. When searching, white space is ignored.

# length of &lt;file&gt; : integer

The total length of the data and resource forks.Example: Length of data fork of file "Microsoft Word" of folder "Microsoft Office X" of Applications folder is greater than 100000 - Returns `True` if the data fork of the system file is greater than the specified amount.

# line &lt;integer&gt; of &lt;file&gt; : file line

Returns the nth line (specified by &lt;integer&gt;) from the given file.

# line containing &lt;string&gt; of &lt;file&gt; : file line

Returns all lines from the given file that contain the specified string.

# line of &lt;file&gt; : file line

Iterates over all the lines of the specified file. Note that each line is truncated to 2048 bytes and the remaining characters are moved to the next line.

# line starting with &lt;string&gt; of &lt;file&gt; : file line

Same as line &lt;string&gt; of &lt;file&gt;, returns the lines of the given file that start with the specified string.

# locked content of &lt;file&gt; : file content

Returns an object that can be used to search for a string in the specified file. 

Use this inspector to access files that might be locked because they are concurrently opened for writing by other applications.

# locked key &lt;string&gt; of &lt;file&gt; : string

Returns a key and its value from the given structured text file. It iterates over lines that start with the key name (as specified by &lt;string&gt;) followed by an = or : character. When searching, white space is ignored.

Use this inspector to access files that might be locked because they are concurrently opened for writing by other applications.

# locked line &lt;integer&gt; of &lt;file&gt; : file line

Returns the nth line (specified by &lt;integer&gt;) from the given file. 

Use this inspector to access files that might be locked because they are concurrently opened for writing by other applications.

# locked line containing &lt;string&gt; of &lt;file&gt; : file line

Returns all the lines containing the specified string and belonging to the given file. 

Use this inspector to access files that might be locked because they are concurrently opened for writing by other applications.

# locked line of &lt;file&gt; : file line

Iterates over all the lines of the specified file. Note that each line is truncated to 2048 bytes and the remaining characters are moved to the next line. 

Use this inspector to access files that might be locked because they are concurrently opened for writing by other applications.

# locked line starting with &lt;string&gt; of &lt;file&gt; : file line

Same as line &lt;string&gt; of &lt;file&gt;, returns the lines starting with the specified string and belonging to the given file. 

Use this inspector to access files that might be locked because they are concurrently opened for writing by other applications.

# locked of &lt;file&gt; : boolean

Returns `True` if the file is locked.Example: locked of file "this file" of folder "this folder" - Returns `True` if the specified file is locked.

# locked section &lt;string&gt; of &lt;file&gt; : file section

Returns a named section of the specified file. It is useful for locating sections of &#39;ini&#39; files. Section names are delimited by square bracket characters &#39;[section name]&#39;.

Use this inspector to access files that might be locked because they are concurrently opened for writing by other applications.

# md5 of &lt;file&gt; : string

Returns the md5 of the file. This inspector is not available in FIPS mode.

{% qna %}
Q: md5 of file "/etc/passwd"
A: 8a056052d5b944f5f2ffe3e93c8bd235
{% endqna %}

# only raw version block of &lt;file&gt; : file version block

Returns the only version block directly from a PE file.

# only version block of &lt;file&gt; : file version block

Most files only have 1 version block. This property allows language independent access when there is only one version block present. The result is the same as &#39;version block 1&#39;.

# pem encoded certificate of &lt;file&gt; : x509 certificate

Reads and returns the certificate from a file in the PEM format. This can be used to analyze encryption credentials on decrypting relays or root servers.

# product version of &lt;file&gt; : version

Returns the product version extracted from the file&#39;s resource block. See version.

# raw file version of &lt;file&gt; : version

Returns the file version directly from a PE file.

# raw product version of &lt;file&gt; : version

Returns the product version directly from a PE file.

# raw version block &lt;integer&gt; of &lt;file&gt; : file version block

Returns the numbered version block directly from a PE file.

# raw version block &lt;string&gt; of &lt;file&gt; : file version block

Returns the named version block directly from a PE file.

# raw version block of &lt;file&gt; : file version block

Returns the version block directly from a PE file.

# raw version of &lt;file&gt; : version

Returns the version directly from a PE file.

# resource fork of &lt;file&gt; : resfork

Returns information about the resource fork of the file.

# section &lt;string&gt; of &lt;file&gt; : file section

Returns a named section of a file. Useful for locating sections of &#39;ini&#39; files. Section names are delimited by square bracket characters &#39;[section name]&#39;.

# security descriptor of &lt;file&gt; : security descriptor

Specifies the security descriptor associated with the specified file.

# sha1 of &lt;file&gt; : string

Returns the sha1 of the file.

{% qna %}
Q: sha1 of file "/etc/passwd"
A: 4c62340ccf62b292ac66697ff8eb64aded4d957c
{% endqna %}

# sha224 of &lt;file&gt; : string

Returns the sha2-224 of the file.

{% qna %}
Q: sha224 of file "/etc/passwd"
A: d92e6a1ed28b714be2e6da94fbd0a89bf115110346289321deec0a8c
{% endqna %}

# sha256 of &lt;file&gt; : string

Returns the sha2-256 of the file.

{% qna %}
Q: sha256 of file "/etc/passwd"
A: da48b9f08e861546a980206889b7282fccda236f83a25e1b58de6fc5f1f361bd
{% endqna %}

# sha2_224 of &lt;file&gt; : string

Returns the sha2-224 of the file.

{% qna %}
Q: sha2_224 of file "/etc/passwd"
A: d92e6a1ed28b714be2e6da94fbd0a89bf115110346289321deec0a8c
{% endqna %}

# sha2_256 of &lt;file&gt; : string

Returns the sha2-256 of the file.

{% qna %}
Q: sha2_256 of file "/etc/passwd"
A: da48b9f08e861546a980206889b7282fccda236f83a25e1b58de6fc5f1f361bd
{% endqna %}

# sha2_384 of &lt;file&gt; : string

Returns the sha2-384 of the file.

{% qna %}
Q: sha2_384 of file "/etc/passwd"
A: 8bdadbaff533a5b10d2da7929783a76cc9d9ad9a53825aade38776dba07821996c96db90d20e7b6fb502ddd2462701d4
{% endqna %}

# sha2_512 of &lt;file&gt; : string

Returns the sha2-512 of the file.

{% qna %}
Q: sha2_512 of file "/etc/passwd"
A: ed80a58904b3e73b4b70a11d387f5c18df016fe9c42c36c3f7b265a4e9304d7cd5f040900df25db971846167ba06cfc82c210dc2305c98dab76b09b08f7d6f1f
{% endqna %}

# sha384 of &lt;file&gt; : string

Returns the sha2-384 of the file.

{% qna %}
Q: sha384 of file "/etc/passwd"
A: 8bdadbaff533a5b10d2da7929783a76cc9d9ad9a53825aade38776dba07821996c96db90d20e7b6fb502ddd2462701d4
{% endqna %}

# sha512 of &lt;file&gt; : string

Returns the sha2-512 of the file.

{% qna %}
Q: sha512 of file "/etc/passwd"
A: ed80a58904b3e73b4b70a11d387f5c18df016fe9c42c36c3f7b265a4e9304d7cd5f040900df25db971846167ba06cfc82c210dc2305c98dab76b09b08f7d6f1f
{% endqna %}

# shortcut of &lt;file&gt; : file shortcut

Returns the properties and locates the target of a file shortcut:pathname (string)start in pathname (string)argument string (string)icon pathname (string)icon index (integer).

# size of &lt;file&gt; : integer

Returns the size in bytes of a file.

# sqlite database of &lt;file&gt; : sqlite database

Opens the file as a sqlite database. This is a ``read-only`` SQLite connection. If the connection is successful, the path name of the database is displayed.

<strong>Multiple Processes and Multiple Connections</strong>

SQLite allows multiple processes to have the database file open at once, and for multiple processes to read the database at once. 
However, when any process wants to write, it must lock the entire database file for the duration of its update (usually a few milliseconds).

{% qna %}
Q: rows of statement "select count(*) from Artist" of sqlite database of file "chinook.db"
A: 275
{% endqna %}

# stationery of &lt;file&gt; : boolean

Returns `True` if the file is a stationery file.

# type of &lt;file&gt; : file type

This refers to the four-character identifier used in all MacOS files. The type describes the sort of file it is.

# variable of &lt;file&gt; : string

Returns the names of variables contained in an INF style file, in the format [section].name=value.

# version &lt;integer&gt; of &lt;file&gt; : version

Returns the nth version information from the "vers" resource of the given file. Typically n=1, but other information may be stored in "vers" resources greater than 1.

# version block &lt;integer&gt; of &lt;file&gt; : file version block

You can identify the particular version block you want to access by ordinal number.

# version block &lt;string&gt; of &lt;file&gt; : file version block

You can identify the particular version block you are looking up by name. The name you provide should match the id string of the version block.

# version block of &lt;file&gt; : file version block

Iterates through the version blocks of a file.

# version of &lt;file&gt; : version

Synonym for file version of &lt;file&gt;.

# visible of &lt;file&gt; : boolean

Returns `True` if the file is visible.

# volume of &lt;file&gt; : volume

The volume containing the file.

# windows checksum of &lt;file&gt; : integer

No documentation exists.

# xml document of &lt;file&gt; : xml dom document

Returns an XML Document Object Model (DOM) for the specified file.

# &lt;file&gt; as string : string

Creates a string containing the full pathname of the specified file. See &lt;file&gt;.
