---
title: Computer Inspectors
---

Use these Inspectors to query and manage the computers that can be listed on the BigFix Console.

---

## BES Computer

These Inspectors return lists of the computers currently visible from the BES Console.

Click [here](/relevance/reference/bes-computer.html) to access the page describing these inspectors.

**Examples**

```relevance
names of administered computers of bes user whose (name of it is "Joe") 
```

Returns the list of computers currently administered by the BES User named Joe.

```relevance
links (h1 of name of it) of bes computers 
```

Returns a list of HTML strings, each with an HTML link named after the BES computer and formatted as a header (h1).

```relevance
links (name of it & "(" & id of it as string & ")")) of bes computers 
```

Returns an HTML string that will print the name and ID of the computer inside a clickable `<A>` tag.

```relevance
(br & html "Click <A href='" & link href of it & html "'>here</A> to open computer " & id of it as string) of bes computers 
```

Returns an html string such as 'Click here to open computer 89201' message that, when clicked, will open the corresponding BES computer document.

```relevance
detailed status of result from (bes action whose (id of it is 1234)) of (bes computer whose (id of it is 1234567))
```

Returns the detailed status of the specified action on the given computer.

```relevance
size of (set of bes computers) 
```

This Inspector returns the date the action was issued, a parameter which is added to each action by the BigFix Console.

```relevance
detailed status of result from (bes computer whose (id of it is 1234567)) of (bes action whose (id of it is 1234)) 
```

Returns the detailed status of the specified action on the given computer.

```relevance
size of (set of bes computers)
```

Returns the current number of BES computers.


---

## BES Computer Set

These Inspectors convert an iterated list of computers into a set, which allows you to perform intersections, unions, and other mathematical operations on them.

Click [here](/relevance/reference/bes-computer-set.html) to access the page describing these inspectors.

**Examples**

```relevance
size of union of applicable computer sets of bes fixlets whose ((source severity of it is "Critical") and (current date - source release date of it > 7 * day)) as floating point / size of bes computer set as floating point
```

Calculates the ratio of computers that have at least one relevant critical Fixlet released more than 1 week ago.


---


## BES Computer with Multiplicity

These Inspectors handle arrays of BES computers, allowing you to extract unique computers and count them.
This object type is derived from the `<bes computer>` type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-computer-with-multiplicity.html) to access the page describing these inspectors.

---


## BES Computer Group

These Inspectors return an iterated list of computer groups, as defined in the BES Console.

Click [here](/relevance/reference/bes-computer-group.html) to access the page describing these inspectors.

**Examples**

```relevance
names of bes computer groups
```

Returns a list of the currently defined computer groups, by name.

```relevance
size of (set of bes computer groups)
```

Returns the current number of computer groups.

---

## BES Computer Group Set

These Inspectors convert an iterated list of computer groups into a set, which allows you to perform intersections, unions, and other mathematical operations on them.

Click [here](/relevance/reference/bes-computer-group-set.html) to access the page describing these inspectors.

**Examples**

```relevance
names of elements of intersection of administered computer sets of bes users whose (name of it is "joe" or name of it is "sue")
```

Returns a list of the names of those computers administered by both Sue and Joe.

---

## BES Computer Group with Multiplicity

These Inspectors handle arrays of BES computer groups, allowing you to extract unique computer groups and count them.
This object type is derived from the <bes computer group> type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-computer-group-with-multiplicity.html) to access the page describing these inspectors.


