---
title: statistical
---

{% type statistical bin%}

Statistical bins contain property information summed over all computers in a given time period.

#### Properties

{% property variance of <statistical bin> %}

Returns the variance of the specified statistical bin.

{% property total upper bound of <statistical bin> %}

Returns the upper bound of a group of statistical bins.

{% property total lower bound of <statistical bin> %}

Returns the lower bound of a group of statistical bins.

{% property success rate of <statistical bin> %}

The integral over time of the number of successful computers divided by the integral over time of the number of reporting computers.

{% property start of <statistical bin> %}

Returns the starting time of the statistical bin.

{% property standard deviation of <statistical bin> %}

Returns a floating point number representing the standard deviation of the data over the specified bin.

{% property skewness of <statistical bin> %}

Returns a floating point number representing the skewness (a measure the assymetry of the data) over the specified bin.

{% property minimum value of <statistical bin> %}

The minimum single value reported by any computer over the duration of the bin.

{% property minimum single computer total of <statistical bin> %}

The minimum over time and computers of the total of simultaneous values. (Thus, for a singular property, the same as &quot;minimum value.&quot;).

{% property mean zero value count of <statistical bin> %}

Provides a measure of zero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&#39;t interesting for any property that can be zero, so this inspector can be used to test for that issue.

{% property mean value count of <statistical bin> %}

This is the integral over time of the number of values reported divided by the integral over time of the number of computers reporting. That is, this is a mean over both time and computers.

{% property mean total of <statistical bin> %}

The integral over time of the sum of all values reported divided by the integral over time of the number of computers reporting this property (successfully or failing).

{% property mean successful computer count of <statistical bin> %}

Returns the mean count of the computers where the inspection has succeeded.

{% property mean sample rate of <statistical bin> %}

This is the inverse of the mean sample interval.

{% property mean sample interval of <statistical bin> %}

The sample interval is the time between consecutive samples on a single computer. The mean sample interval is the integral over time of the sum over computers of the sample interval divided by the integral over time of the number of reporting computers. This is the inverse of the mean sample rate.

{% property mean of <statistical bin> %}

The integral over time of the sum of all reported values, divided by the integral over time of the number of reported values. The variance, standard deviation, skewness, and kurtosis inspectors have this same domain. In particular, computers that fail and computers that report no values don&#39;t affect these statistics.

{% property mean nonzero value count of <statistical bin> %}

Provides a measure of nonzero values, which is useful in interpreting the logarithmic results, which ignore zero values. The logarithmic results generally aren&#39;t interesting for any property that can be zero, so this inspector can be used to validate property statistics.

{% property mean logarithm of <statistical bin> %}

The integral over time of the sum of the logarithms of the absolute values of all nonzero reported values, divided by the integral over time of the number of nonzero reported values.

{% property mean failing computer count of <statistical bin> %}

Returns the mean count of the computers where the inspection has failed.

{% property mean computer count of <statistical bin> %}

This is the integral over time of the number of computers reporting this property divided by the duration of the bin. It might be fractional if computers started or stopped reporting this property during the interval of the bin.

{% property maximum value of <statistical bin> %}

The maximum single value reported by any computer over the duration of the bin.

{% property maximum single computer total of <statistical bin> %}

Returns a floating point number representing the largest computer total in the specified bin.

{% property logarithm variance of <statistical bin> %}

The variance of the logarithms of the absolute values of the nonzero reported values.

{% property logarithm standard deviation of <statistical bin> %}

The standard deviation of the logarithms of the absolute values of the nonzero reported values.

{% property logarithm skewness of <statistical bin> %}

The skewness of the logarithms of the absolute values of the nonzero reported values.

{% property logarithm kurtosis of <statistical bin> %}

The kurtosis of the logarithms of the absolute values of the nonzero reported values.

{% property linear fit of <statistical bin> %}

Calculates a least-squares fit on the values, providing a tool for extrapolating a linear change of values.

{% property length of <statistical bin> %}

Returns a time interval corresponding to the length (or period) of the specified bin.

{% property kurtosis of <statistical bin> %}

Returns the kurtosis (a measure of the &quot;narrowness&quot; of the distribution) of the specified statistical bin.

