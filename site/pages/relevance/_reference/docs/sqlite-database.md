# type: sqlite database

The `sqlite database` type represents a [SQLite](https://sqlite.org/) database.

# encoding of &lt;sqlite database&gt; : string

Returns the encoding of the database. This is determined using [PRAGMA encoding](https://www.sqlite.org/pragma.html#pragma_encoding).

{% qna %}
Q: encoding of sqlite database of file "test.db"
A: UTF-8
{% endqna %}

# statement &lt;string&gt; of &lt;sqlite database&gt; : sqlite statement

Runs a select query on the database.

{% qna %}
Q: rows of statement "select * from Artist where ArtistId = 147" of sqlite database of file "chinook.db"
A: 147,Battlestar Galactica
{% endqna %}

# table &lt;string&gt; of &lt;sqlite database&gt; : sqlite table

Returns the table with the specified name in the sqlite database.

{% qna %}
Q: names of column types of table "Artist" of sqlite database of file "chinook.db"
A: ArtistId
A: Name
{% endqna %}

# table of &lt;sqlite database&gt; : sqlite table

Returns all tables in the sqlite database.

{% qna %}
Q: tables whose (name of it starts with "A") of sqlite database of file "chinook.db"
A: Album
A: Artist
{% endqna %}

# &lt;sqlite database&gt; as string : string

Returns the name of the database file.

{% qna %}
Q: sqlite database of file "chinook.db"
A: sqlite database: chinook.db
{% endqna %}
