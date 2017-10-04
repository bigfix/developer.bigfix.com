# type: encoding

Specifies an encoding to use when reading a file in a relevance expression.
The `encoding` could be any name that the [International Components for Unicode (ICU)](http://demo.icu-project.org/icu-bin/convexp) can recognize, such as "ISO-8859-1", "Shift_JIS", and "UTF-8". Once created, the `file` objects can be used as regular `file` objects and you can apply any operation applicable to text files. If no encoding is specified, the files are read in the local encoding.

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

Returns a file object with the given name from the client's download folder, which is to be read in the specified encoding.

# download folder of &lt;encoding&gt; : folder

Returns a folder object for the client's download folder. File objects created by deriving the folder object will be read in the specified encoding.

# file &lt;binary_string&gt; of &lt;encoding&gt; : file

This is equivalent to `file <binary_string>` inspector, but this returns a file object which is to be read in the specified encoding.

# file &lt;string&gt; of &lt;encoding&gt; : file

Returns a file object, corresponding to the full pathname provided in &lt;string&gt;, to be read in the specified encoding.

Ensure not to specify any encoding for `file` objects already created in previous steps of the relevance expression. For example, the following expression:

{% qna %}
Q: (file "aaa.txt" of folder "c:\test") of encoding "Windows-1252"
{% endqna %} 

does not work as expected and the specified encoding will be ignored because the file object representing "C:\test\aaa.txt" s created first in the local encoding with the expression enclosed parenthesis, and so the subsequent `encoding` expression makes no sense and is ignored. 
The correct expression to evaluate to read the file "C:\test\aaa.txt" in "Windows-1252" encoding is:

 {% qna %}
 Q: file "aaa.txt" of folder "c:\test" of encoding "Windows-1252"
 {% endqna %} 

**Note:** If the file to open, using the `encoding` object, has a BOM, it will still be opened using the encoding indicating the BOM.

# folder &lt;binary_string&gt; of &lt;encoding&gt; : folder

This is equivalent to folder &lt;binary_string&gt; inspector, but this returns a folder object which is associated with the specified encoding. File objects created by deriving the folder object will be read in the specified encoding.

# folder &lt;string&gt; of &lt;encoding&gt; : folder

Returns a folder object for the name provided in &lt;string&gt;, associated with the specified encoding. File objects created by deriving the folder object will be read in the specified encoding.

# hfs file &lt;string&gt; of &lt;encoding&gt; : file

This is equivalent to `hfs file <string>` inspector, but this returns a file object which is to be read in the specified encoding.

# hfs folder &lt;string&gt; of &lt;encoding&gt; : folder

This is equivalent to `hfs folder <string>` inspector, but this returns a folder object which is associated with the specified encoding. File objects created by deriving the folder object will be read in the specified encoding.

# native file &lt;string&gt; of &lt;encoding&gt; : file

This is equivalent to `native file <string>` inspector, but this returns a file object which is to be read in the specified encoding.

# native folder &lt;string&gt; of &lt;encoding&gt; : folder

This is equivalent to `native folder <string>` inspector, but this returns a folder object which is associated with the specified encoding. File objects created by deriving the folder object will be read in the specified encoding.

# posix file &lt;string&gt; of &lt;encoding&gt; : file

This is equivalent to `posix file <string>` inspector, but this returns a file object which is to be read in the specified encoding.

# posix folder &lt;string&gt; of &lt;encoding&gt; : folder

This is equivalent to `posix folder <string>` inspector, but this returns a folder object which is associated with the specified encoding. File objects created by deriving the folder object will be read in the specified encoding.

# symlink &lt;binary_string&gt; of &lt;encoding&gt; : symlink

This is equivalent to `symlink <binary_string>` inspector, but this returns a symlink object which is associated with the specified encoding. File objects created by deriving the symlink object will be read in the specified encoding.

# symlink &lt;string&gt; of &lt;encoding&gt; : symlink

This is equivalent to `symlink <string>` inspector, but this returns a symlink object which is to be read in the specified encoding. File objects created by deriving the symlink object will be read in the specified encoding.

# x32 file &lt;string&gt; of &lt;encoding&gt; : file

This is equivalent to `x32 file <string>` inspector, but this returns a file object which is to be read in the specified encoding.

# x32 folder &lt;string&gt; of &lt;encoding&gt; : folder

This is equivalent to `x32 folder <string>` inspector, but this returns a folder object which is associated with the specified encoding. File objects created by deriving the folder object will be read in the specified encoding.

# x64 file &lt;string&gt; of &lt;encoding&gt; : file

This is equivalent to `x64 file <string>` inspector, but this returns a file object which is to be read in the specified encoding.

# x64 folder &lt;string&gt; of &lt;encoding&gt; : folder

This is equivalent to `x64 folder <string>` inspector, but this returns a folder object which is associated with the specified encoding. File objects created by deriving the folder object will be read in the specified encoding.
