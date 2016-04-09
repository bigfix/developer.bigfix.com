# type: sqlite database

The `sqlite database` type represents a [SQLite](https://sqlite.org/) database.

# encoding of &lt;sqlite database&gt; : string

Returns the encoding of the database. This is determined using [PRAGMA encoding](https://www.sqlite.org/pragma.html#pragma_encoding). One of `UTF-8`, `UTF-16le` (little-endian UTF-16 encoding) or `UTF-16be` (big-endian UTF-16 encoding).

{% qna %}
Q: encoding of sqlite database of file "test.db"
A: UTF-8
{% endqna %}

# statement &lt;string&gt; of &lt;sqlite database&gt; : sqlite statement

Called on a database object and allows for user to type in SQL syntax. This property will error if 1. a syntax error exists, or 2. if the SQL statement modifies the database in anyway. This includes some PRAGMA statments as well. If both are avoided, SQLite has compiled the SQL query into byte code and is ready to display the output. This property does not have a display format; on a success, "This expression evaluates to an unrepresentable object of type sqlite statement" will be shown.

## SQL and SQLite Syntax

SQLite understands most of the standard SQL language. However it does omit some features as well as adding a few features of its owen. Fore more details, visit the [SQLite documentation](http://www.sqlite.org/lang.html) on this subject.

{% qna %}
Q: rows of statement "select * from Artist where ArtistId = 147" of sqlite database of file "chinook.db"
A: 147,Battlestar Galactica
{% endqna %}

# table &lt;string&gt; of &lt;sqlite database&gt; : sqlite table

Returns the table with the specified name in the sqlite database. Errors if the table does not exist.

{% qna %}
Q: names of column types of table "Artist" of sqlite database of file "chinook.db"
A: ArtistId
A: Name
{% endqna %}

# table of &lt;sqlite database&gt; : sqlite table

Returns all tables associated with the database file.

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
