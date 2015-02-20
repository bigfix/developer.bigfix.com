---
title: configuration
---

## setting

A &lt;setting&gt; is a simple object with name and value properties. It is a property of a client, or a property of a site. Settings of a site have a site scope. Settings of the client have a client scope.  See the  setting&#39; commands in the action guide for more details.

#### &lt;setting&gt; as string : string

Returns a string formatted as &lt;name&gt;=&lt;value&gt; for the setting.

#### value of &lt;setting&gt; : string

Returns the value of the setting.

#### name of &lt;setting&gt; : string

Returns the name of the setting.Example: names of settings of site &quot;actionsite&quot; - Returns the names of all the settings of the site named &quot;actionsite&quot;.

#### enabled of &lt;setting&gt; : boolean

Returns TRUE if the specified setting is enabled.

#### effective date of &lt;setting&gt; : time

Returns the date when the setting was last modified.

#### sha256 of &lt;setting&gt; : string

No documentation exists for this property.

## selected server

The &lt;selected server&gt; inspectors return information about the BES Server or BES Relay to which the BigFix agent reports.

#### weight of &lt;selected server&gt; : integer

The weight assigned to the server by the BES console. Servers with the same priority and approximate distance compete to be chosen; servers with higher weights are more likely to be chosen.

#### priority of &lt;selected server&gt; : integer

The priority assigned to the server by the BES console. Servers with low priorities are preferred to servers with high priority.

#### port number of &lt;selected server&gt; : integer

The port number to which reports are sent.

#### name of &lt;selected server&gt; : string

The DNS name of the server, if known.

#### ip address of &lt;selected server&gt; : ipv4or6 address

The ipv4or6 address to which reports are sent.Prior to version 8.0, this inspector returned an &lt;ipv4 address&gt; type.

#### gateway address of &lt;selected server&gt; : ipv4or6 address

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  That list is accessible through this inspector. However, this inspector ignores hops that don&#39;t reply. If you need the full list, use the &#39;full gateway address&#39; inspector.Prior to version 8.0, this inspector returned an &lt;ipv4 address&gt; type.

#### gateway address &lt;integer&gt; of &lt;selected server&gt; : ipv4or6 address

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  The elements of that list is accessible through this inspector.Prior to version 8.0, this inspector returned an &lt;ipv4 address&gt; type.

#### full gateway address of &lt;selected server&gt; : ipv4or6 address

During relay selection, a traceroute-like list of the hops between the client and its relay (the selected server) is recorded.  That list is accessible through this inspector. Unlike the &#39;gateway address&#39; inspector, this inspector includes hops that don&#39;t reply as 0.0.0.0.

#### distance of &lt;selected server&gt; : integer range

The distance, in IP gateway hops, to the server. Among servers with the same priority, closer servers are preferred. Returns an integer range, since the exact distance may not be known.

#### competition weight of &lt;selected server&gt; : integer

The total of the weights of the servers in the competition from which this server was selected.

#### competition size of &lt;selected server&gt; : integer

The number of servers in the competition from which this server was selected.

## download storage folder

Before an Action executes, the download storage folder points to a temporary directory that holds the downloads for the Action.  During execution of the Action, those downloads are moved to the standard BigFix __Download folder and the inspector then points there. These inspectors return information about the currently specified download storage folder, and can be used with relevance substitution in download and prefetch Action commands.

#### total size of &lt;download storage folder&gt; : integer

Returns the amount of storage currently being used to store downloads (in bytes).

## download server

No documentation exists for this type.

#### name of &lt;download server&gt; : string

No documentation exists for this property.

## root server

The &lt;root server&gt; inspectors refer to the root server that the Bes Client is currently connected to. 

#### id of &lt;root server&gt; : integer

The DSA Server ID of the BES root server that the BES Client last registered with.

#### host name of &lt;root server&gt; : string

The host (DNS) name of the BES root server that the BES Client last registered with.

## registration server

No documentation exists for this type.

#### version of &lt;registration server&gt; : version

No documentation exists for this property.

#### now of &lt;registration server&gt; : time

No documentation exists for this property.

#### name of &lt;registration server&gt; : string

No documentation exists for this property.

## x509 certificate

X.509 is a public key infrastructure standard, specifying formats for public key certificates and revocations. These inspectors interpret the certificate from a file in the PEM format. They can be used to analyze encryption credentials on decrypting relays or root servers.

