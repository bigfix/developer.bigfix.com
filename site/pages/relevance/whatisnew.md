---
title: What is New in the BigFix Version 11 Inspectors
---

{% section %}

This page lists the added or extended inspectors starting from BigFix Version 11.

{% endsection %}


#### Version 11 Patch 2 Added Inspectors

A new client inspector named *large integer* was created to support 128-bit signed integers.

For details, see [large integer](https://developer.bigfix.com/relevance/reference/large-integer.html)

#### Version 11 Patch 2 Extended Inspectors

A new client inspector named *explorer service* was added to provide access to the 'BESExplorer' service, if present.

For details, see [service](https://developer.bigfix.com/relevance/reference/service.html)

A new client inspector named *linux of* was added to verify if the computer is running Linux.

For details, see [operating system](https://developer.bigfix.com/relevance/reference/operating-system.html)

#### Version 11 Patch 1 Added Inspectors

A new client inspector named *uinteger* was created to support the unsigned integers.

For details, see [uinteger](https://developer.bigfix.com/relevance/reference/uinteger.html)

#### Version 11 Patch 1 Extended Inspectors

Two new client inspectors named *device count* and *user count* were added to support the new "User" metric available for BigFix Workspace licenses.

For details, see [bes product](https://developer.bigfix.com/relevance/reference/bes-product.html)

#### Version 11 Extended Inspectors

The Perl Compatible Regular Expressions syntaxes, introduced with BigFix Platform 10.0.8 and available on the Windows client, are now also supported on several Linux platforms.
The added inspectors are named *case insensitive perl regex*, *case insensitive perl regular expression*, *perl regex* and *perl regular expression*.

For details, see [regular expression](https://developer.bigfix.com/relevance/reference/regular-expression.html)

