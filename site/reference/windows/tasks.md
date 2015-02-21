---
title: tasks
---

{% type daily task trigger%}

The &lt;daily task trigger&gt; inspectors deal with tasks that are triggered on a daily basis. For example, a task might start at 9:00 AM every day or every other day. More information about this subset of task triggers can be found by searching for Daily Trigger at the MSDN site.

{% property random delay of <daily task trigger> %}

Returns  a random time interval to be added to the start time of the trigger referred to by the specified daily task trigger.

{% property days interval of <daily task trigger> %}

Returns the interval between the days in the schedule referred to by the specified daily task trigger.

{% type weekly task trigger%}

Weekly triggers are used by the Task Scheduler to launch a task at a specific time of day on a weekly schedule, such as 9:00 PM every other Friday.

{% property weeks interval of <weekly task trigger> %}

Returns the interval between the weeks in the schedule provided by the specified weekly task trigger.

{% property random delay of <weekly task trigger> %}

Returns a delay time that is randomly added to the start time of the specified weekly task trigger.

{% property days run of <weekly task trigger> %}

Returns a day of week corresponding to the days that a task will run given the specified weekly task trigger.

{% type session state change task trigger%}

The &lt;session state change task trigger&gt; inspectors return information about Windows actions that are triggered by changes in Terminal Server session states, such as switching users or logging in remotely.

{% property user id of <session state change task trigger> %}

Returns the user identifier (as a string) required to run the tasks associated with the specified session state-change trigger.

{% property session unlock of <session state change task trigger> %}

Returns a boolean TRUE if the terminal server console has experienced a session unlock change, for instance when a computer is unlocked.

{% property session lock of <session state change task trigger> %}

Returns a boolean TRUE if the terminal server console has experienced a session lock change, for instance when a computer is locked.

{% property remote disconnect of <session state change task trigger> %}

Returns a boolean TRUE if the terminal server console has experienced a remote disconnect change, for instance when a user disconnects from a session using a remote desktop connection.

{% property remote connect of <session state change task trigger> %}

Returns a boolean TRUE if the terminal server console has experienced a remote connection change, for instance when a user connects to a session using a remote desktop connection.

{% property delay of <session state change task trigger> %}

Returns a time interval corresponding to the delay   between the detection of the specified session state change and the time the task is started.

{% property console disconnect of <session state change task trigger> %}

Returns a boolean TRUE if the terminal server console has experienced a disconnect state change, for instance when users are switched on the client computer.

{% property console connect of <session state change task trigger> %}

Returns a boolean TRUE if the terminal server console has experienced a connection state change, for instance when users are switched on the client computer.

{% type time task trigger%}

Time triggers are used by the Task Scheduler to launch a task at a specific date and time.

{% property random delay of <time task trigger> %}

Returns a delay time that is randomly added to the start time of the specified time task trigger.

{% type task trigger type%}

The &lt;task trigger type&gt; objects represent the possible types of triggers used by the Task Scheduler to fire off a task. Tasks can be triggered by dates, user actions and system events.

{% type task trigger%}

Task triggers for the Task Scheduler have properties that identify and modify the action of each trigger. 

{% property <task trigger> as weekly task trigger %}

Casts the given task trigger as a weekly trigger type.

{% property <task trigger> as time task trigger %}

Casts the given task trigger as a time trigger type.

{% property <task trigger> as session state change task trigger %}

Casts the given task trigger as a session trigger type.

{% property <task trigger> as registration task trigger %}

Casts the given task trigger as a registration trigger type.

{% property <task trigger> as monthlydow task trigger %}

Casts the given task trigger as a monthly DOW trigger type.

{% property <task trigger> as monthly task trigger %}

Casts the given task trigger as a monthly trigger type.

{% property <task trigger> as logon task trigger %}

Casts the given task trigger as a logon trigger type.

{% property <task trigger> as idle task trigger %}

Casts the given task trigger as an idle trigger type.

{% property <task trigger> as event task trigger %}

Casts the given task trigger as an event trigger type.

