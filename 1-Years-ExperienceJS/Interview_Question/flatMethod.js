// 1. flat method watch and make customElements.
// 2. without any loop print 1 to 10.

// Example of flat() method
var nestedArray = [1, 2, [3, 4], [5, [6, 7]]];

console.log(nestedArray);

var flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, [6, 7]]




