# monitor power interval

The &lt;monitor power interval&gt; inspectors return information about the monitors (displays) attached to a given computer. Each computer can have multiple monitors, and they can be either on or off. This information can be used in a power-usage study. Monitor intervals are retrieved as tuples in the form of &lt;interval, state, monitor count&gt;, where the interval contains the start and end time, the state (on or off) and the number of monitors that are attached to the computer.

# count of [monitor power interval]

Returns the number of &#39;monitor power&#39; intervals currently logged.

# range of [monitor power interval]

Returns the time range associated with the specified &#39;monitor power&#39; interval. This will provide you with the start and stop time for any particular monitor (display) state.

# state of [monitor power interval]

Returns the state of the specified &#39;monitor power&#39; interval. This state is one of the following:onoffinvalid.
