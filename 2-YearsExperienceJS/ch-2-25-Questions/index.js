class myClass {
   constructor() {
       console.log("Hello World");
   }
}

console.log(typeof myClass); // function


// 1. create a function and check types.
function myFunction () {
    console.log("yes");
}

console.log(typeof myFunction); // function.


// 2. create a promise without using new Promise.
const myPromise = async() => {
    try {
        return await setTimeout(() => {
            console.log("Promise resolved succesfully !!")
        }, 3000)
    } catch (error) {
         throw "Promise Error"
    }
}

console.log("ye wala",myPromise());

myPromise().then((data) => data).catch((error) => console.log(error));
