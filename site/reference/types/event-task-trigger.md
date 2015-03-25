# type: event task trigger

The &lt;event task trigger&lt; inspectors deal with tasks that are triggered by a specific event, such as a system start, logon or idle. More information about event task triggers can be found by searching for Task Triggers at the MSDN site.

# delay of &lt;event task trigger&gt; : time interval

Returns a value indicating the amount of time lapsed between the event trigger and the start of the task.

# subscription of &lt;event task trigger&gt; : string

Returns the XPath query string identifying the trigger event.

# value query of &lt;event task trigger&gt; : task named value pair

Returns a list of named XPath queries as name-value pairs. Each query in the list is applied to the last matching event XML returned from the subscription query specified in the Subscription property. The name of the query can be used as a variable in the message of a ShowMessage action.
