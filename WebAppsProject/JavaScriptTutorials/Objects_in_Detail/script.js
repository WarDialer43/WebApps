/* Objects: are unordered collections of related data in forms of key pairs and value pairs.
*/

// const firstName = 'Alberto';
// const lastName = 'Sbicca';
// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     Age: 53,
//     car: {
//         brand: 'Mercedes',
//         Model: 'sports_S',
//         Colour: 'silver',
//         Year: 2018,
//         Mileage: 20000,

//     }
    
// }
// console.log(person);

/* Accessing properties of an Object
   Adding properties of an Object
   Updating properties oif an Object

   */ 
// Dot Notation: allows us to retreive some vlaues form an Object

//    const person = {
//        firstName: 'Alberto',
//        age: 53,
//    }
//    person.dog = { name: 'fluffy', age: 2};
//    console.log(person.firstName);
//    const property = 'age';

// Sqaure bracket Notation

// console.log(person[property]);

/* Object Methods:  A method is a function associated with an object or a method is property of a object that is a function
 example 1)
 const myObject = {
    myMethod: () => {

    }
 }

 Example 2)
 const myObject = {
    myMethod function(){

    }
 }

 Example 3)
 const myObject = {
    myMethod() {

    }
 }
*/

// const dog = {
//    name: 'Fluffy',
//    bark: () => {
//       console.log('woof');
//    }
// }

// dog.bark();

/* Objects Methods or Static Object Method : Object methods are used directly on the Object constructor
and used the Object instants as the perams. */

// 1) Object.keys: creates an array containing the keys of an object

// const employees = {
//    boss:      'Mike',
//    secretary: 'sue',
//    sales:     'dave',
//    accounts:  'tarra'
// };
// const positions = Object.keys(employees);
// console.log(positions);

// 2) Object.values: creates and array containing  the values of an object.

// const session = {
//    id:       1,
//    time:    `26-july-2022`,
//    device:  'mobile',
//    browser: 'Tour'
// };

// const sessionInfo = Object.values(session);

// console.log(sessionInfo);

// 3) Object entries() : creayes a nested array of the key/values pairs of an object

// const operatinggSystem = {
//    name:    'PopOS',
//    version:  21.10,
//    license:  'Open Source'
// };

// const entries = Object.entries(operatinggSystem);

// console.log(entries);

// // loop through the results 

// entries.forEach(entry => {
//    let key = entry [0];
//    let value = entry[1];

//    console.log(`${key}: ${value}`);
// });

/* 4) Object.freeze(): prevents modification to properties and values of an object,
and prevents properties from being added or removed from the object*/

// const user = {
//    username: 'adminJoe',
//    passwd:   'password1'
// };

// const admin = Object.freeze(user);

// admin.username = 'test'
// admin.passwd = 'passwd'

// console.log(admin);


/* 5) Object.seal(): prevents new properties from being added to an object,
but allows the modifation of existing properties*/

// const user = {
//    usernName: 'adminJon',
//    passwd: 'password32'
// };

// const newUser = Object.seal(user);

// newUser.passwd = 'notGood';
// newUser.active = true;

// console.log(newUser);




