# 20 Advanced JavaScript Coding Practice Questions

**Goal:** Strengthen core JavaScript problem-solving before moving into
the next development phases, including advanced frontend development,
React, and backend engineering.

These challenges focus on writing complete JavaScript solutions from
scratch. Avoid external libraries and built-in shortcuts where the
requirements prohibit them.

## Practice Guidelines

For every question:

1.  Understand the requirements, inputs, and expected outputs.
2.  Plan the approach before writing code.
3.  Implement the solution independently.
4.  Test normal cases, edge cases, and invalid inputs where applicable.
5.  Analyze time and space complexity.
6.  Rebuild the solution later without referring to your original code.

------------------------------------------------------------------------

# Category 1: Array & Object Manipulation

Focus: Higher-order functions, nested data structures, immutability,
object references, and complex transformations.

## 1. Deep Flatten an Array

**Difficulty:** Advanced

Write a function `deepFlatten(arr)` that flattens an array containing
nested arrays of any depth.

**Input:**

``` javascript
const arr = [1, [2, [3, 4], 5], [6, [7, [8]]]];
```

**Output:**

``` javascript
[1, 2, 3, 4, 5, 6, 7, 8]
```

**Requirements:** - Handle unlimited nesting. - Do not use
`Array.flat(Infinity)`. - Do not mutate the original array. - Handle
empty nested arrays.

## 2. Implement GroupBy

**Difficulty:** Advanced

Write a function `groupBy(array, key)` that groups objects based on a
particular property.

**Input:**

``` javascript
const users = [
  { name: "John", age: 22, role: "Developer" },
  { name: "Alex", age: 25, role: "Designer" },
  { name: "Sam", age: 22, role: "Developer" },
  { name: "Lisa", age: 25, role: "Designer" },
  { name: "Mike", age: 22, role: "Tester" }
];

groupBy(users, "role");
```

**Expected output:**

``` javascript
{
  Developer: [
    { name: "John", age: 22, role: "Developer" },
    { name: "Sam", age: 22, role: "Developer" }
  ],
  Designer: [
    { name: "Alex", age: 25, role: "Designer" },
    { name: "Lisa", age: 25, role: "Designer" }
  ],
  Tester: [
    { name: "Mike", age: 22, role: "Tester" }
  ]
}
```

**Requirements:** - Handle dynamic property names. - Handle missing
properties. - Do not mutate the original array.

## 3. Deep Clone an Object

**Difficulty:** Advanced

Implement your own `deepClone(obj)` function.

**Input:**

``` javascript
const original = {
  name: "Dibyo",
  skills: ["JavaScript", "React"],
  address: {
    city: "Kolkata",
    country: "India"
  }
};

const cloned = deepClone(original);
```

**Requirements:** - Nested objects must be independently cloned. -
Nested arrays must be cloned. - Modifying the clone must not affect the
original. - Handle `Date`, `Map`, and `Set`. - Handle circular
references. - Do not use `structuredClone()` or JSON stringify/parse.

## 4. Implement Custom Array Methods

**Difficulty:** Advanced

Implement your own versions of:

-   `myMap()`
-   `myFilter()`
-   `myReduce()`
-   `myForEach()`

**Example:**

``` javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.myMap(num => num * 2);

console.log(result);
```

**Output:**

``` javascript
[2, 4, 6, 8, 10]
```

**Requirements:** - Support callback functions. - Support the `thisArg`
parameter where applicable. - Handle empty arrays. - Handle `reduce()`
with and without an initial value. - Follow native method behavior for
sparse arrays.

------------------------------------------------------------------------

# Category 2: String Manipulation & Data Processing

Focus: Real-world data transformation, parsing, validation, and string
processing.

## 5. Implement a Custom Template Engine

**Difficulty:** Advanced

Create a function `renderTemplate(template, data)` that replaces
placeholders with corresponding object values.

**Input:**

``` javascript
const template = "Hello {{user.name}}, your order {{order.id}} is confirmed.";

const data = {
  user: {
    name: "Dibyo"
  },
  order: {
    id: 1025
  }
};
```

**Output:**

``` javascript
"Hello Dibyo, your order 1025 is confirmed."
```

