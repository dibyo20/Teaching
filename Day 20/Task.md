# Day 20 — Advanced JavaScript: 20 Concept Practice Challenges

**Purpose:** Solidify every advanced JavaScript concept studied across Days 1–19 before moving into the full-stack roadmap (React deep-dive, Node.js, MongoDB, auth, deployment, and beyond).

These 20 challenges are **not** isolated puzzles — each one is rooted in a real concept you have already encountered. Work through them without built-in shortcuts unless the requirement explicitly allows them.

## Practice Rules

For every question:

1. Read the requirements carefully. Understand the inputs and expected outputs before writing a single line.
2. Plan your approach on paper or in a comment block first.
3. Implement the solution independently.
4. Test normal cases, edge cases, and invalid inputs.
5. Analyse time and space complexity where relevant.
6. After passing all tests, delete your solution, wait an hour, and rewrite it from scratch.

---

# Category 1: Closures & Scope

> Concepts from Days 2 & 3 — lexical scope, closures, higher-order functions, function factories.

## 1. Build a Counter Factory Using Closures

**Difficulty:** Advanced

Write a function `createCounter(start)` that uses a **closure** to maintain a private count value and returns an object with three methods.

**Usage:**

```javascript
const counter = createCounter(10);

console.log(counter.getValue());  // 10
counter.increment();
counter.increment();
console.log(counter.getValue());  // 12
counter.decrement();
console.log(counter.getValue());  // 11
counter.reset();
console.log(counter.getValue());  // 10
```

**Requirements:**
- `getValue()` — returns the current count.
- `increment()` — increases count by 1.
- `decrement()` — decreases count by 1.
- `reset()` — returns count to the original `start` value.
- The internal count variable must **not** be directly accessible from outside.
- Do not use a class — use only closures and a plain object.

---

## 2. Implement a Memoization Function

**Difficulty:** Advanced

Implement:

```javascript
function memoize(fn) {
  // Your implementation
}
```

**Usage:**

```javascript
const expensiveCalc = (a, b) => {
  console.log("Computing...");
  return a * b;
};

const memoized = memoize(expensiveCalc);

console.log(memoized(10, 20)); // Computing... 200
console.log(memoized(10, 20)); // 200   ← no "Computing..." logged
console.log(memoized(5, 10));  // Computing... 50
```

**Requirements:**
- Cache results keyed by arguments.
- Support multiple arguments — avoid naive string concatenation as the sole cache key (think about edge cases like `(1, 23)` vs `(12, 3)`).
- Do not recompute when the same arguments are seen again.
- Preserve the `this` context of the original function.

---

# Category 2: Higher-Order Functions & Functional Programming

> Concepts from Days 2, 3 — `map`, `filter`, `reduce`, function composition, callbacks.

## 3. Implement Custom Array Methods

**Difficulty:** Advanced

Add your own implementations directly to `Array.prototype`:

- `myMap(callback)`
- `myFilter(callback)`
- `myReduce(callback, initialValue)`
- `myForEach(callback)`

**Example:**

```javascript
const nums = [1, 2, 3, 4, 5];

console.log(nums.myMap(n => n * 2));        // [2, 4, 6, 8, 10]
console.log(nums.myFilter(n => n % 2 === 0)); // [2, 4]
console.log(nums.myReduce((acc, n) => acc + n, 0)); // 15
```

**Requirements:**
- Support `index` and `array` as the second and third callback arguments.
- Support `thisArg` parameter where applicable.
- Handle empty arrays correctly.
- Handle `myReduce` with and without an initial value (match native behaviour).
- Do not call the native `map`, `filter`, `reduce`, or `forEach` internally.

---

## 4. Implement Function Composition

**Difficulty:** Advanced

Create two functions:

```javascript
function compose(...fns) { /* right-to-left */ }
function pipe(...fns)    { /* left-to-right */ }
```

**Example:**

```javascript
const add5     = x => x + 5;
const double   = x => x * 2;
const subtract3 = x => x - 3;

// compose: right-to-left   →  subtract3(double(add5(10)))
const composed = compose(subtract3, double, add5);
console.log(composed(10)); // 27

// pipe: left-to-right  →  subtract3(double(add5(10)))
const piped = pipe(add5, double, subtract3);
console.log(piped(10));    // 27
```

**Requirements:**
- Accept any number of functions.
- Handle zero functions (return an identity function).
- Handle a single function.
- Support multiple arguments only for the first function called.

