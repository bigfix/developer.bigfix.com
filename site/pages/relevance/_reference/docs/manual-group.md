# type: manual group

This inspector returns information on the manual groups the client is member of.

{% qna %}
Q: manual groups of client
A: Physical systems
A: Windows systems
{% endqna %}

# member of &lt;manual group&gt; : boolean

This inspector returns true if the client is a member of the specified manual group. It returns a nonexistent object error if the client is not a member of the group.

{% qna %}
Q: member of manual group "Windows systems" of client
A: True
{% endqna %}

{% qna %}
Q: member of manual group "AIX systems" of client
E: Singular expression refers to nonexistent object.
{% endqna %}

# setting of &lt;manual group&gt; : setting

This inspector returns information on the setting used to define the manual group. It returns a nonexistent object error if the client is not a member of the group.

{% qna %}
Q: setting of manual group "Windows systems" of client
A: __Group_0_Windows systems=True
{% endqna %}

# &lt;manual group&gt; as string : string

