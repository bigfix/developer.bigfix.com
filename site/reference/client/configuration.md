---
title: configuration
---

{% type setting%}

A &lt;setting&gt; is a simple object with name and value properties. It is a property of a client, or a property of a site. Settings of a site have a site scope. Settings of the client have a client scope.  See the  setting&#39; commands in the action guide for more details.

#### Casts

{% property <setting> as string %}

Returns a string formatted as &lt;name&gt;=&lt;value&gt; for the setting.

#### Properties

{% property value of <setting> %}

Returns the value of the setting.

{% property name of <setting> %}

Returns the name of the setting.Example: names of settings of site &quot;actionsite&quot; - Returns the names of all the settings of the site named &quot;actionsite&quot;.

{% property enabled of <setting> %}

Returns TRUE if the specified setting is enabled.

{% property effective date of <setting> %}

Returns the date when the setting was last modified.

{% property sha256 of <setting> %}

No documentation exists for this property.

{% type selected server%}

The &lt;selected server&gt; inspectors return information about the BES Server or BES Relay to which the BigFix agent reports.

#### Properties

{% property weight of <selected server> %}

The weight assigned to the server by the BES console. Servers with the same priority and approximate distance compete to be chosen; servers with higher weights are more likely to be chosen.

{% property priority of <selected server> %}

The priority assigned to the server by the BES console. Servers with low priorities are preferred to servers with high priority.

{% property port number of <selected server> %}

The port number to which reports are sent.

{% property name of <selected server> %}

The DNS name of the server, if known.

{% property ip address of <selected server> %}

The ipv4or6 address to which reports are sent.Prior to version 8.0, this inspector returned an &lt;ipv4 address&gt; type.

{% property gateway address of <selected server> %}

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  That list is accessible through this inspector. However, this inspector ignores hops that don&#39;t reply. If you need the full list, use the &#39;full gateway address&#39; inspector.Prior to version 8.0, this inspector returned an &lt;ipv4 address&gt; type.

{% property gateway address <integer> of <selected server> %}

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  The elements of that list is accessible through this inspector.Prior to version 8.0, this inspector returned an &lt;ipv4 address&gt; type.

{% property full gateway address of <selected server> %}

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  That list is accessible through this inspector. Unlike the &#39;gateway address&#39; inspector, this inspector includes hops that don&#39;t reply as 0.0.0.0.

{% property distance of <selected server> %}

The distance, in IP gateway hops, to the server. Among servers with the same priority, closer servers are preferred. Returns an integer range, since the exact distance may not be known.

{% property competition weight of <selected server> %}

The total of the weights of the servers in the competition from which this server was selected.

{% property competition size of <selected server> %}

The number of servers in the competition from which this server was selected.

{% type download storage folder%}

Before an Action executes, the download storage folder points to a temporary directory that holds the downloads for the Action.  During execution of the Action, those downloads are moved to the standard BigFix __Download folder and the inspector then points there. These inspectors return information about the currently specified download storage folder, and can be used with relevance substitution in download and prefetch Action commands.

#### Properties

{% property total size of <download storage folder> %}

Returns the amount of storage currently being used to store downloads (in bytes).

{% type download server%}

No documentation exists for this type.

#### Properties

{% property name of <download server> %}

No documentation exists for this property.

{% type root server%}

The &lt;root server&gt; inspectors refer to the root server that the Bes Client is currently connected to. 

#### Properties

{% property id of <root server> %}

The DSA Server ID of the BES root server that the BES Client last registered with.

{% property host name of <root server> %}

The host (DNS) name of the BES root server that the BES Client last registered with.

{% type registration server%}

No documentation exists for this type.

#### Properties

{% property version of <registration server> %}

No documentation exists for this property.

{% property now of <registration server> %}

No documentation exists for this property.

{% property name of <registration server> %}

No documentation exists for this property.

{% type x509 certificate%}

X.509 is a public key infrastructure standard, specifying formats for public key certificates and revocations. These inspectors interpret the certificate from a file in the PEM format. They can be used to analyze encryption credentials on decrypting relays or root servers.

#### Properties

