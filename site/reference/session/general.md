---
title: general
---

## mime field

The &lt;mime field&gt; inspectors deal with the MIME fields that constitute a Fixlet file. These fields typically start with &#39;x-fixlet&#39;. For instance, to return the value of a specific MIME field, you might use:mime fields &quot;x-fixlet-cve&quot; of bes fixlets

#### value of &lt;mime field&gt; : string

Returns the values of the specified MIME fields. Fixlet files are in MIME format which may have several iterated fields composed of name/value pairs.

#### name of &lt;mime field&gt; : string

Returns the names of the specified MIME fields. Fixlet files are in MIME format which may have several fields composed of name/value pairs.

## historical fixlet count

The &lt;historical fixlet count&gt; objects provide historical information about the number of Fixlets at different severity levels.

#### time of &lt;historical fixlet count&gt; : time

Returns the time when the specified historical Fixlet count was calculated.

#### database id of &lt;historical fixlet count&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database containing the specified historical Fixlet count.

#### count map of &lt;historical fixlet count&gt; : fixlet count pair

Returns all of the &lt;fixlet count pair&gt; objects (one for each severity level) that were saved with the specified historical Fixlet count.

## historical computer count

The &lt;historical computer count&gt; inspectors provide information about historical computer count objects.

#### time of &lt;historical computer count&gt; : time

Returns the time when the specified count was archived.

#### database id of &lt;historical computer count&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database containing the specified historical computer count.

#### count of &lt;historical computer count&gt; : integer

Returns the count when the specified historical computer count was last archived.

## fixlet count pair

The &lt;fixlet count pair&gt; inspectors return information about the Fixlet count pair objects for each severity level.

#### source severity of &lt;fixlet count pair&gt; : string

Returns the severity level corresponding to the given Fixlet count pair.

#### count of &lt;fixlet count pair&gt; : integer

Returns the Fixlet count for each severity level of the Fixlet count pairs.

## bes wakeonlan status

The &lt;bes wakeonlan status&gt; objects are Windows inspectors that return the status of the BES WakeOnLan feature.

#### enabled of &lt;bes wakeonlan status&gt; : boolean

Returns TRUE if the BES WakeOnLan status is currently enabled.

#### database name of &lt;bes wakeonlan status&gt; : string

Returns the name(s) corresponding to the Database with WoL.

#### database id of &lt;bes wakeonlan status&gt; : integer

Returns the integer ID corresponding to the Database with WoL.

## bes server

The &lt;bes server&gt; inspectors return information about the BES Server, allowing Dashboards and Web Reports to access files and other information from the BES database.

#### url of &lt;bes server&gt; : string

Returns the URL of the specified BES Server, providing access to any files hosted on that server.

#### database name of &lt;bes server&gt; : string

Returns the database name (as a &lt;string&gt;) corresponding to the specified BES Server.

#### database id of &lt;bes server&gt; : integer

Returns the integer database ID corresponding to the specified BES Server.

## bes product

A BigFix license can include more than one product. Each product has an expiration date and a maximum seat count for any type of computer, or by non-windows server, windows server, or workstation. Each product also has a name and a list of site urls. For example, a patch management product might include site urls pointing to the individual patch sites.

#### workstation count of &lt;bes product&gt; : integer

Returns the number of workstations licensed for the specified product.

#### windows server count of &lt;bes product&gt; : integer

Returns the number of Windows Servers licensed for the specified product.

#### site url of &lt;bes product&gt; : string

Returns a list of the URLs associated with the specified BES product.

#### non windows server count of &lt;bes product&gt; : integer

Returns the number of non-Windows servers included in the license for the specified BES Product.

#### name of &lt;bes product&gt; : string

Returns the name of the specified licensed BES product.

#### expiration date of &lt;bes product&gt; : date

Returns the expiration date for the specified bes product.

#### computer count of &lt;bes product&gt; : integer

Returns the number of computers allowed under the license terms of the specified BES product.

#### rvu count of &lt;bes product&gt; : integer

No documentation exists for this property.

#### eula accepted of &lt;bes product&gt; : boolean

No documentation exists for this property.

#### client device count of &lt;bes product&gt; : integer

No documentation exists for this property.

#### term of &lt;bes product&gt; : boolean

Returns true if license is of Term type

#### perpetual of &lt;bes product&gt; : boolean

Returns true if license is of Perpetual type

#### perpetual maintenance of &lt;bes product&gt; : boolean

Returns true if license is of Perpetual Maintenance type

#### legacy of &lt;bes product&gt; : boolean

Returns true if license is of Legacy type

#### mvs count of &lt;bes product&gt; : integer

No documentation exists for this property.

## bes deployment option

These options allow you to customize the behavior of your BES deployment. They are set by the system administrator in the BES Admin Tool, under the Advanced Options tab.

#### value of &lt;bes deployment option&gt; : string

Returns the &lt;string&gt; value reported by this computer for the specified BES deployment option(s).

#### name of &lt;bes deployment option&gt; : string

Returns the name of the specified BES deployment option.

#### database name of &lt;bes deployment option&gt; : string

In the Web Reports environment, this inspector returns the name of the database containing the specified BES deployment option.

#### database id of &lt;bes deployment option&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES deployment option resides.

## bes comment

The &lt;bes comment&gt; inspectors return the text, timestamp and author of BES Comments. 

#### timestamp of &lt;bes comment&gt; : time

Returns the time that the specified BES Comment was posted.

#### text of &lt;bes comment&gt; : string

Returns the text of the specified BES Comment.

#### deleted flag of &lt;bes comment&gt; : boolean

Returns TRUE if the specified BES Comment has been deleted.

#### author of &lt;bes comment&gt; : bes user

Returns the author of the specified BES Comment.

