// follow DRY principal.
const radius = [3,2,1,4];


// First Get Area.
const area = function(radius) {
    return Math.PI * radius * radius;
}

// second Diameter.
const diameter = function (radius) {
    return 2 * radius;
}

// third CircumFerence.
const CircumFerence = function (radius) {
    return 2 * Math.PI* radius;
}


// Calculate Everything.
const Calculate = function (radius, calculateFunction) {
    let output = [];
    for(let i = 0; i<radius.length; i++) {
        output.push(calculateFunction(radius[i]));
    }
    return output;
}

console.log(Calculate(radius, area));
console.log(Calculate(radius, diameter));
console.log(Calculate(radius, CircumFerence));
