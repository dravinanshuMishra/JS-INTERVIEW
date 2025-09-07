// make sam to same map functions.
const radius = [3,2,1,4];

// First Area.
const area = function (radius) {
    return Math.PI * radius * radius;
}

// calculation function.
Array.prototype.calculate = function (functions) {
  let output = [];
  for(let i = 0; i<this.length; i++) {  // this give me access of radius  because of we use Array.prototype.
    output.push(functions(this[i]));
  }
  return output;
}

console.log(radius.calculate(area));
// console.log(radius.map(area)); // watch map. 

