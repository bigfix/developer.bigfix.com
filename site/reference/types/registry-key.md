# type: registry key

The &lt;registry key&gt; objects represent Windows registry keys whose existence and properties can be inspected. Keys can be identified by name. There are several inspectors that return keys from parts of the registry that store file associations and active device drivers.

# application &lt;string&gt; of &lt;registry key&gt; : application

Returns the application associated with the named command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

# application folder &lt;string&gt; of &lt;registry key&gt; : folder

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

# application folder of &lt;registry key&gt; : folder

Returns the parent folder associated with the named application. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file type.

# application of &lt;registry key&gt; : application

Returns the application associated with the "open" command. Normally used with a sub-key of key HKEY_CLASSES_ROOT whose name is a file extension.

# default value of &lt;registry key&gt; : registry key value

Returns the unnamed value associated with a key as a string. It does not necessarily exist.

# driver key of &lt;registry key&gt; : registry key

Normally used as a property of a device key. Looks up the value of "Driver" of the key provided to indirectly return another key corresponding to HKEY_LOCAL_MACHINE\System\CurrentControlSet\ Services\Class\&lt;value of Driver&gt;.

# key &lt;string&gt; of &lt;registry key&gt; : registry key

Returns a key for the named sub-key.

# key of &lt;registry key&gt; : registry key

Iterates through the sub-keys of the key.

# last write time of &lt;registry key&gt; : time

Whenever a registry key is written (created or modified) Windows updates the last write time. This inspector returns that time to you on all Windows agents.

# name of &lt;registry key&gt; : string

Returns the name of the key as a string.

# parent key of &lt;registry key&gt; : registry key

Returns the parent (one level up) of the specified registry key

# pathname of &lt;registry key&gt; : string

No documentation exists.

# security descriptor of &lt;registry key&gt; : security descriptor

Specifies the security descriptor associated with the specified registry key.

# value &lt;string&gt; of &lt;registry key&gt; : registry key value

Returns the named value stored under the key. See registry key value.

# value of &lt;registry key&gt; : registry key value

Iterates through values stored under a key.

# wow64 of &lt;registry key&gt; : boolean

No documentation exists.

# &lt;registry key&gt; as string : string

Returns the registry key name as a string
