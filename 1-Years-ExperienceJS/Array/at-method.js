// top-1 at () method in array JS.
const arr = [11, 22, 33, 44, 55, 66, 77, 88];

console.log(arr.at(-2)); //77
console.log(arr.at(2)); //33

// second example.
const fruits = ["apple", "Banana", "Guava", "Grapes", "Mango"];
console.log(fruits.at(1)); //Banana
console.log(fruits.at(-1)); //Mango

console.log("\n\n **START FRESH for create Custome At method** \n\n");

// create custom at methods.
const newArr = [12, 23, 36, 46, 57, 67, 78, 89, 99];

function customAt(newArr, index) {
  // console.log(newArr);

  if (index < 0) {
    index = newArr.length + index;
    // console.log(index);
  }

  if (index >= 0 && index < newArr.length) {
    return newArr[index];
  } else {
    return undefined;
  }
}

let index = -8;
console.log(customAt(newArr, index));
console.log(customAt(newArr, 8));
