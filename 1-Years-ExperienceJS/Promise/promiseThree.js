// promise have two parts 1. create 2. consume.
const promiseThree = new Promise(function(resolved, reject){
    setTimeout(function(){
        resolved({username: "Dravinanshu Mishra", age: "26", email: "dravinanshu97@gmail.com"});
    },1000);
})

// consume a promise.
promiseThree.then(function(data){
    console.log(data); // {username: "Dravinanshu Mishra", age: "26", email: "dravinanshu97@gmail.com"}
})

