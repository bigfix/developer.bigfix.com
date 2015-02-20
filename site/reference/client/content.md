---
title: content
---

## site group

The &lt;site group&gt; inspectors return information on the automatic groups defined for a given site.

#### member of &lt;site group&gt; : boolean

Returns TRUE if the current computer is a member of the specified group.

#### id of &lt;site group&gt; : integer

Returns the numeric ID of the specified site group. This is the number assigned to an automatic group when it is first defined.

## site

A &lt;site&gt; object is provided to access properties of Fixlet sites. 

#### version of &lt;site&gt; : integer

Returns the version number of the site content.

#### url of &lt;site&gt; : string

Returns the Locator found in the masthead. A site locator is used to synchronize with the site. It normally contains the URL of a remote file system folder, or the URL of a cgi-bin program that provides a remote directory listing of the site.

#### type of &lt;site&gt; : string

Returns one of the following 4 literal strings:Master Action SiteOperator SiteCustom SiteFixlet Site.

#### subscribe time of &lt;site&gt; : time

Returns the time that the current machine began subscribing to the site.

#### site version list of &lt;site&gt; : site version list

Returns the last gathered site version list (manyversion) of the specified site.

#### site tag of &lt;site&gt; : string

Returns the last component of the specified site&#39;s url, eg. &#39;actionsite&#39;, &#39;enteprisesecurity&#39;, etcetera.

#### setting of &lt;site&gt; : setting

Returns one or more settings from the site settings.

#### setting &lt;string&gt; of &lt;site&gt; : setting

Returns the setting whose name matches the string provided from the Fixlet site settings.

#### relevant offer action of &lt;site&gt; : action

Returns the list of relevant actions that are offers for the specified site.  This inspector could be useful in a client UI dashboard listing the current set of relevant offers.

#### relevant fixlet of &lt;site&gt; : fixlet

Iterates through the Relevant Fixlet messages for the specified site.

#### name of &lt;site&gt; : string

The name of the site.

#### masthead of &lt;site&gt; : file

Each site has a masthead, and the masthead is saved into the site data folder upon successful creation. This property returns a file object that corresponds to the copy in the site data folder.

#### last gather time of &lt;site&gt; : time

Returns the time of last successful gathering from the site.

#### group &lt;integer&gt; of &lt;site&gt; : site group

Returns an object corresponding to the numbered group of the specified site.

#### gather schedule time interval of &lt;site&gt; : time interval

Returns the time interval between automatic gathering of site content.

#### gather schedule authority of &lt;site&gt; : string

Returns a string corresponding to the authority of the site schedule, for example: Publisher, Custom, Manual or Disabled.

#### folder of &lt;site&gt; : folder

No documentation exists for this property.

#### fixlet of &lt;site&gt; : fixlet

Iterates through the Fixlet messages of the specified site.

#### client folder of &lt;site&gt; : folder

The folder containing the site content on the client machine. Site content is gathered into this location.

#### profile of &lt;site&gt; : site profile

No documentation exists for this property.

#### evaluated of &lt;site&gt; : boolean

No documentation exists for this property.

## fixlet_header

Fixlet headers are name:value pairs that can provide important information about the Fixlet messages at any site. These inspectors only work in the context of property evaluation, not Fixlet evaluation.

#### value of &lt;fixlet_header&gt; : string

Headers are name:value pairs, separated by a colon. This inspector returns the value on the right hand side of the pair.Example: number of relevant fixlets whose (value of header &quot;x-fixlet-source-severity&quot; of it as lowercase = &quot;critical&quot;) of site &quot;enterprise security&quot;. - Returns the number of critical fixlets in the Enterprise Security site.

#### name of &lt;fixlet_header&gt; : string

Headers are name:value pairs, separated by a colon. This inspector returns the name on the left hand side of the pair.

## fixlet

The &lt;fixlet&gt; inspectors can provide important information about the Fixlet messages at any site. These inspectors only work in the context of property evaluation, not Fixlet evaluation.

#### relevance of &lt;fixlet&gt; : boolean

Returns a boolean TRUE or False, depending on the Relevance of the specified Fixlet message.

#### id of &lt;fixlet&gt; : integer

Returns the numeric ID number of the specified Fixlet message.

#### header of &lt;fixlet&gt; : fixlet_header

Iterates over all the headers of the Fixlet message.

#### header &lt;string&gt; of &lt;fixlet&gt; : fixlet_header

Returns the named header (case insensitive) of the specified Fixlet message. Fixlet headers are name:value pairs.

#### site of &lt;fixlet&gt; : site

Returns the site corresponding to the specified Fixlet message.

## analysis

No documentation exists for this type.

#### last time of &lt;analysis&gt; : time

No documentation exists for this property.

## action lock state

No documentation exists for this type.

#### &lt;action lock state&gt; as string : string

No documentation exists for this cast.

#### locked of &lt;action lock state&gt; : boolean

No documentation exists for this property.

#### lock string of &lt;action lock state&gt; : string

No documentation exists for this property.

#### expiration date of &lt;action lock state&gt; : time

No documentation exists for this property.

#### effective date of &lt;action lock state&gt; : time

No documentation exists for this property.

#### controller of &lt;action lock state&gt; : string

No documentation exists for this property.

## action

The &lt;action&gt; objects are the keywords associated with properties available for inspection during the execution of BigFix Actions.

#### &lt;action&gt; as string : string

No documentation exists for this cast.

#### waiting for download of &lt;action&gt; : boolean

Returns TRUE if client is waiting for mirroring server to have downloads required by the action.