{% property <task trigger> as daily task trigger %}

Casts the given task trigger as a daily trigger type.

{% property <task trigger> as boot task trigger %}

Casts the given task trigger as a boot trigger type.

{% property type of <task trigger> %}

Returns the task trigger type corresponding to the specified task trigger.

{% property start boundary of <task trigger> %}

Returns the date and time when the trigger is activated, after which the task is launched.

{% property repetition of <task trigger> %}

Returns a task repetition pattern corresponding to how often the task will run and how long the repetition pattern will be repeated after the task has been started.

{% property id of <task trigger> %}

Returns the identifier for the trigger (as a string).

{% property execution time limit of <task trigger> %}

Returns a time interval corresponding to the maximum time allotted to the task.

{% property end boundary of <task trigger> %}

Returns a time corresponding to when the specified trigger is deactivated, after which it will no longer run.

{% property enabled of <task trigger> %}

Returns TRUE if the specified trigger is enabled.

{% type task settings%}

The &lt;task settings&gt; inspectors examine the settings used by the Task Scheduler service to perform the task. These settings include dealing with starts, restarts and stops, how to manage hidden or multiple tasks, and more.

{% property xml of <task settings> %}

Returns a string containing an XML-formatted version of the specified task settings.

{% property wake to run of <task settings> %}

Returns TRUE if the Task Scheduler should wake the computer whenever it&#39;s time to start the task.

{% property v2 compatibility of <task settings> %}

Returns TRUE if the specified task setting is compatible with version 2.0 of the scheduler.

{% property v1 compatibility of <task settings> %}

Returns TRUE if the specified task setting is compatible with version 1.0 of the scheduler.

{% property stop when going on battery of <task settings> %}

Returns TRUE if the task should be stopped whenever the computer starts to run on battery power.

{% property stop existing instance of <task settings> %}

Returns TRUE if the MultipleInstances task setting is TASK_INSTANCES_STOP_EXISTING. This instructs the scheduler to stop an existing instance of the task before starting a new instance.

{% property start when available of <task settings> %}

Returns TRUE if the Task Scheduler is allowed to start the task any time after its scheduled time has lapsed.

{% property run only when network available of <task settings> %}

Returns TRUE if the Task Scheduler is set to run the task only when a network is available. If the &#39;network setting&#39; exists, the task will be launched only when that network becomes available.

{% property run only when idle of <task settings> %}

Returns TRUE if the Task Scheduler is set to run the associated task only from an idle computer.

{% property restart interval of <task settings> %}

Returns a time interval quantifying how much time the Task Scheduler will allocate to restarting the associated task.

{% property restart count of <task settings> %}

Returns the number of times that the Task Scheduler will attempt to restart the associated task.

{% property queue instance of <task settings> %}

Returns TRUE if the MultipleInstances task setting is TASK_INSTANCES_QUEUE. This instructs the scheduler to start a new instance of the task only after all existing instances are completed.

{% property priority of <task settings> %}

Returns the numeric priority level of the associated task.

{% property parallel instance of <task settings> %}

Returns TRUE if the MultipleInstances task setting is TASK_INSTANCES_PARALLEL. This instructs the scheduler to go ahead and start a new instance of the task while the task is already running.

{% property network setting of <task settings> %}

Returns a task network settings object containing a network profile ID and name. If this setting exists and the &#39;run only when network available&#39; property is TRUE, the task will wait to execute until the specified network profile is available.

{% property ignore new instance of <task settings> %}

Returns TRUE if the MultipleInstances task setting is TASK_INSTANCES_IGNORE_NEW. This instructs the scheduler not to start a new instance of the task if the task is already running.

{% property idle setting of <task settings> %}

Returns the Idle Settings of the specified task. These can include:Idle durationRestart On IdleStop On Idle EndWait Timeout.

{% property hidden of <task settings> %}

Returns TRUE if the task will not be visible in the UI. Administrators can override this setting with a master switch that forces all tasks to be visible.

{% property execution time limit of <task settings> %}

