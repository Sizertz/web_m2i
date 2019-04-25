# XML


```xml
<ListeDesContacts> <!-- exists single root element, nothing outside this -->
<contact>

</contact><!-- total inclusion => cannot close outside ListeDesContacts -->
</ListeDesContacts> <!-- case sensitive -->
```

```xml
<contact Nom="Balmes" Prenom="Simon"> <!-- attribute values always in ""-->
    <email>a.f@gmail.com</email> <!-- duplicate properties are best made into child tags -->
    <email>a.g@numericable.fr</email> <!-- unique properties  -->
</contact> <!-- all opened tags must be closed -->

```
___
DTD = doctype definition

defined by `<!DOCTYPE>`

internal or external

___
XSD = schema

is XML document, describes structure of another XML

___
# Javascript

## arrays

```javascript
let pays=['FR','AU']; // let is local. var is global
// equivalent to 
/* let */ pays = new Array('FR','AU');
pays.push('ALG'); // add last
pays.unshift("CH"); // add first
pays[3] = "AL"; // affectation
pays.length; // equals 4
for(i=0;i<pays.length;i++){ // iterate over array with index
    console.log(pays[i]);
}
pays.foreach(function(element, position){ // iterate with for each
    console.log(element, position);
}); 
let firstPays = pays.shift(); // removes + returns first element > "CH"
let lastPays = pays.pop(); // removes and returns last element > "AL"
let pos = pays.indexOf("AL"); // -1 if argument doesn't exist in array || index of argument in array

```


___
## HOMEWORK
* js let
