---
title: Introduction to Relevance language
---

The Relevance language forms the basis for most Bigfix content. It can be found in Computer Properties, and in Fixlets and Tasks. Computer Properties are just evaluations of a Relevance query. Whether or not Fixlet messages or Tasks appear relevant in the Bigfix Console is dictated by Relevance clauses, which are written in the BigFix Relevance Language. A Fixlet message may contain many relevance clauses, all of which must return True for it to become "relevant" for a certain computer. An expression will only lead to a Fixlet message becoming relevant if it successfully evaluates to True.

This quick tutorial will introduce the most common Relevance features. Readers can use QNA program or the embedded online Relevance evaluator to practice writing Relevance queries. The tutorial also guides the reader to navigate through other resources found under this website. After completing the tutorial, the reader would be able to read and write common Relevance queries, and make use of available resources to learn more advanced features.   

## Object Types

The Relevance Language is built upon a multitude of objects and their various properties. There are many types of objects (strings, integers, registry objects, versions, etc.), but sometimes it 
can be difficult to figure out which object type you have and which you need.  It is useful to think of the Relevance Language in terms of objects and properties.  Most queries are properties of 
an object that produce another object.

The [Reference section](/relevance/reference/) lists down all available Relevance object types. Let's take {{'environment variable' | linkType}} for our example. As you can see under {{'environment variable' | linkType}} reference page, there are three sections: Creation, Properties, and Casts. Some other object types might have an additional section called "Operators". The Creation section tells you all the ways you can produce an "environment variable" object. For example, you can form a query of the form:

````
variable <string> of <environment>
````

where the <{{'string' | linkType}}> is the name of the environment variable, and <{{'environment' | linkType}}> is the object corresponding to the environment. The following relevance would give you environment variable "PATH":

{% qna %}
Q: variable "PATH" of environment
A: PATH = /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
T: environment variable
{% endqna %}

You could also get a list of all your environment variables by typing:

{% qna %}
Q: variables of environment
A: HOME = /root
A: HOSTNAME = cdd0565da555
A: NODE_ENV = production
A: PATH = /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
A: PORT = 5002
T: environment variable
{% endqna %}

If you were unsure how to create an {{'environment' | linkType}} object, you could look up the reference page for {{'environment' | linkType}} object, and look at the Creation section. As it turns out, you create an {{'environment' | linkType}} object by just writing "environment".

Notice the difference in plurality of `variable` between the two relevance clauses. You use singular form when expecting exactly one result, and use plural form otherwise. See the guide on [Singular and Plural](/guide/basics/singular-and-plural.html/) for more details.

From here you could query the various properties of the `environment variable` object. In order to return the name or value of the environment variable, you would use the following commands respectively:

{% qna %}
Q: name of variable "PATH" of environment
A: PATH
T: string
{% endqna %}

{% qna %}
Q: value of variable "PATH" of environment
A: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
T: string
{% endqna %}

Some object types are converible to other object types by using the keyword `as`. This conversion is called Casting. For instance, you can cast an integer to string as follows:

{% evaluator %}
500 as string
{% endevaluator %}

Evaluate the query and notice that the returned type is "string" instead of "integer". You can find under a reference page's "Casts" section the list of data types to which an object can be casted.

Tip: To quickly look up all properties, you can use [Inspector Search](/relevance/search/).

#### Practice with QNA

Using the referene pages of {{'rpmdatabase' | linkType}} and its properties, try writing a relevance that returns the version of rpm package "libxml2".

{% evaluator %}

{% endevaluator %}

{% collapse "Show Answers" %}
versions of packages "libxml2" of rpm
{% endcollapse %}

Tip: You can also press Ctrl-Enter while typing the relevance to get it evaluated.

Note: Many data types do not have a representable text format. They would give your an error message about unrepresentable object, or operator "string" not defined. The relevance is still evaluated successfully in this case.

## Relevance in Fixlet

In Fixlet messages, Relevance expressions are used to determine whether the Fixlet is applicable to an endpoint. Thus the Relevance must return a Boolean value (either True or False). Although there are a few inspectors that return a Boolean value, there are two main ways to obtain a Boolean value: existence and comparison. You will use one of these tools in most relevance clauses.

### Existence

In its most basic form, a relevance expression can check for the existence of an object on the users' computer. Let's say that you to write a Fixlet that would be relevant on all computers with "hosts" file located at the "/etc" folder. The following would be the relevance statement.

{% qna %}
Q: exists file "/etc/hosts"
A: True
T: boolean
{% endqna %}

In this case file "/etc/hosts" defines a {{'file' | linkType}} object. The result of the `exists` operator is a Boolean value. In this case, it 
would return True if the file exists or False if it doesn't.  Therefore, a Fixlet message with the  example relevance clause would cause all computers with the file "/etc/hosts" to report as relevant. You can also check for a folder using similar syntax: 

{% qna %}
Q: exists folder "/var/tmp"
A: True
T: boolean
{% endqna %}

The guide page on [Exists](/relevance/guide/basics/exists.html) keyword provides more usage examples.

#### Practice with QNA

Write a Relevance expression that returns True when there exist one or more files under "/var/log" folder.

{% evaluator %}

{% endevaluator %}

{% collapse "Show Answers" %}
exists files of folder "/var/log"
{% endcollapse %}

