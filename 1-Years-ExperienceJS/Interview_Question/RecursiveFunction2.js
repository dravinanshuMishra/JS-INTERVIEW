const myFunction = (num, num2 = 1) => {

    // console.log(num);
    // num++;
    // if(num <= 10) {
    //     myFunction(num);
    // }
  


    if(num2 > num) {
        return;
    }

    console.log(num2);
    myFunction(num, num2 + 1);
}

myFunction(10);
