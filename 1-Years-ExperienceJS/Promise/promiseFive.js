// The promise have two parts. 1. create a promise 2. consumed a promise.

const promiseFive = new Promise((resolved, reject)=>{
   setTimeout(()=>{
    let error = false;

    if(!error) {
        resolved({username: "Javascript", password: "1234567"});
    } else {
        reject({message : "Something went wrong."});
    }
   },2000);
});

// consumed a promise with async await function aslo.
async function promiseFiveConsumed() {
    try {
        let respone = await promiseFive;
        console.log(respone); // { username: 'Javascript', password: '1234567' }
    } catch (error) {
       console.log(error);  // { message: 'Something went wrong.' }
    }
}

// called this function.
promiseFiveConsumed();