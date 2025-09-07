// forEach custom prototype.
const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

Array.prototype.customForEach = function (callback) {
  //   console.log(this);
  console.log(callback);
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.customForEach((element, index, array) => console.log(element * 2));
