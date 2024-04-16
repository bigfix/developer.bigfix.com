# type: regular expression

The &lt;regular expression&gt; inspectors let you use regular expressions, also named regexes, in relevance statements.

The `regex` inspectors use the "POSIX-Extended regular expression" syntax, while the `perl regex` inspectors use the "Perl regular expression" syntax.

The supported regular expression syntaxes and the libraries used to interpret them vary depending on the BigFix version, the OS and the inspector used, as shown in the following table.

|     BigFix Version             |            Windows             |            UNIX             |
|--------------------------------|--------------------------------|-----------------------------|
|                                | regex          | perl regex    | regex        | perl regex   |
| From 11.0.0 to 11.0.2 included | Boost 1.78.0   | Boost 1.78.0  | Boost 1.78.0 | Boost 1.78.0 |
| From 10.0.8 to 11.0.0 excluded | Boost 1.36.0   | Boost 1.36.0  | Native       | N/A          |
| Earlier than 10.0.8            | Boost 1.36.0   | N/A           | Native       | N/A          |

Starting from BigFix Version 11.0, both on Windows and UNIX operating systems, the `regex` and the `perl regex` inspectors use the Boost library version 1.78.0, which supports their respective regular expression syntaxes.
The exception to this are Tiny Core Linux (all versions) and Solaris 11 SPARC. On those operating systems, the `regex` inspectors use the native library, while the `perl regex` inspectors are not available.
For more details, see these pages https://www.boost.org/doc/libs/1_78_0/libs/regex/doc/html/boost_regex/syntax/basic_extended.html and https://www.boost.org/doc/libs/1_78_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html

Starting from BigFix Version 10.0.8, both the `regex` and the `perl regex` inspectors used Boost 1.36.0, but the `perl regex` inspectors were only available on Windows. The same Boost library version is also used by the `regex` inspectors, on Windows, in the earlier BigFix versions.

BigFix Versions 10.0.7 and earlier, on UNIX platforms, do not use the Boost library and the `regex` inspectors use a native library instead. For those BigFix versions, we recommend writing "POSIX-compliant regular expressions", so that they work across different operating systems.

POSIX defines a set of character classes, marked with the syntax `[:className:]`, that can be used within brackets (i.e. `[[:className:]]`) to match a character of that class.
For example, you can write `[[:alpha:]]` to match alphabetic characters, `[[:digit:]]` to match digits, and `[[:space:]]` to match whitespaces. You can find a table with equivalent character classes in 
https://en.wikibooks.org/wiki/Regular_Expressions/POSIX_Basic_Regular_Expressions#Character_classes

