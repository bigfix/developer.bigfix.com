# type: fixlet

The &lt;fixlet&gt; inspectors can provide important information about the fixlets at any site. These inspectors only work in the context of property evaluation, not Fixlet evaluation.

# header &lt;string&gt; of &lt;fixlet&gt; : fixlet_header

Returns the named header (case insensitive) of the specified fixlet. Fixlet headers are name:value pairs. Note that only ASCII characters are supported. If you use non-ASCII characters, an error message is thrown.

# header of &lt;fixlet&gt; : fixlet_header

Iterates over all the headers of the fixlet. Note that only ASCII characters are supported. If you use non-ASCII characters, an error message is thrown.

# id of &lt;fixlet&gt; : integer

Returns the numeric ID number of the specified fixlet.

# relevance of &lt;fixlet&gt; : boolean

Returns a boolean TRUE or False, depending on the Relevance of the specified fixlet.

# site of &lt;fixlet&gt; : site

Returns the site corresponding to the specified fixlet.
