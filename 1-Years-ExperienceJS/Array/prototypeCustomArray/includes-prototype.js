// includes.
const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.customIncludes = function (value) {
  //   console.log(this);
  //   console.log(value);
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

console.log(arr.customIncludes(2)); // true
