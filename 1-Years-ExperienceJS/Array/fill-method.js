//  top-8 fill () method in JavaScript.

//  1. example.
const arr = [1,2,3,4,5,6,7];
const newArr = arr.fill(0);
// console.log(arr); // it modify the original array.
// console.log(newArr);


//  2. example.
const arrOne = [11,22,33,44,55,66,77,88,99];
arrOne.fill(0, 1, 5) // 1,5 means 4 value change hoga bus.
// console.log(arrOne);



// custom build fill method.
const arrTwo = [1,2,3,4,5,6,7,8,9];
function customFill(arr, value, start, end) {
  // console.log(arr, value, start, end);
  if(start < 0) start = 0;
  
  if(end > arr.length ) end = arr.length;
  
  for(let i = start; i<end; i++) {
    arr[i] = value;
  }
  return arr;
}

let myValue = 0;
let start = 0;
let end = 29;

customFill(arrTwo, myValue, start, end);

console.log(customFill(arrTwo, myValue, start, end));