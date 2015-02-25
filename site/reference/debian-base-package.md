# debian base package

For Tivoli inspectors, a Debian package is considered to include both the package and the version. This allows the inspectors to home in on specific versioned packages and not just the package itself, which may have numerous versions. The base package inspectors help to tease these two aspects apart, stripping the version info and returning a list of the packages by name only.

# currently installed of [debian base package]

Returns `True` if the specified Debian base package is currently installed.

# installed version of [debian base package]

Returns the currently installed debianpkg version of the specified Debian base package.

# name of [debian base package]

Returns the name of the specified debian base package as a string.

# pkg version of [debian base package]

Returns a Debian pkg version from the specified Debian base package.

# [debian base package] as string

Converts a Debian base package into a string.
