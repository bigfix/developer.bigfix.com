---
title: content
---

{% type site group%}

The &lt;site group&gt; inspectors return information on the automatic groups defined for a given site.

#### Properties

{% property member of <site group> %}

Returns TRUE if the current computer is a member of the specified group.

{% property id of <site group> %}

Returns the numeric ID of the specified site group. This is the number assigned to an automatic group when it is first defined.

{% type site%}

A &lt;site&gt; object is provided to access properties of Fixlet sites. 

#### Properties

{% property version of <site> %}

Returns the version number of the site content.

{% property url of <site> %}

Returns the Locator found in the masthead. A site locator is used to synchronize with the site. It normally contains the URL of a remote file system folder, or the URL of a cgi-bin program that provides a remote directory listing of the site.

{% property type of <site> %}

Returns one of the following 4 literal strings:Master Action SiteOperator SiteCustom SiteFixlet Site.

{% property subscribe time of <site> %}

Returns the time that the current machine began subscribing to the site.

{% property site version list of <site> %}

Returns the last gathered site version list (manyversion) of the specified site.

{% property site tag of <site> %}

Returns the last component of the specified site&#39;s url, eg. &#39;actionsite&#39;, &#39;enteprisesecurity&#39;, etcetera.

{% property setting of <site> %}

Returns one or more settings from the site settings.

{% property setting <string> of <site> %}

Returns the setting whose name matches the string provided from the Fixlet site settings.

{% property relevant offer action of <site> %}

Returns the list of relevant actions that are offers for the specified site.  This inspector could be useful in a client UI dashboard listing the current set of relevant offers.

{% property relevant fixlet of <site> %}

Iterates through the Relevant Fixlet messages for the specified site.

{% property name of <site> %}

The name of the site.

{% property masthead of <site> %}

Each site has a masthead, and the masthead is saved into the site data folder upon successful creation. This property returns a file object that corresponds to the copy in the site data folder.

{% property last gather time of <site> %}

Returns the time of last successful gathering from the site.

{% property group <integer> of <site> %}

Returns an object corresponding to the numbered group of the specified site.

{% property gather schedule time interval of <site> %}

Returns the time interval between automatic gathering of site content.

{% property gather schedule authority of <site> %}

Returns a string corresponding to the authority of the site schedule, for example: Publisher, Custom, Manual or Disabled.

{% property folder of <site> %}

No documentation exists for this property.

{% property fixlet of <site> %}

Iterates through the Fixlet messages of the specified site.

{% property client folder of <site> %}

The folder containing the site content on the client machine. Site content is gathered into this location.

{% property profile of <site> %}

No documentation exists for this property.

{% property evaluated of <site> %}

No documentation exists for this property.

{% type fixlet_header%}

Fixlet headers are name:value pairs that can provide important information about the Fixlet messages at any site. These inspectors only work in the context of property evaluation, not Fixlet evaluation.

#### Properties

{% property value of <fixlet_header> %}

Headers are name:value pairs, separated by a colon. This inspector returns the value on the right hand side of the pair.Example: number of relevant fixlets whose (value of header &quot;x-fixlet-source-severity&quot; of it as lowercase = &quot;critical&quot;) of site &quot;enterprise security&quot;. - Returns the number of critical fixlets in the Enterprise Security site.

{% property name of <fixlet_header> %}

Headers are name:value pairs, separated by a colon. This inspector returns the name on the left hand side of the pair.

{% type fixlet%}

The &lt;fixlet&gt; inspectors can provide important information about the Fixlet messages at any site. These inspectors only work in the context of property evaluation, not Fixlet evaluation.

#### Properties

{% property relevance of <fixlet> %}

Returns a boolean TRUE or False, depending on the Relevance of the specified Fixlet message.

{% property id of <fixlet> %}

Returns the numeric ID number of the specified Fixlet message.

{% property header of <fixlet> %}

Iterates over all the headers of the Fixlet message.

{% property header <string> of <fixlet> %}

Returns the named header (case insensitive) of the specified Fixlet message. Fixlet headers are name:value pairs.

{% property site of <fixlet> %}

Returns the site corresponding to the specified Fixlet message.

{% type analysis%}

No documentation exists for this type.

#### Properties

{% property last time of <analysis> %}

No documentation exists for this property.

{% type action lock state%}

No documentation exists for this type.

#### Casts

{% property <action lock state> as string %}

No documentation exists for this cast.

#### Properties

{% property locked of <action lock state> %}

No documentation exists for this property.

{% property lock string of <action lock state> %}

No documentation exists for this property.

{% property expiration date of <action lock state> %}

No documentation exists for this property.

{% property effective date of <action lock state> %}

No documentation exists for this property.

{% property controller of <action lock state> %}

No documentation exists for this property.

{% type action%}

The &lt;action&gt; objects are the keywords associated with properties available for inspection during the execution of BigFix Actions.

#### Casts

{% property <action> as string %}

No documentation exists for this cast.

#### Properties

{% property waiting for download of <action> %}

Returns TRUE if client is waiting for mirroring server to have downloads required by the action.

