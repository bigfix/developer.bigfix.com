---
title: What is New in the BigFix Version 11 Inspectors
---

{% section %}

This page lists, starting from BigFix Version 11, the added inspector types, and the constructors and properties added to the existing inspectors.

{% endsection %}


#### Version 11 Patch 4 Added Inspector Types

New inspector types named *first lines &lt;integer&gt; of file*, *last lines &lt;integer&gt; of file*, *first rawline &lt;integer&gt; of &lt;file&gt;* and *last rawline &lt;integer&gt; of &lt;file&gt;* were added to return specific lines of a given file.

For details, see [file line](https://developer.bigfix.com/relevance/reference/file-line.html) and [file rawline](https://developer.bigfix.com/relevance/reference/file-rawline.html)

#### Version 11 Patch 4 Added Inspector Properties

New inspector properties named *first line of file*, *last line of file*, *first rawline of* and *last rawline of* were added to the existing *file line* and *file rawline* inspectors to return specific lines of a given file.

For details, see [file line](https://developer.bigfix.com/relevance/reference/file-line.html) and [file rawline](https://developer.bigfix.com/relevance/reference/file-rawline.html)

#### Version 11 Patch 3 Added Inspector Types

New inspector types named *case insensitive posix regex*, *case insensitive posix regular expression*, *posix regex* and *posix regular expression* were added to fully support POSIX compliant Regular Expressions.

For details, see [regular expression](https://developer.bigfix.com/relevance/reference/regular-expression.html)

#### Version 11 Patch 3 Added Inspector Property

A new inspector property named *rtt of* was added to the existing *socket* inspector to return the round-trip time (RTT) of the TCP socket connections in the "ESTABLISHED" state. Such time is expressed in the "hh.mm.ss.us" format.

For details, see [socket](https://developer.bigfix.com/relevance/reference/socket.html)

#### Version 11 Patch 2 Added Inspector Types

New inspector types named *bes idp directory*, *bes idp directory server*, *bes idp directory set* and *bes idp directory with multiplicity* were added to provide information about all identity providers added to the BigFix Server. The new inspectors also provide information about the new identity provider Microsoft Entra ID, introduced with BigFix Platform 11.0.2.

For details, see [bes idp directory](https://developer.bigfix.com/relevance/reference/bes-idp-directory.html), [bes idp directory server](https://developer.bigfix.com/relevance/reference/bes-idp-directory-server.html), [bes idp directory set](https://developer.bigfix.com/relevance/reference/bes-idp-directory-set.html) and [bes idp directory with multiplicity](https://developer.bigfix.com/relevance/reference/bes-idp-directory-with-multiplicity.html)

A new inspector type named *large integer* was added to the existing *boolean* inspector to support 128-bit signed integers.

For details, see [large integer](https://developer.bigfix.com/relevance/reference/large-integer.html)

#### Version 11 Patch 2 Added Inspector Constructor

A new inspector constructor named *explorer service* was added to the existing *service* inspector to provide access to the 'BESExplorer' service, if present.

For details, see [service](https://developer.bigfix.com/relevance/reference/service.html)

#### Version 11 Patch 2 Added Inspector Properties

A new inspector property named *display name of* was added to the existing *operating system* inspector to return the OS name in a human readable format.

For details, see [operating system](https://developer.bigfix.com/relevance/reference/operating-system.html)

A new inspector property named *linux of* was added to the existing *operating system* inspector to verify if the computer is running Linux.

For details, see [operating system](https://developer.bigfix.com/relevance/reference/operating-system.html)

#### Version 11 Patch 1 Added Inspector Type

A new inspector type named *uinteger* was added to the existing *boolean* inspector to support the unsigned integers.

For details, see [uinteger](https://developer.bigfix.com/relevance/reference/uinteger.html)

#### Version 11 Patch 1 Added Inspector Properties

New inspector properties named *device count* and *user count* were added to the existing *bes product* inspector to support the new "User" metric available for BigFix Workspace licenses.

For details, see [bes product](https://developer.bigfix.com/relevance/reference/bes-product.html)

#### Version 11 Added Inspector Constructors

The Perl Compatible Regular Expressions syntaxes, introduced with BigFix Platform 10.0.8 and available on the Windows client, are now also supported on several Linux platforms.
New inspector constructors named *case insensitive perl regex*, *case insensitive perl regular expression*, *perl regex* and *perl regular expression* were added to the existing *regular expression* inspector to support the Perl Compatible Regular Expressions syntaxes.

For details, see [regular expression](https://developer.bigfix.com/relevance/reference/regular-expression.html)
