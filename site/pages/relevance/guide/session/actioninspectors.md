---
title: Action Inspectors
---

Use these Inspectors to query and manage the properties of the actions issued by the BES Operators.

---

## BES Action

Each action may have several properties that can be examined using these Inspectors.
You can iterate over the actions to create lists.

Click [here](/relevance/reference/bes-action.html) to access the page describing to these inspectors.

**Examples**

```
names of hidden bes actions 
```

Returns the list of currently hidden BES Actions.

```
links (h1 of name of it) of bes actions 
```
Creates clickable links listing all the current BES Actions, displaying the Action names in headline format.

```
links (name of it & "(" & id of it as string & ")")) of bes actions 
```

Creates clickable links listing all the current BES Actions, formated as name and ID.

```
(br & html "Click <A href='" & link href of it & html "'>here</A> to open action " & id of it as string) of bes actions 
```

Creates clickable links listing all the current BES Actions, formated with a descriptive prompt and an embedded link, such as: 
* Click here to open action 123456.

```
links of bes actions 
```

Returns a set of `<A>` tags enclosing all the BES Actions in html format, creating a series of clickable Action links.

```
parameter "action issue date" of action 
```

This Inspector returns the date the action was issued, a parameter added to each action by the BigFix Console.

```
detailed status of result from (bes computer whose (id of it is 1234567)) of (bes action whose (id of it is 1234)) 
```

Returns the detailed status of the specified action on the given computer.

```
detailed statuses of results of (bes action whose (id of it is 1234)) 
```

Returns a detailed status list containing the results of bes actions with the specified id.

```
size of (set of bes actions) 
```
Returns the current number of BES Actions.

---

## BES Action Set

These Inspectors return the iterated list of BES Actions, converted into a set to make it easy to do set arithmetic with the list.

Click [here](/relevance/reference/bes-action-set.html) to access the page describing to these inspectors.

**Examples**

```
names of elements of (set of bes actions)
```

Returns a list of names of each of the current BES Actions.

```
names of elements of bes action set
```

Returns the names of all the BES Actions.

---


## BES Action with Multiplicity

These Inspectors deal with arrays of BES actions, allowing you to extract unique actions and count them.
This object type is derived from the <bes action> type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-action-with-multiplicity.html) to access the page describing to these inspectors.

---

## BES Action Status

These Inspectors return information about the status of BES actions, such as whether it is running, evaluating, expired, and more.
The status returned from a BES Action can be cast into a string format to give the text shown in the console. This can be compared for equality using the following constants:
- bes action status fixed 
- bes action status running 
- bes action status evaluating 
- bes action status failed 
- bes action status user cancelled 
- bes action status download failed 
- bes action status locked 
- bes action status waiting 
- bes action status pending downloads 
- bes action status pending restart 
- bes action status pending message 
- bes action status pending login 
- bes action status constrained 
- bes action status expired 
- bes action status postponed 
- bes action status invalid signature 
- bes action status error 
- bes action status not relevant 
- bes action status not reported

Click [here](/relevance/reference/bes-action-status.html) to access the page describing to these inspectors.

---

## BES Action Parameter

A Fixlet can incorporate parameters in its associated Action(s). 
When the Fixlet becomes relevant to the network, the BES Console will prompt the user for the value of the parameter. 
For example, a Fixlet Action might need to start a Windows service specified by the Console user. 
When the the Action is taken, the Console would prompt for the name of the service. 
That value would then be passed down to the BES Client and substituted into the local Action script upon execution.

Click [here](/relevance/reference/bes-action-parameter.html) to access the page describing to these inspectors.

**Examples**

```
names of parameters of bes action whose (name of it contains "Download")
```

Returns the parameter names of bes actions with `"Download"` in the name.

---

## BES Action Result

These Inspectors examine the results of BES Actions, which can be used to make reports.

Click [here](/relevance/reference/bes-action-result.html) to access the page describing to these inspectors.

**Examples**

```
detailed status of result from (bes computer whose (id of it is 1234567)) of (bes action whose (id of it is 1234))
```

Returns the detailed status of the specified action on the given computer.

```
detailed statuses of results of (bes action whose (id of it is 34))
```

Returns the detailed result status of the specified BES Action.

