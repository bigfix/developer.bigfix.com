# type: object_repository

A database corresponding to installable software products on AIX computers.

# fileset matching &lt;string&gt; of &lt;object_repository&gt; : fileset

Returns the fileset(s) matching the specified string from within the object repository.

# product &lt;string&gt; of &lt;object_repository&gt; : product

Returns the named product from the object repository.Example: product "BESAgent" of object repository as string - Returns the full name of the product, such as "BESAgent 4.0.3.7".

# product of &lt;object_repository&gt; : product

Returns a list of the products in the object repository.Example: products whose (name of it contains "bos") of object repository - Returns a list of the software products that have "bos" in their name.
