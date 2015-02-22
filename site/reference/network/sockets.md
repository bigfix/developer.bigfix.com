---
title: sockets
---

{% type socket %}

These inspectors expose the sockets opened on the network on the endpoint

#### Properties of socket

{% property local address of <socket> %}

Returns an &lt;ipv4or6 address&gt; representing the local address of the socket

{% property local port of <socket> %}

Returns an &lt;integer&gt; representing the local port number of the socket

{% property process of <socket> %}

Returns a &lt;process&gt; representing the local owner of the socket

{% property remote address of <socket> %}

Returns a &lt;ipv4or6 address&gt; representing the remote address of the socket

{% property remote port of <socket> %}

Returns an &lt;integer&gt; representing the remote port number of the socket

{% property tcp of <socket> %}

Returns true if the socket is a TCP socket

{% property tcp state of <socket> %}

Returns a &lt;tcp state&gt; of the socket

{% property udp of <socket> %}

Returns true if the socket is a UDP socket

{% type socket file %}

The &lt;socket file&gt; inspectors allow you to interrogate socket files, which are representations of UNIX domain sockets identified by their pathname.

#### Properties of socket file

{% property drive of <socket file> %}

Returns the drive associated with the specified socket file.

{% property filesystem of <socket file> %}

Returns the filesystem object corresponding to the specified socket file.

{% type tcp state %}

These inspectors expose the state of a socket on an endpoint

#### Properties of tcp state

{% property close wait of <tcp state> %}

Returns true if the state represented is CLOSE_WAIT

{% property closed of <tcp state> %}

Returns true if the state represented is CLOSED

{% property closing of <tcp state> %}

Returns true if the state represented is CLOSING

{% property delete tcb of <tcp state> %}

Returns true if the state represented is DELETE_TCB

{% property established of <tcp state> %}

Returns true if the state represented is ESTABLISHED

{% property fin wait one of <tcp state> %}

Returns true if the state represented is FIN_WAIT1

{% property fin wait two of <tcp state> %}

Returns true if the state represented is FIN_WAIT2

{% property last ack of <tcp state> %}

Returns true if the state represented is LAST_ACK

{% property listening of <tcp state> %}

Returns true if the state represented is LISTENING

{% property syn received of <tcp state> %}

Returns true if the state represented is SYN_RECEIVED

{% property syn sent of <tcp state> %}

Returns true if the state represented is SYN_SENT

{% property time wait of <tcp state> %}

Returns true if the state represented is TIME_WAIT

#### Casts of tcp state

{% cast <tcp state> as string %}

Cast a &lt;tcp state&gt; to a string representation

