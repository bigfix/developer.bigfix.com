# type: bes unmanagedasset

The &lt;bes unmanagedasset&gt; inspectors provide access to externally sourced data, such as that resulting from Nmap scans on client computers. The results, such as OS, Device Type, Network Card Vendor, and Open Ports, are uploaded to the BES Server for storage and analysis. These inspectors provide a way to monitor and report on mobile or hand-held devices that are not traditional BES Clients, but instead use "microAgents" to report their status. For more information on currently supported devices, consult the BigFix support pages.

# client installed flag of &lt;bes unmanagedasset&gt; : boolean

Returns `True` if the specified unmanaged asset is running the BES Client.

# field of &lt;bes unmanagedasset&gt; : bes unmanagedasset field

Returns a list of the fields from the specified BES Unmanaged Asset.

# id of &lt;bes unmanagedasset&gt; : integer

Returns the unique numeric ID of the given unmanaged asset.

# link &lt;html&gt; of &lt;bes unmanagedasset&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

# link &lt;string&gt; of &lt;bes unmanagedasset&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified unmanaged asset (in the BES Console) or its description page (in Web Reports).

# link href of &lt;bes unmanagedasset&gt; : string

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes unmanaged asset&gt;). Note that link href returns a normal string, not an HTML string.

# link of &lt;bes unmanagedasset&gt; : html

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified BES unmanaged asset document (in the BES Console) or its description page (in Web Reports).

# set of &lt;bes unmanagedasset&gt; : bes unmanagedasset set

Returns a set generated from the iterated list of unmanaged assets. This can be subjected to arithmetic set operations such as union and intersection.

# source of &lt;bes unmanagedasset&gt; : string

Returns the source of the specified Unmanaged Asset as a string value.

# unique value of &lt;bes unmanagedasset&gt; : bes unmanagedasset with multiplicity

Returns the unique values and counts of the specified BES Unmanaged Assets.

# &lt;bes unmanagedasset&gt; = &lt;bes unmanagedasset&gt; : boolean

Returns `True` if the two provided unmanaged assets are equal.
