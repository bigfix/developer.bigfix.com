---
title: Unmanaged Asset Inspectors
---

Use these Inspectors to monitor and report on mobile or hand-held devices that are not traditional BES Clients, 
but instead use "microAgents" to report their status.

---

## BES Unmanagedasset

These Inspectors provide access to externally sourced data, such as that resulting from Nmap scans on client computers. 
The results, such as OS, Device Type, Network Card Vendor, and Open Ports, are uploaded to the BES Server for storage and analysis.

Click [here](/relevance/reference/bes-unmanagedasset.html) to access the page describing to these inspectors.

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

<!-- ---

## BES Unmanagedasset Field

These Inspectors return the iterated list of BES Actions, converted into a set to make it easy to do set arithmetic with the list.

**Example**

``C
(values of fields whose (name of it is "Hostname")) of bes unmanagedassets whose (not client installed flag of it)
```

Returns the hostnames of all devices that are running windows but are not running the BES Client.
-->
---

## BES Unmanagedasset Field

These Inspectors provide authors with access to the individual fields of various unmanaged assets. 
Each field consists of a name / value pair, analogous to BES properties. There are three types of fields: 
* **IdentifyingField:** Each asset must have one IdentifyingField, such as a MAC Address, which is used to identify and correlate different reports from the same asset. 
* **FilterableField:** These are displayed in the Console in both the Unmanaged Asset list and the unmanaged asset document, allowing sorting and filtering. 
* **NonFilterable:** These are only displayed in the Unmanaged Assets document, and typically return a large amount of data, such as a list of vulnerabilities.

Click [here](/relevance/reference/bes-unmanagedasset-field.html) to access the page describing to these inspectors.

**Example**

```
(name of it & " - " & value of it) of fields of bes unmanagedasset whose (id of it is 55)
```

Outputs a list of name/value pairs for each field in the specified BES Unmanaged Asset, for instance: 
* IP Address - 10.10.42.1 
* Hostname - Donald.

---

## BES Unmanagedasset Set

These Inspectors iterate over the BES unmanaged assets and return a set of such assets.

Click [here](/relevance/reference/bes-unmanagedasset-set.html) to access the page describing to these inspectors.

---

## BES Unmanagedasset with Multiplicity

These Inspectors deal with arrays of BES unmanaged assets, allowing you to extract unique properties and count them.
This object type is derived from the <bes unmanagedasset> type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-unmanagedasset-with-multiplicity.html) to access the page describing to these inspectors.
