# registry key

The &lt;registry key&gt; objects represent Windows registry keys whose existence and properties can be inspected. Keys can be identified by name. There are several inspectors that return keys from parts of the registry that store file associations and active device drivers.

# application [string] of [registry key]

Returns the application associated with the named command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

# application folder [string] of [registry key]

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

# application folder of [registry key]

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

# application of [registry key]

Returns the application associated with the &quot;open&quot; command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file extension.

# default value of [registry key]

Returns the unnamed value associated with a key as a string. It does not necessarily exist.

# driver key of [registry key]

Normally used as a property of a device key. Looks up the value of &quot;Driver&quot; of the key provided to indirectly return another key corresponding to HKEY_LOCAL_MACHINE\System\CurrentControlSet\ Services\Class\&lt;value of Driver&gt;.

# key [string] of [registry key]

Returns a key for the named sub-key.

# key of [registry key]

Iterates through the sub-keys of the key.

# last write time of [registry key]

Whenever a registry key is written (created or modified) Windows updates the last write time. This inspector returns that time to you on all Windows agents.

# name of [registry key]

Returns the name of the key as a string.

# parent key of [registry key]

Returns the parent (one level up) of the specified registry key

# pathname of [registry key]

No documentation exists.

# security descriptor of [registry key]

Specifies the security descriptor associated with the specified registry key.

# value [string] of [registry key]

Returns the named value stored under the key. See registry key value.

# value of [registry key]

Iterates through values stored under a key.

# wow64 of [registry key]

No documentation exists.

# [registry key] as string

Returns the registry key name as a string
