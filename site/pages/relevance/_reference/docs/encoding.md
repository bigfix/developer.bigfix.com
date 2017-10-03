# type: encoding

Specifies an encoding to use when reading a file in a relevance expression.
The `encoding` could be any name that ICU can recognize, such as "ISO-8859-1", "Shift_JIS", and "UTF-8". Once created, the `file` objects can be used as regular `file` objects and you can apply any operation applicable to text files. If no encoding is specified, the files are read in the local encoding.

These are some examples:

{% qna %}
Q: (content of file "c:\aaa\bbb.txt" of encoding "Shift_JIS") contains "うみ" 
{% endqna %}

returns if the word "うみ" is found in the file "c:\aaa\bbb.txt" that is written in Shift_JIS.

{% qna %}
Q: line 3 of file "eee.txt" of folder "/ccc/ddd" of encoding "Windows-1252"
{% endqna %}

returns the third line of the file "/ccc/ddd/eee.log" in Windows-1252.

{% qna %}
Q: key "やま" of section "其之弐" of file "f:\ggg\hhh.ini" of encoding "UTF-8" 
{% endqna %}

returns  Returns the value of the "やま" key in the "其之弐" section of the file "f:\ggg\hhh.ini" that is written in UTF-8.

# download file &lt;string&gt; of &lt;encoding&gt; : file

No documentation exists.

# download folder of &lt;encoding&gt; : folder

No documentation exists.

# file &lt;binary_string&gt; of &lt;encoding&gt; : file

No documentation exists.

# file &lt;string&gt; of &lt;encoding&gt; : file

Opens the specified file in the specified encoding.

Ensure not to specify any encoding for `file` objects already created in previous steps of the relevance expression. For example, in the following expression:

{% qna %}
Q: (file "aaa.txt" of folder "c:\test") of encoding "Windows-1252"
{% endqna %} 

the file object "C:\test\aaa.txt" is set to be read using the local encoding when the expression enclosed parenthesis runs.
Because encoded files cannot be re-encoded, the subsequent request to encode the file in "Windows-1252" is ignored. 
The correct expression to evaluate to read the file "C:\test\aaa.txt" in "Windows-1252" encoding is:

 {% qna %}
 Q: file "aaa.txt" of folder "c:\test" of encoding "Windows-1252"
 {% endqna %} 

**Note:** If the file to open, using the `encoding` object, has a BOM, it will still be opened using the encoding indicating the BOM.

# folder &lt;binary_string&gt; of &lt;encoding&gt; : folder

No documentation exists.

# folder &lt;string&gt; of &lt;encoding&gt; : folder

No documentation exists.

# hfs file &lt;string&gt; of &lt;encoding&gt; : file

No documentation exists.

# hfs folder &lt;string&gt; of &lt;encoding&gt; : folder

No documentation exists.

# native file &lt;string&gt; of &lt;encoding&gt; : file

No documentation exists.

# native folder &lt;string&gt; of &lt;encoding&gt; : folder

No documentation exists.

# posix file &lt;string&gt; of &lt;encoding&gt; : file

No documentation exists.

# posix folder &lt;string&gt; of &lt;encoding&gt; : folder

No documentation exists.

# symlink &lt;binary_string&gt; of &lt;encoding&gt; : symlink

No documentation exists.

# symlink &lt;string&gt; of &lt;encoding&gt; : symlink

No documentation exists.

# x32 file &lt;string&gt; of &lt;encoding&gt; : file

No documentation exists.

# x32 folder &lt;string&gt; of &lt;encoding&gt; : folder

No documentation exists.

# x64 file &lt;string&gt; of &lt;encoding&gt; : file

No documentation exists.

# x64 folder &lt;string&gt; of &lt;encoding&gt; : folder

No documentation exists.
