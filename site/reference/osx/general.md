---
title: general
---

## country

The &lt;country&gt; inspectors allow comparing countries (as seen in version numbers).

## preference

The &lt;preference&gt; inspectors provide access to application preference files.

#### string &lt;string&gt; of &lt;preference&gt; : string

Get, from a preference, the string keyed by the specified string.Example: string &quot;FXSearchFieldTarget&quot; of preference &quot;com.apple.finder&quot; - Returns a string, such as Spcf.

#### integer &lt;string&gt; of &lt;preference&gt; : integer

Get, from a preference, an integer keyed by the specified string.Example: integer &quot;mod-count&quot; of preference &quot;com.apple.dock&quot; - Returns the mod-count of the specified preference as an integer.

#### dictionary &lt;string&gt; of &lt;preference&gt; : dictionary

Get, from a preference, a dictionary keyed by the specified string.Example: exists dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of preference &quot;com.apple.scheduler&quot; - Returns TRUE if the specified dictionary exists.

#### date &lt;string&gt; of &lt;preference&gt; : time

Get, from a preference, a date keyed by the specified string.Example: date &quot;date&quot; of dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of preference &quot;com.apple.scheduler&quot; - Returns the date of the specified dictionary.

#### boolean &lt;string&gt; of &lt;preference&gt; : boolean

Get, from a preference file, a boolean keyed by the specified string.

#### array &lt;string&gt; of &lt;preference&gt; : array

Get, from a preference file, an array keyed by the specified string.

## osxvalue

The &lt;osxvalue&gt; inspectors provide access to the elements of a dictionary.

#### type of &lt;osxvalue&gt; : string

The type of the osxvalue (for example boolean, string, integer, data, date, array, dictionary, or unknown type).

#### string of &lt;osxvalue&gt; : string

The string of the osxvalue, cast to a string if necessary.

#### integer of &lt;osxvalue&gt; : integer

Casts the osxvalue (essentially untyped) to an integer.

#### dictionary of &lt;osxvalue&gt; : dictionary

Casts the osxvalue (essentially untyped) to a dictionary.

#### date of &lt;osxvalue&gt; : time

Casts the osxvalue (essentially untyped) to a date.

#### data of &lt;osxvalue&gt; : string

Casts the specified osxvalue to a string.

#### cstring of &lt;osxvalue&gt; : string

Strips off any trailing null from an osxvalue, returning a proper string from the dictionary.Note: In Version 6.0.9.54, the plural inspector is misspelled as csrings.

#### boolean of &lt;osxvalue&gt; : boolean

Casts the osxvalue (which is essentially untyped) to a boolean.

#### array of &lt;osxvalue&gt; : array

Casts the osxvalue (which is essentially untyped) to an array.

## dictionaryentry

The &lt;dictionaryentry&gt; inspectors provide access to the entries of a dictionary.

#### value of &lt;dictionaryentry&gt; : osxvalue

Values of the dictionary entry.

#### key of &lt;dictionaryentry&gt; : string

The key of the given dictionary entry.

## dictionary

The &lt;dictionary&gt; inspectors provide access to an XML dictionary as used in .plist (property list) files.

#### string &lt;string&gt; of &lt;dictionary&gt; : string

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be returned as part of the string. Use cstring if you expect a Data object containing a null terminated string.Example: string &quot;FXSearchFieldTarget&quot; of dictionary of file &quot;com.apple.finder.plist&quot; of preferences folder - Returns a string, such as Spcf.

#### size of &lt;dictionary&gt; : integer

The size of the given dictionary.Example: sizes of dictionaries of file &quot;com.apple.help.plist&quot; of preferences folder - Returns a list of the number of elements in the specified dictionary.

#### key of &lt;dictionary&gt; : string

The keys of a dictionary.Example: keys of global dictionary of bundle of folder &quot;iTunes.app&quot; of applications folder - Returns a list of the specified keys, for example: CFBundlePackageType, CFBundleVersion, CFBundleHelpBookName, CFBundleName, CSResourcesFileMapped, LSMulitpleInstancesProhibted, CFBundleDocumentTypes, etc....

#### integer &lt;string&gt; of &lt;dictionary&gt; : integer

Get, from a dictionary, an integer keyed by the specified string.Example: integer &quot;mod-count&quot; of dictionary of file &quot;com.apple.dock.plist&quot; of preferences folder - Returns the mod-count of the specified dictionary as an integer.

#### entry of &lt;dictionary&gt; : dictionaryentry