---

# Category 3: Array & Object Manipulation

> Concepts from Days 1, 2, 3 — objects, arrays, spread/rest, destructuring, immutability.

## 5. Deep Flatten an Array

**Difficulty:** Advanced

Write `deepFlatten(arr)` that flattens nested arrays of any depth.

**Input:**

```javascript
const arr = [1, [2, [3, 4], 5], [6, [7, [8]]]];
```

**Output:**

```javascript
[1, 2, 3, 4, 5, 6, 7, 8]
```

**Requirements:**
- Handle unlimited nesting depth.
- Do **not** use `Array.flat(Infinity)`.
- Do not mutate the original array.
- Handle empty arrays and mixed types.

---

## 6. Implement GroupBy

**Difficulty:** Advanced

Write `groupBy(array, key)` that groups an array of objects by a given property.

**Input:**

```javascript
const users = [
  { name: "John", role: "Developer" },
  { name: "Alex", role: "Designer"  },
  { name: "Sam",  role: "Developer" },
  { name: "Lisa", role: "Designer"  },
  { name: "Mike", role: "Tester"    },
];

groupBy(users, "role");
```

**Expected output:**

```javascript
{
  Developer: [{ name: "John", role: "Developer" }, { name: "Sam", role: "Developer" }],
  Designer:  [{ name: "Alex", role: "Designer"  }, { name: "Lisa", role: "Designer" }],
  Tester:    [{ name: "Mike", role: "Tester"    }]
}
```

**Requirements:**
- Accept a dynamic property name string.
- Handle items where the key is missing (group them under `"undefined"` or skip — document your choice).
- Do not mutate the original array.

---

## 7. Deep Clone an Object

**Difficulty:** Advanced

Implement `deepClone(obj)` without using `structuredClone()` or `JSON.stringify/parse`.

**Input:**

```javascript
const original = {
  name: "Dibyo",
  skills: ["JavaScript", "React"],
  address: { city: "Kolkata", country: "India" },
  joined: new Date("2024-01-01"),
};

const cloned = deepClone(original);
cloned.skills.push("Node.js");
cloned.address.city = "Delhi";
```

**After the above, `original` must remain unchanged.**

**Requirements:**
- Handle nested objects and arrays.
- Handle `Date`, `Map`, and `Set`.
- Handle circular references without infinite recursion.
- Do not use `structuredClone()` or `JSON.stringify/parse`.

---

## 8. Object Diff

**Difficulty:** Advanced

Write `objectDiff(obj1, obj2)` that returns a structured report of all differences between two objects.

**Input:**

```javascript
const obj1 = { name: "Dibyo", age: 22, address: { city: "Kolkata", pin: 700001 } };
const obj2 = { name: "Dibyo", age: 23, address: { city: "Delhi",   pin: 700001 }, email: "d@d.com" };
```

**Expected output:**

```javascript
{
  age:     { oldValue: 22,        newValue: 23 },
  address: { city: { oldValue: "Kolkata", newValue: "Delhi" } },
  email:   { oldValue: undefined, newValue: "d@d.com" }
}
```

**Requirements:**
- Compare nested objects recursively.
- Report added, deleted, and modified properties.
- Do not mutate either object.
- Define a consistent output shape for added and deleted keys.

---

# Category 4: String & Data Processing

> Concepts from Days 1, 3 — string methods, template literals, regex, destructuring.

## 9. Implement a Custom Template Engine

**Difficulty:** Advanced

Create `renderTemplate(template, data)` that replaces `{{key}}` placeholders with values from a nested data object.

**Input:**

```javascript
const template = "Hello {{user.name}}, your order {{order.id}} is confirmed. Total: {{order.total}}";

const data = {
  user:  { name: "Dibyo" },
  order: { id: 1025, total: 4999 },
};
```

**Output:**

```javascript
"Hello Dibyo, your order 1025 is confirmed. Total: 4999"
```

**Requirements:**
- Support dot-notation paths of any depth (e.g., `{{a.b.c}}`).
- Leave the placeholder as-is (or replace with an empty string — document your choice) when the path does not exist.
- Support multiple placeholders in a single template.
- Do not replace unrelated text.

---

## 10. Implement a Query String Parser

**Difficulty:** Advanced

Create `parseQueryString(url)` without using `URLSearchParams`.

**Input:**

