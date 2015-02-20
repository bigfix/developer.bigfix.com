---
title: audit-policy
---

## audit policy subcategory

Windows audit policy categories, as of Vista and later, are divided into about 50 subcategories. This level of granularity is designed to narrow in on specific security-related operations on the client computer, helping to filter out the normal noise of an active environment.

#### system policy of &lt;audit policy subcategory&gt; : audit policy information

Returns the audit policy information (audit success or audit failure) corresponding to the specified audit policy subcategory.

#### per user policy &lt;security account&gt; of &lt;audit policy subcategory&gt; : audit policy information

Returns the per-user audit policy information for the given audit-policy subcategory and the specified security account.

#### name of &lt;audit policy subcategory&gt; : string

Returns the name of the specified audit policy subcategory.Example: names of subcategories of category whose (name of it is &quot;System&quot;) of audit policy - Returns the names of the subcategories of the &#39;System&#39; audit policy category. These include Security State Change, Security System Extension, System Integrity, Ipsec Driver and Other System Events.

#### effective policy &lt;security account&gt; of &lt;audit policy subcategory&gt; : audit policy information

Returns the effective audit policy information for the specified subcategory for the given security account. The effective audit policy is determined by combining the system audit policy with per-user policy.

#### guid of &lt;audit policy subcategory&gt; : string

No documentation exists for this property.

## audit policy information

The &lt;audit policy information&gt; inspectors return the two attributes of the audit policy for a given subcategory: whether or not succesful operations will be audited (&quot;audit success&quot;), and whether or not unsuccessful operations will be audited (&quot;audit failure&quot;).

#### audit success of &lt;audit policy information&gt; : boolean

Returns the boolean audit success status of the specified audit policy information.Example: audit success of system policies of subcategory whose (name of it is &quot;User Account Management&quot;) of account management category of audit policy - Returns the TRUE/FALSE status of the specified audit policy subcategory.

#### audit failure of &lt;audit policy information&gt; : boolean

Returns the boolean audit failure status of the specified audit policy information.Example: (name of it, audit failure of system policy of it) of subcategories of category whose (name of it is &quot;System&quot;) of audit policy - Returns the names and audit failure status of each of the subcategories of the System audit policy category.

#### guid of &lt;audit policy information&gt; : string

No documentation exists for this property.

## audit policy category

Windows audit policies, as of Vista and later, are divided into categories. Currently there are 9 categories, including System, Logon/Logoff, Object Access, Privilege Use, Detailed Tracking, Policy Change, Account Management, DS Access and Account Logon.

#### subcategory of &lt;audit policy category&gt; : audit policy subcategory

Returns the subcategory for the specified audit policy category.

#### name of &lt;audit policy category&gt; : string

Returns the name of the specified audit policy category.

## audit policy

The &lt;audit policy&gt; inspectors return the policies put in place for recording information about security-related operations on the client computer. For example, you can set a policy to monitor the modification of files. This will trigger an audit entry showing whenever a file is modified, the associated user account, and the date and time of the action. You can audit both successful and failed attempts at actions. Often, the failed attempts are more interesting, as they may indicate attempts to unsuccessfully subvert a policy. For instance, a successful login is not as interesting as a repeated failure might be.

#### system category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the System category of the audit policy.

#### privilege use category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the Privilege Use category of the audit policy.

#### policy change category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the Policy Change category of the audit policy.

#### object access category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the Object Access category of the audit policy.

#### logon logoff category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the Logon/Logoff category of the audit policy.

#### ds access category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the DS Access category of the audit policy.

#### detailed tracking category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the Detailed Tracking category of the specified audit policy.

#### category of &lt;audit policy&gt; : audit policy category

Returns the categories of the specified audit policy.

#### account management category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the Account Management category of the audit policy.

#### account logon category of &lt;audit policy&gt; : audit policy category

Returns an object corresponding to the Account Logon category of the audit policy.