#### sha1 of &lt;x509 certificate&gt; : string

Returns the SHA1 hash of the given certificate, which uniquely identifies it.

#### invalid before of &lt;x509 certificate&gt; : time

Returns the date on which the certificate first becomes valid. This is useful for examining encryption certificates, where the &#39;invalid before date&#39; is the time when the encryption credentials were generated.

## evaluation cycle

An Evaluation cycle represents a complete run through all the content available on the BigFix Client, measured in milliseconds. These inspectors return statistics based on the time sampled whenever the client returns to the beginning of its content set. These inspectors require a Client context.

#### maximum of &lt;evaluation cycle&gt; : integer

Returns the maximum time, in milliseconds, that it takes to evaluate a given BigFix Client content set.

#### average of &lt;evaluation cycle&gt; : integer

Returns the average time, in milliseconds, that it takes to evaluate a given BigFix Client content set. The average is based on the last ten cycles.Example: average of evaluationcycle of client - Returns the average evaluation cycle time in milliseconds.

#### maximum duration of &lt;evaluation cycle&gt; : time interval

No documentation exists for this property.

#### average duration of &lt;evaluation cycle&gt; : time interval

No documentation exists for this property.

#### track fixlet of &lt;evaluation cycle&gt; : string

Returns tracking statistics of fixlets with the longest evaluation time. Number of fixlets tracked depends on Tracking settings. Default is top 10 fixlets.

#### total duration of &lt;evaluation cycle&gt; : time interval

Total time since agent start

#### sleep percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken sleeping since agent start

#### sleep duration of &lt;evaluation cycle&gt; : time interval

Time taken sleeping since agent start

#### report percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing report processing since agent start

#### report duration of &lt;evaluation cycle&gt; : time interval

Time taken performing report processing since agent start

#### relevance percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing relevance processing since agent start

#### relevance duration of &lt;evaluation cycle&gt; : time interval

Time taken performing relevance processing since agent start

#### relay select percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing relay select processing since agent start

#### relay select duration of &lt;evaluation cycle&gt; : time interval

Time taken performing relay select processing since agent start

#### quiet mode percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing quite mode processing since agent start

#### quiet mode duration of &lt;evaluation cycle&gt; : time interval

Time taken performing quiet mode processing since agent start

#### property percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing property processing since agent start

#### property duration of &lt;evaluation cycle&gt; : time interval

Time taken performing property processing since agent start

#### other percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing other (unlassified) processing since agent start

#### other duration of &lt;evaluation cycle&gt; : time interval

Time taken performing other (unclassified) processing since agent start

#### gather percent of &lt;evaluation cycle&gt; : floating point

Percentage of time taken performing gather processing since agent start

#### gather duration of &lt;evaluation cycle&gt; : time interval

Time taken performing gather processing since agent start

#### archive percent of &lt;evaluation cycle&gt; : floating point

Percentage of total time taken performing archive processing since agent start

#### archive duration of &lt;evaluation cycle&gt; : time interval

Time taken performing archive processing since agent start

#### api percent of &lt;evaluation cycle&gt; : floating point

Percentage of total time taken performing client api processing since agent start

#### api duration of &lt;evaluation cycle&gt; : time interval

Time taken performing client api processing since agent start

#### action percent of &lt;evaluation cycle&gt; : floating point

Percentage of total time taken performing action processing since agent start

#### action duration of &lt;evaluation cycle&gt; : time interval

Time taken performing action processing since agent start

## cryptography

This is a global object that has several properties that expose the state of the cryptography controls. BigFix uses cryptographic functions throughout the BigFix Platform. Every time an operator logs in to BigFix, creates a new user, starts an action or subscribes to new content, authentication and signature routines are executed using cryptographic libraries based on the FIPS 140-2 standard.

#### fips mode of &lt;cryptography&gt; : boolean

Returns TRUE if the application (the client, console, or web reports, depending on the context) is operating in FIPS 140-2 mode (the mode provided by openssl). FIPS mode limits the set of ciphers and SSL protocols that can be used in the cryptographic library.

#### fips mode failure message of &lt;cryptography&gt; : string

Returns the error message returned by the cryptographic library if the application (the client, console, or web reports, depending on the context) tried to enter FIPS 140-2 compliant mode and failed.

#### desired fips mode of &lt;cryptography&gt; : boolean

Returns TRUE if the application (the client, console, or web reports, depending on the context) tried to enter FIPS 140-2 compliant mode.

