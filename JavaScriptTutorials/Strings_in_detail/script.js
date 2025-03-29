/* Strings: primitive data type, in javaScript we use strings to store text
As a reminder there are three types of string 
1) Single  const single = 'single'; // static vsalues 
2) double  const double = "double"; // static values 

3) backtick const backtick = `${2 + 2}`; // dynamic values excercuting javaScript logic

const sum = (a, b) => a + b; 

const total = `sum` ${sum(2, 2)}`

consol.log(total);
*/

/* string length & properties:  */

// const name = 'John';

// console.log(name.length);

// const firstLetter = name[0];
// const lastLetter = name[3];

// console.log(firstLetter, lastLetter);

// const name = 'John is a good fellow.';

// const firstLetter = name[0];
// const lastLetter = name[name.length -1];

// console.log(firstLetter, lastLetter);

/* change case of strings: in javaScript we have two simple ways to change the characters in a case 
 mixedCaseString: 
 
 const mixedCaseString = 'Hello! how are you?';
 
 //called as a method because we are calling a function on this string constructor 

// lowerCase all
 const lowerCaseString = mixedCaseString.toLowerCase();
 
 console.log(lowerCaseString);

 //upperCase all

 const lowerCaseString = mixedCaseString.toUpperCase();
 
 console.log(upperCaseString);
 */ 