# audit policy subcategory

Windows audit policy categories, as of Vista and later, are divided into about 50 subcategories. This level of granularity is designed to narrow in on specific security-related operations on the client computer, helping to filter out the normal noise of an active environment.

# effective policy &lt;security account&gt; of &lt;audit policy subcategory&gt;

Returns the effective audit policy information for the specified subcategory for the given security account. The effective audit policy is determined by combining the system audit policy with per-user policy.

# guid of &lt;audit policy subcategory&gt;

No documentation exists.

# name of &lt;audit policy subcategory&gt;

Returns the name of the specified audit policy subcategory.Example: names of subcategories of category whose (name of it is &quot;System&quot;) of audit policy - Returns the names of the subcategories of the &#39;System&#39; audit policy category. These include Security State Change, Security System Extension, System Integrity, Ipsec Driver and Other System Events.

# per user policy &lt;security account&gt; of &lt;audit policy subcategory&gt;

Returns the per-user audit policy information for the given audit-policy subcategory and the specified security account.

# system policy of &lt;audit policy subcategory&gt;

Returns the audit policy information (audit success or audit failure) corresponding to the specified audit policy subcategory.
