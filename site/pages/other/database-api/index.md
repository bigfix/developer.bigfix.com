---
title: Database API 
---

The Database API consists of a set of SQL views that ship with the BigFix SQL database. 
These views enable applications to query the database directly by using
MSSQL-compatible interfaces such as ADO or ODBC. A typical application might
be a Perl cgi program that creates an HTML report for online viewing. Perl uses
the database Interface (dbi) to connect to the SQL database. Any programming
language that has an ODBC interface can be used to access the database.

The SQL format of the database makes it easy to create various views of the tables,
including Fixlet, action, computer, and retrieved property tables. With a few simple
SELECT commands, you can create filtered and sorted views of the various
databases. These can be used to prepare custom reports, audit trails or capture
snapshots of the environment.
 
![Database 2](/static/img/database_api_1_extract_comp_properties.png)  
 
Access to the database for the SELECT commands listed here is granted to all
authorized users of the Console. Because these views are intended for output only,
users are not able to update, delete, or otherwise modify the database with this
API. For information about how to create actions and tasks that might modify the
database, see the [Server API](../platform-api/).


