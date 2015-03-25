# type: mime field

The &amp;lt;mime field&amp;gt; inspectors deal with the MIME fields that constitute a Fixlet file. These fields typically start with &amp;#39;x-fixlet&amp;#39;. For instance, to return the value of a specific MIME field, you might use:mime fields &amp;quot;x-fixlet-cve&amp;quot; of bes fixlets

# name of &lt;mime field&gt; : string

Returns the names of the specified MIME fields. Fixlet files are in MIME format which may have several fields composed of name/value pairs.

# value of &lt;mime field&gt; : string

Returns the values of the specified MIME fields. Fixlet files are in MIME format which may have several iterated fields composed of name/value pairs.
