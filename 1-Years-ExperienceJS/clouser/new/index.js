// let a = 10; // 11
// console.log(a++); // 10 + 1 ==> 11
// console.log(++a); //  1 + 11 = 12


// let b = 10;
// let a = 10;

// console.log(a++); // 10 + 1 = 11. // 10.
// console.log(++b); // 11. // 11


// closure concept.
// function parant() {
//     let a = 10;

//     function inner() {
//         console.log(a)
//     }
//     a = 100;
//     return inner;
// }

// var z = parant();
// console.log(z);
// z();


// closure concept with setTimeout ().
// function x() {
//     for(let i = 1; i<=5; i++) {
//         setTimeout(()=>{
//             console.log(i);
//         },i * 1000);
//     }
//     console.log("Namastey javaScript");
// }
// x();

// clouser var case.
function outer() {
    for(var i = 1; i<=5; i++) {
        function inner(x) {
            setTimeout(()=>{
                console.log(x);
            }, x * 1000)
        }
        inner(i);
    }
    console.log("namastey JavaScript");
}
outer();





