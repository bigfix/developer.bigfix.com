# type: plugin store key

The &lt;plugin store key&gt; type represents a key of a plugin store object.
Each key object has a "name" and a "value".

# name of &lt;plugin store key&gt; : string

Returns the name of a plugin store key.

{% qna %}
Q: name of key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: NOsecureCustomKey1
{% endqna %}

{% qna %}
Q: name of key "Base_Version" of plugin store "VMwareAssetDiscoveryPlugin"
A: Base_Version
{% endqna %}

# value of &lt;plugin store key&gt; : string

Returns the value of a plugin store key.

{% qna %}
Q: value of key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: value_1
{% endqna %}

{% qna %}
Q: value of key "Base_Version" of plugin store "VMwareAssetDiscoveryPlugin"
A: 1.1.59
{% endqna %}

# effective date of &lt;plugin store key&gt; : time

Returns the date when the plugin store key was last modified.

{% qna %}
Q: effective date of key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: 31 Jan 2007 21:09:36 gmt
{% endqna %}

# encrypted of &lt;plugin store key&gt; : boolean

Returns `True` if a specific plugin store key is encrypted.

{% qna %}
Q: encrypted of "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: False
{% endqna %}

# &lt;plugin store key&gt; as string : string

Returns a plugin store key as a string.