## license

The &lt;license&gt; inspectors are available to inspect the properties of the deployment license. 

#### type of &lt;license&gt; : string

Returns the string that was assigned to the license when it was authorized by BigFix.

#### start date of &lt;license&gt; : time

The starting date specified for the BigFix license.

#### site number of &lt;license&gt; : integer

A unique number assigned to the Action Site certificate.

#### seat of &lt;license&gt; : integer

The license number assigned to the client.

#### seat count state of &lt;license&gt; : string

Returns one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

#### registrar number of &lt;license&gt; : integer

A unique number assigned to the issuer of the Action Site certificate.

#### product of &lt;license&gt; : bes product

Returns BES product objects obtained from the product fields of the specified license.

#### organization of &lt;license&gt; : string

Returns the organization of the person (such as Bigcorp, Inc.) who requested the action site license.

#### maximum seat count of &lt;license&gt; : integer

Returns maximum seat count allowed by the license.Example: maximum seat count of bes license - Returns the current number of BigFix Clients allowed by this license.

#### gather url of &lt;license&gt; : string

Returns the gather URL for the deployment&#39;s main Action site as specified in the deployment masthead.

#### fips mode of &lt;license&gt; : boolean

Returns TRUE if the BES Action masthead specifies that applications (the client, console, or web reports, depending on the context) in the deployment should operate in FIPS 140-2 compliant mode.

#### expiration state of &lt;license&gt; : string

Returns a string, one of &quot;Unrestricted&quot;, &quot;Grace&quot; or &quot;Restricted&quot;.

#### expiration date of &lt;license&gt; : time

Returns date when license will expire.

#### evaluation of &lt;license&gt; : boolean

Returns TRUE if client is running an evaluation license.

#### encryption certificate of &lt;license&gt; : x509 certificate

Provides the encryption certificate that is currently active and which will be used by clients to encrypt reports.

#### email address of &lt;license&gt; : string

Returns the email address of the person (such as John_Smith@bigcorp.com) who requested the action site license.

#### common name of &lt;license&gt; : string

Returns the name of the person (such as John Smith) who requested the action site license.

#### allow unmentioned site of &lt;license&gt; : boolean

If this property is TRUE, then the deployment is allowed to use sites that aren&#39;t mentioned in the license of any BES products. If FALSE, those sites will not be usable.

#### signature hash algorithm of &lt;license&gt; : string

No documentation exists for this property.

#### sha256 download of &lt;license&gt; : boolean

No documentation exists for this property.

#### enhanced security of &lt;license&gt; : boolean

No documentation exists for this property.

#### effective signature hash algorithm of &lt;license&gt; : string

No documentation exists for this property.

#### effective download hash algorithm of &lt;license&gt; : string

No documentation exists for this property.

#### download hash algorithm of &lt;license&gt; : string

No documentation exists for this property.

## client_cryptography

The &lt;client_cryptography&gt; inspectors expose cryptographic properties exclusive to the client.

#### encrypt report of &lt;client_cryptography&gt; : boolean

Returns TRUE if the client is successfully encrypting reports.

#### encrypt report failure message of &lt;client_cryptography&gt; : string

If the client is not successfully encrypting reports, this inspector returns the failure message.

#### desired encrypt report of &lt;client_cryptography&gt; : boolean

Returns TRUE if the client is configured to attempt to encrypt reports.

## current relay

The &lt;current relay&gt; inspectors refer to the BES Server or Relay that the client last registered with. 

#### version of &lt;current relay&gt; : version

Returns a version object that is the version of the server that the client last registered with. This may be a BES Relay or the BES root server.

#### authenticating of &lt;current relay&gt; : boolean

Returns true if the current relay is using authentication

## client

The client object allows access to properties of the client application hosting the relevance evaluation, typically a BigFix program. In addition, the client maintains a collection of settings with both name and value properties that are inspectable using the client object. These inspectors share properties of application types, such as version and size.

#### version of &lt;client&gt; : version

The product version of the BES application (BESClient or QnA).Note: On the Macintosh only, this inspector returns a &lt;string&gt;.Example: version of client as string - Returns a string like &quot;4.0.3.7&quot;.

#### upload progress of &lt;client&gt; : string

Returns a status message string indicating No Progress, Errors or a string like the following to indicate the upload progress:&lt;filename&gt;: x of &lt;filesize&gt; bytes in &lt;number&gt; seconds.