{% property sha1 of <x509 certificate> %}

Returns the SHA1 hash of the given certificate, which uniquely identifies it.

{% property invalid before of <x509 certificate> %}

Returns the date on which the certificate first becomes valid. This is useful for examining encryption certificates, where the &#39;invalid before date&#39; is the time when the encryption credentials were generated.

{% type evaluation cycle%}

An Evaluation cycle represents a complete run through all the content available on the BigFix Client, measured in milliseconds. These inspectors return statistics based on the time sampled whenever the client returns to the beginning of its content set. These inspectors require a Client context.

#### Properties

{% property maximum of <evaluation cycle> %}

Returns the maximum time, in milliseconds, that it takes to evaluate a given BigFix Client content set.

{% property average of <evaluation cycle> %}

Returns the average time, in milliseconds, that it takes to evaluate a given BigFix Client content set. The average is based on the last ten cycles.Example: average of evaluationcycle of client - Returns the average evaluation cycle time in milliseconds.

{% property maximum duration of <evaluation cycle> %}

No documentation exists for this property.

{% property average duration of <evaluation cycle> %}

No documentation exists for this property.

{% property track fixlet of <evaluation cycle> %}

Returns tracking statistics of fixlets with the longest evaluation time. Number of fixlets tracked depends on Tracking settings. Default is top 10 fixlets.

{% property total duration of <evaluation cycle> %}

Total time since agent start

{% property sleep percent of <evaluation cycle> %}

Percentage of time taken sleeping since agent start

{% property sleep duration of <evaluation cycle> %}

Time taken sleeping since agent start

{% property report percent of <evaluation cycle> %}

Percentage of time taken performing report processing since agent start

{% property report duration of <evaluation cycle> %}

Time taken performing report processing since agent start

{% property relevance percent of <evaluation cycle> %}

Percentage of time taken performing relevance processing since agent start

{% property relevance duration of <evaluation cycle> %}

Time taken performing relevance processing since agent start

{% property relay select percent of <evaluation cycle> %}

Percentage of time taken performing relay select processing since agent start

{% property relay select duration of <evaluation cycle> %}

Time taken performing relay select processing since agent start

{% property quiet mode percent of <evaluation cycle> %}

Percentage of time taken performing quite mode processing since agent start

{% property quiet mode duration of <evaluation cycle> %}

Time taken performing quiet mode processing since agent start

{% property property percent of <evaluation cycle> %}

Percentage of time taken performing property processing since agent start

{% property property duration of <evaluation cycle> %}

Time taken performing property processing since agent start

{% property other percent of <evaluation cycle> %}

Percentage of time taken performing other (unlassified) processing since agent start

{% property other duration of <evaluation cycle> %}

Time taken performing other (unclassified) processing since agent start

{% property gather percent of <evaluation cycle> %}

Percentage of time taken performing gather processing since agent start

{% property gather duration of <evaluation cycle> %}

Time taken performing gather processing since agent start

{% property archive percent of <evaluation cycle> %}

Percentage of total time taken performing archive processing since agent start

{% property archive duration of <evaluation cycle> %}

Time taken performing archive processing since agent start

{% property api percent of <evaluation cycle> %}

Percentage of total time taken performing client api processing since agent start

{% property api duration of <evaluation cycle> %}

Time taken performing client api processing since agent start

{% property action percent of <evaluation cycle> %}

Percentage of total time taken performing action processing since agent start

{% property action duration of <evaluation cycle> %}

Time taken performing action processing since agent start

{% type cryptography%}

This is a global object that has several properties that expose the state of the cryptography controls. BigFix uses cryptographic functions throughout the BigFix Platform. Every time an operator logs in to BigFix, creates a new user, starts an action or subscribes to new content, authentication and signature routines are executed using cryptographic libraries based on the FIPS 140-2 standard.

#### Properties

{% property fips mode of <cryptography> %}

Returns TRUE if the application (the client, console, or web reports, depending on the context) is operating in FIPS 140-2 mode (the mode provided by openssl). FIPS mode limits the set of ciphers and SSL protocols that can be used in the cryptographic library.

