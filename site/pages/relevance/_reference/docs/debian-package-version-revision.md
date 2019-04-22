# type: debian package version revision

The version string of a Debian package, as displayed by the `dpkg -l` command, follows this format: `[epoch:]upstream_version[-debian_revision]`. Only the `upstream_version` part is required, and the other parts are optional.
See the description of the [debian-package-version](https://developer.bigfix.com/relevance/reference/debian-package-version.html) inspector for more information.

The inspector `debian package version revision` returns the `debian_revision` part of the string, or an empty string, if that part is absent.

The name structure of Debian package versions is [documented here](https://www.debian.org/doc/debian-policy/ch-controlfields.html#version).

# debian package version revision &lt;debian package version revision&gt; : debian package version revision

A reflexive typing of the specified debian package version revision.

# extrema of &lt;debian package version revision&gt; : ( debian package version revision, debian package version revision )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version revision&gt; types.

# maximum of &lt;debian package version revision&gt; : debian package version revision

Returns the maximum value from the specified list of Debian package version revisions.

# minimum of &lt;debian package version revision&gt; : debian package version revision

Returns the minimum value from the specified list of Debian package version revisions.

# unique value of &lt;debian package version revision&gt; : debian package version revision with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version revision&gt; types, removing duplicates and sorting by value.

# &lt;debian package version revision&gt; as debian package version revision : debian package version revision

Reflexive cast for completeness.

# &lt;debian package version revision&gt; as string : string

Converts a Debian package version_revision into a string.

# &lt;debian package version revision&gt; &lt; &lt;debian package version revision&gt; : boolean

No documentation exists.

# &lt;debian package version revision&gt; &lt;= &lt;debian package version revision&gt; : boolean

No documentation exists.

# &lt;debian package version revision&gt; = &lt;debian package version revision&gt; : boolean

No documentation exists.
