# running task

This group of inspectors is built on top of the Windows Task Scheduler (see the MSDN reference). They only work with the 2.0 interface (Win 7, Vista and Server 2008). The scheduler allows tasks to be run according to various criteria. These inspectors provide information such as the name and action(s) of each running task.These inspectors are for the 2.0 interface only.

# current action of [running task]

Returns the currently executing action of the specified running task.

# disabled state of [running task]

Returns `True` if the specified running task is disabled.

# engine pid of [running task]

Returns the process ID of the specified running task.

# instance guid of [running task]

Returns the globally unique identifier corresponding to the specified running task.

# name of [running task]

Returns the name of the specified running task.

# path of [running task]

Returns the path associated with the specified running task.

# queued state of [running task]

Returns `True` if the specified running task is queued up.

# ready state of [running task]

Returns `True` if the specified running task is ready.

# running state of [running task]

Returns `True` if the specified running task is running.

# unknown state of [running task]

Returns `True` if the specified running task is unknown.
