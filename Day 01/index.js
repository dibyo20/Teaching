// trim() - removes whitespace from both ends of a string.
// let msg = "              Hello World                  "
// console.log(msg.trim()); // trim makes a new string without the spaces and does not change the original string.
// console.log(msg);


// method chaining - calling multiple methods on a single line.
// let = msg = "      apple         "
// console.log(msg.toUpperCase().trim());


// slice() - extracts a part of a string and returns it as a new string, without modifying the original string.
// let msg = "Hello World Coding"
// console.log(msg.slice(6));
// console.log(msg.slice(-6));


// replace() - changes the first occurence of the string.
// let msg = "Hello World World"
// console.log(msg.replace("World", "JavaScript"));

// replaceAll() - changes all occurences of the string.
// console.log(msg.replaceAll("World", "JavaScript"));


// repeat() - repeats the string a certain number of times.
// let msg = "Mango"
// console.log(msg.repeat(5));


// splice() - adds or removes items from an array.
// let arr = ["mango", "apple", "banana", "grapes", "dragonfruit"]
// console.log(arr.splice(0, 3)); // ['mango', 'apple', 'banana']
// console.log(arr); // ['grapes', 'dragonfruit']
// console.log(arr.splice(1, 0, "orange", "pineapple")); 
// console.log(arr); // ['grapes', 'orange', 'pineapple', 'dragonfruit']


// sort() - sorts the array in ascending order.
// let arr = [5, 3, 1, 4, 2]
// console.log(arr.sort()); // sorts in ascending order by default
// console.log(arr.sort((a, b) => a - b)); // ascending order
// console.log(arr.sort((a, b) => b - a)); // descending order




// Objects 

// const student = {
//     name: "John",
//     age: 20,
//     grade: "A",
//     isEnrolled: true,
// }
// console.log(student.name + " " + student.age + " " + student.grade);



// Nested Objects - Objects within Objects

// const classInfo = {
//     student1: {
//         name: "Adrija",
//         age: 20,
//         grade: "A",
//     },
//     student2: {
//         name: "Diganta",
//         age: 21,
//         grade: "A+",
//     },
//     student3: {
//         name: "Saif",
//         age: 22,
//         grade: "B+",
//     }
// }
// console.log(classInfo.student1.name + " " + classInfo.student1.age + " " + classInfo.student1.grade);
// console.log(classInfo.student2.name + " " + classInfo.student2.age + " " + classInfo.student2.grade);
// console.log(classInfo.student3.name + " " + classInfo.student3.age + " " + classInfo.student3.grade);


// Maths objects
// console.log(Math.abs(-5));
// console.log(Math.max(5, 10, 15, 20));
// console.log(Math.min(5, 10, 15, 20));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 3));
// console.log(Math.round(2.4));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(2.7));

// Random method by default generates a number between 0 and 1. 
// let num = Math.random();
// num = num * 10;
// console.log(Math.floor(num) + 1); // generates a random number between 1 and 10

// Random method shortcut
// console.log(Math.floor(Math.random() * 10) + 1); // generates a random number between 1 and 10
