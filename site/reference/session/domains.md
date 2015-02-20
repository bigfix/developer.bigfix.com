---
title: domains
---

## bes domain with multiplicity

The &lt;bes domain with multiplicity&gt; inspectors deal with sets of BES Domains, allowing you to extract unique domains and count them.

#### multiplicity of &lt;bes domain with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes domain&gt; types.

## bes domain set

The &lt;bes domain set&gt; inspectors return the current collection of BES Domains as a set, which can be manipulated by intersection, union, and more.

#### union of &lt;bes domain set&gt; : bes domain set

Produces a new set of BES domains containing the union of the specified sets.

#### size of &lt;bes domain set&gt; : integer

Returns the number of unique elements in the specified set of BES domains.

#### intersection of &lt;bes domain set&gt; : bes domain set

Returns the intersection of multiple BES domain sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes domain set&gt; : bes domain

Returns the unique elements of the specified &lt;bes domain set&gt;, removing duplicates and sorting by value.

## bes domain

BES Domains are collections of sites that constitute a product, such as Patch Management. In the BES Console, domains are represented as the high-level buttons on the left side of the screen. Listing the domains for the Console yields all the currently loaded domains. In Web Reports, only those domains with at least one visible report are listed.

#### unique value of &lt;bes domain&gt; : bes domain with multiplicity

Returns the unique values of a given list of &lt;bes domain&gt; types, removing duplicates and sorting by value.

#### set of &lt;bes domain&gt; : bes domain set

Returns a set composed of the specified list of BES domains.

#### name of &lt;bes domain&gt; : string

The untranslated (typically English) title of the specified BES Domain.

#### link of &lt;bes domain&gt; : html

Returns a hyperlink that will navigate to the specified BES Domain when clicked.

#### link href of &lt;bes domain&gt; : string

Returns a hyperlink target that will navigate to the specified BES Domain.

#### link &lt;string&gt; of &lt;bes domain&gt; : html

Returns an HTML snippet that will navigate to the specified BES Domain, using the string as the link text.

#### link &lt;html&gt; of &lt;bes domain&gt; : html

Returns an HTML snippet that will navigate to the specified BES Domain, using the html as the link body.

#### id of &lt;bes domain&gt; : string

Returns a string containing the four letter ID of the specified BES domain.

#### filter set of &lt;bes domain&gt; : bes filter set

Returns all the custom filters (as a set) that have been created in the specified BES domain.

#### filter of &lt;bes domain&gt; : bes filter

Returns all the custom filters that have been created in the specified BES domain.

#### display name of &lt;bes domain&gt; : string

Returns the name of the specified BES Domain, as translated into the target language. If you want to get the Japanese name of the specified domain, use this inspector instead of the &#39;name&#39; inspector.

#### custom site set of &lt;bes domain&gt; : bes site set

Returns all the custom sites (as a set) that have been created in the specified BES domain.

#### custom site of &lt;bes domain&gt; : bes site

Returns all the custom sites that have been created in the specified BES domain.

#### custom fixlet set of &lt;bes domain&gt; : bes fixlet set

Returns all custom fixlets (as a set) that have been created in the specified BES domain.

#### custom fixlet of &lt;bes domain&gt; : bes fixlet

Returns all custom fixlets that have been created in the specified BES domain.

#### computer group set of &lt;bes domain&gt; : bes computer group set

Returns the computer groups associated with the specified BES Domain as a set.

#### computer group of &lt;bes domain&gt; : bes computer group

Returns the computer groups associated with the specified BES Domain.

#### action set of &lt;bes domain&gt; : bes action set

Returns all the Actions (as a set) that have been created in the specified BES Domain.

#### action of &lt;bes domain&gt; : bes action

Returns all the Actions that have been created in the specified BES Domain.

