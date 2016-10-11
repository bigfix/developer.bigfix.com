---
title: Single actions
---

You can specify Actions in a .bes file. This is the schema:
```xml
<SingleAction>
	<Title> xs:normalizedString </Title> [1]
		The name of the action.
	<Relevance> RelevanceString </Relevance> [1]
		The action will run only on computers for which the relevance
		expression evaluates to true.
	<ActionScript> ActionScript </ActionScript> [1]
	<SuccessCriteria> ActionSuccessCriteria </SuccessCriteria> [0..1]
	<Settings> ActionSettings </Settings> [0..1]
	<SettingsLocks> ActionSettingsLocks </SettingsLocks> [0..1]
	<SuccessCriteriaLocked> xs:boolean </SuccessCriteriaLocked> [0..1]
		If this element is present and set to true, then the action will have
		a success criteria that the user taking the action will not be able
		to change in the Take Action Dialog.
	<IsUrgent> xs:boolean </IsUrgent>
		This marks the action as urgent for client processing. It should
		be left out in most circumstances (defaults to false).
</SingleAction>
```
