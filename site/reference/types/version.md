# type: version

This is the numeric method of indicating the file version, which is compact, convenient and fast. It makes use of a short string to define the version number. Version types are available as both client and core inspectors, so if you don&#39;t find what you want in one guide, please check the other.

# bug revision of &lt;version&gt; : integer

If the stage is present the bug revision is the number after the stage. If absent, zero is implied.

# build revision of &lt;version&gt; : integer

Returns the final component of a version (Major.Minor.RevisionStageBuild).Example: build revision of version "7.1.2.70" - Returns 70.

# extrema of &lt;version&gt; : ( version, version )

Returns the minimum and maximum extreme values of the given list of &lt;version&lt; types.

# major revision of &lt;version&gt; : integer

The number before the first period in the version string.Example: major revision of version of file "name" &lt; 4 - Returns `True` if the major revision number is greater than the specified number.

# maximum of &lt;version&gt; : version

Returns the maximum value from a list of &lt;version&lt; types.

# minimum of &lt;version&gt; : version

Returns the minimum value from a list of &lt;version&lt; types.

# minor revision of &lt;version&gt; : integer

The number immediately after the first period in the version string. If absent, zero is implied.

# pad of &lt;version&gt; : version

Returns a version object which is padded with zero values.

# stage of &lt;version&gt; : stage

The stage is represented by the letter in the version string. It may be &#39;a&#39; for alpha, &#39;b&#39; for beta, &#39;d&#39; for development or &#39;f&#39; for final. If absent, final is implied.

# unique value of &lt;version&gt; : version with multiplicity

Returns the unique values of a given list of &lt;version&lt; types, removing duplicates and sorting by value.

# &lt;version&gt; as string : string

Turns a version type into a string of the form "1.2.3.4".Example: version of regapp "bigfix.exe" as string = "1.0.45.0" - Returns `True` if the BigFix application has the specified version.Example: version of package "BESAgent" of rpm as string = "3.1.0.19-1" - TRUE if the BESAgent program has the given version.

# &lt;version&gt; as version : version

Reflexive cast of version.

# &lt;version&gt; &lt; &lt;version&gt; : boolean

No documentation exists.

# &lt;version&gt; &lt;= &lt;version&gt; : boolean

No documentation exists.

# &lt;version&gt; = &lt;version&gt; : boolean

No documentation exists.
