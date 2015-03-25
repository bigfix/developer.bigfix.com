# type: dictionary

The &lt;dictionary&gt; inspectors provide access to an XML dictionary as used in .plist (property list) files.

# array &lt;string&gt; of &lt;dictionary&gt; : array

Get, from a dictionary, an array keyed by the specified string.

# boolean &lt;string&gt; of &lt;dictionary&gt; : boolean

Get, from a dictionary, a boolean keyed by the string.Example: boolean "trash-full" of dictionary of file "com.apple.dock.plist" of preferences folder - Returns `True` if the given flag is set.

# cstring &lt;string&gt; of &lt;dictionary&gt; : string

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be stripped.Example: string "device_type" of dictionary of node "cpus/CPU0@0" of devicetree plane of iokit registry  - Returns a null terminated string from the specified data field, such as &#39;processor%00&#39;.Example: cstring "device_type" of dictionary of node "cpus/CPU0@0" of devicetree plane of iokit registry  - Returns &#39;processor&#39;, stripping off the final null from the specified data field.

# data &lt;string&gt; of &lt;dictionary&gt; : string

Returns the specified dictionary data as a string.

# date &lt;string&gt; of &lt;dictionary&gt; : time

Get, from a dictionary, a date keyed by the specified string.Example: date "date" of dictionary "Timer" of dictionary "SUCheckSchedulerTag" of dictionary "com.apple.SoftwareUpdate" of dictionary "AbsoluteSchedule" of dictionary of file "com.apple.scheduler.plist" of preferences folder - Returns the date of the specified dictionary.

# dictionary &lt;string&gt; of &lt;dictionary&gt; : dictionary

Get, from a dictionary, a dictionary keyed by the specified string.

# entry of &lt;dictionary&gt; : dictionaryentry

A key-value pair of a dictionary.Example: keys of entries of dictionary of iokit registry - Returns the specified keys, for example: IOKitBuildVersion, IONDRVFrameBufferGeneration, IOConsoleUsers, IOKitDiagnostics, IORegistryPlanes, IOMaximumMappedIOByteCount, IOCatalogue.

# integer &lt;string&gt; of &lt;dictionary&gt; : integer

Get, from a dictionary, an integer keyed by the specified string.Example: integer "mod-count" of dictionary of file "com.apple.dock.plist" of preferences folder - Returns the mod-count of the specified dictionary as an integer.

# key of &lt;dictionary&gt; : string

The keys of a dictionary.Example: keys of global dictionary of bundle of folder "iTunes.app" of applications folder - Returns a list of the specified keys, for example: CFBundlePackageType, CFBundleVersion, CFBundleHelpBookName, CFBundleName, CSResourcesFileMapped, LSMulitpleInstancesProhibted, CFBundleDocumentTypes, etc....

# size of &lt;dictionary&gt; : integer

The size of the given dictionary.Example: sizes of dictionaries of file "com.apple.help.plist" of preferences folder - Returns a list of the number of elements in the specified dictionary.

# string &lt;string&gt; of &lt;dictionary&gt; : string

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be returned as part of the string. Use cstring if you expect a Data object containing a null terminated string.Example: string "FXSearchFieldTarget" of dictionary of file "com.apple.finder.plist" of preferences folder - Returns a string, such as Spcf.
