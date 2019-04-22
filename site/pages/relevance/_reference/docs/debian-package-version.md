# type: debian package version

The version string of a Debian package, as displayed by the `dpkg -l` command, follows this format: ``[epoch:]upstream_version[-debian_revision]`.

For example, the following is a valid Debian package version string: `1:9.10.3.dfsg.P4-12.3+deb9u4`.

It is composed of:
- `1` - The epoch version
- `:` - Separator
- `9.10.3.dfsg.P4` - The upstream version
- `-` - Separator 
- `12.3+deb9u4`- The revision version

Only the `upstream_version` is required, and the other parts are optional. That means `1.0.1` is also a valid Debian package version string, composed only of the `upstream_version` part.

The inspector `debian package version` returns the whole version string: `[epoch:]upstream_version[-debian_revision]`.

The name structure of Debian package versions is [documented here](https://www.debian.org/doc/debian-policy/ch-controlfields.html#version).

# debian package version &lt;debian package version&gt; : debian package version

A reflexive typing of the specified debian package version.

# epoch of &lt;debian package version&gt; : debian package version epoch

Returns the epoch component of the specified debian package version. This is primarily used to correct for mistaken version numbers.

# extrema of &lt;debian package version&gt; : ( debian package version, debian package version )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version&gt; types.

# maximum of &lt;debian package version&gt; : debian package version

Returns the maximum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

# minimum of &lt;debian package version&gt; : debian package version

Returns the minimum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

# revision of &lt;debian package version&gt; : debian package version revision

Returns the Debian revision from the specified package version.

# unique value of &lt;debian package version&gt; : debian package version with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version&gt; types, removing duplicates and sorting by value.

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
