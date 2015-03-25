# type: debianpkg dependency

A package may depend on the previous installation of other software packages. The &lt;debianpkg dependency&gt; inspectors detail those dependencies. A Debian package may replace another package, conflict with it or depend on it. For more information, see the Debian.org site.

# compare_op of &lt;debianpkg dependency&gt; : string

Returns a string corresponding to the comparison operator of the specified Debian Pkg dependency.

# critical of &lt;debianpkg dependency&gt; : boolean

Returns `True` if the specified Debian Pkg dependency is critical.

# type of &lt;debianpkg dependency&gt; : string

Returns a string corresponding to the relationship this package has with other Debian packages. This string might be one of the following:DependsReplacesConflictsPreDependsRecommends.

# version of &lt;debianpkg dependency&gt; : debian package version

Returns the Debian package version from the given debianpkg dependency.

# &lt;debianpkg dependency&gt; as string : string

Converts a Debian Pkg dependency into a string.