Returns a time interval corresponding to the amount of time allowed to complete the task.

{% property enabled of <task settings> %}

Returns TRUE if  the task is enabled. The task associated with the specified settings can be performed only when this setting is TRUE.

{% property disallow start when on battery of <task settings> %}

Returns TRUE if the task will not be started when the computer is running on battery power.

{% property delete expired task after of <task settings> %}

Returns a time interval that the Task Scheduler will wait after expiration before deleting the task.

{% property at compatibility of <task settings> %}

Returns TRUE if the task scheduler is compatible with AT. Tasks compatible with AT are only allowed to have a single time trigger.

{% property allow hard terminate of <task settings> %}

Returns TRUE if the task can be terminated by using TerminateProcess.

{% property allow demand start of <task settings> %}

Returns TRUE if the task can be started by using the run command or the context menu.

{% type task repetition pattern%}

The &lt;task repetition pattern&gt; inspectors define how often a scheduled task should be run and determine how long the repetition pattern will be repeated after the task is initiated.

{% property stop at duration end of <task repetition pattern> %}

Returns TRUE if the task repetition  pattern has reached the end of its run.

{% property interval of <task repetition pattern> %}

Returns a time interval corresponding to the time between each restart of the task.

{% property duration of <task repetition pattern> %}

Returns a time interval specifying how long the given task pattern is repeated.

{% type task registration info%}

The &lt;task registration info&gt; objects provide the administrative information used to describe a scheduled task. This information includes details such as a description, the name of the author, the date the task was registered, and the security descriptor.

{% property xml of <task registration info> %}

Returns a string containing the XML-formatted version of the specified task registration information object.

{% property version of <task registration info> %}

Returns a string containing the version number of the scheduled task included in the specified task registration information object.

{% property uri of <task registration info> %}

Returns a string containing the URI of the scheduled task referred to by the specified task registration information object.

{% property source of <task registration info> %}

Returns a string containing the source (component, service application or user) of the scheduled task referred to by the specified task registration information object.

{% property security descriptor of <task registration info> %}

Returns the security descriptor of the scheduled task referred to by the specified task registration information object.

{% property documentation of <task registration info> %}

Returns a string containing any additional documentation pertaining to the scheduled task included in the specified task registration information object.

{% property description of <task registration info> %}

Returns a string containing the description of the scheduled task included in the specified task registration information object.

{% property date of <task registration info> %}

Returns the registration date (as a time type) of the scheduled task included in the specified task registration information object.

{% property author of <task registration info> %}

Returns the author of the scheduled task included in the specified task registration information object.

{% type task principal%}

The &lt;task principal&gt; inspectors provide information about the scheduled task principal, which incapsulates the security credentials. The principal object includes a display name, a logon type, a run level and a set of IDs.

{% property user id of <task principal> %}

Returns the user identifier (as a string) required to run the tasks associated with the principal.

{% property service account logon of <task principal> %}

Returns TRUE if a service account is used as a login. This implies that the task is being initiated by a Local System, Local Service, or Network Service account in a security context.

{% property s4u logon of <task principal> %}

Returns TRUE if an existing interactive token is used to run the task. This requires the user to employ a service for user (S4U) logon. With S4U logons, no password is stored and neither network nor encrypted files can be accessed.

{% property password logon of <task principal> %}

Returns TRUE if a password is used for logging on the user. The password must be supplied when the task is registered.

{% property none logon of <task principal> %}

Returns TRUE if the logon method for the task principal is not specified. Used for non-NT credentials.

{% property lua runlevel of <task principal> %}

Returns TRUE if the specfied task principle will be run with the least privileged user account (LUA).

{% property interactive token password logon of <task principal> %}

Returns TRUE if the task logon type is set to interactive token or password. If the user is logged on, the interactive token is used. Otherwise the password is used. The password must have been specified when the task was registered.

{% property interactive token logon of <task principal> %}

Returns TRUE if the task logon type is set to interactive token, meaning the task will only run in an existing interactive session.

{% property id of <task principal> %}

