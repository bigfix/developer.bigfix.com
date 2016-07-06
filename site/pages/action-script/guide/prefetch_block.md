---
title: Prefetch Block
---

The prefetch block must be the first entry in the action script (other than comments
or blank lines). It contains all the download prefetch logic needed to prepare for
subsequent action execution, making the action easier to understand. Some of the
methods that can be used in a prefetch block include:

**Literal downloads**
:	These are ordinary static downloads, which are still available.

**Conditional downloads**
:	Only those commands inside TRUE condition pathways are performed.

**Variable Substitution**
:	This includes downloads that use relevance substitution to determine which files to collect.

**Custom logic**
:	This takes advantage of a plug-in to create download manifests.

Unlike the pre-parsing algorithm used in the traditional downloading actions,
prefetch block downloads can be viewed as a top-down approach: the prefetch
block comes first and must successfully complete before the rest of the action can
continue. This provides greater control, flexibility and power.

{% note %}

Only one prefetch block is allowed per action. When it is used, the **begin
prefetch block** command must be the first executable in the script. Only blank
lines and comments are allowed to precede it. An **end prefetch block** command is
required for termination.

{% endnote %}

