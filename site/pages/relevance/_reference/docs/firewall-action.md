# type: firewall action

The `firewall action` object type represents the kind of action that a `firewall rule` is set to perform, like blocking or allowing network traffic. On Windows, this type is a wrapper around the NET_FW_ACTION enumerated type.

The **"firewall action"** type can have the following values:  
- **0**: Block traffic.
- **1**: Allow traffic.
- **2**: Maximum traffic.

On Windows, all three values are valid. On macOS only the first two values are valid.

# &lt;firewall action&gt; = &lt;firewall action&gt; : boolean

Compares two firewall actions and returns `True` if they are equal.

Example running the QnA on a Windows and Mac computer showing if the firewall actions are equal or not.

{% qna %}
Q: firewall action 1 = firewall action 1
A: True
{% endqna %}

{% qna %}
Q: firewall action 1 = firewall action 0
A: False
{% endqna %}
