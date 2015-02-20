---
title: power
---

## power state

The &lt;power state&gt; inspectors return the state of a device, encapsulating the enumerated types used by the Client. There are two categories, system and monitor. System (computer) states include active, idle, logged off,  standby, off and invalid. Monitor (display) states include on, off and invalid.

#### &lt;power state&gt; as string : string

Casts a power state as a string type.

## power history

The &lt;power history&gt; inspectors retrieve information about your client computers and their displays within a tracking window (defaulting to 14 days). The information is in the form of a list of &lt;interval, state&gt; tuples for the system (computer) and &lt;interval, state, monitor count&gt; for monitors (attached displays). The first element of the list is the current state of the system. These inspectors allow you to track computer usage for power management applications. The event lists are fetched from the client whenever &#39;power history&#39; is referenced, and referencing &#39;system intervals of &lt;power history&gt;&#39; simply iterates over the built list of intervals. Avoid referencing &#39;power history&#39; multiple times in relevance as it rebuilds the list each time (increasing overhead) and may introduce inconsistency if the window slides between references.

#### system interval of &lt;power history&gt; : system power interval

Returns a list of computer states and their start and end times ( for example the computer was idle from Wed, 15 Sep 2010 12:30:00 -0700 to Wed, 15 Sep 2010 18:22:00 -0700, which is an interval of 5:52:00   ).

#### monitor interval of &lt;power history&gt; : monitor power interval

Returns the interval corresponding to the &#39;monitor power&#39; entry in the specified power history.

#### current system interval of &lt;power history&gt; : system power interval

Returns the most recent interval of the system intervals list.

#### current monitor interval of &lt;power history&gt; : monitor power interval

Returns a monitor power interval reflecting how long the monitor has been turned on for the specified power history.

#### last system interval in standby state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last standby state of the computer system, as logged in the given power history.

#### last system interval in off state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last off state of the computer system, as logged in the given power history.

#### last system interval in logged off state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last logged off state of the computer system, as logged in the given power history.

#### last system interval in idle state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last idle state of the computer system, as logged in the given power history.

#### last system interval in active state of &lt;power history&gt; : system power interval

Returns the interval corresponding to the last active state of the computer system, as logged in the given power history.

#### last system interval in &lt;power state&gt; of &lt;power history&gt; : system power interval

Returns the power interval corresponding to the last time the computer system was in the specified power state (active, idle, logged off, off, standby) as logged in the power history.

#### last monitor interval in monitor on state of &lt;power history&gt; : monitor power interval

Returns the last time interval during which the display monitor was ON from the specified power history.

#### last monitor interval in monitor off state of &lt;power history&gt; : monitor power interval

Returns the last time interval during which the display monitor was OFF from the specified power history.

#### last monitor interval in &lt;power state&gt; of &lt;power history&gt; : monitor power interval

Returns the last time interval for the display monitor as logged in the power history. You must specify the power state you are interested in (either monitor on or monitor off).

## system power interval

The &lt;system power interval&gt; inspectors return an interval or a list of intervals that contain information about the client computer. Each system interval is composed of a time range and a power state, which can include on, off, standby or hibernate. 

#### state of &lt;system power interval&gt; : power state

Returns the power state associated with the specified system power interval.

#### range of &lt;system power interval&gt; : time range

Returns the time range associated with the specified &#39;system power&#39; interval. This will provide you with the start and stop time for any particular state of the BES Client system.

## monitor power interval

The &lt;monitor power interval&gt; inspectors return information about the monitors (displays) attached to a given computer. Each computer can have multiple monitors, and they can be either on or off. This information can be used in a power-usage study. Monitor intervals are retrieved as tuples in the form of &lt;interval, state, monitor count&gt;, where the interval contains the start and end time, the state (on or off) and the number of monitors that are attached to the computer.

#### state of &lt;monitor power interval&gt; : power state

Returns the state of the specified &#39;monitor power&#39; interval. This state is one of the following:onoffinvalid.

#### range of &lt;monitor power interval&gt; : time range

Returns the time range associated with the specified &#39;monitor power&#39; interval. This will provide you with the start and stop time for any particular monitor (display) state.

#### count of &lt;monitor power interval&gt; : integer

Returns the number of &#39;monitor power&#39; intervals currently logged.

## power level

The &lt;power level&gt; inspectors provide exposure to the underlying batter and power information used by low-power modes. On Windows, this uses the GetSystemPowerStatus system call, and on OSX, it uses the IOPSCopyPowerSourcesList functionality.

#### &lt;power level&gt; as string : string

Converts a power level into a human-readable string.

#### ups of &lt;power level&gt; : boolean

Returns TRUE if the computer is currently being powered by a UPS.

#### plugged of &lt;power level&gt; : boolean

Returns TRUE if the computer is currently plugged in to AC power.Example: plugged of power level - Returns TRUE if the computer is currently plugged in.

#### normal of &lt;power level&gt; : boolean

Returns TRUE if the battery is at a normal charge level.

#### low of &lt;power level&gt; : boolean

Returns TRUE if the battery is at a low charge level.

#### full of &lt;power level&gt; : boolean

Returns TRUE if the battery is fully charged.Example: full of power level - Returns TRUE if the battery is currently topped off.

