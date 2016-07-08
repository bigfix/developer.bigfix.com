---
title: Site Inspectors
---

Use these Inspectors to query the properties of Fixlet sites to which the client is subscribed.

---

## BES Site

The site Inspectors return the names and IDs of the specified site objects.
The BES site represents all supported types, including external sites, master action sites, operator sites, and custom sites. 
As a compatibility measure, BES sites still returns only external and master action sites.

Click [here](/relevance/reference/bes-site.html) to access the page describing to these inspectors.

**Examples**

```relevance
display name of bes site whose (name of it = "Enterprise Security")
``` 

Returns "Patches for Windows.".

---

## BES Site Set

These Inspectors iterate over the BES sites and return a set of such sites.

Click [here](/relevance/reference/bes-site-set.html) to access the page describing to these inspectors.

---

## BES Site with Multiplicity

These Inspectors deal with arrays of BES sites, allowing you to extract unique properties and count them.
This object type is derived from the `<bes site>` type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-site-with-multiplicity.html) to access the page describing to these inspectors.

