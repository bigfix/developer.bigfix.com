---
title: access-control
---

## system access control list

The &lt;system access control list&gt; inspectors retrieve information from the access control list that controls the generation of audit messages for attempts to access a securable object. The ability to get or set an object&#39;s SACL is controlled by a privilege typically held only by system administrators.

#### &lt;system access control list&gt; as string : string

Converts the specified system access control list (SACL) into a string value in the Microsoft Security Descriptor String Format.

## security identifier

A Security Identifier, or SID, is a data structure that identifies user, group, and computer accounts. Every account on a network is issued a unique SID when the account is first created. Internal processes in Windows refer to an account&#39;s SID rather than the account&#39;s user or group name.

#### &lt;security identifier&gt; as string : string

Returns the security identifier in string format.

#### domain name of &lt;security identifier&gt; : string

Returns the domain name of the first domain on which the specified SID is found.

#### component string of &lt;security identifier&gt; : string

This Windows-specific inspector returns a string formatted using the ConvertSidToStringSid windows API, discussed at: http://msdn2.microsoft.com/en-us/library/aa376399(VS.85).aspx.Example: component string of owner of security descriptor of windows folder - Returns a string of the form: S-1-5-32-544.

#### account name of &lt;security identifier&gt; : string

Retrieves the name of the account for this SID and the name of the first domain on which this SID is found.

#### user of &lt;security identifier&gt; : user

No documentation exists for this property.

## security descriptor

The &lt;security descriptor&gt; objects are structures and associated data that contain the security information for a securable object. A security descriptor identifies the object&#39;s owner and primary group. It can also contain a DACL that controls access to the object, and a SACL that controls the logging of attempts to access the object.

#### &lt;security descriptor&gt; as string : string

Returns the security descriptor in string format.

#### sacl of &lt;security descriptor&gt; : system access control list

Returns the system access control list (SACL), an ACL that controls the generation of audit messages for attempts to access a securable object.

#### owner of &lt;security descriptor&gt; : security identifier

Returns the security identifier of the owner of the specified security descriptor.

#### group of &lt;security descriptor&gt; : security identifier

Returns the security identifier of the group of the specified security descriptor.

#### dacl of &lt;security descriptor&gt; : discretionary access control list

Returns the discretionary access control list (DACL) that identifies the users and groups who are allowed or denied access to the specified security descriptor.

#### control of &lt;security descriptor&gt; : integer

Returns the integer property obtained by using the Microsoft Windows GetSecurityDescriptorControl API. This integer contains bits that indicate DACL behaviors as well as default behaviors. See the MSDN documentation of SECURITY_DESCRIPTOR_CONTROL for more information.

#### null sacl of &lt;security descriptor&gt; : boolean

No documentation exists for this property.

#### null dacl of &lt;security descriptor&gt; : boolean

No documentation exists for this property.

## security database

The &lt;security database&gt; inspectors retrieve information from the security accounts manager (SAM) database or, in the case of domain controllers, the Active Directory. The Security database and its properties expose the NetUserModalsGet API, levels 0 and 3. For more information, see the NetUserModalsGet Function at the MSDN site: http://msdn.microsoft.com.

#### password history length of &lt;security database&gt; : integer

Returns the integer length of the password history maintained by the security database. A new password cannot match any of the previous passwords in the specified history. For more information, see the MSDN article on NetUserModalsGet.

#### minimum password length of &lt;security database&gt; : integer

Returns an integer corresponding to the minimum password length found in the specified security database.

#### minimum password age of &lt;security database&gt; : time interval

Returns a time interval corresponding to the minimum password age found in the specified security database.

#### maximum password age of &lt;security database&gt; : time interval

Returns a time interval corresponding to the maximum password age found in the specified security database. This will not exist if the password never expires.

#### force logoff interval of &lt;security database&gt; : time interval

Returns the time interval between the end of the valid logon time and the time when the user must log off the network. A value of zero indicates that the user must log off immediately as soon as the valid logon time expires. This will not exist if the user is never forced to log off. For more information, see the MSDN article on NetUserModalsGet.

#### account lockout threshold of &lt;security database&gt; : integer

Returns an integer corresponding to the number of invalid password authentications that can occur before an account is marked &#39;locked out.&#39; For more information, see the MSDN article on NetUserModalsGet.

#### account lockout observation window of &lt;security database&gt; : time interval

