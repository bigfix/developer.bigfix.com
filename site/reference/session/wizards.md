---
title: wizards
---

{% type bes wizard %}

The &lt;bes wizard&gt; objects are Console-only inspectors that return a list of the available BES Wizards.

#### Properties of bes wizard

{% property charset of <bes wizard> %}

Returns the charset that should be used when displaying the specified Wizard.

{% property dashboard id of <bes wizard> %}

Returns an ID that can be used by Dashboards/Wizards to unambiguously identify stored variables.

{% property database id of <bes wizard> %}

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Wizard resides.

{% property database name of <bes wizard> %}

Returns the name (as a string) of the database containing the specified BES Wizard.

{% property default page name of <bes wizard> %}

Returns the name of the first page to display when launching the specified Wizard.

{% property dialog flag of <bes wizard> %}

Returns TRUE if the specified Wizard launches in a dialog box.

{% property display name of <bes wizard> %}

Returns the name of the specified BES Wizard as translated into the current language.

{% property document flag of <bes wizard> %}

Returns TRUE if the specified Wizard launches in an MDI document window.

{% property link <html> of <bes wizard> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

{% property link <string> of <bes wizard> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified Wizard.Note: This is a Console-only inspector.

{% property link href of <bes wizard> %}

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes wizard&gt;). Notice that link href returns a normal string, not an HTML string.Note: This is a Console-only inspector.

{% property link of <bes wizard> %}

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified Wizard.Note: This is a Console-only inspector.

{% property menu path of <bes wizard> %}

Returns the path of the menu containing the menu item that launches the specified Wizard.

{% property name of <bes wizard> %}

Returns the name of the specified BES Wizard.Note: This is a Console-only inspector.

{% property navbar name of <bes wizard> %}

Returns the name of the specified BES Wizard as listed in the Navigation Bar.

{% property pre60 flag of <bes wizard> %}

Returns TRUE if this wizard is an &quot;old&quot; (prior to version 6.0) style of Wizard.

{% property private variable <string> of <bes wizard> %}

Returns a string containing the value of the named private variable for the given BES Wizard.

{% property private variable of <bes wizard> %}

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each private variable. Private variables are Console-only.

{% property requires authoring flag of <bes wizard> %}

Returns TRUE if access to the specified Wizard requires that the user have the &#39;Authoring&#39; bit set in their credentials.

{% property set of <bes wizard> %}

Returns a set generated from the iterated list of BigFix Wizards. This can be subjected to arithmetic set operations such as union and intersection.

{% property shared variable <string> of <bes wizard> %}

Returns a string containing the value of the named public or shared variable for the given BES Wizard.

{% property shared variable of <bes wizard> %}

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each shared variable.

{% property site of <bes wizard> %}

Returns the site hosting the specified BES Wizard.

{% property unique value of <bes wizard> %}

Returns the unique values and counts of the specified BES Wizards.

{% property url of <bes wizard> %}

Returns the URL of the specified Wizard. For ordinary Wizards, this is of the form &quot;siteid:&lt;id&gt;,&lt;filename&gt;&quot;, but for Wizards that were added using the &quot;Debug-&gt;Load Wizard...&quot; dialog this is of the form &quot;file:///&lt;fullpath&gt;&quot;.

{% property variable of <bes wizard> %}

Iterates over all the variables for a Wizard, returning a &lt;bes wizard variable&gt; type for each variable.

{% type bes wizard set %}

The &lt;bes wizard set&gt; inspectors iterate over the BES Wizards and return a set of such wizards.

#### Properties of bes wizard set

{% property element of <bes wizard set> %}

Returns the BES Wizards that constitute the elements of the specified set.

{% property intersection of <bes wizard set> %}

Returns the intersection of multiple BES Wizard sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes wizard set> %}

Returns the number of unique BES Wizards in the specified set.

{% property union of <bes wizard set> %}

Returns the union (as a set) derived from the specified set of BES Wizards.

{% type bes wizard variable %}

The &lt;bes wizard variable&gt; objects are Console-only inspectors that return a list of the available BES Wizard variables.

#### Properties of bes wizard variable

{% property name of <bes wizard variable> %}

Returns the name of the specified Wizard variable.

{% property private flag of <bes wizard variable> %}

Returns the private flag of the given &lt;bes wizard variable&gt; (private vars are CONSOLE only).

{% property value of <bes wizard variable> %}

Returns the value of the given BES Wizard variable.

{% property wizard of <bes wizard variable> %}

Returns the &lt;bes wizard&gt; object to which the specified variable belongs. You can use &quot;dashboard id of wizard of &lt;bes wizard variable&gt;&quot; to get the correct dashboard id to use with the Store/DeleteVariable script functions (private variables are CONSOLE only).

{% type bes wizard with multiplicity %}

The &lt;bes wizard with multiplicity&gt; inspectors deal with arrays of BES Wizards, allowing you to extract unique properties and count them. 

#### Properties of bes wizard with multiplicity

{% property multiplicity of <bes wizard with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes wizard&gt; types.

