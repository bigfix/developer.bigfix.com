# type: registry

The &lt;registry&lt; objects are the inspectors that expose the Windows registry.

# application &lt;string&gt; of &lt;registry&gt; : application

Returns an application object matching name provided. See application.

# application folder &lt;string&gt; of &lt;registry&gt; : folder

Returns the folder containing the matching name provided. See application. The application does not have to exist. The folder has to exist.

# application of &lt;registry&gt; : application

Iterates through the properly installed applications. See application.

# current user key &lt;logged on user&gt; of &lt;registry&gt; : registry key

On 2000/2003/XP/Vista, this inspector returns RegOpenCurrentUser. Under NT4, it uses HKEY_USERS\&lt;sid&lt;. On these systems, the inspector may fail if run in a non-privileged context. Under Windows 9x, it returns HKEY_USERS\&lt;username&lt; if it exists. Otherwise it uses HKEY_USERS\Default.

# current user key of &lt;registry&gt; : registry key

Returns the registry key of the current logged on user if present

# device key &lt;string&gt; of &lt;registry&gt; : registry key

Iterates through all the keys known to the configuration manager for active devices whose "DeviceDesc" matches the name provided. See registry key.

# device key of &lt;registry&gt; : registry key

Iterates through all the keys known to the configuration manager for active devices. See registry key.

# file extension &lt;string&gt; of &lt;registry&gt; : registry key

Returns a key associated with the named extension. See registry key.

# file type &lt;string&gt; of &lt;registry&gt; : registry key

Returns a key associated the named file type. See registry key.

# key &lt;string&gt; of &lt;registry&gt; : registry key

Returns a key associated with the name provided. See registry key.
