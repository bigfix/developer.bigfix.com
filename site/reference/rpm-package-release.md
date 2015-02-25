# rpm package release

The &lt;rpm package release&gt; inspectors disclose properties of the RPM package version record inspector. They are collected from the &#39;Release&#39; component of the Epoch, Version and Release fields associated with an RPM package. The behavior of this inspector differs from a string, because they are sorted according to RPM rules defined by the rpmvercmp() function of the RPM library. Don&#39;t create an &lt;rpm package release&gt; inspector with embedded &#39;-&#39; or whitespace characters. These characters are disallowed in RPM, and will cause the statement to fail. Note: Requires the presence of the RPM library and librpminfo (an open source library created by BigFix containing modified RPM library code) on the client machine. librpminfo is installed on the client as part of the normal BES client RPM installation procedure.

# extrema of [rpm package release]

Returns the minimum and maximum extreme values of the given list of RPM package releases.

# maximum of [rpm package release]

Returns the maximum value from a list of &lt;rpm package release&gt; types.

# minimum of [rpm package release]

Returns the minimum value from a list of &lt;rpm package release&gt; types.

# rpm package release [rpm package release]

Iterates through the RPM package release objects.

# unique value of [rpm package release]

Returns the unique values of a given list of &lt;rpm package release&gt; types, removing duplicates and sorting by value.

# [rpm package release] as rpm package release

No documentation exists.

# [rpm package release] as string

Casts an RPM Package release object as a string type.
