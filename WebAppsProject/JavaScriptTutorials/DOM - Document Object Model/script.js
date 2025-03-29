/* Document Object Model DOM: is a standard to access & share documents
or websites over the internet. it represents how a particular document is structured & also assist programming languages 
like javaScript and other programming langauges to understand and moditfy a web sites.
HTML DOM defines how a HTML page is structured, how it can be modifies, how the properties can be modified,
How styles can be added in simple terms HTML DOM is a tree of HTML elements 
that are defined while designing a HTML page theerefore we must follow certain rules to define the HTML page.
DOM is not a langauge but more of a standard that represents a document over the web.In
Modern web design frameworks (React, Angular) contain a virtual DOM and a syntax called JSX which ties 
down the HTML & javaScript together without you using thje DOM and is used to build out the HTML for you. */


/* Access and manipulate existing elements: first step is to select elements 
 there are many ways to select an element:
 1) find a HTML element by ID:
 this is the simplest and most efficient way to find an element
 We can asign some ID to an element and then select it like so in the console:
our HTML has an input of ID element-below-input, copy that ID and in the conole
 create a constant element-below-input: 

 const el = document(the whole HTML website).getElementById('element-below-input');

 console.log(el);


2) TagName: to manipulate all elements of a particular kind 
by accessing the elements by tag name.

document.getElementsByTagName('h1')

3) finding elements by className: class names are assigned to elements to 
style them uniqeuly. We can access the elements that only have the test class.

document.getElementsByClassName('test');

    <h1 class="test">Test</h1>
    <h1 class="test">Test1</h1>
    <h1>Test2</h1>

4) find elements with CSS selecters: combines multiple classes,
ID'd, TagsNames etc.... to actualy select a particular element

document.querySelectorAll('h2.test');

    <h1 class="test">Test</h1>
    <h2 class="test">Test1</h2>
    <h2 class="test">Test2</h2>
    */

/*Element properties and Methods: HTML elements can have 
different attributres asigned to them like ID's,classes or types.
there are standard attributes for different elements, when a 
browser identifes a standard attribute a coresponding DOM property
is created & assigned to that element. Some attributes are 
applicable to all elements while othere are applicable to certain 
elements only. for example ID & classes are aplicable for all elements.
while type elements are applicable to input and button elements only.
if you assign type to a  div and try to access it, it will be undefined.

one of the most popular properties is a class list:

now try to access the class list:
    document.querySelector("#heading");

    now stor it in a variable

    const el = document.querySelector("#heading");

   now we have access to that element by typing el return

   now lets used the class list tp get access to all the classes:

   el.classList

can also target the class names property top get
get all the class names it has.

el.className

    <h1 class="test abc test1" id="heading">Test</h1>
    <h2 class="test">Test1</h2>
    <h2 class="test">Test2</h2>
    <script src="script.js"></script>
el.id

el.innerHTML

most popular methods:

add a button and target that button 
const button = document.querySelector('button');
inspect the element :

button

we can add an eventListener to the button which excepts two things:
 type = click we will need a call back function on 
 what will happen when we click that button

 button.addEventListener('click', () => { alert(' you clicked on the button')});

we added the eventListener on the buitton so that when you click 
on the buitton you get that stupid message.

button.getBoundingClientRect();: returns a function : will return information
of an element erlated to a browser such as height width etc ....

    <h1 class="test abc test1" id="heading">Test</h1>
    <h2 class="test">Test1</h2>
    <h2 class="test">Test2</h2>
    <button type ="button">submit</button>
    <script src="script.js"></script>
has attribiute: check whether a elemnt has a attribute type or not

button.hasAttribute('type');

if false add type in element:

to remove an attribute 

button.removeAttribute('type');*/

/* Working with classes: 
We need to select elements with a certain class 
using the getElementsByClassName.


<title>Document</title>
    <style>
        .menu-item {
            background-color: black;
            color: white
        }
        .menu-item.active {
            background-color: white;
            color: black;
        }
    </style>
</head>
<body>

    <ui>
        <li onclick="menuClicked(this)" class="menu-item">Menu1</li>
        <li onclick="menuClicked(this)" class="menu-item active">Menu2</li>
        <li onclick="menuClicked(this)" class="menu-item">Menu3</li>
        <li onclick="menuClicked(this)" class="menu-item">Menu4</li>
    </ui>
*/

// const manuClicked = (currEl) => {
//     const manuItem =
// document.getElementsByClassName('menu-item');

//     for(let i = 0; i < menuItems.lenght; i++){
//         menuItems[i].classList.remove('active');
//     }

//     currEl.taget.classList.add('active');
// }



/* creating, traversingh and removing  nodes:
creating elements 

to create elements in the console we can use the following syntax:

document.createElement("hi");

the above method creates the element but does not add it to the DOM 

to add it to the DOM we will use the append child method:

const heading = document.createElement('h1');

now the heading is stored in a variable:

now we need to target the body like so :

const body = document.querySelector('body');

now we can use the body variable to append a child :

body.appendChild(heading);

now we have an empty <h1><h: 
to add tetx to the web page :

heading.innerText = 'wasup!';

how to traverse different elements on a page :
 taget all subjects :

 const subjects = 
document.querySelector('.subjects');
undefined
subjects
<ui class=​"subjects">​…​</ui>​
 we accessed the whole thing not individual things.

 subjects.firstElementChild
 <li>Maths</li>

subjects.lastElementChild
<li>​…​</li>​::marker​"English"</li>​

const favSubject = document.querySelector('.fav-subject');

favSubject.previousElementSibling
<li>​…​</li>​::marker​"Maths"</li>​

favSubject.nextElementSibling
<li>​::marker​"English"</li>​

favSubject.parentElement
<ui class=​"subjects">​<li>​…​</li>​<li class=​"fav-subject">​…​</li>​<li>​…​</li>​</ui>​

We have similar methods to traverse with nodes also

ele.childNodes
ele.firstChild
ele.lastChild
ele.previousSibling
ele.nextSibling
ele.parentNode


How to remove HTML elements:

    favSubject.remove();








<body>
        <ui class="subjects">
            <li>Maths</li>
            <li class="fav-subject">Science</li>
            <li>English</li>
        </ui>

*/