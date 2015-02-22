---
title: actions
---

{% type bes action %}

The &lt;bes action&gt; inspectors are used to access information about the actions which have been issued by the BES Operators. You can iterate over the actions to create lists. Each action may have several properties that can be examined.

#### Properties of bes action

{% property action dependency of <bes action> %}

No documentation exists for this property.

{% property action script of <bes action> %}

Returns the script behind the specified action as a string.

{% property action script type of <bes action> %}

Returns the MIME type of the specified action as a string.

{% property applicability relevance of <bes action> %}

Returns the relevance statement as a string. This string is included in the targeting relevance expression but is maintained separately because it comes from the relevance of the original analysis fixlet.

{% property comment of <bes action> %}

Returns the comments assigned to the specified BES Action.

{% property computer group flag of <bes action> %}

Returns TRUE if the specified action is a computer group action.

{% property constrain by property name of <bes action> %}

Returns the &#39;constrain by property name&#39; setting, one of the property constraints of the action.

{% property constrain by property relation of <bes action> %}

Returns the &#39;constrain by property relation&#39; setting, one of the property constraints of the action.

{% property constrain by property value of <bes action> %}

Returns the &#39;constrain by property value&#39; setting, one of the property constraints of the action.

{% property continue on errors flag of <bes action> %}

For a multiple action group, there is a checkbox in the Take Action &gt; Execution tab that controls whether the Action group should fail as soon as any member Actions fail, or continue to run the subsequent Actions in the group. This inspector returns TRUE if the flag is set to continue.

{% property custom success relevance of <bes action> %}

Returns the custom relevance expression for this action, if it exists.

{% property database id of <bes action> %}

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Action resides.

{% property database name of <bes action> %}

In a Web Reports context, this inspector returns the name (as a string) of the database containing the specified BES Action.

{% property date range end of <bes action> %}

No documentation exists for this property.

{% property date range start of <bes action> %}

No documentation exists for this property.

{% property day_of_week constraint of <bes action> %}

No documentation exists for this property.

{% property domain of <bes action> %}

A domain is attached to an Action when it is created. This inspector returns the domain associated with the specified BES Action.

{% property end date of <bes action> %}

Returns the ending &lt;date&gt; for the specified action. Along with the start date, this defines the allowed time range for execution of the action.

{% property end flag of <bes action> %}

Returns TRUE if the specified action is an end action.

{% property end time_of_day of <bes action> %}

Returns the ending &lt;time of day&gt; for the specified action. Along with the start time of day, this defines the allowed time range for execution of the action.

{% property expiration flag of <bes action> %}

No documentation exists for this property.

{% property expiration time of <bes action> %}

This inspector was deprecated after version 5.0 and now only returns FALSE. For a workaround, see the &#39;end date&#39; and &#39;end time_of_day&#39; properties.

{% property group member flag of <bes action> %}

Returns TRUE if the specified action is a group member action.

{% property hidden flag of <bes action> %}

Returns TRUE if the specified action is a hiding action.

{% property id of <bes action> %}

Returns the numeric ID number of the specified BES Action.

{% property issuer of <bes action> %}

Returns the BES user object corresponding to the issuer of the specified action.

{% property link <html> of <bes action> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports).

{% property link <string> of <bes action> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports).

{% property link href of <bes action> %}

Returns a &lt;string&gt; that can be embedded into an &lt;A&gt; tag that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports). Note that link href returns a normal string, not an HTML string.

{% property link of <bes action> %}

Returns an HTML string containing an &lt;A&gt; tag that, when clicked, will open the given action&#39;s document (in the BES Console) or description page (in Web Reports).

{% property management rights flag of <bes action> %}

Returns TRUE if the specified action is a management rights action.

{% property member action of <bes action> %}

Returns the individual member actions for the specified multiple action group parent, &lt;bes action&gt;.

{% property member action set of <bes action> %}

Returns the individual member actions for the specified multiple action group parent, &lt;bes action&gt;.

{% property message action button flag of <bes action> %}

Returns the value of the message action button flag, one of the settings that control the pre-action user interface.

{% property message allow cancel flag of <bes action> %}

