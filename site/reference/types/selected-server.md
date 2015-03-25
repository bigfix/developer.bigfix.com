# type: selected server

The &amp;lt;selected server&amp;gt; inspectors return information about the BES Server or BES Relay to which the BigFix agent reports.

# competition size of &lt;selected server&gt; : integer

The number of servers in the competition from which this server was selected.

# competition weight of &lt;selected server&gt; : integer

The total of the weights of the servers in the competition from which this server was selected.

# distance of &lt;selected server&gt; : integer range

The distance, in IP gateway hops, to the server. Among servers with the same priority, closer servers are preferred. Returns an integer range, since the exact distance may not be known.

# full gateway address of &lt;selected server&gt; : ipv4or6 address

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  That list is accessible through this inspector. Unlike the &amp;#39;gateway address&amp;#39; inspector, this inspector includes hops that don&amp;#39;t reply as 0.0.0.0.

# gateway address &lt;integer&gt; of &lt;selected server&gt; : ipv4or6 address

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  The elements of that list is accessible through this inspector.Prior to version 8.0, this inspector returned an &amp;lt;ipv4 address&amp;gt; type.

# gateway address of &lt;selected server&gt; : ipv4or6 address

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  That list is accessible through this inspector. However, this inspector ignores hops that don&amp;#39;t reply. If you need the full list, use the &amp;#39;full gateway address&amp;#39; inspector.Prior to version 8.0, this inspector returned an &amp;lt;ipv4 address&amp;gt; type.

# ip address of &lt;selected server&gt; : ipv4or6 address

The ipv4or6 address to which reports are sent.Prior to version 8.0, this inspector returned an &amp;lt;ipv4 address&amp;gt; type.

# name of &lt;selected server&gt; : string

The DNS name of the server, if known.

# port number of &lt;selected server&gt; : integer

The port number to which reports are sent.

# priority of &lt;selected server&gt; : integer

The priority assigned to the server by the BES console. Servers with low priorities are preferred to servers with high priority.

# weight of &lt;selected server&gt; : integer

The weight assigned to the server by the BES console. Servers with the same priority and approximate distance compete to be chosen; servers with higher weights are more likely to be chosen.