**Requirements:** - Support nested object properties. - Handle missing
properties. - Support multiple placeholders. - Do not replace unrelated
text.

## 6. Implement a Query String Parser

**Difficulty:** Advanced

Create your own `parseQueryString(url)` function.

**Input:**

``` javascript
const url = "https://example.com/products?category=mobile&price=50000&sort=asc";
```

**Output:**

``` javascript
{
  category: "mobile",
  price: "50000",
  sort: "asc"
}
```

**Requirements:** - Handle multiple query parameters. - Handle URL
encoding. - Handle duplicate keys. - Handle missing values. - Handle
empty query strings.

Define and document how your parser represents duplicate keys.

## 7. Implement a Deep Object Search

**Difficulty:** Advanced

Write a function that searches for a particular value inside a deeply
nested object or array.

**Input:**

``` javascript
const data = {
  user: {
    profile: {
      name: "Dibyo",
      skills: ["JavaScript", "React", "Node.js"]
    }
  },
  projects: [
    { name: "Clicksy", tech: ["React", "MongoDB"] },
    { name: "NexGear", tech: ["Node.js", "Redis"] }
  ]
};
```

**Function call:**

``` javascript
deepSearch(data, "Redis");
```

**Output:**

``` javascript
true
```

**Requirements:** - Search recursively. - Handle nested arrays and
objects. - Return `false` if the value does not exist. - Avoid infinite
recursion with circular references.

## 8. Implement Object Diff

**Difficulty:** Advanced

Create a function `objectDiff(obj1, obj2)` that identifies the
differences between two objects.

**Input:**

``` javascript
const obj1 = {
  name: "Dibyo",
  age: 22,
  address: {
    city: "Kolkata",
    pin: 700001
  }
};

const obj2 = {
  name: "Dibyo",
  age: 23,
  address: {
    city: "Delhi",
    pin: 700001
  }
};
```

**Expected output:**

``` javascript
{
  age: {
    oldValue: 22,
    newValue: 23
  },
  address: {
    city: {
      oldValue: "Kolkata",
      newValue: "Delhi"
    }
  }
}
```

**Requirements:** - Compare nested objects recursively. - Identify added
properties. - Identify deleted properties. - Identify modified
properties. - Do not mutate either object. - Define a consistent output
representation for added and deleted properties.

------------------------------------------------------------------------

# Category 3: Functions, Closures & Advanced JavaScript

Focus: Closures, lexical scope, higher-order functions, function
composition, and execution context.

## 9. Implement a Custom Debounce Function

**Difficulty:** Advanced

Implement:

``` javascript
function debounce(callback, delay) {
  // Your implementation
}
```

**Usage:**

``` javascript
const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);

search("R");
search("Re");
search("Rea");
search("React");
```

**Expected behavior:**

Only execute the callback after the user stops invoking the function for
500 milliseconds.

**Requirements:** - Reset the timer on every call. - Preserve
arguments. - Preserve the `this` context. - Return a usable debounced
function. - Add optional `cancel()` functionality.

## 10. Implement a Custom Throttle Function

**Difficulty:** Advanced

Implement:

``` javascript
function throttle(callback, delay) {
  // Your implementation
}
```

**Usage:**

``` javascript
const handleScroll = throttle(() => {
  console.log("Scroll event triggered");
}, 1000);
```

**Requirements:** - Execute at most once per interval. - Preserve
callback arguments. - Preserve the `this` context. - Add optional
`cancel()` functionality. - Understand and implement leading and
trailing execution.

## 11. Implement Function Composition

**Difficulty:** Advanced

Create a function `compose()` that executes multiple functions from
right to left.

**Input:**

``` javascript
const add = x => x + 5;
const multiply = x => x * 2;
const subtract = x => x - 3;

const result = compose(subtract, multiply, add);

console.log(result(10));
```

**Output:**

``` javascript
27
```

**Execution:**

``` text
10 + 5 = 15
15 * 2 = 30
30 - 3 = 27
```

**Requirements:** - Support any number of functions. - Handle a single
function. - Handle zero functions (identity function). - Support
multiple arguments for the rightmost function.

## 12. Implement a Custom Memoization Function

**Difficulty:** Advanced

Implement:

