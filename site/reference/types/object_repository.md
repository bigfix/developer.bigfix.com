# type: object_repository

A database corresponding to installable software products on AIX computers.

# fileset matching &lt;string&gt; of &lt;object_repository&gt; : fileset

Returns the fileset(s) matching the specified string from within the object repository.

# product &lt;string&gt; of &lt;object_repository&gt; : product

Returns the named product from the object repository.Example: product &amp;quot;BESAgent&amp;quot; of object repository as string - Returns the full name of the product, such as &amp;quot;BESAgent 4.0.3.7&amp;quot;.

# product of &lt;object_repository&gt; : product

Returns a list of the products in the object repository.Example: products whose (name of it contains &amp;quot;bos&amp;quot;) of object repository - Returns a list of the software products that have &amp;quot;bos&amp;quot; in their name.
