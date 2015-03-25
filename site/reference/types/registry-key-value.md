# type: registry key value

The &amp;lt;registry key value&amp;gt; inspectors are used to access values stored within a registry key. All values have sizes and types. All of the values of a registry key have names except one, and it is called the &amp;#39;default value&amp;#39;. The type of the data stored in the value determines what casting operations are allowed. We have implemented several casting inspectors that you can use to extract values from the registry.

# name of &lt;registry key value&gt; : string

Returns the name of the value as a string. (see escape of &amp;lt;string&amp;gt; for more information).

# parent key of &lt;registry key value&gt; : registry key

No documentation exists.

# size of &lt;registry key value&gt; : integer

Returns the size of the data as an integer.

# type of &lt;registry key value&gt; : registry key value type

Returns the type of the data of the value. See type of value of key or registry.

# &lt;registry key value&gt; as application : application

If the data stored in the value is a string and it is the full pathname of an application that exists on disk, the application object is returned.

# &lt;registry key value&gt; as file : file

If the data stored in the value is a string and it is the full pathname of a file that exists on disk, the file object is returned.

# &lt;registry key value&gt; as folder : folder

If the data stored in the value is a string and it is the full pathname of a folder that exists on disk, the folder object is returned.

# &lt;registry key value&gt; as integer : integer

Returns the value stored in the registry entry provided it can be fully represented as an integer.

# &lt;registry key value&gt; as string : string

Returns a string if the data of the value is of type REG_SZ.

# &lt;registry key value&gt; as system file : file

If the data stored in the value is a string and it is a relative pathname from the system folder of a file that exists on disk, the corresponding file object is returned.

# &lt;registry key value&gt; as system x32 file : file

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x32 system folder.

# &lt;registry key value&gt; as system x64 file : file

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x64 system folder.

# &lt;registry key value&gt; as time : time

If the data stored in the value is a string in MIME compliant date format, this property will return a time object. If the data stored is a binary value and is 16 or more bytes in length, its first 16 bytes are interpreted as a SYSTEMTIME and the corresponding time object is returned. See time.

# &lt;registry key value&gt; &lt; &lt;registry key value&gt; : boolean

No documentation exists.

# &lt;registry key value&gt; &lt;= &lt;registry key value&gt; : boolean

No documentation exists.

# &lt;registry key value&gt; = &lt;registry key value&gt; : boolean

No documentation exists.
