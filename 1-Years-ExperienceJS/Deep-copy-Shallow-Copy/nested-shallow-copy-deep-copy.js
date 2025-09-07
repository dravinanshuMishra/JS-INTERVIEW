// // 3. Note: In Shallow copy: When you copy any object, either through object.assign () method or spread operator, in such cases top level property gets copied but the property of any nested object again passes the reference instead of getting copied.

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

// deep copy perform inside deep do not get any refence of any object (shallow copy).
const newObj = JSON.parse(JSON.stringify(obj));
newObj.social.facebook.account1 = "ashu@facebook.com";

console.log("Original object", obj);
console.log("new object :: ", newObj);
