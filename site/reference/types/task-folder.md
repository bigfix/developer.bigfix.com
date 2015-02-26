# task folder

The &lt;task folder&gt; objects provide the methods that are used to retrieve tasks from the folder, as well as from its subfolders. Task folders are specified by name, path and include scheduled tasks.

# descendant of <task folder>

Returns the descendant tasks, which include the tasks in the specified folder plus the tasks in all of its subfolders.

# name of <task folder>

Returns the name(s) used to identify the folder that contains a task.

# path of <task folder>

Returns the path(s) to the location of the task folder(s).

# scheduled task <string> of <task folder>

Returns the named scheduled task in the specified task folder.

# scheduled task of <task folder>

Returns a list of the scheduled tasks of the specified task folder.Example: scheduled tasks of task folder &quot;\&quot; - Returns the 2.0 interface list of scheduled tasks from the specified folder.

# security descriptor of <task folder>

Returns the security descriptor for the specified task folder.

# task folder of <task folder>

Returns the subfolders of the given task folder.
