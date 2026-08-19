# JavaScript Fundamentals — Assignment Questions

## Topics Covered

* Global Scope
* Function / Functional Scope
* Block Scope
* Lexical Scope
* Higher-Order Functions
* Functions as Arguments
* Functions as Return Values
* Object Methods
* `this` Keyword

---

# Part 1 — Scope

### Q1. Global vs Function Scope

Predict the output:

```javascript
let x = 10;

function test() {
    let x = 20;
    console.log(x);
}

test();
console.log(x);
```

**Task:** Explain why both `console.log()` statements produce different values.

---

### Q2. Variable Shadowing

What will be printed?

```javascript
let name = "Dibyo";

function greet() {
    let name = "John";
    console.log(name);
}

greet();
console.log(name);
```

**Task:** Explain what variable shadowing means.

---

### Q3. Block Scope

Predict the output:

```javascript
let x = 100;

{
    let x = 200;
    console.log(x);
}

console.log(x);
```

Then answer:

> Why doesn't the `x` inside the block change the outer `x`?

---

### Q4. `let` and Block Scope

What happens here?

```javascript
if (true) {
    let a = 10;
    const b = 20;
}

console.log(a);
console.log(b);
```

**Task:** Explain the error instead of simply stating the output.

---

### Q5. Scope Challenge

Predict the output:

```javascript
let a = 10;

function outer() {
    let a = 20;

    if (true) {
        let a = 30;
        console.log(a);
    }

    console.log(a);
}

outer();
console.log(a);
```

---

# Part 2 — Lexical Scope

### Q6. Basic Lexical Scope

Predict the output:

```javascript
let x = 10;

function outer() {
    let y = 20;

    function inner() {
        console.log(x);
        console.log(y);
    }

    inner();
}

outer();
```

**Task:** Explain how `inner()` is able to access `x` and `y`.

---

### Q7. Inner Function Access

What will happen?

```javascript
function outer() {
    let a = 10;

    function inner() {
        let b = 20;
        console.log(a);
        console.log(b);
    }

    inner();

    console.log(a);
    console.log(b);
}

outer();
```

**Task:**

1. Which variables are accessible?
2. Which variable causes an error?
3. Why?

---

### Q8. Lexical Scope Challenge

Predict the output:

```javascript
let a = 1;

function outer() {
    let a = 2;

    function inner() {
        let a = 3;
        console.log(a);
    }

    inner();
}

outer();
console.log(a);
```

---

### Q9. Can Outer Access Inner?

What happens?

```javascript
function outer() {

    function inner() {
        let secret = 100;
    }

    inner();

    console.log(secret);
}

outer();
```

Explain why the outer function cannot access `secret`.

---

# Part 3 — Higher-Order Functions

### Q10. Function as an Argument

Create a function:

```javascript
function repeatTask(task, n) {

}
```

It should execute the `task` function `n` times.

Example:

```javascript
let sayHello = function () {
    console.log("Hello");
};

repeatTask(sayHello, 5);
```

Expected:

```text
Hello
Hello
Hello
Hello
Hello
```

---

### Q11. Calculator Using Higher-Order Function

Create:

```javascript
function calculate(a, b, operation) {

}
```

The `operation` function should determine what calculation is performed.

Example:

```javascript
calculate(10, 5, add);
calculate(10, 5, subtract);
calculate(10, 5, multiply);
```

Create the three operation functions yourself.

---

### Q12. Even / Odd Function Factory

Create a function:

```javascript
function checkNumber(type) {

}
```

It should **return a function**.

Example:

```javascript
let checkEven = checkNumber("even");

checkEven(10);  // true
checkEven(7);   // false
```

Similarly:

```javascript
let checkOdd = checkNumber("odd");
```

---

### Q13. Greater Than Function Factory

Create:

```javascript
function greaterThan(n) {

}
```

It should return a function that checks whether another number is greater than `n`.

Example:

```javascript
let greaterThan10 = greaterThan(10);

console.log(greaterThan10(15)); // true
console.log(greaterThan10(5));  // false
```

---

### Q14. Custom Filter Function

Create your own version of `filter()`:

```javascript
function myFilter(arr, condition) {

}
```

Example:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let result = myFilter(numbers, function(num) {
    return num % 2 === 0;
});

