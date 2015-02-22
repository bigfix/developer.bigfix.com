---
title: hpux
---

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

{% type software_depot %}

Software Depot uses the swlist INDEX to identify the collection of products installed on the HPUX machine.

#### Properties of software_depot

{% property bundle <string> of <software_depot> %}

Returns the bundle object corresponding to the name provided. Useful for seeing if a bundle is installed.Example: exists bundle of folder &quot;iTunes.app&quot; of applications folder - A bundle is a directory in the file system that groups related resources together in one place. Applications, frameworks, and plug-ins are all examples of bundles. Programs can also use document bundles instead of flat files to save complex content. For more info, see the Apple Developer documentation.Example: string &quot;CFBundleVersion&quot; of global dictionary of bundle of folder &quot;iTunes.app&quot; of applications folder - Returns the bundle version of the specified folder.

{% property bundle of <software_depot> %}

Returns a bundle object. Use the plural expression &#39;bundles of software depot&#39; to return all of the bundles installed.

{% property product <string> of <software_depot> %}

Direct access to specified installed software product. Use the product tag as the identifying name.Example: model of main processor - Returns a string such as &quot;PA8500&quot;.

{% property product of <software_depot> %}

Direct access to specified installed software product. Use the product tag as the identifying name.Example: exists product &quot;OS-Core&quot; of software depot - Returns TRUE if the specified software exists.

