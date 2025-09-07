//
const str = "a ashu Mishra";
// const newStr = str.replace("ashu", "Dravinanshu");
// console.log(newStr); //Dravinanshu Mishra.

// custom string function.
String.prototype.customString = function (value, relpaced) {
  let add = "";
  for (let i = 0; i < this.length; i++) {
    if (this.slice(i, i + value.length) === value) {
      add += relpaced;
      i += value.length - 1; //1 + ashu-1 = 4. skip, 4 value.
    } else {
      add += this[i]; //  a     Mishra
    }
  }
  return add; // a Dravinanshu Mishra.
};

let value = "ashu";
let replaced = "Dravinanshu";
const newStr2 = str.customString(value, replaced);

console.log(newStr2);
