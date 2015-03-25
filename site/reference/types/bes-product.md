# type: bes product

A BigFix license can include more than one product. Each product has an expiration date and a maximum seat count for any type of computer, or by non-windows server, windows server, or workstation. Each product also has a name and a list of site urls. For example, a patch management product might include site urls pointing to the individual patch sites.

# client device count of &lt;bes product&gt; : integer

No documentation exists.

# computer count of &lt;bes product&gt; : integer

Returns the number of computers allowed under the license terms of the specified BES product.

# eula accepted of &lt;bes product&gt; : boolean

No documentation exists.

# expiration date of &lt;bes product&gt; : date

Returns the expiration date for the specified bes product.

# legacy of &lt;bes product&gt; : boolean

Returns `True` if license is of Legacy type

# mvs count of &lt;bes product&gt; : integer

No documentation exists.

# name of &lt;bes product&gt; : string

Returns the name of the specified licensed BES product.

# non windows server count of &lt;bes product&gt; : integer

Returns the number of non-Windows servers included in the license for the specified BES Product.

# perpetual maintenance of &lt;bes product&gt; : boolean

Returns `True` if license is of Perpetual Maintenance type

# perpetual of &lt;bes product&gt; : boolean

Returns `True` if license is of Perpetual type

# rvu count of &lt;bes product&gt; : integer

No documentation exists.

# site url of &lt;bes product&gt; : string

Returns a list of the URLs associated with the specified BES product.

# term of &lt;bes product&gt; : boolean

Returns `True` if license is of Term type

# windows server count of &lt;bes product&gt; : integer

Returns the number of Windows Servers licensed for the specified product.

# workstation count of &lt;bes product&gt; : integer

Returns the number of workstations licensed for the specified product.
