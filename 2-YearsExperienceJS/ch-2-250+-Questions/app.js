//  1.
async function PromiseClick() {
  let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  });

  // console.log(myPromise);
  myPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// 2. ANOTHER PROMISE RESOLVED.
const myBtn = document.getElementById("myBtn");
const myBtns = document.getElementById("myBtns");

myBtn.addEventListener("click", () => {
  const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("The promise is resolved");
    } else {
      reject("The promise will reject");
    }
  });

  myPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

myBtns.addEventListener("click", () => {
  const myPromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
      resolve("The promise is resolved");
    } else {
      reject("The promise will reject");
    }
  });
  myPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

