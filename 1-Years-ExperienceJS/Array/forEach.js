// foreach () method.
const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((element) => console.log(element * 2));

// custom function foreach.
function customForEach(arr) {
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
customForEach(arr);
