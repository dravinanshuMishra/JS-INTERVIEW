const obj1 = [
  { name: "John doe", age: 23 },
  { name: "Michael jordan", age: 45 },
  { name: "John Ali", age: 25 },
  { name: "John loe", age: 23 },
];

// output like that.
// {23:2,45:1,25:1}

// console.log(obj1);

const myNewObj = obj1.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue.age]) {
    accumulator[currentValue.age] += 1;
  } else {
    accumulator[currentValue.age] = 1;
  }
  return accumulator;
}, {});

console.log(myNewObj);
