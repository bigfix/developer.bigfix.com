---
title: wizards
---

## bes wizard with multiplicity

The &lt;bes wizard with multiplicity&gt; inspectors deal with arrays of BES Wizards, allowing you to extract unique properties and count them. 

#### multiplicity of &lt;bes wizard with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes wizard&gt; types.

## bes wizard variable

The &lt;bes wizard variable&gt; objects are Console-only inspectors that return a list of the available BES Wizard variables.

#### wizard of &lt;bes wizard variable&gt; : bes wizard

Returns the &lt;bes wizard&gt; object to which the specified variable belongs. You can use &quot;dashboard id of wizard of &lt;bes wizard variable&gt;&quot; to get the correct dashboard id to use with the Store/DeleteVariable script functions (private variables are CONSOLE only).

#### value of &lt;bes wizard variable&gt; : string

Returns the value of the given BES Wizard variable.

#### private flag of &lt;bes wizard variable&gt; : boolean

Returns the private flag of the given &lt;bes wizard variable&gt; (private vars are CONSOLE only).

#### name of &lt;bes wizard variable&gt; : string

Returns the name of the specified Wizard variable.

## bes wizard set

The &lt;bes wizard set&gt; inspectors iterate over the BES Wizards and return a set of such wizards.

#### union of &lt;bes wizard set&gt; : bes wizard set

Returns the union (as a set) derived from the specified set of BES Wizards.

#### size of &lt;bes wizard set&gt; : integer

Returns the number of unique BES Wizards in the specified set.

#### intersection of &lt;bes wizard set&gt; : bes wizard set

Returns the intersection of multiple BES Wizard sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes wizard set&gt; : bes wizard

Returns the BES Wizards that constitute the elements of the specified set.

## bes wizard

The &lt;bes wizard&gt; objects are Console-only inspectors that return a list of the available BES Wizards.

#### variable of &lt;bes wizard&gt; : bes wizard variable

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each variable.

#### url of &lt;bes wizard&gt; : string

Returns the URL of the specified Wizard. For ordinary Wizards, this is of the form &quot;siteid:&lt;id&gt;,&lt;filename&gt;&quot;, but for Wizards that were added using the &quot;Debug-&gt;Load Wizard...&quot; dialog this is of the form &quot;file:///&lt;fullpath&gt;&quot;.

#### unique value of &lt;bes wizard&gt; : bes wizard with multiplicity

Returns the unique values and counts of the specified BES Wizards.

#### site of &lt;bes wizard&gt; : bes site

Returns the site hosting the specified BES Wizard.

#### shared variable of &lt;bes wizard&gt; : bes wizard variable

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each shared variable.

#### shared variable &lt;string&gt; of &lt;bes wizard&gt; : string

Returns a string containing the value of the named public or shared variable for the given BES Wizard.

#### set of &lt;bes wizard&gt; : bes wizard set

Returns a set generated from the iterated list of BigFix Wizards. This can be subjected to arithmetic set operations such as union and intersection.

#### requires authoring flag of &lt;bes wizard&gt; : boolean

Returns TRUE if access to the specified Wizard requires that the user have the &#39;Authoring&#39; bit set in their credentials.

#### private variable of &lt;bes wizard&gt; : bes wizard variable

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each private variable. Private variables are Console-only.

#### private variable &lt;string&gt; of &lt;bes wizard&gt; : string

Returns a string containing the value of the named private variable for the given BES Wizard.

#### pre60 flag of &lt;bes wizard&gt; : boolean

Returns TRUE if this wizard is an &quot;old&quot; (prior to version 6.0) style of Wizard.

#### navbar name of &lt;bes wizard&gt; : string

Returns the name of the specified BES Wizard as listed in the Navigation Bar.

#### name of &lt;bes wizard&gt; : string

Returns the name of the specified BES Wizard.Note: This is a Console-only inspector.

#### menu path of &lt;bes wizard&gt; : string

Returns the path of the menu containing the menu item that launches the specified Wizard.

#### link of &lt;bes wizard&gt; : html

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified Wizard.Note: This is a Console-only inspector.

#### link href of &lt;bes wizard&gt; : string

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes wizard&gt;). Notice that link href returns a normal string, not an HTML string.Note: This is a Console-only inspector.

#### link &lt;string&gt; of &lt;bes wizard&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

#### link &lt;html&gt; of &lt;bes wizard&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

#### document flag of &lt;bes wizard&gt; : boolean

Returns TRUE if the specified Wizard launches in an MDI document window.

#### display name of &lt;bes wizard&gt; : string

Returns the name of the specified BES Wizard as translated into the current language.

#### dialog flag of &lt;bes wizard&gt; : boolean

Returns TRUE if the specified Wizard launches in a dialog box.

#### default page name of &lt;bes wizard&gt; : string

Returns the name of the first page to display when launching the specified Wizard.

#### database name of &lt;bes wizard&gt; : string

Returns the name (as a string) of the database containing the specified BES Wizard.

#### database id of &lt;bes wizard&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Wizard resides.

#### dashboard id of &lt;bes wizard&gt; : string

Returns an ID that can be used by Dashboards/Wizards to unambiguously identify stored variables.

#### charset of &lt;bes wizard&gt; : string

Returns the charset that should be used when displaying the specified Wizard.

