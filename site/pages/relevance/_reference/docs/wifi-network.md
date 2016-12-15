# type: wifi network

The type returned by both "current network of" and "visible networks of" objects.

# bssid of &lt;wifi network&gt; : string

Returns the hardware MAC address of the base station.

{% qna %}
Q: (ssid of it | "no ssid", bssid | "no base station id") of current networks of wifis of adapters of network
A: VISITORS, d4:d7:48:b0:d4:a2
T: 4950
{% endqna %}

# channel band of &lt;wifi network&gt; : string

Returns whether the network channel is in the 2.4 or in the 5GHz range.

{% qna %}
Q: (ssid of it | "no ssid", channel band of it) of current networks of wifis of adapters of network
A: VISITORS, 2.4GHz
T: 5850
{% endqna %}

# channel number of &lt;wifi network&gt; : integer

Returns the number of the channel that is being used.

{% qna %}
Q: (ssid of it | "no ssid", channel band of it, channel number of it) of current networks of wifis of adapters of network
A: VISITORS, 2.4GHz, 1
T: 5960
{% endqna %}

# ibss of &lt;wifi network&gt; : boolean

Returns if True the network is "independent", or False if it is ad-hoc.

{% qna %}
Q: (ssid of it | "no ssid", secured of it, ibss of it, rssi of it, signal strenght of it, channel band of it, channel number of it) of current networks of wifis of adapters of network
A: VISITORS, False, False
T: 5954
{% endqna %}

# rssi of &lt;wifi network&gt; : integer

Returns the received signal strength indicator.

{% qna %}
Q: (ssid of it | "no ssid", bssid | "no base station id", secured of it, ibss of it, rssi of it) of current networks of wifis of adapters of network
A: VISITORS, d4:d7:48:b0:d4:a2, False, False, -39
T: 4953
{% endqna %}

# secured of &lt;wifi network&gt; : boolean

Returns if the network requires encryption.

{% qna %}
Q: (ssid of it | "no ssid", secured of it) of current networks of wifis of adapters of network
A: VISITORS, False
T: 3850
{% endqna %}

# signal strength of &lt;wifi network&gt; : integer

Returns the signal quality. The quality ranges from 0 to 100, being 100 the highest signal quality.

{% qna %}
Q: (ssid of it | "no ssid", signal strenght of it, channel band of it, channel number of it) of current networks of wifis of adapters of network
A: VISITORS, 90, 2.4GHz, 1
T: 5950
{% endqna %}

# ssid of &lt;wifi network&gt; : string

Returns the name of the network.

{% qna %}
Q: ssid of visible networks of wifis of adapters of network
A: VISITORS
A: OFFICE-A
A: OFFICE-B
A: OFFICE-C
T: 7950
{% endqna %}
