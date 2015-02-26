# patch

An object that exposes the properties of a Solaris patch, each of which has a base ID followed by a revision number, such as 123456-12. Here the base is 123456, which identifies the patch, and 12, which represents the revision of this particular patch.

# base of <patch>

Returns the base number of the given patch, which is a unique identifier for the file, as a string.

# greatest revision of <patch>

Returns the highest revision of the patch.Example: greatest revision of patch &quot;112233&quot; of pkgdb = &quot;12&quot; - Returns `True` if the highest revision of the specified patch is equal to 12.

# least revision of <patch>

Returns the lowest revision of the patch.Example: least revision of patch &quot;112233&quot; of pkgdb = &quot;05&quot; - Returns `True` if the lowest revision of the specified patch is equal to 05.

# revision <string> of <patch>

Returns the specified revision string from the given patch. Typically used for existence tests.Example: exists revision &quot;02&quot; of patch &quot;123456&quot; of pkginfo &quot;SUNWrdm&quot; of pkgdb  - Returns `True` if the specified revision of the given patch in the given pkginfo exists in the package database.Example: exists patch whose (revision of it &lt; &quot;3&quot;) of pkgdb - Returns `True` if there is a patch in the package database with a revision number less than 3.

# revision of <patch>

Returns an additional revision number which modifies the base of the patch.
