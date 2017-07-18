# type: hardware

This inspector holds various identifiers and information about the hardware on which the agent is running.

# proxied of &lt;hardware&gt; : boolean

Returns **true** if the device reports to a proxy agent. Otherwise returns false.

{% qna %}
Q: proxied of hardware
A: false
{% endqna %}

# serial of &lt;hardware&gt; : string

Returns the bios's serial number.

{% qna %}
Q: serial of hardware
A: VMware-42 22 c3 6e a0 bb 16 73-86 a8 e4 26 55 c0 3b 96
{% endqna %}

# uuid of &lt;hardware&gt; : uuid

Returns the bios's uuid.

{% qna %}
Q: uuid of hardware
A: 4222c36e-a0bb-1673-86a8-e42655c03b96
{% endqna %}

# virtual of &lt;hardware&gt; : boolean

Returns true or false depending on whether or not the client is running on a virtual machine.

{% qna %}
Q: virtual of hardware
A: false
{% endqna %}
