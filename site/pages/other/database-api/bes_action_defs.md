---
title: BES_ACTION_DEFS
---

This view lists all the data associated with the latest version of each Action object in the 
database.  The Fields column is a binary encoding of an XML document that defines the properties of the 
Action object.  See the section on [Working with Fields XML Data](./working_with_xml.html) for details about how to access that data.  

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| ID      | int | Action ID |
| Version     | Varbinary(512)  | The ManyVersion of this action.  See the section on [Working with ManyVersion Data](./working_with_manyversions.html) for details. Only the latest version of each action is contained in this view.  |
| ParentID | Int | A value of 0 indicates that this action is a top-level action, that is it is not a member of a multiple action group.  A value of 1 (trash) indicates that this action has been stopped.  Any other value indicates that this action is a member of a multiple action group, and the value is the ID of the top-level multiple action group action for the group.  |
| Username  | Varchar(32)  | The SQL database username of the operator who took this action.  |
| ContentType | Smallint  | The value of this column should be 7 (singleActionType)  or 8 (multipleActionGroupType).  A value of 7 indicates that this action is a single action that might or might not be a member of a multiple action group.  A value of 8 indicates that this action is the top-level action for a multiple action group.  All of the member actions of the group should have a ParentID value that matches the ID of this action. |
| Name | Varchar(255)  | The name of the action. |
| Fields | Image | A binary encoding of an XML document that contains all the properties of this action.  See the section on [Working with Fields XML Data](./working_with_xml.html) for details. | 
| Sequence | Rowversion  | The local database sequence number for this row. |
| OriginServerID  | Tinyint | If the value is NULL, then this action was created on this DSA server, otherwise this action was replicated from another DSA server, and the value is the DSA server ID of the server on which this action was originally created. |
| OriginSequence | BINARY(8) | If the value is NULL, then this action was created on this DSA server, otherwise this action was replicated from another DSA server, and the value is the rowversion value of the Sequence column of this action on the DSA server on which the action was originally created. |

Example:
```sql
select ID, Name, dbo.fn_ExtractField('Source Fixlet',0,Fields) from 
BES_ACTION_DEFS where ParentID = 0 and dbo.fn_IsActionExpired( Fields, GetUTCDate() ) = 0 
```

