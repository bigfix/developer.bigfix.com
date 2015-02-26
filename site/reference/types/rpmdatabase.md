# rpmdatabase

The &lt;rpmdatabase&gt; objects are the Linux RPM Package Manager inspectors. The RPM database contains entries for all the installed programs on this computer.

# capability <string> of <rpmdatabase>

Returns a capability object matching this string if some package in the RPM database provides that capability.

# installed <string> of <rpmdatabase>

Returns `True` if some package in the RPM database provides the capability represented by this string.

# package <string> of <rpmdatabase>

Returns the named package from the given RPM database.

# package conflicting with <capability> of <rpmdatabase>

Returns a package in the RPM database that conflicts with this capability. If any packages are returned, then the rpm command will not allow any package providing this capability to be installed.

# package installing <capability> of <rpmdatabase>

Finds the package that installed the specified capability.

# package of <rpmdatabase>

Returns all the packages in the given RPM database.

# package providing <capability> of <rpmdatabase>

Returns a package in the RPM database that provides this capability. If no packages are returned, then the rpm command will not allow any packages requiring this capability to be installed.

# package requiring <capability> of <rpmdatabase>

Returns a package in the RPM database that requires this capability. If any packages are returned, then the rpm command will not allow any installed package that provides this capability to be uninstalled.
