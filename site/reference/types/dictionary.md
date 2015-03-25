# type: dictionary

The &amp;lt;dictionary&amp;gt; inspectors provide access to an XML dictionary as used in .plist (property list) files.

# array &lt;string&gt; of &lt;dictionary&gt; : array

Get, from a dictionary, an array keyed by the specified string.

# boolean &lt;string&gt; of &lt;dictionary&gt; : boolean

Get, from a dictionary, a boolean keyed by the string.Example: boolean &amp;quot;trash-full&amp;quot; of dictionary of file &amp;quot;com.apple.dock.plist&amp;quot; of preferences folder - Returns `True` if the given flag is set.

# cstring &lt;string&gt; of &lt;dictionary&gt; : string

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be stripped.Example: string &amp;quot;device_type&amp;quot; of dictionary of node &amp;quot;cpus/CPU0@0&amp;quot; of devicetree plane of iokit registry  - Returns a null terminated string from the specified data field, such as &amp;#39;processor%00&amp;#39;.Example: cstring &amp;quot;device_type&amp;quot; of dictionary of node &amp;quot;cpus/CPU0@0&amp;quot; of devicetree plane of iokit registry  - Returns &amp;#39;processor&amp;#39;, stripping off the final null from the specified data field.

# data &lt;string&gt; of &lt;dictionary&gt; : string

Returns the specified dictionary data as a string.

# date &lt;string&gt; of &lt;dictionary&gt; : time

Get, from a dictionary, a date keyed by the specified string.Example: date &amp;quot;date&amp;quot; of dictionary &amp;quot;Timer&amp;quot; of dictionary &amp;quot;SUCheckSchedulerTag&amp;quot; of dictionary &amp;quot;com.apple.SoftwareUpdate&amp;quot; of dictionary &amp;quot;AbsoluteSchedule&amp;quot; of dictionary of file &amp;quot;com.apple.scheduler.plist&amp;quot; of preferences folder - Returns the date of the specified dictionary.

# dictionary &lt;string&gt; of &lt;dictionary&gt; : dictionary

Get, from a dictionary, a dictionary keyed by the specified string.

# entry of &lt;dictionary&gt; : dictionaryentry

A key-value pair of a dictionary.Example: keys of entries of dictionary of iokit registry - Returns the specified keys, for example: IOKitBuildVersion, IONDRVFrameBufferGeneration, IOConsoleUsers, IOKitDiagnostics, IORegistryPlanes, IOMaximumMappedIOByteCount, IOCatalogue.

# integer &lt;string&gt; of &lt;dictionary&gt; : integer

Get, from a dictionary, an integer keyed by the specified string.Example: integer &amp;quot;mod-count&amp;quot; of dictionary of file &amp;quot;com.apple.dock.plist&amp;quot; of preferences folder - Returns the mod-count of the specified dictionary as an integer.

# key of &lt;dictionary&gt; : string

The keys of a dictionary.Example: keys of global dictionary of bundle of folder &amp;quot;iTunes.app&amp;quot; of applications folder - Returns a list of the specified keys, for example: CFBundlePackageType, CFBundleVersion, CFBundleHelpBookName, CFBundleName, CSResourcesFileMapped, LSMulitpleInstancesProhibted, CFBundleDocumentTypes, etc....

# size of &lt;dictionary&gt; : integer

The size of the given dictionary.Example: sizes of dictionaries of file &amp;quot;com.apple.help.plist&amp;quot; of preferences folder - Returns a list of the number of elements in the specified dictionary.

# string &lt;string&gt; of &lt;dictionary&gt; : string

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be returned as part of the string. Use cstring if you expect a Data object containing a null terminated string.Example: string &amp;quot;FXSearchFieldTarget&amp;quot; of dictionary of file &amp;quot;com.apple.finder.plist&amp;quot; of preferences folder - Returns a string, such as Spcf.
