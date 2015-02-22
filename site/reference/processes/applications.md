---
title: applications
---

{% type application %}

Application objects derive from file objects. Therefore, application objects inherit all of the properties of the file object. This means that you can inspect properties such as &#39;modification time&#39; or &#39;Product Version&#39; of an application just as you would a file. See the properties of a file object for a complete list of these. The real power and primary purpose of the application object is their creation. The creation methods are optimized in anticipation of the importance of this object.Note: See  File&#39; for a list of the Application properties. Folder and file names may be case sensitive. Use &quot;as uppercase&quot; or &quot;as lowercase&quot; if you don&#39;t know the actual case when making comparisons. For Windows versions of these inspectors, a properly installed application will register itself with the operating system. It does this by creating a registry sub-key usually named after the executable. The regapp inspector uses the default value of this sub-key as a string that is the full pathname of the executable. 

#### Properties of application

{% property inspectability of <application> %}

No documentation exists for this property.

{% property task name of <application> %}

No documentation exists for this property.

{% property virtualizer of <application> %}

No documentation exists for this property.

#### Casts of application

{% cast <application> as string %}

No documentation exists for this cast.

{% type application usage summary %}

To enable the &lt;application usage summary&gt; inspectors, you first need to create the client setting _BESClient_UsageManager_EnableAppUsageSummary and initialize it to 1. You must also configure the set of applications to monitor by creating the client setting _BESClient_UsageManager_EnableAppUsageSummaryApps and initializing it to a list of apps to include (or exclude). The value of this setting should look like +:app1:app2:app3: to add apps to the scope, and -:app1:app2: to exclude apps. The case is ignored. For instance, to only track summary usage on the Word application, use the value +:winword.exe:.

#### Properties of application usage summary

{% property first start time of <application usage summary> %}

Returns the start time of the specified application since the computer was configured to track it, regardless of reboots.

{% property instance of <application usage summary> %}

Returns a list of all the instances of a specified application usage summary.

{% property last start time of <application usage summary> %}

Returns the last time this specified application was started.Example: last start time of application usage summary &quot;winword.exe&quot; - Returns the date and time Word was last started.

{% property last time seen of <application usage summary> %}

Returns the last time this specified application was seen running.

{% property name of <application usage summary> %}

Returns the names of the applications that are currently enabled for usage summaries.

{% property running of <application usage summary> %}

Returns TRUE if the specified application is currently running.

{% property total duration of <application usage summary> %}

Returns the total elapsed time that the specified application has been running.

{% property total run count of <application usage summary> %}

Returns the number of times that the specified application has been run since the client was configured to track it.

{% type application usage summary instance %}

The &lt;application usage summary instance&gt; inspectors return information about the multiple instances of specific applications.

#### Properties of application usage summary instance

{% property first start time of <application usage summary instance> %}

Returns the start time of the specified application instance since the computer was configured to track it, regardless of reboots.

{% property last start time of <application usage summary instance> %}

Returns the last time this specified application was started.

{% property last time seen of <application usage summary instance> %}

Returns the last time this specified application was seen running.

{% property name of <application usage summary instance> %}

Returns the name(s) of the application instance(s) currently enabled for usage summaries.

{% property size of <application usage summary instance> %}

Returns the size of the specified application instance.

{% property string version of <application usage summary instance> %}

Returns the version of the specified application instance as a string value.

{% property total duration of <application usage summary instance> %}

Returns the total elapsed time that the specified application instance has been running.

{% property total run count of <application usage summary instance> %}

Returns the number of times that the specified application instance has been run since the client was configured to track it.

{% property version of <application usage summary instance> %}

Returns the version of the specified application instance.

{% type bundle %}

On HPUX platforms, a bundle object is derived from a product type and used to inspect software installations as managed by the Software Depot. On Macintosh platforms, a bundle refers to a core foundation folder hierarchy derived from CFBundle.

#### Properties of bundle

{% property bundle version of <bundle> %}

Returns the version of the bundle corresponding to the CFBundleVersion string, as distinct from the CFBundleShortVersionString.

{% property creator of <bundle> %}

The creator 4-letter code of the bundle (for example, FNDR for Finder).

{% property global dictionary of <bundle> %}

The bundle&#39;s information dictionary.

{% property local dictionary of <bundle> %}

The bundle&#39;s localized information dictionary.

{% property product of <bundle> %}

Returns the product and/or products contained in the bundle.

{% property type of <bundle> %}

Returns the file type of the bundle. Can be used only to compare equality between file types.

{% property version of <bundle> %}

Version of the given bundle.

{% type execution %}

No documentation exists for this type.

#### Properties of execution

{% property identity of <execution> %}

No documentation exists for this property.

{% property modification time of <execution> %}

No documentation exists for this property.

{% property path of <execution> %}

No documentation exists for this property.

{% property time of <execution> %}

No documentation exists for this property.

{% property type of <execution> %}

No documentation exists for this property.

{% property version info of <execution> %}

No documentation exists for this property.

