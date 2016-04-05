# type: SELinux Boolean

&lt;SELinux Boolean&gt; object represents an SELinux Boolean setting. The following relevance shows the list of Booleans and their current statuses similar to the result of running `getsebool -a` command.

{% qna %}
Q: (name of it, current status of it) of selinux booleans
A: allow_ypbind, False
A: allow_smbd_anon_write, False
A: allow_saslauthd_read_shadow, False
A: allow_rsync_anon_write, False
{% endqna %}

# current status of &lt;SELinux Boolean&gt; : boolean

Returns the current status value.

# name of &lt;SELinux Boolean&gt; : string

Returns the name of the Boolean value.

# pending status of &lt;SELinux Boolean&gt; : boolean

Returns the pending status value.
