// 1. infinite loop.
/*
    for(;;) {
        console.log("Hello, World!");
    } // infinite loop
*/

// 2. type checking.
console.log(typeof NaN); // "number"
console.log(typeof Infinity); // "number" because in JavaScript, both NaN and Infinity are considered numbers.
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object", this is a known quirk in JavaScript. null is not an object, but typeof null returns "object".

// 3.
const a = null;
const b = null;
console.log(a+b); // 0

// 4.
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
console.log(Number((0.1 + 0.2).toFixed(2)) === 0.3); // true

// 5. function ke sath.
console.log(typeof function(){}); // "function"
console.log(typeof function(){}()); // "undefined", because the function does not return anything.
console.log(typeof function(){ return 1; }()); // "number"

// 6. array ke sath.
console.log(typeof []); // "object"
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof [1, 2, 3].length); // "number" 


// 7. object ke sath.
console.log(typeof {}); // "object"
console.log(typeof {a: 1, b: 2}); // "object"
console.log(typeof {a: 1, b: 2}.a); // "number"

// 8. string ke sath.   
console.log(typeof "Hello, World!"); // "string"
console.log(typeof 'Hello, World!'); // "string"
console.log(typeof `Hello, World!`); // "string"
console.log(typeof "Hello, World!".length); // "number" 
console.log(typeof "Hello, World!".toUpperCase()); // "string"
console.log(typeof "Hello, World!".toUpperCase().length); // "number"

// 9. boolean ke sath.
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
console.log(typeof (1 === 1)); // "boolean"
console.log(typeof (1 === 2)); // "boolean"

// 10. symbol ke sath.
const sym = Symbol("description");
console.log(typeof sym); // "symbol"