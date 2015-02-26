# type: bes action parameter

A Fixlet can incorporate parameters in its associated Action(s). When the Fixlet becomes relevant to the network, the BES Console will prompt the user for the value of the parameter. For example, a Fixlet Action might need to start a Windows service specified by the Console user. When the the Action is taken, the Console would prompt for the name of the service. That value would then be passed down to the BES Client and substituted into the local Action script upon execution.

# name of &lt;bes action parameter&gt;

Returns the name of the specified Action parameter.

# value of &lt;bes action parameter&gt;

Returns the value associated with the specified Action parameter.
