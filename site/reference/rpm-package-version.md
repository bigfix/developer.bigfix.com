# rpm package version

The &lt;rpm package version&gt; inspectors disclose properties of the RPM package version record inspector. They are collected from the &#39;Version&#39; component of the Epoch, Version and Release fields associated with an RPM package. The behavior of this inspector differs from a string, because they are sorted according to RPM rules defined by the rpmvercmp() function of the RPM library. Don&#39;t create an &lt;rpm package release&gt; inspector with embedded &#39;-&#39; or whitespace characters. These characters are disallowed in RPM, and will cause the statement to fail. Note: Requires the presence of the RPM library and librpminfo (an open source library created by BigFix containing modified RPM library code) on the client machine. librpminfo is installed on the client as part of the normal BES client RPM installation procedure.

# extrema of [rpm package version]

Returns the minimum and maximum extreme values of the given list of RPM package versions.

# maximum of [rpm package version]

Returns the maximum value from a list of &lt;rpm package version&gt; types.

# minimum of [rpm package version]

Returns the minimum value from a list of &lt;rpm package version&gt; types.

# rpm package version [rpm package version]

Iterates through the RPM package version objects.

# unique value of [rpm package version]

Returns the unique values of a given list of &lt;rpm package version&gt; types, removing duplicates and sorting by value.

# [rpm package version] as rpm package version

No documentation exists.

# [rpm package version] as string

Casts an RPM package version as a string type.
