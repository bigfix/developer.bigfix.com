---
title: Introspectors
---

You can inspect the language itself using inspectors called *introspectors*. 

Here are some example queries to try:

```relevance
properties whose (it as string contains "file")

properties whose (result type of it = type "file")

properties of type "file"

casts

unary operators

binary operators

binary operators returning (type "integer")

properties
```

If you evalaute the last one, '[properties](./properties.html)', most of the items at the top of the list are the 
core types and introspectors.

