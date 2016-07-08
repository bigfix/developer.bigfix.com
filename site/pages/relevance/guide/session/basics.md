---
title: Basic concepts
---

The Session Inspectors allow you to collect information from the BigFix database and use it to develop interactive displays, 
Dashboards, Wizards and powerful custom reports.

The Session Inspectors can be run mainly in two environments: the Console and the Web Reports. 
Use the following global boolean properties to know whether your Relevance expressions are being evaluated in the Console or Web Reports:

```
in console context
in Web Reports context
```

These Inspectors will return `TRUE` or `FALSE`, depending on which environment is currently active.

---

There are three main categories of Session Inspectors: 
- **[Data-store Inspectors](./datastoreinspectors.html)**, which process items in the database. They start with key *bes*; 
- **[Set Inspectors](./setinspectors.html)**, that allow you to treat lists of objects as mathematical sets;
- **[HTML Inspectors](./htmlinspectors.html)**, that help you to format your presentations using hypertext markup.

Click on the links to know more about each category.
