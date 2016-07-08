---
title: Statistics Inspectors
---

Use these Inspectors to gather data and perform statistics during a session.

---

## Fixlet Count Pair

These Inspectors return information about the Fixlet count pair objects for each severity level.

Click [here](/relevance/reference/fixlet-count-pair.html) to access the page describing to these inspectors.

---

## Historical Computer Count

These Inspectors provide information about historical computer count objects.

Click [here](/relevance/reference/historical-computer-count.html) to access the page describing to these inspectors.

---

## Historical Fixlet Count

These provide historical information about the number of Fixlets at different severity levels.

Click [here](/relevance/reference/historical-fixlet-count.html) to access the page describing to these inspectors.
---

## Statistic Range

Statistical ranges are time intervals used to examine particular statistical bins.

Click [here](/relevance/reference/statistic-range.html) to access the page describing to these inspectors.

**Example**

```
mean of total of range ((now - day) & now) of statistics of property 1 of current analysis
```

Returns the mean (average) value across all reported values in the last day. 
Note that this might fail if there have been no reports in the last day.

---

## Statistical Bin

Statistical bins contain property information summed over all computers in a given time period.

Click [here](/relevance/reference/statistical-bin.html) to access the page describing to these inspectors.

**Example**

```
javascript array "statistics" of totals (6*hour) of statistics of property 1 of current analysis
```

Produces a JavaScript variable named "statistics" which holds an array of objects representing the 
statistical data for 6-hour periods across the entire range of data for the specified property. 
Make sure to restrict the range to a known size, so that the resulting array is not too big. 
For this example, the range must be 5-minute or hour bins, since day bins cannot be downsampled to 6-hour periods.

---

## Rate

Rates are floating point numbers divided by time intervals. These Inspectors let you examine and convert rate objects.

---

## Rate with Multiplicity

These Inspectors deal with rate arrays, allowing you to extract unique rate values and count them.
This object type is derived from the <rate> type and therefore shares the same properties as that type.

Click [here](/relevance/reference/rate.html) to access the page describing to these inspectors.

---

## Linear Projection

These Inspectors return statistical correlation information about the linearity of specific aggregated properties.

Click [here](/relevance/reference/linear-projection.html) to access the page describing to these inspectors.

---

## Exponential Projection

These Inspectors return statistical correlation information about the logarithms of the aggregated properties.

Click [here](/relevance/reference/exponential-projection.html) to access the page describing to these inspectors.


