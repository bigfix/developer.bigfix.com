# type: socket

These inspectors expose the sockets opened on the network on the endpoint.

# local address of &lt;socket&gt; : ipv4or6 address

Returns the local address of the socket.

{% qna %}
Q: unique values of local addresses of sockets of network
A: 0.0.0.0
A: 10.0.2.15
A: 127.0.0.1
A: 0:0:0:0:0:0:0:0
A: 0:0:0:0:0:0:0:1
A: fe80:0:0:0:3422:3b00:e7f8:c486
A: fe80:0:0:0:3c5b:1dd4:2963:510e
{% endqna %}

# local port of &lt;socket&gt; : integer

Returns the local port number of the socket.

{% qna %}
Q: unique values of local ports of sockets of network
A: 135
A: 137
A: 138
A: 139
A: 445
A: 546
{% endqna %}

# process of &lt;socket&gt; : process

Returns the process that owns the socket.

{% qna %}
Q: unique values of names of processes of sockets of network
A: System
A: chrome.exe
A: javaw.exe
{% endqna %}

# remote address of &lt;socket&gt; : ipv4or6 address

Returns the remote address of the socket.

{% qna %}
Q: unique values of remote addresses of sockets of network
A: 74.125.25.103
A: 127.0.0.1
{% endqna %}

# remote port of &lt;socket&gt; : integer

Returns the remote port number of the socket.

{% qna %}
Q: unique values of remote ports of sockets of network
A: 443
A: 49707
A: 49708
{% endqna %}

# rtt of &lt;socket&gt; : time interval

Returns the round-trip time (RTT) of the TCP socket connections in the "ESTABLISHED" state. Such time is stored in a `time interval` object and expressed in the "hh.mm.ss.us" format.
When the rtt property is called on a UDP socket, or on a TCP socket whose connection state is not "ESTABLISHED", the "Singular expression refers to non-unique object" error is thrown by the inspector.

The following example shows the RTTs of the TCP socket connections in the "ESTABLISHED" state.

{% qna %}
Q: rtts of sockets of network
A: 00:00:00.000010
A: 00:00:00.000530
A: 00:00:00.000013
A: 00:00:00.000052
{% endqna %}

The following example shows how RTT may be used together with the `id` and `name` property of the `process` inspector.

{% qna %}
Q: ((ids of it, names of it) of processes of it, rtts of it) of sockets whose (tcp of it = True AND tcp state of it as string = "ESTABLISHED") of network
A: (3648, sqlserv.exe), 00:00:00.000010
A: (3152, BuilService.exe), 00:00:00.000530
A: (2924, FillDB.exe), 00:00:00.000013
A: (3060, firefox.exe), 00:00:00.000052
{% endqna %}

# tcp of &lt;socket&gt; : boolean

Returns `True` if the socket is a TCP socket.

{% qna %}
Q: unique values of remote ports of sockets whose (tcp of it) of network
A: 80
A: 443
A: 49707
A: 49708
{% endqna %}

# tcp state of &lt;socket&gt; : tcp state

Returns the tcp state of the socket.

{% qna %}
Q: (remote ports of it, tcp states of it) of sockets whose (tcp of it) of network
A: 443, TIME_WAIT
A: 80, TIME_WAIT
A: 443, ESTABLISHED
A: 49708, ESTABLISHED
A: 49707, ESTABLISHED
{% endqna %}

# udp of &lt;socket&gt; : boolean

Returns `True` if the socket is a UDP socket.

{% qna %}
Q: exists socket whose (udp of it) of network
A: True
{% endqna %}
