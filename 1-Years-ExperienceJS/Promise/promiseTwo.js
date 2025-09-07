// promise creates two parts. 1. first is create 2. second is consumed.

new Promise(function(resolved, reject){
    setTimeout(function(){
        console.log("Promise is created.."); // Promise is created..
        resolved();
    }, 2000);
}).then(function(){
    console.log("Promise is consumed..."); // Promise is consumed...
})