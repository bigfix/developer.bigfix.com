---
title: BES Schema Structure
---

The schemas that are listed in this section are condensed and augmented
interpretations of traditional XML schemas. They outline the structure in terms of
elements and attributes, simplifying the XML syntax. They also add a repeat range
that describes the number of elements and attributes that are expected by 
BigFix. Although these augmented schemas are not schemas (.xsd) in the strictest
sense, for the sake of brevity we describe them as such.

There are two basic types in the augmented schemas, the elements and their
attributes:
- <ElementTagName> ElementType </ElementTagName>
This identifies an XML element named ElementTagName of type ElementType.
- <ElementTagName
AttributeName=”AttributeType”>
...
</ElementTagName>
This XML element has an attribute named AttributeName of type AttributeType.

There might be multiple entries for these objects. For each element and attribute,
there is a stated range. That represents the number of objects of the specified type
that is expected. These values are represented by numbers in square brackets, as
follows:
- [x] This element or attribute must occur exactly x times.
- [x..y] This element or attribute occurs a minimum of x times and a maximum of times.
- [x..*] This element or attribute occurs a minimum of x times and has no
maximum.
The following example indicates that the schema allows zero or more Relevance
elements of type RelevanceString:
<Relevance> RelevanceString </Relevance> [0..*]