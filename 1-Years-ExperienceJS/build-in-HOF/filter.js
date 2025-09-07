const arr = [5,1,3,2,6];

// For Odd.
function isOdd(arr) {
    return arr % 2;
}

// For Even.
function isEven(arr) {
    return arr % 2 === 0;
}

// for find vlaue >= 4.
function FindValue(arr) {
    return arr >=4;
}

// odd
const checkIsOdd = arr.filter(isOdd);
console.log(checkIsOdd); //[ 5, 1, 3 ]

// even.
const checkIsEven = arr.filter(isEven);
console.log(checkIsEven); // [ 2, 6 ]

// greater value.
const checkValue = arr.filter(FindValue);
console.log(checkValue); // [ 5, 6 ]