```javascript
const url = "https://example.com/products?category=mobile&price=50000&sort=asc&tag=new&tag=sale";
```

**Output:**

```javascript
{
  category: "mobile",
  price:    "50000",
  sort:     "asc",
  tag:      ["new", "sale"]   // duplicate keys become arrays
}
```

**Requirements:**
- Handle multiple query parameters.
- Handle URL-encoded values (`%20`, `+`, etc.).
- Handle duplicate keys (collect values into an array).
- Handle missing values (e.g., `?flag=` → `""`).
- Handle an empty or missing query string (return `{}`).
- Do not use `URLSearchParams`.

---

# Category 5: Debounce, Throttle & Timers

> Concepts from Days 3, 6 — `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`.

## 11. Implement a Custom Debounce Function

**Difficulty:** Advanced

```javascript
function debounce(callback, delay) {
  // Your implementation
}
```

**Usage:**

```javascript
const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);

search("R");
search("Re");
search("Rea");
search("React");
// Only "Searching: React" is logged — 500 ms after the last call.
```

**Requirements:**
- Reset the timer on every call.
- Preserve all arguments passed to the debounced function.
- Preserve the `this` context.
- Add a `cancel()` method on the returned function that clears any pending timer.
- Return the debounced function.

---

## 12. Implement a Custom Throttle Function

**Difficulty:** Advanced

```javascript
function throttle(callback, delay) {
  // Your implementation
}
```

**Usage:**

```javascript
const handleScroll = throttle(() => {
  console.log("Scroll event triggered");
}, 1000);
```

**Requirements:**
- Execute at most once per `delay` ms interval.
- Implement **leading-edge** execution (fires immediately on first call).
- Implement **trailing-edge** execution (fires once more after the interval if called during the cooldown).
- Preserve callback arguments and `this` context.
- Add an optional `cancel()` method.

---

# Category 6: Asynchronous JavaScript & Promises

> Concepts from Days 5, 14, 17 — Axios, `async/await`, event loop, Promises.

## 13. Implement Custom Promise.all()

**Difficulty:** Advanced

```javascript
function myPromiseAll(promises) {
  // Your implementation
}
```

**Usage:**

```javascript
myPromiseAll([Promise.resolve(10), Promise.resolve(20), Promise.resolve(30)])
  .then(console.log); // [10, 20, 30]
```

**Requirements:**
- Resolve only when every input promise fulfils.
- Reject immediately when any input promise rejects.
- Preserve the original order in the result array.
- Handle non-promise values alongside promises.
- Handle an empty iterable (resolve with `[]`).
- Do **not** call native `Promise.all()` internally.

---

## 14. Implement Custom Promise.race()

**Difficulty:** Advanced

```javascript
function myPromiseRace(promises) {
  // Your implementation
}
```

**Input:**

```javascript
const p1 = new Promise(resolve => setTimeout(() => resolve("First"),  1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second"),  500));

myPromiseRace([p1, p2]).then(console.log); // "Second"
```

**Requirements:**
- Settle with the first promise that settles (fulfilled or rejected).
- Support non-promise values.
- Handle an empty iterable (the returned promise remains forever pending).
- Do **not** call native `Promise.race()` internally.

---

## 15. Build a Promise-Based Retry Mechanism

**Difficulty:** Advanced

```javascript
async function retry(operation, retries, delay) {
  // Your implementation
}
```

**Usage:**

```javascript
let attempts = 0;

async function fetchData() {
  attempts++;
  if (attempts < 3) throw new Error("Request failed");
  return "Data fetched successfully";
}

retry(fetchData, 3, 1000).then(console.log);
// "Data fetched successfully"
```

**Requirements:**
- Retry the operation when it throws or rejects.
- `retries` = total additional attempts after the first (so `retries: 3` means up to 4 total calls).
- Wait `delay` ms between each attempt.
- Return the successful result when the operation finally succeeds.
- Throw the last error when all attempts fail.

---

## 16. Build a Concurrent Task Queue with Concurrency Limit

**Difficulty:** Advanced

Create a function that runs async tasks in parallel but caps the number of simultaneously running tasks.

**Input:**

```javascript
const tasks = [
  () => fetchData(1),
  () => fetchData(2),
  () => fetchData(3),
  () => fetchData(4),
  () => fetchData(5),
];

runWithConcurrency(tasks, 2).then(console.log);
// Results in original order, with at most 2 tasks running at any time.
```

