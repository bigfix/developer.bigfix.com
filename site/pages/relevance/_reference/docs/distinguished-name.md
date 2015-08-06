# type: distinguished name

The `distinguished name` type represents an Active Directory or LDAP distinguished name.

# component &lt;integer&gt; of &lt;distinguished name&gt; : distinguished name component

Returns the nth component of the distinguished name.

{% qna %}
Q: component 1 of distinguished name "CN=bearmo,OU=bears,DC=example,DC=com"
A: OU=bears
{% endqna %}

# component of &lt;distinguished name&gt; : distinguished name component

Returns a list of the components of the distinguished name.

{% qna %}
Q: components of distinguished name "CN=bearmo,OU=bears,DC=example,DC=com"
A: CN=bearmo
A: OU=bears
A: DC=example
A: DC=com
{% endqna %}
