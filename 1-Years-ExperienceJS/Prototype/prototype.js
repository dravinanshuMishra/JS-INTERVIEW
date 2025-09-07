// // Traditional prototype-based inheritance
// function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };

//   const person1 = new Person('Alice');
//   person1.sayHello(); // Hello, my name is Alice

// Class-based syntax (which uses prototypes under the hood)
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice");
person1.sayHello(); // Hello, my name is Alice
