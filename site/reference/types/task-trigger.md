# type: task trigger

Task triggers for the Task Scheduler have properties that identify and modify the action of each trigger.

# enabled of &lt;task trigger&gt; : boolean

Returns `True` if the specified trigger is enabled.

# end boundary of &lt;task trigger&gt; : time

Returns a time corresponding to when the specified trigger is deactivated, after which it will no longer run.

# execution time limit of &lt;task trigger&gt; : time interval

Returns a time interval corresponding to the maximum time allotted to the task.

# id of &lt;task trigger&gt; : string

Returns the identifier for the trigger (as a string).

# repetition of &lt;task trigger&gt; : task repetition pattern

Returns a task repetition pattern corresponding to how often the task will run and how long the repetition pattern will be repeated after the task has been started.

# start boundary of &lt;task trigger&gt; : time

Returns the date and time when the trigger is activated, after which the task is launched.

# type of &lt;task trigger&gt; : task trigger type

Returns the task trigger type corresponding to the specified task trigger.

# &lt;task trigger&gt; as boot task trigger : boot task trigger

Casts the given task trigger as a boot trigger type.

# &lt;task trigger&gt; as daily task trigger : daily task trigger

Casts the given task trigger as a daily trigger type.

# &lt;task trigger&gt; as event task trigger : event task trigger

Casts the given task trigger as an event trigger type.

# &lt;task trigger&gt; as idle task trigger : idle task trigger

Casts the given task trigger as an idle trigger type.

# &lt;task trigger&gt; as logon task trigger : logon task trigger

Casts the given task trigger as a logon trigger type.

# &lt;task trigger&gt; as monthly task trigger : monthly task trigger

Casts the given task trigger as a monthly trigger type.

# &lt;task trigger&gt; as monthlydow task trigger : monthlydow task trigger

Casts the given task trigger as a monthly DOW trigger type.

# &lt;task trigger&gt; as registration task trigger : registration task trigger

Casts the given task trigger as a registration trigger type.

# &lt;task trigger&gt; as session state change task trigger : session state change task trigger

Casts the given task trigger as a session trigger type.

# &lt;task trigger&gt; as time task trigger : time task trigger

Casts the given task trigger as a time trigger type.

# &lt;task trigger&gt; as weekly task trigger : weekly task trigger

Casts the given task trigger as a weekly trigger type.
