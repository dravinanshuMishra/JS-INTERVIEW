const users = [
    {firstName: "akashy", lastName: "saini", age: 26},
    {firstName: "John", lastName: "Doe", age: 26},
    {firstName: "Alice", lastName: "Smith", age: 28},
    {firstName: "Emily", lastName: "Johnson", age: 35},
    {firstName: "Michael", lastName: "Brown", age: 40},
    {firstName: "Sophia", lastName: "Davis", age: 32},
    {firstName: "William", lastName: "Miller", age: 40},
    {firstName: "Olivia", lastName: "Wilson", age: 26},
    {firstName: "James", lastName: "Moore", age: 28},
    {firstName: "Emma", lastName: "Taylor", age: 35}
];

// give me the output like this "akshay saini".
console.log(users.map((value)=> value.firstName + " "+ value.lastName));
// [
//     'akashy saini', 
//     'John Doe',     
//     'Alice Smith',  
//     'Emily Johnson',
//     'Michael Brown',
//     'Sophia Davis',
//     'William Miller',
//     'Olivia Wilson',
//     'James Moore',
//     'Emma Taylor'
// ]


// find how many people same age.
const output3 = users.reduce((accumulator, currentValue)=>{
    if(accumulator[currentValue.age]) {
        accumulator[currentValue.age] = ++accumulator[currentValue.age];
    } else {
        accumulator[currentValue.age] = 1;
    }
    return accumulator;
},{});

console.log(output3); //{ '26': 3, '28': 2, '32': 1, '35': 2, '40': 2 }


// first name of all people whos age is 26.
const output = users.filter((value)=> value.age < 30 ).map((x)=> x.firstName);
console.log(output);

// first name of all people whos age is 26, find but using reduce.
const output2 = users.reduce((acc, curr) => {
    if (curr.age  < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output2); // [ 'akashy', 'John', 'Alice', 'Olivia', 'James' ]