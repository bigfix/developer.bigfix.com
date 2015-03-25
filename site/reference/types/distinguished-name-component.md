# type: distinguished name component

The `distinguished name component` type represents one component of a distinguished name.

# type of &lt;distinguished name component&gt; : string

Returns the type of distinguished name component.

{{#example}}
Q: type of component 1 of distinguished name &quot;CN=bearmo,OU=bears,DC=example,DC=com&quot;
A: OU
{{/example}}

# value of &lt;distinguished name component&gt; : string

Returns the value of the distinguished name component.

{{#example}}
Q: value of component 1 of distinguished name &quot;CN=bearmo,OU=bears,DC=example,DC=com&quot;
A: bears
{{/example}}
