# bes action

The &lt;bes action&gt; inspectors are used to access information about the actions which have been issued by the BES Operators. You can iterate over the actions to create lists. Each action may have several properties that can be examined.

# action dependency of <bes action>

No documentation exists.

# action script of <bes action>

Returns the script behind the specified action as a string.

# action script type of <bes action>

Returns the MIME type of the specified action as a string.

# applicability relevance of <bes action>

Returns the relevance statement as a string. This string is included in the targeting relevance expression but is maintained separately because it comes from the relevance of the original analysis fixlet.

# comment of <bes action>

Returns the comments assigned to the specified BES Action.

# computer group flag of <bes action>

Returns `True` if the specified action is a computer group action.

# constrain by property name of <bes action>

Returns the &#39;constrain by property name&#39; setting, one of the property constraints of the action.

# constrain by property relation of <bes action>

Returns the &#39;constrain by property relation&#39; setting, one of the property constraints of the action.

# constrain by property value of <bes action>

Returns the &#39;constrain by property value&#39; setting, one of the property constraints of the action.

# continue on errors flag of <bes action>

For a multiple action group, there is a checkbox in the Take Action &gt; Execution tab that controls whether the Action group should fail as soon as any member Actions fail, or continue to run the subsequent Actions in the group. This inspector returns `True` if the flag is set to continue.

# custom success relevance of <bes action>

Returns the custom relevance expression for this action, if it exists.

# database id of <bes action>

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Action resides.

# database name of <bes action>

In a Web Reports context, this inspector returns the name (as a string) of the database containing the specified BES Action.

# date range end of <bes action>

No documentation exists.

# date range start of <bes action>

No documentation exists.

# day_of_week constraint of <bes action>

No documentation exists.

# domain of <bes action>

A domain is attached to an Action when it is created. This inspector returns the domain associated with the specified BES Action.

# end date of <bes action>

Returns the ending &lt;date&gt; for the specified action. Along with the start date, this defines the allowed time range for execution of the action.

# end flag of <bes action>

Returns `True` if the specified action is an end action.

# end time_of_day of <bes action>

Returns the ending &lt;time of day&gt; for the specified action. Along with the start time of day, this defines the allowed time range for execution of the action.

# expiration flag of <bes action>

No documentation exists.

# expiration time of <bes action>

This inspector was deprecated after version 5.0 and now only returns `False`. For a workaround, see the &#39;end date&#39; and &#39;end time_of_day&#39; properties.

# group member flag of <bes action>

Returns `True` if the specified action is a group member action.

# hidden flag of <bes action>

Returns `True` if the specified action is a hiding action.

# id of <bes action>

Returns the numeric ID number of the specified BES Action.

# issuer of <bes action>

Returns the BES user object corresponding to the issuer of the specified action.

# link <html> of <bes action>

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports).

# link <string> of <bes action>

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports).

# link href of <bes action>

Returns a &lt;string&gt; that can be embedded into an &lt;A&gt; tag that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports). Note that link href returns a normal string, not an HTML string.

# link of <bes action>

Returns an HTML string containing an &lt;A&gt; tag that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports).

# management rights flag of <bes action>

Returns `True` if the specified action is a management rights action.

# member action of <bes action>

Returns the individual member actions for the specified multiple action group parent, &lt;bes action&gt;.

# member action set of <bes action>

Returns the individual member actions for the specified multiple action group parent, &lt;bes action&gt;.

# message action button flag of <bes action>

Returns the value of the message action button flag, one of the settings that control the pre-action user interface.

# message allow cancel flag of <bes action>

Returns the value of the message allow cancel flag, one of the settings that control the pre-action user interface.

# message postpone delay of <bes action>

Returns the value of the message postpone delay flag, one of the settings that control the pre-action user interface.

# message text of <bes action>

Returns the value of the message text flag, one of the settings that control the pre-action user interface.

# message timeout delay of <bes action>

Returns the timeout delay assigned to the action message: &#39;Automatically close message box and run action after...&#39;. The time can vary from 1 minute to 30 days.

# message title of <bes action>

Returns the value of the message title flag, one of the settings that control the pre-action user interface.

