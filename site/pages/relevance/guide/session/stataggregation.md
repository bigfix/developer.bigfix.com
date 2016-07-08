---
title: Statistical Aggregation	
---

BigFix maintains a set of historical databases, allowing you to display and archive long-term statistical data about your networked computers.

Property data has three dimensions: property, computer and time. By doing so, selected properties can be set up to track changes over time. To keep the size of the data manageable, statistics are aggregated over all the computers reporting on a specific property in a particular time period.

You can envision the resulting data set as another two dimensional table. Again, each column represents a single property, but now each row represents a interval of time, for example the five minute interval between 12:00 and 12:05 AM on Jan 1 2006. Each cell in this table contains a statistical summary of all the clients reporting on the given property during the specified time period. These cells are called **statistical bins**. The Inspectors which expose this data work with statistical bins as well as **ranges** of statistical bins.


## Creating Statistical Properties

You can use the following methods to get statistical properties into your deployment:
* Import an existing analysis containing properties with the KeepStatistics attribute set to TRUE.
* Author an analysis in a Fixlet site using hand-edited action script MIME. Add the header X-Keep-Statistics:true to the property headers.
The property of interest must return an integer, floating point or Boolean type in order to compile statistics. If you attempt to set the KeepStatistics attribute on a property that does not return one of these types, it will be ignored.


## Accessing Statistics
To access the aggregated statistics for a specific property, use the statistic range Inspector:

```
statistic range of <property>
```

This returns the range of statistical bins associated with the specified property. The property must have been marked for statistical aggregation. If it has not, or no clients have reported results, this Inspector throws NoSuchObject.

## Inspecting Statistical Ranges

Inspecting Statistical Ranges
You have several tools to examine statistical ranges:
```
start of <statistic range>
```
```
end of <statistic range>
```

These return the starting and ending times of the specified range.

```
range <time range> of <statistic range>
```

For time range = (t0, t1), returns a sub-range of bins beginning with the earliest bin containing t0 and ending with the bin just before the one containing t1. If either of these bins does not exist, it throws NoSuchObject.

```
bin at <time> of <statistic range>
```

Returns the bin in the statistical range which starts before and ends after the specified time range. If no such bin exists, it throws NoSuchObject.

```
total of <statistic range>
```

Statistically totals the bins in the specified range, producing a single bin covering the same range. Primarily useful after constraining the range.

```
totals <time interval> of <statistic range>
```

Used for downsampling (condensing) bins. Totals over the specified range, producing a new series of bins with length determined by the time interval. The resulting range will start and end on a multiple of the time interval. For example if you ask for day bins, the result will start and end at midnight. If the time interval is not a multiple of the the length of the starting bin of the range, this Inspector throws NoSuchObject.

## Using Linear Projections
A bin represents two-dimensional data: values collected over a range of time. When the time range for a bin is large, we can look for trends in the way the values change over time. The "linear fit of <statistical bin>" Inspector uses the least-squares method to fit a line through the data in the bin. The linear projection it returns has the following floating-point properties:

```
correlation coefficient of <linear projection>
```

This provides a measure of how well the projection fits the data. The value ranges from -1 to 1, where -1 represents a perfect inverse correlation, 1 is a perfect direct correlation, and 0 represents no correlation at all.

```
extrapolation (<time>) of <linear projection>
```

This is the projected value at a given time.

```
rate of <linear projection>
```

This represents the slope of the line. Multiply this by a time interval to compute the projected growth over a period of that length.

## Using Exponential Projections

The "exponential fit of <statistical bin>" function is similar to the linear projection. It uses the least-squares method to fit a line through the logarithms of the values in the bin. It is therefore only useful for positive data. The exponential projection it returns has the following floating-point properties:

```
correlation coefficient of <exponential projection>
```

This provides a measure of how well the projection fits the data. The value ranges from -1 to 1, where -1 represents a perfect inverse correlation, 1 is a perfect direct correlation, and 0 represents no correlation at all. Remember this is a correlation to the logs, not the values themselves.

```
extrapolation (<time>) of <exponential projection>
```

This is the projected value at a given time.

```
rate (<time interval>) of <exponential projection>
```

This is the factor by which the value is projected to increase over the given time interval.

