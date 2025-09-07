// what is curring in JS?
// Ans: In JavaScript currying is a functional programming technique that allow a function to be called with in a single argument and return a new function that take remening arguments.

// 1. achieve pure function through.
// function curryingFunction(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// 1.  console.log(curryingFunction(10)(20)(30)); //60 return.
// 2. way for calling.
// const aFunction = curryingFunction(10);
// const bFunction = aFunction(20);
// const c = bFunction(30);
// console.log(c); // 60.

//  2. arrow function.
// const curryingFunction = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(curryingFunction(1)(2)(3)); // 6.

// 3. arrow function shorter syntax.
const curryingFunction = (a) => (b) => (c) => a + b + c;
console.log(curryingFunction(1)(2)(3)); // 6.
