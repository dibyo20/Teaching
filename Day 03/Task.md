# JavaScript Practice Assignments — Beginner Level

Based on: Arrow Functions, Timers, `this` Keyword, Array Methods, Default Parameters, Spread/Rest, Destructuring

Complete each question in a `.js` file. Use `console.log()` to display your results. Try to solve without looking at the answers first!

---

## 1. Arrow Functions

1. Write a regular function `multiply(a, b)` that returns the product of two numbers. Now rewrite it as an arrow function with an explicit `return`, and again using **implicit return**.
2. Write an arrow function `isEven(num)` that returns `true` if a number is even, `false` otherwise.
3. Convert this regular function into an arrow function:
   ```js
   function greet(name) {
     return "Hello, " + name + "!";
   }
   ```
4. **Challenge:** Write an arrow function `square` that takes no parameters but returns a function that squares any number passed to it (i.e., `square()(5)` should return `25`).

---

## 2. setTimeout / setInterval

5. Use `setTimeout` to print `"Welcome!"` to the console after **2 seconds**.
6. Predict the output order of the following code, then run it to check your answer:
   ```js
   console.log("A");
   setTimeout(() => console.log("B"), 0);
   console.log("C");
   ```
7. Use `setInterval` to print the numbers `1, 2, 3, 4, 5` (one per second), then automatically stop using `clearInterval` after the 5th number.
8. **Challenge:** Build a simple countdown timer that prints `"10", "9", "8" ... "1", "Liftoff!"` at 1-second intervals.

---

## 3. `this` Keyword with Arrow Functions

9. Create an object `car` with properties `brand` and a method `showBrand` written as a **regular function** that logs `this.brand`. Confirm it correctly logs the brand name.
10. Now add a second method `showBrandArrow` written as an **arrow function** that also tries to log `this.brand`. Run both methods and explain in a comment why the output differs.
11. **Challenge:** Given the object below, fix the bug so `getScore` correctly logs the score (hint: think about which function type to use):
    ```js
    const player = {
      score: 100,
      getScore: () => {
        console.log(this.score);
      }
    };
    ```

---

## 4. Array Methods (`forEach`, `map`, `filter`, `every`, `some`, `reduce`)

Given: `let numbers = [4, 8, 15, 16, 23, 42];`

12. Use `forEach` to print each number multiplied by 3.
13. Use `map` to create a new array `squared` containing the square of each number.
14. Use `filter` to create a new array `greaterThanTen` containing only numbers greater than 10.
15. Use `every` to check if **all** numbers are greater than 0.
16. Use `some` to check if **at least one** number is divisible by 5.
17. Use `reduce` to find the **sum** of all numbers.
18. **Challenge:** Use `reduce` to find the **maximum** value in the array without using `Math.max`.
19. **Challenge:** Chain `filter` and `map` together to get the squares of only the even numbers in the array.

---

## 5. Default Parameters

20. Write a function `greetUser(name, greeting = "Hello")` that logs `"Hello, <name>!"` if no greeting is passed, or a custom greeting otherwise.
21. Write a function `calculatePrice(price, tax = 0.05)` that returns the price including tax.
22. **Challenge:** Write a function `createProfile(name, age = 18, city = "Unknown")` and call it three different ways — with 1, 2, and 3 arguments — to show how defaults kick in.

---

## 6. Spread Operator

23. Given `let arr = [3, 7, 1, 9, 2];`, use the spread operator with `Math.max` and `Math.min` to find the largest and smallest values.
24. Use the spread operator to combine two arrays `let fruits = ["apple", "banana"];` and `let veggies = ["carrot", "peas"];` into one array called `food`.
25. Use the spread operator to create a **copy** of an object `let user = { name: "Amit", age: 25 };` called `userCopy`, then change `userCopy.age` and confirm `user.age` is unaffected.
26. **Challenge:** Use spread to split a string `"javascript"` into an array of individual characters.

---

## 7. Rest Parameters

27. Write a function `sumAll(...nums)` that returns the sum of any number of arguments passed to it.
28. Write a function `introduce(firstName, lastName, ...hobbies)` that logs the full name and then lists all hobbies passed in.
29. **Challenge:** Write a function `findLongest(...words)` that returns the longest string among all arguments passed.

---

## 8. Destructuring

Given:
```js
const student = {
  name: "Riya",
  age: 20,
  email: "riya@example.com",
  course: "Computer Science"
};
const marks = [88, 92, 79, 85];
```

30. Destructure `name` and `course` from `student` into two variables.
31. Destructure `email` from `student` but rename it to `contact` while destructuring.
32. Destructure the **first two** values from `marks` into `mark1` and `mark2`.
33. **Challenge:** Destructure `student` and provide a default value for a property that doesn't exist, e.g. `grade = "Not Assigned"`.
34. **Challenge:** Write a function `printStudent({ name, age })` that accepts a destructured object directly as a parameter and logs `"<name> is <age> years old"`. Call it with the `student` object.

---

## Bonus: Mixed Concepts

35. Write an arrow function `summarizeStudent` that takes a student object, destructures `name` and `age` from it using default parameter destructuring, and returns a formatted string.
36. Combine `map` and arrow functions to convert an array of student objects (each with `name` and `marks`) into an array of strings like `"Riya scored 88"`.
37. Use `setTimeout` inside a `forEach` loop over an array of names to print each name one after another, 1 second apart.

---

### How to Submit
- Save your answers in a single file: `assignment-solutions.js`
- Add comments above each answer indicating the question number (e.g., `// Q1`)
- Test each answer using `console.log()` before submitting
