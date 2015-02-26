# bes unmanagedasset

The &lt;bes unmanagedasset&gt; inspectors provide access to externally sourced data, such as that resulting from Nmap scans on client computers. The results, such as OS, Device Type, Network Card Vendor, and Open Ports, are uploaded to the BES Server for storage and analysis. These inspectors provide a way to monitor and report on mobile or hand-held devices that are not traditional BES Clients, but instead use &quot;microAgents&quot; to report their status. For more information on currently supported devices, consult the BigFix support pages.

# client installed flag of <bes unmanagedasset>

Returns `True` if the specified unmanaged asset is running the BES Client.

# field of <bes unmanagedasset>

Returns a list of the fields from the specified BES Unmanaged Asset.

# id of <bes unmanagedasset>

Returns the unique numeric ID of the given unmanaged asset.

# link <html> of <bes unmanagedasset>

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

# link <string> of <bes unmanagedasset>

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

# link href of <bes unmanagedasset>

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes unmanaged asset&gt;). Note that link href returns a normal string, not an HTML string.

# link of <bes unmanagedasset>

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified BES unmanaged asset document (in the BES Console) or its description page (in Web Reports).

# set of <bes unmanagedasset>

Returns a set generated from the iterated list of unmanaged assets. This can be subjected to arithmetic set operations such as union and intersection.

# source of <bes unmanagedasset>

Returns the source of the specified Unmanaged Asset as a string value.

# unique value of <bes unmanagedasset>

Returns the unique values and counts of the specified BES Unmanaged Assets.
