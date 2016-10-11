---
title: ActionSettingsLocks
---

By default, all the action settings specified are used as the new defaults to the Take
Action Dialog. Certain settings might be locked so that the user cannot change
them through the dialog. If a setting in ActionSettingsLocks is set to true, then the
corresponding group of settings in ActionSettings is locked.

For example, if the TimeRange element of ActionSettingsLocks is true, then the
values specified in ActionSettings for HasTimeRange, StartTime, and EndTime
cannot be changed in the Take Action Dialog.

This is the schema:

```xml
<...>
	<ActionUITitle> xs:boolean </ActionUITitle> [0..1]
	<PreActionShowUI> xs:boolean </PreActionShowUI> [0..1]
	<PreAction>
		<MessageTitle> xs:boolean </MessageTitle> [0..1]
		<MessageText> xs:boolean </MessageText> [0..1]
		<AskToSaveWork> xs:boolean </AskToSaveWork> [0..1]
		<ShowActionButton> xs:boolean </ShowActionButton > [0..1]
		<ShowCancelButton> xs:boolean </ShowCancelButton > [0..1]
		<DeadlineBehavior> xs:boolean </DeadlineBehavior > [0..1]
		<ShowConfirmation> xs:boolean </ShowConfirmation> [0..1]
	</PreAction>
	<HasRunningMessage> xs:boolean </HasRunningMessage> [0..1]
	<RunningMessage> [0..1]
		<Title> xs:boolean </Title> [0..1]
		<Text> xs:boolean </Text> [0..1]
	</RunningMessage>
	<TimeRange> xs:boolean </TimeRange> [0..1]
	<StartDateTimeOffset> xs:boolean </StartDateTimeOffset> [0..1]
	<EndDateTimeOffset> xs:boolean </EndDateTimeOffset> [0..1]
	<DayOfWeekConstraint> xs:boolean </DayOfWeekConstraint> [0..1]
	<ActiveUserRequirement> xs:boolean </ActiveUserRequirement> [0..1]
	<Whose> xs:boolean </Whose> [0..1]
	<Reapply> xs:boolean </Reapply> [0..1]
	<ReapplyLimit> xs:boolean </ReapplyLimit> [0..1]
	<ReapplyInterval> xs:boolean </ReapplyInterval> [0..1]
	<RetryCount> xs:boolean </RetryCount> [0..1]
	<RetryWait> xs:boolean </RetryWait> [0..1]
	<TemporalDistribution> xs:boolean </TemporalDistribution> [0..1]
	<PostActionBehavior> [0..1]
		<Behavior> xs:boolean </Behavior> [0..1]
		<AllowCancel> xs:boolean </AllowCancel> [0..1]
		<Deadline> xs:boolean </Deadline> [0..1]
		<Title> xs:boolean </Title> [0..1]
		<Text> xs:boolean </Text> [0..1]
	</PostActionBehavior>
</...>
```
