// 1. Add and remove elements from both ends of an array.
const arr = [1, 2, 3, 4, 5];

arr.push(6); // Add 6 to the end
arr.unshift(0); // Add 0 to the beginning
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

arr.pop(); // Remove last element
arr.shift(); // Remove first element
console.log(arr); // [1, 2, 3, 4, 5]

// 2. Find the index of a specific element in an array.
const index = arr.indexOf(3);
console.log(index); // 2

// 3. Get the length of an array and its type.
console.log([1,2,3,4,5].length); //5
console.log(typeof [1,2,3,4,5].length); // number.


// 4. Remove first 2 elements from an array.
const arr2 = [1,2,3,4,5,6,7,8,9];
arr2.splice(0,2);
console.log(arr2); // [3,4,5,6,7,8,9]

// 5. Remove last 2 elements from an array.
const arr3 = [1,2,3,4,5,6,7,8,9];
arr3.splice(-2);
console.log(arr3); // [1,2,3,4,5,6,7]

// 6. Remove elements from index 2 to index 4.
const arr4 = [1,2,3,4,5,6,7,8,9];
arr4.splice(2, 3); // 3,4,5 are removed.
console.log(arr4); // [1,2,6,7,8,9]

// 7. Spread operator ke sath.
console.log(..."hello"); // h e l l o, because string is iterable.
console.log([..."hello"]); // ['h', 'e', 'l', 'l', 'o'] // array of characters.


// 8. spread operator ke sath array and combine.
const arr5 = [1,2,3];
const arr6 = [4,5,6];
const arr7 = [...arr5, ...arr6];
console.log(arr7); // [1,2,3,4,5,6] // merge two arrays.
const arr8 = [0, ...arr5, ...arr6, 7,8,9]; 
console.log(arr8); // spread arrays. [0,1,2,3,4,5,6,7,8,9]


// 9. Remove duplicates from an array.
console.log([...new Set([1,2,3,4,5,5,4,3,2,1])]); // [1,2,3,4,5] // set removes duplicates.


// 10. Find the maximum element in an array.
const arr9 = [1,2,3,4,9];
console.log(Math.max(...arr9)); // 9 // spread the array elements as arguments to Math.max.


// 10. function.
function tryFruits(...fruits) {
    console.log(...fruits);
}

tryFruits("apple", "banana", "mango", "grapes"); // apple banana mango grapes
tryFruits(["apple", "banana", "mango"]); // [ 'apple', 'banana' ]


// 11.
function tryFruits2(...fruits) {
    console.log(fruits);
}

tryFruits2("guava", "ice-cream"); // [ 'guava', 'ice-cream' ]

// 12.
console.log(parseInt("10px")); // 10


// 13. array check. array hai ya nahi.
const arr10 = [1,2,3];
console.log(Array.isArray(arr10)); // true