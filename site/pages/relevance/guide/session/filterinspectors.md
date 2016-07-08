---
title: Filter Inspectors
---

Use these Inspectors to get information about filters criteria.

---

## BES Filter

These Inspectors return the filters, which represent the criteria used by the Find command (Ctrl-F in the BES Console). 
The filters are specific to computers, computer groups, Actions, Analyses, Baselines, Unmanaged Assets, Users, Tasks or Fixlets, and are appropriately flagged.

Click [here](/relevance/reference/bes-filter.html) to access the page describing to these inspectors.

**Examples**

```
names of bes filters 
```

Returns a list of the currently defined BES Filters used in the Find (ctrl-F) commands.

```
name of bes filter 2 
```

Returns the name of the second BES Filter (a saved Find command).

```
size of (action set of bes filters) 
```

Returns the number of BES Filters that were designed for finding Actions.

```
size of (set of bes filters)
```

Returns the current number of defined and saved BES find filters.

---

## BES Filter Set

These Inspectors return the iterated list of BES Filters, converted into a set to make it easy to do set arithmetic with the list.

Click [here](/relevance/reference/bes-filter-set.html) to access the page describing to these inspectors.

---


## BES Filter with Multiplicity

These Inspectors deal with arrays of BES filters, allowing you to extract unique filters and count them.
This object type is derived from the <bes filter> type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-filter-with-multiplicity.html) to access the page describing to these inspectors.
