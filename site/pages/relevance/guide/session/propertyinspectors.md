---
title: Property Inspectors
---

Use these Inspectors to query information about the properties of BES Client computers.

---

## BES Property

Each client may have several properties that can be examined using these Inspectors.
Properties, along with their names, IDs and definitions, can be iterated to produce property lists of all your networked BES computers.

Click [here](/relevance/reference/bes-property.html) to access the page describing to these inspectors.

**Examples**

```
names of bes properties whose (disk usage of it > 0) 
```

Returns a list of the BES Properties than are currently using disk space.

```
size of (set of bes properties)
```

Returns the current number of BES properties.

---

## BES Property Set

These Inspectors iterate over the current set of BES properties and package them as a mathematical set, suitable for further set manipulation.

Click [here](/relevance/reference/bes-property-set.html) to access the page describing to these inspectors.

---


## BES Property with Multiplicity

These Inspectors deal with arrays of BES properties, allowing you to extract unique properties and count them.
This object type is derived from the <bes property> type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-property-with-multiplicity.html) to access the page describing to these inspectors.

---

## BES Property Result

These Inspectors return the results returned by the given properties of the specified BES Client computers.

Click [here](/relevance/reference/bes-property-result.html) to access the page describing to these inspectors.

