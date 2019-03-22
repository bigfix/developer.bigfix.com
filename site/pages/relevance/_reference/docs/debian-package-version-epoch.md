# type: debian package version epoch

The version string of a Debian package, as displayed by the `dpkg -l` command, follows this format: `<epoch>:<upstream-version>-<debian.version.revision>`. Only the `<upstream-version>` part is required, and the other parts are optional. See the description of the [debian-package-version](debian-package-version.md) inspector for more information.

The inspector `debian package version epoch` returns the `<epoch>` part of the string or an empty string, if that part is absent. The epoch is an unsigned integer, typically a small number. When it is omitted, it is implied to be zero.

The name structure of Debian packages is [documented here](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_debian_package_file_names). The official Debian documentation refers to `<debian.version.revision>` simply as `<debian.version>`. The extended name is used to distinguish this part of the version string from the full Debian package version string.

The &lt;debian package version epoch&gt; inspectors deal with the &#39;epoch&#39; component of a Debian package version. The epoch allows the package provider to create a fresh start with version numbering schemes.

# debian package version epoch &lt;debian package version epoch&gt; : debian package version epoch

A reflexive typing of the specified debian package version epoch.

# extrema of &lt;debian package version epoch&gt; : ( debian package version epoch, debian package version epoch )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version epoch&gt; types.

# maximum of &lt;debian package version epoch&gt; : debian package version epoch

Returns the maximum value from the specified list of Debian package version epochs.

# minimum of &lt;debian package version epoch&gt; : debian package version epoch

Returns the minimum value from the specified list of Debian package version epochs.

# unique value of &lt;debian package version epoch&gt; : debian package version epoch with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version epoch&gt; types, removing duplicates and sorting by value.

# &lt;debian package version epoch&gt; as debian package version epoch : debian package version epoch

Reflexive cast for completeness.

# &lt;debian package version epoch&gt; as string : string

Converts a Debian package version &#39;epoch&#39; into a string.

# &lt;debian package version epoch&gt; &lt; &lt;debian package version epoch&gt; : boolean

No documentation exists.

# &lt;debian package version epoch&gt; &lt;= &lt;debian package version epoch&gt; : boolean

No documentation exists.

# &lt;debian package version epoch&gt; = &lt;debian package version epoch&gt; : boolean

No documentation exists.
