# bes site

The site inspectors return the names and IDs of the specified site objects. As of BES 7.0, the BES custom site type has been merged with BES site, which now represents all supported types, including external sites, master action sites, operator sites, and custom sites. All properties of BES custom site are now accessible via BES site. As a compatibility measure, BES sites still returns only external and master action sites.

# action of [bes site]

No documentation exists.

# action set of [bes site]

No documentation exists.

# creation date of [bes site]

Depending on the type of the BES site, this inspector returns the creation date:External and Master sites: Does not exist (added in version 7.0). Operator sites: The &lt;moment&gt; when the operator was created (added in version 7.0). Custom sites: The &lt;moment&gt; when the site was created.

# creator of [bes site]

Returns the &lt;bes user&gt; who created the specified custom site. Does not exist for External, Master or Operator sites.

# custom site flag of [bes site]

Returns `True` if and only if the specified site is a custom site.

# description of [bes site]

For a custom site, this is the description of the site that was specified by the creator. For External, Master or Operator sites, the description does not exist.

# display name of [bes site]

Beginning with version 7.1, a custom site can specify a display name that&#39;s different from the site name in the masthead. This inspector returns the display name; for the masthead name, use name of &lt;bes site&gt;.

# domain of [bes site]

A domain is attached to a BES site when one is created. This inspector returns the domain associated with the specified site.

# domain set of [bes site]

Returns domains (as a set) related to the specified BES site.

# explicit owner of [bes site]

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

# explicit owner set of [bes site]

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

# explicit reader of [bes site]

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

# explicit reader set of [bes site]

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

# explicit writer of [bes site]

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

# explicit writer set of [bes site]

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.

# external site flag of [bes site]

Returns `True` if and only if the specified site is an external site.

# fixlet [integer] of [bes site]

Returns the Fixlet with the specified ID from the given BES site.

# fixlet of [bes site]

Returns a list all of the Fixlet objects in the given BES site.

# fixlet set of [bes site]

Returns the set of Fixlets that are associated with the specified BES Site.

# globally readable flag of [bes site]

The value of the globally readable flag depends on the type of site:External sites: True if and only if the site has been marked as readable by all users.Master sites: True.Operator sites: False. Custom sites: True if and only if the site has been marked as readable by all users.

# id of [bes site]

Returns the numeric ID unique to the specified BES site.

# master site flag of [bes site]

Returns `True` if and only if the specified site is a master site.

# name of [bes site]

Returns the name of the specified BES site (undecorated).

# operator of [bes site]

No documentation exists.

# operator site flag of [bes site]

Returns `True` if and only if the specified site is an operator site.

# owner flag [bes user] of [bes site]

This inspector is deprecated as of Version 7.0. Instead use &quot;exists owner of &lt;bes site&gt; whose (it = &lt;bes user&gt;)&quot;.

# owner of [bes site]

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

# owner set of [bes site]

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

# reader of [bes site]

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

# reader set of [bes site]

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

# set of [bes site]

Returns a set generated from the iterated list of BES Sites. This can be subjected to arithmetic set operations such as union and intersection.

# site file of [bes site]

No documentation exists.

# site file set of [bes site]

No documentation exists.

# site level relevance of [bes site]

No documentation exists.

# subscribed [bes computer] of [bes site]

Returns `True` if the given computer is subscribed to the given BES site.

# subscribed computer of [bes site]

Returns the list of computers that are subscribed to the specified BES site.

# subscribed computer set of [bes site]

Returns the list of computers that are subscribed to the specified BES site. The list is formatted as a mathematical set for easier manipulation.

# subscription mode of [bes site]

Returns the subscription mode for custom sites and external sites. The subscription mode is one of the following:All: all computers are subscribedNone: no computers are subscribedAdHoc: computers are subscribed via ad-hoc custom site subscription actionsCustom: computers are subscribed via a list of conditions.

# tag of [bes site]

The site tag is used as an identifier for sites and is used to build the site&#39;s URL.

# unique value of [bes site]

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes site&gt; types.

# url of [bes site]

Returns the gather URL for a given BES site.  For example, the gather URL for BES Support is http://sync.bigfix.com/cgi-bin/bfgather/bessupport.

# version of [bes site]

Returns the version of an external site. Does not apply to custom sites.

# wizard of [bes site]

Returns the Wizards associated with the specified BES site.

# wizard set of [bes site]

Returns the Wizards (as a set) associated with the specified BES site.

# writer of [bes site]

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

# writer set of [bes site]

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.
