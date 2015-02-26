# task trigger

Task triggers for the Task Scheduler have properties that identify and modify the action of each trigger.

# enabled of <task trigger>

Returns `True` if the specified trigger is enabled.

# end boundary of <task trigger>

Returns a time corresponding to when the specified trigger is deactivated, after which it will no longer run.

# execution time limit of <task trigger>

Returns a time interval corresponding to the maximum time allotted to the task.

# id of <task trigger>

Returns the identifier for the trigger (as a string).

# repetition of <task trigger>

Returns a task repetition pattern corresponding to how often the task will run and how long the repetition pattern will be repeated after the task has been started.

# start boundary of <task trigger>

Returns the date and time when the trigger is activated, after which the task is launched.

# type of <task trigger>

Returns the task trigger type corresponding to the specified task trigger.

# <task trigger> as boot task trigger

Casts the given task trigger as a boot trigger type.

# <task trigger> as daily task trigger

Casts the given task trigger as a daily trigger type.

# <task trigger> as event task trigger

Casts the given task trigger as an event trigger type.

# <task trigger> as idle task trigger

Casts the given task trigger as an idle trigger type.

# <task trigger> as logon task trigger

Casts the given task trigger as a logon trigger type.

# <task trigger> as monthly task trigger

Casts the given task trigger as a monthly trigger type.

# <task trigger> as monthlydow task trigger

Casts the given task trigger as a monthly DOW trigger type.

# <task trigger> as registration task trigger

Casts the given task trigger as a registration trigger type.

# <task trigger> as session state change task trigger

Casts the given task trigger as a session trigger type.

# <task trigger> as time task trigger

Casts the given task trigger as a time trigger type.

# <task trigger> as weekly task trigger

Casts the given task trigger as a weekly trigger type.
