---
title: Errors
---

# Errors

This section gives a description of the relevance inspector error messages along with possible reasons for each error.

## Singular Expression Refers to Non-Existent Object

This is probably the most common error message you will receive.  It usually results from querying a property of an object that does not exist, or querying a non-existent property of an object.

For example, the query:

{% qna %}
Q: version of file "misspelled.dll" of folder "c:\temp"
E: Singular expression refers to non-existent object.
{% endqna %}

will return **Singular expression refers to non-existent object** if any of the following conditions are true:

1.  The folder `c:\temp` does not exist
2.  There is no file named `misspelled.dll` in the folder `c:\temp`
3.  The file `misspelled.dll` located in the folder `C:\temp` does not have a version

## A Singular Expression is Required

This error message results from trying to compare two lists or a list to an object.  In general, all comparisons must be made between two singular objects.  For example:

{% qna %}
Q: versions of files of folder "c:\temp2" = versions of files of folder "c:\temp"
E: A singular expression is required.
{% endqna %}

will return **A singular expression is required** because comparing two lists is undefined.  This will error out even if both folders contain exactly the same files.  Similarly,

{% qna %}
Q: versions of files of folder "c:\temp" = "4.5"
E: A singular expression is required.
{% endqna %}

gives the same error because you can't compare a list to a single value.  You will get this error even if there is only one file in the folder `c:\temp` whose version is 4.5.

## It Used Outside of Whose Clause

This is an especially confusing error message because it is perfectly legal to use `it` without a `whose` clause as long as you form the syntax correctly.  This message just means that the interpreter does not know what `it` refers to, meaning that there is some systax error related to the word `it`.  For example:

{% qna %}
Q: system folder (name of it & pathname of it)
E: "It" used outside of "whose" clause.
{% endqna %}

returns **It used outside of whose clause** since the interpreter does not know what `it` is, as the statement is formulated incorrectly.  The correct statement would be:

{% qna %}
Q: (name of it & pathname of it) of system folder
A: System32C:\Windows\system32
{% endqna %}

To ensure that `it` points toward an object, you must make sure that you include `of <object>` after any statement involving `it` (but without `whose`).

## A String Constant had an Improper % Sequence

You can insert characters into a string by entering a percent sign and then the ASCII hex value of the character.  If you use a percent sign in a string, the relevance engine looks at the next two characters to see if they correspond to an ASCII hex value.  For example:

{% qna %}
Q: "I'm telling the %22truth%22"
A: I'm telling the "truth"
{% endqna %}

returns **I'm telling the "truth"**.

A string with a percent sign in it will return **A string constant had an improper % sequence** if any of the following conditions are true:

1.  There are less than two characters in the string after the % sign.
2.  Any of the two characters following the percent sign are not standard letters or nubmers.

You won't get the error message if the percent sign is followed by letters or numbers but they don't correspond to an ASCII hex value.  For example:

{% qna %}
Q: "Hello said %7 "
E: A string constant had an improper %-sequence.
{% endqna %}

will return **A string constant had an improper % sequence** since the second character after the percent sign is white space.  However, the following:

{% qna %}
Q: "Hello said %9dgsn"
A: Hello said %9dgsn
{% endqna %}

will return **Hello said %9dgsn** as, although `%9d` isn't an ASCII hex value, both characters are letters and numbers.

## The Operator "&lt;bad_command&gt;" is Not Defined

You will receive this message if you use a word that the relevance interpreter does not recognize, or if you use invalid commands on an object.  Here's some examples:

{% qna %}
Q: exists executable "file_name.exe" of system folder
E: The operator "executable" is not defined.
{% endqna %}

This will return **The operator "exectuable" is not defined** because the word 'executable' is not a valid command in the relevance language.

{% qna %}
Q: version of key "HLKM/Software" of registry
E: The operator "version" is not defined.
{% endqna %}

This will return **The operator "version" is not defined** because, although the relevance language knows the word 'version', it does not recognize it as a valid property of registry key.

## The Operator "String" is Not Defined

The is a very common error message that indicates you are trying to return an object that has no default return value.  In order to fix it you just need to query a property of that object.  For exmaple:

{% qna %}
Q: registry
E: Operator "string" is not defined.
{% endqna %}

will return **Operator "string" is not defined**.  Although the statement above correctly defines an object that does exist, the relevance language just doesn't know what you want to know about that object.  Instead you have to either ask its existence or query a property of the object, for example:

{% qna %}
Q: exists registry
A: True
{% endqna %}

{% qna %}
Q: value "version" of key "HKEY_LOCAL_MACHINE\SOFTWARE\BigFix\EnterpriseClient" of registry
A: 9.2.1.48
{% endqna %}

## This Expression Could Not Be Parsed