#### system constraint of &lt;action&gt; : integer

No documentation exists for this property.

#### status of &lt;action&gt; : string

Returns one of the following strings: Running = when the action is currently active. Executed = no longer relevant and action has completed. Not Relevant = action was not relevant. Waiting = action is relevant, but waiting to run. Not Executed = action is relevant, unconstrained, but has not yet started. Failed = action is relevant, unconstrained, has completed, but is still relevant.

#### persistent constraint of &lt;action&gt; : integer

No documentation exists for this property.

#### pending time of &lt;action&gt; : time

Returns the time the action became pending.

#### pending restart of &lt;action&gt; : boolean

Returns TRUE if the specified action included an &#39;action requires restart&#39; command and a restart has not occurred since the action has run.

#### pending of &lt;action&gt; : boolean

Returns TRUE if action is available to run.

#### pending login of &lt;action&gt; : boolean

Returns TRUE if the specified action included an &#39;action requires login&#39; command, and a login has not yet occurred since the action has run.

#### parameter &lt;string&gt; of &lt;action&gt; : string

Returns the value of parameter &lt;string&gt; for the active Action. Parameters only live as long as the action is active. Among the inspectable parameters is the &#39;action issue date&#39; that is added to each Action by the BigFix Console at issue time.Example: parameter &quot;action issue date&quot; of action - This inspector returns the date the action was issued, a parameter added to each action by the BigFix Console.

#### origin fixlet id of &lt;action&gt; : integer

Returns the Fixlet id that contained the action.

#### offer of &lt;action&gt; : boolean

Returns TRUE when the Action is presented as an offer (as indicated by the header &quot;x-offer: 1&quot;).

#### offer accepted of &lt;action&gt; : boolean

Returns TRUE when users indicated they want to run the action by accepting the offer presented by the BES Client UI. When an offer has been accepted, the Client evaluates its constraints and runs as soon as conditions allow.

#### last change time of &lt;action&gt; : time

Returns the time when the action state last changed.

#### last active time of &lt;action&gt; : time

No documentation exists for this property.

#### last active line number of &lt;action&gt; : integer

No documentation exists for this property.

#### id of &lt;action&gt; : integer

Returns the numeric ID associated with the specified Action.

#### group leader of &lt;action&gt; : boolean

Returns TRUE if the action is a group action and the action component is the group leader. When you deploy a mult-action from the BES Console, it constructs a group action with a group leader to control the overall behavior of the action. This inspector is used internally to manage the progress of the group action.

#### first active count of &lt;action&gt; : integer

No documentation exists for this property.

#### exit code of &lt;action&gt; : integer

Returns an integer corresponding to the exit code of the specified action. This value will not exist if the action has not yet produced an exit code.

#### download failure of &lt;action&gt; : integer

No documentation exists for this property.

#### constraint of &lt;action&gt; : integer

No documentation exists for this property.

#### constrained of &lt;action&gt; : boolean

Returns TRUE if action is unable to run yet.

#### complete time of &lt;action&gt; : time

Returns the time the action completed.

#### active start time of &lt;action&gt; : time

Returns the time the action started.

#### active of &lt;action&gt; : boolean

Returns TRUE if the action is currently running (active).

#### active line number of &lt;action&gt; : integer

No documentation exists for this property.

#### active count of &lt;action&gt; : integer

No documentation exists for this property.

#### header of &lt;action&gt; : fixlet_header

No documentation exists for this property.

#### header &lt;string&gt; of &lt;action&gt; : fixlet_header

No documentation exists for this property.

## site profile variable

No documentation exists for this type.

#### &lt;site profile variable&gt; as string : string

No documentation exists for this cast.

#### value of &lt;site profile variable&gt; : string

No documentation exists for this property.

#### name of &lt;site profile variable&gt; : string

No documentation exists for this property.

## site profile

No documentation exists for this type.

#### variable of &lt;site profile&gt; : site profile variable

No documentation exists for this property.

#### variable &lt;string&gt; of &lt;site profile&gt; : site profile variable

No documentation exists for this property.

#### template file of &lt;site profile&gt; : file

No documentation exists for this property.

#### data file of &lt;site profile&gt; : file

No documentation exists for this property.

## manual group

No documentation exists for this type.

#### &lt;manual group&gt; as string : string

No documentation exists for this cast.

#### setting of &lt;manual group&gt; : setting

No documentation exists for this property.

#### member of &lt;manual group&gt; : boolean

No documentation exists for this property.

## site version list with multiplicity

The &lt;site version list with multiplicity&gt; inspectors deal with site-version-list arrays, allowing you to extract unique site-version-list values and count them. 

#### multiplicity of &lt;site version list with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;site version list&gt; types.

## site version list

The &lt;site version list&gt; inspectors examine the multidimensional version numbers (ManyVersions) that are used by the Database to reconcile reconnected sites after a DSA failback event.

#### &lt;site version list&gt; as string : string

Converts a site version list to a string.

#### unique value of &lt;site version list&gt; : site version list with multiplicity

Returns the unique values of a given list of &lt;site version list&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;site version list&gt; : site version list

Returns the minimum value from a list of &lt;site version list&gt; types.

#### maximum of &lt;site version list&gt; : site version list

Returns the maximum value from a list of &lt;site version list&gt; types.

#### extrema of &lt;site version list&gt; : ( site version list, site version list )

Returns the minimum and maximum extreme values of the given list of &lt;site version list&gt; types.

#### component &lt;integer&gt; of &lt;site version list&gt; : integer

Returns the nth element (as specified by &lt;integer&gt;) of the given site version list.

