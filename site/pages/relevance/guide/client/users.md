---
title: User Inspectors
---

Use these Inspectors to return information about local and current user accounts, including names, logins and passwords and whether they are logged in or not. 

As of BigFix version 9.5, these are the currently available Inspectors for users: 

- [**active directory local user**](./../../reference/active-directory-local-user.html) to query Active Directory local users. They include the distinguished name and groups.
- [**user**](./../../reference/user.html) to list properties of all users, whether they are logged in or not.
- [**logged on user**](./../../reference/logged-on-user.html) to list information about the currently logged-on user on that specific Windows or Macintosh system. With the advent of Terminal Services and Fast User Switching, these inspectors are designed to iterate over all logged on users. 

---

Use the Introspectors to see all the properties of these objects that you can query, for example:

{% qna %}
Q: properties of type "user"
A: logged on user of <user>: logged on user
A: sid of <user>: security identifier
A: name of <user>: string
A: active directory user of <user>: active directory local user
A: password age of <user>: time interval
A: guest privilege of <user>: boolean
A: user privilege of <user>: boolean
A: admin privilege of <user>: boolean
A: home directory of <user>: string
A: home directory folder of <user>: folder
A. ......
A: ....
{% endqna %}

or to filter for specific properties satisfying a criteria, for example:

{% qna %}
Q: properties whose (it as string contains "password") of type "user"
A: password age of <user>: time interval
A: no password required flag of <user>: boolean
A: password change disabled flag of <user>: boolean
A: password expiration disabled flag of <user>: boolean
A: bad password count of <user>: integer
A: password expired of <user>: boolean
{% endqna %}

----

Use the Inspectors Search to get additional information about the Inspectors and their properties. For example, in the Search field enter **user** to get to list and the details of its creation methods and properties.

{% note %}
Some queries about **logged on user** might require additional authorizations to run within the Fixlet Debugger. If you get the following error xxx ensure to: 
- Run the query on a system where the BigFix agent is installed.
- Select Debug -> Evaluate using -> Local Client Evaluator in the Fixlet Debugger tool, before evaluating the query.
{% endnote %}





