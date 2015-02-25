# license

The &lt;license&gt; inspectors are available to inspect the properties of the deployment license.

# allow unmentioned site of [license]

If this property is TRUE, then the deployment is allowed to use sites that aren&#39;t mentioned in the license of any BES products. If FALSE, those sites will not be usable.

# common name of [license]

Returns the name of the person (such as John Smith) who requested the action site license.

# download hash algorithm of [license]

No documentation exists.

# effective download hash algorithm of [license]

No documentation exists.

# effective signature hash algorithm of [license]

No documentation exists.

# email address of [license]

Returns the email address of the person (such as John_Smith@bigcorp.com) who requested the action site license.

# encryption certificate of [license]

Provides the encryption certificate that is currently active and which will be used by clients to encrypt reports.

# enhanced security of [license]

No documentation exists.

# evaluation of [license]

Returns `True` if client is running an evaluation license.

# expiration date of [license]

Returns date when license will expire.

# expiration state of [license]

Returns a string, one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

# fips mode of [license]

Returns `True` if the BES Action masthead specifies that applications (the client, console, or web reports, depending on the context) in the deployment should operate in FIPS 140-2 compliant mode.

# gather url of [license]

Returns the gather URL for the deployment&#39;s main Action site as specified in the deployment masthead.

# maximum seat count of [license]

Returns maximum seat count allowed by the license.Example: maximum seat count of bes license - Returns the current number of BigFix Clients allowed by this license.

# organization of [license]

Returns the organization of the person (such as Bigcorp, Inc.) who requested the action site license.

# product of [license]

Returns BES product objects obtained from the product fields of the specified license.

# registrar number of [license]

A unique number assigned to the issuer of the Action Site certificate.

# seat count state of [license]

Returns one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

# seat of [license]

The license number assigned to the client.

# sha256 download of [license]

No documentation exists.

# signature hash algorithm of [license]

No documentation exists.

# site number of [license]

A unique number assigned to the Action Site certificate.

# start date of [license]

The starting date specified for the BigFix license.

# type of [license]

Returns the string that was assigned to the license when it was authorized by BigFix.
