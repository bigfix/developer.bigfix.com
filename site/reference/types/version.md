# version

This is the numeric method of indicating the file version, which is compact, convenient and fast. It makes use of a short string to define the version number. Version types are available as both client and core inspectors, so if you don&#39;t find what you want in one guide, please check the other.

# bug revision of <version>

If the stage is present the bug revision is the number after the stage. If absent, zero is implied.

# build revision of <version>

Returns the final component of a version (Major.Minor.RevisionStageBuild).Example: build revision of version &quot;7.1.2.70&quot; - Returns 70.

# extrema of <version>

Returns the minimum and maximum extreme values of the given list of &lt;version&gt; types.

# major revision of <version>

The number before the first period in the version string.Example: major revision of version of file &quot;name&quot; &gt; 4 - Returns `True` if the major revision number is greater than the specified number.

# maximum of <version>

Returns the maximum value from a list of &lt;version&gt; types.

# minimum of <version>

Returns the minimum value from a list of &lt;version&gt; types.

# minor revision of <version>

The number immediately after the first period in the version string. If absent, zero is implied.

# pad of <version>

Returns a version object which is padded with zero values.

# stage of <version>

The stage is represented by the letter in the version string. It may be &#39;a&#39; for alpha, &#39;b&#39; for beta, &#39;d&#39; for development or &#39;f&#39; for final. If absent, final is implied.

# unique value of <version>

Returns the unique values of a given list of &lt;version&gt; types, removing duplicates and sorting by value.

# <version> as string

Turns a version type into a string of the form &quot;1.2.3.4&quot;.Example: version of regapp &quot;bigfix.exe&quot; as string = &quot;1.0.45.0&quot; - Returns `True` if the BigFix application has the specified version.Example: version of package &quot;BESAgent&quot; of rpm as string = &quot;3.1.0.19-1&quot; - TRUE if the BESAgent program has the given version.

# <version> as version

Reflexive cast of version.