{% property system constraint of <action> %}

No documentation exists for this property.

{% property status of <action> %}

Returns one of the following strings: Running = when the action is currently active. Executed = no longer relevant and action has completed. Not Relevant = action was not relevant. Waiting = action is relevant, but waiting to run. Not Executed = action is relevant, unconstrained, but has not yet started. Failed = action is relevant, unconstrained, has completed, but is still relevant.

{% property persistent constraint of <action> %}

No documentation exists for this property.

{% property pending time of <action> %}

Returns the time the action became pending.

{% property pending restart of <action> %}

Returns TRUE if the specified action included an &#39;action requires restart&#39; command and a restart has not occurred since the action has run.

{% property pending of <action> %}

Returns TRUE if action is available to run.

{% property pending login of <action> %}

Returns TRUE if the specified action included an &#39;action requires login&#39; command, and a login has not yet occurred since the action has run.

{% property parameter <string> of <action> %}

Returns the value of parameter &lt;string&gt; for the active Action. Parameters only live as long as the action is active. Among the inspectable parameters is the &#39;action issue date&#39; that is added to each Action by the BigFix Console at issue time.Example: parameter &quot;action issue date&quot; of action - This inspector returns the date the action was issued, a parameter added to each action by the BigFix Console.

{% property origin fixlet id of <action> %}

Returns the Fixlet id that contained the action.

{% property offer of <action> %}

Returns TRUE when the Action is presented as an offer (as indicated by the header &quot;x-offer: 1&quot;).

{% property offer accepted of <action> %}

Returns TRUE when users indicated they want to run the action by accepting the offer presented by the BES Client UI. When an offer has been accepted, the Client evaluates its constraints and runs as soon as conditions allow.

{% property last change time of <action> %}

Returns the time when the action state last changed.

{% property last active time of <action> %}

No documentation exists for this property.

{% property last active line number of <action> %}

No documentation exists for this property.

{% property id of <action> %}

Returns the numeric ID associated with the specified Action.

{% property group leader of <action> %}

Returns TRUE if the action is a group action and the action component is the group leader. When you deploy a mult-action from the BES Console, it constructs a group action with a group leader to control the overall behavior of the action. This inspector is used internally to manage the progress of the group action.

{% property first active count of <action> %}

No documentation exists for this property.

{% property exit code of <action> %}

Returns an integer corresponding to the exit code of the specified action. This value will not exist if the action has not yet produced an exit code.

{% property download failure of <action> %}

No documentation exists for this property.

{% property constraint of <action> %}

No documentation exists for this property.

{% property constrained of <action> %}

Returns TRUE if action is unable to run yet.

{% property complete time of <action> %}

Returns the time the action completed.

{% property active start time of <action> %}

Returns the time the action started.

{% property active of <action> %}

Returns TRUE if the action is currently running (active).

{% property active line number of <action> %}

No documentation exists for this property.

{% property active count of <action> %}

No documentation exists for this property.

{% property header of <action> %}

No documentation exists for this property.

{% property header <string> of <action> %}

No documentation exists for this property.

{% type site profile variable%}

No documentation exists for this type.

#### Casts

{% property <site profile variable> as string %}

No documentation exists for this cast.

#### Properties

{% property value of <site profile variable> %}

No documentation exists for this property.

{% property name of <site profile variable> %}

No documentation exists for this property.

{% type site profile%}

No documentation exists for this type.

#### Properties

{% property variable of <site profile> %}

No documentation exists for this property.

{% property variable <string> of <site profile> %}

No documentation exists for this property.

{% property template file of <site profile> %}

No documentation exists for this property.

{% property data file of <site profile> %}

No documentation exists for this property.

{% type manual group%}

No documentation exists for this type.

#### Casts

{% property <manual group> as string %}

No documentation exists for this cast.

#### Properties

{% property setting of <manual group> %}

No documentation exists for this property.

{% property member of <manual group> %}

No documentation exists for this property.

{% type site version list with multiplicity%}

The &lt;site version list with multiplicity&gt; inspectors deal with site-version-list arrays, allowing you to extract unique site-version-list values and count them. 

#### Properties

{% property multiplicity of <site version list with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;site version list&gt; types.

{% type site version list%}

The &lt;site version list&gt; inspectors examine the multidimensional version numbers (ManyVersions) that are used by the Database to reconcile reconnected sites after a DSA failback event.

#### Casts

{% property <site version list> as string %}

Converts a site version list to a string.

#### Properties

{% property unique value of <site version list> %}

Returns the unique values of a given list of &lt;site version list&gt; types, removing duplicates and sorting by value.

{% property minimum of <site version list> %}

Returns the minimum value from a list of &lt;site version list&gt; types.

{% property maximum of <site version list> %}

Returns the maximum value from a list of &lt;site version list&gt; types.

{% property extrema of <site version list> %}

Returns the minimum and maximum extreme values of the given list of &lt;site version list&gt; types.

{% property component <integer> of <site version list> %}

Returns the nth element (as specified by &lt;integer&gt;) of the given site version list.

