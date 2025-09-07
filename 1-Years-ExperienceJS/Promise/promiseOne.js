// we can create promise two parts: 1. create a promise 2. consume a promise.

// 1. create a promise.
const promiseOne = new Promise(function(resolved, reject){
    // inside create promise we can perform.
    //  1. async task.
    //  2. DB calls, network calls, cryptography calls.
    setTimeout(function(){
        console.log("Async Task is completed");
        resolved();
    },1000)
});


// 2. consume a promise.
promiseOne.then(function(){
   console.log("Promise is consumed..."); // Promise is consumed...
   // if our promise is resolved so, then () method is called.
});

