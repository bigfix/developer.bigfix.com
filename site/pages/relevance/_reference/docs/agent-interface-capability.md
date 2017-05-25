# type: agent interface capability

The name and the state of a specific capability of a specific agent interface. 

# error code of &lt;agent interface capability&gt; : integer

Returns the last quarantine result from the BigFix Detect agent. For example:

{% qna %}
Q: error code of capability "quarantine" of agent interface "EDR" of client
A: 0
{% endqna %}

These are the available codes:

{% qna %}
    a2a_ok               =  0
    a2a_inProcess        = -1024
    a2a_noSession        = -1025
    a2a_timeout          = -1026
    a2a_noMemory         = -1027
    a2a_ReqRspMismatch   = -1028
    a2a_NoSuchCapability = -1029
    a2a_invalidParameter = -1030
    a2a_generalException = -1031
    a2a_resourceExceeded = -1032
    a2a_StateUnknown     = -1033 
{% endqna %}

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
