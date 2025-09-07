// join () method.
const arr = ["a", "s", "h", "u"];

console.log(arr.join()); //a,s,h,u
console.log(arr.join(" ")); //a s h u
console.log(arr.join("-")); //a-s-h-u
console.log(arr.join("")); //ashu

// custom join () method.

function customJoin(arr, seperator = ",") {
  let temp = "";
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
    if (i < arr.length - 1) {
      temp += seperator;
    }
  }
  return temp;
}
let seperator = ",";
console.log(customJoin(arr));
