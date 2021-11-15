# type: regular expression

The &lt;regular expression&gt; inspectors let you use regular expressions (a.k.a regexes) in relevance statements.
On Windows, the regex inspectors use the Boost library implementation, which supports the &#39;POSIX-Extended regular expression&#39; syntax.
See this page https://www.boost.org/doc/libs/1_36_0/libs/regex/doc/html/boost_regex/syntax/basic_extended.html for more info.
On other operating systems, the regex inspectors use a native library instead of the Boost library.
For this reason, we recommend writing &#39;POSIX-compliant regular expressions&#39;, so that they work across different operative systems.
POSIX defines a set of character classes, marked with the syntax &#39;[:className:]&#39;, that can be used within brackets (i.e. &#39;[[:className:]]&#39;) to match a character of that class.
For example, you can write &#39;[[:alpha:]]&#39; to match alphabetic characters, &#39;[[:digit:]]&#39; to match digits, and &#39;[[:space:]]&#39; to match whitespaces.
At this page you can find a table with equivalent character classes https://en.wikibooks.org/wiki/Regular_Expressions/POSIX_Basic_Regular_Expressions#Character_classes
