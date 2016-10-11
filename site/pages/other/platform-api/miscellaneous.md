---
title: Miscellaneous types
---

## RelevanceString
Equivalent to xs:string.

## TimeInterval
Values of this type have the format (-)PdDThHmMsS, where dD represents the
number of days, T is the date/time separator, hH is the number of hours, mM is
the number of minutes, and sS is the number of seconds (that can have up to six
decimal digits).

**Examples:**

PT1M – one minute

P32DT4H24M43.52S – 32 days, 4 hours, 24 minutes, 43.52 seconds

-P12H – negative 12 hours

## NonNegativeTimeInterval
TimeInterval that cannot be negative.

## ActionMessageMaxPostponementInterval

Possible values:

{'PT15M'|'PT30M'|'PT1H'|'PT2H'|'PT4H'|'PT6H'|'PT8H'|
'PT12H'|'P1D'|'P2D'|'P3D'|'P5D'|'P7D'|'P15D'|'P30D'}

## ActionMessageTimeoutInterval

Possible values:

{'PT1M'|'PT2M'|'PT3M'|'PT4M'|'PT5M'|'PT10M'|'PT15M'|'PT30M'|'PT1H'|'PT2H'|
'PT4H'|'PT6H'|'PT8H'|'PT12H'|'P1D'|'P2D'|'P3D'|'P5D'|'P7D'|'P15D'|'P30D'}

