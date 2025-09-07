const arr = [5,1,3,2,6];

// sum all array element.
function sumArray(arr) {
    let sum = 0;
    for(let i =0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(arr)); // 17


// find Maximum number from that array.
function FindMaximum(arr) {
    let max = 0;
    for(let i = 0; i<=arr.length-1; i++) {
        //  max = Math.max(arr[i]); // 8
        if(arr[i] >max) {
            max = arr[i]; //6
        }
    }
    return max;
}
console.log(FindMaximum(arr));


// Reduce () method, sum of all array element.
const output = arr.reduce(function(accumulator, currentValue){
    accumulator += currentValue;
    return accumulator;
},0);
console.log(output); // 17

// Reducer () method. find maximum number.
const output2 = arr.reduce((accumulator, currentValue)=>{
    return accumulator > currentValue ? accumulator : currentValue;
},0)
console.log(output2); //6 