---
title: unmanaged-assets
---

{% type bes unmanagedasset with multiplicity%}

The &lt;bes unmanagedasset with multiplicity&gt; inspectors deal with arrays of BES unmanaged assets, allowing you to extract unique properties and count them. 

{% property multiplicity of <bes unmanagedasset with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes unmanagedasset&gt; types.

{% type bes unmanagedasset set%}

The &lt;bes unmanagedasset set&gt; inspectors iterate over the BES unmanaged assets and return a set of such assets.

{% property union of <bes unmanagedasset set> %}

Returns the union (as a set) derived from the specified set of BES Unmanaged Assets.

{% property size of <bes unmanagedasset set> %}

Returns the number of unique unmanaged assets in the specified set.

{% property intersection of <bes unmanagedasset set> %}

Returns the intersection set derived from the specified set of BES Unmanaged Assets.

{% property element of <bes unmanagedasset set> %}

Returns the elements of the specified set of BES Unmanaged Assets.

{% type bes unmanagedasset field%}

The &lt;bes unmanagedasset field&gt; inspectors provide authors with access to the individual fields of various unmanaged assets. Each field consists of a name / value pair, analogous to BES properties. There are three types of fields:IdentifyingField: Each asset must have one IdentifyingField, such as a MAC Address, which is used to identify and correlate different reports from the same asset.FilterableField: These are displayed in the Console in both the Unmanaged Asset list and the unmanaged asset document, allowing sorting and filtering.NonFilterable: These are only displayed in the Unmanaged Assets document, and typically return a large amount of data, such as a list of vulnerabilities.

{% property value of <bes unmanagedasset field> %}

Returns the value (as a &lt;string&gt;) of the specified BES Unmanaged Asset field.

{% property name of <bes unmanagedasset field> %}

Returns the name of the specified BES unmanaged asset field.

{% property filterable flag of <bes unmanagedasset field> %}

Returns TRUE if the specified asset field is filterable. Fields that are filterable will show up in the Unmanaged Assets list, allowing you to sort and filter them.

{% property editable flag of <bes unmanagedasset field> %}

Returns TRUE if the specified BES Unmanaged Asset is editable.

{% property asset of <bes unmanagedasset field> %}

Returns an asset (containing a name / value pair) from the specified BES unmanaged asset field.

{% type bes unmanagedasset%}

The &lt;bes unmanagedasset&gt; inspectors provide access to externally sourced data, such as that resulting from Nmap scans on client computers. The results, such as OS, Device Type, Network Card Vendor, and Open Ports, are uploaded to the BES Server for storage and analysis. These inspectors provide a way to monitor and report on mobile or hand-held devices that are not traditional BES Clients, but instead use &quot;microAgents&quot; to report their status. For more information on currently supported devices, consult the BigFix support pages.

{% property unique value of <bes unmanagedasset> %}

Returns the unique values and counts of the specified BES Unmanaged Assets.

{% property source of <bes unmanagedasset> %}

Returns the source of the specified Unmanaged Asset as a string value.

{% property set of <bes unmanagedasset> %}

Returns a set generated from the iterated list of unmanaged assets. This can be subjected to arithmetic set operations such as union and intersection.

{% property link of <bes unmanagedasset> %}

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified BES unmanaged asset document (in the BES Console) or its description page (in Web Reports).

{% property link href of <bes unmanagedasset> %}

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes unmanaged asset&gt;). Note that link href returns a normal string, not an HTML string.

{% property link <string> of <bes unmanagedasset> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

{% property link <html> of <bes unmanagedasset> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

{% property id of <bes unmanagedasset> %}

Returns the unique numeric ID of the given unmanaged asset.

{% property field of <bes unmanagedasset> %}

Returns a list of the fields from the specified BES Unmanaged Asset.

{% property client installed flag of <bes unmanagedasset> %}

Returns TRUE if the specified unmanaged asset is running the BES Client.

