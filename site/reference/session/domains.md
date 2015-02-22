---
title: domains
---

{% type bes domain %}

BES Domains are collections of sites that constitute a product, such as Patch Management. In the BES Console, domains are represented as the high-level buttons on the left side of the screen. Listing the domains for the Console yields all the currently loaded domains. In Web Reports, only those domains with at least one visible report are listed.

#### Properties of bes domain

{% property action of <bes domain> %}

Returns all the Actions that have been created in the specified BES Domain.

{% property action set of <bes domain> %}

Returns all the Actions (as a set) that have been created in the specified BES Domain.

{% property computer group of <bes domain> %}

Returns the computer groups associated with the specified BES Domain.

{% property computer group set of <bes domain> %}

Returns the computer groups associated with the specified BES Domain as a set.

{% property custom fixlet of <bes domain> %}

Returns all custom fixlets that have been created in the specified BES domain.

{% property custom fixlet set of <bes domain> %}

Returns all custom fixlets (as a set) that have been created in the specified BES domain.

{% property custom site of <bes domain> %}

Returns all the custom sites that have been created in the specified BES domain.

{% property custom site set of <bes domain> %}

Returns all the custom sites (as a set) that have been created in the specified BES domain.

{% property display name of <bes domain> %}

Returns the name of the specified BES Domain, as translated into the target language. If you want to get the Japanese name of the specified domain, use this inspector instead of the &#39;name&#39; inspector.

{% property filter of <bes domain> %}

Returns all the custom filters that have been created in the specified BES domain.

{% property filter set of <bes domain> %}

Returns all the custom filters (as a set) that have been created in the specified BES domain.

{% property id of <bes domain> %}

Returns a string containing the four letter ID of the specified BES domain.

{% property link <html> of <bes domain> %}

Returns an HTML snippet that will navigate to the specified BES Domain, using the html as the link body.

{% property link <string> of <bes domain> %}

Returns an HTML snippet that will navigate to the specified BES Domain, using the string as the link text.

{% property link href of <bes domain> %}

Returns a hyperlink target that will navigate to the specified BES Domain.

{% property link of <bes domain> %}

Returns a hyperlink that will navigate to the specified BES Domain when clicked.

{% property name of <bes domain> %}

The untranslated (typically English) title of the specified BES Domain.

{% property set of <bes domain> %}

Returns a set composed of the specified list of BES domains.

{% property unique value of <bes domain> %}

Returns the unique values of a given list of &lt;bes domain&gt; types, removing duplicates and sorting by value.

{% type bes domain set %}

The &lt;bes domain set&gt; inspectors return the current collection of BES Domains as a set, which can be manipulated by intersection, union, and more.

#### Properties of bes domain set

{% property element of <bes domain set> %}

Returns the unique elements of the specified &lt;bes domain set&gt;, removing duplicates and sorting by value.

{% property intersection of <bes domain set> %}

Returns the intersection of multiple BES domain sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes domain set> %}

Returns the number of unique elements in the specified set of BES domains.

{% property union of <bes domain set> %}

Produces a new set of BES domains containing the union of the specified sets.

{% type bes domain with multiplicity %}

The &lt;bes domain with multiplicity&gt; inspectors deal with sets of BES Domains, allowing you to extract unique domains and count them.

#### Properties of bes domain with multiplicity

{% property multiplicity of <bes domain with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes domain&gt; types.

