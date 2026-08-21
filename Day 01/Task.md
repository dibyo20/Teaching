# JavaScript Methods & Objects — Assignment

## Topics Covered

* `trim()`
* Method Chaining
* `slice()`
* `replace()`
* `replaceAll()`
* `repeat()`
* `splice()`
* `sort()`
* Objects
* Nested Objects
* `Math` Object
* `Math.random()`

---

# 🟢 Level 1 — Basic Practice

### Q1. Trim Username

Create a variable:

```js
let username = "     Dibyo     ";
```

Remove the extra spaces from the beginning and end and print the cleaned username.

**Expected Output:**

```text
Dibyo
```

---

### Q2. Uppercase + Trim

Given:

```js
let name = "     javascript     ";
```

Using **method chaining**, remove the spaces and convert the string to uppercase.

**Expected Output:**

```text
JAVASCRIPT
```

---

### Q3. Slice a String

Given:

```js
let message = "Hello JavaScript";
```

Print only:

```text
JavaScript
```

Use `slice()`.

---

### Q4. Slice from the End

Given:

```js
let word = "Programming";
```

Use `slice()` with a **negative index** to print:

```text
ming
```

---

### Q5. Replace a Word

Given:

```js
let sentence = "I love Java";
```

Replace `"Java"` with `"JavaScript"`.

**Expected Output:**

```text
I love JavaScript
```

---

### Q6. Replace All Occurrences

Given:

```js
let sentence = "Java is powerful. Java is popular. Java is everywhere.";
```

Replace every occurrence of `"Java"` with `"JavaScript"`.

---

### Q7. Repeat a String

Create:

```js
let star = "*";
```

Print the star 10 times using `repeat()`.

**Expected Output:**

```text
**********
```

---

# 🟡 Level 2 — Array Methods

### Q8. Remove Elements Using Splice

Given:

```js
let fruits = ["apple", "banana", "mango", "orange", "grapes"];
```

Remove `"mango"` using `splice()`.

**Expected Array:**

```js
["apple", "banana", "orange", "grapes"]
```

---

### Q9. Add Elements Using Splice

Given:

```js
let fruits = ["apple", "banana", "grapes"];
```

Insert `"mango"` and `"orange"` between `"banana"` and `"grapes"`.

**Expected Array:**

```js
["apple", "banana", "mango", "orange", "grapes"]
```

---

### Q10. Replace an Array Element

Given:

```js
let fruits = ["apple", "banana", "mango", "grapes"];
```

Replace `"mango"` with `"orange"` using `splice()`.

---

### Q11. Remove Multiple Elements

Given:

```js
let numbers = [10, 20, 30, 40, 50, 60];
```

Remove `30`, `40`, and `50` using a single `splice()` operation.

**Expected Array:**

```js
[10, 20, 60]
```

---

### Q12. Sort Numbers

Given:

```js
let numbers = [50, 10, 40, 20, 30];
```

Sort the numbers in ascending order.

**Expected Output:**

```js
[10, 20, 30, 40, 50]
```

---

### Q13. Sort in Descending Order

Using the same array, sort it in descending order.

**Expected Output:**

```js
[50, 40, 30, 20, 10]
```

---

### Q14. Understand Default Sort

Predict the output **before running the code**:

```js
let numbers = [10, 2, 30, 4, 5];

console.log(numbers.sort());
```

Then explain why the result is different from normal numerical sorting.

---

# 🟡 Level 3 — Objects

### Q15. Student Object

Create an object called `student` containing:

* `name`
* `age`
* `course`
* `marks`
* `isPassed`

Print all the values.

---

### Q16. Update Object Properties

Given:

```js
const student = {
    name: "John",
    age: 20,
    marks: 75
};
```

Change:

```text
age → 21
marks → 85
```

Then print the updated object.

---

### Q17. Add a New Property

Given:

```js
const student = {
    name: "John",
    age: 20
};
```

Add:

```js
course: "Computer Science"
```

Print the object.

---

### Q18. Delete a Property

Given:

```js
const student = {
    name: "John",
    age: 20,
    grade: "A",
    city: "Kolkata"
};
```

Delete the `city` property.

---

# 🟠 Level 4 — Nested Objects

### Q19. Student Database

Create a nested object:

```js
const classInfo = {
    student1: {
        name: "Rahul",
        age: 20,
        grade: "A"
    },
    student2: {
        name: "Priya",
        age: 21,
        grade: "A+"
    },
    student3: {
        name: "Amit",
        age: 19,
        grade: "B"
    }
};
```

Print:

```text
Priya 21 A+
```

using object property access.

---

### Q20. Access Nested Data

Using the same object, print only:

1. Student 1's name
2. Student 2's grade
3. Student 3's age

---

### Q21. Update Nested Object

Change Student 1's grade from:

```text
A
```

to:

```text
A+
```

Then print the updated Student 1 object.

