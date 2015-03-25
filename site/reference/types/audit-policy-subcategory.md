# type: audit policy subcategory

Windows audit policy categories, as of Vista and later, are divided into about 50 subcategories. This level of granularity is designed to narrow in on specific security-related operations on the client computer, helping to filter out the normal noise of an active environment.

# effective policy &lt;security account&gt; of &lt;audit policy subcategory&gt; : audit policy information

Returns the effective audit policy information for the specified subcategory for the given security account. The effective audit policy is determined by combining the system audit policy with per-user policy.

# guid of &lt;audit policy subcategory&gt; : string

No documentation exists.

# name of &lt;audit policy subcategory&gt; : string

Returns the name of the specified audit policy subcategory.Example: names of subcategories of category whose (name of it is &amp;quot;System&amp;quot;) of audit policy - Returns the names of the subcategories of the &amp;#39;System&amp;#39; audit policy category. These include Security State Change, Security System Extension, System Integrity, Ipsec Driver and Other System Events.

# per user policy &lt;security account&gt; of &lt;audit policy subcategory&gt; : audit policy information

Returns the per-user audit policy information for the given audit-policy subcategory and the specified security account.

# system policy of &lt;audit policy subcategory&gt; : audit policy information

Returns the audit policy information (audit success or audit failure) corresponding to the specified audit policy subcategory.
