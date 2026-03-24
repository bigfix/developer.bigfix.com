---
title: Working with Fields XML Data
---

The Fields column of the BES_ACTION_DEFS and BES_OBJECT_DEFS views contains a binary encoding of an XML document that defines the properties of the object. This is essentially a collection of (name, value) pairs. There is a stored procedure called fn_ExtractField () that returns the value for a given name.
For example:

```sql
select dbo.fn_ExtractField('SourceSeverity', 0, O.Fields) from BES_OBJECT_DEFS O
where Sitename = 'ActionSite' and ID = 1234 and IsFixlet = 1
```

returns the value of the SourceSeverity field for the custom-authored Fixlet object whose ID is 1234.
The first parameter of the function is the name of the field whose value should be returned. The second parameter is 0 if the name specifies a type of field for which there can be only one value. If the name corresponds to a type of field for which there can be multiple values, then the second parameter specifies which of the multiple values to retrieve. The third parameter is the binary-encoded XML document, which is typically a value from the Fields column.
There is another useful function called fn_IsActionExpired (). This function takes the Fields column value from an ACTION_DEF and determines if that action is expired at a given date and time.
For example:

```sql
select * from BES_ACTION_DEFS
where dbo.fn_IsActionExpired(Fields, GetUTCDate()) = 1
```
returns all the actions that are expired at the current time.

**Note:**The function returns 1 if the action is expired, and returns 0 if the action is not expired. If no expiration time can be found in the XML document specified by the first parameter, then the function returns 0.


In addition to using these functions, you can convert the value of the Fields column to VARCHAR(8000) to see up to the first 8000 characters of the XML document.
For example:

```sql
select CONVERT(VARCHAR(8000), Fields) from BES_ACTION_DEFS
where dbo.fn_IsActionExpired(Fields, GetUTCDate()) = 1
```
returns up to the first 8000 characters of the Fields XML document for each action that is expired at the current time.

Because the `Fields` column data is dynamic and allows for custom entries, there is no fixed list of all possible fields.
It is possible to generate a list of all of your current fields for use in the `dbo.fn_ExtractField()` function by using the SQL code below.
Note that you can change `dbo.action_defs` to `dbo.fixlet_defs` or to any other tables with the `Fields` column to get the respective lists of existing fields.

```sql
-- Select the distinct (unique) values found
SELECT DISTINCT
    -- Use the .value() XML method to extract the text content
    -- from the first (or only) child node named <Name>
    -- within the current <Fields> node (represented by x.Item).
    -- Cast this extracted value to VARCHAR(MAX) and alias the
    -- resulting column as 'fieldname'.
    x.Item.value('(Name)[1]', 'VARCHAR(MAX)') AS fieldname
FROM
(
    -- Start of a derived table (subquery) aliased as 'actiondefs'
    SELECT
        -- The [Fields] column (which is likely stored as text)
        -- is first cast to VARBINARY(MAX) and then to the XML data type.
        -- This double-cast is a common technique to handle
        -- potential encoding issues or data type conflicts (e.g., from TEXT/NTEXT).
        -- The resulting XML column is aliased as 'data'.
        CAST(CAST([Fields] AS VARBINARY(MAX)) AS XML) AS data
    FROM
        [BFEnterprise].[dbo].[ACTION_DEFS] -- Specify the source table
) AS actiondefs
-- CROSS APPLY is used to invoke the .nodes() function for EACH row
-- from the 'actiondefs' derived table.
CROSS APPLY
    -- The .nodes() method "shreds" the XML in the 'data' column.
    -- It finds every node matching the XQuery path '/Object/Fields'
    -- (i.e., all <Fields> nodes that are children of the root <Object> node).
    -- It returns a new row for each matching <Fields> node.
    -- This new "virtual" table is aliased as 'x',
    -- and its single column (containing the XML node) is aliased as 'Item'.
    actiondefs.data.nodes('/Object/Fields') AS x(Item);
```