Returns the value of the message allow cancel flag, one of the settings that control the pre-action user interface.

{% property message postpone delay of <bes action> %}

Returns the value of the message postpone delay flag, one of the settings that control the pre-action user interface.

{% property message text of <bes action> %}

Returns the value of the message text flag, one of the settings that control the pre-action user interface.

{% property message timeout delay of <bes action> %}

Returns the timeout delay assigned to the action message: &#39;Automatically close message box and run action after...&#39;. The time can vary from 1 minute to 30 days.

{% property message title of <bes action> %}

Returns the value of the message title flag, one of the settings that control the pre-action user interface.

{% property middle action of <bes action> %}

For a start action this iterates over the list of &lt;action&gt; objects that make up the group.

{% property mime field <string> of <bes action> %}

No documentation exists for this property.

{% property mime field of <bes action> %}

No documentation exists for this property.

{% property multiple flag of <bes action> %}

Returns TRUE if the specified action is a multiple action (see single flag of &lt;bes action&gt;).

{% property name of <bes action> %}

Returns the name of the specified BES Action.

{% property offer category of <bes action> %}

Returns the user-defined offer category of the specified bes action.

{% property offer description html of <bes action> %}

Returns the offer description of the specified bes action as an html string. This description is what appears to the client when the action executes.

{% property offer flag of <bes action> %}

Returns the offer flag of the specified bes action as a boolean TRUE/FALSE. TRUE indicates that the action has an attached offer to present to the client.

{% property operator site flag of <bes action> %}

Returns TRUE if the action is propagated from a non-master operator&#39;s site.

{% property parameter <string> of <bes action> %}

Some Fixlets allow the Console Operator to customize the Action. When they are triggered, the BES Console displays a dialog prompting the user for certain Action parameters. For a given Action, this inspector returns value of the parameter specified by &lt;string&gt;.

{% property parameter of <bes action> %}

Returns the parameter(s) for the specified BES Action. An action parameter has two inspectable properties: a name and a value. Parameters are embedded in Actions to allow the Console user to supply a custom value.

{% property parent group of <bes action> %}

Returns the parent group action for the specified group action member.

{% property postaction allow cancel flag of <bes action> %}

Returns the value of the allow cancel flag, one of the settings that control the post-action user interface.

{% property postaction force delay of <bes action> %}

Returns the value of the force delay flag, one of the settings that control the post-action user interface.

{% property postaction message text of <bes action> %}

Returns the value of the message text flag, one of the settings that control the post-action user interface.

{% property postaction message title of <bes action> %}

Returns the value of the message title flag, one of the settings that control the post-action user interface.

{% property postaction postpone delay of <bes action> %}

Returns the value of the postpone delay flag, one of the settings that control the post-action user interface.

{% property precache flag of <bes action> %}

In the Take Action&gt; Execution tab, there is an option that allows the client to start Action downloads before all the constraints are met.  This inspector returns TRUE if that option is selected.

{% property reapplication interval of <bes action> %}

Returns the time period specified between applications of the given BES Action.

{% property reapplication limit of <bes action> %}

Returns the maximum number of times the action will be reapplied. If the action is not set to be reapplied, then this will return a &quot;non-existent&quot; error.

{% property reapply flag of <bes action> %}

Returns TRUE if the reapply flag was set for the specified BES Action.

{% property reported computer set of <bes action> %}

Returns a list of all the computers that have reported for the specified BES Action. The list is formatted as a mathematical set.

{% property require user absence of <bes action> %}

Returns TRUE if the action requires that the user be absent to execute the specified action.

{% property require user presence of <bes action> %}

Returns TRUE if the action requires that the user be present to execute the specified action.

{% property restart flag of <bes action> %}

Returns the value of the reset flag, one of the settings that control the post-action user interface.

{% property result from <bes computer> of <bes action> %}

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result &lt;( bes action, bes computer )&gt;.

{% property result of <bes action> %}

Returns a bes action result object for each computer which has reported on the specified action.

{% property retry delay of <bes action> %}

Returns the &lt;time interval&gt; object that represents the amount of time to wait before retrying after a failure. If the action is not set to delay for a time interval before retrying then this will return a &quot;non-existent&quot; error.