# middle action of <bes action>

For a start action this iterates over the list of &lt;action&gt; objects that make up the group.

# mime field <string> of <bes action>

No documentation exists.

# mime field of <bes action>

No documentation exists.

# multiple flag of <bes action>

Returns `True` if the specified action is a multiple action (see single flag of &lt;bes action&gt;).

# name of <bes action>

Returns the name of the specified BES Action.

# offer category of <bes action>

Returns the user-defined offer category of the specified bes action.

# offer description html of <bes action>

Returns the offer description of the specified bes action as an html string. This description is what appears to the client when the action executes.

# offer flag of <bes action>

Returns the offer flag of the specified bes action as a boolean TRUE/FALSE. TRUE indicates that the action has an attached offer to present to the client.

# operator site flag of <bes action>

Returns `True` if the action is propagated from a non-master operator&#39;s site.

# parameter <string> of <bes action>

Some Fixlets allow the Console Operator to customize the Action. When they are triggered, the BES Console displays a dialog prompting the user for certain Action parameters. For a given Action, this inspector returns value of the parameter specified by &lt;string&gt;.

# parameter of <bes action>

Returns the parameter(s) for the specified BES Action. An action parameter has two inspectable properties: a name and a value. Parameters are embedded in Actions to allow the Console user to supply a custom value.

# parent group of <bes action>

Returns the parent group action for the specified group action member.

# postaction allow cancel flag of <bes action>

Returns the value of the allow cancel flag, one of the settings that control the post-action user interface.

# postaction force delay of <bes action>

Returns the value of the force delay flag, one of the settings that control the post-action user interface.

# postaction message text of <bes action>

Returns the value of the message text flag, one of the settings that control the post-action user interface.

# postaction message title of <bes action>

Returns the value of the message title flag, one of the settings that control the post-action user interface.

# postaction postpone delay of <bes action>

Returns the value of the postpone delay flag, one of the settings that control the post-action user interface.

# precache flag of <bes action>

In the Take Action&gt; Execution tab, there is an option that allows the client to start Action downloads before all the constraints are met.  This inspector returns `True` if that option is selected.

# reapplication interval of <bes action>

Returns the time period specified between applications of the given BES Action.

# reapplication limit of <bes action>

Returns the maximum number of times the action will be reapplied. If the action is not set to be reapplied, then this will return a &quot;non-existent&quot; error.

# reapply flag of <bes action>

Returns `True` if the reapply flag was set for the specified BES Action.

# reported computer set of <bes action>

Returns a list of all the computers that have reported for the specified BES Action. The list is formatted as a mathematical set.

# require user absence of <bes action>

Returns `True` if the action requires that the user be absent to execute the specified action.

# require user presence of <bes action>

Returns `True` if the action requires that the user be present to execute the specified action.

# restart flag of <bes action>

Returns the value of the reset flag, one of the settings that control the post-action user interface.

# result from <bes computer> of <bes action>

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result &lt;( bes action, bes computer )&gt;.

# result of <bes action>

Returns a bes action result object for each computer which has reported on the specified action.

# retry delay of <bes action>

Returns the &lt;time interval&gt; object that represents the amount of time to wait before retrying after a failure. If the action is not set to delay for a time interval before retrying then this will return a &quot;non-existent&quot; error.

# retry limit of <bes action>

Returns the maximum number of times the action will be retried after failure. If the action is not set to be retried, then this will return a &quot;non-existent&quot; error.

# retry wait for reboot flag of <bes action>

Returns the waiting period after completion of the specified action before the computer will be restarted (from 15 minutes to 30 days).

# running message text of <bes action>

Returns the value of the running message text, one of the user interfaces that is displayed while the action is running.

# running message title of <bes action>

Returns the value of the running message title, one of the user interfaces that is displayed while the action is running.

# secure parameter flag of <bes action>

No documentation exists.

# selected groups string of <bes action>

If the specified action is targeted by property, then this returns a string that contains a tree representation of the items that were selected.

# set of <bes action>

Converts the specified BES Action list to a set that can be arithmetically manipulated.

# settings flag of <bes action>

