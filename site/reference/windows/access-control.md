---
title: access-control
---

{% type system access control list%}

The &lt;system access control list&gt; inspectors retrieve information from the access control list that controls the generation of audit messages for attempts to access a securable object. The ability to get or set an object&#39;s SACL is controlled by a privilege typically held only by system administrators.

#### Casts

{% property <system access control list> as string %}

Converts the specified system access control list (SACL) into a string value in the Microsoft Security Descriptor String Format.

{% type security identifier%}

A Security Identifier, or SID, is a data structure that identifies user, group, and computer accounts. Every account on a network is issued a unique SID when the account is first created. Internal processes in Windows refer to an account&#39;s SID rather than the account&#39;s user or group name.

#### Casts

{% property <security identifier> as string %}

Returns the security identifier in string format.

#### Properties

{% property domain name of <security identifier> %}

Returns the domain name of the first domain on which the specified SID is found.

{% property component string of <security identifier> %}

This Windows-specific inspector returns a string formatted using the ConvertSidToStringSid windows API, discussed at: http://msdn2.microsoft.com/en-us/library/aa376399(VS.85).aspx.Example: component string of owner of security descriptor of windows folder - Returns a string of the form: S-1-5-32-544.

{% property account name of <security identifier> %}

Retrieves the name of the account for this SID and the name of the first domain on which this SID is found.

{% property user of <security identifier> %}

No documentation exists for this property.

{% type security descriptor%}

The &lt;security descriptor&gt; objects are structures and associated data that contain the security information for a securable object. A security descriptor identifies the object&#39;s owner and primary group. It can also contain a DACL that controls access to the object, and a SACL that controls the logging of attempts to access the object.

#### Casts

{% property <security descriptor> as string %}

Returns the security descriptor in string format.

#### Properties

{% property sacl of <security descriptor> %}

Returns the system access control list (SACL), an ACL that controls the generation of audit messages for attempts to access a securable object.

{% property owner of <security descriptor> %}

Returns the security identifier of the owner of the specified security descriptor.

{% property group of <security descriptor> %}

Returns the security identifier of the group of the specified security descriptor.

{% property dacl of <security descriptor> %}

Returns the discretionary access control list (DACL) that identifies the users and groups who are allowed or denied access to the specified security descriptor.

{% property control of <security descriptor> %}

Returns the integer property obtained by using the Microsoft Windows GetSecurityDescriptorControl API. This integer contains bits that indicate DACL behaviors as well as default behaviors. See the MSDN documentation of SECURITY_DESCRIPTOR_CONTROL for more information.

{% property null sacl of <security descriptor> %}

No documentation exists for this property.

{% property null dacl of <security descriptor> %}

No documentation exists for this property.

{% type security database%}

The &lt;security database&gt; inspectors retrieve information from the security accounts manager (SAM) database or, in the case of domain controllers, the Active Directory. The Security database and its properties expose the NetUserModalsGet API, levels 0 and 3. For more information, see the NetUserModalsGet Function at the MSDN site: http://msdn.microsoft.com.

#### Properties

{% property password history length of <security database> %}

Returns the integer length of the password history maintained by the security database. A new password cannot match any of the previous passwords in the specified history. For more information, see the MSDN article on NetUserModalsGet.

{% property minimum password length of <security database> %}

Returns an integer corresponding to the minimum password length found in the specified security database.

{% property minimum password age of <security database> %}

Returns a time interval corresponding to the minimum password age found in the specified security database.

{% property maximum password age of <security database> %}

Returns a time interval corresponding to the maximum password age found in the specified security database. This will not exist if the password never expires.

{% property force logoff interval of <security database> %}

Returns the time interval between the end of the valid logon time and the time when the user must log off the network. A value of zero indicates that the user must log off immediately as soon as the valid logon time expires. This will not exist if the user is never forced to log off. For more information, see the MSDN article on NetUserModalsGet.

{% property account lockout threshold of <security database> %}

Returns an integer corresponding to the number of invalid password authentications that can occur before an account is marked &#39;locked out.&#39; For more information, see the MSDN article on NetUserModalsGet.

{% property account lockout observation window of <security database> %}

Returns a time interval corresponding to the maximum time that can elapse between any two failed logon attempts before lockout occurs. For more information, see the MSDN article on NetUserModalsGet.

{% property account lockout duration of <security database> %}

