# type: monthlydow task trigger

The &amp;lt;monthlydow task trigger&amp;gt; inspectors deal with tasks that are triggered on a repeating day-of-the-week basis. For example, the task might start at 9:00 AM on specific days of the week, weeks of the month, or months of the year. More information about this subset of task triggers can be found by searching for MonthlyDOW Trigger at the MSDN site.

# days run of &lt;monthlydow task trigger&gt; : day of week

Returns the days of the month during which the monthly day-of-week task will run.

# months run of &lt;monthlydow task trigger&gt; : month

Returns  the months of the year during which the monthly day-of-week task will run.

# random delay of &lt;monthlydow task trigger&gt; : time interval

Returns the upper limit of a random time delay that will be added to the monthly day-of-week trigger start time. The format is P&amp;lt;days&amp;gt;DT&amp;lt;hours&amp;gt;H&amp;lt;minutes&amp;gt;M&amp;lt;seconds&amp;gt;S. For example, P3DT6H represents a 3 day, 6 hour maximum, and the random time will be less than or equal to that value.

# run on fifth week in month of &lt;monthlydow task trigger&gt; : boolean

Returns `True` if the monthly day-of-week trigger will run the task in the fifth week of the month.

# run on first week in month of &lt;monthlydow task trigger&gt; : boolean

Returns `True` if the monthly day-of-week trigger will run the task in the first week of the month.

# run on fourth week in month of &lt;monthlydow task trigger&gt; : boolean

Returns `True` if the monthly day-of-week trigger will run the task in the fourth week of the month.

# run on last week in month of &lt;monthlydow task trigger&gt; : boolean

Returns `True` if the monthly day-of-week trigger will run the task in the last week of the month.

# run on second week in month of &lt;monthlydow task trigger&gt; : boolean

Returns `True` if the monthly day-of-week trigger will run the task in the second week of the month.

# run on third week in month of &lt;monthlydow task trigger&gt; : boolean

Returns `True` if the monthly day-of-week trigger will run the task in the third week of the month.
