# type: product

The &amp;lt;product&amp;gt; object contains properties (such as vendor and revision) of the associated software product. On AIX, products are installed into an Object Repository.On HPUX products are installed in the Software Depot.

# bundle of &lt;product&gt; : bundle

Returns the bundle to which the product belongs.

# fileset of &lt;product&gt; : fileset

Returns a list of the filesets (installable software packages) in the specified product.

# name of &lt;product&gt; : string

Returns the name of the specified product.

# revision of &lt;product&gt; : string

Version identifier of installed software product.Example: revision of product &amp;quot;OS-Core&amp;quot; of software depot - Returns a string such as &amp;quot;B.11.00&amp;quot;.

# tag of &lt;product&gt; : string

Short identifying name of installed software product. Tag is used as identifier in named product accessor.Example: tag of product whose (vendor of it = &amp;quot;BigFix&amp;quot;) of software depot - Returns a string such as &amp;quot;BESAgent 4.0.3.7&amp;quot;.

# title of &lt;product&gt; : string

Long identifying name of installed software product.Example: title of product &amp;quot;OS-Core&amp;quot; of software depot - Returns a string such as &amp;quot;Core Operating System&amp;quot;.

# vendor of &lt;product&gt; : string

Text identifying the vendor of the installed software product.Example: vendor of product &amp;quot;BESAgent&amp;quot; of software depot - Returns a string such as &amp;quot;BigFix&amp;quot;.

# &lt;product&gt; as string : string

Brief text string identifying a product including the tag and version.Example: product &amp;quot;BESAgent&amp;quot; of software depot as string - Returns the full name of the product, such as &amp;quot;BESAgent 4.0.3.7&amp;quot;.
