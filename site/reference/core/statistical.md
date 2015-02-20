---
title: statistical
---

## statistical bin

Statistical bins contain property information summed over all computers in a given time period.

#### variance of &lt;statistical bin&gt; : floating point

Returns the variance of the specified statistical bin.

#### total upper bound of &lt;statistical bin&gt; : floating point

Returns the upper bound of a group of statistical bins.

#### total lower bound of &lt;statistical bin&gt; : floating point

Returns the lower bound of a group of statistical bins.

#### success rate of &lt;statistical bin&gt; : floating point

The integral over time of the number of successful computers divided by the integral over time of the number of reporting computers.

#### start of &lt;statistical bin&gt; : time

Returns the starting time of the statistical bin.

#### standard deviation of &lt;statistical bin&gt; : floating point

Returns a floating point number representing the standard deviation of the data over the specified bin.

#### skewness of &lt;statistical bin&gt; : floating point

Returns a floating point number representing the skewness (a measure the assymetry of the data) over the specified bin.

#### minimum value of &lt;statistical bin&gt; : floating point

The minimum single value reported by any computer over the duration of the bin.

#### minimum single computer total of &lt;statistical bin&gt; : floating point

The minimum over time and computers of the total of simultaneous values. (Thus, for a singular property, the same as &quot;minimum value.&quot;).

#### mean zero value count of &lt;statistical bin&gt; : floating point

Provides a measure of zero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&#39;t interesting for any property that can be zero, so this inspector can be used to test for that issue.

#### mean value count of &lt;statistical bin&gt; : floating point

This is the integral over time of the number of values reported divided by the integral over time of the number of computers reporting. That is, this is a mean over both time and computers.

#### mean total of &lt;statistical bin&gt; : floating point

The integral over time of the sum of all values reported divided by the integral over time of the number of computers reporting this property (successfully or failing).

#### mean successful computer count of &lt;statistical bin&gt; : floating point

Returns the mean count of the computers where the inspection has succeeded.

#### mean sample rate of &lt;statistical bin&gt; : rate

This is the inverse of the mean sample interval.

#### mean sample interval of &lt;statistical bin&gt; : time interval

The sample interval is the time between consecutive samples on a single computer. The mean sample interval is the integral over time of the sum over computers of the sample interval divided by the integral over time of the number of reporting computers. This is the inverse of the mean sample rate.

#### mean of &lt;statistical bin&gt; : floating point

The integral over time of the sum of all reported values, divided by the integral over time of the number of reported values. The variance, standard deviation, skewness, and kurtosis inspectors have this same domain. In particular, computers that fail and computers that report no values don&#39;t affect these statistics.

#### mean nonzero value count of &lt;statistical bin&gt; : floating point

Provides a measure of nonzero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&#39;t interesting for any property that can be zero, so this inspector can be used to validate property statistics.

#### mean logarithm of &lt;statistical bin&gt; : floating point

The integral over time of the sum of the logarithms of the absolute values of all nonzero reported values, divided by the integral over time of the number of nonzero reported values.

#### mean failing computer count of &lt;statistical bin&gt; : floating point

Returns the mean count of the computers where the inspection has failed.

#### mean computer count of &lt;statistical bin&gt; : floating point

This is the integral over time of the number of computers reporting this property divided by the duration of the bin. It might be fractional if computers started or stopped reporting this property during the interval of the bin.

#### maximum value of &lt;statistical bin&gt; : floating point

The maximum single value reported by any computer over the duration of the bin.

#### maximum single computer total of &lt;statistical bin&gt; : floating point

Returns a floating point number representing the largest computer total in the specified bin.

#### logarithm variance of &lt;statistical bin&gt; : floating point

The variance of the logarithms of the absolute values of the nonzero reported values.

#### logarithm standard deviation of &lt;statistical bin&gt; : floating point

The standard deviation of the logarithms of the absolute values of the nonzero reported values.

#### logarithm skewness of &lt;statistical bin&gt; : floating point

The skewness of the logarithms of the absolute values of the nonzero reported values.

#### logarithm kurtosis of &lt;statistical bin&gt; : floating point

The kurtosis of the logarithms of the absolute values of the nonzero reported values.

#### linear fit of &lt;statistical bin&gt; : linear projection

Calculates a least-squares fit on the values, providing a tool for extrapolating a linear change of values.

#### length of &lt;statistical bin&gt; : time interval

Returns a time interval corresponding to the length (or period) of the specified bin.

#### kurtosis of &lt;statistical bin&gt; : floating point

