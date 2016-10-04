---
title: Wizard Inspectors
---

Use these Inspectors to retrieve information about the BES Wizard. These Inspectors apply only to the BigFix Console.

---

## BES Wizard

These are Console-only Inspectors that return a list of the available BES Wizards.

Click [here](/relevance/reference/bes-wizard.html) to access the page describing these inspectors.

**Examples**

```relevance
links (h1 of name of it) of bes wizards
```

Returns a list of HTML strings, each with an HTML link named for the Wizard and formatted as a header (h1).

```relevance
links (name of it & "(" & dialog flag of it as string & ")")) of bes wizards 
```

Returns an HTML string that will print the name and dialog flag of the Wizard inside a clickable `<A>` tag.

```relevance
(br & html "Click <A href='" & link href of it & html "'>here</A> to open wizard " & name of it as string) of bes wizards
```

Returns an html string such as 'Click here to open wizard Windows Registry Wizard' that, when clicked, will open the corresponding Wizard.

---

## BES Wizard Variable

These are Console-only Inspectors that return a list of the available BES Wizard variables.

Click [here](/relevance/reference/bes-wizard-variable.html) to access the page describing these inspectors.

---

## BES Wizard Set

These Inspectors iterate over the BES Wizards and return a set of such wizards.

Click [here](/relevance/reference/bes-wizard-set.html) to access the page describing these inspectors.

---


## BES Wizard with Multiplicity

These Inspectors handle arrays of BES Wizards, allowing you to extract unique properties and count them.
This object type is derived from the `<bes wizard>` type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-wizard-with-multiplicity.html) to access the page describing these inspectors.

