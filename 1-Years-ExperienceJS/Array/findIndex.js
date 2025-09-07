// top-11 findIndex () method in array.
const arr = [10, 20, 60, 30, 70, 80, 90, 40, 50, 60, 70, 90];
// console.log(arr.findIndex(2));
const newArr = arr.findIndex((element, index) => element > 30);
console.log(newArr);

// normal function through achieve create findIndex () methods.
function customeFindindex(arr) {
  // console.log(arr);
  let tempIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 30) {
      tempIndex = i;
      break;
    }
  }
  return tempIndex;
}

// customeFindindex(arr);
console.log(customeFindindex(arr));
