---
title: Whose
---

The `whose` clause allows you to filter a result or set of results based on
specified relevance criteria. It has the form:

````
<expression> whose <condition>
````

For instance:

{{#example}}
Q: (1;2;3;5;8;17) whose (it mod 2 = 1)
A: 1
A: 3
A: 5
A: 17
{{/example}}

The special keyword `it` refers to the elements of the list – in this case the
collection of numbers – and is bound only within the filter expression. The
filter expression is executed once for every value in the filtered property,
with `it` referring to each result in turn. The results where the filter clause
evaluates to `True` are included in the output list. Note that `it` always
refers to the list immediately to the left of the `whose` statement.

The `it` keyword can also refer to objects that are not part of a whose clause:

{{#example}}
Q: (it * 2) of (1;2;3)
A: 2
A: 4
A: 6
{{/example}}

Here, `it` takes on the values in the list, one at a time.

You can also use parentheses to define the scope of the whose-it objects. A
judicious use of parentheses can ensure proper results while improving
readability. For instance, the following examples show how subtle rearrangement
of whose clauses can change the output significantly:

{{#example}}
Q: preceding texts of characters of "banana" whose (it contains "n")
A:
A: b
A: ba
A: ban
A: bana
A: banan
{{/example}}

{{#example}}
Q: preceding texts of characters of ("banana" whose (it contains "n"))
A:
A: b
A: ba
A: ban
A: bana
A: banan
{{/example}}

These expressions both go character-by-character through the word 'banana' and
return the text preceding each character. Because it returns the text before the
character, it returns the blank before 'b' and stops at the final 'a' with
'banan'. The expressions both return the same values, but the second one makes
it more clear what `it` refers to, namely 'banana'. Since 'banana' will always
have an 'n', this expression will return all the specified substrings.

{{#example}}
Q: preceding texts of characters whose (it contains "n") of "banana"
A: ba
A: bana
{{/example}}

{{#example}}
Q: preceding texts of (characters of "banana") whose (it contains "n")
A: ba
A: bana
{{/example}}

These two expressions are equivalent, but the second one shows more explicitly
what `it` refers to, namely the characters of the word `banana`. The 'n' appears
twice in banana, and so two substrings are returned.

{{#example}}
Q: preceding texts whose (it contains "n") of characters of "banana"
A: ban
A: bana
A: banan
{{/example}}

{{#example}}
Q: (preceding texts of characters of "banana") whose (it contains "n")
A: ban
A: bana
A: banan
{{/example}}

These two expressions do the same thing, but the second one makes it obvious
that `it` refers to the text preceding the character. Thus only the initial
substrings of 'banana' that contain an 'n' are returned.

In practical usage, you could use `whose` clauses to filter folders:

{{#example}}
Q: names whose (it contains "a") of files of folder "c:"
A: atl70.dll
A: blacklist.txt
A: pagefile.sys...
{{/example}}

Or you can put the `whose` clause at the end of the expression, which makes the
object of `it` more explicit and may be easier to read:

{{#example}}
Q: (names of files of folder "c:") whose (it contains "a")
A: atl70.dll
A: blacklist.txt
A: pagefile.sys
{{/example}}

If the filtered property is singular, the result of the `whose` clause is
singular. If the filtered property is a plural type, the result is a plural
type.

{{#example}}
Q: exists active device whose (class of it = "Display")
A: True
{{/example}}

This singular property evaluates to true if there is an active display device on
the client computer.

{{#example}}
Q: files whose (name of it starts with "x") of system folder
A: "xactsrv.dll" "5.1.2600.2180" "Downlevel API Server DLL" "5.1.2600.2180 (xpsp_sp2_rtm.040803-2158)" "Microsoft Corporation"
A: "xcopy.exe" "5.1.2600.2180" "Extended Copy Utility" "5.1.2600.2180 (xpsp_sp2_rtm.040803-2158)" "Microsoft Corporation"
{{/example}}

This plural expression returns a list of system files whose names start with
'x'.

As it loops through the plural values, the expression in the filter may attempt
to evaluate a non-existent object. By itself, such an expression would throw an
error such as:

````
Singular expression refers to nonexistent object.
````

But in the case of a `whose` clause, the non-existent value is simply ignored
and gets excluded from the resulting set. As a side effect, this feature allows
you to examine an object for existence before you attempt to inspect it (and
throw an error). As an example, here's a Relevance clause that will trigger an
existence error:

{{#example}}
Q: exists file of folder "z:\bar"
E: Singular expression refers to nonexistent object.
{{/example}}

But, by placing this clause inside a `whose` statement, you can avoid the error:

{{#example}}
Q: exists true whose ( exists file of folder "z:\bar" )
A: False
{{/example}}
