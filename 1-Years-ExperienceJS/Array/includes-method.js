// includes () method.
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.includes(3)); // true
const newArr = arr.includes(2);
console.log(newArr); // true.
console.log(arr.includes(9)); // false.

// custom function through.
function customIncludes(arr, value) {
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

let value = 2;
console.log(customIncludes(arr, value)); //true
