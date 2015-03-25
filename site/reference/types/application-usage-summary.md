# type: application usage summary

To enable the `application usage summary` inspectors, you first need to create the client setting `_BESClient_UsageManager_EnableAppUsageSummary` and initialize it to `&quot;1&quot;`. You must also configure the set of applications to monitor by creating the client setting `_BESClient_UsageManager_EnableAppUsageSummaryApps` and initializing it to a list of applications to include or exclude.

The value of this setting should look like `+:app1:app2:app3:` to add applications to the scope, and `-:app1:app2:` to exclude applications. The case is ignored. For instance, to only track summary usage on the Word application, use the value `+:winword.exe:`.

# first start time of &lt;application usage summary&gt; : time

Returns the start time of the specified application since the computer was configured to track it, regardless of reboots.

# instance of &lt;application usage summary&gt; : application usage summary instance

Returns a list of all the instances of a specified application usage summary.

# last start time of &lt;application usage summary&gt; : time

Returns the last time this specified application was started.Example: last start time of application usage summary &amp;quot;winword.exe&amp;quot; - Returns the date and time Word was last started.

# last time seen of &lt;application usage summary&gt; : time

Returns the last time this specified application was seen running.

# name of &lt;application usage summary&gt; : string

Returns the names of the applications that are currently enabled for usage summaries.

# running of &lt;application usage summary&gt; : boolean

Returns `True` if the specified application is currently running.

# total duration of &lt;application usage summary&gt; : time interval

Returns the total elapsed time that the specified application has been running.

# total run count of &lt;application usage summary&gt; : integer

Returns the number of times that the specified application has been run since the client was configured to track it.
