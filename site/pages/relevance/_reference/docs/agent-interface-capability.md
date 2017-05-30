# type: agent interface capability

The specific command or capability that is done over the Agent to Agent Api interface. name and the state of a specific capability of a specific agent interface. 

# error code of &lt;agent interface capability&gt; : integer

If available, returns the last result from the capability specified. For example:

{% qna %}
Q: error code of capability "quarantine" of agent interface "EDR" of client
A: 0
{% endqna %}

where "quarantine" is one of the capabilities of the EDR angent.

# error code of &lt;agent interface capability&gt; : integer

No documentation exists.

# name of &lt;agent interface capability&gt; : string

Returns the name of a specific capability of a specific agent interface. For example:

{% qna %}
Q: name of capability "kill process" of agent interface "EDR" of client
A: kill process
{% endqna %}

The plural returns the names of the capabilities for a specific agent interface:

{% qna %}
Q: names of capabilities of agent interface "EDR" of client
A: quarantine
A: delete registry value
A: kill process
A: quarantine file
A: update registry value
{% endqna %}

# state of &lt;agent interface capability&gt; : string

Returns the state of a specific capability of a specific agent interface. For example:

{% qna %}
Q: state of capability "quarantine" of agent interface "EDR" of client
A: Off
{% endqna %}

If the capability specified does not exist, the inspector returns "Singular expression refers to nonexistent object".

The plural returns the states of the capabilities supported by a specific agent interface:

{% qna %}
Q: states of capabilities of agent interface "EDR" of client
A: Off
A: 
A: 
A: 
A: 
{% endqna %}

The capability "quarantine" is stateful, the possible states are "Off" and "Bigfix"; the remaining four remediation capabilities, instead, are stateless.

# &lt;agent interface capability&gt; as string : string

Returns the name and the state of a capability of an agent interface as a string, for example: "quarantine:Off"