{% property fips mode failure message of <cryptography> %}

Returns the error message returned by the cryptographic library if the application (the client, console, or web reports, depending on the context) tried to enter FIPS 140-2 compliant mode and failed.

{% property desired fips mode of <cryptography> %}

Returns TRUE if the application (the client, console, or web reports, depending on the context) tried to enter FIPS 140-2 compliant mode.

{% type license%}

The &lt;license&gt; inspectors are available to inspect the properties of the deployment license. 

#### Properties

{% property type of <license> %}

Returns the string that was assigned to the license when it was authorized by BigFix.

{% property start date of <license> %}

The starting date specified for the BigFix license.

{% property site number of <license> %}

A unique number assigned to the Action Site certificate.

{% property seat of <license> %}

The license number assigned to the client.

{% property seat count state of <license> %}

Returns one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

{% property registrar number of <license> %}

A unique number assigned to the issuer of the Action Site certificate.

{% property product of <license> %}

Returns BES product objects obtained from the product fields of the specified license.

{% property organization of <license> %}

Returns the organization of the person (such as Bigcorp, Inc.) who requested the action site license.

{% property maximum seat count of <license> %}

Returns maximum seat count allowed by the license.Example: maximum seat count of bes license - Returns the current number of BigFix Clients allowed by this license.

{% property gather url of <license> %}

Returns the gather URL for the deployment&#39;s main Action site as specified in the deployment masthead.

{% property fips mode of <license> %}

Returns TRUE if the BES Action masthead specifies that applications (the client, console, or web reports, depending on the context) in the deployment should operate in FIPS 140-2 compliant mode.

{% property expiration state of <license> %}

Returns a string, one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

{% property expiration date of <license> %}

Returns date when license will expire.

{% property evaluation of <license> %}

Returns TRUE if client is running an evaluation license.

{% property encryption certificate of <license> %}

Provides the encryption certificate that is currently active and which will be used by clients to encrypt reports.

{% property email address of <license> %}

Returns the email address of the person (such as John_Smith@bigcorp.com) who requested the action site license.

{% property common name of <license> %}

Returns the name of the person (such as John Smith) who requested the action site license.

{% property allow unmentioned site of <license> %}

If this property is TRUE, then the deployment is allowed to use sites that aren&#39;t mentioned in the license of any BES products. If FALSE, those sites will not be usable.

{% property signature hash algorithm of <license> %}

No documentation exists for this property.

{% property sha256 download of <license> %}

No documentation exists for this property.

{% property enhanced security of <license> %}

No documentation exists for this property.

{% property effective signature hash algorithm of <license> %}

No documentation exists for this property.

{% property effective download hash algorithm of <license> %}

No documentation exists for this property.

{% property download hash algorithm of <license> %}

No documentation exists for this property.

{% type client_cryptography%}

The &lt;client_cryptography&gt; inspectors expose cryptographic properties exclusive to the client.

#### Properties

{% property encrypt report of <client_cryptography> %}

Returns TRUE if the client is successfully encrypting reports.

{% property encrypt report failure message of <client_cryptography> %}

If the client is not successfully encrypting reports, this inspector returns the failure message.

{% property desired encrypt report of <client_cryptography> %}

Returns TRUE if the client is configured to attempt to encrypt reports.

{% type current relay%}

The &lt;current relay&gt; inspectors refer to the BES Server or Relay that the client last registered with. 

#### Properties

{% property version of <current relay> %}

Returns a version object that is the version of the server that the client last registered with. This may be a BES Relay or the BES root server.

{% property authenticating of <current relay> %}

Returns true if the current relay is using authentication

{% type client%}

The client object allows access to properties of the client application hosting the relevance evaluation, typically a BigFix program. In addition, the client maintains a collection of settings with both name and value properties that are inspectable using the client object. These inspectors share properties of application types, such as version and size.

#### Properties

{% property version of <client> %}

The product version of the BES application (BESClient or QnA).Note: On the Macintosh only, this inspector returns a &lt;string&gt;.Example: version of client as string - Returns a string like &quot;4.0.3.7&quot;.

