# type: debian package version

The version string of a Debian package, as displayed by the `dpkg -l` command, follows this format: `<epoch>:<upstream-version>-<debian.version.revision>`.

For example, the following is a valid Debian package version string: `1:9.10.3.dfsg.P4-12.3+deb9u4`.

It is composed of:
- `1` - The epoch version
- `:` - Separator
- `9.10.3.dfsg.P4` - The upstream version
- `-` - Separator 
- `12.3+deb9u4`- The revision version

Only the `<upstream-version>` is required, and the other parts are optional. The inspector `debian package version` returns the whole version string: `<epoch>:<upstream-version>-<debian.version.revision>`.

The name structure of Debian packages is [documented here](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_debian_package_file_names). The official Debian documentation refers to `<debian.version.revision>` simply as `<debian.version>`. The extended name is used to distinguish this part of the version string from the full Debian package version string.

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
