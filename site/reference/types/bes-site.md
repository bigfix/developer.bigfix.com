# type: bes site

The site inspectors return the names and IDs of the specified site objects. As of BES 7.0, the BES custom site type has been merged with BES site, which now represents all supported types, including external sites, master action sites, operator sites, and custom sites. All properties of BES custom site are now accessible via BES site. As a compatibility measure, BES sites still returns only external and master action sites.

# action of &lt;bes site&gt; : bes action

No documentation exists.

# action set of &lt;bes site&gt; : bes action set

No documentation exists.

# creation date of &lt;bes site&gt; : time

Depending on the type of the BES site, this inspector returns the creation date:External and Master sites: Does not exist (added in version 7.0). Operator sites: The &amp;lt;moment&amp;gt; when the operator was created (added in version 7.0). Custom sites: The &amp;lt;moment&amp;gt; when the site was created.

# creator of &lt;bes site&gt; : bes user

Returns the &amp;lt;bes user&amp;gt; who created the specified custom site. Does not exist for External, Master or Operator sites.

# custom site flag of &lt;bes site&gt; : boolean

Returns `True` if and only if the specified site is a custom site.

# description of &lt;bes site&gt; : string

For a custom site, this is the description of the site that was specified by the creator. For External, Master or Operator sites, the description does not exist.

# display name of &lt;bes site&gt; : string

Beginning with version 7.1, a custom site can specify a display name that&amp;#39;s different from the site name in the masthead. This inspector returns the display name; for the masthead name, use name of &amp;lt;bes site&amp;gt;.

# domain of &lt;bes site&gt; : bes domain

A domain is attached to a BES site when one is created. This inspector returns the domain associated with the specified site.

# domain set of &lt;bes site&gt; : bes domain set

Returns domains (as a set) related to the specified BES site.

# explicit owner of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

# explicit owner set of &lt;bes site&gt; : bes user set

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

# explicit reader of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

# explicit reader set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

# explicit writer of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

# explicit writer set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.

# external site flag of &lt;bes site&gt; : boolean

Returns `True` if and only if the specified site is an external site.

# fixlet &lt;integer&gt; of &lt;bes site&gt; : bes fixlet

Returns the Fixlet with the specified ID from the given BES site.

# fixlet of &lt;bes site&gt; : bes fixlet

Returns a list all of the Fixlet objects in the given BES site.

# fixlet set of &lt;bes site&gt; : bes fixlet set

Returns the set of Fixlets that are associated with the specified BES Site.

# globally readable flag of &lt;bes site&gt; : boolean

The value of the globally readable flag depends on the type of site:External sites: True if and only if the site has been marked as readable by all users.Master sites: True.Operator sites: False. Custom sites: True if and only if the site has been marked as readable by all users.

# id of &lt;bes site&gt; : integer

Returns the numeric ID unique to the specified BES site.

# master site flag of &lt;bes site&gt; : boolean

Returns `True` if and only if the specified site is a master site.

# name of &lt;bes site&gt; : string

Returns the name of the specified BES site (undecorated).

# operator of &lt;bes site&gt; : bes user

No documentation exists.

# operator site flag of &lt;bes site&gt; : boolean

Returns `True` if and only if the specified site is an operator site.

# owner flag &lt;bes user&gt; of &lt;bes site&gt; : boolean

This inspector is deprecated as of Version 7.0. Instead use &amp;quot;exists owner of &amp;lt;bes site&amp;gt; whose (it = &amp;lt;bes user&amp;gt;)&amp;quot;.

# owner of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted ownership of the specified site. Notice that the creator of this site is not included in the owner list.Note: This is a Console-only inspector.

# owner set of &lt;bes site&gt; : bes user set

Returns the set of BES users who are owners (an iterated list) of the specified BES site.

# reader of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted reading privileges on the specified site. Notice that the creator, owners (unless explicitly added) and writers of this site are not included in this reader list.Note: This is a Console-only inspector.

# reader set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have read rights (the iterated list) on the specified BES custom site.

# set of &lt;bes site&gt; : bes site set

Returns a set generated from the iterated list of BES Sites. This can be subjected to arithmetic set operations such as union and intersection.

# site file of &lt;bes site&gt; : bes site file

No documentation exists.

# site file set of &lt;bes site&gt; : bes site file set

No documentation exists.

# site level relevance of &lt;bes site&gt; : string

No documentation exists.

# subscribed &lt;bes computer&gt; of &lt;bes site&gt; : boolean

Returns `True` if the given computer is subscribed to the given BES site.

# subscribed computer of &lt;bes site&gt; : bes computer

Returns the list of computers that are subscribed to the specified BES site.

# subscribed computer set of &lt;bes site&gt; : bes computer set

Returns the list of computers that are subscribed to the specified BES site. The list is formatted as a mathematical set for easier manipulation.

# subscription mode of &lt;bes site&gt; : string

Returns the subscription mode for custom sites and external sites. The subscription mode is one of the following:All: all computers are subscribedNone: no computers are subscribedAdHoc: computers are subscribed via ad-hoc custom site subscription actionsCustom: computers are subscribed via a list of conditions.

# tag of &lt;bes site&gt; : string

The site tag is used as an identifier for sites and is used to build the site&amp;#39;s URL.

# unique value of &lt;bes site&gt; : bes site with multiplicity

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &amp;lt;bes site&amp;gt; types.

# url of &lt;bes site&gt; : string

Returns the gather URL for a given BES site.  For example, the gather URL for BES Support is http://sync.bigfix.com/cgi-bin/bfgather/bessupport.

# version of &lt;bes site&gt; : integer

Returns the version of an external site. Does not apply to custom sites.

# wizard of &lt;bes site&gt; : bes wizard

Returns the Wizards associated with the specified BES site.

# wizard set of &lt;bes site&gt; : bes wizard set

Returns the Wizards (as a set) associated with the specified BES site.

# writer of &lt;bes site&gt; : bes user

Returns a list of BES users that have been granted writing privileges on the specified site. Notice that the creator and owners (unless explicitly added) of this site are not included in this reader list.Note: This is a Console-only inspector.

# writer set of &lt;bes site&gt; : bes user set

Returns the set of BES users who have write permissions (as an iterated list) on the specified BES site.

# &lt;bes site&gt; = &lt;bes site&gt; : boolean

Returns `True` if the two provided BES sites are equal.
