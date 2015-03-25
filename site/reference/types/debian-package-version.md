# type: debian package version

For Tivoli inspectors, a Debian package is considered to include both the package and the version. This allows the inspectors to home in on specific versioned packages and not just the package itself, which may have numerous versions. These version inspectors return just the version(s) of a given Debian package. A version is composed of three parts: an epoch, an upstream_version and a debian_revision.

# debian package version &lt;debian package version&gt; : debian package version

A reflexive typing of the specified debian package version.

# epoch of &lt;debian package version&gt; : debian package version epoch

Returns the epoch component of the specified debian package version. This is primarily used to correct for mistaken version numbers.

# extrema of &lt;debian package version&gt; : ( debian package version, debian package version )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version&lt; types.

# maximum of &lt;debian package version&gt; : debian package version

Returns the maximum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

# minimum of &lt;debian package version&gt; : debian package version

Returns the minimum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

# revision of &lt;debian package version&gt; : debian package version revision

Returns the Debian revision from the specified package version.

# unique value of &lt;debian package version&gt; : debian package version with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version&lt; types, removing duplicates and sorting by value.

# upstream of &lt;debian package version&gt; : debian package upstream version

Returns the Debian package upstream_version from the specified Debian package version.

# &lt;debian package version&gt; as debian package version : debian package version

Reflexive cast for completeness.

# &lt;debian package version&gt; as string : string

Converts a Debian package version (including epoch, upstream_version and revision) into a string.

# &lt;debian package version&gt; &lt; &lt;debian package version&gt; : boolean

No documentation exists.

# &lt;debian package version&gt; &lt;= &lt;debian package version&gt; : boolean

No documentation exists.

# &lt;debian package version&gt; = &lt;debian package version&gt; : boolean

No documentation exists.
