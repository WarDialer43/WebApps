/* The New Keyword : creates a new empty object*/

/* This Keyword : used to reference the odbject that is executing the current function*/

/* Classes new and this : is a scheme for an object thet can save many values.*/


class Person {
    constructor(name, age, isWorking) {
        this.name = name,
        this.age = age,
        this.isWorking = isWorking
    }
}

const user = new Person('jane', 34, true);
//  const user = new Person('rod', 34, true);
// const user = new Person('bill', 34, true);
// const user = new Person('joe', 34, true);
console.log(user);