{% property javascript array <string> of <statistical bin> %}

Produces a section of JavaScript which initializes the named array of objects, one for each input bin. Each object in the array has JavaScript properties which match the above bin data properties. For each inspector property, the equivalent JavaScript property is named by CamelCasing the name of the inspector property.

{% property geometric mean of <statistical bin> %}

Returns the geometric mean of the specified statistical bin.

{% property failure rate of <statistical bin> %}

The integral over time of the number of failing computers divided by the integral over time of the number of reporting computers.

{% property exponential fit of <statistical bin> %}

Calculates a least-squares fit on the sum of the logarithms of the absolute values of the values. This provides a way to extrapolate an exponential change of values.

{% property end of <statistical bin> %}

Returns the ending time of the specified statistical bin.

{% type statistic range%}

Statistical ranges are time intervals used to examine particular statistical bins.

#### Properties

{% property total of <statistic range> %}

Totals the bins over the specified range, producing a single summary bin. This allows you to reduce the data by constraining the range.

{% property total <time interval> of <statistic range> %}

This inspector can be used to downsample or consolidate bins. It statistically totals over the given range, producing a new series of bins broken down by the (larger) specified time interval. The resulting range will start and end on a multiple of the interval. For example, if you ask for day bins, the results will start and end at midnight. If the specified time interval is not a multiple of the length of the starting bin of the range, this inspector throws NoSuchObject. For example, you cannot get 6 hour totals of a range which starts with day bins.

{% property start of <statistic range> %}

Returns the starting time of the statistical range.

{% property range <time range> of <statistic range> %}

For the duration of the specified time range, (time0 to time1), this inspector returns a sub-range of bins beginning with earliest bin containing time0 and going up to (but not including) the bin containing time1. If either of these bins does not exist, it throws NoSuchObject.

{% property end of <statistic range> %}

Returns the ending time of the statistical range.

{% property bin of <statistic range> %}

Returns a list of the individual bins in the specified range. Primarily useful after downsampling (see total &lt;time interval&gt; of &lt;statistic range&gt;).

{% property bin at <time> of <statistic range> %}

Returns the bin in the specified statistical range which brackets the given time. If no such bin exists, it throws NoSuchObject.

{% type rate with multiplicity%}

The &lt;rate with multiplicity&gt; inspectors deal with rate arrays, allowing you to extract unique rate values and count them.

#### Properties

{% property multiplicity of <rate with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;rate&gt; types.

{% type rate%}

Rates are floating point numbers divided by time intervals. These inspectors let you examine and convert rate objects.

#### Casts

{% property <rate> as string %}

Casts a rate as a string.

#### Properties

{% property unique value of <rate> %}

Returns the unique values of a given list of &lt;rate&gt; types, removing duplicates and sorting by value.

{% property minimum of <rate> %}

Returns the minimum value from a list of &lt;rate&gt; types.

{% property maximum of <rate> %}

Returns the maximum value from a list of &lt;rate&gt; types.

{% property extrema of <rate> %}

Returns the minimum and maximum extreme values of the given list of &lt;rate&gt; types.

{% type linear projection%}

The &lt;linear projection&gt; inspectors return statistical correlation information about the linearity of specific aggregated properties.

#### Properties

{% property rate of <linear projection> %}

Returns the slope of the linear projection. Multiply this by a time interval to compute the projected growth over that period.

{% property extrapolation <time> of <linear projection> %}

Returns the projected value at the specified time, assuming a linear projection.

{% property correlation coefficient of <linear projection> %}

Returns a floating-point number between -1 and 1, representing how well a linear projection fits the data.

{% type exponential projection%}

The &lt;exponential projection&gt; inspectors return statistical correlation information about the logarithms of the aggregated properties.

#### Properties

{% property rate <time interval> of <exponential projection> %}

Returns the slope of the exponential projection over the specified time interval.

{% property extrapolation <time> of <exponential projection> %}

Returns the projected value at the specified time, assuming an exponential projection.

{% property correlation coefficient of <exponential projection> %}

Returns a floating-point number between -1 and 1, representing how well an exponential projection fits the data.