``` javascript
function memoize(callback) {
  // Your implementation
}
```

**Usage:**

``` javascript
const expensiveCalculation = (a, b) => {
  console.log("Calculating...");
  return a * b;
};

const memoized = memoize(expensiveCalculation);

console.log(memoized(10, 20));
console.log(memoized(10, 20));
console.log(memoized(5, 10));
```

**Expected behavior:** - First call: Calculate and cache the result. -
Second call with the same arguments: Return the cached result. -
Different arguments: Calculate again.

**Requirements:** - Support multiple arguments. - Avoid basic
string-concatenation cache keys. - Preserve the `this` context. - Handle
object arguments thoughtfully. Define whether object keys use identity
or deep equality.

------------------------------------------------------------------------

# Category 4: Asynchronous JavaScript & Promises

Focus: Event loop, promises, async/await, concurrency, and error
handling.

## 13. Implement Custom Promise.all()

**Difficulty:** Advanced

Implement your own version of `Promise.all()`.

``` javascript
function myPromiseAll(promises) {
  // Your implementation
}
```

**Usage:**

``` javascript
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

myPromiseAll([p1, p2, p3])
  .then(console.log);
```

**Output:**

``` javascript
[10, 20, 30]
```

**Requirements:** - Resolve only when all inputs fulfill. - Reject when
any input rejects. - Preserve original input order. - Handle normal
values alongside promises. - Handle empty iterables. - Use the Promise
constructor and `Promise.resolve()`; do not call native `Promise.all()`
internally.

## 14. Implement Promise.race()

**Difficulty:** Advanced

Implement:

``` javascript
function myPromiseRace(promises) {
  // Your implementation
}
```

**Input:**

``` javascript
const p1 = new Promise(resolve =>
  setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise(resolve =>
  setTimeout(() => resolve("Second"), 500)
);

myPromiseRace([p1, p2])
  .then(console.log);
```

**Output:**

``` javascript
"Second"
```

**Requirements:** - Settle with whichever input settles first, whether
fulfilled or rejected. - Support non-promise values. - Handle an empty
iterable correctly (the returned promise remains pending). - Do not call
native `Promise.race()` internally.

## 15. Build a Promise-Based Retry Mechanism

**Difficulty:** Advanced

Create a function that retries an asynchronous operation if it fails.

``` javascript
async function retry(operation, retries, delay) {
  // Your implementation
}
```

**Usage:**

``` javascript
let attempts = 0;

async function fetchData() {
  attempts++;

  if (attempts < 3) {
    throw new Error("Request failed");
  }

  return "Data fetched successfully";
}

retry(fetchData, 3, 1000)
  .then(console.log);
```

**Expected output:**

``` javascript
"Data fetched successfully"
```

**Requirements:** - Retry when an operation fails. - Support a
configurable retry count. - Support delay between attempts. - Return the
successful result. - Throw the final error when all attempts fail. -
Clearly define whether `retries` means total attempts or additional
retries.

## 16. Build a Concurrent Task Scheduler

**Difficulty:** Advanced

Create a task scheduler that executes asynchronous tasks with a maximum
concurrency limit.

**Input:**

``` javascript
const tasks = [
  () => fetchData(1),
  () => fetchData(2),
  () => fetchData(3),
  () => fetchData(4),
  () => fetchData(5)
];

runWithConcurrency(tasks, 2);
```

**Requirements:** - Execute at most two tasks simultaneously. - Start a
new task whenever one finishes. - Preserve the original task order in
the result. - Handle task failures with a clearly defined policy (reject
immediately or collect per-task outcomes). - Do not execute all tasks
simultaneously. - Validate the concurrency limit.

------------------------------------------------------------------------

# Category 5: JavaScript Classes & Object-Oriented Programming

Focus: Prototypes, inheritance, encapsulation, and reusable
architecture.

## 17. Build a Custom Event Emitter

**Difficulty:** Advanced

Implement your own event emitter.

**Usage:**

``` javascript
const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(user);
});

emitter.emit("login", {
  name: "Dibyo"
});
```

**Requirements:** - `on(event, callback)` - `emit(event, ...args)` -
`off(event, callback)` - `once(event, callback)` - Support multiple
listeners. - Remove listeners correctly. - Define how listener errors
are handled.