{% property retry limit of <bes action> %}

Returns the maximum number of times the action will be retried after failure. If the action is not set to be retried, then this will return a &quot;non-existent&quot; error.

{% property retry wait for reboot flag of <bes action> %}

Returns the waiting period after completion of the specified action before the computer will be restarted (from 15 minutes to 30 days).

{% property running message text of <bes action> %}

Returns the value of the running message text, one of the user interfaces that is displayed while the action is running.

{% property running message title of <bes action> %}

Returns the value of the running message title, one of the user interfaces that is displayed while the action is running.

{% property secure parameter flag of <bes action> %}

No documentation exists for this property.

{% property selected groups string of <bes action> %}

If the specified action is targeted by property, then this returns a string that contains a tree representation of the items that were selected.

{% property set of <bes action> %}

Converts the specified BES Action list to a set that can be arithmetically manipulated.

{% property settings flag of <bes action> %}

Returns TRUE if the specified action is a settings action.

{% property show message flag of <bes action> %}

Returns the value of the message flag, one of the settings that control the pre-action user interface.

{% property show running message flag of <bes action> %}

Returns the value of the running message flag, one of the user interfaces that is displayed while the action is running.

{% property shutdown flag of <bes action> %}

Returns the value of the shutdown flag, one of the settings that control the post-action user interface.

{% property single flag of <bes action> %}

Returns TRUE if the specified action is a single action (see multiple flag of &lt;bes action&gt;).

{% property source fixlet of <bes action> %}

Returns the &lt;bes fixlet&gt; object that was the source of the specified action.

{% property source relevance of <bes action> %}

Returns the original relevance expression for this action.

{% property start date of <bes action> %}

Returns the starting &lt;date&gt; for the specified action. Along with the end date, this defines the allowed time range for execution of the action.

{% property start flag of <bes action> %}

Returns TRUE if the specified action is a start action.

{% property start time_of_day of <bes action> %}

Returns the starting &lt;time of day&gt; for the specified action. Along with the end time of day, this defines the allowed time range for execution of the action.

{% property state of <bes action> %}

Returns the current state of the specified action as a string. It should be one of the following:OpenStoppedExpired.

{% property stopper of <bes action> %}

If the specified action has been stopped, this inspector returns the user who stopped it.

{% property subscription flag of <bes action> %}

Returns TRUE if the specified action is a subscription action.

{% property success on custom relevance of <bes action> %}

Returns TRUE if the success of the action is determined by the custom relevance becoming false (no longer relevant).

{% property success on original relevance of <bes action> %}

Returns TRUE if the success of the action is determined by the original relevance becoming false (no longer relevant).

{% property success on run to completion of <bes action> %}

Returns TRUE if the success of the action is determined by the completion of all lines of the action script.

{% property targeted by id flag of <bes action> %}

Returns a boolean TRUE if the specified action is targeted by an ID Flag.

{% property targeted by list flag of <bes action> %}

Returns a boolean TRUE if the specified action is targeted by a List Flag.

{% property targeted by property flag of <bes action> %}

Returns a boolean TRUE if the specified action is targeted by a Property Flag.

{% property targeted computer of <bes action> %}

If the specified action is targeted by ID, then this inspector returns an iterated list of the targeted BES computer objects.

{% property targeted computer set of <bes action> %}

Returns the list (formatted as a set) of targeted computers associated with the specified BES Action.

{% property targeted list of <bes action> %}

If the specified action is targeted by list, then this returns the relevant BES computer names, concatenated into a single string.

{% property targeted name of <bes action> %}

If the specified action is targeted by list, then this returns the relevant BES computer names as an iterated list with one string for each name.

{% property targeting method of <bes action> %}

Returns one of the strings &quot;By Property&quot;, &quot;By Computer ID&quot;, &quot;By List&quot;, or &quot;Untargeted&quot;.

{% property targeting relevance of <bes action> %}

Returns the relevance string that is being used to target the action.

{% property temporal distribution of <bes action> %}

Returns the &lt;time interval&gt; over which the execution (and file downloads) of this action will be distributed.

{% property time issued of <bes action> %}

