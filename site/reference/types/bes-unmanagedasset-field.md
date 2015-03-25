# type: bes unmanagedasset field

The &amp;lt;bes unmanagedasset field&amp;gt; inspectors provide authors with access to the individual fields of various unmanaged assets. Each field consists of a name / value pair, analogous to BES properties. There are three types of fields:IdentifyingField: Each asset must have one IdentifyingField, such as a MAC Address, which is used to identify and correlate different reports from the same asset.FilterableField: These are displayed in the Console in both the Unmanaged Asset list and the unmanaged asset document, allowing sorting and filtering.NonFilterable: These are only displayed in the Unmanaged Assets document, and typically return a large amount of data, such as a list of vulnerabilities.

# asset of &lt;bes unmanagedasset field&gt; : bes unmanagedasset

Returns an asset (containing a name / value pair) from the specified BES unmanaged asset field.

# editable flag of &lt;bes unmanagedasset field&gt; : boolean

Returns `True` if the specified BES Unmanaged Asset is editable.

# filterable flag of &lt;bes unmanagedasset field&gt; : boolean

Returns `True` if the specified asset field is filterable. Fields that are filterable will show up in the Unmanaged Assets list, allowing you to sort and filter them.

# name of &lt;bes unmanagedasset field&gt; : string

Returns the name of the specified BES unmanaged asset field.

# value of &lt;bes unmanagedasset field&gt; : string

Returns the value (as a &amp;lt;string&amp;gt;) of the specified BES Unmanaged Asset field.
