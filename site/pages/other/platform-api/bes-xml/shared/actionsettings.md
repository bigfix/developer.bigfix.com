---
title: ActionSettings
---

The contents of the ActionSettings element correspond to the options available on
the *Execution, Users, Messages, Offer*, and *Post-Action* tabs of the Take Action Dialog.
This is the schema:

```xml
<...>
	<ActionUITitle> xs:normalizedString </ ActionUITitle > [0..1]
		The title of the message action as displayed in the client UI.
	<PreActionShowUI> xs:boolean </PreActionShowUI> [0..1]
		If true, a message is displayed before running the action.
	<PreAction> [0..1]
		<Text> xs:string </Text> [0..1]
			The text of the message shown before running the action.
		<AskToSaveWork> xs:boolean </AskToSaveWork> [0..1]
			If true, the user is asked to save work before
			the action is run.
		<ShowActionButton> xs:boolean </ShowActionButton> [0..1]
			If true, the user is allowed to view the action script
			before running it.
		<ShowCancelButton> xs:booelan </ShowCancelButton> [0..1]
			If true, the user is allowed to cancel running
			the action.
		<DeadlineBehavior> xs:string (possible values {ForceToRun|
			RunAutomatically}
		</DeadlineBehavior> [0..1]
			All pre-action messages have a deadline. If the
			deadline behavior is 'ForceToRun', the user will
			be presented with a dialog that must be acknowledged
			when the deadline is reached. If the deadline behavior
			is 'RunAutomatically', the action will run when the
			deadline is reached, regardless of whether the user has
			acknowledged the action.
		<DeadlineType> xs:string (possible values {Interval|Aboslute})
		</DeadlineType> [0..1]
		<DeadlineInterval> ActionMessageTimeInterval
		</DeadlineInterval> [0..1]
		<DeadlineOffset> TimeInteval </DeadlineOffset> [0..1]
			The pre-action deadline can be specified as either a
			time interval from when the client UI is shown, or as
			an absolute date and time. If the deadline type is
			'Interval', then the 'DeadlineInterval' element must
			be present with an appropriate time interval of type
			ActionMessageTimeInterval. If the deadline type is
			'Absolute', then the 'DeadlineOffset' element must
			be present with a TimeInterval, which will create
			an absolute deadline for the action that is offset
			from the date and time the action is taken in the console.
		<ShowConfirmation> xs:boolean </ShowConfirmation> [0..1]
		<Confirmation> xs:string </Confirmation> [0..1]
			If 'ShowConfirmation' is true, an extra confirmation message
			is shown to the user with text from the
			'Confirmation' element.
	</PreAction>
	<HasRunningMessage> xs:boolean </HasRunningMessage> [0..1]
		If true, a message is displayed while running the action.
	<RunningMessage> [0..1]
		<Title> xs:normalizedString </Title> [0..1]
			The title of message displayed while running the action.
		<Text> xs:string </Text> [0..1]
			The text of the message displayed while running the action.
	</RunningMessage>
	<HasTimeRange> xs:boolean </HasTimeRange> [0..1]
	<TimeRange> [0..1]
		<StartTime> xs:time </StartTime> [0..1]
		<EndTime> xs:time </EndTime> [0..1]
	</TimeRange>
		If HasTimeRange is true, then the action will run only between
		the StartTime and EndTime in client local time.
		Times have the form hh:mm:ss.
	<HasStartTime> xs:boolean </HasStartTime> [0..1]
	<StartDateTimeOffset> TimeInterval </StartDateTimeOffset> [0..1]
		If HasStartTime is true, then the action will start at a date
		and time computed by adding the StartDateTimeOffset to
		the time the action is taken. For example, to have an
		action start one day from the time it is taken, specify
		“P1D”. Note that this time can be negative – to create
		an action that starts a day before the action is taken
		(so that clients in every timezone will start executing
		immediately), specify “-P1D”. See TimeInterval for possible values.
	<HasEndTime> xs:boolean </HasEndTime> [0..1]
	<EndDateTimeOffset> NonNegativeTimeInterval </EndDateTimeOffset> [0..1]
		If HasEndTime is true, then the action will start at a date and
		time computed by adding the EndDateTimeOffset to the time the
		action is taken. See NonNegativeTimeInterval for possible values.
	<HasDayOfWeekConstraint> xs:boolean </HasDayOfWeekConstraint> [0..1]
	<DayOfWeekConstraint> [0..1]
		<Sun> xs:boolean </Sun> [0..1]
		<Mon> xs:boolean </Mon> [0..1]
		<Tue> xs:boolean </Tue> [0..1]
		<Wed> xs:boolean </Wed> [0..1]
		<Thu> xs:boolean </Thu> [0..1]
		<Fri> xs:boolean </Fri> [0..1]
		<Sat> xs:boolean </Sat> [0..1]
	</DayOfWeekConstraint>
		If HasDayOfWeekConstraint is true, then the action will run only
		on those days of the week that are specified and whose contents
		are true.
	<ActiveUserRequirement> xs:string (value comes from list: {’NoRequirement’|
		’RequireUser’|’RequireNoUser’})
	</ActiveUserRequirement> [0..1]
		NoRequirement = Run independently of user presence
		RequireUser = Run when at least one of the selected users is logged on
		RequireNoUser = Run only when no user is logged on
	<ActiveUserType> xs:string (value vomes from list: {'AllUsers'|'LocalUsers'|
			'UsersOfGroups'})
	</ActiveUserType> [0..1]
	<UIGroupConstraints>
		<Win9xGroup /> [0..1]
		<WinNTGroup /> [0..1]
		<LocalGroup Name=”xs:string” /> [0..*]
		<DomainGroup Name=”xs:string” Sid=”xs:string” /> [0..*]
	</UIGroupConstraints>
		If the ActiveUserType is 'UsersOfGroups', then the client UI will
		only be shown to a user if a user is in at least one of
		the specified groups.
	<HasWhose> xs:boolean </HasWhose> [0..1]
	<Whose> [0..1]
		<Property> xs:string </Property> [0..1]
		<Relation> xs:string </Relation> [0..1]
		<Value> xs:string </Value> [0..1]
	</Whose>
		If HasWhose is true, then the action will run only on computers
		where the retrieved property named in Property has the relationship
		given in Relation to the value in Value. For example, to add
		the constraint that the action runs only on computers where the
		value of the retrieved property OS starts with Win:
	<Property>OS</Property>
	<Relation>starts with</Relation>
	<Value>Win</Value>
		The possible values of relation are {matches, does not match,
		contains, does not contain, starts with, ends
		with, =, <, >, <=, >=, !=}
	<Reapply> xs:boolean </Reapply> [0..1]
		If true, the action will automatically reapply if it becomes
		relevant again after it has successfully executed.
	<HasReapplyLimit> xs:boolean </HasReapplyLimit> [0..1]
	<ReapplyLimit> xs:nonNegativeInteger </ReapplyLimit> [0..1]
		If the action is set to reapply and HasReapplyLimit is true, then
		the action will only reapply the specified number of times.
	<HasReapplyInterval> xs:boolean </HasReapplyInterval> [0..1]
	<ReapplyInterval> NonNegativeTimeInterval (possible values:
		{’PT10M’|’PT15M’|’PT30M’|’PT1H’|’PT2H’|’PT4H’|’PT8H’|
		’PT12H’|’P1D’|’P2D’|’P5D’|’P7D’|’P15D’|’P30D’})
	</ReapplyInterval> [0..1]
		If the action is set to reapply and HasReapplyInterval is true,
		then the client will wait the specified time interval between
		reapplications. The possible values are in the list above.
		See TimeInterval for information about the value format.
	<HasRetry> xs:boolean </HasRetry> [0..1]
	<RetryCount> xs:nonNegativeInteger </RetryCount> [0..1]
		If HasRetry is true, the action is retried on failure
		the number of times specified in RetryCount.
	<RetryWait
		Behavior="xs:string (value comes from list: {’WaitForReboot’|
			’WaitForInterval’}) [0..1]"> [0..1]
		RetryWaitInterval (TimeInterval)
	</RetryWait>
		If the action is set to retry and the attribute Behavior of
		the RetryWait element is WaitForReboot, the computer must
		be rebooted before the action is retried. If the
		Behavior is WaitForInterval, then the action is retried
		after the time interval specified inside the RetryWait tag.
		The possible values are:
		{’PT15M’|’PT30M’|’PT1H’|’PT2H’|’PT4H’|’PT8H’|
		’PT12H’|’P1D’|’P2D’|’P3D’|’P5D’|’P15D’|’P30D’}
		See TimeInterval for more information about the value format.
	<HasTemporalDistribution> xs:boolean </HasTemporalDistribution> [0..1]
	<TemporalDistribution> NonNegativeTimeInterval
	</TemporalDistribution> [0..1]
		If HasTemporalDistribution is true, then the action will
		be distributed over the time duration specified in
		TemporalDistribution to reduce network load.
	<PostActionBehavior
		Behavior="xs:string (value comes from list: {’Nothing’|’Restart’| ’Shutdown’}) [0..1]"> [0..1]
		If the Behavior attribute is Restart or Shutdown, the
		computer is restarted or shutdown (respectively) after
		the action completes.
	<AllowCancel> xs:boolean </AllowCancel> [0..1]
		If true, the user is allowed to cancel the
		restart/shutdown.
	<PostActionDeadlineBehavior> xs:string (value comes from list
		{'ForceToRun'|'RunAutomatically'}
	</PostActionDeadlineBehavior> [0..1]
	<PostActionDeadlineInterval> ActionMessageTimeInterval
	</PostActionDeadlineInterval> [0..1]
		When a restart/shutdown is specified, the restart/shutdown will
		always have a deadline. If the deadline behavior is 'ForceToRun',
		the user is forced to acknowledge the restart/shutdown when
		the deadline is reached. If the deadline behavior is
		'RunAutomatically', the restart/shutdown will happen
		automatically, regardless of user acknowledgement. The deadline
		interval is specified in the PostActionDeadlineInterval.
	<Title> xs:normalizedString </Title> [0..1]
		The title of the message displayed before the restart/shutdown.
	<Text> xs:string </Text> [0..1]
		The text of the message displayed before the restart/shutdown.
	</PostActionBehavior>
</...>
```
