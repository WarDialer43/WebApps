/* Global Scope: When you begin writting in any javaScript document you are immediatly in the Global Scope
and can be accessed  by any other Scope for instance a variable name in a gloable scope can be accessed 
by any other scope.

Advantages of Global Scope: you can access global variables from all functions and modules in your program 
and is usually used to store constants(const)as it helps with consistency. Global variable are useful 
when multiple functions are accessing the same data.

Disadvantages of Global Scope: if you declare too many variables in the global scope 
they remian in memory until the programe is executed  which can cause the out if memeory issue.
Generally is not considered good practice to have eveything on the Global Scope 
because its going to keep running untill the program is over. 

Data can be modified ny any function any statement in a prgram can change the styate of a global variable 
this may give unprodicteable results in multi tasking enviroments.  */

// name = Global Scope
// const name = 'John';

// const logName = () => {
// Global Scope Name being accessd withinn the console.log()
//     console.log(name);
// }

// logName();

/* Local Scope: variables defined inside the function are in the Local Scope 
we cannot use Local Scope outside of the variables that they were declared in 
variables declared above can be used below but not viseversa(top down not down top) 

Advantages of Local Variables: the use of Local Variables offers garuantees that
the value of variables will remain intact while the task is running.  
you can give Local Variables the same name in different functions because 
they are only recognised by the function that they are declared in 
so if we wanted to create a variable name = 'john  we can create a second function
and in their you can have another variable with the same name = 'Jonny' 
when you declare them in completly different functions you get the 
name variable with whatever the perams that was chosen.
Local Functions are deleted as soon as any function is over 
and releases the memory space which it occupies 
Disadvantages of Local Variables: very limited scope */

// Local Scope / Function  Scope 
// const someFunction = () => {
// anything inside these brackets is considered inside the Local Scope 
// }


/* Block Scope:  variables defined with const and let have something called a block scope 
that means that they will only be availble with in the block of code that you create them in 
*/


/* Hoisting in javaScript: a javaScript mechanism where variables and function declerations 
are moved to the top of their scope before code execution.This means no matter where 
functions and variables are declared thier moved to the top of their scope regadless
if their scope is global or local. the only thing that gets moved to the top is the variable decleration.

Hoisting is not useful in any way, however hoisting is useful to know about in case their is an issue 
you can kow that hiosting might have affected the code.

How Hoisting Work:
1) declares a variable 
2) moves that variable to the top
3) then declares the actual values to the variable

// example of hoisting
var age;
console.log(age);
age=20;
Hoisting is never used in modern javaScript */


/* Closures in javaScript: a closure gives you access to the outer function scope 
from an inner function scope. in javaScript closures are created everytime a function is created 
at function creation time.

const outer = () => {
//  outerfunction scope
    const outerVar = 'Hello!';
// inner function scope 
    const inner = () => { 
        const innerVar = 'H1';

    console.log(outerVar, innerVar);

    }

    return inner;
}
const innerFn = outer();

innerFn();

Another Example 

const init = () => {
    const hobby = ' blah blah' //local variable created by the init func

    const displayHobby = () => { //displayhobby is the inner function, a closure
        console.log(hobby); //using a variable created in the parent function
    }
    displayHobby();
}
    innit();
    
*/