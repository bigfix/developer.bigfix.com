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

# first line of &lt;file&gt; : file line

Returns the first line of the given file.

{% qna %}
Q: first line of file "C:\Users\user\Desktop\text.txt"
A: This is first line.
{% endqna %}

# first line &lt;integer&gt; of &lt;file&gt; : file line

This inspector is meant to be used in its plural form. Returns the first n lines (specified by &lt;integer&gt;) of the given file.

{% qna %}
Q: first lines 2 of file "C:\Users\user\Desktop\text.txt"
A: This is the first line.
A: This is the second line.
{% endqna %}

# first rawline of &lt;file&gt; : file rawline

Returns the first line of a given file, ignoring encoding errors.

{% qna %}
Q: first rawline of file "C:\Users\user\Desktop\text.txt"
A: This is the first line.
{% endqna %}

# first rawline &lt;integer&gt; of &lt;file&gt; : file rawline

This inspector is meant to be used in its plural form. Returns the first n lines (specified by &lt;integer&gt;) of the given file, ignoring encoding errors.

{% qna %}
Q: first rawlines 2 of file "C:\Users\user\Desktop\text.txt"
A: This is the first line.
A: This is the second line.
{% endqna %}

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

# last line of &lt;file&gt; : file line

Returns the last line of the given file.

{% qna %}
Q: last line of file "C:\Users\user\Desktop\text.txt"
A: This the last line.
{% endqna %}

# last line &lt;integer&gt; of &lt;file&gt; : file line

This inspector is meant to be used in its plural form. Returns the last n lines (specified by &lt;integer&gt;) of the given file.

{% qna %}
Q: last lines 2 of file "C:\Users\user\Desktop\text.txt"
A: This is the penultimate line.
A: This is the last line.
{% endqna %}

# last rawline of &lt;file&gt; : file rawline

Returns the last line of a given file, ignoring encoding errors.

{% qna %}
Q: last rawline of file "C:\Users\user\Desktop\text.txt"
A: This is the last line.
{% endqna %}

# last rawline &lt;integer&gt; of &lt;file&gt; : file rawline

This inspector is meant to be used in its plural form. Returns the last n lines (specified by &lt;integer&gt;) of the given file, ignoring encoding errors.

{% qna %}
Q: last rawlines 2 of file "C:\Users\user\Desktop\text.txt"
A: This is the penultimate line.
A: This is the last line.
{% endqna %}

# length of &lt;file&gt; : integer

The total length of the data and resource forks. Example: Length of data fork of file "Microsoft Word" of folder "Microsoft Office X" of Applications folder is greater than 100000 - Returns `True` if the data fork of the system file is greater than the specified amount.

# line &lt;integer&gt; of &lt;file&gt; : file line

Returns the nth line (specified by &lt;integer&gt;) from the given file.

# line containing &lt;string&gt; of &lt;file&gt; : file line

Returns all lines from the given file that contain the specified string.

# line of &lt;file&gt; : file line

Iterates over all the lines of the given file. Note that each line is truncated to 2048 bytes and the remaining characters are moved to the next line.

# line starting with &lt;string&gt; of &lt;file&gt; : file line

Returns the lines of the given file that start with the specified string.

# locked content of &lt;file&gt; : file content

Returns an object that can be used to search for a string in the specified file that might be locked because it is concurrently opened for writing by another application. 

You are supposed to use this inspector to access files that are only being appended to, such as log files, because the files can be changed while the inspector reads them. Otherwise the results can be unpredictable.

This inspector cannot read all kinds of *locked files*. It fails to open a file if another application has opened the file in an *exclusive mode*, that is, without allowing others to read the file.

The inspector does not override the access mode or the sharing flag specified to open the file by another application.

# locked key &lt;string&gt; of &lt;file&gt; : string

Returns a key and its value from the given structured text file that might be locked because it is concurrently opened for writing by another application. It iterates over lines that start with the key name (as specified by &lt;string&gt;) followed by an = or : character. When searching, white space is ignored.

You are supposed to use this inspector to access files that are only being appended to, such as log files, because the files can be changed while the inspector reads them. Otherwise the results can be unpredictable.

This inspector cannot read all kinds of *locked files*. It fails to open a file if another application has opened the file in an *exclusive mode*, that is, without allowing others to read the file.

The inspector does not override the access mode or the sharing flag specified to open the file by another application.

# locked line &lt;integer&gt; of &lt;file&gt; : file line

Returns the nth line (specified by &lt;integer&gt;) from the given file that might be locked because it is concurrently opened for writing by another application. 

You are supposed to use this inspector to access files that are only being appended to, such as log files, because the files can be changed while the inspector reads them. Otherwise the results can be unpredictable.

This inspector cannot read all kinds of *locked files*. It fails to open a file if another application has opened the file in an *exclusive mode*, that is, without allowing others to read the file.

The inspector does not override the access mode or the sharing flag specified to open the file by another application.

# locked line containing &lt;string&gt; of &lt;file&gt; : file line

Returns all the lines containing the specified string and belonging to the given file that might be locked because it is concurrently opened for writing by another application. 

You are supposed to use this inspector to access files that are only being appended to, such as log files, because the files can be changed while the inspector reads them. Otherwise the results can be unpredictable.

This inspector cannot read all kinds of *locked files*. It fails to open a file if another application has opened the file in an *exclusive mode*, that is, without allowing others to read the file.

The inspector does not override the access mode or the sharing flag specified to open the file by another application.

# locked line of &lt;file&gt; : file line

Iterates over all the lines of the specified file that might be locked because it is concurrently opened for writing by another application. Note that each line is truncated to 2048 bytes and the remaining characters are moved to the next line. 

