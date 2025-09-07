// const obj = {
//   name: "Ashu Mishra",
//   age: 26,
// };

// function main(address) {
//   console.log(
//     `My name is ${this.name} and my age is ${this.age} address ${address}`
//   );
// }

// // main(); // by thier own name.
// // main.call(obj, "Jhalwa"); // by call () method.
// // main``; // by doble tick.
// // main.apply(obj, ["jhalwa"]); //by apply () method.

// const storeNew = main.bind(obj, "Prayagraj");
// // console.log(storeNew); // give me function reference.
// storeNew();

// // function curring in js.
// function abc(a) {
//   console.log(a);
//   return function (b) {
//     console.log(b);
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

// // console.log(abc(1, 2, 3));
// // const newFunctions = abc(1);
// // newFunctions();
// // abc(1)();

// abc(1)(2)(3);

// closer examples.
function outer() {
  let count = 1;
  function inner() {
    // count++;
    console.log("counter::", count++);
  }
  inner();
}
outer();
