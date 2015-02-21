---
title: sites
---

{% type bes site with multiplicity%}

The &lt;bes site with multiplicity&gt; inspectors deal with arrays of BES sites, allowing you to extract unique properties and count them. 

{% property multiplicity of <bes site with multiplicity> %}

This unique values inspector returns the number of times each object occurrs in the original set of objects.

{% type bes site set%}

The &lt;bes site set&gt; inspectors iterate over the BES sites and return a set of such sites.

{% property union of <bes site set> %}

Returns the union (as a set) derived from the specified set of BES Sites.

{% property size of <bes site set> %}

Returns the number of unique BES Sites in the specified set.

{% property intersection of <bes site set> %}

Returns the intersection set derived from the specified set of BES Sites.

{% property element of <bes site set> %}

Returns the elements of the specified set of BES sites.

{% type bes site%}

The site inspectors return the names and IDs of the specified site objects. As of BES 7.0, the BES custom site type has been merged with BES site, which now represents all supported types, including external sites, master action sites, operator sites, and custom sites. All properties of BES custom site are now accessible via BES site. As a compatibility measure, BES sites still returns only external and master action sites. 

{% property writer set of <bes site> %}

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.

{% property writer of <bes site> %}

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

{% property wizard set of <bes site> %}

Returns the Wizards (as a set) associated with the specified BES site.

{% property wizard of <bes site> %}

Returns the Wizards associated with the specified BES site.

{% property version of <bes site> %}

Returns the version of an external site. Does not apply to custom sites.

{% property url of <bes site> %}

Returns the gather URL for a given BES site.  For example, the gather URL for BES Support is http://sync.bigfix.com/cgi-bin/bfgather/bessupport.

{% property unique value of <bes site> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes site&gt; types.

{% property tag of <bes site> %}

The site tag is used as an identifier for sites and is used to build the site&#39;s URL.

{% property subscription mode of <bes site> %}

Returns the subscription mode for custom sites and external sites. The subscription mode is one of the following:All: all computers are subscribedNone: no computers are subscribedAdHoc: computers are subscribed via ad-hoc custom site subscription actionsCustom: computers are subscribed via a list of conditions.

{% property subscribed computer set of <bes site> %}

Returns the list of computers that are subscribed to the specified BES site. The list is formatted as a mathematical set for easier manipulation.

{% property subscribed computer of <bes site> %}

Returns the list of computers that are subscribed to the specified BES site.

{% property subscribed <bes computer> of <bes site> %}

Returns TRUE if the given computer is subscribed to the given BES site.

{% property set of <bes site> %}

Returns a set generated from the iterated list of BES Sites. This can be subjected to arithmetic set operations such as union and intersection.

{% property reader set of <bes site> %}

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

{% property reader of <bes site> %}

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

{% property owner set of <bes site> %}

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

{% property owner of <bes site> %}

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

{% property owner flag <bes user> of <bes site> %}

This inspector is deprecated as of Version 7.0. Instead use &quot;exists owner of &lt;bes site&gt; whose (it = &lt;bes user&gt;)&quot;.

{% property operator site flag of <bes site> %}

Returns TRUE if and only if the specified site is an operator site.

{% property name of <bes site> %}

Returns the name of the specified BES site (undecorated).

{% property master site flag of <bes site> %}

Returns TRUE if and only if the specified site is a master site.

{% property id of <bes site> %}

Returns the numeric ID unique to the specified BES site.

{% property globally readable flag of <bes site> %}

The value of the globally readable flag depends on the type of site:External sites: True if and only if the site has been marked as readable by all users.Master sites: True.Operator sites: False. Custom sites: True if and only if the site has been marked as readable by all users.

{% property fixlet set of <bes site> %}

Returns the set of Fixlets that are associated with the specified BES Site.

{% property fixlet of <bes site> %}

Returns a list all of the Fixlet objects in the given BES site.

{% property fixlet <integer> of <bes site> %}

Returns the Fixlet with the specified ID from the given BES site.

{% property external site flag of <bes site> %}

Returns TRUE if and only if the specified site is an external site.

{% property explicit writer set of <bes site> %}

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.

{% property explicit writer of <bes site> %}

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

{% property explicit reader set of <bes site> %}

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

{% property explicit reader of <bes site> %}

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

{% property explicit owner set of <bes site> %}

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

{% property explicit owner of <bes site> %}

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

{% property domain set of <bes site> %}

Returns domains (as a set) related to the specified BES site.

{% property domain of <bes site> %}

A domain is attached to a BES site when one is created. This inspector returns the domain associated with the specified site.

{% property display name of <bes site> %}

Beginning with version 7.1, a custom site can specify a display name that&#39;s different from the site name in the masthead. This inspector returns the display name; for the masthead name, use name of &lt;bes site&gt;.

{% property description of <bes site> %}

For a custom site, this is the description of the site that was specified by the creator. For External, Master or Operator sites, the description does not exist.

{% property custom site flag of <bes site> %}

Returns TRUE if and only if the specified site is a custom site.

{% property creator of <bes site> %}

Returns the &lt;bes user&gt; who created the specified custom site. Does not exist for External, Master or Operator sites.

{% property creation date of <bes site> %}

Depending on the type of the BES site, this inspector returns the creation date:External and Master sites: Does not exist (added in version 7.0). Operator sites: The &lt;moment&gt; when the operator was created (added in version 7.0). Custom sites: The &lt;moment&gt; when the site was created.

{% property site level relevance of <bes site> %}

No documentation exists for this property.

{% property site file set of <bes site> %}

No documentation exists for this property.

{% property site file of <bes site> %}

No documentation exists for this property.

{% property operator of <bes site> %}

No documentation exists for this property.

{% property action set of <bes site> %}

No documentation exists for this property.

{% property action of <bes site> %}

No documentation exists for this property.

