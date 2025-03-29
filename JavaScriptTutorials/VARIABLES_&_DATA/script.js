// Variables




// var VariableName = `wasup`;

// console.log(`wasup!!!`);

/* After ES6 which ic a new vewrsion of JavaScritp
we now have two new ways of declaring a Variable(Identifier).

1) let: share many similarities with var
but unlike var it has some scope and strings. 
let is the prefered way of creating variables in 
modern JavaScript.

2) const: another variable type that is asigned to data
who's value will not and cannot change throughout
the whole script so it cannot re asign a variable.

Waht does it mean to re asine a Variable ?
you can use let to re asine the variable to a different value type
by concole.log the value so that the new value is displayed 
but not the previuos value. if you want to display all variables
then you simply console.log each one.

Variable names are also known as Identifiers we have a few rules when 
creating an Identifier in JavaScript. 
1) name of the Identifier must be unique 
2) the name of the Identifier should not be any reserved JavaScript keyWord.
3) the first character of a Identifier must be a letter or a underscorefollowed
followed by a letter or a $ followed by a letter.
*/

/* Data Types: there are categories of DataTypes.

to find out what the  data-type is before executing it you can enter before the data-type
typeof i.e console.log(typeof variable);

1) Primitive DataTypes
2) Complex DataTypes 

Primitive DataTypes: 

Strings (Textual Values

Numbers (Numerical Values)

Booleans (True/False Values)

Null (null Value)

Undefined (undefined value)

Symbol (Extremely rara value)

Complex DataTypes:

Objects (the most important data-type and forms 
the building blocks for modern JavaScript)*/

/* String: is a data-type used to represent text, simpply put strings are feilds of text
In JavaScript there are three types of quotations
1) Single Quotes `Wasup!!`
const singleQuotes = '';
consol.log(singleQuotes);

2) Double Quotes "Wasup!!!"
const doubleQuotes = "";
consol.log(doubleQuotes);

3) Back ticks `` ( a complex string that provides 
    extended functionality they allow us to inbed Variables and 
   expressiosn to a string by  wrapping them into $ and then curly braces)
   this is a convenient syntax that allows us to inbed different 
   into strings variable. We use backticks when we want to use dynamics*/

    // const nameF = 'Jane Doe';
 

    // const backTick = `Wasup!!!, ${nameF}`; 

    // console.log(backTick);
   
/* Numbers:  represent int which are whole numbers and 
float which a decimal numbers */

// const wholeNumber = 5;
// const decimalNumber = 0.5;


// const result = wholeNumber + decimalNumber;
// console.log(wholeNumber);
// console.log(decimalNumber);
//  console.log(result);

/* Booleans: represent a logical entity and can only have one of two values.
1) True = yes, correct, 1 

2) False  = no incorrect, 0 */



/* Null: has only one type null thats it.
null is a speacial vlaue that represent nothing,  empty or value unknown.

   Undefined: a variable that has not been assinged value is undefined  */



/* Objects: are used to store data in more complex entities 
in their simplest forms Objests are used to group variables of any type
strings, numbers etc ... */

// const person = {
//     nameF: 'John',
//     nameS: 'Doe',
//     age: 25,
// }

// console.log(person);

// // dot notation to get just one value data-type
// console.log(person.age);
// console.log(person.name);


/* There are two types of prgramming langauges: Statically vs Dynamically typed langauges 

1) Statically typed: each variable and expression type is already known at compile time
they can recieve dofferent data-types so once a variable is declred to be of a certain type 
it cannot hold value's of any other data-type as with C, C++, Java.


2) Dynamically typed can recieve different data-types over time 
javvaScript is dynamically typed that means variables in 
javaScript can recieve different data-types over time. A variable in JavaScript can 
contain any data and can be a string one monment and a number the next. */

