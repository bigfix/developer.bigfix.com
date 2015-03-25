# type: object repository

No documentation exists.

# fileset &lt;string&gt; of &lt;object repository&gt; : fileset

Returns all filesets exactly matching the string in the format &amp;quot;lpp_name ver.rel.mod.fix&amp;quot;.

# fileset matching &lt;string&gt; of &lt;object repository&gt; : fileset

Returns all filesets matching the supplied ODM query string.

# fileset of &lt;object repository&gt; : fileset

Returns all filesets. This may include multiple versions with the same LPP name.

# fileset with name &lt;string&gt; of &lt;object repository&gt; : fileset

Returns all filesets whose LPP name exactly matches the string.

# latest fileset &lt;string&gt; of &lt;object repository&gt; : fileset

Returns the fileset whose LPP name exactly matches the string and has the highest version record.

# product &lt;string&gt; of &lt;object repository&gt; : product

Returns the product whose LPP name exactly matches the string.

# product of &lt;object repository&gt; : product

Returns all products. Each product may contain multiple filesets of differing versions.
