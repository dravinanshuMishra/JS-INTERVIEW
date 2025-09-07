// 1. create custom deep copy achieve.
const obj = {
  name: "Dravinanshu Mishra",
  age: 26,
  social: {
    facebook: {
      account1: "dravinanshu@facebook.com",
    },
    twitter: {
      free: {
        account1: "dravinanshu@freetwitter.com",
      },
      paid: {
        account1: "dravinanshu@paidtwitter.com",
      },
    },
  },
};

const myObj = { name: "ashu", age: 27 };

// create custom deepCopy object.
function customDeepCopy(obj) {
  // step: 1. check if obj inside data not a object or not an array then in this case return.
  if (typeof obj !== "object" || obj === null) {
    return obj; // Return the value itself, not `undefined`.
  }

  let copydata = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    // console.log(obj[keys[i]]); //values only.
    // console.log(keys[i]); // keys only
    copydata[keys[i]] = customDeepCopy(obj[keys[i]]); // Make sure to return the result of recursive call.
  }

  return copydata;
}

let copy = customDeepCopy(obj);
copy.social.facebook.account1 = "Dravinanshu1998@facebook.com";
console.log("copy object :: ", copy);
console.log("original object :: ", obj);
