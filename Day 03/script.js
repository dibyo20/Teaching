// Arrow Function - to write functions in a more concise way
// function add(a,b){
//     return a+b;
// }

// const func = (arg1, arg2) => { function defination}

// const add = (a, b) => {
//     console.log(a + b);
// }
// const add1 = (a, b) => { return a + b };
// const add2 = (a, b) => a + b;  // Implicit return

// add(2, 3);
// console.log(add1(2, 3));
// console.log(add2(2, 4));




// setTimeout - to execute a function after a certain time
// console.log("Hello");

// setTimeout(() => {
//     console.log("Teachers")
// }, 500);

// for (let i = 0; i < 1000; i++) {
//     console.log("----------");
// }

// setTimeout(() => {
//     console.log("Students")
// }, 200);

// console.log("World");




// setInterval - to execute a function repeatedly after a certain time
// let id = setInterval(() => {
//     console.log("Hello");
// }, 500);

// clearInterval - to stop the execution of a function repeatedly after a certain time
// setTimeout(() => {
//     clearInterval(id);
// }, 10000);




// this keyword with arrow functions - arrow functions do not have their own this keyword, they inherit it from the parent scope i.e. window/global object.
// const student = {
//     name: "John",
//     marks: 80,
//     getName: function () {
//         console.log(this); // this refers to the student object
//     },
//     getMarks: () => {
//         console.log(this); // this refers to the window/global object
//     }
// }
// student.getName();
// student.getMarks();




// Array Methods

// forEach - to execute a function for each element in an array
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((elem) => {
//     console.log(elem*2);
// });


// map - to create a new array by executing a function for each element in an array
// let arr = [1, 2, 3, 4, 5];
// let double = arr.map((elem) => {
//     return elem*2;
// });
// console.log(double);


// filter - to create a new array by executing a function for each element in an array and returning only the elements that satisfy the condition
// let arr = [1, 2, 3, 4, 5];
// let even = arr.filter((elem) => {
//     return elem%2 === 0;
// });
// console.log(even);


// Every - to check if all elements in an array satisfy a condition and returns true or false
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.every((elem) => (elem % 2 === 0))) // false


// Some - to check if any element in an array satisfies a condition and returns true or false
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.some((elem) => (elem % 2 === 0))) // true


// Reduce - to execute a function for each element in an array and return a single value
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((saif, diganta) => {
//     return saif + diganta;
// });
// console.log(sum);


// Default parameters - to set a default value for a parameter if no value is passed
// function add(a, b, c = 5) {
//     return a + b + c;
// }
// console.log(add(5, 10));


// Spread - to pass an array as individual arguments to a function
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Math.min(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]));
// console.log(Math.min(...arr));

// let chars = [..."hello"];
// console.log(chars); // ['h', 'e', 'l', 'l', 'o']

// const data = {
//     email: "saif@gmail.com",
//     password: "123456"
// }
// const copyData = { ...data };
// console.log(copyData);


// Rest - to pass an indefinite number of arguments as an array to a function
// function print(a, b, ...rest) {
//     console.log(a, b);
//     for (let i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }
// print(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// Destructuring - to extract values from arrays or properties from objects into distinct variables

// let names = ["Saif", "Diganta", "Mohan", "Prem"];
// let copyNames = names;
// console.log(copyNames);
// let [name1, name2] = names; // destructuring
// console.log(name1, name2);

// const student = {
//     name: "Diganta",
//     age: 21,
//     email: "diganta@gmail.com",
//     password: "123456",
//     username: "diganta123"
// }

// let { email, password, username } = student;
// let { username: a, email: c, password: d } = student;
// console.log(a, c, d);
// console.log(email, password, username);

// let { name: username } = student;
// console.log(username);

// let student1 = student;
// console.log(student1);