### Comparison

The second basic form of a Relevance clause involves the comparison of two expressions. Here's an example of this form using an equal sign as the comparator:

{% qna %}
Q: number of processors = 1
A: True
T: boolean
{% endqna %}

The result is True only if both expressions are equal to each other, and False otherwise. Different object types have different comparison operators. In the above example, we used "equal" sign to compare an integer object to another integer. You can find the list of comparision operators for each object type under the "Operators" section of its reference page. For example, reference page for {{'version' | linkType}} shows that you can perform the following comparisions between a version object and another version object, or between a version object and a string: `<`, `<=`, `=`, `>=`, `>`.

#### Practice with QNA

Modify the previous relevance to compare the "libxml2" rpm version to "2.9.1". Your relevance should return True if the rpm version is greater than or equal to "2.9.1".

{% evaluator %}

{% endevaluator %}

{% collapse "Show Answers" %}
(version of package "libxml2" of rpm) >= "2.9.1"
{% endcollapse %}

## Advanced Relevance syntax

Previous sections have provided you with the basic Relevance langauge features and resources to explore all available Relevance object types. This section will introduce more advanced syntax to help you understand full capablity of Relevance langauge.

### Whose/It – Filtering a list

From previous examples, we can retrieve all files of a folder, or a file by its file path. But we couldn't select files with a certain characteristic. To achieve this, you will need to use special syntax built into the Relevance Language using the keywords `whose` and `it`. First, let’s start with a general list:

{% evaluator %}
files of folder "/etc"
{% endevaluator %}

This query, of course, outputs a list of all the files in "/etc" folder. Now say that instead of all the files, you just wanted files whose filename ends with ".conf". That's where 
the `whose` clause comes in:

{% evaluator %}
files whose (name of it ends with ".conf") of folder "/etc"
{% endevaluator %}

This clause iterates through all the files in the folder and only returns the ones for which the `whose` clause returns `True`. In this example, `it` refers to each of files in  
"/etc" folder. If you are wondering how `ends with` is used, check out the reference page for {{'string' | linkType}}. It turns out that `ends with` is also an operator, similar to `>=` in previous example.

You can learn more about the `whose` clause in this [guide page](/relevance/guide/basics/whose.html).

#### Practice with QNA

From previous exercise, one way to check for the condition on the rpm package version is `(version of package "libxml2" of rpm) >= "2.9.1"`. However, this query assumes that the rpm package "libxml" always exists under the system. In fact, the query would return Error if the package doesn't exist. Rewrite this query with the help of `exists` keyword and `whose` clause so that it would return `True` when there exists the package "libxml2" with version greater than or equal to "2.9.1", and `False` otherwise (the package doesn't exist, or its version doesn't satisfy the requirement).

{% evaluator %}

{% endevaluator %}

{% collapse "Show Answers" %}
exists packages "libxml2" whose (version of it >= "2.9.1") of rpm
{% endcollapse %}

### Using "it" without a "whose" 

The keyword `it` can also be used outside of a `whose` clause to refer to each single element of previous object. For instance,

{% qna %}
Q: it of files of folder "/etc"
{% endqna %}

is the same as

{% qna %}
Q: files of folder "/etc"
{% endqna %}

A common use of `it` is to retrieve multiple properties of an object. The following Relevance returns file name and size of the files:

{% evaluator %}
(name of it, size of it) of files of folder "/etc"
{% endevaluator %}

This query also makes use of a new object type called "tuple". A tuple is a compound type composed of two or more other types. Evaluate the relevance above and notice its returned type. For more knowledge on tuple, read its [Guide](/relevance/guide/basics/tuples.html).

### If/Then/Else

Relevance langauge also supports [If/Then/Else](/relevance/guide/basics/if-then-else.html) clause to return different objects depending on whether a condition evaluates to `True` or `False`. The general syntax is:

````
if <conditional-expression> then <expression1> else <expression2>
````

Both `<expression1>` and `<expression2>` must have the same type, and `<conditional-expression>` must be a singular boolean. Check out [If/Then/Else](/relevance/guide/basics/if-then-else.html) guide for more details. 

The following query returns a string "Yes" if there exists the rpm package "libxml2", and "No" otherwise:

{% qna %}
Q: if (exists packages "libxml2" of rpm) then "Yes" else "No"
A: Yes
{% endqna %}

#### Practice with QNA

Modify the previous query to return the package version when it's available, or "No package" otherwise.

{% evaluator %}

{% endevaluator %}

{% collapse "Show Answers" %}
if (exists packages "libxml2" of rpm) then (version of it as string) of packages "libxml2" of rpm else "No package"
{% endcollapse %}

Hint: You need to use type casting to have the same object type for both `<expression1>` and `<expression2>`.


Congratulations! You have practiced with most of Relevance language features. 

To learn more about each feature, read their detailed [Guides](/relevance/guide/). To further explore Relevance object types, make use of [Reference](/reference/), [Inspector Search](/relevance/search/), and [Online Evaluator](/relevance/evaluate/). If you encounter errors, try to look up this [Errors](/relevance/guide/basics/errors.html) guide. For other questions, join our [Bigfix forum](https://forum.bigfix.com) and post your questions under [Content Authoring](https://forum.bigfix.com/c/content-authoring) category.