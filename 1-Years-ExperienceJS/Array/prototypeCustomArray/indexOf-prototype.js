// indexOf () method.
const arr = [1, 4, 3, 4, 9, 2, 4, 2, 5, 6, 2, 7, 9];
let element = 2;

Array.prototype.customIndexOf = function (element) {
  //   console.log(this);
  //   console.log(element);
  let elementIndex = -1;

  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      elementIndex = i;
      break;
    }
  }
  return elementIndex;
};

console.log(arr.customIndexOf(element));