Returns a time interval corresponding to the maximum time that can elapse between any two failed logon attempts before lockout occurs. For more information, see the MSDN article on NetUserModalsGet.

#### account lockout duration of &lt;security database&gt; : time interval

Returns the time interval corresponding to how long a locked account remains locked before it is automatically unlocked. This may not exist for locked accounts that remain locked until an administrator unlocks them. For more information, see the MSDN article on NetUserModalsGet.

## security account

The &lt;security account&gt; type serves as a base type for the &quot;user&quot; and &quot;local group&quot; types and for properties common to users and groups.

#### sid of &lt;security account&gt; : security identifier

Returns the Security ID (SID) associated with the specified security account.

#### privilege of &lt;security account&gt; : string

Returns a string describing the privileges assigned to the specified security account. For more information, see the MSDN article on LsaEnumerateAccountRights. For a description of the possible constants that can be returned, see the articles on Account Rights Constants and Privilege Constants.

## discretionary access control list

The &lt;discretionary access control list&gt; inspectors retrieve information from the access control list that is monitored by the owner of the object and specifies what kinds of access particular users or groups can have to the specified object.

#### &lt;discretionary access control list&gt; as string : string

Converts the discretionary system access control list (DACL) into a string value in the Microsoft Security Descriptor String Format.

## access control list

An Access Control List, or ACL, is a list of security protections that applies to an object. An object can be a file, process, event, or anything else having a security descriptor. An entry in an access control list (ACL) is an access control entry (ACE). These inspectors work by exposing the GetEffectiveRightsFromAcl method, as explained at the MSDN site. Note: Requires Windows XP, Windows 2000 Professional, or Windows NT Workstation 3.1 and later.

#### entry of &lt;access control list&gt; : access control entry

Iterates the ACEs of an ACL.

#### effective write permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has write permissions on the given access control list.

#### effective write permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has write permissions on the given access control list.

#### effective write owner permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has write owner permissions on the given access control list.

#### effective write owner permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has write owner permissions on the given access control list.

#### effective write extended attributes permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has extended attribute writing permissions on the given access control list.

#### effective write extended attributes permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has extended attribute writing permissions on the given access control list.

#### effective write dac permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has dac writing permissions on the given access control list.

#### effective write dac permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has dac writing permissions on the given access control list.

#### effective write attributes permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has attribute writing permissions on the given access control list.

#### effective write attributes permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has attribute writing permissions on the given access control list.

#### effective traverse permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has traverse permissions on the given access control list.

#### effective traverse permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has traverse permissions on the given access control list.

#### effective synchronize permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has synchronization permissions on the given access control list.Example: effective synchronize permission for &quot;Administrators&quot; of dacls of security descriptors of system folder - Returns TRUE if the Administrator has permission to syncrhonize with the system folder.

#### effective synchronize permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has synchronization permissions on the given access control list.

#### effective set value permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has value setting permissions on the given access control list.

#### effective set value permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has value setting permissions on the given access control list.

#### effective read permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has read permissions on the given access control list.

#### effective read permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has read permissions on the given access control list.

#### effective read extended attributes permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has extended read attribute permissions on the given access control list.

#### effective read extended attributes permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has extended read attribute permissions on the given access control list.

#### effective read control permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has read control permissions on the given access control list.

#### effective read control permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has read control permissions on the given access control list.

#### effective read attributes permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has read attribute permissions on the given access control list.

#### effective read attributes permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has read attribute permissions on the given access control list.

#### effective query value permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has query value permissions on the given access control list.

#### effective query value permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has query value permissions on the given access control list.

#### effective maximum allowed permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has maximum allowed permissions on the given access control list.

#### effective maximum allowed permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has maximum allowed permissions on the given access control list.

#### effective list permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has list permissions on the given access control list.

#### effective list permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has list permissions on the given access control list.

#### effective generic write permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has generic write permissions on the given access control list.

#### effective generic write permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has generic write permissions on the given access control list.

#### effective generic read permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has generic read permissions on the given access control list.

#### effective generic read permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has generic read permissions on the given access control list.

#### effective generic execute permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has generic execution permissions on the given access control list.

#### effective generic execute permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has generic execution permissions on the given access control list.

#### effective generic all permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has all generic permissions on the given access control list.

#### effective generic all permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has all generic permissions on the given access control list.

#### effective execute permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has execution permissions on the given access control list.

