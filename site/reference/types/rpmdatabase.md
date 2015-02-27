# type: rpmdatabase

The &lt;rpmdatabase&gt; objects are the Linux RPM Package Manager inspectors. The RPM database contains entries for all the installed programs on this computer.

# capability &lt;string&gt; of &lt;rpmdatabase&gt;

Returns a capability object matching this string if some package in the RPM database provides that capability.

# installed &lt;string&gt; of &lt;rpmdatabase&gt;

Returns `True` if some package in the RPM database provides the capability represented by this string.

# package &lt;string&gt; of &lt;rpmdatabase&gt;

Returns the named package from the given RPM database.

# package conflicting with &lt;capability&gt; of &lt;rpmdatabase&gt;

Returns a package in the RPM database that conflicts with this capability. If any packages are returned, then the rpm command will not allow any package providing this capability to be installed.

# package installing &lt;capability&gt; of &lt;rpmdatabase&gt;

Finds the package that installed the specified capability.

# package of &lt;rpmdatabase&gt;

Returns all the packages in the given RPM database.

# package providing &lt;capability&gt; of &lt;rpmdatabase&gt;

Returns a package in the RPM database that provides this capability. If no packages are returned, then the rpm command will not allow any packages requiring this capability to be installed.

# package requiring &lt;capability&gt; of &lt;rpmdatabase&gt;

Returns a package in the RPM database that requires this capability. If any packages are returned, then the rpm command will not allow any installed package that provides this capability to be uninstalled.
