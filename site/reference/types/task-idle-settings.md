# type: task idle settings

The &lt;task idle settings&gt; objects specify how the Task Scheduler performs tasks when the computer is in an idle condition. These settings concern the duration, restart, stop and wait conditions for the specified idle settings. For more information about idle conditions, see &#39;Task Idle Conditions&#39; at MSDN.

# idle duration of &lt;task idle settings&gt; : time interval

Returns a value that indicates the amount of time that the computer must be in an idle state before the task is run.

# restart on idle of &lt;task idle settings&gt; : boolean

Returns a Boolean value that indicates whether the task is restarted when the computer cycles into an idle condition more than once.

# stop on idle end of &lt;task idle settings&gt; : boolean

Returns a Boolean value that indicates that the Task Scheduler will terminate the task if the idle condition ends before the task is completed.

# wait timeout of &lt;task idle settings&gt; : time interval

Returns a time interval that represents the amount of time that the Task Scheduler will wait for an idle condition to occur.
