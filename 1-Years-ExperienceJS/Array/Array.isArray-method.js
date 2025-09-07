//  top-3 Array.isArray () method.
const arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); //true

// second options.
const str = "Hello World";
console.log(Array.isArray(str)); //false

// third options.
const arr1 = [];
console.log(Array.isArray(arr1)); //true

console.log("\n\n ** CUSTOM ARRAY.ISARRAY () METHODS ** \n\n");

//  custom Array.isArray () method.
const newArr = [1, 2, 3, 4, 5];

function checkIsArray(data) {
  if (
    data &&
    typeof data === "object" &&
    typeof data.length === "number" &&
    data.length >= 0
  ) {
    for (let i = 0; i < data.length; i++) {
      if (!(i in data)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(checkIsArray(newArr)); // true
console.log(checkIsArray([])); // true
console.log(checkIsArray("string")); // false
console.log(checkIsArray({})); // flase
console.log(checkIsArray({ 1: "a", 2: "b" })); // flase
