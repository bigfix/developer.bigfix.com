# type: audit policy information

The &lt;audit policy information&lt; inspectors return the two attributes of the audit policy for a given subcategory: whether or not succesful operations will be audited ("audit success"), and whether or not unsuccessful operations will be audited ("audit failure").

# audit failure of &lt;audit policy information&gt; : boolean

Returns the boolean audit failure status of the specified audit policy information.Example: (name of it, audit failure of system policy of it) of subcategories of category whose (name of it is "System") of audit policy - Returns the names and audit failure status of each of the subcategories of the System audit policy category.

# audit success of &lt;audit policy information&gt; : boolean

Returns the boolean audit success status of the specified audit policy information.Example: audit success of system policies of subcategory whose (name of it is "User Account Management") of account management category of audit policy - Returns the TRUE/FALSE status of the specified audit policy subcategory.

# guid of &lt;audit policy information&gt; : string

No documentation exists.
