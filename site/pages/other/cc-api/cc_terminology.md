---
title: Terminology
---

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
   <dd>The name/ID of the query. A string up to 64 characters in length, composed of alphanumeric characters, underscores, or periods.</dd>
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
