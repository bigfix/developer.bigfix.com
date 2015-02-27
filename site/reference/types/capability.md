# type: capability

A package can have capabilities that it requires, provides, obsoletes, or conflicts with. For instance, apache may require sh, and provide httpd. If you want to install apache, you will need to have sh in the RPM database. If you want to install a package that uses httpd, you will need to install apache.

# name of &lt;capability&gt;

Returns the name of this capability object.

# relation of &lt;capability&gt;

If this capability object has version information, the relation is returned.Example: relation of capability &quot;sh &lt;= 4.1&quot; - Returns &quot;&lt;=&quot;, the &quot;less than or equal&quot; relation.

# version of &lt;capability&gt;

If this capability object has version information, the version is returned.Example: version of capability &quot;sh &lt;= 4.1&quot; - Returns &quot;4.1&quot;, the version of the specified capability.

# &lt;capability&gt; as string

Creates a string containing the capability&#39;s name, relation and version.Example: capability &quot;libxml2 &gt;= 2.4.7&quot; - Casts the capability as a string, returning &quot;libxml2 &gt;= 2.4.7&quot;.

# &lt;capability&gt; contains &lt;capability&gt;

Returns a boolean TRUE if the first capability satisfies the dependency specified by the second capability. A capability without version information is interpreted as a capability over all versions. If a package requires a capability not contained in the RPM database, then the rpm command will not allow that package to be installed.Example: capability &quot;x&quot; contains capability &quot;x = 1.0&quot; - Returns `True`. Having &quot;x&quot; at any version satisfies a requirement to have &quot;x&quot; at version 1.0.Example: capability &quot;x = 1.0&quot; contains capability &quot;x&quot; - Returns `True`. Having &quot;x&quot; at version 1.0 satisfies a requirement to have &quot;x&quot; at any version.Example: capability &quot;x = 1.0&quot; contains capability &quot;x &gt; 1.0&quot; - Returns `False`. Having x = version 1.0 will not satisfy a requirement to have x &gt; version 1.0.Example: capability &quot;x = 1.0&quot; contains capability &quot;x &lt; 2.0&quot;  - Returns `True`. Having x = version 1.0 will satisfy a requirement to have x &lt; version 2.0.Example: capability &quot;x&quot; contains capability &quot;y&quot; - Returns `False`. A capability can only be contained/satisfied by a capability with the same name.