Returns the identifier of the specified task principal as a string type.

{% property highest runlevel of <task principal> %}

Returns TRUE if the specfied task principle will be run with the highest privileges.

{% property group logon of <task principal> %}

Returns TRUE if the task logon type is set to group activation. In this case, the user ID speicifies the group.

{% property group id of <task principal> %}

Returns the identifier of the user group (as a string) that is required to run the tasks associated with the principal.

{% property display name of <task principal> %}

Returns the name of the principal (as a string) that is displayed in the Task Scheduler UI.

{% type task network settings%}

The &lt;task network settings&gt; inspectors provide the settings used by the Task Scheduler to obtain a network profile. A network settings object has an ID and a name.

{% property name of <task network settings> %}

Returns the name of a network profile. The name is used for display purposes.

{% property id of <task network settings> %}

Returns a GUID that identifies a network profile.

{% type task named value pair%}

The &lt;task named value pair&gt; inspectors return name-value pairs associated with various aspects of a scheduled task.

{% property value of <task named value pair> %}

Returns the string value(s) associated with the specified name-value pair(s).

{% property name of <task named value pair> %}

Returns the string name(s) associated with the specified name-value pair(s).

{% type task idle settings%}

The &lt;task idle settings&gt; objects specify how the Task Scheduler performs tasks when the computer is in an idle condition. These settings concern the duration, restart, stop and wait conditions for the specified idle settings. For more information about idle conditions, see &#39;Task Idle Conditions&#39; at MSDN.

{% property wait timeout of <task idle settings> %}

Returns a time interval that represents the amount of time that the Task Scheduler will wait for an idle condition to occur.

{% property stop on idle end of <task idle settings> %}

Returns a Boolean value that indicates that the Task Scheduler will terminate the task if the idle condition ends before the task is completed.

{% property restart on idle of <task idle settings> %}

Returns a Boolean value that indicates whether the task is restarted when the computer cycles into an idle condition more than once.

{% property idle duration of <task idle settings> %}

Returns a value that indicates the amount of time that the computer must be in an idle state before the task is run.

{% type task folder%}

The &lt;task folder&gt; objects provide the methods that are used to retrieve tasks from the folder, as well as from its subfolders. Task folders are specified by name, path and include scheduled tasks.

{% property task folder of <task folder> %}

Returns the subfolders of the given task folder.

{% property security descriptor of <task folder> %}

Returns the security descriptor for the specified task folder.

{% property scheduled task of <task folder> %}

Returns a list of the scheduled tasks of the specified task folder.Example: scheduled tasks of task folder &quot;\&quot; - Returns the 2.0 interface list of scheduled tasks from the specified folder.

{% property scheduled task <string> of <task folder> %}

Returns the named scheduled task in the specified task folder.

{% property path of <task folder> %}

Returns the path(s) to the location of the task folder(s).

{% property name of <task folder> %}

Returns the name(s) used to identify the folder that contains a task.

{% property descendant of <task folder> %}

Returns the descendant tasks, which include the tasks in the specified folder plus the tasks in all of its subfolders.

{% type task definition%}

The &lt;task definition&gt; inspectors give access to the components of a task, such as the settings, triggers, actions and registration information.

{% property xml of <task definition> %}

Returns the XML-formatted definition of the task associated with the specified task definition.

{% property trigger of <task definition> %}

Returns the triggers associated with the specified task definition.

{% property setting of <task definition> %}

Returns the settings associated with the given task. These settings include dealing with starts, restarts and stops, how to manage hidden or multiple tasks, etcetera.

{% property registration info of <task definition> %}

Returns data such as the author &amp; date of registration associated with the specified task definition.

{% property principal of <task definition> %}

Returns the principle for the task that provides the security credentials for the task associated with the specified task definition.

{% property data of <task definition> %}

Returns the data associated with the task specified by the given definition.

{% property action of <task definition> %}

Returns the action(s) performed by the task specified by the given definition.

{% type task action type%}

