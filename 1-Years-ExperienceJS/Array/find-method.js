//  Top-10 find () method.
const arrOne = [10, 20, 30, 40, 50, 60, 70];
console.log(arrOne.find((element) => element > 10)); // 20
console.log(arrOne); // The find () method is not change the original array.
console.log(arrOne.find((element) => element > 80)); // if no element statistfy the test, it return undefined.

// custom find () method.
function customFind(arr) {
  let temp = [];
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i] > 20 );
    if (arr[i] > 20) {
      temp = arr[i];
      break;
    } else {
      temp = undefined;
    }
  }
  return temp;
}

// customFind(arrOne);
console.log(customFind(arrOne));
