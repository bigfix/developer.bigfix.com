---
title: Multiple action groups
---

You can specify multiple action groups in a .bes file. This is the schema:

```xml
<MultipleActionGroup>
	<Title> xs:normalizedString </Title> [1]
	The name of the multiple action group.
	<PreGroupActionScript> ActionScript </PreGroupActionScript> [0..1]
		An action to run before all the member actions of the multiple
		action group; corresponds to the Pre-Execution Action Script
		tab of the Take Action Dialog when taking multiple actions.
	<MemberAction> [1..*]
		<Title> xs:normalizedString </Title> [1]
			The name of the member action.
		<Relevance> RelevanceString </Relevance> [1]
			The member action will run only on computers for which
			the relevance expression evaluates to true.
		<ActionScript> ActionScript </ActionScript> [1]
		<SuccessCriteria> ActionSuccessCriteria </SuccessCriteria> [0..1]
		<IncludeInGroupRelevance>true|false</IncludeInGroupRelevance>
			A value of true for IncludeInGroupRelevance for a member
			action of a multiple action group means that the group
			as a whole is relevant if this member action’s
			relevance is true. Thus, if any of a group’s members
			that have IncludeInGroupRelevance set to true are relevant,
			then the group as a whole is relevant. If no members
			have IncludeInGroupRelevance set, then the group should be
			relevant on all computers, as long as the group’s top-level
			relevance is true.
	</MemberAction>
	<PostGroupActionScript> ActionScript </PostGroupActionScript> [0..1]
		An action to run once all member actions have finished executing;
		corresponds to the Post-Execution Action Script when taking
		multiple actions.
	<Settings> ActionSettings </Settings> [0..1]
	<SettingsLocks> ActionSettingsLocks </SettingsLocks> [0..1]
</MultipleActionGroup>
```