The &lt;task action type&gt; inspectors return the Action Type(s) for a Windows Task. Action Types include Executables, Email messages, Handlers and Messages. For more information, see Task Actions at the MSDN site.

{% type task action%}

The &lt;task action&gt; inspectors grant access to the set of scheduled task actions. Actions have an ID and a type. The action types include starting COM handles, executing programs,  sending emails and displaying messages.

{% property <task action> as show message task action %}

Casts the specified task action as a message display action.

{% property <task action> as exec task action %}

Casts the specified task action as an executable action.

{% property <task action> as email task action %}

Casts the specified task action as an email action.

{% property <task action> as com handler task action %}

Casts the specified task action as a com handler task action.

{% property type of <task action> %}

Returns the type of the specified task action. This is one of the following types:com handler: start a custom COM handler.email: send an email.exec: perform a command-line operation such as running a script, launching an executable, or, if the name of.

{% property id of <task action> %}

Returns the user-defined identifier for the specified action.

{% type exec task action%}

The &lt;exec task action&gt; inspectors deal with Windows Exec Actions, which are specified by tasks triggered by various events like computer state changes or scheduled times. The Exec Action causes a program to run. For more information, see Exec Action at the MSDN site.

{% property working directory of <exec task action> %}

Returns the the directory containing either the executable file or files used by the executable specified in the task action.

{% property path of <exec task action> %}

Returns the path to the executable file specified in the task action.

{% property argument string of <exec task action> %}

Returns the arguments associated with the command-line operation referenced by the exec task action.

{% type event task trigger%}

The &lt;event task trigger&gt; inspectors deal with tasks that are triggered by a specific event, such as a system start, logon or idle. More information about event task triggers can be found by searching for Task Triggers at the MSDN site.

{% property value query of <event task trigger> %}

Returns a list of named XPath queries as name-value pairs. Each query in the list is applied to the last matching event XML returned from the subscription query specified in the Subscription property. The name of the query can be used as a variable in the message of a ShowMessage action.

{% property subscription of <event task trigger> %}

Returns the XPath query string identifying the trigger event.

{% property delay of <event task trigger> %}

Returns a value indicating the amount of time lapsed between the event trigger and the start of the task.

{% type email task action%}

The &lt;email task action&gt; inspectors deal with Windows Email Actions, which are specified by tasks triggered by various events like computer state changes or scheduled times. The Email Action causes an email to be sent. For more information, see Email Action at the MSDN site.

{% property to of <email task action> %}

Returns the address(es) for the &#39;to&#39; line of the email referenced by the specified email task action.

{% property subject of <email task action> %}

Returns the subject line for the email referenced by the specified email task action.

{% property server of <email task action> %}

Returns the name of the server used to send the email referenced by the specified email task action.

{% property replyto of <email task action> %}

Returns the email reply address(es) for the email referenced by the specified email task action.

{% property header field of <email task action> %}

Returns the header information (as named value pairs) from the email triggered by a scheduled task.

{% property from of <email task action> %}

Returns the &#39;from&#39; email address for the email referenced by the specified email task action.

{% property cc of <email task action> %}

Returns the email address(es) that you want to Bcc in the email referenced by the specified email task action.

{% property body of <email task action> %}

Returns the body of the email message referenced by the specified email task action.

{% property bcc of <email task action> %}

Returns the email address(es) that you want to Bcc in the email referenced by the specified email task action.

{% property attachment of <email task action> %}

Returns the array of attachments (as strings) to be sent with the email referenced by the specified email task action.

{% type scheduled task%}

The &lt;scheduled task&gt; inspectors are built on top of the Windows Task Scheduler (see the MSDN reference). There are two versions: the 1.0 interface (Win 2000, XP &amp; Server 2003) and the 2.0 interface (Win 7, Vista and Server 2008) which is favored when available. The Task Scheduler inspector set reflects the 2.0 interface layout which in turn maps back to the 1.0 interface. Features of the 1.0 interface are available in the 2.0 interface, but not vice-versa. If the 2.0 interface isn&#39;t available, you may encounter undefined objects. Each of these inspectors works with both 1.0 and 2.0 unless explicitly Noted.

