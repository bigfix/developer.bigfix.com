---
title: Fixlet Inspectors
---

These Inspectors return information about Fixlets messages.

---

## BES Fixlet Field

In addition to the Relevance and Action fields, Fixlet messages and Tasks can contain various additional fields. 
If the content is developed in BDE, these fields may be specified by the Fixlet templates you use. 
Depending on the site or the template, fields may have different interpretations.
Field names and their meanings are variable and context-specific.

Click [here](/relevance/reference/bes-fixlet-field.html) to access the page describing to these inspectors.

---

## BES Fixlet Field Value

These Inspectors provide access to the values of informational fields that are included with some Fixlet messages and Tasks. 
For more Information, see the BES Fixlet field Inspectors.

Click [here](/relevance/reference/bes-fixlet-field-value.html) to access the page describing to these inspectors.

---

## Mime Field

These Inspectors deal with the MIME fields that constitute a Fixlet file.

Click [here](/relevance/reference/mime-field.html) to access the page describing to these inspectors.

These fields typically start with 'x-fixlet'. For example, to return the value of a specific MIME field, you might use:

```
mime fields "x-fixlet-cve" of bes fixlets
```

---

## BES Fixlet

These Inspectors allow you to iterate over the BES Fixlet messages to create lists of various Fixlet properties such as name, ID, site, and more.

Click [here](/relevance/reference/bes-fixlet.html) to access the page describing to these inspectors.

**Examples**

```
links (h1 of name of it) of bes fixlets 
```

Returns a list of HTML strings, each with an HTML link named after the Fixlet message and formatted as a header (h1).

```
links (name of it & "(" & id of it as string & ")")) of bes fixlets
```

Returns an HTML string that will print the name and ID of the Fixlet message inside a clickable `<A>` tag.

```
(br & html "Click <A href='" & link href of it & html "'>here</A> to open fixlet " & id of it as string) of bes fixlets 
```

Returns an html string such as 'Click here to open fixlet 12345' message that, when clicked, will open the corresponding BES Fixlet document.

```
links of bes fixlets 
```

Returns a list of all the BES Fixlets formated as links in an HTML string.

```
(id of it, mime fields "x-fixlet-sans" of it) of bes fixlets
```

Returns a list of the Fixlet IDs and the values of the mime SANS fields (if they exist) of each.

```
size of (set of bes fixlets)
```

Returns the current number of BES Fixlet messages.

```
names of bes fixlets whose (source severity of it is "Critical") 
```

Returns a list of the names of the critical Fixlets. Note that the quoted severity (in this case "Critical") is case-sensitive.

---

## BES Fixlet Set

These Inspectors iterate over the current set of BES Fixlets and package them as a mathematical set, suitable for further set manipulation.

Click [here](/relevance/reference/bes-fixlet-set.html) to access the page describing to these inspectors.

---

## BES Fixlet with Multiplicity

These Inspectors deal with arrays of BES fixlets, allowing you to extract unique fixlets and count them.
This object type is derived from the <bes fixlet> type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-fixlet-with-multiplicity.html) to access the page describing to these inspectors.

---

## BES Fixlet Action

These Inspectors let you examine BES Actions that are attached to Fixlet messages.

Click [here](/relevance/reference/bes-fixlet-action.html) to access the page describing to these inspectors.

---

## BES Fixlet Result

These Inspectors allow you to inspect the results of BES Fixlet messages, including relevance and affected computers.

Click [here](/relevance/reference/bes-result.html) to access the page describing to these inspectors.

