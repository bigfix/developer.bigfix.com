---
title: sites
---

## bes site with multiplicity

The &lt;bes site with multiplicity&gt; inspectors deal with arrays of BES sites, allowing you to extract unique properties and count them. 

#### multiplicity of &lt;bes site with multiplicity&gt; : integer

This unique values inspector returns the number of times each object occurrs in the original set of objects.

## bes site set

The &lt;bes site set&gt; inspectors iterate over the BES sites and return a set of such sites.

#### union of &lt;bes site set&gt; : bes site set

Returns the union (as a set) derived from the specified set of BES Sites.

#### size of &lt;bes site set&gt; : integer

Returns the number of unique BES Sites in the specified set.

#### intersection of &lt;bes site set&gt; : bes site set

Returns the intersection set derived from the specified set of BES Sites.

#### element of &lt;bes site set&gt; : bes site

Returns the elements of the specified set of BES sites.

## bes site

The site inspectors return the names and IDs of the specified site objects. As of BES 7.0, the BES custom site type has been merged with BES site, which now represents all supported types, including external sites, master action sites, operator sites, and custom sites. All properties of BES custom site are now accessible via BES site. As a compatibility measure, BES sites still returns only external and master action sites. 

#### writer set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.

#### writer of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

#### wizard set of &lt;bes site&gt; : bes wizard set

Returns the Wizards (as a set) associated with the specified BES site.

#### wizard of &lt;bes site&gt; : bes wizard

Returns the Wizards associated with the specified BES site.

#### version of &lt;bes site&gt; : integer

Returns the version of an external site. Does not apply to custom sites.

#### url of &lt;bes site&gt; : string

Returns the gather URL for a given BES site.  For example, the gather URL for BES Support is http://sync.bigfix.com/cgi-bin/bfgather/bessupport.

#### unique value of &lt;bes site&gt; : bes site with multiplicity

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes site&gt; types.

#### tag of &lt;bes site&gt; : string

The site tag is used as an identifier for sites and is used to build the site&#39;s URL.

#### subscription mode of &lt;bes site&gt; : string

Returns the subscription mode for custom sites and external sites. The subscription mode is one of the following:All: all computers are subscribedNone: no computers are subscribedAdHoc: computers are subscribed via ad-hoc custom site subscription actionsCustom: computers are subscribed via a list of conditions.

#### subscribed computer set of &lt;bes site&gt; : bes computer set

Returns the list of computers that are subscribed to the specified BES site. The list is formatted as a mathematical set for easier manipulation.

#### subscribed computer of &lt;bes site&gt; : bes computer

Returns the list of computers that are subscribed to the specified BES site.

#### subscribed &lt;bes computer&gt; of &lt;bes site&gt; : boolean

Returns TRUE if the given computer is subscribed to the given BES site.

#### set of &lt;bes site&gt; : bes site set

Returns a set generated from the iterated list of BES Sites. This can be subjected to arithmetic set operations such as union and intersection.

#### reader set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

#### reader of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

#### owner set of &lt;bes site&gt; : bes user set

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

#### owner of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

#### owner flag &lt;bes user&gt; of &lt;bes site&gt; : boolean

This inspector is deprecated as of Version 7.0. Instead use &quot;exists owner of &lt;bes site&gt; whose (it = &lt;bes user&gt;)&quot;.

#### operator site flag of &lt;bes site&gt; : boolean

Returns TRUE if and only if the specified site is an operator site.

#### name of &lt;bes site&gt; : string

Returns the name of the specified BES site (undecorated).

#### master site flag of &lt;bes site&gt; : boolean

Returns TRUE if and only if the specified site is a master site.

#### id of &lt;bes site&gt; : integer

Returns the numeric ID unique to the specified BES site.

#### globally readable flag of &lt;bes site&gt; : boolean

The value of the globally readable flag depends on the type of site:External sites: True if and only if the site has been marked as readable by all users.Master sites: True.Operator sites: False. Custom sites: True if and only if the site has been marked as readable by all users.

#### fixlet set of &lt;bes site&gt; : bes fixlet set

Returns the set of Fixlets that are associated with the specified BES Site.

#### fixlet of &lt;bes site&gt; : bes fixlet

Returns a list all of the Fixlet objects in the given BES site.

#### fixlet &lt;integer&gt; of &lt;bes site&gt; : bes fixlet

Returns the Fixlet with the specified ID from the given BES site.

#### external site flag of &lt;bes site&gt; : boolean

Returns TRUE if and only if the specified site is an external site.

#### explicit writer set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.

#### explicit writer of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

#### explicit reader set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

#### explicit reader of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

#### explicit owner set of &lt;bes site&gt; : bes user set

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

#### explicit owner of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

#### domain set of &lt;bes site&gt; : bes domain set

Returns domains (as a set) related to the specified BES site.

#### domain of &lt;bes site&gt; : bes domain

A domain is attached to a BES site when one is created. This inspector returns the domain associated with the specified site.

#### display name of &lt;bes site&gt; : string

Beginning with version 7.1, a custom site can specify a display name that&#39;s different from the site name in the masthead. This inspector returns the display name; for the masthead name, use name of &lt;bes site&gt;.

#### description of &lt;bes site&gt; : string

For a custom site, this is the description of the site that was specified by the creator. For External, Master or Operator sites, the description does not exist.

#### custom site flag of &lt;bes site&gt; : boolean

Returns TRUE if and only if the specified site is a custom site.

#### creator of &lt;bes site&gt; : bes user

Returns the &lt;bes user&gt; who created the specified custom site. Does not exist for External, Master or Operator sites.

#### creation date of &lt;bes site&gt; : time

Depending on the type of the BES site, this inspector returns the creation date:External and Master sites: Does not exist (added in version 7.0). Operator sites: The &lt;moment&gt; when the operator was created (added in version 7.0). Custom sites: The &lt;moment&gt; when the site was created.

#### site level relevance of &lt;bes site&gt; : string

No documentation exists for this property.

#### site file set of &lt;bes site&gt; : bes site file set

No documentation exists for this property.

#### site file of &lt;bes site&gt; : bes site file

No documentation exists for this property.

#### operator of &lt;bes site&gt; : bes user

No documentation exists for this property.

#### action set of &lt;bes site&gt; : bes action set

No documentation exists for this property.

#### action of &lt;bes site&gt; : bes action

No documentation exists for this property.

