# Notes



## Keyboard Shortcuts
* Ctrl + % : open terminal

___

## Positionnement

```css
*{
    position: static;
    left: 100px;
    top: 150px;
    bottom:
}
```
* valeur par defaut
* dans l'ordre du document

____


```css
*{
    position:fixed
}
```
* relative to viewport

____

```css
*{
    position:absolute 
}
```
* relative to first positioned ancestor (first non-static)
* viewport if no static ancestor
* > best to set parent to relative

____

```css
.parent{
    position: absolute; 
}
.son{
    position: relative;
    height: 50%;
}
```
* can use %age on relative sons if parent absolute

___
### Remarques sur le scroll

> remove vertical scroll : `overflow-x: hidden`

> hide vertical scroll with a `margin` and a `overflow-x: hidden`

___

```css
.son{
    position: *not static*;
    z-index: 9; /* the highest z-index is placed in front */
}
```

___
## Fonts

Alignment
```css
.son{
    text-align: justify;
}
```

Hyphenate words at end of line.
> * requires proper lang attribute in html
> * currently broken on Chrome
```css
.son{
    hyphens: auto;
}
```

Font Families
List of fonts in preferred order 
> * Roboto <- Google
> * Segoe <- microsoft
> * use IDE suggestions or ask Google or ask Graphic Designer
```css
.son{
    font-family: Roboto, Segoe, sans-serif;
    font-weight: 100 to 900;
    font-weight: bold/thin/black/lighter/bolder; /* each font has different defined keywords */
    font-size: 21px;
    line-height: 1em; /*interline space*/
    letter-spacing: 2px; /*DO NOT USE*/
    font-variant: small-caps;
    text-transform: uppercase;
}
```

___
`<span>` is the semantically neutral inline equivalent to `<div>`
___

## Icons

Use __package managers__ to download libraries
* bower (deprecated)
* __N__ ode __P__ ackage __M__ anager (needed)
* yarn (best for security)

> Never download manually

    Other package managers
    * JAVA : maven, graddle
    * Ruby : Gem
    * JavaScript : NPM
    * PHP : Composer
    * Windows C# : chocolate

Good free icon library (Google/Angular)
https://www.npmjs.com/package/material-design-icons

requires roboto-fontface
https://www.npmjs.com/package/roboto-fontface

Learn to use:
http://google.github.io/material-design-icons/

* Go to https://material.io/tools/icons/?style=baseline
* find your desired icon
* copy-paste the icon name into 
```html
<span class="material-icons">icon-name</span>
```
> certain icons don't work


> In general, less dependencies is best


___
## NPM

`npm init` in root folder
* creates a project
* creates package.json 

To install library
`npm install myAwesomeLibrary --save`

Or equivalent
`npm i myAwesomeLibrary --save`

Libraries are installed in the `node_modules` folder

Read NPM online page for the library to learn how to include to project and use.
Hopefully there's a Getting Started page

___
## Meta data
```html
<meta charset="UTF-8"> <!-- covers most characters -->
<title>Browser Tab Title</title>
<meta name="" content=""/> <!-- generic meta data -->
<meta name="description" content="Simon Balmès' Resume"/> <!-- typically used by search engines -->
<meta name="viewport" content="width=device-width"/>  <!-- Compulsory for mobile phone compatibility  --> 
```
___
## Images

> best not used for textures and decoration
```html
<img src="path" alt="descriptive alternative text"/>
```
> alt is __not optional__

there are `<audio>` and `<video>` tags but you're better off using specialized hosting services, like youtube
they are best for connecting to webcam/mike 

___
## Forms
> * best use form
> * best not omit action. action = page you are sent to
```html
<form action="uri OR empty" method="get OR post">
    <input submit/> <!-- defaults to : -->
    <input type = "text" placeholder = "type text here"/>
    <input type = "number" value="8"/> <!-- value = pre-fill -->
    <input type = "date" required/> 
    <input type = "mail" readonly/>
    <input type = "phone"/>
    <input type = "submit"/> <!-- send form -->
</form>
```
```html
<form action="uri OR empty" method="get OR post">
    <input type="reset"/><!-- reset form button -->
    <input type="submit"/><!--  send to server -->
    <input type="button" id="cmdCalculer" value="CALCULER"/> <!-- value = txt du bouton -->
    <input type="button" id="cmdCalculer" value="CALCULER" onclick="function()"/>
</form>
```
___
___
## XHTML5 guidelines
* `<title>` is compulsory
* xml => there must exist a root tag. -> `<html>`
* xml => all open tags must be closed
* xml => all child tags must be entirely contained in their parent
* xml => attribute values are always inside quotes `attribute = "value"`
* xml => opening and closing tags should be case-indentical
* xml => no spaces in tag names
* xhtml => tags are all lower-case

___
# Javascript
nodejs = server-side javascript

URL = Uniform Resource Locator

php |  asp.net = server-side

    internet is stateless :
    nothing is saved server-side between http requests

`<script>`:
* defaults to javascript
* are executed as they are read on the page
* are best put at the end of the body, to let the page display first
* cannot auto-close, even if src attr is defined

JS uses camel-case notation

`document` represents the current page

`getElementById("myId")` finds the element whose `id` attribute has value "myId"

access element properties simply with `element.property`

`onclick` attribute executes the script in its value
> best used to simply call a function:
```html
<form action="uri OR empty" method="get OR post">
    <input type="button" id="cmdCalculer" value="CALCULER" onclick="function()"/> 
</form>
```

> JS comments use Java syntax `// ...` or `/* ... */`

> best practise declares all variables at the beginning of a script

> * un-initialised variables have value `undefined` and type `"undefined"`
> * `null` represents an undefined `object` it has type `object`

* declarations are executed before the rest of the script.
* non-anonymous functions can be used even if they are declared later in the page


```javascript
element.style.display="none"; //removes element from display. To re-show:
element.style.display="block"; // or "flex" or "inline" or "inline-block"
element.style.visibility="hidden"; //hides element, but it still takes place
element.style.visibility="visible";
```

___
# Homework

* __http method__
* __CRUD__
* __Rest__
* __Restfull__
* __API__
* viewport
* angular and mobile
* xhtml
* 
