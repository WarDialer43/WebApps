/* Imports & Exports*/

// import {dogs, numberOfDogs} from './dogs.js';

// import onlyOneThing from './test.js';

// console.log(onlyOneThing);
// console.log(` The ${numberOfDogs} dogs`);
// console.log(`The dogs are : ${dogs}`);

/* Rest & Spread Operators: */

// Rest Operator

// const add = (... args) => {
//     return args.reduce((acc, val) => acc + val);

// }

// console.log(add(11625000, 11625000, 11625000, 11625000));


// Spread Operator/Syntax

// const numbers = [1, 2, 3, 4, 5 ];

// const newNumbers = [ ... numbers, 6];

// console.log(numbers);
// console.log(newNumbers);

// const object = { name: 'Johny, age: 25'};

// const object1 = { ...object, name: 'Jenny', aage: 30};

// console.log(object);
// console.log(object1);


/* Object & Array Destructuring: */


// Object Destructuring

// const person = {
//     fistName:'Gerry',
//     lastName: 'Vee',
//     car: {
//         colour: 'red',
//         wheels: 4
//     },
//     animals: {
//         dog: {
//             name: 'fluffy',
//             age: 3,
//         },
//         cat: {
//             name: 'kitty',
//             age: 3,
//         }
//     }
// }


// const { firstName, lastName, animals:{ dog, cat }} = person;
// // Dry code is lame 

// console.log(dog.name);
// console.log(dog.age);
// console.log(cat.name);
// console.log(cat.age);


// Backend node:

// const test = (req, res) => {
//     const { body, perams} = req;
// }

// // React

// const Components = ({ keys, }) => {

// }

// // Array Destructuring:

// const introduction = [" I, am, Bob"];

// const[greeting ,,,name] = introduction;

// console.log(greeting, name);


