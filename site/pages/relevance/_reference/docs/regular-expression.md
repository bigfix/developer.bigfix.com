# type: regular expression

The &lt;regular expression&gt; inspectors let you use regular expressions, also named regexes, in relevance statements.

The `regex` and `posix regex` inspectors use the [POSIX-Extended regular expression syntax](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/basic_extended.html), while the `perl regex` inspectors use the [Perl regular expression syntax](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html).

The supported regular expression syntaxes and the libraries used to interpret them vary depending on the BigFix version, the OS and the inspector used, as shown in the following table.

| BigFix Version | Windows<br/>regex | Windows<br/>perl regex | Windows<br/>posix regex | UNIX<br/>regex | UNIX<br/>perl regex | UNIX<br/>posix regex |
|----------------------------|-------------|-------------|-------------|-------------|-------------|-------------|
| From 11.0.3 | Boost 1.78.0 | Boost 1.78.0 | Boost 1.78.0 | OS Native | Boost 1.78.0 \* | Boost 1.78.0 \* |
| From 11.0.0 to 11.0.2 included | Boost 1.78.0 | Boost 1.78.0 | N/A | Boost 1.78.0 \* | Boost 1.78.0 \* | N/A |
| From 10.0.8 or later | Boost 1.36.0 | Boost 1.36.0 |  N/A | OS Native | N/A | N/A |
| 10.0.7 or earlier | Boost 1.36.0 | N/A | N/A | OS Native | N/A | N/A |

\* Exceptions are Tiny Core Linux (all versions) and Solaris 11 SPARC. On those operating systems, the `regex` inspectors use the OS Native library, while the `perl regex` and `posix regex` inspectors are not available.

Starting from BigFix Version 11.0.3, only on UNIX systems, the `regex` inspectors use the OS Native library to guarantee backward compatibility with BigFix Version 10. For fully POSIX compliance needs, the new `posix regex` inspector is available, using the Boost library version 1.78.0, both for Windows and for UNIX operating systems.

Starting from BigFix Version 11.0.0 to Version 11.0.2, both on Windows and UNIX operating systems, the `regex` and the `perl regex` inspectors use the Boost library version 1.78.0, which supports their respective regular expression syntaxes.

Starting from BigFix Version 10.0.8, both the `regex` and the `perl regex` inspectors use the Boost library version 1.36.0 on Windows systems. On UNIX systems, the `regex` inspectors use the OS Native library while the `perl regex` inspectors are not available.

For BigFix Versions 10.0.7 and earlier, only the `regex` inspectors are available, on Windows systems they use the Boost library version 1.36.0 and on UNIX systems they use the OS Native library.

Additionally, be aware that, the inspectors could elaborate POSIX regular expressions differently if a Boost library applies or if the OS Native library applies. While Boost is declared to be POSIX-Extended compliant, some Native libraries are not fully POSIX compliant.

One of the known differences is the POSIX standard leftmost longest rule, Boost is compliant to the rule while the Native glibc library is not.

An example is the following regular expression:
```
parenthesized parts of match (regex "^D?(.+)(F)") of "DEFG"
```

When the Native library applies, it would return:
```
E
F
```

When the Boost library applies, it would return:
```
DE
F
```
