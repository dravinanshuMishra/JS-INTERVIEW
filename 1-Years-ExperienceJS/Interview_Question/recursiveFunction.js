const MyFlat = (myArray) => {
    let newArr = [];
    myArray.forEach(element => {
        // console.log(typeof element);
        console.log(element);
        if(Array.isArray(element)) {
            newArr = newArr.concat(MyFlat(element));
        } else {
            newArr.push(element);
        }
    });
    return newArr;
 }
 
 var nestedArray = [1, 2, [3, 4], [5, [6, [7,8]]]];
 console.log(MyFlat(nestedArray));
 