---
title: Plurals and Errors
---

As you saw in the preceding section, plurals of inspectors are easy to create,
typically by adding an 's' to the end of the name. For example, `substring` is
singular, `substrings` is plural:

{% example %}
Q: substrings separated by " " of "a short string"
A: a
A: short
A: string
{% endexample %}

But a plural inspector doesn’t have to return multiple values:

{% example %}
Q: substrings separated by " " whose (it contains "o") of "a short string"
A: short
{% endexample %}

Although the result is a plural substring type, there is only a single value. In
fact, as you saw in the last section, a plural expression can return no value at
all, without incurring an error.

````
substrings separated by " " whose (it contains "z") of "a short string"
````

This returns no values, but no error either. So it’s important to remember that
plurality is a property of the expression itself, not necessarily the results.

Furthermore, there are restraints on singular expressions. Whereas a plural can
return zero, one or more values, a singular expression is expected to return a
single value. For example:

{% example %}
Q: substring separated by " " whose (it contains "o") of "a short string"
A: short
{% endexample %}

You should be expecting a solitary value like this as a result of inspector.
However, the following returns an error:

{% example %}
Q: substring separated by " " whose (it contains "s") of "a short string"
E: Singular expression refers to non-unique object.
{% endexample %}

This is because there are two words containing 's', and this expression is
looking for a singular value. While two is too much, zero is not enough:

{% example %}
Q: substring separated by " " whose (it contains "z") of "a short string"
E: Singular expression refers to nonexistent object.
{% endexample %}

If you're certain of retrieving a solitary value, use the singular version.
Otherwise, for greater flexibility, use the plural. As a practical example, you
can find a single folder like this:

{% example %}
Q: name of folder of folder "c:\Documents and Settings"
A: All Users
E: Singular expression refers to non-unique object. 
{% endexample %}

But as you can see, even though it returns an answer, it also generates an
error. This is because there are multiple folders in the specified location, and
this command only retrieves the first one. To see the complete list, you need to
use the plural version:

{% example %}
Q: names of folders of folder "C:\Documents and Settings"
A: All Users
A: Default User
A: LocalService
A: NetworkService
{% endexample %}

You can explicitly create plurals using a semi-colon `;` to separate the items.
These are called "collections".

{% example %}
Q: "two"; "words"
A: two
A: words
{% endexample %}

{% example %}
Q: exist files ("c:\whitelist.txt"; "c:\blacklist.txt")
A: True
{% endexample %}

Notice that plurals must be the same type, or you will generate an error:

{% example %}
Q: "one", 1
E: Incompatible types.
{% endexample %}
