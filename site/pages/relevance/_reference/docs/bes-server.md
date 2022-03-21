# type: bes server

The &lt;bes server&gt; inspectors return information about the BES Server, allowing Dashboards and Web Reports to access files and other information from the BES database.

# database id of &lt;bes server&gt; : integer

Returns the integer database ID corresponding to the specified BES Server.

# database name of &lt;bes server&gt; : string

Returns the database name (as a &lt;string&gt;) corresponding to the specified BES Server.

# fxf character set of &lt;bes server&gt; : string

Returns the FXF Encoding IANA name of the encoding for your deployment. This encoding represents all FXF files that the server generates.

# hcl deployment flag of &lt;bes server&gt; : boolean

Returns True if the specified BES Server is deployed on HCL Now.

# url of &lt;bes server&gt; : string

Returns the URL of the specified BES Server, providing access to any files hosted on that server.
