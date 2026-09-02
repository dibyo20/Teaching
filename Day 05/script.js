// syncronous function
// function syncFunction() {
//     console.log("This is a synchronous function");
// }

// // async function
// async function asyncFunction() {
//     console.log("This is an asynchronous function");
//     syncFunction();
//     console.log("This is after the synchronous function");
// }

// asyncFunction();



// Call Stack
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();



// Promises - pending, fulfilled, rejected
// function savetoDB(data) {
//     return new Promise((success, failure) => {
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//         console.log(internetspeed);
//         if (internetspeed > 5) {
//             success("Success: Data saved successfully");
//             // console.log("Success: Data saved successfully");
//         } else {
//             failure("Failure: weak internet connection");
//             // console.log("Failure: weak internet connection");
//         }
//     })
// }


// then() - when promise is fulfilled
// catch() - when promise is rejected
// let request = savetoDB("Hello World");
// request
//     .then(() => {
//         console.log("Data saved successfully");
//         return savetoDB("A");
//     })
//     .then(() => {
//         console.log("Data2 saved successfully");
//         return savetoDB("B");
//     })
//     .then(() => {
//         console.log("Data3 saved successfully")
//     })
//     .catch(() => {
//         console.log("Weak internet connection");
//     })


// fetch() - to fetch data from server
// async function getData() {
//     try{
//         let response = await fetch("https://api.github.com/users");
//         let data = await response.json();
//         console.log(data);
//     }catch(error) {
//        console.log(error);
//        console.log("Weak internet connection");
//     }finally {
//         console.log("Finally block");
//     }
// }

// getData();



// Query Strings
// search?q=apple
// https://www.google.com/search?q=apple