Returns the time when the action was issued.

{% property time range end of <bes action> %}

Returns the ending &lt;time of day&gt; for the specified action. Along with the starting time of day, this defines the allowed time range for execution of the action.

{% property time range start of <bes action> %}

Returns the starting &lt;time of day&gt; for the specified action. Along with the ending time of day, this defines the allowed time range for execution of the action.

{% property time stopped of <bes action> %}

If the specified action has been stopped, this inspector returns the time it was stopped.

{% property top level flag of <bes action> %}

Returns TRUE if the Action is a single Action or the group Action for a multiple Action group.  Member Actions of multiple Action groups are not top level Actions.

{% property unique value of <bes action> %}

Returns the unique values of a given list of &lt;bes action&gt; types, removing duplicates and sorting by value.

{% property untargeted flag of <bes action> %}

Returns a boolean TRUE if the specified action is untargeted.

{% property urgent flag of <bes action> %}

Returns TRUE if the specified action is marked urgent, which means that it will be executed by the client before all non-urgent actions.

{% property utc time flag of <bes action> %}

The Take Action &gt; Execution tab provides an option to specify the time constraints for the Action as UTC instead of as Client local time. This inspector returns TRUE if that flag is set for the given Action.

#### Casts of bes action

{% cast <bes action> as xml %}

Converts the specified BES Action to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

{% type bes action parameter %}

A Fixlet can incorporate parameters in its associated Action(s). When the Fixlet becomes relevant to the network, the BES Console will prompt the user for the value of the parameter. For example, a Fixlet Action might need to start a Windows service specified by the Console user. When the the Action is taken, the Console would prompt for the name of the service. That value would then be passed down to the BES Client and substituted into the local Action script upon execution.

#### Properties of bes action parameter

{% property name of <bes action parameter> %}

Returns the name of the specified Action parameter.

{% property value of <bes action parameter> %}

Returns the value associated with the specified Action parameter.

{% type bes action result %}

The &lt;bes action result&gt; inspectors examine the results of BES Actions, which can be used to make reports.

#### Properties of bes action result

{% property action of <bes action result> %}

Returns the action corresponding to the specified action result.

{% property apply count of <bes action result> %}

Returns the number of times (as an integer) that the specified BES Action result has been initiated on the client.

{% property computer of <bes action result> %}

Returns the computer(s) that the specified action result applies to.

{% property detailed status of <bes action result> %}

Returns a string describing the detailed status of the specified action result on this computer.

{% property line number of <bes action result> %}

Returns the current line number of the action script that is being executed on the client computer.

{% property retry count of <bes action result> %}

Returns the number of times (as an integer) that the specified BES Action result has been retried on the client.

{% property status of <bes action result> %}

Returns the &lt;bes action state&gt; object corresponding to the specified action result on the client computer.

{% type bes action set %}

The &lt;bes action set&gt; inspectors return the iterated list of BES Actions, converted into a set to make it easy to do set arithmetic with the list.

#### Properties of bes action set

{% property element of <bes action set> %}

Returns the unique elements of the specified &lt;bes action set&gt;, removing duplicates and sorting by value.Example: names of elements of bes action set - Returns the names of all the BES Actions.

{% property intersection of <bes action set> %}

Returns the intersection of multiple BES Action sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes action set> %}

Returns the number of unique elements in the specified BES Action set.

{% property union of <bes action set> %}

Returns the union of multiple BES User sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### Casts of bes action set

{% cast <bes action set> as xml %}

Casts a BES Action set as an XML document, for submission to to the ImportXML API in the Console. It can only be used in the Console using the EvaluateRelevance API, not the &lt;?relevance ?&gt; interface.

{% type bes action status %}

The &lt;bes action status&gt; inspectors return information about the status of BES Actions, such as whether it is running, evaluating, expired, and more.

#### Casts of bes action status

{% cast <bes action status> as string %}

Casts an action status as a string.

{% type bes action with multiplicity %}

The &lt;bes action with multiplicity&gt; inspectors deal with arrays of BES Actions, allowing you to extract unique actions and count them.

#### Properties of bes action with multiplicity

{% property multiplicity of <bes action with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes action&gt; types.

