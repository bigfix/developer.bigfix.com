---
title: Set Inspectors
---

The Set Inspectors treat a list of objects as a mathematical set. 
These sets, in turn, can be manipulated with traditional set operators like *union* and *intersection*. 


You can create sets from individual elements, separated by semicolons:

```
elements of intersection of (set of ("to";"be"); set of ("or";"not";"to";"be"))
```

which returns the list: be,to.


Or you can create sets from ordinary lists, for example:

```
intersection of administered computer sets of bes users whose (name of it is "joe" or name of it is "sue")
```

which returns the set of computers administered by both Sue and Joe.