# type: Xinetd Service

&lt;Xinetd Service&gt; objects represent Unix xinetd (extended Internet daemon) services. 

# disabled of &lt;Xinetd Service&gt; : boolean

Returns `True` if the service is disabled.

# flag of &lt;Xinetd Service&gt; : string

Returns the flags for the service.

# id of &lt;Xinetd Service&gt; : string

Returns the id of the service.

# name of &lt;Xinetd Service&gt; : string

Returns the name of the service.

# no access of &lt;Xinetd Service&gt; : string

Returns the 'no_access' blacklist of hosts that are not allowed to use this service.

# only from of &lt;Xinetd Service&gt; : string

Returns the 'only_from' whitelist of hosts that are allowed to use this service.

# port of &lt;Xinetd Service&gt; : integer

Returns the port number that this service uses.

# protocol of &lt;Xinetd Service&gt; : string

Returns the protocol that this service uses.

# server arg of &lt;Xinetd Service&gt; : string

Returns the list of server arguments passed to this service.

# server of &lt;Xinetd Service&gt; : string

Returns the program used to execute this service.

# socket type of &lt;Xinetd Service&gt; : string

Returns the type of socket this service uses.

# type of &lt;Xinetd Service&gt; : string

Returns the type for this service.

# user of &lt;Xinetd Service&gt; : string

Returns the user this service runs as.

# wait of &lt;Xinetd Service&gt; : boolean

Returns `True` if the service is single-threaded and uses the server to accept connections. `False` if the service is multi-threaded and uses xinetd to accept connections.
