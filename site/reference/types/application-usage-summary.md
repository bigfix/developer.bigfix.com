# application usage summary

To enable the &lt;application usage summary&gt; inspectors, you first need to create the client setting _BESClient_UsageManager_EnableAppUsageSummary and initialize it to 1. You must also configure the set of applications to monitor by creating the client setting _BESClient_UsageManager_EnableAppUsageSummaryApps and initializing it to a list of apps to include (or exclude). The value of this setting should look like +:app1:app2:app3: to add apps to the scope, and -:app1:app2: to exclude apps. The case is ignored. For instance, to only track summary usage on the Word application, use the value +:winword.exe:.

# first start time of [application usage summary]

Returns the start time of the specified application since the computer was configured to track it, regardless of reboots.

# instance of [application usage summary]

Returns a list of all the instances of a specified application usage summary.

# last start time of [application usage summary]

Returns the last time this specified application was started.Example: last start time of application usage summary &quot;winword.exe&quot; - Returns the date and time Word was last started.

# last time seen of [application usage summary]

Returns the last time this specified application was seen running.

# name of [application usage summary]

Returns the names of the applications that are currently enabled for usage summaries.

# running of [application usage summary]

Returns `True` if the specified application is currently running.

# total duration of [application usage summary]

Returns the total elapsed time that the specified application has been running.

# total run count of [application usage summary]

Returns the number of times that the specified application has been run since the client was configured to track it.