A key-value pair of a dictionary.Example: keys of entries of dictionary of iokit registry - Returns the specified keys, for example: IOKitBuildVersion, IONDRVFrameBufferGeneration, IOConsoleUsers, IOKitDiagnostics, IORegistryPlanes, IOMaximumMappedIOByteCount, IOCatalogue.

#### dictionary &lt;string&gt; of &lt;dictionary&gt; : dictionary

Get, from a dictionary, a dictionary keyed by the specified string.

#### date &lt;string&gt; of &lt;dictionary&gt; : time

Get, from a dictionary, a date keyed by the specified string.Example: date &quot;date&quot; of dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of dictionary of file &quot;com.apple.scheduler.plist&quot; of preferences folder - Returns the date of the specified dictionary.

#### data &lt;string&gt; of &lt;dictionary&gt; : string

Returns the specified dictionary data as a string.

#### cstring &lt;string&gt; of &lt;dictionary&gt; : string

Get, from a dictionary, the string keyed by the specified string. Works for objects in a dictionary of type String or Data. If the type is Data, any null terminator will be stripped.Example: string &quot;device_type&quot; of dictionary of node &quot;cpus/CPU0@0&quot; of devicetree plane of iokit registry  - Returns a null terminated string from the specified data field, such as &#39;processor%00&#39;.Example: cstring &quot;device_type&quot; of dictionary of node &quot;cpus/CPU0@0&quot; of devicetree plane of iokit registry  - Returns &#39;processor&#39;, stripping off the final null from the specified data field.

#### boolean &lt;string&gt; of &lt;dictionary&gt; : boolean

Get, from a dictionary, a boolean keyed by the string.Example: boolean &quot;trash-full&quot; of dictionary of file &quot;com.apple.dock.plist&quot; of preferences folder - Returns TRUE if the given flag is set.

#### array &lt;string&gt; of &lt;dictionary&gt; : array

Get, from a dictionary, an array keyed by the specified string.

## component

Components are handled by the MacOS Component Manager. These inspectors provide access to the various software components available through the Component Manager. The information contained in a component is placed there by its maker. How it should be interpreted is also determined by the maker.

#### version of &lt;component&gt; : version

The version of the component, as determined by the component maker.

#### type of &lt;component&gt; : string

The type of the component, as determined by the component maker.

#### subtype of &lt;component&gt; : string

The subtype of the component, as determined by the component maker.

#### name of &lt;component&gt; : string

The name of the component, as determined by its maker.

#### maker of &lt;component&gt; : string

Returns the name of the maker of the specified component.

#### info of &lt;component&gt; : string

Returns information about the component, as determined by the creator of the component.

## array

The &lt;array&gt; inspectors return a list of values in a dictionary array.

#### value of &lt;array&gt; : osxvalue

Values of the array.

#### string &lt;integer&gt; of &lt;array&gt; : string

Get, from an array, a string keyed by the specified integer.Example: string 0 of array &quot;RecentSearchStrings&quot; of preference &quot;com.apple.safari&quot; - Returns the most recent search string.

#### size of &lt;array&gt; : integer

Returns the number of unique elements in the given array.Example: size of array &quot;persistent-apps&quot; of preference &quot;com.apple.dock&quot; - Returns the number of unique elements in the specified array.

#### integer &lt;integer&gt; of &lt;array&gt; : integer

Get, from an array, an integer keyed by the specified integer.

#### dictionary &lt;integer&gt; of &lt;array&gt; : dictionary

Get, from an array, a dictionary keyed by the specified integer.

#### date &lt;integer&gt; of &lt;array&gt; : time

Get, from an array, a date keyed by the specified integer.

#### boolean &lt;integer&gt; of &lt;array&gt; : boolean

Get, from an array, a boolean keyed by the specified integer.Example: boolean 1 of array &quot;NSTableView Sort Ordering NSNavOutlineColumnSettings.v1&quot; of preference &quot;com.apple.Console&quot; - Returns the first boolean value in the array.

#### array &lt;integer&gt; of &lt;array&gt; : array

An array from an array by index.

## stage

The &lt;stage&gt; objects are for inspecting the stage portion of version numbers, which is the penultimate section of a version string: Major.Minor.ReleaseStageBuild. 

#### &lt;stage&gt; as string : string

A Macintosh version is of the form: Major.Minor.ReleaseStageBuild. The stage directly precedes the final (Build) number. Most versioning schemes use a period, but the Mac allows for d, a, b and f standing for Development , Alpha, Beta and Final. The period has a higher value than Final. The stage is used in version comparisons and is ranked higher than the build number. For instance, 7.1.2a43 is less than 7.1.2f42 because a is lower than f, even though the final number is bigger.Example: stage of version &quot;7.1.2b70&quot; - Returns b.

