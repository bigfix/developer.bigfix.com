# registry

The &lt;registry&gt; objects are the inspectors that expose the Windows registry.

# application <string> of <registry>

Returns an application object matching name provided. See application.

# application folder <string> of <registry>

Returns the folder containing the matching name provided. See application. The application does not have to exist. The folder has to exist.

# application of <registry>

Iterates through the properly installed applications. See application.

# current user key <logged on user> of <registry>

On 2000/2003/XP/Vista, this inspector returns RegOpenCurrentUser. Under NT4, it uses HKEY_USERS\&lt;sid&gt;. On these systems, the inspector may fail if run in a non-privileged context. Under Windows 9x, it returns HKEY_USERS\&lt;username&gt; if it exists. Otherwise it uses HKEY_USERS\Default.

# current user key of <registry>

Returns the registry key of the current logged on user if present

# device key <string> of <registry>

Iterates through all the keys known to the configuration manager for active devices whose &quot;DeviceDesc&quot; matches the name provided. See registry key.

# device key of <registry>

Iterates through all the keys known to the configuration manager for active devices. See registry key.

# file extension <string> of <registry>

Returns a key associated with the named extension. See registry key.

# file type <string> of <registry>

Returns a key associated the named file type. See registry key.

# key <string> of <registry>

Returns a key associated with the name provided. See registry key.
