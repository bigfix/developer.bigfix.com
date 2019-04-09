# type: evaluation cycle

An Evaluation cycle represents a complete run through all the content available on the BigFix Client, measured in milliseconds. These inspectors return statistics based on the time sampled whenever the client returns to the beginning of its content set. These inspectors require a Client context.

# action duration of &lt;evaluation cycle&gt; : time interval

Time taken performing action processing since agent start

# action percent of &lt;evaluation cycle&gt; : floating point

Percentage of total time taken performing action processing since agent start

# api duration of &lt;evaluation cycle&gt; : time interval

Time taken performing client api processing since agent start

# api percent of &lt;evaluation cycle&gt; : floating point

Percentage of total time taken performing client api processing since agent start

# archive duration of &lt;evaluation cycle&gt; : time interval

Time taken performing archive processing since agent start

# archive percent of &lt;evaluation cycle&gt; : floating point

Percentage of total time taken performing archive processing since agent start

# average duration of &lt;evaluation cycle&gt; : time interval

No documentation exists.

# average of &lt;evaluation cycle&gt; : integer

Returns the average time, in milliseconds, that it takes to evaluate a given BigFix Client content set. The average is based on the last ten cycles.Example: average of evaluationcycle of client - Returns the average evaluation cycle time in milliseconds.

# client query duration of &lt;evaluation cycle&gt; : time interval

Time taken evaluating a BigFix query in client context since agent start.

# client query percent of &lt;evaluation cycle&gt; : floating point

Percentage of total time taken evaluating a BigFix query in client context since agent start.

# gather duration of &lt;evaluation cycle&gt; : time interval

Time taken performing gather processing since agent start

# gather percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing gather processing since agent start

# maximum duration of &lt;evaluation cycle&gt; : time interval

No documentation exists.

# maximum of &lt;evaluation cycle&gt; : integer

Returns the maximum time, in milliseconds, that it takes to evaluate a given BigFix Client content set.

# other duration of &lt;evaluation cycle&gt; : time interval

Time taken performing other (unclassified) processing since agent start

# other percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing other (unlassified) processing since agent start

# property duration of &lt;evaluation cycle&gt; : time interval

Time taken performing property processing since agent start

# property percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing property processing since agent start

# quiet mode duration of &lt;evaluation cycle&gt; : time interval

Time taken performing quiet mode processing since agent start

# quiet mode percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing quite mode processing since agent start

# relay select duration of &lt;evaluation cycle&gt; : time interval

Time taken performing relay select processing since agent start

# relay select percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing relay select processing since agent start

# relevance duration of &lt;evaluation cycle&gt; : time interval

Time taken performing relevance processing since agent start

# relevance percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing relevance processing since agent start

# report duration of &lt;evaluation cycle&gt; : time interval

Time taken performing report processing since agent start

# report percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing report processing since agent start

# sleep duration of &lt;evaluation cycle&gt; : time interval

Time taken sleeping since agent start

# sleep percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken sleeping since agent start

# total duration of &lt;evaluation cycle&gt; : time interval

Total time since agent start

# track fixlet of &lt;evaluation cycle&gt; : string

Returns tracking statistics of fixlets with the longest evaluation time. Number of fixlets tracked depends on Tracking settings. Default is top 10 fixlets.