**Requirements:**
- Run at most `limit` tasks simultaneously.
- Start a new task as soon as one finishes.
- Preserve the original task order in the final results array.
- Handle task failures — define and document your policy (reject immediately, or collect per-task outcomes).
- Validate the concurrency limit (must be ≥ 1).

---

# Category 7: OOP, Classes & Design Patterns

> Concepts from Days 2, 9–17 — objects, `this`, prototypes, React components (conceptual analogy).

## 17. Build a Custom Event Emitter

**Difficulty:** Advanced

Implement your own `EventEmitter` class (similar to Node.js `EventEmitter`).

**Usage:**

```javascript
const emitter = new EventEmitter();

emitter.on("login", (user) => console.log("User logged in:", user.name));
emitter.once("firstVisit", () => console.log("Welcome, first time!"));

emitter.emit("login", { name: "Dibyo" });   // "User logged in: Dibyo"
emitter.emit("firstVisit");                 // "Welcome, first time!"
emitter.emit("firstVisit");                 // (nothing — once only fires once)
```

**Requirements:**
- `on(event, callback)` — subscribe to an event (multiple listeners allowed).
- `emit(event, ...args)` — invoke all listeners for the event with the given arguments.
- `off(event, callback)` — remove a specific listener.
- `once(event, callback)` — subscribe a one-time listener that removes itself after the first call.
- Support multiple listeners per event.
- Define how errors thrown inside listeners are handled (swallow, re-throw, or emit an `"error"` event).

---

## 18. Implement the Custom `new` Operator

**Difficulty:** Advanced

```javascript
function myNew(Constructor, ...args) {
  // Your implementation
}
```

**Usage:**

```javascript
function User(name, age) {
  this.name = name;
  this.age  = age;
}

User.prototype.greet = function () {
  return `Hello, I am ${this.name}`;
};

const user = myNew(User, "Dibyo", 22);
console.log(user.name);    // Dibyo
console.log(user.greet()); // Hello, I am Dibyo
console.log(user instanceof User); // true
```

**Requirements:**
- Create an object whose prototype is `Constructor.prototype`.
- Call the constructor with the new object as `this`.
- Pass all additional arguments to the constructor.
- Return the constructor's explicit return value if it is an object; otherwise return the new object.
- Throw a `TypeError` if `Constructor` is not a function.

---

## 19. Build a Stack and Queue Using Classes

**Difficulty:** Advanced

Implement two classes:

```javascript
class Stack {
  push(value) {}
  pop()       {}
  peek()      {}
  isEmpty()   {}
  size()      {}
  toArray()   {}
}

class Queue {
  enqueue(value) {}
  dequeue()      {}
  front()        {}
  isEmpty()      {}
  size()         {}
  toArray()      {}
}
```

**Requirements:**
- Implement using JavaScript classes (not plain objects).
- `pop()` / `dequeue()` on an empty structure should throw a descriptive error (or return `undefined` — document your choice).
- `peek()` / `front()` returns the top/front element without removing it.
- `size()` runs in O(1) — maintain a count variable.
- `toArray()` returns a copy of internal elements in insertion order.
- For `Queue`, implement dequeue in amortised O(1) using a head-pointer approach (avoid repeatedly shifting the entire underlying array on every dequeue).

---

## 20. Build a Pub/Sub (Observer) System

**Difficulty:** Advanced

Build a reusable `PubSub` class that enables decoupled component communication — the same pattern used under the hood by React's context and Redux's store.

**Usage:**

```javascript
const pubsub = new PubSub();

const unsubscribe = pubsub.subscribe("notification", (data) => {
  console.log("Received:", data.message);
});

pubsub.subscribe("notification", (data) => {
  console.log("Second handler:", data.message);
});

pubsub.publish("notification", { message: "New order placed!" });
// Received: New order placed!
// Second handler: New order placed!

unsubscribe();

pubsub.publish("notification", { message: "Second publish" });
// Second handler: Second publish   ← first subscriber was removed
```

**Requirements:**
- `subscribe(event, callback)` — registers a subscriber and returns an `unsubscribe()` function.
- `publish(event, data)` — calls every active subscriber for the event with `data`.
- `unsubscribeAll(event)` — removes all subscribers for a given event.
- Support multiple subscribers per event.
- Support multiple independent event channels.
- Calling `unsubscribe()` after it has already been called should be a no-op.

---

# Recommended Practice Order