Returns the time interval corresponding to how long a locked account remains locked before it is automatically unlocked. This may not exist for locked accounts that remain locked until an administrator unlocks them. For more information, see the MSDN article on NetUserModalsGet.

{% type security account%}

The &lt;security account&gt; type serves as a base type for the &quot;user&quot; and &quot;local group&quot; types and for properties common to users and groups.

#### Properties

{% property sid of <security account> %}

Returns the Security ID (SID) associated with the specified security account.

{% property privilege of <security account> %}

Returns a string describing the privileges assigned to the specified security account. For more information, see the MSDN article on LsaEnumerateAccountRights. For a description of the possible constants that can be returned, see the articles on Account Rights Constants and Privilege Constants.

{% type discretionary access control list%}

The &lt;discretionary access control list&gt; inspectors retrieve information from the access control list that is monitored by the owner of the object and specifies what kinds of access particular users or groups can have to the specified object.

#### Casts

{% property <discretionary access control list> as string %}

Converts the discretionary system access control list (DACL) into a string value in the Microsoft Security Descriptor String Format.

{% type access control list%}

An Access Control List, or ACL, is a list of security protections that applies to an object. An object can be a file, process, event, or anything else having a security descriptor. An entry in an access control list (ACL) is an access control entry (ACE). These inspectors work by exposing the GetEffectiveRightsFromAcl method, as explained at the MSDN site. Note: Requires Windows XP, Windows 2000 Professional, or Windows NT Workstation 3.1 and later.

#### Properties

{% property entry of <access control list> %}

Iterates the ACEs of an ACL.

