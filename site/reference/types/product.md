# type: product

The &lt;product&gt; object contains properties (such as vendor and revision) of the associated software product. On AIX, products are installed into an Object Repository.On HPUX products are installed in the Software Depot.

# bundle of &lt;product&gt; : bundle

Returns the bundle to which the product belongs.

# fileset of &lt;product&gt; : fileset

Returns a list of the filesets (installable software packages) in the specified product.

# name of &lt;product&gt; : string

Returns the name of the specified product.

# revision of &lt;product&gt; : string

Version identifier of installed software product.Example: revision of product "OS-Core" of software depot - Returns a string such as "B.11.00".

# tag of &lt;product&gt; : string

Short identifying name of installed software product. Tag is used as identifier in named product accessor.Example: tag of product whose (vendor of it = "BigFix") of software depot - Returns a string such as "BESAgent 4.0.3.7".

# title of &lt;product&gt; : string

Long identifying name of installed software product.Example: title of product "OS-Core" of software depot - Returns a string such as "Core Operating System".

# vendor of &lt;product&gt; : string

Text identifying the vendor of the installed software product.Example: vendor of product "BESAgent" of software depot - Returns a string such as "BigFix".

# &lt;product&gt; as string : string

Brief text string identifying a product including the tag and version.Example: product "BESAgent" of software depot as string - Returns the full name of the product, such as "BESAgent 4.0.3.7".
