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

#### For AIX

This is the serial number for the physical hardware. Virtualized LPARs running on the same host hardware all return the same serial number.

# uuid of &lt;hardware&gt; : uuid

Returns the bios's uuid.

{% qna %}
Q: uuid of hardware
A: 4222c36e-a0bb-1673-86a8-e42655c03b96
{% endqna %}

#### For AIX

The UUID is created using the AIX installation's LPAR number.

# virtual of &lt;hardware&gt; : boolean

Returns **true** if the client is running on a virtual machine.

{% qna %}
Q: virtual of hardware
A: false
{% endqna %}

#### For AIX

Returns **true** if the operating system is hosted on a virtualized LPAR (determined by finding a virtual SCSI adapter or virtual Fibre Channel adapter).
Returns **false** if the operating system is hosted on a physical LPAR.
