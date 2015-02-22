---
title: general
---

{% type array %}

The &lt;array&gt; inspectors return a list of values in a dictionary array.

#### Properties of array

{% property array <integer> of <array> %}

An array from an array by index.

{% property boolean <integer> of <array> %}

Get, from an array, a boolean keyed by the specified integer.Example: boolean 1 of array &quot;NSTableView Sort Ordering NSNavOutlineColumnSettings.v1&quot; of preference &quot;com.apple.Console&quot; - Returns the first boolean value in the array.

{% property date <integer> of <array> %}

Get, from an array, a date keyed by the specified integer.

{% property dictionary <integer> of <array> %}

Get, from an array, a dictionary keyed by the specified integer.

{% property integer <integer> of <array> %}

Get, from an array, an integer keyed by the specified integer.

{% property size of <array> %}

Returns the number of unique elements in the given array.Example: size of array &quot;persistent-apps&quot; of preference &quot;com.apple.dock&quot; - Returns the number of unique elements in the specified array.

{% property string <integer> of <array> %}

Get, from an array, a string keyed by the specified integer.Example: string 0 of array &quot;RecentSearchStrings&quot; of preference &quot;com.apple.safari&quot; - Returns the most recent search string.

{% property value of <array> %}

Values of the array.

{% type component %}

Components are handled by the MacOS Component Manager. These inspectors provide access to the various software components available through the Component Manager. The information contained in a component is placed there by its maker. How it should be interpreted is also determined by the maker.

#### Properties of component

{% property info of <component> %}

Returns information about the component, as determined by the creator of the component.

{% property maker of <component> %}

Returns the name of the maker of the specified component.

{% property name of <component> %}

The name of the component, as determined by its maker.

{% property subtype of <component> %}

The subtype of the component, as determined by the component maker.

{% property type of <component> %}

The type of the component, as determined by the component maker.

{% property version of <component> %}

The version of the component, as determined by the component maker.

{% type country %}

The &lt;country&gt; inspectors allow comparing countries (as seen in version numbers).

{% type dictionary %}

The &lt;dictionary&gt; inspectors provide access to an XML dictionary as used in .plist (property list) files.

#### Properties of dictionary

{% property array <string> of <dictionary> %}

Get, from a dictionary, an array keyed by the specified string.

{% property boolean <string> of <dictionary> %}

Get, from a dictionary, a boolean keyed by the string.Example: boolean &quot;trash-full&quot; of dictionary of file &quot;com.apple.dock.plist&quot; of preferences folder - Returns TRUE if the given flag is set.

{% property cstring <string> of <dictionary> %}

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be stripped.Example: string &quot;device_type&quot; of dictionary of node &quot;cpus/CPU0@0&quot; of devicetree plane of iokit registry  - Returns a null terminated string from the specified data field, such as &#39;processor%00&#39;.Example: cstring &quot;device_type&quot; of dictionary of node &quot;cpus/CPU0@0&quot; of devicetree plane of iokit registry  - Returns &#39;processor&#39;, stripping off the final null from the specified data field.

{% property data <string> of <dictionary> %}

Returns the specified dictionary data as a string.

{% property date <string> of <dictionary> %}

Get, from a dictionary, a date keyed by the specified string.Example: date &quot;date&quot; of dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of dictionary of file &quot;com.apple.scheduler.plist&quot; of preferences folder - Returns the date of the specified dictionary.

{% property dictionary <string> of <dictionary> %}

Get, from a dictionary, a dictionary keyed by the specified string.

{% property entry of <dictionary> %}

A key-value pair of a dictionary.Example: keys of entries of dictionary of iokit registry - Returns the specified keys, for example: IOKitBuildVersion, IONDRVFrameBufferGeneration, IOConsoleUsers, IOKitDiagnostics, IORegistryPlanes, IOMaximumMappedIOByteCount, IOCatalogue.

{% property integer <string> of <dictionary> %}

Get, from a dictionary, an integer keyed by the specified string.Example: integer &quot;mod-count&quot; of dictionary of file &quot;com.apple.dock.plist&quot; of preferences folder - Returns the mod-count of the specified dictionary as an integer.

{% property key of <dictionary> %}

