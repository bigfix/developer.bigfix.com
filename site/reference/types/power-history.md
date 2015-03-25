# type: power history

The &amp;lt;power history&amp;gt; inspectors retrieve information about your client computers and their displays within a tracking window (defaulting to 14 days). The information is in the form of a list of &amp;lt;interval, state&amp;gt; tuples for the system (computer) and &amp;lt;interval, state, monitor count&amp;gt; for monitors (attached displays). The first element of the list is the current state of the system. These inspectors allow you to track computer usage for power management applications. The event lists are fetched from the client whenever &amp;#39;power history&amp;#39; is referenced, and referencing &amp;#39;system intervals of &amp;lt;power history&amp;gt;&amp;#39; simply iterates over the built list of intervals. Avoid referencing &amp;#39;power history&amp;#39; multiple times in relevance as it rebuilds the list each time (increasing overhead) and may introduce inconsistency if the window slides between references.

# current monitor interval of &lt;power history&gt; : monitor power interval

Returns a monitor power interval reflecting how long the monitor has been turned on for the specified power history.

# current system interval of &lt;power history&gt; : system power interval

Returns the most recent interval of the system intervals list.

# last monitor interval in &lt;power state&gt; of &lt;power history&gt; : monitor power interval

Returns the last time interval for the display monitor as logged in the power history. You must specify the power state you are interested in (either monitor on or monitor off).

# last monitor interval in monitor off state of &lt;power history&gt; : monitor power interval

Returns the last time interval during which the display monitor was OFF from the specified power history.

# last monitor interval in monitor on state of &lt;power history&gt; : monitor power interval

Returns the last time interval during which the display monitor was ON from the specified power history.

# last system interval in &lt;power state&gt; of &lt;power history&gt; : system power interval

Returns the power interval corresponding to the last time the computer system was in the specified power state (active, idle, logged off, off, standby) as logged in the power history.

# last system interval in active state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last active state of the computer system, as logged in the given power history.

# last system interval in idle state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last idle state of the computer system, as logged in the given power history.

# last system interval in logged off state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last logged off state of the computer system, as logged in the given power history.

# last system interval in off state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last off state of the computer system, as logged in the given power history.

# last system interval in standby state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last standby state of the computer system, as logged in the given power history.

# monitor interval of &lt;power history&gt; : monitor power interval

Returns the interval corresponding to the &amp;#39;monitor power&amp;#39; entry in the specified power history.

# system interval of &lt;power history&gt; : system power interval

Returns a list of computer states and their start and end times ( for example the computer was idle from Wed, 15 Sep 2010 12:30:00 -0700 to Wed, 15 Sep 2010 18:22:00 -0700, which is an interval of 5:52:00   ).
