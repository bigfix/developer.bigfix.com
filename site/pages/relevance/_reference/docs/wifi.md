# type: wifi

These inspectors expose the WiFi adapters available on an endpoint.

# current network of &lt;wifi&gt; : wifi network

Returns the details about the network to which the adapter has joined to, if any.

{% qna %}
Q: (ssid of it | "no ssid", bssid of it | "no base station id", secured of it) of current networks of wifis of adapters of network
A: IBM, d4:d7:48:b0:d4:a0, True
T: 6882
{% endqna %}

# enabled of &lt;wifi&gt; : boolean

Returns a boolean that is true if the adapter has a powered-on antenna.

{% qna %}
Q: enabled of wifis of adapters of network
A: True
T: 3001
{% endqna %}

# encryption of &lt;wifi&gt; : string

Returns a string of the encryption type of the WiFi connection. eg: "WEP", "WPA2-PSK"

{% qna %}
Q: (name of it, secured of it, encryption of it) of current networks of wifis of adapters of network
A: awdl0, False, Unsecured
T: 34570
{% endqna %}

# name of &lt;wifi&gt; : string

Returns the name of the WiFi adapter.

{% qna %}
Q: names of wifis of adapters of network
A: {079BBBA9-8E93-4497-B4E1-309C1E30B6B5}
T: 2101
{% endqna %}

# secured of &lt;wifi&gt; : boolean

Returns a boolean that is true if the WiFi connection is secured.

{% qna %}
Q: (ssid of it | "no ssid", secured of it) of current networks of wifis of adapters of network
A: guest-wifi, True
T: 2304
{% endqna %}

# ssid of &lt;wifi&gt; : string

Returns a string of the SSID of the WiFi connection

{% qna %}
Q: (ssid of it | "no ssid", secured of it) of current networks of wifis of adapters of network
A: guest-wifi, True
T: 3112
{% endqna %}

# visible network of &lt;wifi&gt; : wifi network

Returns the details about any network that the adapter can currently detect. 

{% qna %}
Q: (ssid of it | "no ssid", secured of it, signal strength of it, channel band of it, channel number of it) of visible networks of wifis of adapters of network
A: wg-devdev, True, 44, 2.4GHz, 1
A: wg-devdev, True, 54, 5GHz, 132
A: wg-devdev, True, 68, 2.4GHz, 1
A: wg-guest, True, 68, 2.4GHz, 1
A: wg-devdev, True, 30, 5GHz, 64
T: 3653890
{% endqna %}
