# object_repository

A database corresponding to installable software products on AIX computers.

# fileset matching [string] of [object_repository]

Returns the fileset(s) matching the specified string from within the object repository.

# product [string] of [object_repository]

Returns the named product from the object repository.Example: product &quot;BESAgent&quot; of object repository as string - Returns the full name of the product, such as &quot;BESAgent 4.0.3.7&quot;.

# product of [object_repository]

Returns a list of the products in the object repository.Example: products whose (name of it contains &quot;bos&quot;) of object repository - Returns a list of the software products that have &quot;bos&quot; in their name.