{% property upload progress of <client> %}

Returns a status message string indicating No Progress, Errors or a string like the following to indicate the upload progress:&lt;filename&gt;: x of &lt;filesize&gt; bytes in &lt;number&gt; seconds.

{% property setting of <client> %}

Returns one or more settings from the client settings.

{% property setting <string> of <client> %}

Returns a client setting whose name matches the string provided from the client settings.

{% property registration subnet address of <client> %}

This inspector returns the subnet address (as an &lt;ipv4or6 address&gt; type) from the adapter that the specified BigFix client registered with.

{% property registration mac address of <client> %}

This inspector returns the MAC address that the specified BigFix client registered with.Example: registration mac address of client - Returns a MAC address such as 00-1e-c9-4d-ce-5c.

{% property registration cidr address of <client> %}

This inspector returns the cidr address from the adapter that the specified BigFix client registered with.

{% property registration address of <client> %}

This inspector returns the IP address (as an &lt;ipv4or6 address&gt; type) that the specified BigFix client registered with.

{% property evaluationcycle of <client> %}

Returns an object corresponding to the time it takes to evaluate the content set on the specified BigFix Client.

{% property administrator of <client> %}

Returns one or more settings each representing an administrator of the client.

{% property administrator <string> of <client> %}

If the administrator named in the &lt;string&gt; is enabled on the given &lt;client&gt; computer, this property returns a setting with the given name and the value &#39;allow.&#39; For instance, if the name of the administrator is joe_admin, then the client would return a setting object with the name &#39;joe_admin&#39; and a value of &#39;allow&#39;. Casting this as a string would return &#39;joe_admin=allow&#39;.

{% property administrative rights of <client> %}

No documentation exists for this property.

{% property process owner of <client> %}

The name of the owner of the BigFix client.

{% property brand of <client> %}

Returns the branding ID of a client computer. BigFix is the norm, but there are other brands that use the technology, including Trend Micro.

{% property last command time of <client> %}

No documentation exists for this property.

{% property build target of <client> %}

No documentation exists for this property.

{% property storage folder of <client> %}

No documentation exists for this property.

{% property local character set of <client> %}

No documentation exists for this property.

{% property last report time of <client> %}

No documentation exists for this property.

{% property deployment character set of <client> %}

No documentation exists for this property.

{% property data folder of <client> %}

Returns the __BESData folder

{% property certificate of <client> %}

Returns true when the client has received its certificate from the server

{% property authenticating of <client> %}

Returns true when client is performing client authentication to the relay

{% property manual group of <client> %}

No documentation exists for this property.

{% property manual group <string> of <client> %}

No documentation exists for this property.

{% property character set of <client> %}

No documentation exists for this property.

{% property banned prefetch plugin of <client> %}

No documentation exists for this property.

{% property report character set of <client> %}

No documentation exists for this property.

{% property fxf character set of <client> %}

No documentation exists for this property.

{% type module%}

No documentation exists for this type.

#### Properties

{% property version string <string> of <module> %}

No documentation exists for this property.

{% property version of <module> %}

No documentation exists for this property.

{% property name of <module> %}

No documentation exists for this property.

{% type client process owner%}

The &lt;client process owner&gt; inspectors tell what user context the client is running in.

#### Casts

{% property <client process owner> as string %}

Owner of the agent process.Example: process owner of client as string - Typically returns &quot;root&quot;.

#### Properties

{% property short name of <client process owner> %}

The short name of the client process owner.Example: short name of process owner of client - OS X usernames typically have a long and a short form. For a properly installed Agent, short name of process owner of client should return the same as long name, namely &#39;root&#39;.

{% property name of <client process owner> %}

Owner of the agent process.Example: name of process owner of client - Should usually be root.

{% property long name of <client process owner> %}

The long name of the client process owner.Example: long name of process owner of client - OS X usernames typically have a long and a short form. For a properly installed Agent, long name of process owner of client should return the same as short name, namely &#39;root&#39;.

{% type administrative rights%}

No documentation exists for this type.

#### Properties

{% property enabled of <administrative rights> %}

No documentation exists for this property.

