// Global Scope & Functional Scope
// let sum = 50  // Global Scope
// function add(a, b) {
//     let sum = a + b // Functional Scope
//     console.log(sum)
// }
// add(1, 2)
// console.log(sum)

// Block Scope
// {
//     let a = 10
// }
// console.log(a)


// Lexical Scope
// function outer() {
//     let a = 10
//     let b = 20
//     function inner() {
//         let c = 30 // Local Scope
//         console.log(a, b, c) 
//     }
//     inner()
//     console.log(a, b, c) 
// }
// outer()


// Higher Order Function - A function that takes another function as an argument or returns a function as a result.

// function multiGreet(func, n) {
//     for (let i = 0; i < n; i++) {
//         func()
//     }
// }
// let greet = function () {
//     console.log("Hello World")
// }
// multiGreet(greet, 5)

// function oddEvenTest(request) {
//     if (request == "odd") {
//         return function (num) {
//             console.log(!(num % 2 == 0))
//         }
//     } else if (request == "even") {
//         return function (num) {
//             console.log(num % 2 == 0)
//         }
//     } else {
//         console.log("Invalid Request")
//     }
// }
// let request = "odd"
// let func = oddEvenTest(request)
// func(5)


// Methods - A function that is a property of an object
// const calculator = {
//     add: function (a, b) {
//         return a + b
//     },
//     sub: function (a, b) {
//         return a - b
//     },
//     mul: function (a, b) {
//         return a * b
//     },
//     div: function (a, b) {
//         return a / b
//     }
// };
// console.log(calculator.add(2, 3))
// console.log(calculator.sub(5, 2))
// console.log(calculator.mul(4, 5))
// console.log(calculator.div(10, 5))


// This Keyword - Refers to the object that is calling the function
// const student = {
//     sub1: 90,
//     sub2: 80,
//     sub3: 70,
//     getSum() {
//         let sum = (this.sub1 + this.sub2 + this.sub3)
//         console.log(sum)
//         console.log(this) // this refers to the student object
//     }
// }
// console.log(this) // undefined because this refers to the window object
// student.getSum()

