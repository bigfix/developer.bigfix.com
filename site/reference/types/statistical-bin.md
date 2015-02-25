# statistical bin

Statistical bins contain property information summed over all computers in a given time period.

# end of [statistical bin]

Returns the ending time of the specified statistical bin.

# exponential fit of [statistical bin]

Calculates a least-squares fit on the sum of the logarithms of the absolute values of the values. This provides a way to extrapolate an exponential change of values.

# failure rate of [statistical bin]

The integral over time of the number of failing computers divided by the integral over time of the number of reporting computers.

# geometric mean of [statistical bin]

Returns the geometric mean of the specified statistical bin.

# javascript array [string] of [statistical bin]

Produces a section of JavaScript which initializes the named array of objects, one for each input bin. Each object in the array has JavaScript properties which match the above bin data properties. For each inspector property, the equivalent JavaScript property is named by CamelCasing the name of the inspector property.

# kurtosis of [statistical bin]

Returns the kurtosis (a measure of the &quot;narrowness&quot; of the distribution) of the specified statistical bin.

# length of [statistical bin]

Returns a time interval corresponding to the length (or period) of the specified bin.

# linear fit of [statistical bin]

Calculates a least-squares fit on the values, providing a tool for extrapolating a linear change of values.

# logarithm kurtosis of [statistical bin]

The kurtosis of the logarithms of the absolute values of the nonzero reported values.

# logarithm skewness of [statistical bin]

The skewness of the logarithms of the absolute values of the nonzero reported values.

# logarithm standard deviation of [statistical bin]

The standard deviation of the logarithms of the absolute values of the nonzero reported values.

# logarithm variance of [statistical bin]

The variance of the logarithms of the absolute values of the nonzero reported values.

# maximum single computer total of [statistical bin]

Returns a floating point number representing the largest computer total in the specified bin.

# maximum value of [statistical bin]

The maximum single value reported by any computer over the duration of the bin.

# mean computer count of [statistical bin]

This is the integral over time of the number of computers reporting this property divided by the duration of the bin. It might be fractional if computers started or stopped reporting this property during the interval of the bin.

# mean failing computer count of [statistical bin]

Returns the mean count of the computers where the inspection has failed.

# mean logarithm of [statistical bin]

The integral over time of the sum of the logarithms of the absolute values of all nonzero reported values, divided by the integral over time of the number of nonzero reported values.

# mean nonzero value count of [statistical bin]

Provides a measure of nonzero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&#39;t interesting for any property that can be zero, so this inspector can be used to validate property statistics.

# mean of [statistical bin]

The integral over time of the sum of all reported values, divided by the integral over time of the number of reported values. The variance, standard deviation, skewness, and kurtosis inspectors have this same domain. In particular, computers that fail and computers that report no values don&#39;t affect these statistics.

# mean sample interval of [statistical bin]

The sample interval is the time between consecutive samples on a single computer. The mean sample interval is the integral over time of the sum over computers of the sample interval divided by the integral over time of the number of reporting computers. This is the inverse of the mean sample rate.

# mean sample rate of [statistical bin]

This is the inverse of the mean sample interval.

# mean successful computer count of [statistical bin]

Returns the mean count of the computers where the inspection has succeeded.

# mean total of [statistical bin]

The integral over time of the sum of all values reported divided by the integral over time of the number of computers reporting this property (successfully or failing).

# mean value count of [statistical bin]

This is the integral over time of the number of values reported divided by the integral over time of the number of computers reporting. That is, this is a mean over both time and computers.

# mean zero value count of [statistical bin]

Provides a measure of zero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&#39;t interesting for any property that can be zero, so this inspector can be used to test for that issue.

# minimum single computer total of [statistical bin]

The minimum over time and computers of the total of simultaneous values. (Thus, for a singular property, the same as &quot;minimum value.&quot;).

# minimum value of [statistical bin]

The minimum single value reported by any computer over the duration of the bin.

# skewness of [statistical bin]

Returns a floating point number representing the skewness (a measure the assymetry of the data) over the specified bin.

# standard deviation of [statistical bin]

Returns a floating point number representing the standard deviation of the data over the specified bin.

# start of [statistical bin]

Returns the starting time of the statistical bin.

# success rate of [statistical bin]

The integral over time of the number of successful computers divided by the integral over time of the number of reporting computers.

# total lower bound of [statistical bin]

Returns the lower bound of a group of statistical bins.

# total upper bound of [statistical bin]

Returns the upper bound of a group of statistical bins.

# variance of [statistical bin]

Returns the variance of the specified statistical bin.
