# type: access control entry

An Access Control Entity, or ACE, is an entry in an access control list (ACL). An ACE contains a set of access rights and a security identifier (SID) that identifies a trustee for whom the rights are allowed, denied, or audited.

# access mode of &lt;access control entry&gt;

For a discretionary ACL (DACL), this flag indicates whether the ACL allows (1) or denies (3) the specified access rights.

# access system security permission of &lt;access control entry&gt;

No documentation exists.

# ace flag of &lt;access control entry&gt;

Returns the Access Control Entry (ACE) flag, an unsigned 8-bit integer containing a set of one-bit control flags related to inheritance and auditing. The values include:0x01 - OBJECT_INHERIT_ACE0x02 - CONTAINER_INHERIT_ACE0x04 - NO_PROPAGATE_INHERIT_ACE 0x08 - INHERIT_ONLY_ACE0x10 - INHERITED_ACE0x40 - SUCCESSFUL_ACCESS_ACE_FLAG  0x80 - FAILED_ACCESS_ACE_FLAG

# ace type of &lt;access control entry&gt;

Returns the Access Control Entry (ACE) type, an unsigned 8-bit integer containing a set of types related to granting and denying access. For more information, see the MSDN article on ACE_HEADER.

# append permission of &lt;access control entry&gt;

For a file ACE, returns `True` if the ACE grants or denies append permissions.

# audit failure of &lt;access control entry&gt;

Returns `True` if the ACE header flag has the value 0x80, indicating a failed access attempt.

# audit success of &lt;access control entry&gt;

Returns `True` if the ACE header flag has the value 0x40, indicating a successful access attempt.

# change notification permission of &lt;access control entry&gt;

For a registry key ACE, returns `True` if the ACE grants or denies change notification permissions.

# container inherit of &lt;access control entry&gt;

Returns `True` if the ACE header flag has the value 0x02, indicating that the OBJECT INHERITANCE is set.

# create file permission of &lt;access control entry&gt;

For a folder ACE, returns `True` if the ACE grants or denies create file permissions.

# create folder permission of &lt;access control entry&gt;

For a folder ACE, returns `True` if the ACE grants or denies create folder permissions.

# create link permission of &lt;access control entry&gt;

For a registry key ACE, returns `True` if the ACE grants or denies create key link permissions.

# create subkey permission of &lt;access control entry&gt;

For a registry key ACE, returns `True` if the ACE grants or denies creation of subkey permissions.

# delete child permission of &lt;access control entry&gt;

For a folder ACE, returns `True` if the ACE grants or denies child deletion permissions.

# delete permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or generic delete permissions.

# deny type of &lt;access control entry&gt;

Returns `True` if the ACE header type is ACCESS DENIED.

# enumerate subkeys permission of &lt;access control entry&gt;

For a registry key ACE, returns `True` if the ACE grants or enumerate subkey permissions.

# execute permission of &lt;access control entry&gt;

For a file ACE, returns `True` if the ACE grants or denies execute permissions.

# generic all permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies all generic permissions.

# generic execute permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies generic execute permissions.

# generic read permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies generic read permissions.

# generic write permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies generic write permissions.

# grant type of &lt;access control entry&gt;

Returns `True` if the ACE header type is ACCESS ALLOWED.

# inherit only of &lt;access control entry&gt;

Returns `True` if the ACE header flag has the value 0x08, indicating that the OBJECT INHERITANCE flag is set.

# inheritance of &lt;access control entry&gt;

A set of bit flags that determines whether other containers or objects can inherit the ACE from the primary object to which the ACL is attached. The actual values of the constants are:NO_INHERITANCE = 0SUB_OBJECTS_ONLY_INHERIT = 1SUB_CONTAINERS_ONLY_INHERIT = 2SUB_CONTAINERS_AND_OBJECTS_INHERIT = 3OJECT_INHERIT_ACE = 1CONTAINER_INHERIT_ACE = 2NO_PROPAGATE_INHERIT_ACE = 4INHERIT_ONLY_ACE = 8.

# inherited of &lt;access control entry&gt;

Returns `True` if the ACE header flag has the value 0x10, indicating that the INHERITED flag is set.

# list permission of &lt;access control entry&gt;

For a folder ACE, returns `True` if the ACE grants or denies list permissions.

# maximum allowed permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies maximum allowed permissions.

# no propagate inherit of &lt;access control entry&gt;

Returns `True` if the ACE header flag has the value 0x04, indicating that the NO PROPAGATE INHERIT flag is set.

# object inherit of &lt;access control entry&gt;

Returns `True` if the ACE header flag has the value 0x01, indicating that the OBJECT INHERIT flag is set.

# query value permission of &lt;access control entry&gt;

For a registry key ACE, returns `True` if the ACE grants or denies query value permissions.

# read attributes permission of &lt;access control entry&gt;

For a file or folder ACE, returns `True` if the ACE grants or denies read attributes permissions.

# read control permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies reading access control permissions.

# read extended attributes permission of &lt;access control entry&gt;

For a file or folder ACE, returns `True` if the ACE grants or denies read extended attributes permissions.

# read permission of &lt;access control entry&gt;

For a file ACE, returns `True` if the ACE grants or denies read permissions.

# set value permission of &lt;access control entry&gt;

For a registry key ACE, returns `True` if the ACE grants or denies set value permissions.

# synchronize permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies synchronize permissions.

# traverse permission of &lt;access control entry&gt;

For the specified folder ACE, returns `True` if it grants or denies traversefolder permission.

# trustee of &lt;access control entry&gt;

Returns the trustee to whom the specified ACE applies.

# trustee type of &lt;access control entry&gt;

Returns the type of trustee to whom the specified ACE applies.

# write attributes permission of &lt;access control entry&gt;

For a file or folder ACE, returns `True` if the ACE grants or denies write attribute permissions.

# write dac permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies write DAC permissions.

# write extended attributes permission of &lt;access control entry&gt;

For a file or folder ACE, returns `True` if the ACE grants or denies write extended attribute permissions.

# write owner permission of &lt;access control entry&gt;

For any ACE, returns `True` if the ACE grants or denies write owner permissions.

# write permission of &lt;access control entry&gt;

For a file ACE, returns `True` if the ACE grants or denies write permissions.
