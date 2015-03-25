# type: rpm package release

The &amp;lt;rpm package release&amp;gt; inspectors disclose properties of the RPM package version record inspector. They are collected from the &amp;#39;Release&amp;#39; component of the Epoch, Version and Release fields associated with an RPM package. The behavior of this inspector differs from a string, because they are sorted according to RPM rules defined by the rpmvercmp() function of the RPM library. Don&amp;#39;t create an &amp;lt;rpm package release&amp;gt; inspector with embedded &amp;#39;-&amp;#39; or whitespace characters. These characters are disallowed in RPM, and will cause the statement to fail. Note: Requires the presence of the RPM library and librpminfo (an open source library created by BigFix containing modified RPM library code) on the client machine. librpminfo is installed on the client as part of the normal BES client RPM installation procedure.

# extrema of &lt;rpm package release&gt; : ( rpm package release, rpm package release )

Returns the minimum and maximum extreme values of the given list of RPM package releases.

# maximum of &lt;rpm package release&gt; : rpm package release

Returns the maximum value from a list of &amp;lt;rpm package release&amp;gt; types.

# minimum of &lt;rpm package release&gt; : rpm package release

Returns the minimum value from a list of &amp;lt;rpm package release&amp;gt; types.

# rpm package release &lt;rpm package release&gt; : rpm package release

Iterates through the RPM package release objects.

# unique value of &lt;rpm package release&gt; : rpm package release with multiplicity

Returns the unique values of a given list of &amp;lt;rpm package release&amp;gt; types, removing duplicates and sorting by value.

# &lt;rpm package release&gt; as rpm package release : rpm package release

No documentation exists.

# &lt;rpm package release&gt; as string : string

Casts an RPM Package release object as a string type.

# &lt;rpm package release&gt; &lt; &lt;rpm package release&gt; : boolean

No documentation exists.

# &lt;rpm package release&gt; &lt;= &lt;rpm package release&gt; : boolean

No documentation exists.

# &lt;rpm package release&gt; = &lt;rpm package release&gt; : boolean

No documentation exists.
