# type: debian package upstream version

Returns the Debian package upstream version object created parsing the specified string.

The version string of a Debian package, as displayed by the `dpkg -l` command, follows this format: `<epoch>:<upstream-version>-<debian.version.revision>`.
Only the `<upstream-version>` part is required, and the other parts are optional.
See the description of the [debian-package-version](https://developer.bigfix.com/relevance/reference/debian-package-version.html) inspector for more information.

The inspector `debian package upstream version` returns the `<upstream-version>` part of the version string.

**Examples**

```
Q: debian package version upstream "1.10.1"
A: 1.10.1
```

```
Q: debian package version upstream "9.10.3.dfsg.P4"
A: 9.10.3.dfsg.P4
```

The name structure of Debian packages is [documented here](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_debian_package_file_names). The official Debian documentation refers to `<debian.version.revision>` simply as `<debian.version>`. The extended name is used to distinguish this part of the version string from the full Debian package version string.

Objects of type &lt;debian package upstream version&gt; can be created by calling the "debian package version upstream" creation functions. Note that the order of the last two words in the type name (**upstream** version) is reversed in the case of creation function names (version **upstream**).

# debian package version upstream &lt;debian package upstream version&gt; : debian package upstream version

A reflexive typing of the specified debian package upstream version.Note: the version upstream is treated the same as the upstream version.

# extrema of &lt;debian package upstream version&gt; : ( debian package upstream version, debian package upstream version )

Returns the minimum and maximum extreme values of the given list of &lt;debian package upstream version&gt; types.

# maximum of &lt;debian package upstream version&gt; : debian package upstream version

Returns the maximum value from the specified list of Debian package upstream versions.

# minimum of &lt;debian package upstream version&gt; : debian package upstream version

Returns the minimum value from the specified list of Debian package upstream versions.

# unique value of &lt;debian package upstream version&gt; : debian package upstream version with multiplicity

Returns the unique values and counts of a given list of &lt;debian package upstream version&gt; types, removing duplicates and sorting by value.

# &lt;debian package upstream version&gt; as debian package version upstream : debian package upstream version

This is a reflexive casting for the sake of completeness. Note: upstream version is treated the same as version upstream.

# &lt;debian package upstream version&gt; as string : string

Converts a Debian package upstream_version into a string.

# &lt;debian package upstream version&gt; &lt; &lt;debian package upstream version&gt; : boolean

No documentation exists.

# &lt;debian package upstream version&gt; &lt;= &lt;debian package upstream version&gt; : boolean

No documentation exists.

# &lt;debian package upstream version&gt; = &lt;debian package upstream version&gt; : boolean

No documentation exists.
