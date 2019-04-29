## Bootstrap
is a CSS framework

responsive web design <- for different types of screen resolutions

screen is divided into 12ths

all sorts of pre-defined classes

```html
<head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
```
* first line is necessary for responsive
* initial-scale=1 => full viewport
* other lines import bootstrap from CDNs


___
## XML

* eXtensible => can create new tags
* 


___
## Jquery
```javascript
$(document).ready(function(){
    $("p").click(function(){
        
    })
});
```
Creating elements in jQuery
```javascript
$(/* parent selector */).append($("<a></a>").html())
});
```

___
## Persistance

_(def) persistance_ =d  enregistrer

SGBD syst gest base donnees = DBMS data base managt syst

SQL structured query language

modèle realtionnel =d basé sur la théorie des ensembles

sous-catégories de SQL
* DML data manip language (fr LMD)
    * CRUD(S) = op de base 
        * Create
        * Read/Retrieve
        * Update
        * Delete
        * (Search)


```sql
SELECT DISTINCT `col1`, col2 
FROM table1
WHERE condition
ORDER BY col3
LIMIT 2 --mySQL only

SELeCt MIN(col1) AS minCol1
FROM table1


INSERT INTO table_name (column1, column2, column3, ...) 
VALUES (value1, value2, value3, ...); 
-- can remove col list if all values are specified and in the table's default order

UPDATE table1
SET col1 = val1, col2 = val2
WHERE condition


-- In SQL servers (everything is different in MS Access)
SELECT TOP col1, col2
FROM table1
WHERE col3 LIKE '_a%[cd][^ef][a-z]'
/*
_ specifies any single character
% specifies any number of any characters (0 included)
[cd] specifies any single c or d
[^ef] specifies any single character excluding e and f
[a-z] specifies any character between a and z
*/

SELECT TOP col1, col2
FROM table1
WHERE col3
IN (SELECT col4 FROM table2 WHERE condition)

SELECT COUNT(col1), SUM(col2), MIN(col3), AVG(col4) -- if you don't use an aggregation function, the first value in each group is used
FROM table1
GROUP BY col2

SELECT * FROM table1,table2 -- produit cartésien des 2 tables


--Intersection
SELECT table1.col1, table2.col2 FROM table1 INNER JOIN table2 ON table1.col2 = table2.col2
-- does the same as:
SELECT table1.col1, table2.col2 FROM table1, table2 WHERE table1.col2 = table2.col2
-- inner join is preferred for clarity.
-- WHERE is best used only to restrict results.
-- joining tables is best left to JOIN statements

-- LEFT JOIN does the same as INNER JOIN but also adds 1 entry for each table1 entry that doesn't fit the ON condition
SELECT table1.col1, table2.col2 FROM table1 LEFT JOIN table2 ON table1.col2 = table2.col2

-- LEFT JOIN does the same as INNER JOIN but also adds 1 entry for each table2 entry that doesn't fit the ON condition
SELECT table1.col1, table2.col2 FROM table1 LEFT JOIN table2 ON table1.col2 = table2.col2

-- FULL JOIN does the same as INNER JOIN but also adds 1 entry for each table1 and table2 entry that doesn't fit the ON condition
SELECT table1.col1, table2.col2 FROM table1 LEFT JOIN table2 ON table1.col2 = table2.col2
```        

    WHERE operators:
    = equal (not ==)
    > and >=
    < and <=
    <> (preferred over != not always supported)
    IN (val1, val2, ...)
    BETWEEN lowVal AND highVal


index pour accélerer les traitements, peut-être une combinaison de plusieurs champs

clé primaire = index unique

clés candidates = 

phpmyadmin <- mySQL databases with an online gui (?)

phpmyadmin > try > demo

___
## Homework

* fiches produits sur chaque techno
* présentation par groupes sur une techno
    * avec une démo
    * présentation tous les 15 jours
* themes
    1. _html css (frameworks)_
    2. js jquery (frameworks)
    3. java (général)
    4. sql, jdbc, jpa, frameworks persistance (hibernate etc.)

* plan de cours
    * au format xml -> w3schools
    * intitulé
    * niveau requis
    * objectifs
    * public concerné
    * plan

* agilité et scrum

* CDN