/* if statement example  */

// const SP = 'valid';

// if (SP === 'valid') {
//     console.log('you may enter'); 
// } else if (SP != 'valid') {
//     console.log('Ok you can enterHas your pass expired?')
// } else {
//     console.log('your too young sorryyou may not enter')
// }

/* Truthy & Falsey Values: the best way to understand and rememeber 
these concepts is to understand and know the 6 falsey values. 

you should play around with this to  inprove skills !

Falsey Values 
1) false 
2) 0
3) empty string ''
4) null
5) undefined 
6) NAN */

// const dogs = 5;

// if(dogs) {
//     console.log(`you have ${dogs} dogs`);
// }else {
//     console.log('no dogs');
// }

/* Logical Operators P2 are used to combine 2 or more conditions*/

// const age = 19;

// const isCool = true;


// console.log('truhy' && 1 && 'test' && 999);
// console.log('truhy' || 1 || 'test' || 999);
//    console.log(!!0);

/* use this bit of code practice truthy/falsy knowledge*/
    // const ID = 'vaild';

    // if(!!ID) {
    //     console.log('ID is TRUTHY !');
    // }else {
    //     console.log(' is FALSY !');
    // }


// console.log(isCool && age > 18);

// is cool amd is above 18

// if(isCool && age > 18) {
//     console.log('You may enter');
// } else {
//     consoile.log('No Entry Sorry');
// }

/* switch Statements: `the switch is used to perform different operations 
based on diferent conditions. switch statement takes in a value and 
then checks it against a bunch of cases  */

/*  try switching this to if statement */
// const superHero = 'Falcon';

// if(superHero === 'Iron man') {
//     console.log('Nope');
// }if (superHero === 'Thor') {
//     console.log('Wrong!')
// }else console.log('DeathFromAbove');

/* Turnary Operator: should be used for a simple tru or false check */

// const age = 18;

// if(age >= 18) {
//     console.log('You can drive.');
// }else {
//     console.log('you are not old enough yet.');
// }
// Tunary Operator example:
// age >= 18 ? console.log('You can drive.') : console.log('you are not old enough yet.');

/* Looping - While &  For Loops */


// While Loop

// while(condition) {
//     // code
// }

// let i = 0;

// while( i < 10) {
//     console.log(i);
//     i++;
// }

/* For Loop more complex but most commonly used it is called a for loop because 
it runs for a psecific number of times. 
For loops are declared with three optional expressions serpeated by ; */

// For loop?

// for([initialization]; [condition]; [final-expression]) {

// }

/* 1) initialization is executed one time before the loop starts typically used 
to define and set up the loop variable 

initialization, conition and finally the final-expression example: 
for(let i =0; i > 10; i++){
    console.lot(i);
} */
