---
title: audit-policy
---

{% type audit policy subcategory%}

Windows audit policy categories, as of Vista and later, are divided into about 50 subcategories. This level of granularity is designed to narrow in on specific security-related operations on the client computer, helping to filter out the normal noise of an active environment.

{% property system policy of <audit policy subcategory> %}

Returns the audit policy information (audit success or audit failure) corresponding to the specified audit policy subcategory.

{% property per user policy <security account> of <audit policy subcategory> %}

Returns the per-user audit policy information for the given audit-policy subcategory and the specified security account.

{% property name of <audit policy subcategory> %}

Returns the name of the specified audit policy subcategory.Example: names of subcategories of category whose (name of it is &quot;System&quot;) of audit policy - Returns the names of the subcategories of the &#39;System&#39; audit policy category. These include Security State Change, Security System Extension, System Integrity, Ipsec Driver and Other System Events.

{% property effective policy <security account> of <audit policy subcategory> %}

Returns the effective audit policy information for the specified subcategory for the given security account. The effective audit policy is determined by combining the system audit policy with per-user policy.

{% property guid of <audit policy subcategory> %}

No documentation exists for this property.

{% type audit policy information%}

The &lt;audit policy information&gt; inspectors return the two attributes of the audit policy for a given subcategory: whether or not succesful operations will be audited (&quot;audit success&quot;), and whether or not unsuccessful operations will be audited (&quot;audit failure&quot;).

{% property audit success of <audit policy information> %}

Returns the boolean audit success status of the specified audit policy information.Example: audit success of system policies of subcategory whose (name of it is &quot;User Account Management&quot;) of account management category of audit policy - Returns the TRUE/FALSE status of the specified audit policy subcategory.

{% property audit failure of <audit policy information> %}

Returns the boolean audit failure status of the specified audit policy information.Example: (name of it, audit failure of system policy of it) of subcategories of category whose (name of it is &quot;System&quot;) of audit policy - Returns the names and audit failure status of each of the subcategories of the System audit policy category.

{% property guid of <audit policy information> %}

No documentation exists for this property.

{% type audit policy category%}

Windows audit policies, as of Vista and later, are divided into categories. Currently there are 9 categories, including System, Logon/Logoff, Object Access, Privilege Use, Detailed Tracking, Policy Change, Account Management, DS Access and Account Logon.

{% property subcategory of <audit policy category> %}

Returns the subcategory for the specified audit policy category.

{% property name of <audit policy category> %}

Returns the name of the specified audit policy category.

{% type audit policy%}

The &lt;audit policy&gt; inspectors return the policies put in place for recording information about security-related operations on the client computer. For example, you can set a policy to monitor the modification of files. This will trigger an audit entry showing whenever a file is modified, the associated user account, and the date and time of the action. You can audit both successful and failed attempts at actions. Often, the failed attempts are more interesting, as they may indicate attempts to unsuccessfully subvert a policy. For instance, a successful login is not as interesting as a repeated failure might be.

{% property system category of <audit policy> %}

Returns an object corresponding to the System category of the audit policy.

{% property privilege use category of <audit policy> %}

Returns an object corresponding to the Privilege Use category of the audit policy.

{% property policy change category of <audit policy> %}

Returns an object corresponding to the Policy Change category of the audit policy.

{% property object access category of <audit policy> %}

Returns an object corresponding to the Object Access category of the audit policy.

{% property logon logoff category of <audit policy> %}

Returns an object corresponding to the Logon/Logoff category of the audit policy.

{% property ds access category of <audit policy> %}

Returns an object corresponding to the DS Access category of the audit policy.

{% property detailed tracking category of <audit policy> %}

Returns an object corresponding to the Detailed Tracking category of the specified audit policy.

{% property category of <audit policy> %}

Returns the categories of the specified audit policy.

{% property account management category of <audit policy> %}

Returns an object corresponding to the Account Management category of the audit policy.

{% property account logon category of <audit policy> %}

Returns an object corresponding to the Account Logon category of the audit policy.

