# type: task settings

The &lt;task settings&lt; inspectors examine the settings used by the Task Scheduler service to perform the task. These settings include dealing with starts, restarts and stops, how to manage hidden or multiple tasks, and more.

# allow demand start of &lt;task settings&gt; : boolean

Returns `True` if the task can be started by using the run command or the context menu.

# allow hard terminate of &lt;task settings&gt; : boolean

Returns `True` if the task can be terminated by using TerminateProcess.

# at compatibility of &lt;task settings&gt; : boolean

Returns `True` if the task scheduler is compatible with AT. Tasks compatible with AT are only allowed to have a single time trigger.

# delete expired task after of &lt;task settings&gt; : time interval

Returns a time interval that the Task Scheduler will wait after expiration before deleting the task.

# disallow start when on battery of &lt;task settings&gt; : boolean

Returns `True` if the task will not be started when the computer is running on battery power.

# enabled of &lt;task settings&gt; : boolean

Returns `True` if  the task is enabled. The task associated with the specified settings can be performed only when this setting is TRUE.

# execution time limit of &lt;task settings&gt; : time interval

Returns a time interval corresponding to the amount of time allowed to complete the task.

# hidden of &lt;task settings&gt; : boolean

Returns `True` if the task will not be visible in the UI. Administrators can override this setting with a master switch that forces all tasks to be visible.

# idle setting of &lt;task settings&gt; : task idle settings

Returns the Idle Settings of the specified task. These can include:Idle durationRestart On IdleStop On Idle EndWait Timeout.

# ignore new instance of &lt;task settings&gt; : boolean

Returns `True` if the MultipleInstances task setting is TASK_INSTANCES_IGNORE_NEW. This instructs the scheduler not to start a new instance of the task if the task is already running.

# network setting of &lt;task settings&gt; : task network settings

Returns a task network settings object containing a network profile ID and name. If this setting exists and the &#39;run only when network available&#39; property is TRUE, the task will wait to execute until the specified network profile is available.

# parallel instance of &lt;task settings&gt; : boolean

Returns `True` if the MultipleInstances task setting is TASK_INSTANCES_PARALLEL. This instructs the scheduler to go ahead and start a new instance of the task while the task is already running.

# priority of &lt;task settings&gt; : integer

Returns the numeric priority level of the associated task.

# queue instance of &lt;task settings&gt; : boolean

Returns `True` if the MultipleInstances task setting is TASK_INSTANCES_QUEUE. This instructs the scheduler to start a new instance of the task only after all existing instances are completed.

# restart count of &lt;task settings&gt; : integer

Returns the number of times that the Task Scheduler will attempt to restart the associated task.

# restart interval of &lt;task settings&gt; : time interval

Returns a time interval quantifying how much time the Task Scheduler will allocate to restarting the associated task.

# run only when idle of &lt;task settings&gt; : boolean

Returns `True` if the Task Scheduler is set to run the associated task only from an idle computer.

# run only when network available of &lt;task settings&gt; : boolean

Returns `True` if the Task Scheduler is set to run the task only when a network is available. If the &#39;network setting&#39; exists, the task will be launched only when that network becomes available.

# start when available of &lt;task settings&gt; : boolean

Returns `True` if the Task Scheduler is allowed to start the task any time after its scheduled time has lapsed.

# stop existing instance of &lt;task settings&gt; : boolean

Returns `True` if the MultipleInstances task setting is TASK_INSTANCES_STOP_EXISTING. This instructs the scheduler to stop an existing instance of the task before starting a new instance.

# stop when going on battery of &lt;task settings&gt; : boolean

Returns `True` if the task should be stopped whenever the computer starts to run on battery power.

# v1 compatibility of &lt;task settings&gt; : boolean

Returns `True` if the specified task setting is compatible with version 1.0 of the scheduler.

# v2 compatibility of &lt;task settings&gt; : boolean

Returns `True` if the specified task setting is compatible with version 2.0 of the scheduler.

# wake to run of &lt;task settings&gt; : boolean

Returns `True` if the Task Scheduler should wake the computer whenever it&#39;s time to start the task.

# xml of &lt;task settings&gt; : string

Returns a string containing an XML-formatted version of the specified task settings.
