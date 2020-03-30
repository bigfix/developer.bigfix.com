# type: plugin store key

The &lt;plugin store key&gt; type represents a key name in a plugin store object.

For example:

    {
      "UName"
    }

# name of &lt;plugin store key&gt; : string

Returns a key string object in a plugin store object.

{% qna %}
Q: name of key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: NOsecureCustomKey1
{% endqna %}

# value of &lt;plugin store key&gt; : string

Returns a value of a plugin store key in a plugin store object.

{% qna %}
Q: value of key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: value_1
{% endqna %}

# effective date of &lt;plugin store key&gt; : time

Returns the date when the key was last modified.

{% qna %}
Q: effective date of key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: 31 Jan 2007 21:09:36 gmt
{% endqna %}

# encrypted of &lt;plugin store key&gt; : boolean

Returns `True` if a specific plugin store key in a plugin store object is encrypted.

{% qna %}
Q: encrypted of "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: False
{% endqna %}

# &lt;plugin store key&gt; as string : string

Returns a key string object in a plugin store object.

{% qna %}
Q: key "NOsecureCustomKey1" of plugin store "AWSAssetDiscoveryPlugin"
A: NOsecureCustomKey1
{% endqna %}
