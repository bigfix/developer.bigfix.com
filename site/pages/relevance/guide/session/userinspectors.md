---
title: User Inspectors
---

Use these Inspectors to query information about BigFix users.

---

## BES User

These Inspectors let you keep track of the users authorized to use the BES Console. 
You can iterate over the users, producing lists containing information such as the name and authorization level.

Click [here](/relevance/reference/bes-user.html) to access the page describing to these inspectors.

**Examples**

```relevance
(name of item 0 of it, size of item 1 of it) of (it, sets of items 1 of (it, bes fixlets) whose (issuer of item 1 of it = item 0 of it)) of bes users
```

Returns a list of the names of the current BES Users and the number of Fixlets each one has issued.

```relevance
number of subscribed computers of action site of current console user 
```

Returns the number of computers currently subscribed to the specified user's Action site.

```relevance
links (h1 of name of it) of bes users
```

Returns a list of HTML strings, each with an HTML link named after the user and formatted as a header (h1).

```relevance
links (name of it & "(" & master flag of it as string & ")")) of bes users
```

Returns an HTML string that will print the name and master status of the user inside a clickable `<A>` tag.

```relevance
(br & html "Click <A href='" & link href of it & html "'>here</A> to open user " & name of it as string) of bes users
```

Returns an html string such as 'Click here to open user John' message that, when clicked, will open the corresponding BES user document.

```relevance
links of bes users
```

Returns a list of all the BES users formated as links in an HTML string.

```relevance
size of (set of bes users) 
```

Returns the current number of BES users.

---

## BES User Set

These Inspectors iterate over the current set of BES users and package them as a mathematical set, suitable for further set manipulation.

Click [here](/relevance/reference/bes-user-set.html) to access the page describing to these inspectors.

---

## BES User with Multiplicity

These Inspectors deal with arrays of BES actions, allowing you to extract unique actions and count them.
This object type is derived from the `<bes action>` type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-user-with-multiplicity.html) to access the page describing to these inspectors.

