---
title: mysql
---

{% type local mssql database%}

The &lt;local mssql database&gt; inspectors retrieve the properties of the MS SQL databases on the local machine.

#### Properties

{% property running of <local mssql database> %}

Returns a boolean indicating if the MSSQL database is running.

{% property login mode of <local mssql database> %}

Returns the login mode of the MSSQL database.

{% property instance name of <local mssql database> %}

Returns the name of the MSSQL database.

{% property has blank sa password of <local mssql database> %}

Returns TRUE if the MSSQL database sa account has a blank password.

{% property audit level of <local mssql database> %}

Returns the integer audit level of the MSSQL database.

