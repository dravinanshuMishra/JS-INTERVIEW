// map.
const arr = [5,1,3,2,6];

// double.
function double(arr) {
    return arr * 2;
}

// thripal.
function tripal(arr) {
    return arr * 3;
}

// binary.
function Binary(arr) {
    return arr.toString(2);
}

console.log(arr.map(double)); // [ 10, 2, 6, 4, 12 ]
console.log(arr.map(tripal)); // [ 15, 3, 9, 6, 18 ]
console.log(arr.map(Binary)); // [ '101', '1', '11', '10', '110' ]


/*
    SHORT WAY FOR USE MAP () FUNCTION.
*/
console.log(arr.map(function(value) {return value * 2})); //[ 10, 2, 6, 4, 12 ]
console.log(arr.map((val)=> val * 3)); //[ 15, 3, 9, 6, 18 ]
console.log(arr.map((v)=>v.toString(2)));  // [ '101', '1', '11', '10', '110' ]