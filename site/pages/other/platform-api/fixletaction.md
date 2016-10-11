---
title: FixletAction
---

You can specify multiple actions for each Fixlet you define in a .bes file. This is the
schema:

```xml
<...
ID="xs:normalizedString [1]">
	Each action inside a Fixlet or task must have a unique ID, which is displayed
	on the actions tab of the Edit Fixlet Dialog and on the Details tab of the
	Fixlet document.
	<Description> [0..1]
		<PreLink> xs:normalizedString </PreLink> [1]
		<Link> xs:normalizedString </Link> [1]
		<PostLink> xs:normalizedString </PostLink> [1]
	</Description>
		The description of the action is the HTML that is displayed in the actions
		section of the Fixlet description tab. The content of the Prelink tag is
		the HTML that is displayed before the link that takes the action
		(for instance “Click”). The content of the Link tag is HTML that the user
		can click on to take the action (for instance “here”).
		The content of the PostLink tag is HTML following the link (for instance
		“to deploy this action.”)
	<ActionScript> ActionScript </ActionScript> [1]
		See the “ActionScript” type.
	<SuccessCriteria> ActionSuccessCriteria </SuccessCriteria> [0..1]
		See the “ActionSuccessCriteria” type. If this element is not preset
		and the action is inside a Fixlet, the success criteria will default
		to match the relevance of the Fixlet. If the action is inside a task,
		the success criteria will default to run to completion.
	<SuccessCriteriaLocked> xs:boolean </SuccessCriteriaLocked> [0..1]
		If this element is present and set to true, then the action will
		have a success criteria that the user taking the action will not
		be able to change in the Take Action Dialog.
	<Settings> ActionSettings </Settings> [0..1]
	<SettingsLocks> ActionSettingsLocks </SettingsLocks> [0..1]
</...>
```
