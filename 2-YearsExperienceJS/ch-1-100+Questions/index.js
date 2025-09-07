console.log(2+"2");        // "22"       -> + with string => concatenation
console.log(2-"2");        // 0          -> - converts both to numbers
console.log(2*"2");        // 4          -> * converts both to numbers
console.log(2/"2");        // 1          -> / converts both to numbers
console.log(2%"2");        // 0          -> % converts both to numbers
console.log(2**"2");       // 4          -> ** converts both to numbers
console.log(2+true);       // 3          -> true -> 1, number + boolean
console.log(2+false);      // 2          -> false -> 0, number + boolean
console.log(2-false);      // 2          -> false -> 0, number - boolean
console.log(2+null);       // 2          -> null -> 0, number + null
console.log(2+undefined);  // NaN        -> undefined -> NaN in numeric addition
console.log(2+NaN);        // NaN        -> NaN propagates in arithmetic
console.log(2+{});          // "2[object Object]" -> object -> string, + => concatenation
console.log(2+[]);          // "2"        -> [] -> "" (empty string), + => concatenation
console.log(2+function(){});// "2function(){}" -> function -> string, + => concatenation
// console.log(2+Symbol("2")); // TypeError -> Symbol cannot be converted
console.log(2+"");          // "2"        -> "" is string, + => concatenation
console.log(2+" ");         // "2 "       -> " " is string, + => concatenation
console.log(2+"a");         // "2a"       -> "a" is string, + => concatenation

// NEW examples.
console.log(!!"false"); // true, non-empty string is truthy
console.log(!!"0");     // true, non-empty string is truthy
console.log(!!"");       // false, empty string is falsy
console.log(!!0);      // false, 0 is falsy
console.log(!!-0);   // false, -0 is falsy
console.log(!!NaN);   // false, NaN is falsy
console.log(!!null);  // false, null is falsy
console.log(!!undefined); // false, undefined is falsy
console.log(!!1);      // true, non-zero number is truthy
console.log(!!-1);     // true, non-zero number is truthy
console.log(!!Infinity); // true, non-zero number is truthy
console.log(!!-Infinity); // true, non-zero number is truthy
console.log(!!{});     // true, object is truthy
console.log(!![]);    // true, array is truthy
console.log(!!function(){}); // true, function is truthy
console.log(!!Symbol("symbol")); // true, symbol is truthy
// console.log(!!Symbol()); // true, symbol is truthy
console.log(!!BigInt(0)); // false, BigInt 0 is falsy
console.log(!!BigInt(1)); // true, non-zero BigInt is truthy
console.log(!!BigInt(-1)); // true, non-zero BigInt is truthy
console.log(!!BigInt("9007199254741991")); // true, non-zero BigInt is truthy
console.log(!!BigInt("-9007199254741991")); // true, non-zero BigInt is truthy
console.log(!!BigInt("0")); // false, BigInt 0 is falsy
console.log(!!BigInt("-0")); // false, BigInt -0 is falsy
console.log(!!(function(){})); // true, function is truthy
console.log(!!(function() { return 0; }));
// true, function is truthy
console.log(!!(function() { return ""; }));
// true, function is truthy 
