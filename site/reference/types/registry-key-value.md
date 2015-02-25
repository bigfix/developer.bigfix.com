# registry key value

The &lt;registry key value&gt; inspectors are used to access values stored within a registry key. All values have sizes and types. All of the values of a registry key have names except one, and it is called the &#39;default value&#39;. The type of the data stored in the value determines what casting operations are allowed. We have implemented several casting inspectors that you can use to extract values from the registry.

# name of [registry key value]

Returns the name of the value as a string. (see escape of &lt;string&gt; for more information).

# parent key of [registry key value]

No documentation exists.

# size of [registry key value]

Returns the size of the data as an integer.

# type of [registry key value]

Returns the type of the data of the value. See type of value of key or registry.

# [registry key value] as application

If the data stored in the value is a string and it is the full pathname of an application that exists on disk, the application object is returned.

# [registry key value] as file

If the data stored in the value is a string and it is the full pathname of a file that exists on disk, the file object is returned.

# [registry key value] as folder

If the data stored in the value is a string and it is the full pathname of a folder that exists on disk, the folder object is returned.

# [registry key value] as integer

Returns the value stored in the registry entry provided it can be fully represented as an integer.

# [registry key value] as string

Returns a string if the data of the value is of type REG_SZ.

# [registry key value] as system file

If the data stored in the value is a string and it is a relative pathname from the system folder of a file that exists on disk, the corresponding file object is returned.

# [registry key value] as system x32 file

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x32 system folder.

# [registry key value] as system x64 file

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x64 system folder.

# [registry key value] as time

If the data stored in the value is a string in MIME compliant date format, this property will return a time object. If the data stored is a binary value and is 16 or more bytes in length, its first 16 bytes are interpreted as a SYSTEMTIME and the corresponding time object is returned. See time.
