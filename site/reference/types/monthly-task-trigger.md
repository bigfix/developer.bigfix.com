# type: monthly task trigger

The &lt;monthly task trigger&lt; inspectors deal with tasks that are triggered on a monthly basis. For example, a task might start at 9:00 AM on specific days of specific months. More information about this subset of task triggers can be found by searching for Monthly Trigger at the MSDN site.

# days run of &lt;monthly task trigger&gt; : day of month

Returns the days of the month during which the task will run.

# months run of &lt;monthly task trigger&gt; : month

Returns  the months of the year during which the task will run.

# random delay of &lt;monthly task trigger&gt; : time interval

Returns the upper limit of a random time delay that will be added to the trigger start time. The format is P&lt;days&lt;DT&lt;hours&lt;H&lt;minutes&lt;M&lt;seconds&lt;S. For example, P3DT6H represents a 3 day, 6 hour maximum, and the random time will be less than or equal to that value.

# run on last day in month of &lt;monthly task trigger&gt; : boolean

Returns `True` if the specified monthly trigger is set to run on the last day of the month.
