# Errors
This section gives a description of the relevance inspector error messages along with possible reasons for each error.

## Singular Expression Refers to Non-Existent Object.

This is probably the most common error message you will receive.  It usually results from querying a property of an object that does not exist, or querying a non-existent property of an object.

For example, the query:
````
Version of file "misspelled.dll" of folder "c:\temp"
````
will return **Singular expression refers to non-existent object** if any of the following conditions are true:

1.  The folder "c:\temp" does not exist
2.  There is no file named "misspelled.dll" in the folder "c:\temp"
3.  The file "misspelled.dll" located in the folder "C:\temp" does not have a version

## A Singular Expression is Required

This error message results from trying to compare two lists or a list to an object.  In general, all comparisons must be made between two singular objects.  For example:
````
Versions of files of folder "c:\temp2" = versions of files of folder "c:\temp"
````
will return **A singular expression is required** because comparing two lists is undefined.  This will error out even if both folders contain exactly the same files.  Similarly,
````
Versions of files of folder "c:\temp" = "4.5"
````
gives the same error because you can't compare a list to a single value.  You will get this error even if there is only one file in the folder "c:\temp" whose version is 4.5.

## It Used Outside of Whose Clause
This is an especially confusing error message because it is perfectly legal to use 'it' without a 'whose' clause as long as you form the sytax correcly.  This message just means that the interpreter does not know what 'it' refers to, meaning that there is some systax error related to the word 'it'.  For example:
````
System folder (name of it & pathname of it)
````
returns **It used outside of whose clause** since the interpreter does not know what 'it' is, as the statement is forumlated incorrectly.  The correct statement would be:
````
(Name of it & pathname of it) of system folder
````
To ensure that 'it' points toward an object, you must make sure that you enclude 'of *object*' after any statement involving 'it' (but without whose).

## A String Constant had an Improper % Sequence
You can insert characters into a string by entering a percent sign and then the ASCII hex value of the character.  If you use a percent sign in a string, the relevance engine looks at the next two characters to see if they correspond to an ASCII hex value.  For example:
````
"I'm telling the %22truth%22"
````
returns **I'm telling the "truth"** 

A string with a percent sign in it will return **A string constant had an improper % sequence** if any of the following conditions are true:

1.  There are less than two characters in the string after the % sign.
2.  Any of the two characters following the percent sign are not standard letters or nubmers.

You won't get the error message if the percent sign is followed by letters or numbers but they don't correspond to an ASCII hex value.  For example:
````
"Hello said %7 "
````
will return **A string constant had an improper % sequence** since the second character after the percent sign is white space.  However, the following:
````
"Hello said %9dgsn"
````
will return **Hello said %9dgsn** as, although '%9d' isn't an ASCII hex value, both characters are letters and numbers.

## The Operator "*bad_command*" is Undefined
You will receive this message if you use a word that the relevance interpreter does not recoginse, or if you use invalid commands on an object.  Here's some examples:
````
Exists executable "file_name.exe" of system foler
````
This will return **The operator "exectuable" is not defined** because the word 'executable' is not a valid command in the relevance language.
````
Version of key "HLKM/Software" of registry
````
This will return **The operator "version" is not defined** because, although the relevance language knows the word 'version', it does not recognise it as a valid property of registry key.

## The Operator "String" is Not Defined
The is a very common error message that indicates you are trying to return an object that has no default return value.  In order to fix it you just need to query a property of that object.  For exmaple:
````
Key "HKEY_LOCAL_MACHINE\SOFTWARE\BigFix\EnterpriseClient" of registry
````
will return **Operator "string" is not defined**.  Although the statement above correcly defines an object that does exist, the relevance language just doesn't know what you want to know about that object.  Instead you have to either ask its existence or query a property of the object, for example:
````
Exists key "HKEY_LOCAL_MACHINE\SOFTWARE\BigFix\EnterpriseClient" of registry
````
````
Value "version" of key "HKEY_LOCAL_MACHINE\SOFTWARE\BigFix\EnterpriseClient" of registry
````

## This Expression Could Not Be Parsed
The first step of interpreting a relevance statement is parsing the expression into its various components.  The above message results from a failure of the parsing engine.  This is usually caused by unmatched parentheses or by syntax errors involving certain "reserved words" used by the parsing engine.  Reserved words are syntactical statements like 'of','and','equals',and so on.  Here are some examples:
````
Name of (file whose (version of it = "2.6") of system folder
````
will return **This expression could not be parsed** because it has more open parentheses than closed ones.  This expression
````
Exists file "name" of or system folder
````
will return the same error due to the nonsensical use of the reserved words 'of' and 'or'.

## A Boolean Expression is Required
This error message is produced when a statement needs a boolean value to evaluate, but insted the expression returns a different return type.  A boolean value is required after 'if' and 'whose'. For example, the parenthetical statement after the 'whose' in the whose/it cluase does not return a boolean value.  For example:
````
names of files whose (version of it) of system folder
````
The parenthetical statement, *(version of it)*, after whose must return a boolean value for the expression to make sense.  Since the relevance interpreter is expecting a Boolean value and instead finds a version, it returns the error **A boolean expression is required**. Instead the statement shoudl be something like:
````
Names of files whose (version of it = "5") of system folder
````
The same problem exists in it/then/else statements.
````
If regapp "besclient.exe" then version of regapp "besclient.exe" as string else "N/A"
````
This will error because a boolen expression is required after the 'if'.  Instead the statement should read:
````
If exists regapp "besclient.exe" then version of regapp "besclient.exe" as string else "N/A"
````