---
title: Connecting to the server through the API
---

You can specify an action success criteria in a .bes file. The ActionSuccessCriteria
element corresponds to the ‘Success Criteria’ tab of the Take Action Dialog. This is
the schema:

```xml
<...
Option="xs:string (possible values: {’RunToCompletion’|’OriginalRelevance’|
’CustomRelevance’}) [0..1]">
	If the 'Option' attribute is 'RunToCompletetion', the action will
	be considered successful when all lines of the action script have
	been executed. If the option is 'OriginalRelevance', the action
	is considered successful when the applicability relevance of
	the action becomes false. If the option is 'CustomRelevance',
	then the action is considered false when the custom relevance
	expression inside the tag evaluates to false.
	
	RelevanceString
</...>
```
