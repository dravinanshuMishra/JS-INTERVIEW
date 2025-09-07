function factortyFunction(name, age) {
  return { name };
}

const newVar = factortyFunction("ashu", 26);
console.log(newVar); //{ name: 'ashu', age: 26 }

// promise.
const promise = new Promise((resolve, reject) => {
  resolve("ashu");
});

promise.then((data) => {
  console.log(data); //ashu
});
