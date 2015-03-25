# type: monitor power interval

The &amp;lt;monitor power interval&amp;gt; inspectors return information about the monitors (displays) attached to a given computer. Each computer can have multiple monitors, and they can be either on or off. This information can be used in a power-usage study. Monitor intervals are retrieved as tuples in the form of &amp;lt;interval, state, monitor count&amp;gt;, where the interval contains the start and end time, the state (on or off) and the number of monitors that are attached to the computer.

# count of &lt;monitor power interval&gt; : integer

Returns the number of &amp;#39;monitor power&amp;#39; intervals currently logged.

# range of &lt;monitor power interval&gt; : time range

Returns the time range associated with the specified &amp;#39;monitor power&amp;#39; interval. This will provide you with the start and stop time for any particular monitor (display) state.

# state of &lt;monitor power interval&gt; : power state

Returns the state of the specified &amp;#39;monitor power&amp;#39; interval. This state is one of the following:onoffinvalid.