{% property effective write permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has write permissions on the given access control list.

{% property effective write permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has write permissions on the given access control list.

{% property effective write owner permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has write owner permissions on the given access control list.

{% property effective write owner permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has write owner permissions on the given access control list.

{% property effective write extended attributes permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has extended attribute writing permissions on the given access control list.

{% property effective write extended attributes permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has extended attribute writing permissions on the given access control list.

{% property effective write dac permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has dac writing permissions on the given access control list.

{% property effective write dac permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has dac writing permissions on the given access control list.

{% property effective write attributes permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has attribute writing permissions on the given access control list.

{% property effective write attributes permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has attribute writing permissions on the given access control list.

{% property effective traverse permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has traverse permissions on the given access control list.

{% property effective traverse permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has traverse permissions on the given access control list.

{% property effective synchronize permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has synchronization permissions on the given access control list.Example: effective synchronize permission for &quot;Administrators&quot; of dacls of security descriptors of system folder - Returns TRUE if the Administrator has permission to syncrhonize with the system folder.

{% property effective synchronize permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has synchronization permissions on the given access control list.

{% property effective set value permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has value setting permissions on the given access control list.

{% property effective set value permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has value setting permissions on the given access control list.

{% property effective read permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has read permissions on the given access control list.

{% property effective read permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has read permissions on the given access control list.

{% property effective read extended attributes permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has extended read attribute permissions on the given access control list.

{% property effective read extended attributes permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has extended read attribute permissions on the given access control list.

{% property effective read control permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has read control permissions on the given access control list.

{% property effective read control permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has read control permissions on the given access control list.

{% property effective read attributes permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has read attribute permissions on the given access control list.

{% property effective read attributes permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has read attribute permissions on the given access control list.

{% property effective query value permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has query value permissions on the given access control list.

{% property effective query value permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has query value permissions on the given access control list.

{% property effective maximum allowed permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by the security account has maximum allowed permissions on the given access control list.

{% property effective maximum allowed permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has maximum allowed permissions on the given access control list.

{% property effective list permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has list permissions on the given access control list.

{% property effective list permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has list permissions on the given access control list.

{% property effective generic write permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by the security account has generic write permissions on the given access control list.

{% property effective generic write permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has generic write permissions on the given access control list.

{% property effective generic read permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by the security account has generic read permissions on the given access control list.

{% property effective generic read permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has generic read permissions on the given access control list.

{% property effective generic execute permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by the security account has generic execution permissions on the given access control list.

{% property effective generic execute permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has generic execution permissions on the given access control list.

{% property effective generic all permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has all generic permissions on the given access control list.

{% property effective generic all permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has all generic permissions on the given access control list.

{% property effective execute permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has execution permissions on the given access control list.

{% property effective execute permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has execution permissions on the given access control list.

{% property effective enumerate subkeys permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has subkey enumeration permissions on the given access control list.

{% property effective enumerate subkeys permission for <security account> of <access control list> %}

Returns TRUE if the specified security account provides the right to list the subkeys of a registry key.

{% property effective delete permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has delete permissions on the given access control list.

{% property effective delete permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has delete permissions on the given access control list.

{% property effective delete child permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has child deletion permissions on the given access control list.

{% property effective delete child permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has child deletion permissions on the given access control list.

{% property effective create subkey permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has subkey creation permissions on the given access control list.

{% property effective create subkey permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has subkey creation permissions on the given access control list.

{% property effective create link permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has link creation permissions on the given access control list.

{% property effective create link permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has link creation permissions on the given access control list.

{% property effective create folder permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has folder creation permissions on the given access control list.Example: effective create folder permissions for &quot;Administrators&quot; of dacls of security descriptors of folders of folder &quot;c:\&quot; - Returns a list of TRUE/FALSE values corresponding to the ability of the Administrator to create new folders in each of the existing folders of the c: drive.

{% property effective create folder permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has folder creation permissions on the given access control list.

{% property effective create file permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has file creation permissions on the given access control list.

{% property effective create file permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has file creation permissions on the given access control list.

{% property effective change notification permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has change notification permissions on the given access control list.

{% property effective change notification permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has change notification permissions on the given access control list.

{% property effective append permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has append permissions on the given access control list.Example: effective append permission for &quot;Power Users&quot; of dacls of security descriptors of windows folder - Returns TRUE if Power Users have append permissions on the system folder.

{% property effective append permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has append permissions on the given access control list.

{% property effective access system security permission for <string> of <access control list> %}

Returns TRUE if the trustee specified by &lt;string&gt; has access system security permissions on the given access control list.

{% property effective access system security permission for <security account> of <access control list> %}

Returns TRUE if the trustee specified by the security account has access system security permissions on the given access control list.

{% property effective access mode for <string> of <access control list> %}

Returns an integer corresponding to the access mode for the trustee specified by &lt;string&gt; of the given access control list.Example: effective access mode for &quot;Administrators&quot; of dacls of security descriptors of system folder as hexadecimal - Returns a hex value corresponding to the access mode of the system folder for users logged in as Administrators.

{% property effective access mode for <security account> of <access control list> %}

Returns an integer corresponding to the access mode for the trustee specified by the security account of the given access control list.

{% type access control entry%}

An Access Control Entity, or ACE, is an entry in an access control list (ACL). An ACE contains a set of access rights and a security identifier (SID) that identifies a trustee for whom the rights are allowed, denied, or audited.

#### Properties

{% property write permission of <access control entry> %}

For a file ACE, returns TRUE if the ACE grants or denies write permissions.

{% property write owner permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies write owner permissions.

{% property write extended attributes permission of <access control entry> %}

For a file or folder ACE, returns TRUE if the ACE grants or denies write extended attribute permissions.

{% property write dac permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies write DAC permissions.

{% property write attributes permission of <access control entry> %}

For a file or folder ACE, returns TRUE if the ACE grants or denies write attribute permissions.

{% property trustee type of <access control entry> %}

Returns the type of trustee to whom the specified ACE applies.

{% property trustee of <access control entry> %}

Returns the trustee to whom the specified ACE applies.

{% property traverse permission of <access control entry> %}

For the specified folder ACE, returns TRUE if it grants or denies traversefolder permission.

{% property synchronize permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies synchronize permissions.

{% property set value permission of <access control entry> %}

For a registry key ACE, returns TRUE if the ACE grants or denies set value permissions.

{% property read permission of <access control entry> %}

For a file ACE, returns TRUE if the ACE grants or denies read permissions.

{% property read extended attributes permission of <access control entry> %}

For a file or folder ACE, returns TRUE if the ACE grants or denies read extended attributes permissions.

{% property read control permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies reading access control permissions.

{% property read attributes permission of <access control entry> %}

For a file or folder ACE, returns TRUE if the ACE grants or denies read attributes permissions.

{% property query value permission of <access control entry> %}

For a registry key ACE, returns TRUE if the ACE grants or denies query value permissions.

{% property maximum allowed permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies maximum allowed permissions.

{% property list permission of <access control entry> %}

For a folder ACE, returns TRUE if the ACE grants or denies list permissions.

{% property inheritance of <access control entry> %}

A set of bit flags that determines whether other containers or objects can inherit the ACE from the primary object to which the ACL is attached. The actual values of the constants are:NO_INHERITANCE = 0SUB_OBJECTS_ONLY_INHERIT = 1SUB_CONTAINERS_ONLY_INHERIT = 2SUB_CONTAINERS_AND_OBJECTS_INHERIT = 3OJECT_INHERIT_ACE = 1CONTAINER_INHERIT_ACE = 2NO_PROPAGATE_INHERIT_ACE = 4INHERIT_ONLY_ACE = 8.

{% property generic write permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies generic write permissions.

{% property generic read permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies generic read permissions.

{% property generic execute permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies generic execute permissions.

{% property generic all permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or denies all generic permissions.

{% property execute permission of <access control entry> %}

For a file ACE, returns TRUE if the ACE grants or denies execute permissions.

{% property enumerate subkeys permission of <access control entry> %}

For a registry key ACE, returns TRUE if the ACE grants or enumerate subkey permissions.

{% property delete permission of <access control entry> %}

For any ACE, returns TRUE if the ACE grants or generic delete permissions.

{% property delete child permission of <access control entry> %}

For a folder ACE, returns TRUE if the ACE grants or denies child deletion permissions.

{% property create subkey permission of <access control entry> %}

For a registry key ACE, returns TRUE if the ACE grants or denies creation of subkey permissions.

{% property create link permission of <access control entry> %}

For a registry key ACE, returns TRUE if the ACE grants or denies create key link permissions.

{% property create folder permission of <access control entry> %}

For a folder ACE, returns TRUE if the ACE grants or denies create folder permissions.

{% property create file permission of <access control entry> %}

For a folder ACE, returns TRUE if the ACE grants or denies create file permissions.

{% property change notification permission of <access control entry> %}

For a registry key ACE, returns TRUE if the ACE grants or denies change notification permissions.

{% property append permission of <access control entry> %}

For a file ACE, returns TRUE if the ACE grants or denies append permissions.

{% property access mode of <access control entry> %}

For a discretionary ACL (DACL), this flag indicates whether the ACL allows (1) or denies (3) the specified access rights.

{% property object inherit of <access control entry> %}

Returns TRUE if the ACE header flag has the value 0x01, indicating that the OBJECT INHERIT flag is set.

{% property no propagate inherit of <access control entry> %}

Returns TRUE if the ACE header flag has the value 0x04, indicating that the NO PROPAGATE INHERIT flag is set.

{% property inherited of <access control entry> %}

Returns TRUE if the ACE header flag has the value 0x10, indicating that the INHERITED flag is set.

{% property inherit only of <access control entry> %}

Returns TRUE if the ACE header flag has the value 0x08, indicating that the OBJECT INHERITANCE flag is set.

{% property grant type of <access control entry> %}

Returns TRUE if the ACE header type is ACCESS ALLOWED.

{% property deny type of <access control entry> %}

Returns TRUE if the ACE header type is ACCESS DENIED.

{% property container inherit of <access control entry> %}

Returns TRUE if the ACE header flag has the value 0x02, indicating that the OBJECT INHERITANCE is set.

{% property audit success of <access control entry> %}

Returns TRUE if the ACE header flag has the value 0x40, indicating a successful access attempt.

{% property audit failure of <access control entry> %}

Returns TRUE if the ACE header flag has the value 0x80, indicating a failed access attempt.

{% property ace type of <access control entry> %}

Returns the Access Control Entry (ACE) type, an unsigned 8-bit integer containing a set of types related to granting and denying access. For more information, see the MSDN article on ACE_HEADER.

{% property ace flag of <access control entry> %}

Returns the Access Control Entry (ACE) flag, an unsigned 8-bit integer containing a set of one-bit control flags related to inheritance and auditing. The values include:0x01 - OBJECT_INHERIT_ACE0x02 - CONTAINER_INHERIT_ACE0x04 - NO_PROPAGATE_INHERIT_ACE 0x08 - INHERIT_ONLY_ACE0x10 - INHERITED_ACE0x40 - SUCCESSFUL_ACCESS_ACE_FLAG  0x80 - FAILED_ACCESS_ACE_FLAG

{% property access system security permission of <access control entry> %}

No documentation exists for this property.

