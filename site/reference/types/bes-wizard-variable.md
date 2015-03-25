# type: bes wizard variable

The &lt;bes wizard variable&lt; objects are Console-only inspectors that return a list of the available BES Wizard variables.

# name of &lt;bes wizard variable&gt; : string

Returns the name of the specified Wizard variable.

# private flag of &lt;bes wizard variable&gt; : boolean

Returns the private flag of the given &lt;bes wizard variable&lt; (private vars are CONSOLE only).

# value of &lt;bes wizard variable&gt; : string

Returns the value of the given BES Wizard variable.

# wizard of &lt;bes wizard variable&gt; : bes wizard

Returns the &lt;bes wizard&lt; object to which the specified variable belongs. You can use "dashboard id of wizard of &lt;bes wizard variable&lt;" to get the correct dashboard id to use with the Store/DeleteVariable script functions (private variables are CONSOLE only).
