# type: patch

An object that exposes the properties of a Solaris patch, each of which has a base ID followed by a revision number, such as 123456-12. Here the base is 123456, which identifies the patch, and 12, which represents the revision of this particular patch.

# base of &lt;patch&gt; : string

Returns the base number of the given patch, which is a unique identifier for the file, as a string.

# greatest revision of &lt;patch&gt; : string

Returns the highest revision of the patch.Example: greatest revision of patch &amp;quot;112233&amp;quot; of pkgdb = &amp;quot;12&amp;quot; - Returns `True` if the highest revision of the specified patch is equal to 12.

# least revision of &lt;patch&gt; : string

Returns the lowest revision of the patch.Example: least revision of patch &amp;quot;112233&amp;quot; of pkgdb = &amp;quot;05&amp;quot; - Returns `True` if the lowest revision of the specified patch is equal to 05.

# revision &lt;string&gt; of &lt;patch&gt; : string

Returns the specified revision string from the given patch. Typically used for existence tests.Example: exists revision &amp;quot;02&amp;quot; of patch &amp;quot;123456&amp;quot; of pkginfo &amp;quot;SUNWrdm&amp;quot; of pkgdb  - Returns `True` if the specified revision of the given patch in the given pkginfo exists in the package database.Example: exists patch whose (revision of it &amp;lt; &amp;quot;3&amp;quot;) of pkgdb - Returns `True` if there is a patch in the package database with a revision number less than 3.

# revision of &lt;patch&gt; : string

Returns an additional revision number which modifies the base of the patch.