Returns `True` if the specified action is a settings action.

# show message flag of <bes action>

Returns the value of the message flag, one of the settings that control the pre-action user interface.

# show running message flag of <bes action>

Returns the value of the running message flag, one of the user interfaces that is displayed while the action is running.

# shutdown flag of <bes action>

Returns the value of the shutdown flag, one of the settings that control the post-action user interface.

# single flag of <bes action>

Returns `True` if the specified action is a single action (see multiple flag of &lt;bes action&gt;).

# source fixlet of <bes action>

Returns the &lt;bes fixlet&gt; object that was the source of the specified action.

# source relevance of <bes action>

Returns the original relevance expression for this action.

# start date of <bes action>

Returns the starting &lt;date&gt; for the specified action. Along with the end date, this defines the allowed time range for execution of the action.

# start flag of <bes action>

Returns `True` if the specified action is a start action.

# start time_of_day of <bes action>

Returns the starting &lt;time of day&gt; for the specified action. Along with the end time of day, this defines the allowed time range for execution of the action.

# state of <bes action>

Returns the current state of the specified action as a string. It should be one of the following:OpenStoppedExpired.

# stopper of <bes action>

If the specified action has been stopped, this inspector returns the user who stopped it.

# subscription flag of <bes action>

Returns `True` if the specified action is a subscription action.

# success on custom relevance of <bes action>

Returns `True` if the success of the action is determined by the custom relevance becoming false (no longer relevant).

# success on original relevance of <bes action>

Returns `True` if the success of the action is determined by the original relevance becoming false (no longer relevant).

# success on run to completion of <bes action>

Returns `True` if the success of the action is determined by the completion of all lines of the action script.

# targeted by id flag of <bes action>

Returns a boolean TRUE if the specified action is targeted by an ID Flag.

# targeted by list flag of <bes action>

Returns a boolean TRUE if the specified action is targeted by a List Flag.

# targeted by property flag of <bes action>

Returns a boolean TRUE if the specified action is targeted by a Property Flag.

# targeted computer of <bes action>

If the specified action is targeted by ID, then this inspector returns an iterated list of the targeted BES computer objects.

# targeted computer set of <bes action>

Returns the list (formatted as a set) of targeted computers associated with the specified BES Action.

# targeted list of <bes action>

If the specified action is targeted by list, then this returns the relevant BES computer names, concatenated into a single string.

# targeted name of <bes action>

If the specified action is targeted by list, then this returns the relevant BES computer names as an iterated list with one string for each name.

# targeting method of <bes action>

Returns one of the strings &quot;By Property&quot;, &quot;By Computer ID&quot;, &quot;By List&quot;, or &quot;Untargeted&quot;.

# targeting relevance of <bes action>

Returns the relevance string that is being used to target the action.

# temporal distribution of <bes action>

Returns the &lt;time interval&gt; over which the execution (and file downloads) of this action will be distributed.

# time issued of <bes action>

Returns the time when the action was issued.

# time range end of <bes action>

Returns the ending &lt;time of day&gt; for the specified action. Along with the starting time of day, this defines the allowed time range for execution of the action.

# time range start of <bes action>

Returns the starting &lt;time of day&gt; for the specified action. Along with the ending time of day, this defines the allowed time range for execution of the action.

# time stopped of <bes action>

If the specified action has been stopped, this inspector returns the time it was stopped.

# top level flag of <bes action>

Returns `True` if the Action is a single Action or the group Action for a multiple Action group.  Member Actions of multiple Action groups are not top level Actions.

# unique value of <bes action>

Returns the unique values of a given list of &lt;bes action&gt; types, removing duplicates and sorting by value.

# untargeted flag of <bes action>

Returns a boolean TRUE if the specified action is untargeted.

# urgent flag of <bes action>

Returns `True` if the specified action is marked urgent, which means that it will be executed by the client before all non-urgent actions.

# utc time flag of <bes action>

The Take Action &gt; Execution tab provides an option to specify the time constraints for the Action as UTC instead of as Client local time. This inspector returns `True` if that flag is set for the given Action.

# <bes action> as xml

Converts the specified BES Action to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.