| Phase | Questions | Focus Area |
|-------|-----------|------------|
| 1 | 1–2   | Closures & memoization |
| 2 | 3–4   | Functional programming |
| 3 | 5–8   | Array & object manipulation |
| 4 | 9–10  | String & data processing |
| 5 | 11–12 | Debounce & throttle |
| 6 | 13–16 | Promises & async |
| 7 | 17–20 | OOP & design patterns |

---

# Completion Checklist

Track your progress as you solve each question.

## Category 1 — Closures & Scope
- [ ] 1. Counter Factory Using Closures
- [ ] 2. Memoization Function

## Category 2 — Higher-Order Functions & Functional Programming
- [ ] 3. Custom Array Methods (myMap, myFilter, myReduce, myForEach)
- [ ] 4. Function Composition (compose & pipe)

## Category 3 — Array & Object Manipulation
- [ ] 5. Deep Flatten an Array
- [ ] 6. GroupBy
- [ ] 7. Deep Clone an Object
- [ ] 8. Object Diff

## Category 4 — String & Data Processing
- [ ] 9. Custom Template Engine
- [ ] 10. Query String Parser

## Category 5 — Debounce, Throttle & Timers
- [ ] 11. Debounce Function
- [ ] 12. Throttle Function

## Category 6 — Asynchronous JavaScript & Promises
- [ ] 13. Custom Promise.all()
- [ ] 14. Custom Promise.race()
- [ ] 15. Promise Retry Mechanism
- [ ] 16. Concurrent Task Queue

## Category 7 — OOP, Classes & Design Patterns
- [ ] 17. Custom Event Emitter
- [ ] 18. Custom `new` Operator
- [ ] 19. Stack & Queue Classes
- [ ] 20. Pub/Sub (Observer) System

---

# Advanced JavaScript Concepts Covered in These 20 Challenges

| # | Concept |
|---|---------|
| 1 | **Closures** — private state via lexical scope |
| 2 | **Memoization** — caching results with closures |
| 3 | **Prototype extension** — adding methods to `Array.prototype` |
| 4 | **Function composition / pipe** — combining functions |
| 5 | **Recursion** — deep array flattening |
| 6 | **`Array.reduce`** pattern — groupBy transformation |
| 7 | **Deep cloning** — handling nested structures, Dates, Maps, Sets, circular refs |
| 8 | **Recursive object diffing** — structural comparison |
| 9 | **Template literals / regex** — custom string interpolation engine |
| 10 | **URL parsing / string processing** — query string without URLSearchParams |
| 11 | **Debounce** — `setTimeout` / `clearTimeout` pattern |
| 12 | **Throttle** — leading + trailing edge timer control |
| 13 | **Promise internals** — reimplementing `Promise.all` |
| 14 | **Promise internals** — reimplementing `Promise.race` |
| 15 | **`async/await` + error handling** — retry with delay |
| 16 | **Concurrency control** — task queue with max parallelism |
| 17 | **Observer pattern** — EventEmitter with `on/off/once/emit` |
| 18 | **Prototype chain** — reimplementing the `new` operator |
| 19 | **Data structures** — Stack & Queue with class syntax |
| 20 | **Pub/Sub pattern** — decoupled event-driven architecture |

---

# Expected Learning Outcomes

After completing all 20 challenges you should be able to:

- Explain and use **closures** to build stateful functions and factory patterns.
- Write **reusable higher-order functions** from scratch.
- Manipulate **nested objects and arrays** deeply and immutably.
- Parse and transform **strings and URLs** using only core JavaScript.
- Implement **debounce** and **throttle** — patterns you will use in every real frontend project.
- Understand **how Promises work internally** — which will make `async/await` and API error handling in React and Node.js far less mysterious.
- Control **concurrency** — a key backend skill for Express route handlers.
- Build **event-driven systems** — the foundation of React's synthetic event system, Node.js, and Socket.IO.
- Understand **the prototype chain** — which explains how JavaScript classes, `extends`, `super`, and `instanceof` work.

## Final Recommendation

Complete these 20 questions **before** moving into the next phase of the roadmap (Context API, authentication, Redis, JWT, and Redux).  
Pay special attention to **Questions 11–20** — they form the conceptual backbone of React internals, Node.js event-driven I/O, Express middleware design, and production-level JavaScript.

> You do not need to memorise every obscure edge case, but you **must** be able to implement each concept independently, explain your reasoning clearly, and test your solution against edge cases.