## 18. Build a Custom Stack and Queue Class

**Difficulty:** Advanced

Implement two classes:

``` javascript
class Stack {
  push(value) {}
  pop() {}
  peek() {}
  isEmpty() {}
  size() {}
}

class Queue {
  enqueue(value) {}
  dequeue() {}
  front() {}
  isEmpty() {}
  size() {}
}
```

**Requirements:** - Implement using JavaScript classes. - Handle empty
structures. - Maintain the correct size. - Ensure operations behave
correctly. - Avoid inefficient queue operations such as repeatedly
shifting every remaining element.

## 19. Implement a Custom `new` Operator

**Difficulty:** Advanced

Implement:

``` javascript
function myNew(Constructor, ...args) {
  // Your implementation
}
```

**Usage:**

``` javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const user = myNew(User, "Dibyo", 22);

console.log(user.name);
console.log(user.greet());
```

**Output:**

``` text
Dibyo
Hello Dibyo
```

**Requirements:** - Create an object using the constructor's
prototype. - Invoke the constructor with the correct `this`. - Pass
constructor arguments. - Respect the constructor's explicit
object/function return value. - Handle invalid constructor inputs
appropriately.

## 20. Build a Custom Observable / Pub-Sub System

**Difficulty:** Advanced

Build a reusable Pub/Sub system that allows multiple components to
communicate without directly depending on each other.

**Usage:**

``` javascript
const pubsub = new PubSub();

const unsubscribe = pubsub.subscribe("notification", (data) => {
  console.log(data);
});

pubsub.publish("notification", {
  message: "New message received"
});

unsubscribe();
```

**Requirements:** - `subscribe(event, callback)` -
`publish(event, data)` - Return an `unsubscribe()` function from
`subscribe()`. - Support multiple subscribers. - Support multiple event
types. - Ensure unsubscribed callbacks are not executed.

------------------------------------------------------------------------

# Recommended Practice Order

  Phase     Questions Focus
  ------- ----------- ------------------------------------
  1              1--4 Array & object manipulation
  2              5--8 String & data processing
  3             9--12 Closures & functional programming
  4            13--16 Promises & asynchronous JavaScript
  5            17--20 Classes & architecture

# Completion Checklist

Track your progress as you solve each question.

## Category 1: Array & Object Manipulation

-   [ ] 1. Deep Flatten an Array
-   [ ] 2. Implement GroupBy
-   [ ] 3. Deep Clone an Object
-   [ ] 4. Implement Custom Array Methods

## Category 2: String & Data Processing

-   [ ] 5. Custom Template Engine
-   [ ] 6. Query String Parser
-   [ ] 7. Deep Object Search
-   [ ] 8. Object Diff

## Category 3: Functions & Closures

-   [ ] 9. Debounce
-   [ ] 10. Throttle
-   [ ] 11. Function Composition
-   [ ] 12. Memoization

## Category 4: Asynchronous JavaScript

-   [ ] 13. Custom Promise.all()
-   [ ] 14. Custom Promise.race()
-   [ ] 15. Promise Retry Mechanism
-   [ ] 16. Concurrent Task Scheduler

## Category 5: OOP & Architecture

-   [ ] 17. Custom Event Emitter
-   [ ] 18. Stack & Queue Classes
-   [ ] 19. Custom `new` Operator
-   [ ] 20. Observable / Pub-Sub System

------------------------------------------------------------------------

# Expected Learning Outcomes

After completing these 20 challenges, you should be more comfortable
with:

-   Complex array and object transformations.
-   Writing reusable JavaScript utility functions.
-   Closures and higher-order functions.
-   Debouncing, throttling, and memoization.
-   Promise implementation and asynchronous workflows.
-   Concurrency control and error handling.
-   JavaScript prototypes and inheritance.
-   Event-driven architecture and Pub/Sub.

## Final Recommendation

Complete these 20 questions before moving into the next development
phase. Pay particular attention to Questions 9--20 because they build
important foundations for React internals, API handling, backend
development, and production-level JavaScript.

You do not need to master every obscure JavaScript feature, but you
should be able to implement these concepts independently, explain your
approach, and test your solutions against edge cases.
