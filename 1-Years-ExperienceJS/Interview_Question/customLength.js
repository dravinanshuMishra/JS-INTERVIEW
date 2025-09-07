let array = [0,0,1,2,3,4,[5,[6,7]]];

console.log("Built-in-length :: ",array.length);

let myCustomLength = 0;

const MakeItEasy = (arr) => {
    arr.forEach((element) => {
        myCustomLength++;
    });
}

MakeItEasy(array);
console.log("Customized My Own Length :: ",myCustomLength);