The first step of interpreting a relevance statement is parsing the expression into its various components.  The above message results from a failure of the parsing engine.  This is usually caused by unmatched parentheses or by syntax errors involving certain "reserved words" used by the parsing engine.  Reserved words are syntactical statements like `of`, `and`, `equals`, and so on.  Here are some examples:

{% qna %}
Q: name of (file whose (version of it = "2.6") of system folder
E: This expression could not be parsed.
{% endqna %}

will return **This expression could not be parsed** because it has more open parentheses than closed ones.  This expression

{% qna %}
Q: exists file "name" of or system folder
E: This expression could not be parsed.
{% endqna %}

will return the same error due to the nonsensical use of the reserved words `of` and `or`.

## A Boolean Expression is Required

This error message is produced when a statement needs a boolean value to evaluate, but insted the expression returns a different return type.  A boolean value is required after `if` and `whose`. For example, the parenthetical statement after the `whose` in the `whose`/`it` clause does not return a boolean value.  For example:

{% qna %}
Q: names of files whose (version of it) of system folder
E: A boolean expression is required.
{% endqna %}

The parenthetical statement, `(version of it)`, after whose must return a boolean value for the expression to make sense.  Since the relevance interpreter is expecting a boolean value and instead finds a version, it returns the error **A boolean expression is required**. Instead the statement should be something like:

{% qna %}
Q: names of files whose (version of it = "5") of system folder
A: atmfd.dll
A: atmlib.dll
A: charmap.exe
A: comctl32.dll
A: ...
{% endqna %}

The same problem exists in if-then-else statements.

{% qna %}
Q: if regapp "besclient.exe" then version of regapp "besclient.exe" as string else "N/A"
E: A boolean expression is required.
{% endqna %}

This will error because a boolen expression is required after the `if`.  Instead the statement should read:

{% qna %}
Q: if exists regapp "besclient.exe" then version of regapp "besclient.exe" as string else "N/A"
A: N/A
{% endqna %}

## Singular Expression Refers to Non-Unique Object

This error message arises when you try to query a singular property of multiple objects.  For example:

{% qna %}
Q: version of files of system folder
A: 6.3.9600.16384
E: Singular expression refers to non-unique object.
{% endqna %}

will return the version of the first file it finds and then the error message **Singular expression refers to non-unique object**.  If you want to output a list of all the properties of a list, make sure to make the queries plual.  For example:

{% qna %}
Q: versions of files of system folder
A: 6.3.9600.16384
A: 6.3.9600.16384
A: 6.3.9600.16384
A: ...
{% endqna %}

will return a list of all the versions.  If you want a single return value, you have to make sure to just query one object.  If you want to return a list of properties, the inspector must be plural.

## Incompatible Types

There are certain inspectors that look for return values of the same type.  If different types are returned, the relevance interpreter returns **Incompatible Types**.  The first example is the if-then-else statement.  An if-then-else statement will either return the expression after `then` or after `else`.  Both of these expressions must return the same object.  For example:

{% qna %}
Q: if exists regapp "Besconsole.exe" then version of regapp "Besconsole.exe" else "Not Installed"
E: Incompatible types.
{% endqna %}

returns **Incompatible types**.  This is because the `then` expression returns a version, while the `else` expression returns a string.  Instead you need to make sure that both statements return the same type by converting the version to a string.

{% qna %}
Q: if exists regapp "Besconsole.exe" then version of regapp "Besconsole.exe" as string else "Not Installed"
A: Not Installed
{% endqna %}

The same issue exists when you create a list with semicolons:

{% qna %}
Q: running applications; names of recent applications
E: Incompatible types.
{% endqna %}

returns **Incompatible types** because it is trying to create a list made up of running applications and strings.

## This Expression Contained a Character Which is Not Allowed

This error message is often given when the relevance interpreter finds a character that it does not recognize.  You can use any character you want in a string except `"`, but outside of a string a random character will break the relevance statement.  For example:

{% qna %}
Q: {pathname of regapp "besclient.exe"}
E: This expression contained a character which is not allowed.
{% endqna %}

will return **This expression contained a character which is not allowed** because curly braces are not valid in the relevance language. (Although they do signify relevance substitution in an action script).

## No Inspector Context

Certain inspectors can only be evaulated by the Endpoint Manager Client and therefore will not work in QNA.  If you try to evaluate one of these in QNA, you will recieve **No inspector context**.  A common example is:

{% qna %}
Q: pending restart
E: No inspector context.
{% endqna %}

In general, in order to evaulate statements that return **No inspector context** you must define them as retrieved properties in the Console.

## A String Constant Had No Ending Quotation Mark

This message is fairly self-explanatory.  It simply means that there was an unenven number of quotation marks in the expression.  Here is an example:

{% qna %}
Q: version of file "msh.dll of system folder
E: A string constant had no ending quotation mark.
{% endqna %}
