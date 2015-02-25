# debianpkg dependency

A package may depend on the previous installation of other software packages. The &lt;debianpkg dependency&gt; inspectors detail those dependencies. A Debian package may replace another package, conflict with it or depend on it. For more information, see the Debian.org site.

# compare_op of [debianpkg dependency]

Returns a string corresponding to the comparison operator of the specified Debian Pkg dependency.

# critical of [debianpkg dependency]

Returns `True` if the specified Debian Pkg dependency is critical.

# type of [debianpkg dependency]

Returns a string corresponding to the relationship this package has with other Debian packages. This string might be one of the following:DependsReplacesConflictsPreDependsRecommends.

# version of [debianpkg dependency]

Returns the Debian package version from the given debianpkg dependency.

# [debianpkg dependency] as string

Converts a Debian Pkg dependency into a string.
