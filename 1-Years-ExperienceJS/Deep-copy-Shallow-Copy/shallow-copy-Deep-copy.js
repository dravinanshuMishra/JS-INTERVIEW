// 1. Shallow copy: if you want to any changes array or Object, it will be chanced in original array or object.

// 1. shallow copy.
const obj = {
  name: "ashu",
  age: 26,
};
// const newObj = obj;
// newObj.name = "Dravinanshu";

// Object refers the memory reference of the original object (shallow copy).
// console.log("obj :: ", obj); //obj ::  { name: 'Dravinanshu', age: 26 }
// console.log("newObj :: ", newObj); // newObj ::  { name: 'Dravinanshu', age: 26 }

// ########## DEEP COPY ###########
// Depp copy: If you want to any changes in variable, it will be not changes in original variable address.

// 1. way :- it is copy the value means here follow the deep copy difinition.
// const newObj = { ...obj };
// newObj.name = "dravinanshu";

// console.log("obj", obj); // orinal memory value is :: //obj { name: 'ashu', age: 26 }
// console.log("newObj", newObj); // copy value then overwrite our new value // newObj { name: 'dravinanshu', age: 26 }

// 2. way :- it is cppy the value here means follow the deep copy concept.
const newObj = Object.assign({}, obj);
newObj.name = "dravinanshu mishra";

console.log("obj", obj); // obj { name: 'ashu', age: 26 }
console.log("newObj", newObj); // newObj { name: 'dravinanshu mishra', age: 26 }

// 3. Note: In Shallow copy: When you copy any object, either through object.assign () method or spread operator, in such cases top level property gets copied but the property of any nested object again passes the reference instead of getting copied.
