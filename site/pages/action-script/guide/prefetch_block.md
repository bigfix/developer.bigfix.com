---
title: The Prefetch Block Structure
---

The prefetch block must be the first entry in the action script. 
It contains all the download prefetch logic needed to prepare for
subsequent action execution. The instructions contained in the prefetch block 
must successfully complete before the rest of the action can continue; in this way 
it is ensured that files are successfully downloaded before the action script runs. 


The prefetch block structure must satisfy the following criteria:
- Is located as first entry in the action script. Only blank lines and comments are allowed to precede it.
- Starts with a **begin prefetch block** statement.
- Ends with the **end prefetch block** statement.


**Note:** Only one prefetch block is allowed per action.


Some of the methods that can be used in a prefetch block include:

**Literal downloads**
:	These are ordinary [static downloads](./static_download.html), which are still available.

**Conditional downloads**
:	Only those commands inside TRUE condition pathways are performed.

**Variable Substitution**
:	This includes downloads that use relevance substitution to determine which files to collect.

**Custom logic**
:	This takes advantage of a plug-in to create download manifests.