Returns the kurtosis (a measure of the &quot;narrowness&quot; of the distribution) of the specified statistical bin.

#### javascript array &lt;string&gt; of &lt;statistical bin&gt; : html

Produces a section of JavaScript which initializes the named array of objects, one for each input bin. Each object in the array has JavaScript properties which match the above bin data properties. For each inspector property, the equivalent JavaScript property is named by CamelCasing the name of the inspector property.

#### geometric mean of &lt;statistical bin&gt; : floating point

Returns the geometric mean of the specified statistical bin.

#### failure rate of &lt;statistical bin&gt; : floating point

The integral over time of the number of failing computers divided by the integral over time of the number of reporting computers.

#### exponential fit of &lt;statistical bin&gt; : exponential projection

Calculates a least-squares fit on the sum of the logarithms of the absolute values of the values. This provides a way to extrapolate an exponential change of values.

#### end of &lt;statistical bin&gt; : time

Returns the ending time of the specified statistical bin.

## statistic range

Statistical ranges are time intervals used to examine particular statistical bins.

#### total of &lt;statistic range&gt; : statistical bin

Totals the bins over the specified range, producing a single summary bin. This allows you to reduce the data by constraining the range.

#### total &lt;time interval&gt; of &lt;statistic range&gt; : statistical bin

This inspector can be used to downsample or consolidate bins. It statistically totals over the given range, producing a new series of bins broken down by the (larger) specified time interval. The resulting range will start and end on a multiple of the interval. For example, if you ask for day bins, the results will start and end at midnight. If the specified time interval is not a multiple of the length of the starting bin of the range, this inspector throws NoSuchObject. For example, you cannot get 6 hour totals of a range which starts with day bins.

#### start of &lt;statistic range&gt; : time

Returns the starting time of the statistical range.

#### range &lt;time range&gt; of &lt;statistic range&gt; : statistic range

For the duration of the specified time range, (time0 to time1), this inspector returns a sub-range of bins beginning with earliest bin containing time0 and going up to (but not including) the bin containing time1. If either of these bins does not exist, it throws NoSuchObject.

#### end of &lt;statistic range&gt; : time

Returns the ending time of the statistical range.

#### bin of &lt;statistic range&gt; : statistical bin

Returns a list of the individual bins in the specified range. Primarily useful after downsampling (see total &lt;time interval&gt; of &lt;statistic range&gt;).

#### bin at &lt;time&gt; of &lt;statistic range&gt; : statistical bin

Returns the bin in the specified statistical range which brackets the given time. If no such bin exists, it throws NoSuchObject.

## rate with multiplicity

The &lt;rate with multiplicity&gt; inspectors deal with rate arrays, allowing you to extract unique rate values and count them.

#### multiplicity of &lt;rate with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;rate&gt; types.

## rate

Rates are floating point numbers divided by time intervals. These inspectors let you examine and convert rate objects.

#### &lt;rate&gt; as string : string

Casts a rate as a string.

#### unique value of &lt;rate&gt; : rate with multiplicity

Returns the unique values of a given list of &lt;rate&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;rate&gt; : rate

Returns the minimum value from a list of &lt;rate&gt; types.

#### maximum of &lt;rate&gt; : rate

Returns the maximum value from a list of &lt;rate&gt; types.

#### extrema of &lt;rate&gt; : ( rate, rate )

Returns the minimum and maximum extreme values of the given list of &lt;rate&gt; types.

## linear projection

The &lt;linear projection&gt; inspectors return statistical correlation information about the linearity of specific aggregated properties.

#### rate of &lt;linear projection&gt; : rate

Returns the slope of the linear projection. Multiply this by a time interval to compute the projected growth over that period.

#### extrapolation &lt;time&gt; of &lt;linear projection&gt; : floating point

Returns the projected value at the specified time, assuming a linear projection.

#### correlation coefficient of &lt;linear projection&gt; : floating point

Returns a floating-point number between -1 and 1, representing how well a linear projection fits the data.

## exponential projection

The &lt;exponential projection&gt; inspectors return statistical correlation information about the logarithms of the aggregated properties.

#### rate &lt;time interval&gt; of &lt;exponential projection&gt; : floating point

Returns the slope of the exponential projection over the specified time interval.

#### extrapolation &lt;time&gt; of &lt;exponential projection&gt; : floating point

Returns the projected value at the specified time, assuming an exponential projection.

#### correlation coefficient of &lt;exponential projection&gt; : floating point

Returns a floating-point number between -1 and 1, representing how well an exponential projection fits the data.

