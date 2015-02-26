# type: access control list

An Access Control List, or ACL, is a list of security protections that applies to an object. An object can be a file, process, event, or anything else having a security descriptor. An entry in an access control list (ACL) is an access control entry (ACE). These inspectors work by exposing the GetEffectiveRightsFromAcl method, as explained at the MSDN site. Note: Requires Windows XP, Windows 2000 Professional, or Windows NT Workstation 3.1 and later.

# effective access mode for &lt;security account&gt; of &lt;access control list&gt;

Returns an integer corresponding to the access mode for the trustee specified by the security account of the given access control list.

# effective access mode for &lt;string&gt; of &lt;access control list&gt;

Returns an integer corresponding to the access mode for the trustee specified by &lt;string&gt; of the given access control list.Example: effective access mode for &quot;Administrators&quot; of dacls of security descriptors of system folder as hexadecimal - Returns a hex value corresponding to the access mode of the system folder for users logged in as Administrators.

# effective access system security permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has access system security permissions on the given access control list.

# effective access system security permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has access system security permissions on the given access control list.

# effective append permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has append permissions on the given access control list.

# effective append permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has append permissions on the given access control list.Example: effective append permission for &quot;Power Users&quot; of dacls of security descriptors of windows folder - Returns `True` if Power Users have append permissions on the system folder.

# effective change notification permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has change notification permissions on the given access control list.

# effective change notification permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has change notification permissions on the given access control list.

# effective create file permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has file creation permissions on the given access control list.

# effective create file permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has file creation permissions on the given access control list.

# effective create folder permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has folder creation permissions on the given access control list.

# effective create folder permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has folder creation permissions on the given access control list.Example: effective create folder permissions for &quot;Administrators&quot; of dacls of security descriptors of folders of folder &quot;c:\&quot; - Returns a list of TRUE/FALSE values corresponding to the ability of the Administrator to create new folders in each of the existing folders of the c: drive.

# effective create link permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has link creation permissions on the given access control list.

# effective create link permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has link creation permissions on the given access control list.

# effective create subkey permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has subkey creation permissions on the given access control list.

# effective create subkey permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has subkey creation permissions on the given access control list.

# effective delete child permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has child deletion permissions on the given access control list.

# effective delete child permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has child deletion permissions on the given access control list.

# effective delete permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has delete permissions on the given access control list.

# effective delete permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has delete permissions on the given access control list.

# effective enumerate subkeys permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the specified security account provides the right to list the subkeys of a registry key.

# effective enumerate subkeys permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has subkey enumeration permissions on the given access control list.

# effective execute permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has execution permissions on the given access control list.

# effective execute permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has execution permissions on the given access control list.

# effective generic all permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has all generic permissions on the given access control list.

# effective generic all permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has all generic permissions on the given access control list.

# effective generic execute permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has generic execution permissions on the given access control list.

# effective generic execute permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has generic execution permissions on the given access control list.

# effective generic read permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has generic read permissions on the given access control list.

# effective generic read permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has generic read permissions on the given access control list.

# effective generic write permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has generic write permissions on the given access control list.

# effective generic write permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has generic write permissions on the given access control list.

# effective list permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has list permissions on the given access control list.

# effective list permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has list permissions on the given access control list.

# effective maximum allowed permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has maximum allowed permissions on the given access control list.

# effective maximum allowed permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has maximum allowed permissions on the given access control list.

# effective query value permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has query value permissions on the given access control list.

# effective query value permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has query value permissions on the given access control list.

# effective read attributes permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has read attribute permissions on the given access control list.

# effective read attributes permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has read attribute permissions on the given access control list.

# effective read control permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has read control permissions on the given access control list.

# effective read control permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has read control permissions on the given access control list.

# effective read extended attributes permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has extended read attribute permissions on the given access control list.

# effective read extended attributes permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has extended read attribute permissions on the given access control list.

# effective read permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has read permissions on the given access control list.

# effective read permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has read permissions on the given access control list.

# effective set value permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has value setting permissions on the given access control list.

# effective set value permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has value setting permissions on the given access control list.

# effective synchronize permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has synchronization permissions on the given access control list.

# effective synchronize permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has synchronization permissions on the given access control list.Example: effective synchronize permission for &quot;Administrators&quot; of dacls of security descriptors of system folder - Returns `True` if the Administrator has permission to syncrhonize with the system folder.

# effective traverse permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has traverse permissions on the given access control list.

# effective traverse permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has traverse permissions on the given access control list.

# effective write attributes permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has attribute writing permissions on the given access control list.

# effective write attributes permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has attribute writing permissions on the given access control list.

# effective write dac permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has dac writing permissions on the given access control list.

# effective write dac permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has dac writing permissions on the given access control list.

# effective write extended attributes permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has extended attribute writing permissions on the given access control list.

# effective write extended attributes permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has extended attribute writing permissions on the given access control list.

# effective write owner permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has write owner permissions on the given access control list.

# effective write owner permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has write owner permissions on the given access control list.

# effective write permission for &lt;security account&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by the security account has write permissions on the given access control list.

# effective write permission for &lt;string&gt; of &lt;access control list&gt;

Returns `True` if the trustee specified by &lt;string&gt; has write permissions on the given access control list.

# entry of &lt;access control list&gt;

Iterates the ACEs of an ACL.
