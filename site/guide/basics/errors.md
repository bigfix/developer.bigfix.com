# Errors
This section gives a description of the relevance inspector error messages along with possible reasons for each error.

## Singular Expression Refers to Non-Existent Object.

This is probably the most common error message you will receive.  It usually results from querying a property of an object that does not exist, or querying a non-existent property of an object.

For example,the query:
````
Version of file "misspelled.ddl" of folder "c:\temp"
````
will return **Singular expression refers to non-existent object** if any of the following conditions are true:

1.  The folder "c:\temp" does not exist
2.  There is no file named "misspelled.dll" int the folder "c:\temp"
3.  The file "misspelled.ddl" located in the folder "C:\tmpe" does not have a version

## A Singular Expression is Required

This error message results from trying to compare two lists or a list to an object.  In general, all comparisons mst be made between two singular objects.  For example:
````
  Versions of files of folder "c:\temp2" = versions of files of folder "c:\temp"
````
will return A singular expression is required because comparing two lists is undefined.  This will error out even if both folders contain exactly the same files.  Similarly,
````
Versions of files of folder "c:\temp" = "4.5"
````
gives the same error because you can't compare a list to a single value.  You will get this error even if there is only one file in the folder "c:\temp" whose version is 4.5

## It Used Outside of Whose Clause
This is an especially confusing error message because it is perfectly legal to use 'it' without a 'whose' clause as long as you form the sytax correcly.  This message just means that the interpreter does not know what 'it' refers to, meaning that there is some system error related to the workd 'it'.  For example:
````
System folder (name of it & pathname of it)
````
returns **It used outside of whose clause** since the interpreter does not know what 'it' is, as the statement is forumlated incorrectly.  The correct statement would be:
````
(name of it & pathname of it) of system folder
````
To ensure that 'it' points toward an object, you must make sure that you enclude 'of <object>' after any statement involving 'it' (but without whose).

## A String Constant had an Improper % Sequence
You can insert characters into a string by entering a percent sign and then the ASCII hex value of the character.  If you use a percent sign in a string, the relevance engine looks at the next two characters to see if they correspond to an ASCII hex value.  For example:
````
"I'm telling the %22truth%22"
````
returns ***I'm telling the "truth"*.  

A string with a percent sign in it will return **A string constant had an improper % sequence** if any of the following conditions are true:
1.  There are less than two characters in the string after the % sign.
2.  ANy of the two characters following the percent sign are not starnd letters or nubmers.
You won't get the error message if the percent sign is followed by letters or numbers buth they don't correspond to ASCII.  For example:
````
"hello said %7"
````
will return **A string constant had an improper % sequence** since the second character after the percent sign is white space.  However the following:
````
"hello said %9dgsn"
````
will return **hello said %9dgsn** as, although '%9d' isn't an ASCII hex value, both characters are letters and numbers.


