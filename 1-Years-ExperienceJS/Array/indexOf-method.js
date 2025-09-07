// indexOf () method in JS.
const arr = [1, 4, 3, 4, 9, 2, 4, 2, 5, 6, 2, 7, 9];
// console.log(arr);
console.log(arr.indexOf(2)); // return index that matches firstly.

// custom indexOf.
function customIndexOf(arr, element) {
  //   console.log(arr);
  //   console.log(index);
  let tempIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      tempIndex = i;
      break;
    }
  }
  return tempIndex;
}

let element = 2;
console.log(customIndexOf(arr, element));