#### setting of &lt;client&gt; : setting

Returns one or more settings from the client settings.

#### setting &lt;string&gt; of &lt;client&gt; : setting

Returns a client setting whose name matches the string provided from the client settings.

#### registration subnet address of &lt;client&gt; : ipv4or6 address

This inspector returns the subnet address (as an &lt;ipv4or6 address&gt; type) from the adapter that the specified BigFix client registered with.

#### registration mac address of &lt;client&gt; : string

This inspector returns the MAC address that the specified BigFix client registered with.Example: registration mac address of client - Returns a MAC address such as 00-1e-c9-4d-ce-5c.

#### registration cidr address of &lt;client&gt; : string

This inspector returns the cidr address from the adapter that the specified BigFix client registered with.

#### registration address of &lt;client&gt; : ipv4or6 address

This inspector returns the IP address (as an &lt;ipv4or6 address&gt; type) that the specified BigFix client registered with.

#### evaluationcycle of &lt;client&gt; : evaluation cycle

Returns an object corresponding to the time it takes to evaluate the content set on the specified BigFix Client.

#### administrator of &lt;client&gt; : setting

Returns one or more settings each representing an administrator of the client.

#### administrator &lt;string&gt; of &lt;client&gt; : setting

If the administrator named in the &lt;string&gt; is enabled on the given &lt;client&gt; computer, this property returns a setting with the given name and the value &#39;allow.&#39; For instance, if the name of the administrator is joe_admin, then the client would return a setting object with the name &#39;joe_admin&#39; and a value of &#39;allow&#39;. Casting this as a string would return &#39;joe_admin=allow&#39;.

#### administrative rights of &lt;client&gt; : administrative rights

No documentation exists for this property.

#### process owner of &lt;client&gt; : client process owner

The name of the owner of the BigFix client.

#### brand of &lt;client&gt; : string

Returns the branding ID of a client computer. BigFix is the norm, but there are other brands that use the technology, including Trend Micro.

#### last command time of &lt;client&gt; : time

No documentation exists for this property.

#### build target of &lt;client&gt; : string

No documentation exists for this property.

#### storage folder of &lt;client&gt; : folder

No documentation exists for this property.

#### local character set of &lt;client&gt; : string

No documentation exists for this property.

#### last report time of &lt;client&gt; : time

No documentation exists for this property.

#### deployment character set of &lt;client&gt; : string

No documentation exists for this property.

#### data folder of &lt;client&gt; : folder

Returns the __BESData folder

#### certificate of &lt;client&gt; : x509 certificate

Returns true when the client has received its certificate from the server

#### authenticating of &lt;client&gt; : boolean

Returns true when client is performing client authentication to the relay

#### manual group of &lt;client&gt; : manual group

No documentation exists for this property.

#### manual group &lt;string&gt; of &lt;client&gt; : manual group

No documentation exists for this property.

#### character set of &lt;client&gt; : string

No documentation exists for this property.

#### banned prefetch plugin of &lt;client&gt; : string

No documentation exists for this property.

#### report character set of &lt;client&gt; : string

No documentation exists for this property.

#### fxf character set of &lt;client&gt; : string

No documentation exists for this property.

## module

No documentation exists for this type.

#### version string &lt;string&gt; of &lt;module&gt; : string

No documentation exists for this property.

#### version of &lt;module&gt; : version

No documentation exists for this property.

#### name of &lt;module&gt; : string

No documentation exists for this property.

## client process owner

The &lt;client process owner&gt; inspectors tell what user context the client is running in.

#### &lt;client process owner&gt; as string : string

Owner of the agent process.Example: process owner of client as string - Typically returns &quot;root&quot;.

#### short name of &lt;client process owner&gt; : string

The short name of the client process owner.Example: short name of process owner of client - OS X usernames typically have a long and a short form. For a properly installed Agent, short name of process owner of client should return the same as long name, namely &#39;root&#39;.

#### name of &lt;client process owner&gt; : string

Owner of the agent process.Example: name of process owner of client - Should usually be root.

#### long name of &lt;client process owner&gt; : string

The long name of the client process owner.Example: long name of process owner of client - OS X usernames typically have a long and a short form. For a properly installed Agent, long name of process owner of client should return the same as short name, namely &#39;root&#39;.

## administrative rights

No documentation exists for this type.

#### enabled of &lt;administrative rights&gt; : boolean

No documentation exists for this property.

