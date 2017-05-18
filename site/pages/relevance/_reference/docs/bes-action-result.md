# type: bes action result

The &lt;bes action result&gt; inspectors examine the results of BES Actions, which can be used to make reports.

# action of &lt;bes action result&gt; : bes action

Returns the action corresponding to the specified action result.

# apply count of &lt;bes action result&gt; : integer

Returns the number of times (as an integer) that the specified BES Action result has been initiated on the client.

# computer of &lt;bes action result&gt; : bes computer

Returns the computer(s) that the specified action result applies to.

# detailed status of &lt;bes action result&gt; : string

Returns a string describing the detailed status of the specified action result on this computer.

# end time of &lt;bes action result&gt; : time

Returns the time when the action finished running on the specified clients. The format of the string is defined by the MIME standard. If the action has not yet completed the inspector returns: "Singular expression refers to nonexistent object.".

# exit code of &lt;bes action result&gt; : integer

Returns the exit code set for the specified action by the exit &lt;code&gt; action script command. If no exit code was set, this inspector returns: "Singular expression refers to nonexistent object.".

# line number of &lt;bes action result&gt; : integer

Returns the current line number of the action script that is being executed on the client computer.

# retry count of &lt;bes action result&gt; : integer

Returns the number of times (as an integer) that the specified BES Action result has been retried on the client.

# start time of &lt;bes action result&gt; : time

Returns the time when the action started on the specified clients. The format of the string is defined by the MIME standard. If the action has not yet started the inspector returns: "Singular expression refers to nonexistent object.".

# status of &lt;bes action result&gt; : bes action status

Returns the &lt;bes action state&gt; object corresponding to the specified action result on the client computer.
