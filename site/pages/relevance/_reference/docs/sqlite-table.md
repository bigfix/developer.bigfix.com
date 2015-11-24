# type: sqlite table

The `sqlite table` type represents a table in a [SQLite](https://sqlite.org/) database.

# column type &lt;integer&gt; of &lt;sqlite table&gt; : sqlite column type

Returns the type of the nth column of the table. The first column is column 0.

{% qna %}
Q: column type 0 of table "Album" of sqlite database of file "chinook.db"
A: AlbumId: SQLITE_INTEGER
{% endqna %}

# column type &lt;string&gt; of &lt;sqlite table&gt; : sqlite column type

Returns the type of the column with the specified name.

{% qna %}
Q: column type "Title" of table "Album" of sqlite database of file "chinook.db"
A: Title: SQLITE_TEXT
{% endqna %}

# column type of &lt;sqlite table&gt; : sqlite column type

Returns the types of each column in the table.

{% qna %}
Q: column types of table "Album" of sqlite database of file "chinook.db"
A: AlbumId: SQLITE_INTEGER
A: Title: SQLITE_TEXT
A: ArtistId: SQLITE_INTEGER
{% endqna %}

# index of &lt;sqlite table&gt; : string

Returns the names of the indexes on the table. This is determined by using:

```sql
SELECT name FROM sqlite_master WHERE type = 'index' AND tbl_name = ?
```

For example:

{% qna %}
Q: indices of table "Album" of sqlite database of file "chinook.db"
A: IPK_Album
A: IFK_AlbumArtistId
{% endqna %}

# name of &lt;sqlite table&gt; : string

Returns the name of the table.

{% qna %}
Q: names of tables of sqlite database of file "chinook.db"
A: Album
A: Artist
A: Customer
A: Employee
A: Genre
A: Invoice
A: InvoiceLine
A: MediaType
A: Playlist
A: PlaylistTrack
A: Track
{% endqna %}

# schema of &lt;sqlite table&gt; : string

Returns the schema of the table. This is determined by using:

```sql
SELECT sql FROM sqlite_master WHERE type = 'table' AND name = ?
```

For example:

{% qna %}
Q: schema of table "Album" of sqlite database of file "chinook.db"
A: CREATE TABLE [Album](    [AlbumId] INTEGER  NOT NULL,    [Title] NVARCHAR(160)  NOT NULL,    [ArtistId] INTEGER  NOT NULL,    CONSTRAINT [PK_Album] PRIMARY KEY  ([AlbumId]),    FOREIGN KEY ([ArtistId]) REFERENCES [Artist] ([ArtistId]) ON DELETE NO ACTION ON UPDATE NO ACTION)
{% endqna %}

# &lt;sqlite table&gt; as string : string

Returns the name of the table.

{% qna %}
Q: tables of sqlite database of file "chinook.db"
A: Album
A: Artist
A: Customer
A: Employee
A: Genre
A: Invoice
A: InvoiceLine
A: MediaType
A: Playlist
A: PlaylistTrack
A: Track
{% endqna %}
