# type: odm

The `odm` type corresponds to the AIX Object Data Manager.

# customized attribute &lt;string&gt; of &lt;odm&gt; : customized_attribute

Returns all customized attributes matching the supplied ODM query string.

For example, the equivalent of `odmget -q "name=hdisko and attribute=pvid" CuAt` is:

{% qna %}
Q: customized attribute "name=hdisk0 and attribute=pvid" of odm
{% endqna %}

# customized attribute of &lt;odm&gt; : customized_attribute

Iterates over all customized attributes of odm object repository.

# customized device &lt;string&gt; of &lt;odm&gt; : customized_device

Returns all customized devices matching the supplied ODM query string.

# customized device of &lt;odm&gt; : customized_device

Iterates over all customized devices of ODM object repository.

# predefined attribute &lt;string&gt; of &lt;odm&gt; : predefined_attribute

Returns all predefined attributes matching the supplied ODM query string.

# predefined attribute of &lt;odm&gt; : predefined_attribute

Iterates over all predefined attributes of odm object repository.

# predefined device &lt;string&gt; of &lt;odm&gt; : predefined_device

Returns all predefined devices matching the supplied ODM query string.

# predefined device of &lt;odm&gt; : predefined_device

Iterates over all predefined devices of ODM object repository.
