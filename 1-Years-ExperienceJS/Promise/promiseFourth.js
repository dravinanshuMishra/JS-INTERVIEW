// promise have been two parts. 1. create 2. consume.
const promiseFourth = new Promise(function(resolved, reject){
    let error = false;

    if(!error) {
        resolved({username: "Dravinanshu Mishra", age: "26", email: "Dravinanshu97@gmail.com"});
    } else {
        reject({message: "Something went wrong."});
    }
});

// 2. consumed a promise.
promiseFourth.then(function(data){
    if(data) {
        return data.username;
    }
}).then(function(username){
    console.log(username); // Dravinanshu Mishra
}).catch(function(error){
    console.log("Error :: ", error.message);
}).finally(function(){
    console.log("Finally called either resolved or reject."); //Finally called either resolved or reject.
});