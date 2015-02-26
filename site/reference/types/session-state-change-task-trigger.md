# session state change task trigger

The &lt;session state change task trigger&gt; inspectors return information about Windows actions that are triggered by changes in Terminal Server session states, such as switching users or logging in remotely.

# console connect of <session state change task trigger>

Returns a boolean TRUE if the terminal server console has experienced a connection state change, for instance when users are switched on the client computer.

# console disconnect of <session state change task trigger>

Returns a boolean TRUE if the terminal server console has experienced a disconnect state change, for instance when users are switched on the client computer.

# delay of <session state change task trigger>

Returns a time interval corresponding to the delay   between the detection of the specified session state change and the time the task is started.

# remote connect of <session state change task trigger>

Returns a boolean TRUE if the terminal server console has experienced a remote connection change, for instance when a user connects to a session using a remote desktop connection.

# remote disconnect of <session state change task trigger>

Returns a boolean TRUE if the terminal server console has experienced a remote disconnect change, for instance when a user disconnects from a session using a remote desktop connection.

# session lock of <session state change task trigger>

Returns a boolean TRUE if the terminal server console has experienced a session lock change, for instance when a computer is locked.

# session unlock of <session state change task trigger>

Returns a boolean TRUE if the terminal server console has experienced a session unlock change, for instance when a computer is unlocked.

# user id of <session state change task trigger>

Returns the user identifier (as a string) required to run the tasks associated with the specified session state-change trigger.
