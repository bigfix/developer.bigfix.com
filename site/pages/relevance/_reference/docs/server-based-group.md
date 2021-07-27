# type: server based group

This inspector returns information on the server based groups the client is member of.

{% qna %}
Q: server based groups of client
A: Correlated_running
A: Many
A: ServerBasedNative
{% endqna %}

# member of &lt;server based group&gt; : boolean

This inspector returns true if the client is a member of the specified server based group. It returns a nonexistent object error if the client is not a member of the group.

{% qna %}
Q: member of server based group "Windows Server based" of client
A: True
{% endqna %}

{% qna %}
Q: member of server based group "AIX group" of client
E: Singular expression refers to nonexistent object.
{% endqna %}

# setting of &lt;server based group&gt; : setting

This inspector returns information on the setting used to define the server based group.

{% qna %}
Q: setting of server based group "Windows Server based" of client
A: __Group_1_Windows Server based=True
{% endqna %}

# &lt;server based group&gt; as string : string

