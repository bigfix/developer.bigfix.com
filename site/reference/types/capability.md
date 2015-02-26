# capability

A package can have capabilities that it requires, provides, obsoletes, or conflicts with. For instance, apache may require sh, and provide httpd. If you want to install apache, you will need to have sh in the RPM database. If you want to install a package that uses httpd, you will need to install apache.

# name of <capability>

Returns the name of this capability object.

# relation of <capability>

If this capability object has version information, the relation is returned.Example: relation of capability &quot;sh &lt;= 4.1&quot; - Returns &quot;&lt;=&quot;, the &quot;less than or equal&quot; relation.

# version of <capability>

If this capability object has version information, the version is returned.Example: version of capability &quot;sh &lt;= 4.1&quot; - Returns &quot;4.1&quot;, the version of the specified capability.

# <capability> as string

Creates a string containing the capability&#39;s name, relation and version.Example: capability &quot;libxml2 &gt;= 2.4.7&quot; - Casts the capability as a string, returning &quot;libxml2 &gt;= 2.4.7&quot;.
