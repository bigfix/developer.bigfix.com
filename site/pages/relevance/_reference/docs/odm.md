# type: odm

The `odm` type corresponds to the AIX Object Data Manager.
The properties of the `odm` inspector return objects of a type matching the object classes of the AIX [odmget command](https://www.ibm.com/support/knowledgecenter/ssw_aix_71/o_commands/odmget.html).

This is the correspondence table of BigFix object types to AIX omdget object class.
`customized_attribute` -> `CuAt`
`customized_device` -> `CuDv`
`predefined_attribute` -> `PdAt`
`predefined_device` -> `PdDv`


# customized attribute &lt;string&gt; of &lt;odm&gt; : customized_attribute

Returns all customized attributes matching the supplied ODM query string. It refers to the object class `CuAt`.

For example, the equivalent of `odmget -q "name=hdisko and attribute=pvid" CuAt` is:

{% qna %}
Q: customized attribute "name=hdisk0 and attribute=pvid" of odm
{% endqna %}

# customized attribute of &lt;odm&gt; : customized_attribute

Iterates over all customized attributes of odm object repository. It refers to the object class `CuAt`.

# customized device &lt;string&gt; of &lt;odm&gt; : customized_device

Returns all customized devices matching the supplied ODM query string. It refers to the object class `CuDv`.

# customized device of &lt;odm&gt; : customized_device

Iterates over all customized devices of ODM object repository. It refers to the object class `CuDv`.

# predefined attribute &lt;string&gt; of &lt;odm&gt; : predefined_attribute

Returns all predefined attributes matching the supplied ODM query string. It refers to the object class `PdAt`.

# predefined attribute of &lt;odm&gt; : predefined_attribute

Iterates over all predefined attributes of odm object repository. It refers to the object class `PdAt`.

# predefined device &lt;string&gt; of &lt;odm&gt; : predefined_device

Returns all predefined devices matching the supplied ODM query string. It refers to the object class `PdDv`.

# predefined device of &lt;odm&gt; : predefined_device

Iterates over all predefined devices of ODM object repository. It refers to the object class `PdDv`.
