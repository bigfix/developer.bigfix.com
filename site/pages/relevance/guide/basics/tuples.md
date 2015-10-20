---
title: Tuples
---

Tuples add some useful properties to the language. A tuple is a compound type
composed of two or more other types. It can be returned directly from an
inspector, like this:

{% qna %}
Q: (now & (1 * hour)) * true
A: ( Fri, 22 Sep 2006 15:25:43 -0400 to Fri, 22 Sep 2006 16:25:43 -0400 ), True
{% endqna %}

This expression returns a compound object including a time range and an
associated boolean `True`/`False`. Notice the use of the concatenation operator
`&`, used here to create a time range.

Tuples can also be explicitly generated using the comma `,` keyword. Any mix of
types is allowed:

{% qna %}
Q: number of processors, "B or not", 8/4, character 66
A: 2, B or not, 2, B
{% endqna %}

{% qna %}
Q: now, "is the time"
A: ( Fri, 22 Sep 2006 12:14:55 -0400 ), is the time
{% endqna %}

{% qna %}
Q: 1, number of processors < 3, "friend"
A: 1, True, friend
{% endqna %}

Note that if an individual inspector returns a tuple, it will always return the
same types in the same order. It's not possible to have an inspector return
tuples of type `<integer, string>` in one case and `<string, integer>` in
another.

Tuples can also be indexed by using the `item` keyword (indices start at 0). For
instance:

{% qna %}
Q: item 0 of ("foo", 3, free space of drive of system folder)
A: foo
{% endqna %}

{% qna %}
Q: (item 1 of it; item 2 of it) of ("foo", 3, free space of drive of system folder)
A: 3
A: 18105667584
{% endqna %}

Tuples provide a way for a relevance expression to return several related
properties. For instance, you could generate a set of filenames and
corresponding file sizes for all files that meet a specific criteria with a
Relevance statement like this:

{% qna %}
Q: (name of it, size of it) of files whose (size of it > 100000) of folder "c:"
A: hiberfil.sys, 536301568
A: ntldr, 250032
A: pagefile.sys, 805306368
{% endqna %}

Tuples can be combined with plurals to create expressions of surprising
complexity and power. The easiest combination is also the least useful. Forming
plurals of tuples (of the same type) just creates a plural tuple:

{% qna %}
Q: (1,2); (3,4)
A: 1, 2
A: 3, 4
{% endqna %}

However, attempting to form a plural of tuples of different types yields an
error. As we've already seen, plurals must always be of the same type:

{% qna %}
Q: (1,2);("a","b")
E: Incompatible types.
{% endqna %}

Interestingly, forming a tuple of plural expressions generates a set of tuples
that represents the cross product of all the component plurals:

{% qna %}
Q: ((1; 2), ("a"; "b"), ("*"; "$"))
A: 1, a, *
A: 1, a, $
A: 1, b, *
A: 1, b, $
A: 2, a, *
A: 2, a, $
A: 2, b, *
A: 2, b, $
{% endqna %}

Tuples of plurals can also be used to search two lists for commonality. For
example, suppose we have two lists of integers, and want to know what numbers
are in the intersection of the lists. We can do this by using a nested `whose`,
and then we refer to the outer list by wrapping it in a tuple:

{% qna %}
Q: (1;2;3;4) whose (exists (it, (2;4;6;8)) whose (item 0 of it is item 1 of it))
A: 2
A: 4
{% endqna %}

The downside of this method is that the second list is bound within the `whose`
clause and must be recreated for every iteration. To maintain responsiveness,
you should keep lists like this short.

Tuples of plurals can also be used to compare two sets of data:

{% qna %}
Q: ((1;2;3;4),(5;6;7;8)) whose (item 1 of it = 2*item 0 of it)
A: 3, 6
A: 4, 8
{% endqna %}

You can also find out just which files are in common by serially comparing the
tuples of 'new folder, old folder':

{% qna %}
Q: (names of files of folder "c:\") whose (exists (it, (names of files of folder "c:\old C")) whose (item 0 of it is item 1 of it))
A: CONFIG.SYS
A: IO.SYS
A: MSDOS.SYS
A: report.txt
{% endqna %}
