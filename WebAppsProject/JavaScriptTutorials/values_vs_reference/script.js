/* JavaScript diferentiates Data types on the following :
Primitive values (Numbers, Values, Booleans etc ....)
Complex values (Objects, Arrays) */


// const animals = ['dog, cats'];

// const otherAnimals = animals;

// animals.push('llamas')

// console.log(animals);
// console.log(otherAnimals);



/*person and OtherPerson  point to the same location in memory */
// const person = { firstName: 'jon', lastName: 'snow' };
// const otherPerson = person;

// person.firstName = 'rupert';

// console.log(person);
// console.log(otherPerson);

/* although person & otherPerson contain identical objects 
they are still point to  two destinct object stored in different location on memory*/

// const person = { fName: 'jon'};

// const otherPerson = { fName: 'jon'};

// console.log(person === otherPerson);


/* In this example both person & otherPerson hold the same location in memory  
and therefore are considered equal */


// const person = { fName: 'jon'};

// const otherPerson = person;

// console.log(person === otherPerson);


/*cloning Arrays:*/

/* 1)Spread Operator: numbers & copiedNumber shre the same location in memory, newNumber has its own 
location in memory and therefore represent a completely different array.*/


// const number = [1, 2, 3, 4, 5 ];

// const copiedNumbers = number;

// const newNumber = [ ...number];

// console.log(number === copiedNumbers);
// console.log(number === newNumber);

/* Shallow Clone: pushing an additional digit into the number will only affect it and copiedNumber  
because they share the same location in memory, however newNumber remians un affected because 
newNumber occupies a unique location in memory.*/

// const number = [1, 2, 3, 4, 5 ];

// const copiedNumbers = number;

// const newNumber = [ ...number];

// number.push(6);

// console.log(number );
// console.log(copiedNumbers);
// console.log(newNumber);

/*2) Array.slice():  */

// const number = [1, 2, 3, 4, 5 ];

// const copiedNumbers = number;

// const newNumber = number.slice();

// number.push(6);

// console.log(number );
// console.log(copiedNumbers);
// console.log(newNumber);

/* Cloning Objects */

/* 1) Spread Operator  */

// const person = { name: 'jon', age: 100 };

// const otherPerson = {... person};

// person.age = 22,

// console.log(person);

/* 2) Object.assign()  */

// const person = { name: 'jon', age: 100 };

// const otherPerson = Object.assign({}, person);

// person.age = 22;

// console.log(person);
// console.log(otherPerson);

/* Deep Cloning: for an object to be a deep clone it needs to destroy all 
tha references. there are two methods to amke it easy.

2) Jason.parse */

// const person = {
//     fName: ' emme',
//     car: {
//         brand: 'BMW',
//         colour: 'blue',
//         wheels: 4,
//     }
// }

// /*1) Jason.stringfy: converts a javaScript Object or any value into a string,
// all the references are destroyed.*/

// const newPerson = JSON.parse(JSON.stringify(person));

// newPerson.fName = 'mia';
// newPerson.car.colour = 'red';


// console.log(person);
// console.log(newPerson);