#### effective execute permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has execution permissions on the given access control list.

#### effective enumerate subkeys permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has subkey enumeration permissions on the given access control list.

#### effective enumerate subkeys permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the specified security account provides the right to list the subkeys of a registry key.

#### effective delete permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has delete permissions on the given access control list.

#### effective delete permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has delete permissions on the given access control list.

#### effective delete child permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has child deletion permissions on the given access control list.

#### effective delete child permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has child deletion permissions on the given access control list.

#### effective create subkey permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has subkey creation permissions on the given access control list.

#### effective create subkey permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has subkey creation permissions on the given access control list.

#### effective create link permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has link creation permissions on the given access control list.

#### effective create link permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has link creation permissions on the given access control list.

#### effective create folder permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has folder creation permissions on the given access control list.Example: effective create folder permissions for &quot;Administrators&quot; of dacls of security descriptors of folders of folder &quot;c:\&quot; - Returns a list of TRUE/FALSE values corresponding to the ability of the Administrator to create new folders in each of the existing folders of the c: drive.

#### effective create folder permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has folder creation permissions on the given access control list.

#### effective create file permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has file creation permissions on the given access control list.

#### effective create file permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has file creation permissions on the given access control list.

#### effective change notification permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has change notification permissions on the given access control list.

#### effective change notification permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has change notification permissions on the given access control list.

#### effective append permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has append permissions on the given access control list.Example: effective append permission for &quot;Power Users&quot; of dacls of security descriptors of windows folder - Returns TRUE if Power Users have append permissions on the system folder.

#### effective append permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has append permissions on the given access control list.

#### effective access system security permission for &lt;string&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by &lt;string&gt; has access system security permissions on the given access control list.

#### effective access system security permission for &lt;security account&gt; of &lt;access control list&gt; : boolean

Returns TRUE if the trustee specified by the security account has access system security permissions on the given access control list.

#### effective access mode for &lt;string&gt; of &lt;access control list&gt; : integer

Returns an integer corresponding to the access mode for the trustee specified by &lt;string&gt; of the given access control list.Example: effective access mode for &quot;Administrators&quot; of dacls of security descriptors of system folder as hexadecimal - Returns a hex value corresponding to the access mode of the system folder for users logged in as Administrators.

#### effective access mode for &lt;security account&gt; of &lt;access control list&gt; : integer

Returns an integer corresponding to the access mode for the trustee specified by the security account of the given access control list.

## access control entry

An Access Control Entity, or ACE, is an entry in an access control list (ACL). An ACE contains a set of access rights and a security identifier (SID) that identifies a trustee for whom the rights are allowed, denied, or audited.

#### write permission of &lt;access control entry&gt; : boolean

For a file ACE, returns TRUE if the ACE grants or denies write permissions.

#### write owner permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies write owner permissions.

#### write extended attributes permission of &lt;access control entry&gt; : boolean

For a file or folder ACE, returns TRUE if the ACE grants or denies write extended attribute permissions.

#### write dac permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies write DAC permissions.

#### write attributes permission of &lt;access control entry&gt; : boolean

For a file or folder ACE, returns TRUE if the ACE grants or denies write attribute permissions.

#### trustee type of &lt;access control entry&gt; : integer

Returns the type of trustee to whom the specified ACE applies.

#### trustee of &lt;access control entry&gt; : security identifier

Returns the trustee to whom the specified ACE applies.

#### traverse permission of &lt;access control entry&gt; : boolean

For the specified folder ACE, returns TRUE if it grants or denies traversefolder permission.

#### synchronize permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies synchronize permissions.

#### set value permission of &lt;access control entry&gt; : boolean

For a registry key ACE, returns TRUE if the ACE grants or denies set value permissions.

#### read permission of &lt;access control entry&gt; : boolean

For a file ACE, returns TRUE if the ACE grants or denies read permissions.

#### read extended attributes permission of &lt;access control entry&gt; : boolean

For a file or folder ACE, returns TRUE if the ACE grants or denies read extended attributes permissions.

#### read control permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies reading access control permissions.

#### read attributes permission of &lt;access control entry&gt; : boolean

For a file or folder ACE, returns TRUE if the ACE grants or denies read attributes permissions.

#### query value permission of &lt;access control entry&gt; : boolean

For a registry key ACE, returns TRUE if the ACE grants or denies query value permissions.

