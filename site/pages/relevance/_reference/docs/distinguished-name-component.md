# type: distinguished name component

The `distinguished name component` type represents one component of a distinguished name.

# type of &lt;distinguished name component&gt; : string

Returns the type of distinguished name component.

{% qna %}
Q: type of component 1 of distinguished name "CN=bearmo,OU=bears,DC=example,DC=com"
A: OU
{% endqna %}

# value of &lt;distinguished name component&gt; : string

Returns the value of the distinguished name component.

{% qna %}
Q: value of component 1 of distinguished name "CN=bearmo,OU=bears,DC=example,DC=com"
A: bears
{% endqna %}
