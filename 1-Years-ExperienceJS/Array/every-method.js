//  top-7 every () method in javascript.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. examples.
const allPositive = arr.every((element) => {
  return element > 0;
});

console.log(allPositive); // true.
