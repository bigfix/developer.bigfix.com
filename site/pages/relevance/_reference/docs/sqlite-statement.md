# type: sqlite statement

The `sqlite statement` type represents a `select` query on a [SQLite](https://sqlite.org/) database.

# row of &lt;sqlite statement&gt; : sqlite row

Returns the result of the select query. The rows are written as a list of [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) strings. 
Decimal numbers are set to display 3 decimal places. Due to the difficulty in displaying blobs, in which one cell could be hundreds of lines, if a cell in a table is a `BLOB` type, then "Blob" is displayed. Likewise, if a cell in a table is `NULL`, then "NULL" is displayed.

{% qna %}
Q: rows of statement "select * from Artist limit 5" of sqlite database of file "chinook.db"
A: 1,AC/DC
A: 2,Accept
A: 3,Aerosmith
A: 4,Alanis Morissette
A: 5,Alice In Chains
{% endqna %}
