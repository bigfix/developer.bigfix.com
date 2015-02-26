# stage

The &lt;stage&gt; objects are for inspecting the stage portion of version numbers, which is the penultimate section of a version string: Major.Minor.ReleaseStageBuild.

# <stage> as string

A Macintosh version is of the form: Major.Minor.ReleaseStageBuild. The stage directly precedes the final (Build) number. Most versioning schemes use a period, but the Mac allows for d, a, b and f standing for Development , Alpha, Beta and Final. The period has a higher value than Final. The stage is used in version comparisons and is ranked higher than the build number. For instance, 7.1.2a43 is less than 7.1.2f42 because a is lower than f, even though the final number is bigger.Example: stage of version &quot;7.1.2b70&quot; - Returns b.
