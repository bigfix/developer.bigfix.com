---
title: applications
---

## bundle

On HPUX platforms, a bundle object is derived from a product type and used to inspect software installations as managed by the Software Depot. On Macintosh platforms, a bundle refers to a core foundation folder hierarchy derived from CFBundle.

#### version of &lt;bundle&gt; : version

Version of the given bundle.

#### type of &lt;bundle&gt; : file type

Returns the file type of the bundle. Can be used only to compare equality between file types.

#### local dictionary of &lt;bundle&gt; : dictionary

The bundle&#39;s localized information dictionary.

#### global dictionary of &lt;bundle&gt; : dictionary

The bundle&#39;s information dictionary.

#### creator of &lt;bundle&gt; : file signature

The creator 4-letter code of the bundle (for example, FNDR for Finder).

#### bundle version of &lt;bundle&gt; : version

Returns the version of the bundle corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

#### product of &lt;bundle&gt; : product

Returns the product and/or products contained in the bundle.

## application

Application objects derive from file objects. Therefore, application objects inherit all of the properties of the file object. This means that you can inspect properties such as &#39;modification time&#39; or &#39;Product Version&#39; of an application just as you would a file. See the properties of a file object for a complete list of these. The real power and primary purpose of the application object is their creation. The creation methods are optimized in anticipation of the importance of this object.Note: See  File&#39; for a list of the Application properties. Folder and file names may be case sensitive. Use &quot;as uppercase&quot; or &quot;as lowercase&quot; if you don&#39;t know the actual case when making comparisons. For Windows versions of these inspectors, a properly installed application will register itself with the operating system. It does this by creating a registry sub-key usually named after the executable. The regapp inspector uses the default value of this sub-key as a string that is the full pathname of the executable. 

#### &lt;application&gt; as string : string

No documentation exists for this cast.

#### virtualizer of &lt;application&gt; : string

No documentation exists for this property.

#### task name of &lt;application&gt; : string

No documentation exists for this property.

#### inspectability of &lt;application&gt; : boolean

No documentation exists for this property.

## execution

No documentation exists for this type.

#### version info of &lt;execution&gt; : string

No documentation exists for this property.

#### type of &lt;execution&gt; : string

No documentation exists for this property.

#### time of &lt;execution&gt; : time

No documentation exists for this property.

#### path of &lt;execution&gt; : string

No documentation exists for this property.

#### modification time of &lt;execution&gt; : time

No documentation exists for this property.

#### identity of &lt;execution&gt; : string

No documentation exists for this property.

## application usage summary instance

The &lt;application usage summary instance&gt; inspectors return information about the multiple instances of specific applications.

#### version of &lt;application usage summary instance&gt; : version

Returns the version of the specified application instance.

#### total run count of &lt;application usage summary instance&gt; : integer

Returns the number of times that the specified application instance has been run since the client was configured to track it.

#### total duration of &lt;application usage summary instance&gt; : time interval

Returns the total elapsed time that the specified application instance has been running.

#### string version of &lt;application usage summary instance&gt; : string

Returns the version of the specified application instance as a string value.

#### size of &lt;application usage summary instance&gt; : integer

Returns the size of the specified application instance.

#### name of &lt;application usage summary instance&gt; : string

Returns the name(s) of the application instance(s) currently enabled for usage summaries.

#### last time seen of &lt;application usage summary instance&gt; : time

Returns the last time this specified application was seen running.

#### last start time of &lt;application usage summary instance&gt; : time

Returns the last time this specified application was started.

#### first start time of &lt;application usage summary instance&gt; : time

Returns the start time of the specified application instance since the computer was configured to track it, regardless of reboots.

## application usage summary

To enable the &lt;application usage summary&gt; inspectors, you first need to create the client setting _BESClient_UsageManager_EnableAppUsageSummary and initialize it to 1. You must also configure the set of applications to monitor by creating the client setting _BESClient_UsageManager_EnableAppUsageSummaryApps and initializing it to a list of apps to include (or exclude). The value of this setting should look like +:app1:app2:app3: to add apps to the scope, and -:app1:app2: to exclude apps. The case is ignored. For instance, to only track summary usage on the Word application, use the value +:winword.exe:.

#### total run count of &lt;application usage summary&gt; : integer

Returns the number of times that the specified application has been run since the client was configured to track it.

#### total duration of &lt;application usage summary&gt; : time interval

Returns the total elapsed time that the specified application has been running.

#### running of &lt;application usage summary&gt; : boolean

Returns TRUE if the specified application is currently running.

#### name of &lt;application usage summary&gt; : string

Returns the names of the applications that are currently enabled for usage summaries.

#### last time seen of &lt;application usage summary&gt; : time

Returns the last time this specified application was seen running.

#### last start time of &lt;application usage summary&gt; : time

Returns the last time this specified application was started.Example: last start time of application usage summary &quot;winword.exe&quot; - Returns the date and time Word was last started.

#### instance of &lt;application usage summary&gt; : application usage summary instance

Returns a list of all the instances of a specified application usage summary.

#### first start time of &lt;application usage summary&gt; : time

Returns the start time of the specified application since the computer was configured to track it, regardless of reboots.

