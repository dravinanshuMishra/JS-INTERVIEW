// Top-9 fileter () method in javascript.
// The filter ()  method is used to create a new array containing of all elements of the original array that pass a test provided by callback function.
const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arrOne.filter((element, index) => element % 2 === 0)); // it is creates a new array containing of all original array.

console.log(arrOne); // it is not modified or effects of the original array.

// custom filter () method.
function customFilter(arr) {
  let temp = [];
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // console.log(arr[i]);
      temp[temp.length] = arr[i]; // temp.length का उपयोग अगली खाली पोज़िशन पर संख्या जोड़ने के लिए किया जाता है।
    }
  }
  return temp;
}

// customFilter(arrOne)

console.log(customFilter(arrOne));