console.log(result);
```

Expected:

```javascript
[2, 4, 6]
```

**Do not use the built-in `.filter()` method.**

---

# Part 4 — Object Methods

### Q15. Student Object

Create a `student` object containing:

* `name`
* `marks1`
* `marks2`
* `marks3`
* `getTotal()`
* `getAverage()`

Example:

```javascript
student.getTotal();
student.getAverage();
```

---

### Q16. Bank Account

Create an object:

```javascript
const account = {
    balance: 5000,

    deposit(amount) {
        // your code
    },

    withdraw(amount) {
        // your code
    },

    checkBalance() {
        // your code
    }
};
```

Implement all three methods.

---

### Q17. Rectangle Object

Create an object containing:

```javascript
length
width
```

and methods:

```javascript
area()
perimeter()
```

Example:

```javascript
rectangle.area();
rectangle.perimeter();
```

---

# Part 5 — `this` Keyword

### Q18. Basic `this`

Predict the output:

```javascript
const person = {
    name: "Dibyo",

    introduce() {
        console.log(this.name);
    }
};

person.introduce();
```

**Task:** Explain what `this` refers to.

---

### Q19. Multiple Properties with `this`

Create:

```javascript
const employee = {
    name: "John",
    salary: 50000,
    bonus: 10000,

    getTotalSalary() {
        // use this
    }
};
```

Return:

```text
60000
```

---

### Q20. `this` and Object Methods

Predict the output:

```javascript
const user = {
    name: "Dibyo",

    greet() {
        console.log("Hello " + this.name);
    }
};

user.greet();
```

Then answer:

> Why is `this.name` better than directly writing `user.name` inside the method?

---

# Part 6 — Mixed Challenges 🔥

### Q21. Scope + Higher-Order Function

Predict the output:

```javascript
let x = 10;

function outer() {
    let x = 20;

    function test() {
        console.log(x);
    }

    return test;
}

let func = outer();

func();
```

**Important:** Explain why `func()` prints `20` even though `outer()` has already finished executing.

---

### Q22. Function Factory

Create:

```javascript
function multiplier(n) {

}
```

It should return a function that multiplies any number by `n`.

Example:

```javascript
let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

### Q23. Object + Higher-Order Function

Create an object:

```javascript
const calculator = {
    calculate(a, b, operation) {
        // your code
    }
};
```

It should support:

```javascript
calculator.calculate(10, 5, add);
calculator.calculate(10, 5, subtract);
calculator.calculate(10, 5, multiply);
```

---

### Q24. Student Result System 🔥

Create:

```javascript
const student = {
    name: "Dibyo",
    marks: [80, 90, 70],

    calculate(operation) {
        // your code
    }
};
```

Create separate functions:

```javascript
getTotal
getAverage
getHighest
```

Pass them into:

```javascript
student.calculate(...)
```

Use `this.marks` inside the object method.

---

### Q25. Final Challenge — Function Factory + Object 🔥🔥

Create:

```javascript
function createCounter(start) {

}
```

It should return an object containing:

```javascript
increment()
decrement()
getValue()
```

Example:

```javascript
let counter = createCounter(10);

console.log(counter.getValue()); // 10

counter.increment();
counter.increment();

console.log(counter.getValue()); // 12

counter.decrement();

console.log(counter.getValue()); // 11
```

### Requirements

* Use lexical scope.
* Use a variable that cannot be directly accessed from outside.
* Return an object containing methods.
* Use closures to maintain the counter value.

---

# 🎯 Recommended Order

Solve the questions in this order:

### Beginner

* Q1
* Q2
* Q3
* Q4
* Q5

### Lexical Scope

* Q6
* Q7
* Q8
* Q9

### Higher-Order Functions

* Q10
* Q11
* Q12
* Q13
* Q14

### Objects & Methods

* Q15
* Q16
* Q17

### `this`

* Q18
* Q19
* Q20

### Interview-Level Practice 🔥

* Q21
* Q22
* Q23
* Q24
* Q25

---

## 🧠 Rule

For the first attempt, **don't search for the solution**.

For every question:

1. Predict the output if applicable.
2. Write the code yourself.
3. Run it.
4. Compare your prediction with the actual result.
5. Explain *why* it happened.

The goal isn't just to make the code work — **you should be able to explain the scope chain, function behavior, and `this` in an interview.**
