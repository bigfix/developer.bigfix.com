# type: sqlite column type

A `sqlite column type` represents the SQLite data-type of a column.

# blob of &lt;sqlite column type&gt; : boolean

Returns `True` if the column type is `SQLITE_BLOB`.

# float of &lt;sqlite column type&gt; : boolean

Returns `True` if the column type is `SQLITE_FLOAT`.

# integer of &lt;sqlite column type&gt; : boolean

Returns `True` if the column type is `SQLITE_INTEGER`.

{% qna %}
Q: column types whose (integer of it) of table "Album" of sqlite database of file "chinook.db"
A: AlbumId: SQLITE_INTEGER
A: ArtistId: SQLITE_INTEGER
{% endqna %}

# name of &lt;sqlite column type&gt; : string

Returns the name of the column.

{% qna %}
Q: names of column types of table "Album" of sqlite database of file "chinook.db"
A: AlbumId
A: Title
A: ArtistId
{% endqna %}

# null of &lt;sqlite column type&gt; : boolean

Returns `True` if the column type is `SQLITE_NULL`.

# text of &lt;sqlite column type&gt; : boolean

Returns `True` if the column type is `SQLITE_TEXT`.

{% qna %}
Q: column types whose (text of it) of table "Album" of sqlite database of file "chinook.db"
A: Title: SQLITE_TEXT
{% endqna %}

# type of &lt;sqlite column type&gt; : string

Returns the data-type of the column.

{% qna %}
Q: types of column types of table "Album" of sqlite database of file "chinook.db"
A: SQLITE_INTEGER
A: SQLITE_TEXT
A: SQLITE_INTEGER
{% endqna %}

# &lt;sqlite column type&gt; as string : string

Returns the column as `name: type`.

{% qna %}
Q: column types of table "Album" of sqlite database of file "chinook.db" as string
A: AlbumId: SQLITE_INTEGER
A: Title: SQLITE_TEXT
A: ArtistId: SQLITE_INTEGER
{% endqna %}
