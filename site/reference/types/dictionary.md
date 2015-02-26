# dictionary

The &lt;dictionary&gt; inspectors provide access to an XML dictionary as used in .plist (property list) files.

# array <string> of <dictionary>

Get, from a dictionary, an array keyed by the specified string.

# boolean <string> of <dictionary>

Get, from a dictionary, a boolean keyed by the string.Example: boolean &quot;trash-full&quot; of dictionary of file &quot;com.apple.dock.plist&quot; of preferences folder - Returns `True` if the given flag is set.

# cstring <string> of <dictionary>

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be stripped.Example: string &quot;device_type&quot; of dictionary of node &quot;cpus/CPU0@0&quot; of devicetree plane of iokit registry  - Returns a null terminated string from the specified data field, such as &#39;processor%00&#39;.Example: cstring &quot;device_type&quot; of dictionary of node &quot;cpus/CPU0@0&quot; of devicetree plane of iokit registry  - Returns &#39;processor&#39;, stripping off the final null from the specified data field.

# data <string> of <dictionary>

Returns the specified dictionary data as a string.

# date <string> of <dictionary>

Get, from a dictionary, a date keyed by the specified string.Example: date &quot;date&quot; of dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of dictionary of file &quot;com.apple.scheduler.plist&quot; of preferences folder - Returns the date of the specified dictionary.

# dictionary <string> of <dictionary>

Get, from a dictionary, a dictionary keyed by the specified string.

# entry of <dictionary>

A key-value pair of a dictionary.Example: keys of entries of dictionary of iokit registry - Returns the specified keys, for example: IOKitBuildVersion, IONDRVFrameBufferGeneration, IOConsoleUsers, IOKitDiagnostics, IORegistryPlanes, IOMaximumMappedIOByteCount, IOCatalogue.

# integer <string> of <dictionary>

Get, from a dictionary, an integer keyed by the specified string.Example: integer &quot;mod-count&quot; of dictionary of file &quot;com.apple.dock.plist&quot; of preferences folder - Returns the mod-count of the specified dictionary as an integer.

# key of <dictionary>

The keys of a dictionary.Example: keys of global dictionary of bundle of folder &quot;iTunes.app&quot; of applications folder - Returns a list of the specified keys, for example: CFBundlePackageType, CFBundleVersion, CFBundleHelpBookName, CFBundleName, CSResourcesFileMapped, LSMulitpleInstancesProhibted, CFBundleDocumentTypes, etc....

# size of <dictionary>

The size of the given dictionary.Example: sizes of dictionaries of file &quot;com.apple.help.plist&quot; of preferences folder - Returns a list of the number of elements in the specified dictionary.

# string <string> of <dictionary>

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be returned as part of the string. Use cstring if you expect a Data object containing a null terminated string.Example: string &quot;FXSearchFieldTarget&quot; of dictionary of file &quot;com.apple.finder.plist&quot; of preferences folder - Returns a string, such as Spcf.
