---
title: Using Substitution
---

Substitution allows the Fixlet author to include relevance expressions in an action. 
This is accomplished by placing the relevance expression in curly braces. 

For example, this example runs a program without knowing where it is located. 
A relevance expression evaluates the pathname automatically using the ‘regapp’ inspector:

```actionscript
run "{pathname of regapp "excel.exe"}"
```
In this example, instead, the action pauses until a program completes running:

```actionscript
pause while {exists running application "c:\updater.exe"}
```


BigFix expects to find a single expression inside the curly braces. If it sees 
another left brace before it encounters a closing right brace, it treats it as an 
ordinary character. For example, the output of the action: 

```actionscript
echo {"a left brace: {"}
``` 

would be: 

```
a left brace: {
```

This means that no special escape characters are necessary to represent a left brace. 
To output a literal right brace without ending the substitution, use a double character, for example: 

```actionscript
{% raw %}echo {"{a string inside braces}}"}{% endraw %}
```

would return:

```
{a string inside braces}
```


This is another example:

```actionscript
{% raw %}appendfile {{ name of operating system } {name of operating system}{% endraw %}
```

When this example is parsed, the double left braces indicate that what follows is not a relevance 
expression. Only a single right brace is necessary when it's outside of a relevance expression 
(inside a relevance expression, a double right brace is necessary to specify a literal one). This 
would output the following line to __appendfile:

```
{ name of operating system } WinXP
```

You can also use substitution with add prefetch item commands in prefetch blocks, for example: 

```actionscript
begin prefetch block 
   parameter "manifest"="{pathname of file "manifest.spec" of client folder of site "AV"}" 
   add prefetch item {concatenation " ; " of lines of file (parameter "manifest")}  
end prefetch block 
```