{% property xml of <scheduled task> %}

Returns a string containing the XML content of the specified scheduled task. 2.0 interface only.

{% property unknown state of <scheduled task> %}

Returns TRUE if the state of the scheduled task is unknown.2.0 interface only.

{% property trigger string of <scheduled task> %}

Returns the triggering string for the specified scheduled task.1.0 interface only.

{% property security descriptor of <scheduled task> %}

Returns the security descriptor for the specified scheduled task.2.0 interface only.

{% property running state of <scheduled task> %}

Returns a boolean indicating the whether the specified task is running or not.

{% property ready state of <scheduled task> %}

Returns a boolean indicating the whether the specified task is ready or not.

{% property queued state of <scheduled task> %}

Returns a boolean indicating the whether the specified task is queued or not.

{% property path of <scheduled task> %}

Returns the path of the specified scheduled task.2.0 interface only.

{% property next run time of <scheduled task> %}

Returns the next time that the specified task is scheduled to run.

{% property name of <scheduled task> %}

Returns the name of the specified scheduled task.

{% property missed run count of <scheduled task> %}

Returns an integer corresponding to the missed run count of the specified scheduled task.

{% property last task result of <scheduled task> %}

Returns an integer corresponding to the last result of the specified scheduled task.

{% property last run time of <scheduled task> %}

Returns the time corresponding to when the specified scheduled task was last run.

{% property enabled of <scheduled task> %}

Returns a boolean TRUE if the specified scheduled task is enabled.

{% property disabled state of <scheduled task> %}

Returns a boolean indicating the whether the specified task is disabled or not.

{% property definition of <scheduled task> %}

Returns the task definition for the specified scheduled task for both the 1.0 and 2.0 interface.

{% type running task%}

This group of inspectors is built on top of the Windows Task Scheduler (see the MSDN reference). They only work with the 2.0 interface (Win 7, Vista and Server 2008). The scheduler allows tasks to be run according to various criteria. These inspectors provide information such as the name and action(s) of each running task.These inspectors are for the 2.0 interface only.

{% property unknown state of <running task> %}

Returns TRUE if the specified running task is unknown.

{% property running state of <running task> %}

Returns TRUE if the specified running task is running.

{% property ready state of <running task> %}

Returns TRUE if the specified running task is ready.

{% property queued state of <running task> %}

Returns TRUE if the specified running task is queued up.

{% property path of <running task> %}

Returns the path associated with the specified running task.

{% property name of <running task> %}

Returns the name of the specified running task.

{% property instance guid of <running task> %}

Returns the globally unique identifier corresponding to the specified running task.

{% property engine pid of <running task> %}

Returns the process ID of the specified running task.

{% property disabled state of <running task> %}

Returns TRUE if the specified running task is disabled.

{% property current action of <running task> %}

Returns the currently executing action of the specified running task.

{% type registration task trigger%}

The &lt;registration task trigger&gt; inspectors deal with tasks that are triggered whenever the task is registered or updated. More information about this subset of task triggers can be found by searching for Registration triggers at the MSDN site.

{% property delay of <registration task trigger> %}

This inspector returns the amount of time between when the task is registered and when the task is started. .

{% type show message task action%}

The &lt;show message task action&gt; inspectors deal with Windows Show Message Actions, which are specified by tasks triggered by various events like computer state changes or scheduled times. The Show Message Action causes a a message box to be displayed. For more information, see Show Message Action at the MSDN site.

{% property title of <show message task action> %}

Returns the title text (as a string)  associated with the specified task action. This is the title displayed at the top of the message box.

{% property message body of <show message task action> %}

Returns the message text (as a string)  associated with the specified task action. This is the text displayed in the message box.

{% type com handler task action%}

The &lt;com handler task action&gt; inspectors deal with Windows COM Handler Actions, which are specified by tasks triggered by various events like computer state changes or scheduled times. The COM Handler Action causes a handler to be fired. For more information, see COM Handler Action at the MSDN site.