#### maximum allowed permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies maximum allowed permissions.

#### list permission of &lt;access control entry&gt; : boolean

For a folder ACE, returns TRUE if the ACE grants or denies list permissions.

#### inheritance of &lt;access control entry&gt; : integer

A set of bit flags that determines whether other containers or objects can inherit the ACE from the primary object to which the ACL is attached. The actual values of the constants are:NO_INHERITANCE = 0SUB_OBJECTS_ONLY_INHERIT = 1SUB_CONTAINERS_ONLY_INHERIT = 2SUB_CONTAINERS_AND_OBJECTS_INHERIT = 3OJECT_INHERIT_ACE = 1CONTAINER_INHERIT_ACE = 2NO_PROPAGATE_INHERIT_ACE = 4INHERIT_ONLY_ACE = 8.

#### generic write permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies generic write permissions.

#### generic read permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies generic read permissions.

#### generic execute permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies generic execute permissions.

#### generic all permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or denies all generic permissions.

#### execute permission of &lt;access control entry&gt; : boolean

For a file ACE, returns TRUE if the ACE grants or denies execute permissions.

#### enumerate subkeys permission of &lt;access control entry&gt; : boolean

For a registry key ACE, returns TRUE if the ACE grants or enumerate subkey permissions.

#### delete permission of &lt;access control entry&gt; : boolean

For any ACE, returns TRUE if the ACE grants or generic delete permissions.

#### delete child permission of &lt;access control entry&gt; : boolean

For a folder ACE, returns TRUE if the ACE grants or denies child deletion permissions.

#### create subkey permission of &lt;access control entry&gt; : boolean

For a registry key ACE, returns TRUE if the ACE grants or denies creation of subkey permissions.

#### create link permission of &lt;access control entry&gt; : boolean

For a registry key ACE, returns TRUE if the ACE grants or denies create key link permissions.

#### create folder permission of &lt;access control entry&gt; : boolean

For a folder ACE, returns TRUE if the ACE grants or denies create folder permissions.

#### create file permission of &lt;access control entry&gt; : boolean

For a folder ACE, returns TRUE if the ACE grants or denies create file permissions.

#### change notification permission of &lt;access control entry&gt; : boolean

For a registry key ACE, returns TRUE if the ACE grants or denies change notification permissions.

#### append permission of &lt;access control entry&gt; : boolean

For a file ACE, returns TRUE if the ACE grants or denies append permissions.

#### access mode of &lt;access control entry&gt; : integer

For a discretionary ACL (DACL), this flag indicates whether the ACL allows (1) or denies (3) the specified access rights.

#### object inherit of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header flag has the value 0x01, indicating that the OBJECT INHERIT flag is set.

#### no propagate inherit of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header flag has the value 0x04, indicating that the NO PROPAGATE INHERIT flag is set.

#### inherited of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header flag has the value 0x10, indicating that the INHERITED flag is set.

#### inherit only of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header flag has the value 0x08, indicating that the OBJECT INHERITANCE flag is set.

#### grant type of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header type is ACCESS ALLOWED.

#### deny type of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header type is ACCESS DENIED.

#### container inherit of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header flag has the value 0x02, indicating that the OBJECT INHERITANCE is set.

#### audit success of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header flag has the value 0x40, indicating a successful access attempt.

#### audit failure of &lt;access control entry&gt; : boolean

Returns TRUE if the ACE header flag has the value 0x80, indicating a failed access attempt.

#### ace type of &lt;access control entry&gt; : integer

Returns the Access Control Entry (ACE) type, an unsigned 8-bit integer containing a set of types related to granting and denying access. For more information, see the MSDN article on ACE_HEADER.

#### ace flag of &lt;access control entry&gt; : integer

Returns the Access Control Entry (ACE) flag, an unsigned 8-bit integer containing a set of one-bit control flags related to inheritance and auditing. The values include:0x01 - OBJECT_INHERIT_ACE0x02 - CONTAINER_INHERIT_ACE0x04 - NO_PROPAGATE_INHERIT_ACE 0x08 - INHERIT_ONLY_ACE0x10 - INHERITED_ACE0x40 - SUCCESSFUL_ACCESS_ACE_FLAG  0x80 - FAILED_ACCESS_ACE_FLAG

#### access system security permission of &lt;access control entry&gt; : boolean

No documentation exists for this property.

