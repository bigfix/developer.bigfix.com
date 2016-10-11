---
title: Working with Fields XML Data
---

The Fields column of the BES_ACTION_DEFS and BES_OBJECT_DEFS views contains a binary encoding of an XML document that defines the properties of the object. This is essentially a collection of (name, value) pairs. There is a stored procedure called fn_ExtractField () that returns the value for a given name.
For example:

```
select dbo.fn_ExtractField(‘SourceSeverity’, 0, O.Fields) from BES_OBJECT_DEFS O
where Sitename = ‘ActionSite’ and ID = 1234 and IsFixlet = 1
```

returns the value of the SourceSeverity field for the custom-authored fixlet object whose ID is 1234.
The first parameter of the function is the name of the field whose value should be returned. The second parameter is 0 if the name specifies a type of field for which there can be only one value. If the name corresponds to a type of field for which there can be multiple values, then the second parameter specifies which of the multiple values to retrieve. The third parameter is the binary-encoded XML document, which is typically a value from the Fields column.
There is another useful function called fn_IsActionExpired (). This function takes the Fields column value from an ACTION_DEF and determines if that action is expired at a given date and time.
For example:

```
select * from BES_ACTION_DEFS
where dbo.fn_IsActionExpired(Fields, GetUTCDate()) = 1
```
returns all of the actions that are expired at the current time.

**Note:**The function returns 1 if the action is expired, and returns 0 if the action is not expired. If no expiration time can be found in the XML document specified by the first parameter, then the function returns 0.


In addition to using these functions, you can convert the value of the Fields column to VARCHAR(8000) in order to see up to the first 8000 characters of the XML document.
For example:

```
select CONVERT(VARCHAR(8000), Fields) from BES_ACTION_DEFS
where dbo.fn_IsActionExpired(Fields, GetUTCDate()) = 1
```
returns up to the first 8000 characters of the Fields XML document for each action that is expired at the current time.
