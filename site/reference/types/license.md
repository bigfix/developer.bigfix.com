# license

The &lt;license&gt; inspectors are available to inspect the properties of the deployment license.

# allow unmentioned site of &lt;license&gt;

If this property is TRUE, then the deployment is allowed to use sites that aren&#39;t mentioned in the license of any BES products. If FALSE, those sites will not be usable.

# common name of &lt;license&gt;

Returns the name of the person (such as John Smith) who requested the action site license.

# download hash algorithm of &lt;license&gt;

No documentation exists.

# effective download hash algorithm of &lt;license&gt;

No documentation exists.

# effective signature hash algorithm of &lt;license&gt;

No documentation exists.

# email address of &lt;license&gt;

Returns the email address of the person (such as John_Smith@bigcorp.com) who requested the action site license.

# encryption certificate of &lt;license&gt;

Provides the encryption certificate that is currently active and which will be used by clients to encrypt reports.

# enhanced security of &lt;license&gt;

No documentation exists.

# evaluation of &lt;license&gt;

Returns `True` if client is running an evaluation license.

# expiration date of &lt;license&gt;

Returns date when license will expire.

# expiration state of &lt;license&gt;

Returns a string, one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

# fips mode of &lt;license&gt;

Returns `True` if the BES Action masthead specifies that applications (the client, console, or web reports, depending on the context) in the deployment should operate in FIPS 140-2 compliant mode.

# gather url of &lt;license&gt;

Returns the gather URL for the deployment&#39;s main Action site as specified in the deployment masthead.

# maximum seat count of &lt;license&gt;

Returns maximum seat count allowed by the license.Example: maximum seat count of bes license - Returns the current number of BigFix Clients allowed by this license.

# organization of &lt;license&gt;

Returns the organization of the person (such as Bigcorp, Inc.) who requested the action site license.

# product of &lt;license&gt;

Returns BES product objects obtained from the product fields of the specified license.

# registrar number of &lt;license&gt;

A unique number assigned to the issuer of the Action Site certificate.

# seat count state of &lt;license&gt;

Returns one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

# seat of &lt;license&gt;

The license number assigned to the client.

# sha256 download of &lt;license&gt;

No documentation exists.

# signature hash algorithm of &lt;license&gt;

No documentation exists.

# site number of &lt;license&gt;

A unique number assigned to the Action Site certificate.

# start date of &lt;license&gt;

The starting date specified for the BigFix license.

# type of &lt;license&gt;

Returns the string that was assigned to the license when it was authorized by BigFix.
