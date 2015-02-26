# bes wizard

The &lt;bes wizard&gt; objects are Console-only inspectors that return a list of the available BES Wizards.

# charset of <bes wizard>

Returns the charset that should be used when displaying the specified Wizard.

# dashboard id of <bes wizard>

Returns an ID that can be used by Dashboards/Wizards to unambiguously identify stored variables.

# database id of <bes wizard>

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Wizard resides.

# database name of <bes wizard>

Returns the name (as a string) of the database containing the specified BES Wizard.

# default page name of <bes wizard>

Returns the name of the first page to display when launching the specified Wizard.

# dialog flag of <bes wizard>

Returns `True` if the specified Wizard launches in a dialog box.

# display name of <bes wizard>

Returns the name of the specified BES Wizard as translated into the current language.

# document flag of <bes wizard>

Returns `True` if the specified Wizard launches in an MDI document window.

# link <html> of <bes wizard>

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

# link <string> of <bes wizard>

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

# link href of <bes wizard>

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes wizard&gt;). Notice that link href returns a normal string, not an HTML string.Note: This is a Console-only inspector.

# link of <bes wizard>

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified Wizard.Note: This is a Console-only inspector.

# menu path of <bes wizard>

Returns the path of the menu containing the menu item that launches the specified Wizard.

# name of <bes wizard>

Returns the name of the specified BES Wizard.Note: This is a Console-only inspector.

# navbar name of <bes wizard>

Returns the name of the specified BES Wizard as listed in the Navigation Bar.

# pre60 flag of <bes wizard>

Returns `True` if this wizard is an &quot;old&quot; (prior to version 6.0) style of Wizard.

# private variable <string> of <bes wizard>

Returns a string containing the value of the named private variable for the given BES Wizard.

# private variable of <bes wizard>

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each private variable. Private variables are Console-only.

# requires authoring flag of <bes wizard>

Returns `True` if access to the specified Wizard requires that the user have the &#39;Authoring&#39; bit set in their credentials.

# set of <bes wizard>

Returns a set generated from the iterated list of BigFix Wizards. This can be subjected to arithmetic set operations such as union and intersection.

# shared variable <string> of <bes wizard>

Returns a string containing the value of the named public or shared variable for the given BES Wizard.

# shared variable of <bes wizard>

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each shared variable.

# site of <bes wizard>

Returns the site hosting the specified BES Wizard.

# unique value of <bes wizard>

Returns the unique values and counts of the specified BES Wizards.

# url of <bes wizard>

Returns the URL of the specified Wizard. For ordinary Wizards, this is of the form &quot;siteid:&lt;id&gt;,&lt;filename&gt;&quot;, but for Wizards that were added using the &quot;Debug-&gt;Load Wizard...&quot; dialog this is of the form &quot;file:///&lt;fullpath&gt;&quot;.

# variable of <bes wizard>

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each variable.
