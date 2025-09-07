let myArray = [0,0,1,2,3,4,[5,[6,7]]];

console.log("Built-in-length :: ", myArray.length);

let mylen = 0;
function myCustomeLength(arr) {

    arr.forEach((element,index) => {
        if(Array.isArray(index)) {
            myCustomeLength(index);
        } else {
            mylen++;
        }
    });
}
myCustomeLength(myArray);

console.log("My Custome Length :: ",mylen);