---

### Q22. Add Property to Nested Object

Add a `city` property to Student 2:

```js
city: "Kolkata"
```

Then print Student 2's complete information.

---

# 🟠 Level 5 — Math Object

### Q23. Absolute Value

Use `Math.abs()` to convert:

```text
-25
```

into:

```text
25
```

---

### Q24. Maximum and Minimum

Given:

```js
let a = 10;
let b = 25;
let c = 15;
let d = 40;
```

Find:

1. Maximum number
2. Minimum number

Use `Math.max()` and `Math.min()`.

---

### Q25. Square Root

Find the square root of:

```text
144
```

using `Math.sqrt()`.

---

### Q26. Power

Calculate:

```text
2⁵
```

using `Math.pow()`.

---

### Q27. Rounding

For each number, determine the output:

```js
console.log(Math.round(4.4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));

console.log(Math.floor(4.1));
console.log(Math.floor(4.9));
```

**Important:** Predict the output before executing.

---

# 🔴 Level 6 — Math.random()

### Q28. Random Number 1–10

Generate a random integer between:

```text
1 and 10
```

using:

```js
Math.random()
```

---

### Q29. Random Number 1–100

Generate a random integer between:

```text
1 and 100
```

---

### Q30. Random Number 50–100

Generate a random integer between:

```text
50 and 100
```

---

### Q31. Random Dice Roll

Simulate rolling a six-sided dice.

Every time the program runs, it should generate:

```text
1, 2, 3, 4, 5, or 6
```

---

# 🔴 Level 7 — Mixed Practice

### Q32. Username Generator

Given:

```js
let name = "     Dibyo Banerjee     ";
```

Create a username by:

1. Removing extra spaces
2. Converting the name to lowercase
3. Replacing the space with `_`

**Expected Output:**

```text
dibyo_banerjee
```

---

### Q33. Sentence Cleaner

Given:

```js
let sentence = "     I love Java. Java is powerful. Java is popular.     ";
```

Perform the following:

1. Remove spaces from both ends
2. Replace all `"Java"` with `"JavaScript"`
3. Print the final sentence

**Expected Output:**

```text
I love JavaScript. JavaScript is powerful. JavaScript is popular.
```

---

### Q34. Random OTP Generator

Generate a random **4-digit OTP**.

Example:

```text
4827
```

The OTP should be different on different executions.

**Hint:** Think about `Math.random()`, `Math.floor()`, and the range `1000–9999`.

---

### Q35. Random Username Number

Given:

```js
let username = "Dibyo";
```

Generate a username such as:

```text
Dibyo472
Dibyo819
Dibyo125
```

The last three digits should be random.

---

### Q36. Student Result Object

Create:

```js
const student = {
    name: "Dibyo",
    marks: 82
};
```

Using `Math` methods:

* If marks ≥ 90 → `"A+"`
* If marks ≥ 80 → `"A"`
* If marks ≥ 70 → `"B"`
* Otherwise → `"C"`

Add the calculated grade to the object.

**Expected Object:**

```js
{
    name: "Dibyo",
    marks: 82,
    grade: "A"
}
```

---

### Q37. Array Manipulation Challenge

Given:

```js
let fruits = [
    "apple",
    "banana",
    "mango",
    "orange",
    "banana",
    "grapes"
];
```

Perform the following:

1. Remove the first `"banana"`
2. Add `"pineapple"` after `"mango"`
3. Replace all `"banana"` values with `"watermelon"`
4. Sort the array alphabetically

---

### Q38. Mini Student Database

Create a nested object containing **3 students**.

Each student should have:

* name
* age
* marks
* grade
* city

Then:

1. Print Student 1's name
2. Print Student 2's marks
3. Change Student 3's grade
4. Add a new property `isPassed`
5. Print the complete object

---

# ⭐ Challenge Questions

### Q39. Random Number Guessing

Generate a random number between `1–10`.

Create a variable:

```js
let guess = 7;
```

Check whether the guess matches the generated number.

Print:

```text
Correct Guess!
```

or

```text
Wrong Guess!
```

---

### Q40. Random Password Generator

Generate a simple password using:

* uppercase letters
* lowercase letters
* numbers

The password should contain **8 characters**.

You can use the string methods you've learned so far along with `Math.random()`.

---

## 🎯 Practice Rule

For each question:

1. **First predict the output** if the question asks for output.
2. Write the code **without looking at the previous examples**.
3. Run the code and check your answer.
4. If you make a mistake, understand **why**, rather than just correcting the code.

### Recommended Order

```text
Q1–Q7      → String Methods
Q8–Q14     → Array Methods
Q15–Q22    → Objects
Q23–Q27    → Math
Q28–Q31    → Math.random()
Q32–Q38    → Mixed Practice
Q39–Q40    → Challenges
```

**Goal:** Be able to write these methods from memory and understand **when and why** to use each one. 🚀
