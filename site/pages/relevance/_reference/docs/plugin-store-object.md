# type: plugin store object

The &lt;plugin store object&gt; type represents a plugin store value. It is a name and value property.

# key of &lt;plugin store key&gt; of &lt;plugin store object&gt; : plugin store key

Returns a key object whose name matches the string provided.

{% qna %}
Q: key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: NOsecureCustomKey1
{% endqna %}

# key of &lt;plugin store object&gt; : plugin store key

Returns a key object whose name matches the string provided.

{% qna %}
Q: keys of plugin store "AWSAssetDiscoveryPlugin"
A: NOsecureCustomKey1
A: NOsecureCustomKey2
A: NOsecureCustomKey3
A: secureCustomKey1
A: secureCustomKey2
A: secureCustomKey3
{% endqna %}
