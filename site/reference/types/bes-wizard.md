# type: bes wizard

The &amp;lt;bes wizard&amp;gt; objects are Console-only inspectors that return a list of the available BES Wizards.

# charset of &lt;bes wizard&gt; : string

Returns the charset that should be used when displaying the specified Wizard.

# dashboard id of &lt;bes wizard&gt; : string

Returns an ID that can be used by Dashboards/Wizards to unambiguously identify stored variables.

# database id of &lt;bes wizard&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Wizard resides.

# database name of &lt;bes wizard&gt; : string

Returns the name (as a string) of the database containing the specified BES Wizard.

# default page name of &lt;bes wizard&gt; : string

Returns the name of the first page to display when launching the specified Wizard.

# dialog flag of &lt;bes wizard&gt; : boolean

Returns `True` if the specified Wizard launches in a dialog box.

# display name of &lt;bes wizard&gt; : string

Returns the name of the specified BES Wizard as translated into the current language.

# document flag of &lt;bes wizard&gt; : boolean

Returns `True` if the specified Wizard launches in an MDI document window.

# link &lt;html&gt; of &lt;bes wizard&gt; : html

Returns an HTML string containing an &amp;lt;A&amp;gt; tag including the supplied HTML description that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

# link &lt;string&gt; of &lt;bes wizard&gt; : html

Returns an HTML string containing an &amp;lt;A&amp;gt; tag including the supplied descriptive string that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

# link href of &lt;bes wizard&gt; : string

The link href property does not return an &amp;lt;A&amp;gt; tag but rather returns the value of the href attribute of the &amp;lt;A&amp;gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &amp;lt;bes wizard&amp;gt;). Notice that link href returns a normal string, not an HTML string.Note: This is a Console-only inspector.

# link of &lt;bes wizard&gt; : html

Returns an HTML string containing an &amp;lt;A&amp;gt; tag that when clicked will open the specified Wizard.Note: This is a Console-only inspector.

# menu path of &lt;bes wizard&gt; : string

Returns the path of the menu containing the menu item that launches the specified Wizard.

# name of &lt;bes wizard&gt; : string

Returns the name of the specified BES Wizard.Note: This is a Console-only inspector.

# navbar name of &lt;bes wizard&gt; : string

Returns the name of the specified BES Wizard as listed in the Navigation Bar.

# pre60 flag of &lt;bes wizard&gt; : boolean

Returns `True` if this wizard is an &amp;quot;old&amp;quot; (prior to version 6.0) style of Wizard.

# private variable &lt;string&gt; of &lt;bes wizard&gt; : string

Returns a string containing the value of the named private variable for the given BES Wizard.

# private variable of &lt;bes wizard&gt; : bes wizard variable

Iterates over all the variables for a Wizard, returning a &amp;lt;bes wizard variable&amp;gt; type for each private variable. Private variables are Console-only.

# requires authoring flag of &lt;bes wizard&gt; : boolean

Returns `True` if access to the specified Wizard requires that the user have the &amp;#39;Authoring&amp;#39; bit set in their credentials.

# set of &lt;bes wizard&gt; : bes wizard set

Returns a set generated from the iterated list of BigFix Wizards. This can be subjected to arithmetic set operations such as union and intersection.

# shared variable &lt;string&gt; of &lt;bes wizard&gt; : string

Returns a string containing the value of the named public or shared variable for the given BES Wizard.

# shared variable of &lt;bes wizard&gt; : bes wizard variable

Iterates over all the variables for a Wizard, returning a &amp;lt;bes wizard variable&amp;gt; type for each shared variable.

# site of &lt;bes wizard&gt; : bes site

Returns the site hosting the specified BES Wizard.

# unique value of &lt;bes wizard&gt; : bes wizard with multiplicity

Returns the unique values and counts of the specified BES Wizards.

# url of &lt;bes wizard&gt; : string

Returns the URL of the specified Wizard. For ordinary Wizards, this is of the form &amp;quot;siteid:&amp;lt;id&amp;gt;,&amp;lt;filename&amp;gt;&amp;quot;, but for Wizards that were added using the &amp;quot;Debug-&amp;gt;Load Wizard...&amp;quot; dialog this is of the form &amp;quot;file:///&amp;lt;fullpath&amp;gt;&amp;quot;.

# variable of &lt;bes wizard&gt; : bes wizard variable

Iterates over all the variables for a Wizard, returning a &amp;lt;bes wizard variable&amp;gt; type for each variable.

# &lt;bes wizard&gt; = &lt;bes wizard&gt; : boolean

Returns `True` if the two specified BES Wizards are the same.
