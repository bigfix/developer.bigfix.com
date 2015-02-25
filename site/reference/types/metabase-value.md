# metabase value

This inspector is used to access values stored in an IIS metabase key. The type of the data stored in the value determines what casting operations are allowed. There are several casting inspectors that you can use to extract values from the registry.

# identifier of [metabase value]

Returns the metabase identifier of the specified value.

# inherit attribute of [metabase value]

Returns `True` if the specified metabase value has the inherit attribute set.Example: inherit attributes of values of key &quot;/Schema&quot; of metabase - Returns a boolean True or False depending on the inherit attributes of each sub-key in the specified key of the metabase.

# insert path attribute of [metabase value]

Returns `True` if the specified metabase value has the insert path attribute set.

# reference attribute of [metabase value]

Returns `True` if the specified metabase value has the reference attribute set.

# secure attribute of [metabase value]

Returns `True` if the specified metabase value has the secure attribute set.

# type of [metabase value]

Returns the type of the specified metabase value.

# user type of [metabase value]

Returns the user type of the specified metabase value.

# volatile attribute of [metabase value]

Returns `True` if the specified metabase value has the volatile attribute set.Example: volatile attributes of values of key &quot;/LM&quot; of metabase - Returns a boolean True or False depending on the volatile attributes of each sub-key in the specified key of the metabase.

# [metabase value] as integer

Returns the integer value of the metabase value.

# [metabase value] as string

Returns the string value of the metabase value.
