# type: sqlite column

The `sqlite column` type represents one column in the result of a `select` query.

# name of &lt;sqlite column&gt; : string

Returns the column name.

{% qna %}
Q: names of columns 0 of rows of statement "select ArtistId, Name from Artist limit 5" of sqlite database of file "chinook.db"
A: ArtistId
A: ArtistId
A: ArtistId
A: ArtistId
A: ArtistId
{% endqna %}

# type of &lt;sqlite column&gt; : sqlite column type

Returns the column type.

{% qna %}
Q: types of columns 0 of rows of statement "select ArtistId, Name from Artist limit 5" of sqlite database of file "chinook.db"
A: ArtistId: SQLITE_INTEGER
A: ArtistId: SQLITE_INTEGER
A: ArtistId: SQLITE_INTEGER
A: ArtistId: SQLITE_INTEGER
A: ArtistId: SQLITE_INTEGER
{% endqna %}

# &lt;sqlite column&gt; as string : string

Returns the value of the column as a string.

{% qna %}
Q: columns 0 of rows of statement "select ArtistId, Name from Artist limit 5" of sqlite database of file "chinook.db" as string
A: 1
A: 2
A: 3
A: 4
A: 5
{% endqna %}
