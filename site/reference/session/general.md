---
title: general
---

{% type mime field%}

The &lt;mime field&gt; inspectors deal with the MIME fields that constitute a Fixlet file. These fields typically start with &#39;x-fixlet&#39;. For instance, to return the value of a specific MIME field, you might use:mime fields &quot;x-fixlet-cve&quot; of bes fixlets

#### Properties

{% property value of <mime field> %}

Returns the values of the specified MIME fields. Fixlet files are in MIME format which may have several iterated fields composed of name/value pairs.

{% property name of <mime field> %}

Returns the names of the specified MIME fields. Fixlet files are in MIME format which may have several fields composed of name/value pairs.

{% type historical fixlet count%}

The &lt;historical fixlet count&gt; objects provide historical information about the number of Fixlets at different severity levels.

#### Properties

{% property time of <historical fixlet count> %}

Returns the time when the specified historical Fixlet count was calculated.

{% property database id of <historical fixlet count> %}

In the Web Reports environment, this inspector returns the numeric ID of the database containing the specified historical Fixlet count.

{% property count map of <historical fixlet count> %}

Returns all of the &lt;fixlet count pair&gt; objects (one for each severity level) that were saved with the specified historical Fixlet count.

{% type historical computer count%}

The &lt;historical computer count&gt; inspectors provide information about historical computer count objects.

#### Properties

{% property time of <historical computer count> %}

Returns the time when the specified count was archived.

{% property database id of <historical computer count> %}

In the Web Reports environment, this inspector returns the numeric ID of the database containing the specified historical computer count.

{% property count of <historical computer count> %}

Returns the count when the specified historical computer count was last archived.

{% type fixlet count pair%}

The &lt;fixlet count pair&gt; inspectors return information about the Fixlet count pair objects for each severity level.

#### Properties

{% property source severity of <fixlet count pair> %}

Returns the severity level corresponding to the given Fixlet count pair.

{% property count of <fixlet count pair> %}

Returns the Fixlet count for each severity level of the Fixlet count pairs.

{% type bes wakeonlan status%}

The &lt;bes wakeonlan status&gt; objects are Windows inspectors that return the status of the BES WakeOnLan feature.

#### Properties

{% property enabled of <bes wakeonlan status> %}

Returns TRUE if the BES WakeOnLan status is currently enabled.

{% property database name of <bes wakeonlan status> %}

Returns the name(s) corresponding to the Database with WoL.

{% property database id of <bes wakeonlan status> %}

Returns the integer ID corresponding to the Database with WoL.

{% type bes server%}

The &lt;bes server&gt; inspectors return information about the BES Server, allowing Dashboards and Web Reports to access files and other information from the BES database.

#### Properties

{% property url of <bes server> %}

Returns the URL of the specified BES Server, providing access to any files hosted on that server.

{% property database name of <bes server> %}

Returns the database name (as a &lt;string&gt;) corresponding to the specified BES Server.

{% property database id of <bes server> %}

Returns the integer database ID corresponding to the specified BES Server.

{% type bes product%}

A BigFix license can include more than one product. Each product has an expiration date and a maximum seat count for any type of computer, or by non-windows server, windows server, or workstation. Each product also has a name and a list of site urls. For example, a patch management product might include site urls pointing to the individual patch sites.

#### Properties

{% property workstation count of <bes product> %}

Returns the number of workstations licensed for the specified product.

{% property windows server count of <bes product> %}

Returns the number of Windows Servers licensed for the specified product.

{% property site url of <bes product> %}

Returns a list of the URLs associated with the specified BES product.

{% property non windows server count of <bes product> %}

Returns the number of non-Windows servers included in the license for the specified BES Product.

{% property name of <bes product> %}

Returns the name of the specified licensed BES product.

{% property expiration date of <bes product> %}

Returns the expiration date for the specified bes product.

{% property computer count of <bes product> %}

Returns the number of computers allowed under the license terms of the specified BES product.

{% property rvu count of <bes product> %}

No documentation exists for this property.

{% property eula accepted of <bes product> %}

No documentation exists for this property.

{% property client device count of <bes product> %}

No documentation exists for this property.

{% property term of <bes product> %}

Returns true if license is of Term type

{% property perpetual of <bes product> %}

Returns true if license is of Perpetual type

{% property perpetual maintenance of <bes product> %}

Returns true if license is of Perpetual Maintenance type

{% property legacy of <bes product> %}

Returns true if license is of Legacy type

{% property mvs count of <bes product> %}

No documentation exists for this property.

{% type bes deployment option%}

These options allow you to customize the behavior of your BES deployment. They are set by the system administrator in the BES Admin Tool, under the Advanced Options tab.

#### Properties

{% property value of <bes deployment option> %}

Returns the &lt;string&gt; value reported by this computer for the specified BES deployment option(s).

{% property name of <bes deployment option> %}

Returns the name of the specified BES deployment option.

{% property database name of <bes deployment option> %}

In the Web Reports environment, this inspector returns the name of the database containing the specified BES deployment option.

{% property database id of <bes deployment option> %}

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES deployment option resides.

{% type bes comment%}

The &lt;bes comment&gt; inspectors return the text, timestamp and author of BES Comments. 

#### Properties

{% property timestamp of <bes comment> %}

Returns the time that the specified BES Comment was posted.

{% property text of <bes comment> %}

Returns the text of the specified BES Comment.

{% property deleted flag of <bes comment> %}

Returns TRUE if the specified BES Comment has been deleted.

{% property author of <bes comment> %}

Returns the author of the specified BES Comment.

