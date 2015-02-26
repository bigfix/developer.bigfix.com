# type: security descriptor

The &lt;security descriptor&gt; objects are structures and associated data that contain the security information for a securable object. A security descriptor identifies the object&#39;s owner and primary group. It can also contain a DACL that controls access to the object, and a SACL that controls the logging of attempts to access the object.

# control of &lt;security descriptor&gt;

Returns the integer property obtained by using the Microsoft Windows GetSecurityDescriptorControl API. This integer contains bits that indicate DACL behaviors as well as default behaviors. See the MSDN documentation of SECURITY_DESCRIPTOR_CONTROL for more information.

# dacl of &lt;security descriptor&gt;

Returns the discretionary access control list (DACL) that identifies the users and groups who are allowed or denied access to the specified security descriptor.

# group of &lt;security descriptor&gt;

Returns the security identifier of the group of the specified security descriptor.

# null dacl of &lt;security descriptor&gt;

No documentation exists.

# null sacl of &lt;security descriptor&gt;

No documentation exists.

# owner of &lt;security descriptor&gt;

Returns the security identifier of the owner of the specified security descriptor.

# sacl of &lt;security descriptor&gt;

Returns the system access control list (SACL), an ACL that controls the generation of audit messages for attempts to access a securable object.

# &lt;security descriptor&gt; as string

Returns the security descriptor in string format.