{% property data of <com handler task action> %}

Returns a string containing the data of the specified &#39;com handler task action&#39;, corresponding to a task that activates a COM handler.

{% property class id of <com handler task action> %}

Returns a string containing the class ID of the specified &#39;com handler task action&#39;, corresponding to a task that activates a COM handler.

{% type boot task trigger%}

The &lt;boot task trigger&gt; inspectors deal with tasks that are triggered when the system is booted up. More information about this subset of task triggers can be found by searching for Boot Trigger at the MSDN site.

{% property delay of <boot task trigger> %}

Returns  a delay time interval to add to the start time of the trigger referred to by the specified boot task trigger.

{% type monthlydow task trigger%}

The &lt;monthlydow task trigger&gt; inspectors deal with tasks that are triggered on a repeating day-of-the-week basis. For example, the task might start at 9:00 AM on specific days of the week, weeks of the month, or months of the year. More information about this subset of task triggers can be found by searching for MonthlyDOW Trigger at the MSDN site.

{% property run on third week in month of <monthlydow task trigger> %}

Returns TRUE if the monthly day-of-week trigger will run the task in the third week of the month.

{% property run on second week in month of <monthlydow task trigger> %}

Returns TRUE if the monthly day-of-week trigger will run the task in the second week of the month.

{% property run on last week in month of <monthlydow task trigger> %}

Returns TRUE if the monthly day-of-week trigger will run the task in the last week of the month.

{% property run on fourth week in month of <monthlydow task trigger> %}

Returns TRUE if the monthly day-of-week trigger will run the task in the fourth week of the month.

{% property run on first week in month of <monthlydow task trigger> %}

Returns TRUE if the monthly day-of-week trigger will run the task in the first week of the month.

{% property run on fifth week in month of <monthlydow task trigger> %}

Returns TRUE if the monthly day-of-week trigger will run the task in the fifth week of the month.

{% property random delay of <monthlydow task trigger> %}

Returns the upper limit of a random time delay that will be added to the monthly day-of-week trigger start time. The format is P&lt;days&gt;DT&lt;hours&gt;H&lt;minutes&gt;M&lt;seconds&gt;S. For example, P3DT6H represents a 3 day, 6 hour maximum, and the random time will be less than or equal to that value.

{% property months run of <monthlydow task trigger> %}

Returns  the months of the year during which the monthly day-of-week task will run.

{% property days run of <monthlydow task trigger> %}

Returns the days of the month during which the monthly day-of-week task will run.

{% type monthly task trigger%}

The &lt;monthly task trigger&gt; inspectors deal with tasks that are triggered on a monthly basis. For example, a task might start at 9:00 AM on specific days of specific months. More information about this subset of task triggers can be found by searching for Monthly Trigger at the MSDN site.

{% property run on last day in month of <monthly task trigger> %}

Returns TRUE if the specified monthly trigger is set to run on the last day of the month.

{% property random delay of <monthly task trigger> %}

Returns the upper limit of a random time delay that will be added to the trigger start time. The format is P&lt;days&gt;DT&lt;hours&gt;H&lt;minutes&gt;M&lt;seconds&gt;S. For example, P3DT6H represents a 3 day, 6 hour maximum, and the random time will be less than or equal to that value.

{% property months run of <monthly task trigger> %}

Returns  the months of the year during which the task will run.

{% property days run of <monthly task trigger> %}

Returns the days of the month during which the task will run.

{% type logon task trigger%}

The &lt;logon task trigger&gt; inspectors deal with tasks that are triggered when a user logs on to the computer. More information about this subset of task triggers can be found by searching for Logon Trigger at the MSDN site.

{% property user id of <logon task trigger> %}

Returns the user identifier (as a string) required to run the tasks associated with the specified logon trigger.

{% property delay of <logon task trigger> %}

A task that is scheduled to run when the user is logged on can be delayed by 30 seconds or as long as a day. This inspector returns the delay for the specified logon task trigger as a time interval.

{% type idle task trigger%}

No documentation exists for this type.

