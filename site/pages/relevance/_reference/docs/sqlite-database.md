# type: sqlite database

The `sqlite database` type represents a [SQLite](https://sqlite.org/) database.

# encoding of &lt;sqlite database&gt; : string

Returns the encoding of the database. This is determined using [PRAGMA encoding](https://www.sqlite.org/pragma.html#pragma_encoding). 
The returned string can be either `UTF-8`, `UTF-16le` (little-endian UTF-16 encoding) or `UTF-16be` (big-endian UTF-16 encoding).

{% qna %}
Q: encoding of sqlite database of file "test.db"
A: UTF-8
{% endqna %}

# statement &lt;string&gt; of &lt;sqlite database&gt; : sqlite statement

Returns a sqlite statement object that can be used to retrieve the results. This property will return error if:
 - A syntax error exists, or
 - The SQL statement modifies the database in any way. This includes some PRAGMA statments as well. 

If successful, SQLite compiles the SQL statement into byte code and is ready to retrieve the results. 
This property does not have a display format. "This expression evaluates to an unrepresentable object of type sqlite statement" will be shown instead.

SQLite understands most of the standard SQL language. However it does omit some features as well as adding a few features of its own. 
For more details, visit the [SQLite documentation](http://www.sqlite.org/lang.html) on this subject.

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
