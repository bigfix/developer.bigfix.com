---
title: BES_OBJECT_DEFS
---

The BES_OBJECT_DEFS view lists all of the data associated with the latest version of each BES object 
(excluding Action objects) in the database. Note that all objects gathered from fixlet sites, as well as 
custom-authored objects, are included in this table. The Fields column is a binary encoding of an XML 
document which defines the properties of the object. See the section on [Working with Fields XML Data](./working_with_xml.html) for details on how to access that data. 
If an object has a ContentType value of 2 (fileType), then it represents a binary file. 
The actual binary contents of the file are stored in a separate table, not in the Fields column.  


| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| Sitename  | Varchar(128) | For custom-authored objects, the value in the Sitename column is always 'ActionSite', even if the object is propagated in a different site (e.g. a custom site). For objects gathered from fixlet sites, the Sitename is the name of the fixlet site followed by '__XXX' where XXX is the version number of the fixlet site. |
| ID      | int | Object ID |
| Is Fixlet | smallint | True for fixlets, tasks, analyses, baselines, and computer groups. |
| Version     | Varbinary(512)  | The ManyVersion of this action.  See the section on [Working with ManyVersion Data](./working_with_manyversions.html) for details. Only the latest version of each action is contained in this view. |
| ParentID | Int | A value of 0 indicates that this object has been deleted. |
| CreationTime | Datetime |  The date and time that this version of this object was created. |
| Username  | Varchar(32)  | The SQL database username of the operator who created this verion of the object. |
| ContentType | Smallint  | 0: site (only for object ID = 0) - 0: fixlet type - 2: file type - 3: trash type (should only occur for object ID = 1) - 5: question type (retrieved property definition) - 6: question set type 
| Name | Varchar(255)  | The name of the action. |
| Fields | Image | A binary encoding of an XML document which contains all of the properties of this object.  See the section on [Working with Fields XML Data](./working_with_xml.html) for details | 
| Sequence | Rowversion  | The local database sequence number for this row. |
| OriginServerID  | Tinyint | If the value is NULL, then this action was created on this DSA server, otherwise this action was replicated from another DSA server, and the value is the DSA server ID of the server on which this action was originally created. |
| OriginSequence | BINARY(8) | If the value is NULL, then this action was created on this DSA server, otherwise this action was replicated from another DSA server, and the value is the rowversion value of the Sequence column of this action on the DSA server on which the action was originally created. |

Example:
```sql
select ID, Name, dbo.fn_ExtractField('Source Fixlet',0,Fields) from 
BES_ACTION_DEFS where ParentID = 0 and dbo.fn_IsActionExpired( Fields, GetUTCDate() ) = 0
```

