# type: sqlite row

The `sqlite row` type represents one row in the output of a `select` query.

# column &lt;integer&gt; of &lt;sqlite row&gt; : sqlite column

Returns the values of the nth column of a select query. The first column is 0.

{% qna %}
Q: columns 1 of rows of statement "select ArtistId, Name from Artist limit 5" of sqlite database of file "chinook.db"
A: AC/DC
A: Accept
A: Aerosmith
A: Alanis Morissette
A: Alice In Chains
{% endqna %}

# column &lt;string&gt; of &lt;sqlite row&gt; : sqlite column

Returns the values of the named column of the select query.

{% qna %}
Q: columns "ArtistId" of rows of statement "select ArtistId, Name from Artist limit 5" of sqlite database of file "chinook.db"
A: 1
A: 2
A: 3
A: 4
A: 5
{% endqna %}

# &lt;sqlite row&gt; as string : string

Write the columns in the row as a [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) string.

{% qna %}
Q: rows of statement "select * from Artist limit 5" of sqlite database of file "chinook.db" as string
A: 1,AC/DC
A: 2,Accept
A: 3,Aerosmith
A: 4,Alanis Morissette
A: 5,Alice In Chains
{% endqna %}
