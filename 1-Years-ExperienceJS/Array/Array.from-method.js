// Top-2 Array.from () constructor method in JS.
const str = "Hello world";
console.log(str);
console.log(Array.from(str)); //convert string into an array.

// 2. create a brand new Array with fixed length.
console.log(Array.from({ length: 5 }, (_, i) => i + 1));

// 3. Using Array.from() with a thisArg:
const obj = { factor: 2 };
const arr = Array.from(
  [1, 2, 3],
  function (x) {
    return x * this.factor;
  },
  obj
);

console.log(arr);