The keys of a dictionary.Example: keys of global dictionary of bundle of folder &quot;iTunes.app&quot; of applications folder - Returns a list of the specified keys, for example: CFBundlePackageType, CFBundleVersion, CFBundleHelpBookName, CFBundleName, CSResourcesFileMapped, LSMulitpleInstancesProhibted, CFBundleDocumentTypes, etc....

{% property size of <dictionary> %}

The size of the given dictionary.Example: sizes of dictionaries of file &quot;com.apple.help.plist&quot; of preferences folder - Returns a list of the number of elements in the specified dictionary.

{% property string <string> of <dictionary> %}

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be returned as part of the string. Use cstring if you expect a Data object containing a null terminated string.Example: string &quot;FXSearchFieldTarget&quot; of dictionary of file &quot;com.apple.finder.plist&quot; of preferences folder - Returns a string, such as Spcf.

{% type dictionaryentry %}

The &lt;dictionaryentry&gt; inspectors provide access to the entries of a dictionary.

#### Properties of dictionaryentry

{% property key of <dictionaryentry> %}

The key of the given dictionary entry.

{% property value of <dictionaryentry> %}

Values of the dictionary entry.

{% type osxvalue %}

The &lt;osxvalue&gt; inspectors provide access to the elements of a dictionary.

#### Properties of osxvalue

{% property array of <osxvalue> %}

Casts the osxvalue (which is essentially untyped) to an array.

{% property boolean of <osxvalue> %}

Casts the osxvalue (which is essentially untyped) to a boolean.

{% property cstring of <osxvalue> %}

Strips off any trailing null from an osxvalue, returning a proper string from the dictionary.Note: In Version 6.0.9.54, the plural inspector is misspelled as csrings.

{% property data of <osxvalue> %}

Casts the specified osxvalue to a string.

{% property date of <osxvalue> %}

Casts the osxvalue (essentially untyped) to a date.

{% property dictionary of <osxvalue> %}

Casts the osxvalue (essentially untyped) to a dictionary.

{% property integer of <osxvalue> %}

Casts the osxvalue (essentially untyped) to an integer.

{% property string of <osxvalue> %}

The string of the osxvalue, cast to a string if necessary.

{% property type of <osxvalue> %}

The type of the osxvalue (for example boolean, string, integer, data, date, array, dictionary, or unknown type).

{% type preference %}

The &lt;preference&gt; inspectors provide access to application preference files.

#### Properties of preference

{% property array <string> of <preference> %}

Get, from a preference file, an array keyed by the specified string.

{% property boolean <string> of <preference> %}

Get, from a preference file, a boolean keyed by the specified string.

{% property date <string> of <preference> %}

Get, from a preference, a date keyed by the specified string.Example: date &quot;date&quot; of dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of preference &quot;com.apple.scheduler&quot; - Returns the date of the specified dictionary.

{% property dictionary <string> of <preference> %}

Get, from a preference, a dictionary keyed by the specified string.Example: exists dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of preference &quot;com.apple.scheduler&quot; - Returns TRUE if the specified dictionary exists.

{% property integer <string> of <preference> %}

Get, from a preference, an integer keyed by the specified string.Example: integer &quot;mod-count&quot; of preference &quot;com.apple.dock&quot; - Returns the mod-count of the specified preference as an integer.

{% property string <string> of <preference> %}

Get, from a preference, the string keyed by the specified string.Example: string &quot;FXSearchFieldTarget&quot; of preference &quot;com.apple.finder&quot; - Returns a string, such as Spcf.

{% type stage %}

The &lt;stage&gt; objects are for inspecting the stage portion of version numbers, which is the penultimate section of a version string: Major.Minor.ReleaseStageBuild. 

#### Casts of stage

{% cast <stage> as string %}

A Macintosh version is of the form: Major.Minor.ReleaseStageBuild. The stage directly precedes the final (Build) number. Most versioning schemes use a period, but the Mac allows for d, a, b and f standing for Development , Alpha, Beta and Final. The period has a higher value than Final. The stage is used in version comparisons and is ranked higher than the build number. For instance, 7.1.2a43 is less than 7.1.2f42 because a is lower than f, even though the final number is bigger.Example: stage of version &quot;7.1.2b70&quot; - Returns b.

