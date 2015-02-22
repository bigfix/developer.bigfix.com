---
title: boolean
---

{% type boolean %}

No documentation exists for this type.

#### Properties of boolean

{% property conjunction of <boolean> %}

This inspector performs a serial AND on all its boolean arguments:conjunction of (true; true; true) -&gt; TRUEconjunction of (true; true; false) -&gt; FALSE.

{% property disjunction of <boolean> %}

This inspector performs a serial OR on all its boolean arguments:disjunction of (false; false; false) -&gt; FALSEdisjunction of (false; false; true) -&gt; TRUE.

{% property javascript array <string> of <boolean> %}

No documentation exists for this property.

#### Casts of boolean

{% cast <boolean> as boolean %}

No documentation exists for this cast.

{% cast <boolean> as string %}

Converts the boolean value to a string. The possible values returned are &quot;True&quot; and &quot;False&quot; with this exact case, for example:TRUE as string = &quot;True&quot;.

