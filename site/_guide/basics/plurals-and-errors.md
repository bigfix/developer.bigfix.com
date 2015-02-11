---
title: Plurals and Errors
---

As you saw in the preceding section, plurals of inspectors are easy to create,
typically by adding an 's' to the end of the name. For example, `substring` is
singular, `substrings` is plural:

````
Q: substrings separated by " " of "a short string"
A: a
A: short
A: string
````

But a plural inspector doesn’t have to return multiple values:

````
Q: substrings separated by " " whose (it contains "o") of "a short string"
A: short
````

Although the result is a plural substring type, there is only a single value. In
fact, as you saw in the last section, a plural expression can return no value at
all, without incurring an error.

````
Q: substrings separated by " " whose (it contains "z") of "a short string"
````

This returns no values, but no error either. So it’s important to remember that
plurality is a property of the expression itself, not necessarily the results.

Furthermore, there are restraints on singular expressions. Whereas a plural can
return zero, one or more values, a singular expression is expected to return a
single value. For example:

````
Q: substring separated by " " whose (it contains "o") of "a short string"
A: short
````

You should be expecting a solitary value like this as a result of inspector.
However, the following returns an error:

````
Q: substring separated by " " whose (it contains "s") of "a short string"
E: Singular expression refers to non-unique object.
````

This is because there are two words containing 's', and this expression is
looking for a singular value. While two is too much, zero is not enough:

````
Q: substring separated by " " whose (it contains "z") of "a short string"
E: Singular expression refers to nonexistent object.
````

If you're certain of retrieving a solitary value, use the singular version.
Otherwise, for greater flexibility, use the plural. As a practical example, you
can find a single folder like this:

````
Q: name of folder of folder "c:\Documents and Settings"
A: All Users
E: Singular expression refers to non-unique object. 
````

But as you can see, even though it returns an answer, it also generates an
error. This is because there are multiple folders in the specified location, and
this command only retrieves the first one. To see the complete list, you need to
use the plural version:

````
Q: names of folders of folder "C:\Documents and Settings"
A: All Users
A: Default User
A: LocalService
A: NetworkService
````

You can explicitly create plurals using a semi-colon `;` to separate the items.
These are called "collections".

````
Q: "two"; "words"
A: two
A: words
````

````
Q: exist files ("c:\whitelist.txt"; "c:\blacklist.txt")
A: True
````

Notice that plurals must be the same type, or you will generate an error:

````
Q: "one", 1
E: Incompatible types.
````
