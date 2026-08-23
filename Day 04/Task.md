# DOM Manipulation Practice Questions

Beginner to intermediate practice questions covering DOM selection, traversal, event handling, and element creation/removal.

## Topics Covered

- Element selection: `getElementById`, `getElementsByClassName`, `getElementsByTagName`
- Modern selection: `querySelector`, `querySelectorAll`
- Event handling: `addEventListener` (click, dblclick, mouseover, mousemove)
- Element creation: `createElement`, `appendChild`, `append`
- Element removal: `removeChild`
- Event delegation

---

## Beginner

1. Select the element with `id="header"` using two different methods, and log its `tagName` to the console.

2. Use `getElementsByClassName` to select all elements with the class `item`, then log how many elements were found.

3. Use `querySelectorAll` to select every `<p>` tag on the page and change their text color to blue.

4. Create a new `<h2>` element with the text "Welcome!" and append it to the `<body>`.

5. Select the first element with the class `.box` and change its `innerHTML` to `"Updated!"`.

6. Add a `click` event listener to a button with `id="btn"` that logs `"Button clicked"` to the console.

7. Create a `<li>` element, set its text to `"New Item"`, and append it to a `<ul>` with `id="list"`.

---

## Intermediate

8. Explain the difference between `getElementsByClassName` and `querySelectorAll` in terms of what they return (live `HTMLCollection` vs static `NodeList`).

9. Select all `<div>` elements with the class `card` and loop through them, adding a `mouseover` event listener to each that changes their background color.

10. Write code that creates a `<p>` element, adds a class to it using `classList.add`, sets its text, and appends it inside a `<div id="container">`.

11. Given a parent `<div class="wrapper">` containing a `<span>` child, remove the `<span>` using `removeChild`.

12. Add a `dblclick` event listener to an `<h1>` that toggles its text between `"Hello"` and `"Goodbye"` each time it's double-clicked.

13. Use `querySelector` to select an element by attribute (e.g. `input[type="text"]`) and log its current `value`.

14. Write a function that creates 5 `<div>` elements in a loop, gives each a unique `id` (like `box-1`, `box-2`, ...), and appends them all to a container element.

15. Add a `click` event listener to a parent `<ul>` that detects which `<li>` was clicked (event delegation) and logs its text content.

---

## Notes

- Prefer `querySelector` / `querySelectorAll` in modern code — they support full CSS selector syntax.
- `getElementsByClassName` and `getElementsByTagName` return **live** collections (auto-update when the DOM changes); `querySelectorAll` returns a **static** `NodeList`.
- Event delegation (Q15) is a key pattern for handling events on dynamically added elements efficiently.