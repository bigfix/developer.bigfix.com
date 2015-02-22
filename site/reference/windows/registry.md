---
title: registry
---

{% type registry %}

The &lt;registry&gt; objects are the inspectors that expose the Windows registry.

#### Properties of registry

{% property application <string> of <registry> %}

Returns an application object matching name provided. See application.

{% property application folder <string> of <registry> %}

Returns the folder containing the matching name provided. See application. The application does not have to exist. The folder has to exist.

{% property application of <registry> %}

Iterates through the properly installed applications. See application.

{% property current user key <logged on user> of <registry> %}

On 2000/2003/XP/Vista, this inspector returns RegOpenCurrentUser. Under NT4, it uses HKEY_USERS\&lt;sid&gt;. On these systems, the inspector may fail if run in a non-privileged context. Under Windows 9x, it returns HKEY_USERS\&lt;username&gt; if it exists. Otherwise it uses HKEY_USERS\Default.

{% property current user key of <registry> %}

Returns the registry key of the current logged on user if present

{% property device key <string> of <registry> %}

Iterates through all the keys known to the configuration manager for active devices whose &quot;DeviceDesc&quot; matches the name provided. See registry key.

{% property device key of <registry> %}

Iterates through all the keys known to the configuration manager for active devices. See registry key.

{% property file extension <string> of <registry> %}

Returns a key associated with the named extension. See registry key.

{% property file type <string> of <registry> %}

Returns a key associated the named file type. See registry key.

{% property key <string> of <registry> %}

Returns a key associated with the name provided. See registry key.

{% type registry key %}

The &lt;registry key&gt; objects represent Windows registry keys whose existence and properties can be inspected. Keys can be identified by name. There are several inspectors that return keys from parts of the registry that store file associations and active device drivers.

#### Properties of registry key

{% property application <string> of <registry key> %}

Returns the application associated with the named command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

{% property application folder <string> of <registry key> %}

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

{% property application folder of <registry key> %}

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

{% property application of <registry key> %}

Returns the application associated with the &quot;open&quot; command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file extension.

{% property default value of <registry key> %}

Returns the unnamed value associated with a key as a string. It does not necessarily exist.

{% property driver key of <registry key> %}

Normally used as a property of a device key. Looks up the value of &quot;Driver&quot; of the key provided to indirectly return another key corresponding to HKEY_LOCAL_MACHINE\System\CurrentControlSet\ Services\Class\&lt;value of Driver&gt;.

{% property key <string> of <registry key> %}

Returns a key for the named sub-key.

{% property key of <registry key> %}

Iterates through the sub-keys of the key.

{% property last write time of <registry key> %}

Whenever a registry key is written (created or modified) Windows updates the last write time. This inspector returns that time to you on all Windows agents.

{% property name of <registry key> %}

Returns the name of the key as a string.

{% property parent key of <registry key> %}

Returns the parent (one level up) of the specified registry key

{% property pathname of <registry key> %}

No documentation exists for this property.

{% property security descriptor of <registry key> %}

Specifies the security descriptor associated with the specified registry key.

{% property value <string> of <registry key> %}

Returns the named value stored under the key. See registry key value.

{% property value of <registry key> %}

Iterates through values stored under a key.

{% property wow64 of <registry key> %}

No documentation exists for this property.

#### Casts of registry key

{% cast <registry key> as string %}

Returns the registry key name as a string

{% type registry key value %}

The &lt;registry key value&gt; inspectors are used to access values stored within a registry key. All values have sizes and types. All of the values of a registry key have names except one, and it is called the &#39;default value&#39;. The type of the data stored in the value determines what casting operations are allowed. We have implemented several casting inspectors that you can use to extract values from the registry.

#### Properties of registry key value

{% property name of <registry key value> %}

Returns the name of the value as a string. (see escape of &lt;string&gt; for more information).

{% property parent key of <registry key value> %}

No documentation exists for this property.

{% property size of <registry key value> %}

Returns the size of the data as an integer.

{% property type of <registry key value> %}

Returns the type of the data of the value. See type of value of key or registry.

#### Casts of registry key value

{% cast <registry key value> as application %}

If the data stored in the value is a string and it is the full pathname of an application that exists on disk, the application object is returned.

{% cast <registry key value> as file %}

If the data stored in the value is a string and it is the full pathname of a file that exists on disk, the file object is returned.

{% cast <registry key value> as folder %}

If the data stored in the value is a string and it is the full pathname of a folder that exists on disk, the folder object is returned.

{% cast <registry key value> as integer %}

Returns the value stored in the registry entry provided it can be fully represented as an integer.

{% cast <registry key value> as string %}

Returns a string if the data of the value is of type REG_SZ.

{% cast <registry key value> as system file %}

If the data stored in the value is a string and it is a relative pathname from the system folder of a file that exists on disk, the corresponding file object is returned.

{% cast <registry key value> as system x32 file %}

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x32 system folder.

{% cast <registry key value> as system x64 file %}

If the value contains a string and the string points to an file, a file object is returned. Relative paths are interpreted relative to the x64 system folder.

{% cast <registry key value> as time %}

If the data stored in the value is a string in MIME compliant date format, this property will return a time object. If the data stored is a binary value and is 16 or more bytes in length, its first 16 bytes are interpreted as a SYSTEMTIME and the corresponding time object is returned. See time.

{% type registry key value type %}

The type identifier of the data associated with a registry key value.

#### Casts of registry key value type

{% cast <registry key value type> as string %}

Returns the type of value as a string. One of REG_SZ, REG_NONE, REG_DWORD, REG_LINK, REG_BINARY, REG_MULTI_SZ, REG_EXPAND_SZ, REG_RESOURCE_LIST, REG_DWORD_LITTLE_ENDIAN, REG_DWORD_BIG_ENDIAN, REG_FULL_RESOURCE_DESCRIPTOR, REG_RESOURCE_REQUIREMENTS_LIST.

