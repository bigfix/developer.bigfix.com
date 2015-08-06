# Parent

Objects can have a parent object.  The child object inherits the [properties](./properties.html) of its parent. This is very useful because it gives us access to a lot more inspectors.  For example, the parent of `file line` is `string`.  So we can make use of all the `string` inspectors with a `file line` object.

In this example we use the `substring separated by` inspector of the `string` object on a `file line` object:

{{#example}}
Q: substrings separated by "," of lines of file "c:\temp\file.txt"
A: Hello
A: world.
{{/example}}

The inherited properties are not listed in the usual documentation nor are they returned by the `properties of type` introspector.  These are the properties of the `file line`, as you can see there's no `substrings separated by`:

{{#example}}
Q: properties of type "file line"
A: line number of <file line>: integer
A: previous line of <file line>: file line
A: next line of <file line>: file line
{{/example}}

We can view the parent of an object using an introspector called `parent of type`:

{{#example}}
Q: parent of type "file line"
A: string
{{/example}}

We can see the inherited properties by introspecting the parent:

{{#example}}
Q: properties of parent of type "file line"
A: concatenations <html> of <string>: html
A: html tag <string> of <string>: html
A: html of <string>: html
A: ...
{{/example}}

Finally, We can use use the `parent of type` introspector to find all the objects that have a parent:

{{#example}}
Q: types whose (exists parent of it)
A: application
A: client
A: ...
{{/example}}
