# type: capability

A package can have capabilities that it requires, provides, obsoletes, or conflicts with. For instance, apache may require sh, and provide httpd. If you want to install apache, you will need to have sh in the RPM database. If you want to install a package that uses httpd, you will need to install apache.

# name of &lt;capability&gt; : string

Returns the name of this capability object.

# relation of &lt;capability&gt; : string

If this capability object has version information, the relation is returned.Example: relation of capability "sh &lt;= 4.1" - Returns "&lt;=", the "less than or equal" relation.

# version of &lt;capability&gt; : string

If this capability object has version information, the version is returned.Example: version of capability "sh &lt;= 4.1" - Returns "4.1", the version of the specified capability.

# &lt;capability&gt; as string : string

Creates a string containing the capability&#39;s name, relation and version.Example: capability "libxml2 &lt;= 2.4.7" - Casts the capability as a string, returning "libxml2 &lt;= 2.4.7".

# &lt;capability&gt; contains &lt;capability&gt; : boolean

Returns a boolean TRUE if the first capability satisfies the dependency specified by the second capability. A capability without version information is interpreted as a capability over all versions. If a package requires a capability not contained in the RPM database, then the rpm command will not allow that package to be installed.Example: capability "x" contains capability "x = 1.0" - Returns `True`. Having "x" at any version satisfies a requirement to have "x" at version 1.0.Example: capability "x = 1.0" contains capability "x" - Returns `True`. Having "x" at version 1.0 satisfies a requirement to have "x" at any version.Example: capability "x = 1.0" contains capability "x &lt; 1.0" - Returns `False`. Having x = version 1.0 will not satisfy a requirement to have x &lt; version 1.0.Example: capability "x = 1.0" contains capability "x &lt; 2.0"  - Returns `True`. Having x = version 1.0 will satisfy a requirement to have x &lt; version 2.0.Example: capability "x" contains capability "y" - Returns `False`. A capability can only be contained/satisfied by a capability with the same name.
