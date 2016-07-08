---
title: Linking to other documents
---

You can use the link property of `<bes fixlet>`, `<bes computer>`, `<bes action>` and `<bes user>` to create a hyperlink that opens the document window for that object when it is clicked.

In the Console, clicking the link will open the MDI document for the given object. In Web Reports, the link opens a Web Reports page for the object. 

There are a few different forms of the link Inspector:

```relevance
link of bes fixlet whose (id of it is 1)
```

returns an anchor tag of the form: 

```xml
<A href="linkid:openfixlet(2,1)">IBM BigFix Clients in Seat Count Grace Mode</A>
```

This HTML syntax creates a hyperlink labeled “IBM BigFix Clients in Seat Count Grace Mode”, which represents the title of the Fixlet 
message, that, when clicked, brings up the Fixlet with ID=1 in the Console.

These are other examples:

```relevance
link "Click Here" of bes fixlet whose (id of it is 1)
```

returns `<A href="linkid:openfixlet(2,1)">Click Here</A>`

```relevance
link (b of "Click Here") of bes fixlet whose (id of it is 1)
```

returns `<A href="linkid:openfixlet(2,1)"><b>Click Here</b></A>`, which creates the link in bold.



Web Reports doesn't use the linkid: protocol, but instead interprets the code to generate its own-style links. 
Therefore, for portability reasons, you should try to use the link Inspector to automatically generate the proper link styles 
whenever possible.

