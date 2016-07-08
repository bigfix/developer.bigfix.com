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

## BES Unmanagedasset Field

These Inspectors provide authors with access to the individual fields of various unmanaged assets. 
Each field consists of a name / value pair, analogous to BES properties. There are three types of fields: 
* **IdentifyingField:** Each asset must have one IdentifyingField, such as a MAC Address, which is used to identify and correlate different reports from the same asset. 
* **FilterableField:** These are displayed in the Console in both the Unmanaged Asset list and the unmanaged asset document, allowing sorting and filtering. 
* **NonFilterable:** These are only displayed in the Unmanaged Assets document, and typically return a large amount of data, such as a list of vulnerabilities.

Click [here](/relevance/reference/bes-unmanagedasset-field.html) to access the page describing to these inspectors.

**Example**

```relevance
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
This object type is derived from the `<bes unmanagedasset>` type and therefore shares the same properties as that type.

Click [here](/relevance/reference/bes-unmanagedasset-with-multiplicity.html) to access the page describing to these inspectors.
