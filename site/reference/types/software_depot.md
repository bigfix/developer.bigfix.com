# type: software_depot

Software Depot uses the swlist INDEX to identify the collection of products installed on the HPUX machine.

# bundle &lt;string&gt; of &lt;software_depot&gt; : bundle

Returns the bundle object corresponding to the name provided. Useful for seeing if a bundle is installed.Example: exists bundle of folder "iTunes.app" of applications folder - A bundle is a directory in the file system that groups related resources together in one place. Applications, frameworks, and plug-ins are all examples of bundles. Programs can also use document bundles instead of flat files to save complex content. For more info, see the Apple Developer documentation.Example: string "CFBundleVersion" of global dictionary of bundle of folder "iTunes.app" of applications folder - Returns the bundle version of the specified folder.

# bundle of &lt;software_depot&gt; : bundle

Returns a bundle object. Use the plural expression &#39;bundles of software depot&#39; to return all of the bundles installed.

# product &lt;string&gt; of &lt;software_depot&gt; : product

Direct access to specified installed software product. Use the product tag as the identifying name.Example: model of main processor - Returns a string such as "PA8500".

# product of &lt;software_depot&gt; : product

Direct access to specified installed software product. Use the product tag as the identifying name.Example: exists product "OS-Core" of software depot - Returns `True` if the specified software exists.