You are supposed to use this inspector to access files that are only being appended to, such as log files, because the files can be changed while the inspector reads them. Otherwise the results can be unpredictable.

This inspector cannot read all kinds of *locked files*. It fails to open a file if another application has opened the file in an *exclusive mode*, that is, without allowing others to read the file.

The inspector does not override the access mode or the sharing flag specified to open the file by another application.

# locked line starting with &lt;string&gt; of &lt;file&gt; : file line

Returns the lines starting with the specified string and belonging to the given file that might be locked because it is concurrently opened for writing by another application. 

You are supposed to use this inspector to access files that are only being appended to, such as log files, because the files can be changed while the inspector reads them. Otherwise the results can be unpredictable.

This inspector cannot read all kinds of *locked files*. It fails to open a file if another application has opened the file in an *exclusive mode*, that is, without allowing others to read the file.

The inspector does not override the access mode or the sharing flag specified to open the file by another application.

# locked of &lt;file&gt; : boolean

Returns `True` if the file is locked.Example: locked of file "this file" of folder "this folder" - Returns `True` if the specified file is locked.

# locked rawline &lt;integer&gt; of &lt;file&gt; : file rawline

Same as "locked line &lt;integer&gt; of &lt;file&gt;" but ignoring encoding errors.

# locked rawline containing &lt;string&gt; of &lt;file&gt; : file rawline

Same as "locked line containing &lt;string&gt; of &lt;file&gt;" but ignoring encoding errors.

# locked rawline of &lt;file&gt; : file rawline

Same as "locked line of &lt;file&gt;" but ignoring encoding errors.

# locked rawline starting with &lt;string&gt; of &lt;file&gt; : file rawline

Same as "locked line starting with &lt;string&gt; of &lt;file&gt;" but ignoring encoding errors.

# locked section &lt;string&gt; of &lt;file&gt; : file section

Returns a named section of the specified file that might be locked because it is concurrently opened for writing by another application. It is useful for locating sections of &#39;ini&#39; files. Section names are delimited by square bracket characters &#39;[section name]&#39;.

You are supposed to use this inspector to access files that are only being appended to, such as log files, because the files can be changed while the inspector reads them. Otherwise the results can be unpredictable.

This inspector cannot read all kinds of *locked files*. It fails to open a file if another application has opened the file in an *exclusive mode*, that is, without allowing others to read the file.

The inspector does not override the access mode or the sharing flag specified to open the file by another application.

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

# rawline &lt;integer&gt; of &lt;file&gt; : file rawline

Returns the nth line (specified by &lt;integer&gt;) from the given file, ignoring encoding errors.

# rawline containing &lt;string&gt; of &lt;file&gt; : file rawline

Returns all lines from the given file that contain the specified string, ignoring encoding errors.

# rawline of &lt;file&gt; : file rawline

Iterates over all the lines of the given file, ignoring encoding errors. Note that each line is truncated to 2048 bytes and the remaining characters are moved to the next line.

# rawline starting with &lt;string&gt; of &lt;file&gt; : file rawline

Returns the lines of the given file that start with the specified string, ignoring encoding errors.

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

# yaml of &lt;file&gt; : yaml value

Returns a YAML value for the content of the file.

The following is the content of a test file named "test.yaml".

```
published: true
domain:
  - devops
  - devsecops
tutorial:
  - yaml:
      name: YAML Ain't Markup Language
      type: awesome
      born: 2001
  - xml:
      name: Extensible Markup Language
      type: good
      born: 1996
```

This example shows how to create a `yaml value` representing the content of the file "test.yaml".
Note that newline `\n` characters have been "percent-encoded" as `%0a`.

{% qna %}
Q: yaml of file "./test.yaml"
A: domain:%0a  - devops%0a  - devsecops%0apublished: true%0atutorial:%0a  - yaml:%0a      name: YAML Ain't Markup Language%0a      type: awesome%0a      born: 2001%0a  - xml:%0a      name: Extensible Markup Language%0a      type: good%0a      born: 1996
{% endqna %}

The following is the content of a test file named "complex.yaml".

```
my_boolean: true
my_number: 3
my_float: 3.14
my_string_1: "foo bar"
my-string-2: foo bar
my_list_1:
  - A
  - B
my-list-2: ['A', 'B']
my_dict_1:
  field_a: A
  field_b: B
  sub_dict:
    sub_field: C1
my-dict-2: { field_a: A, field_b: B, sub_dict: { sub_field: C1 } }
my_obj_list_1:
  -
    obj_1_field: 1A
  -
    obj_2_field: 2A
my-obj-list-2: [ { obj_1_field: 1A }, { obj_2_field: 2A } ]
```

This example shows how to create a `yaml value` representing the content of the file "complex.yaml".
Note that certain characters have been "percent-encoded".

{% qna %}
Q: yaml of file "./complex.yaml"
A: my_dict_1:%0a  field_a: A%0a  field_b: B%0a  sub_dict:%0a    sub_field: C1%0amy_list_1:%0a  - A%0a  - B%0amy-string-2: foo bar%0amy_boolean: true%0amy_string_1: foo bar%0amy_number: 3%0amy_float: 3.14%0amy-list-2: [A, B]%0amy-dict-2:%0a  field_a: A%0a  field_b: B%0a  sub_dict:%0a    sub_field: C1%0amy_obj_list_1:%0a  - obj_1_field: 1A%0a  - obj_2_field: 2A%0amy-obj-list-2: [{obj_1_field: 1A}, {obj_2_field: 2A}]
{% endqna %}

# &lt;file&gt; as string : string

Creates a string containing the full pathname of the specified file. See &lt;file&gt;.
