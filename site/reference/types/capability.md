# type: capability

A package can have capabilities that it requires, provides, obsoletes, or conflicts with. For instance, apache may require sh, and provide httpd. If you want to install apache, you will need to have sh in the RPM database. If you want to install a package that uses httpd, you will need to install apache.

# name of &lt;capability&gt; : string

Returns the name of this capability object.

# relation of &lt;capability&gt; : string

If this capability object has version information, the relation is returned.Example: relation of capability &amp;quot;sh &amp;lt;= 4.1&amp;quot; - Returns &amp;quot;&amp;lt;=&amp;quot;, the &amp;quot;less than or equal&amp;quot; relation.

# version of &lt;capability&gt; : string

If this capability object has version information, the version is returned.Example: version of capability &amp;quot;sh &amp;lt;= 4.1&amp;quot; - Returns &amp;quot;4.1&amp;quot;, the version of the specified capability.

# &lt;capability&gt; as string : string

Creates a string containing the capability&amp;#39;s name, relation and version.Example: capability &amp;quot;libxml2 &amp;gt;= 2.4.7&amp;quot; - Casts the capability as a string, returning &amp;quot;libxml2 &amp;gt;= 2.4.7&amp;quot;.

# &lt;capability&gt; contains &lt;capability&gt; : boolean

Returns a boolean TRUE if the first capability satisfies the dependency specified by the second capability. A capability without version information is interpreted as a capability over all versions. If a package requires a capability not contained in the RPM database, then the rpm command will not allow that package to be installed.Example: capability &amp;quot;x&amp;quot; contains capability &amp;quot;x = 1.0&amp;quot; - Returns `True`. Having &amp;quot;x&amp;quot; at any version satisfies a requirement to have &amp;quot;x&amp;quot; at version 1.0.Example: capability &amp;quot;x = 1.0&amp;quot; contains capability &amp;quot;x&amp;quot; - Returns `True`. Having &amp;quot;x&amp;quot; at version 1.0 satisfies a requirement to have &amp;quot;x&amp;quot; at any version.Example: capability &amp;quot;x = 1.0&amp;quot; contains capability &amp;quot;x &amp;gt; 1.0&amp;quot; - Returns `False`. Having x = version 1.0 will not satisfy a requirement to have x &amp;gt; version 1.0.Example: capability &amp;quot;x = 1.0&amp;quot; contains capability &amp;quot;x &amp;lt; 2.0&amp;quot;  - Returns `True`. Having x = version 1.0 will satisfy a requirement to have x &amp;lt; version 2.0.Example: capability &amp;quot;x&amp;quot; contains capability &amp;quot;y&amp;quot; - Returns `False`. A capability can only be contained/satisfied by a capability with the same name.
