---
title: unmanaged-assets
---

## bes unmanagedasset with multiplicity

The &lt;bes unmanagedasset with multiplicity&gt; inspectors deal with arrays of BES unmanaged assets, allowing you to extract unique properties and count them. 

#### multiplicity of &lt;bes unmanagedasset with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes unmanagedasset&gt; types.

## bes unmanagedasset set

The &lt;bes unmanagedasset set&gt; inspectors iterate over the BES unmanaged assets and return a set of such assets.

#### union of &lt;bes unmanagedasset set&gt; : bes unmanagedasset set

Returns the union (as a set) derived from the specified set of BES Unmanaged Assets.

#### size of &lt;bes unmanagedasset set&gt; : integer

Returns the number of unique unmanaged assets in the specified set.

#### intersection of &lt;bes unmanagedasset set&gt; : bes unmanagedasset set

Returns the intersection set derived from the specified set of BES Unmanaged Assets.

#### element of &lt;bes unmanagedasset set&gt; : bes unmanagedasset

Returns the elements of the specified set of BES Unmanaged Assets.

## bes unmanagedasset field

The &lt;bes unmanagedasset field&gt; inspectors provide authors with access to the individual fields of various unmanaged assets. Each field consists of a name / value pair, analogous to BES properties. There are three types of fields:IdentifyingField: Each asset must have one IdentifyingField, such as a MAC Address, which is used to identify and correlate different reports from the same asset.FilterableField: These are displayed in the Console in both the Unmanaged Asset list and the unmanaged asset document, allowing sorting and filtering.NonFilterable: These are only displayed in the Unmanaged Assets document, and typically return a large amount of data, such as a list of vulnerabilities.

#### value of &lt;bes unmanagedasset field&gt; : string

Returns the value (as a &lt;string&gt;) of the specified BES Unmanaged Asset field.

#### name of &lt;bes unmanagedasset field&gt; : string

Returns the name of the specified BES unmanaged asset field.

#### filterable flag of &lt;bes unmanagedasset field&gt; : boolean

Returns TRUE if the specified asset field is filterable. Fields that are filterable will show up in the Unmanaged Assets list, allowing you to sort and filter them.

#### editable flag of &lt;bes unmanagedasset field&gt; : boolean

Returns TRUE if the specified BES Unmanaged Asset is editable.

#### asset of &lt;bes unmanagedasset field&gt; : bes unmanagedasset

Returns an asset (containing a name / value pair) from the specified BES unmanaged asset field.

## bes unmanagedasset

The &lt;bes unmanagedasset&gt; inspectors provide access to externally sourced data, such as that resulting from Nmap scans on client computers. The results, such as OS, Device Type, Network Card Vendor, and Open Ports, are uploaded to the BES Server for storage and analysis. These inspectors provide a way to monitor and report on mobile or hand-held devices that are not traditional BES Clients, but instead use &quot;microAgents&quot; to report their status. For more information on currently supported devices, consult the BigFix support pages.

#### unique value of &lt;bes unmanagedasset&gt; : bes unmanagedasset with multiplicity

Returns the unique values and counts of the specified BES Unmanaged Assets.

#### source of &lt;bes unmanagedasset&gt; : string

Returns the source of the specified Unmanaged Asset as a string value.

#### set of &lt;bes unmanagedasset&gt; : bes unmanagedasset set

Returns a set generated from the iterated list of unmanaged assets. This can be subjected to arithmetic set operations such as union and intersection.

#### link of &lt;bes unmanagedasset&gt; : html

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified BES unmanaged asset document (in the BES Console) or its description page (in Web Reports).

#### link href of &lt;bes unmanagedasset&gt; : string

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes unmanaged asset&gt;). Note that link href returns a normal string, not an HTML string.

#### link &lt;string&gt; of &lt;bes unmanagedasset&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

#### link &lt;html&gt; of &lt;bes unmanagedasset&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

#### id of &lt;bes unmanagedasset&gt; : integer

Returns the unique numeric ID of the given unmanaged asset.

#### field of &lt;bes unmanagedasset&gt; : bes unmanagedasset field

Returns a list of the fields from the specified BES Unmanaged Asset.

#### client installed flag of &lt;bes unmanagedasset&gt; : boolean

Returns TRUE if the specified unmanaged asset is running the BES Client.

