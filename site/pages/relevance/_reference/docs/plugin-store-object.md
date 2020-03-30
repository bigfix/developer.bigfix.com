# type: plugin store object

The &lt;plugin store object&gt; type represents a plugin store value. It contains a set of &lt;plugin store key&gt; objects, each with a name and value.

# plugin store &lt;string&gt; : plugin store object

Returns the plugin store object whose name matches the provided string.

{% qna %}
Q: plugin store "AWSAssetDiscoveryPlugin"
A: AWSAssetDiscoveryPlugin
{% endqna %}

# key &lt;string&gt; of &lt;plugin store object&gt; : plugin store key

Returns the plugin store key object whose name matches the provided string.

{% qna %}
Q: key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: NOsecureCustomKey1
{% endqna %}

# key of &lt;plugin store object&gt; : plugin store key

Returns a plugin store key of a plugin store object.

{% qna %}
Q: keys of plugin store "AWSAssetDiscoveryPlugin"
A: NOsecureCustomKey1
A: NOsecureCustomKey2
A: NOsecureCustomKey3
A: secureCustomKey1
A: secureCustomKey2
A: secureCustomKey3
{% endqna %}

# &lt;plugin store object&gt; as string : string

Returns a plugin store object as a string.
