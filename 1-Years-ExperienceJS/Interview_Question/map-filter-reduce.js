// map () method
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter((item) => item > 3).length); // 4 length..
console.log(arr.map((item) => item > 3).length); // 7 length.
console.log(
  arr.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue);
  }, 1)
);

// console.log(arr);
