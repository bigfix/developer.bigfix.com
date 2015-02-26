# product

The &lt;product&gt; object contains properties (such as vendor and revision) of the associated software product. On AIX, products are installed into an Object Repository.On HPUX products are installed in the Software Depot.

# bundle of <product>

Returns the bundle to which the product belongs.

# fileset of <product>

Returns a list of the filesets (installable software packages) in the specified product.

# name of <product>

Returns the name of the specified product.

# revision of <product>

Version identifier of installed software product.Example: revision of product &quot;OS-Core&quot; of software depot - Returns a string such as &quot;B.11.00&quot;.

# tag of <product>

Short identifying name of installed software product. Tag is used as identifier in named product accessor.Example: tag of product whose (vendor of it = &quot;BigFix&quot;) of software depot - Returns a string such as &quot;BESAgent 4.0.3.7&quot;.

# title of <product>

Long identifying name of installed software product.Example: title of product &quot;OS-Core&quot; of software depot - Returns a string such as &quot;Core Operating System&quot;.

# vendor of <product>

Text identifying the vendor of the installed software product.Example: vendor of product &quot;BESAgent&quot; of software depot - Returns a string such as &quot;BigFix&quot;.

# <product> as string

Brief text string identifying a product including the tag and version.Example: product &quot;BESAgent&quot; of software depot as string - Returns the full name of the product, such as &quot;BESAgent 4.0.3.7&quot;.
