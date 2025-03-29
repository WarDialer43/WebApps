/* Functions: A block of code => performs a task */


/* 
Function decleration: Defining a Function
in Example 01 we create a FUNCTION (A reserved JavaScript KeyWord for creating a function)
which is called SQUARE(name of this particular function you can name a function anything 
as long as it isnt a reserved javaScript keyword)it excepts one perameter
(Peramters are values that we send to our function when calling it)(peramiters called NUMBER 
which is inside the pernthasis.Next is the opening Curly Brace { it represents the start of tha opening block 
everything else up to the closing curly brace } represents the function body in their we 
will return  number * number. This Example function consists of one statement a Function that says 
to return the paremeter of the function number * number.The return specifies the value that will be returned by the function 
we retrieve values from function by calling them. there are a few ways to define a function in javaScript. 

1) function decleration

// function decleration example 01 the only advantage to using this is that it has access to "this" keyword

// function square(number) {
//     return number * number;
// }

2) functions expressiosn

// function expression: defines a named or anomynouse function(a function that has no name)
// setting an anominouse function to be === to a variable 

// const name = function(perams) {
//     // statements
// }

3) arrow function expressiosn 

Arrow Function: do not create their own "this" value which is a specail javaScript keyword

// const square = (number) => {
//     return number * number;
// }

Function Call: Calling/Envoking/Executing

Calling the function actually performs the specified actions with the indicated perameters.
In this example we have the function name with perenthasis inside of which we have the arguments 
(arguments are values that we want to fill are perameters with) 
if we send 5 then the number peramter will be defined as 5 to get the result of that function we have to store it in 
a variable. We create the variable called result which is a = sign.


// function decleration example 01 the only advantage to using this is that it has access to "this" keyword

// function square(number) {
//     return number * number;
// }

// function expression: defines a named or anomynouse function(a function that has no name)
// setting an anominouse function to be === to a variable 

// const name = function(perams) {
//     // statements
// }

// function Call Example 01

// const result = square(2);

// console.log(result);

/* Declaring and Invoking Functins: 

An arrow function 01 : is a shorter syntax for writing function expressiosn 
and is the most modern way to create a javaScript function.

const name = (perams) => {
    // statments
}

*/

// function sayHi(name) {
//     console.log(`hi, ${name}!`);
// }

// sayHi('Joe');
// sayHi('Jane');

/* function Return undefined unless otherwise specified 
*/

// function add(a, b) {
//     return a + b;
// }

// const sum = add(2, 2 );

// console.log(sum);

/* Arroe Function: do not create their own "this" value which is a specail javaScript keyword

 */
// const square = (number) => {
//     return number * number;
// }

// const square1 = (number) => number * number;
// const result = square(5);
// const result1 = square1(5);
// console.log(result);
// console.log(result1);

/* Peramters - used when defining a function they are the names created in the functiond definition.
Peramater is like a variable that is only meaningful inside of this function and wont be exceable outside of the function. */

// Arguments - real value's passed when making a function call 

// const sayHi = (name, age = 0) => {
//     console.log(`${name}, is ${age} years old.`)
// }

// sayHi('Joe');
