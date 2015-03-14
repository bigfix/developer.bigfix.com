select Markup, 0 as Priority from PROPERTIES where 
  SingularPhrase = $queryEqual or
  PluralPhrase = $queryEqual
union
select Markup, 1 as Priority from CASTS where 
  Phrase = $queryEqual
union
select Markup, 2 as Priority from PROPERTIES where 
  IndexType = $queryEqual or
  DirectObjectType = $queryEqual or
  ResultType = $queryEqual
union
select Markup, 3 as Priority from CASTS where 
  ArgType = $queryEqual or
  ResultType = $queryEqual
union
select Markup, 4 as Priority from PROPERTIES where 
  SingularPhrase like $queryLike or
  PluralPhrase like $queryLike
union
select Markup, 5 as Priority from CASTS where 
  Phrase like $queryLike
union
select Markup, 6 as Priority from PROPERTIES where 
  IndexType like $queryLike or
  DirectObjectType like $queryLike or
  ResultType like $queryLike
union
select Markup, 7 as Priority from CASTS where 
  ArgType like $queryLike or
  ResultType like $queryLike
order by Priority
