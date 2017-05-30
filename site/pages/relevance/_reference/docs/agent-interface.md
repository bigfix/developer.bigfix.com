# type: agent interface

It is a specific usage of the Agent to Agent dll which is an inter-agent communication channel.

# capability &lt;string&gt; of &lt;agent interface&gt; : agent interface capability

Returns the name and the state of a specific capability of a specific agent interface.

{% qna %}
Q: capability "quarantine" of agent interface "EDR" of client
A: quarantine:Off
{% endqna %}

# capability of &lt;agent interface&gt; : agent interface capability

Returns the name and the state of the capability supported by the agent interface. This is an example that uses plural:

{% qna %}
Q: capabilities of agent interface "EDR" of client
A: quarantine:Off
A: delete registry value
A: kill process
A: quarantine file
A: update registry value
{% endqna %}

The state is not returned by stateless remediation capabilities.

# client product of &lt;agent interface&gt; : string

Returns the client product name for a specific agent interface, for example:

{% qna %}
Q: client product of agent interface "EDR" of client
A: EDR
{% endqna %}

If that specific agent interface does not exist, the inspector returns "Singular expression refers to nonexistent object".

The plural returns client product names for all the agent interfaces:

{% qna %}
Q: client products of agent interfaces of client
A: EDR
A: DEV
{% endqna %}
