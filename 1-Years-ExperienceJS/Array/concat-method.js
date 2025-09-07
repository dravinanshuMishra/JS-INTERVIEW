//  top-3 concat () method is Javscript.
const arrOne = [22, 23, 24, 25, [0, 80, 85, [0, 0, 0, [9, 9, 9]]]];
const arrTwo = [26, 27, 28, 29, [0, 0, 0, 0]];
const arrThree = [1, 2, 3, 4, 5];
const arrFour = [4, 5, 6, 7];

console.log(arrOne.concat(arrTwo, arrThree, arrFour));

// 1. custom build concat method.
function customConcat(type, ...data) {
  let temp = [];
  function innerFunction(data, type) {
    data.forEach((d) => {
      if (Array.isArray(d) && type === 1) {
        innerFunction(d);
      } else {
        temp.push(d);
      }
    });
  }

  innerFunction(data, type);
  return temp;
}

// customConcat(arrOne, arrTwo, arrThree);
console.log(customConcat(1, arrOne, arrTwo, arrThree, arrFour));

// 2. Custom build concat () method without using built-in properties or methods
function customConcat(type, ...data) {
  let temp = [];

  function isArray(obj) {
    return obj && typeof obj === 'object' && typeof obj.length === 'number' && obj.length >= 0;
  }

  function innerFunction(data, type) {
    data.forEach((d)=>{
      if(isArray(d) && type === 1) {
        innerFunction(d);
      } else {
        temp[temp.length] = d;
      }
    })
  }

  innerFunction(data, type);
  return temp;
}

// Example usage
console.log(customConcat(1, arrOne, arrTwo, arrThree, arrFour)); 
