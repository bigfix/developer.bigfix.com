# type: statistical bin

Statistical bins contain property information summed over all computers in a given time period.

# end of &lt;statistical bin&gt; : time

Returns the ending time of the specified statistical bin.

# exponential fit of &lt;statistical bin&gt; : exponential projection

Calculates a least-squares fit on the sum of the logarithms of the absolute values of the values. This provides a way to extrapolate an exponential change of values.

# failure rate of &lt;statistical bin&gt; : floating point

The integral over time of the number of failing computers divided by the integral over time of the number of reporting computers.

# geometric mean of &lt;statistical bin&gt; : floating point

Returns the geometric mean of the specified statistical bin.

# javascript array &lt;string&gt; of &lt;statistical bin&gt; : html

Produces a section of JavaScript which initializes the named array of objects, one for each input bin. Each object in the array has JavaScript properties which match the above bin data properties. For each inspector property, the equivalent JavaScript property is named by CamelCasing the name of the inspector property.

# kurtosis of &lt;statistical bin&gt; : floating point

Returns the kurtosis (a measure of the &amp;quot;narrowness&amp;quot; of the distribution) of the specified statistical bin.

# length of &lt;statistical bin&gt; : time interval

Returns a time interval corresponding to the length (or period) of the specified bin.

# linear fit of &lt;statistical bin&gt; : linear projection

Calculates a least-squares fit on the values, providing a tool for extrapolating a linear change of values.

# logarithm kurtosis of &lt;statistical bin&gt; : floating point

The kurtosis of the logarithms of the absolute values of the nonzero reported values.

# logarithm skewness of &lt;statistical bin&gt; : floating point

The skewness of the logarithms of the absolute values of the nonzero reported values.

# logarithm standard deviation of &lt;statistical bin&gt; : floating point

The standard deviation of the logarithms of the absolute values of the nonzero reported values.

# logarithm variance of &lt;statistical bin&gt; : floating point

The variance of the logarithms of the absolute values of the nonzero reported values.

# maximum single computer total of &lt;statistical bin&gt; : floating point

Returns a floating point number representing the largest computer total in the specified bin.

# maximum value of &lt;statistical bin&gt; : floating point

The maximum single value reported by any computer over the duration of the bin.

# mean computer count of &lt;statistical bin&gt; : floating point

This is the integral over time of the number of computers reporting this property divided by the duration of the bin. It might be fractional if computers started or stopped reporting this property during the interval of the bin.

# mean failing computer count of &lt;statistical bin&gt; : floating point

Returns the mean count of the computers where the inspection has failed.

# mean logarithm of &lt;statistical bin&gt; : floating point

The integral over time of the sum of the logarithms of the absolute values of all nonzero reported values, divided by the integral over time of the number of nonzero reported values.

# mean nonzero value count of &lt;statistical bin&gt; : floating point

Provides a measure of nonzero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&amp;#39;t interesting for any property that can be zero, so this inspector can be used to validate property statistics.

# mean of &lt;statistical bin&gt; : floating point

The integral over time of the sum of all reported values, divided by the integral over time of the number of reported values. The variance, standard deviation, skewness, and kurtosis inspectors have this same domain. In particular, computers that fail and computers that report no values don&amp;#39;t affect these statistics.

# mean sample interval of &lt;statistical bin&gt; : time interval

The sample interval is the time between consecutive samples on a single computer. The mean sample interval is the integral over time of the sum over computers of the sample interval divided by the integral over time of the number of reporting computers. This is the inverse of the mean sample rate.

# mean sample rate of &lt;statistical bin&gt; : rate

This is the inverse of the mean sample interval.

# mean successful computer count of &lt;statistical bin&gt; : floating point

Returns the mean count of the computers where the inspection has succeeded.

# mean total of &lt;statistical bin&gt; : floating point

The integral over time of the sum of all values reported divided by the integral over time of the number of computers reporting this property (successfully or failing).

# mean value count of &lt;statistical bin&gt; : floating point

This is the integral over time of the number of values reported divided by the integral over time of the number of computers reporting. That is, this is a mean over both time and computers.

# mean zero value count of &lt;statistical bin&gt; : floating point

Provides a measure of zero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&amp;#39;t interesting for any property that can be zero, so this inspector can be used to test for that issue.

# minimum single computer total of &lt;statistical bin&gt; : floating point

The minimum over time and computers of the total of simultaneous values. (Thus, for a singular property, the same as &amp;quot;minimum value.&amp;quot;).

# minimum value of &lt;statistical bin&gt; : floating point

The minimum single value reported by any computer over the duration of the bin.

# skewness of &lt;statistical bin&gt; : floating point

Returns a floating point number representing the skewness (a measure the assymetry of the data) over the specified bin.

# standard deviation of &lt;statistical bin&gt; : floating point

Returns a floating point number representing the standard deviation of the data over the specified bin.

# start of &lt;statistical bin&gt; : time

Returns the starting time of the statistical bin.

# success rate of &lt;statistical bin&gt; : floating point

The integral over time of the number of successful computers divided by the integral over time of the number of reporting computers.

# total lower bound of &lt;statistical bin&gt; : floating point

Returns the lower bound of a group of statistical bins.

# total upper bound of &lt;statistical bin&gt; : floating point

Returns the upper bound of a group of statistical bins.

# variance of &lt;statistical bin&gt; : floating point

Returns the variance of the specified statistical bin.
