---
title: Terminology
---

{% section %}

These are some terms that you should familiarize with before using the Client Compliance API:

<dl>
   <dt>**Compliance Document**</dt>
   <dd>A file that contains one or more compliance expression items. The document is formatted as XML. The client maintains a file storage location for
each Fixlet site where it locates compliance documents.</dd>
   <dt>**Compliance Expression Item**</dt>
   <dd>Contains a designator, relevance expression, and optionally, a description and comment.</dd>
   <dt>**Compliance Response**</dt> 
   <dd>The response made available to the API by the client after it processes the compliance document. The response contains of one or more
Compliance Result items.</dd>
   <dt>**Compliance Result item**</dt> 
   <dd>Contains a designator, relevance result, description, and a comment.</dd>
   <dt>**Designator**</dt>
   <dd>A string up to 64 characters in length, composed of alphanumeric characters, underscores, or periods.</dd>
   <dt>**Relevance Expression**</dt> 
   <dd>Arbitrary relevance expression to be evaluated by the client and reported to the API with the corresponding designator.</dd>
   <dt>**Relevance Result**</dt> 
   <dd>The result of evaluating the relevance expression. Plural expressions result in multiple Compliance Result Items that are shown in the
response from the API.</dd>
   <dt>**Description**</dt> 
   <dd>Some text that is carried from the Compliance Expression item to the Compliance result item. It is passed from the document to the API without
processing and can therefore be used to convey arbitrary data about the Compliance expression item.</dd>
   <dt>**Comment**</dt> 
   <dd>This is text handled the same as the Description.</dd>
</dl>

{% endsection %}

This is how the different pieces are mapped into the logic of the API processing:

![client compliance logic](/static/img/cc_api_graphic_80_n.png)

1. On the BigFix Client, the Client API add a *Compliance Request* into the **RequestDir**. The *Compliance Request* contains one or more *Compliance Expression Item*.
Each *Client Expression Item* is used to request the BES Client to evaluate the *Relevance Expression*. The *Description* and *Comments* are fields used to add information useful for the Client API to correctly manage the way the *Relevance Result* affects the BigFix Client status, 
for example by issuing a quarantine state if a lack of compliance was found when running the *Relevance Expression*.
2. The BES Client evaluates the *Relevance Expression* and saves its result in the *Relevance Result* field in the *Compliance Response* under the **ResponseDir**.
3. The Client API accesses the *Compliance Response* and, based on the content of the *Relevance Result*, the *Comments* and the *Description* fields, takes the corrective actions, if necessary.