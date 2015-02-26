# debian package version

For Tivoli inspectors, a Debian package is considered to include both the package and the version. This allows the inspectors to home in on specific versioned packages and not just the package itself, which may have numerous versions. These version inspectors return just the version(s) of a given Debian package. A version is composed of three parts: an epoch, an upstream_version and a debian_revision.

# debian package version <debian package version>

A reflexive typing of the specified debian package version.

# epoch of <debian package version>

Returns the epoch component of the specified debian package version. This is primarily used to correct for mistaken version numbers.

# extrema of <debian package version>

Returns the minimum and maximum extreme values of the given list of &lt;debian package version&gt; types.

# maximum of <debian package version>

Returns the maximum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

# minimum of <debian package version>

Returns the minimum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

# revision of <debian package version>

Returns the Debian revision from the specified package version.

# unique value of <debian package version>

Returns the unique values and counts of a given list of &lt;debian package version&gt; types, removing duplicates and sorting by value.

# upstream of <debian package version>

Returns the Debian package upstream_version from the specified Debian package version.

# <debian package version> as debian package version

Reflexive cast for completeness.

# <debian package version> as string

Converts a Debian package version (including epoch, upstream_version and revision) into a string.
