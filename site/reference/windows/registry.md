---
title: registry
---

## registry key value type

The type identifier of the data associated with a registry key value.

#### &lt;registry key value type&gt; as string : string

Returns the type of value as a string. One of REG_SZ, REG_NONE, REG_DWORD, REG_LINK, REG_BINARY, REG_MULTI_SZ, REG_EXPAND_SZ, REG_RESOURCE_LIST, REG_DWORD_LITTLE_ENDIAN, REG_DWORD_BIG_ENDIAN, REG_FULL_RESOURCE_DESCRIPTOR, REG_RESOURCE_REQUIREMENTS_LIST.

## registry key value

The &lt;registry key value&gt; inspectors are used to access values stored within a registry key. All values have sizes and types. All of the values of a registry key have names except one, and it is called the &#39;default value&#39;. The type of the data stored in the value determines what casting operations are allowed. We have implemented several casting inspectors that you can use to extract values from the registry.

#### &lt;registry key value&gt; as time : time

If the data stored in the value is a string in MIME compliant date format, this property will return a time object. If the data stored is a binary value and is 16 or more bytes in length, its first 16 bytes are interpreted as a SYSTEMTIME and the corresponding time object is returned. See time.

#### &lt;registry key value&gt; as system file : file

If the data stored in the value is a string and it is a relative pathname from the system folder of a file that exists on disk, the corresponding file object is returned.

#### &lt;registry key value&gt; as string : string

Returns a string if the data of the value is of type REG_SZ.

#### &lt;registry key value&gt; as integer : integer

Returns the value stored in the registry entry provided it can be fully represented as an integer.

#### &lt;registry key value&gt; as folder : folder

If the data stored in the value is a string and it is the full pathname of a folder that exists on disk, the folder object is returned.

#### &lt;registry key value&gt; as file : file

If the data stored in the value is a string and it is the full pathname of a file that exists on disk, the file object is returned.

#### &lt;registry key value&gt; as application : application

If the data stored in the value is a string and it is the full pathname of an application that exists on disk, the application object is returned.

#### &lt;registry key value&gt; as system x64 file : file

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x64 system folder.

#### &lt;registry key value&gt; as system x32 file : file

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x32 system folder.

#### type of &lt;registry key value&gt; : registry key value type

Returns the type of the data of the value. See type of value of key or registry.

#### size of &lt;registry key value&gt; : integer

Returns the size of the data as an integer.

#### name of &lt;registry key value&gt; : string

Returns the name of the value as a string. (see escape of &lt;string&gt; for more information).

#### parent key of &lt;registry key value&gt; : registry key

No documentation exists for this property.

## registry key

The &lt;registry key&gt; objects represent Windows registry keys whose existence and properties can be inspected. Keys can be identified by name. There are several inspectors that return keys from parts of the registry that store file associations and active device drivers.

#### &lt;registry key&gt; as string : string

Returns the registry key name as a string

#### value of &lt;registry key&gt; : registry key value

Iterates through values stored under a key.

#### value &lt;string&gt; of &lt;registry key&gt; : registry key value

Returns the named value stored under the key. See registry key value.

#### security descriptor of &lt;registry key&gt; : security descriptor

Specifies the security descriptor associated with the specified registry key.

#### name of &lt;registry key&gt; : string

Returns the name of the key as a string.

#### last write time of &lt;registry key&gt; : time

Whenever a registry key is written (created or modified) Windows updates the last write time. This inspector returns that time to you on all Windows agents.

#### key of &lt;registry key&gt; : registry key

Iterates through the sub-keys of the key.

#### key &lt;string&gt; of &lt;registry key&gt; : registry key

Returns a key for the named sub-key.

#### driver key of &lt;registry key&gt; : registry key

Normally used as a property of a device key. Looks up the value of &quot;Driver&quot; of the key provided to indirectly return another key corresponding to HKEY_LOCAL_MACHINE\System\CurrentControlSet\ Services\Class\&lt;value of Driver&gt;.

#### default value of &lt;registry key&gt; : registry key value

Returns the unnamed value associated with a key as a string. It does not necessarily exist.

#### application of &lt;registry key&gt; : application

Returns the application associated with the &quot;open&quot; command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file extension.

#### application folder of &lt;registry key&gt; : folder

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

#### application folder &lt;string&gt; of &lt;registry key&gt; : folder

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

#### application &lt;string&gt; of &lt;registry key&gt; : application

Returns the application associated with the named command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

#### pathname of &lt;registry key&gt; : string

No documentation exists for this property.

#### parent key of &lt;registry key&gt; : registry key

Returns the parent (one level up) of the specified registry key

#### wow64 of &lt;registry key&gt; : boolean

No documentation exists for this property.

## registry

The &lt;registry&gt; objects are the inspectors that expose the Windows registry.

#### key &lt;string&gt; of &lt;registry&gt; : registry key

Returns a key associated with the name provided. See registry key.

#### file type &lt;string&gt; of &lt;registry&gt; : registry key

Returns a key associated the named file type. See registry key.

#### file extension &lt;string&gt; of &lt;registry&gt; : registry key

Returns a key associated with the named extension. See registry key.

#### device key of &lt;registry&gt; : registry key

Iterates through all the keys known to the configuration manager for active devices. See registry key.

#### device key &lt;string&gt; of &lt;registry&gt; : registry key

Iterates through all the keys known to the configuration manager for active devices whose &quot;DeviceDesc&quot; matches the name provided. See registry key.

#### current user key &lt;logged on user&gt; of &lt;registry&gt; : registry key

On 2000/2003/XP/Vista, this inspector returns RegOpenCurrentUser. Under NT4, it uses HKEY_USERS\&lt;sid&gt;. On these systems, the inspector may fail if run in a non-privileged context. Under Windows 9x, it returns HKEY_USERS\&lt;username&gt; if it exists. Otherwise it uses HKEY_USERS\Default.

#### application of &lt;registry&gt; : application

Iterates through the properly installed applications. See application.

#### application folder &lt;string&gt; of &lt;registry&gt; : folder

Returns the folder containing the matching name provided. See application. The application does not have to exist. The folder has to exist.

#### application &lt;string&gt; of &lt;registry&gt; : application

Returns an application object matching name provided. See application.

#### current user key of &lt;registry&gt; : registry key

Returns the registry key of the current logged on user if present

