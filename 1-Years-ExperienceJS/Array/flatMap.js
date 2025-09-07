// top-13 flatMap () method. in Array.
const arr = ["My", "Name", "Dravinanshu", "Mishra"];
// console.log(arr);

const newArr = arr.flatMap((item) => item.split(""));
// console.log(newArr); // output.
/*[
  'M', 'y', 'N', 'a', 'm',
  'e', 'D', 'r', 'a', 'v',
  'i', 'n', 'a', 'n', 's',
  'h', 'u'
] */

const newArr1 = arr.map((item) => item.split("")).flat();
// console.log(newArr1); //output.
/*[
  'M', 'y', 'N', 'a', 'm',
  'e', 'D', 'r', 'a', 'v',
  'i', 'n', 'a', 'n', 's',
  'h', 'u'
] */

//   create custom through function.
function customFlatMap(arr) {
  let flatten = [];
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    const flattern = arr[i];
    // console.log(flattern);
    for (let j = 0; j < flattern.length; j++) {
      //   console.log(flattern[j]);
      flatten.push(flattern[j]);
    }
  }

  return flatten;
}

const newArr2 = customFlatMap(arr);
console.log(newArr2);
