---
title: HTML Inspectors
---

This type of Inspectors helps you to author HTML commands to create customized content for the BigFix Console and Web Reports. 
They allow construction of HTML snippets that can be used to display BigFix data elements in a browser.

When generating HTML, you will be working with the *html* type. 
This type can be thought of as a string that carries around an indication that its content is to be treated as HTML. 
This automatically keeps track of normal string characters that have special meaning in HTML (such as *<* , *>* , and *&*), and escapes them.

An HTML inspector automatically converts:
- The reserved characters to the appropriate HTML entities.
- The results of evaluated relevance instructions to HTML before inserting them in the presentation HTML.
This means that you can write Relevance expressions just as you would expect and simply use the html Inspector to convert them, for example:

```relevance
html of "AT&T"
```

returns: `<html>AT&amp;T</html>`.

Or you can cast a string as an html type explicitly to achieve the same results (but without the bracketing `<html>` tags), for example:

```relevance
"<h1>Heading</h1>" as html
```

returns: `&lt;h1&gt;Heading&lt;/h1&gt;`

If you actually want HTML code to be output you can use an indexed HTML command such as:

```relevance
html "<h1>Heading</h1>"
```

which returns: `<h1>Heading</h1>`


As an alternative to HTML formatted retrieved properties, consider reporting the results in plain text and doing the formatting from within the presentation.

## Concatenation samples

If you concatenate html with strings, it will automatically escape any reserved characters:

```relevance
html "<h1>" & "PG&E" & html"</h1>"
```

returns: `<h1>PG&amp;E</h1>`

Or:

```relevance
concatenation of (html<h1>"; "R&D" as html; html "</h1>")
```

returns: returns: `<h1>R&amp;D</h1>`

Note that for concatenation, the items in the list must all have the same type, so the following will not work:

```relevance
concatenation of (html<h1>"; "R&D"; html "</h1>")
```

Returns the error: Incompatible types (html and string).

## HTML tag Inspectors

Although it is possible to use the "html" indexed property (as shown above), the HTML tag Inspectors are recommended instead:

```relevance
html tag "h1" of "Johnson & Johnson"
```

returns: `<h1>Johnson &amp; Johnson</h1>`

The "html tag" takes as an index parameter the name of the HTML element with which to surround the direct object text. 
The direct object (the object after the "of") can be either a string or html. If it is a string, it will be HTML-escaped. 
The index parameter can also include attributes, separated from the element name by whitespace:

```relevance
html tag "h1 id='Ben & Jerry'" of "Ben & Jerry"
```
returns:`<h1 id='Ben & Jerry'>Ben &amp; Jerry</h1>`

Nesting tags is straightforward:

```relevance
html tag "div id='header'" of html tag "h1" of "AT&T"
```

returns: `<div id='header'><h1>AT&amp;T</h1></div>`

Most common HTML elements have a shorthand tag property:

```relevance
h1 of "P&G"
```

returns: `<h1>P&amp;G</h1>`

Like the generic html tag Inspector each shorthand tag property accepts either strings or html as a direct object. 
Each also accepts HTML attributes as an index parameter:

```relevance
h1 "id='P&G' class='header'" of "P&G"
```

returns: `<h1 id='P&G' class='header'>P&amp;G</h1>`

The following tags are supported:

<table>
    <tr>
        <td>abbr</td>
		<td>acronym</td>
		<td>address</td>
		<td>anchor</td>
		<td>b</td>
    </tr>
	<tr>
        <td>base</td>
		<td>big</td>
		<td>blockquote</td>
		<td>body</td>
		<td>caption</td>
    </tr>
    <tr>
        <td>cite</td>
		<td>code</td>
		<td>col</td>
		<td>colgroup</td>
		<td>dd</td>
    </tr>
	<tr>
        <td>del</td>
		<td>dfn</td>
		<td>div</td>
		<td>dt</td>
		<td>em</td>
    </tr>
    <tr>
        <td>h1</td>
		<td>h2</td>
		<td>h3</td>
		<td>h4</td>
		<td>h5</td>
    </tr>
	<tr>
        <td>h6</td>
		<td>head</td>
		<td>html</td>
		<td>i</td>
		<td>ins</td>
    </tr>
    <tr>
        <td>kbd</td>
		<td>li</td>
		<td>link</td>
		<td>meta</td>
		<td>ol</td>
    </tr>
	<tr>
        <td>p</td>
		<td>pre</td>
		<td>q</td>
		<td>samp</td>
		<td>small</td>
    </tr>	
	<tr>
        <td>span</td>
		<td>strong</td>
		<td>sub</td>
		<td>sup</td>
		<td>table</td>
    </tr>
    <tr>
        <td>tbody</td>
		<td>td</td>
		<td>tfoot</td>
		<td>th</td>
		<td>thead</td>
    </tr>
	<tr>
        <td>title</td>
		<td>tr</td>
		<td>tt</td>
		<td>ul</td>
		<td>var</td>
    </tr>
</table>

Since "a" is ignored by the relevance evaluator, the "a" shorthand property is replaced by "anchor".

```relevance
anchor "href='http://www.ibm.com'" of "ibm"
```

returns: `<a href='http://www.ibm.com'>ibm</a>`

Finally, there are a few special purpose aggregating properties:
- **ordered** list
- **unordered** list
- **definition** list

These produce HTML lists (of the respective types) of their plural string or html direct object:

```relevance
ordered list of ("<"; ">"; "&")
```

returns: `<ol><li>&lt;</li><li>&gt;</li><li>&amp;</li></ol>`


```relevance
unordered list of ("<"; ">"; "&")
```

returns: `<ul><li>&lt;</li><li>&gt;</li><li>&amp;</li></ul>`

The definition list command alternates between dt and dd elements. It is meant to be used where you have a natural set of name/value pairs:

```relevance
definition list of (name of it; free space of it as string) of drives whose (exists free space of it)
```

returns: `<dl><dt>C:</dt><dd>32183602176</dd> <dt>G:</dt><dd>4845355008</dd></dl>`

---

**Examples**

```relevance
javascript array "myArray" of ("a"; "b"; "c")
```

Creates the javascript snippet: `var myArray = new Array();myArray[0] = "a";myArray[1] = "b";myArray[2] = "c";`.


